import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'

import Header from '../components/header'
import './index.scss'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'




const Layout = ({ children, data }) => (
  <div>
    <Helmet
      title={data.site.siteMetadata.title}
      meta={[
        { name: 'description', content: 'Sample' },
        { name: 'keywords', content: 'sample, something' },
      ]}
    />
    <Header siteTitle={data.site.siteMetadata.title} />

    <section className="section">
      <div className="container">
        {children()}
      </div>
    </section>

    <footer className="footer has-background-white ">
    
  <div className="content has-text-centered">

  
    <p className="has-text-centered ">
    Copyright © 2019 by Joanne Chen
    </p>
   
    <span className="icon is-large fa-lg" >
      <a href="https://www.linkedin.com/in/yenchenchen/">
      <i className="fab fa-2x  fa-linkedin"></i>
      </a>
    </span>

    <span className="icon is-large fa-lg ">
      <a href="mailto:joanne29@bu.edu">
      <i className="fas fa-2x fa-envelope "></i> 
      </a>
    </span>
   

  

  </div>
      
  
    </footer>
  </div>
)

Layout.propTypes = {
  children: PropTypes.func,
}

export default Layout


export const query = graphql`
  query SiteTitleQuery {
    site {
      siteMetadata {
        title
      }
    }
  }
`
