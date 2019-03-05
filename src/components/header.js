import React from 'react'
import Link from 'gatsby-link'
import logo from "./logo.png"


import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Header = ({ siteTitle }) => (

  <nav className="navbar" role="navigation" aria-label="main navigation">
   
    
  <div className="navbar-brand">
    
  <Link to="/"
            replace>
        <img src={logo} alt="Logo" className="logo" />
      </Link>
  
    
    <a
          role="button"
          className="navbar-burger burger"
          aria-label="menu"
          aria-expanded="false"
          data-target="navbarBasicExample"
          onClick={() => {
            var burger = document.querySelector('.burger')
            var nav = document.querySelector('#navbarBasicExample')
            burger.classList.toggle('is-active')
            nav.classList.toggle('is-active')
          }}
        >
      <span aria-hidden="true"></span>
      <span aria-hidden="true"></span>
      <span aria-hidden="true"></span>
    </a>
  </div>

  <div id="navbarBasicExample" className="navbar-menu">


    <div className="navbar-end">
          

    <div className="navbar-item has-dropdown is-hoverable">
  <a className="navbar-link is-arrowless">
  <Link
           className="navbar-item has-text-dark  is-uppercase  "
            to="/"
            replace
          >
            Work
          </Link>
  </a>
  <div className="navbar-dropdown">
    <a className="navbar-item">
    <Link
          className="has-text-grey"
            to="/greenroom"
            replace
          >
            Greenroom
          </Link>
    </a>
    <a className="navbar-item">
    <Link
           className="has-text-grey"
            to="/vincitable"
            replace
          >
            Vincitable
          </Link>
    </a>
    <a className="navbar-item">
    <Link
           className="has-text-grey"
            to="/levooya"
            replace
          >
            Levooya
          </Link>
    </a>
    <a className="navbar-item">
    <Link
           className="has-text-grey"
            to="/namefluffy"
            replace
          >
            Name my fluffy friend
          </Link>
    </a>
    
  </div>
</div>
   
     
          <Link
            className="navbar-item has-text-dark  is-uppercase  "
            to="/about"
            replace
          >
            About
          </Link>
        


    </div>
  </div>
</nav>
)

export default Header
