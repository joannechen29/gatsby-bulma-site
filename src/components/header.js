import React from 'react'
import Link from 'gatsby-link'
import logo from "./logo.png"


import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Header = ({ siteTitle }) => (

  <nav className="navbar" role="navigation" aria-label="main navigation">
  <div className="navbar-brand">
    
      <Link to="/">
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
    <div className="navbar-start">
     

    </div>

    <div className="navbar-end">
     
<a className="  is-uppercase ">
          <Link
           className="navbar-item has-text-dark "
            to="/"
            replace
          >
            Work
          </Link>
        </a>
        <a className=" is-uppercase ">
          <Link
            className="navbar-item has-text-dark   "
            to="/about"
            replace
          >
            About
          </Link>
        </a>


    </div>
  </div>
</nav>
)

export default Header
