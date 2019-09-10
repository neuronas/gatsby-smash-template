import React, { useState, useEffect } from 'react'
import { Link } from "gatsby"
import { CSSTransition } from 'react-transition-group'

const NavBar = (props) => {

  const menu = [
    {
      type: "dropdown", 
      title: "Home",
      links: [
        {name: "Home Full", to: "/"},
        {name: "Home Video", to: "/index-video"},
        {name: "Home One Pager", to: "/index-onepager"},
        {name: "Home Coming Soon", to: "/index-coming-soon"},
      ]
    },
    {
      type: "dropdown",
      title: "Posts",
      links: [
        {name: "Single Post", to: "/single-post"},
        {name: "Single Post Fullwidth", to: "/single-post-fullwidth"},
        {name: "Single Post Video", to: "/single-post-video"},
        {name: "Single Post Gallery", to: "/single-post-gallery"},
        {name: "Single Post Gallery Fullwidth", to: "/single-post-gallery-fullwidth"},
      ]
    },
    {
      type: "dropdown",
      title: "Category",
      links: [
        {name: "Category Archive", to: "/category-archive"},
        {name: "Category Archive 2 Columns", to: "/category-archive-2-col"},
        {name: "Category Fullwidth", to: "/category-archive-3-col-fullwidth"},
      ]
    },
    {
      type: "dropdown",
      title: "Portfolio",
      links: [
        {name: "Single Portfolio", to: "/single-portfolio"},
        {name: "Single Portfolio Gallery", to: "/single-portfolio-gallery"},
        {name: "Single Portfolio Video", to: "/single-portfolio-video"},
        {name: "Filterable Portfolio 3 Columns", to: "/filterable-portfolio-3-col"},
        {name: "Filterable Portfolio 4 Columns", to: "/filterable-portfolio-4-col"},
      ]
    },
    {
      type: "dropdown",
      title: "Pages",
      links: [
        {name: "404", to: "/404"}
      ]
    },
    {
      type: "search",
      link: {
        name: `<i className="pe-7s-search"></i>`,
        to: "#search"
      }
    }
  ]
    
  return (
    <nav className="navbar navbar-default navbar-shrink bounceInDown" data-wow-delay="2s">
      <div className="container">
        {/* Brand and toggle get grouped for better mobile display */}
        <div className="navbar-header page-scroll">
            <button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1">
                <span className="sr-only">Toggle navigation</span>
                <span className="icon-bar"></span>
                <span className="icon-bar"></span>
                <span className="icon-bar"></span>
            </button>
            <button className="navbar-brand" href="index.html">Smash</button>
        </div>

        {/* Collect the nav links, forms, and other content for toggling */}
        <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
            <Ul menu={menu} setShowSearch={props.setShowSearch}/>
        </div>
        {/* /.navbar-collapse */}
      </div>
      {/* /.container-fluid */}
    </nav>
  )
}


const Ul = (props) => {
  console.log("1111", props)
  const [open, setOpen ] = useState(false)

  const toggleDropdown = (idx) => {
    if (open === idx) {
      setOpen(false)  
    } else {
      setOpen(idx)
    }
  }

  return (
    <ul className="nav navbar-nav navbar-right">
      {
        props.menu.map((item, idx) => {
          const isDropdown = item.type === "dropdown" ? true : false
          return isDropdown ? (
            <Li key={idx} dropdown={isDropdown} item={item} toggleDropdown={() => toggleDropdown(idx)} open={open === idx ? true : false}/>
          ) : (
            <li key={idx}>
              <a href={item.link.to} onClick={props.setShowSearch}><i className="pe-7s-search"></i></a>
            </li>
          )
        })
      }
    </ul>
  )
}

const Li = (props) => {
  const { dropdown, item, toggleDropdown, open } = props
  const [waitAnimation, setWaitAnimation] = useState(false)

  useEffect(() => {
    if (open) {
      setWaitAnimation(true)
    }
  }, [open])

  return (
    <li className={`${dropdown ? 'dropdown' : ''} ${open || waitAnimation ? 'open' : ''}`} onClick={() => toggleDropdown()} >
      <button className="dropdown-toggle" data-hover="dropdown" data-toggle="dropdown">{item.title}<span className="caret"></span></button>
      
      <CSSTransition in={open} timeout={800} classNames="example" onExited={() => setWaitAnimation(false)}>
        <ul className="dropdown-menu" role="menu">
          {
            props.item.links.map((link, idx) => (
              <li key={idx}>
                <Link to={link.to}>{link.name}</Link>
              </li>
            ))
          }
        </ul>
      </CSSTransition>

    </li>
  )
}

export default NavBar