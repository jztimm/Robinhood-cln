import React from 'react'
import Logo from '../robinhood.svg'
import SearchIcon from '@material-ui/icons/Search';

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
          <input type="text" placeholder="Search Stocks..."/>
          <SearchIcon color="#ffff"/>
        </div>
      </div>
      {/* menu items */}
      <div className="header_menuItems">

      </div>
    </div>
  )
}

export default Header
