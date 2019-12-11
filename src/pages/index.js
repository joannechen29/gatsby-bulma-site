import React from 'react'
import Link from 'gatsby-link'
import greenroom from "../../public/images/greenroom.png"
import levooya from "../../public/images/levooya.png"
import Vincitable from "../../public/images/vincitable.png"
import name from "../../public/images/name.png"




const IndexPage = () => (
  <div className="container is-mobile is-fluid">

    <div className="columns is-mobile" >
      <div className="column is-three-fifths is-offset-one-fifth" >
      <h1 className="title">
        Hi, I am Joanne. 
        </h1>
        <h2 className="subtitle">
        I am passionate about creating an <strong>inclusive and accessible user experience</strong> that makes an impact on the world. 
        </h2>
      </div>
    </div>
   <section>
    <div className="tile is-ancestor has-text-centered">
        <div className="tile is-parent">
          <article className="tile is-child box">
          <Link to="/greenroom/">
          <img src={greenroom} alt="greenroom"/>
          </Link>
            <p className="title">Greenroom</p>
            <p className="subtitle">Branding and App Design</p>

          </article>
        </div>
        <div className="tile is-parent ">
          <article className="tile is-child box">
          <Link to="/levooya/">
          <img src={levooya} alt="levooya" />
          </Link>
            <p className="title">Levooya</p>
            <p className="subtitle">UX App Redesign</p>
          </article>
        </div>
        <div className="tile is-parent">
          <article className="tile is-child box">
          <Link to="/vincitable/">
          <img src={Vincitable} alt="vincitable" />
          </Link>
            <p className="title">VinciTable</p>
            <p className="subtitle">UI/UX App Design and Development</p>
          </article>
        </div>
      </div>
      
        <div className="tile is-ancestor has-text-centered">
        <div className="tile is-parent">
          <article className="tile is-child box">
          <Link to="/namefluffy/">
          <img src={name} alt="namefluffy" />
          </Link>
            <p className="title">Name Your Fluffy Friend</p>
            <p className="subtitle">UI/UX Web Design and Development</p>
          </article>
        </div>

      </div> 
      
      </section>
     
  </div>
 
)

export default IndexPage
