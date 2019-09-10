// import { Link } from "gatsby"
import PropTypes from "prop-types"
import React, {useState, useEffect} from "react"
import NavBar from './NavBar'
import loadingBarsImg from '../assets/img/loading-bars.svg'

const Header = ({ siteTitle }) => {

  const [isLoading, setIsloading] = useState(true)
  const [showSearch, setShowSearch] = useState(false)
  const [value, setValue] = useState({inputSearch: ""})
  useEffect(() => setIsloading(false), [])


  // <div id="page-top" class="index  pace-done">

  // set data
  var navbar = {};
  navbar.brand = 
    {linkTo: "#", text: "React Bootstrap Navbar"};
  navbar.links = [
    {linkTo: "#", text: "Link 1"},
    {linkTo: "#", text: "Link 2"},
    {dropdown: true, text: "Dropdown", links: [
      {linkTo: "#", text: "Dropdown Link 1"},
      {linkTo: "#", text: "Dropdown Link 2", active: true}
    ]},
    {dropdown: true, text: "Dropdown2", links: [
      {linkTo: "#", text: "Dropdown2.1 Link 1"},
      {linkTo: "#", text: "Dropdown2.2 Link 2", active: true}
    ]}
  ];

  const setShowSearchHandler = () => {
    console.log("CCCCCCC")
    setShowSearch(true)
  }

  const closeModal = (event) => {
    console.log("CLOSEEEEE", event.cancelBubble)
    event.stopPropagation()
    event.cancelBubble = false
    setShowSearch(false)
  }
  const doSearch = (event) => {
    event.stopPropagation()
    console.log("SEARCHHHH", value.inputSearch)

    // event.preventDefault();
    // return false;
  }

  const onChangeEventHandler = (event) => {
    const { value } = event.target
    setValue({inputSearch: value})
  }

  return (
    <div>
      {/* Navigation -*/}
      {/*<NavBar {...navbar}/>*/}
      <NavBar setShowSearch={setShowSearchHandler}/>

      { isLoading &&
        <div className="preloader">
          <div className="preloader-img">
            <img src={loadingBarsImg} width="100" alt="Loading icon" />
          </div>
        </div>        
      }
      { showSearch &&
        <div id="search-wrapper" className="open" onClick={closeModal}>
          <button type="button" className="close" >×</button>
          <form>
            <input type="search" value={value.inputSearch} placeholder="type keyword(s) here" onClick={event => event.stopPropagation()} onChange={onChangeEventHandler} />
            <input type="button" value="Search" className="btn btn-primary" onClick={event => doSearch(event)} />
          </form>
        </div>
      }
    </div>
  )
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
