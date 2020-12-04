import React from 'react'
import Logo from '../robinhood.svg'
import SearchIcon from '@material-ui/icons/Search';
import { BrowserRouter as Router, Link } from "react-router-dom";
import '../Styles/Header.css'

function Header() {
  return (
    <div className="header_wrapper">
      {/* logo */}
      <div className="header_logo">
        <img src={Logo} width={25} alt="" />
      </div>
      {/* search */}
      <div className="header_search">
        <div className="header_searchContainer">
          <SearchIcon />
          <input type="text" placeholder="Search Stocks..."/>
        </div>
      </div>
      {/* menu items */}
      <div className="header_menuItems">
        <Router>
          <Link to="#">
            <p>Free Stocks</p>
          </Link>
          <Link to="#">
            <p>Portfolio</p>
          </Link>
          <Link to="#">
          <p>Cash</p>
          </Link>
          <Link to="#">
          <p>Messages</p>
          </Link>
          <Link to="#">
          <p>Account</p>
          </Link>
        </Router>
      </div>
    </div>
  )
}

export default Header
