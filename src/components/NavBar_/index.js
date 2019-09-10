import React, { useState } from 'react'

// create classes
const NavBar = (props) => {
  return(
    <nav className="navbar navbar-inverse bounceInDown">
      <div className="container-fluid">
        <div className="navbar-header">
          <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar-collapse" aria-expanded="false">
            <span className="sr-only">Toggle navigation</span>
            <span className="icon-bar"></span>
            <span className="icon-bar"></span>
            <span className="icon-bar"></span>
          </button>
          <NavBrand linkTo={props.brand.linkTo} text={props.brand.text} />
        </div>
        <div className="collapse navbar-collapse" id="navbar-collapse">
          <NavMenu links={props.links} />
        </div>
      </div>
    </nav>
  );
}

const NavBrand = (props) => {
  return (
    <a className="navbar-brand" href={props.linkTo}>{props.text}</a>
  ); 
}

const NavMenu = (props) => {

  const [open, setOpen ] = useState(2)
  const setOpenHandler= (idx) => {
    // event.persist()
    console.log("ssss", idx)
    setOpen(idx)
  }

  const toggleDropdown = (idx) => {
    console.log("HHHHH", idx)
    if (open === idx) {
      setOpen(null)  
    } else {
      setOpen(idx)
    }
  }

  var links = props.links.map((link, idx) => {
    // console.log("NAV", idx, open, open === idx)
    if(link.dropdown) {
      return (
        <NavLinkDropdown key={idx} links={link.links} text={link.text} active={link.active} open={open === idx ? true : false} setOpen={() => toggleDropdown(idx)} />
      );
    } else {
      return (
        <NavLink key={idx} linkTo={link.linkTo} text={link.text} active={link.active} open={open === idx ? true : false} setOpen={() => toggleDropdown(idx)} />
      );
    }
  })
  return (
    <ul className="nav navbar-nav">
      {links}
    </ul>
  );
}

const NavLinkDropdown = (props) => {
  console.log("OPEN", props.open)
  var active = false;
  var links = props.links.map((link, idx) => {
    if(link.active){
      active = true;
    }
    return (
      <NavLink key={idx} linkTo={link.linkTo} text={link.text} active={link.active} />
    );
  });
  return (
    <li className={`dropdown ${active ? "active" : ""} ${props.open ? 'open' : ''}`} onClick={props.setOpen}>
      <a href="#" className="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">
        {props.text}
        <span className="caret"></span>
      </a>
      <ul className="dropdown-menu">
        {links}
      </ul>
    </li>
  );
}

const NavLink = (props) => {
  return(
    <li className={(props.active ? "active" : "")} onClick={props.setOpen}><a href={props.linkTo}>{props.text}</a></li>
  );
}

export default NavBar