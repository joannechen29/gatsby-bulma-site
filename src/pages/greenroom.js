import React from 'react'
import Link from 'gatsby-link'
import logo from '../../public/images/vegan/logo.png'
import sitemap from '../../public/images/vegan/sitemap.png'
import persona from '../../public/images/vegan/persona.png'
import userflow from '../../public/images/vegan/userflow.png'


import color from '../../public/images/vegan/colorcard.png'
//app interface
import home from '../../public/images/vegan/app/home.png'
import homeOne from '../../public/images/vegan/app/homeOne.png'

import Rs from '../../public/images/vegan/app/rs.png'
import sbp from '../../public/images/vegan/app/sbp.png'
import sR from '../../public/images/vegan/app/sortR.png'


import add1 from '../../public/images/vegan/app/add1.png'
import add2 from '../../public/images/vegan/app/add2.png'
import viewbag from '../../public/images/vegan/app/viewbag.png'

import order1 from '../../public/images/vegan/app/order1.png'
import order2 from '../../public/images/vegan/app/order2.png'
import pastorders from '../../public/images/vegan/app/pastorders.png'

//mockup
import mockupOne from '../../public/images/vegan/mockupOne.png'
import mockupTwo from '../../public/images/vegan/mockupTwo.png'
import mockupThree from '../../public/images/vegan/mockupThree.png'
import businesscard from '../../public/images/vegan/businesscard.png'







const Greenroom = () => (
  <div>

    <div className="box columns has-background-white-bis ">
      <div className="column is-half">
        <h1 className="title is-2 ">Greenroom</h1>
        <h4 className="subtitle is-3 ">Branding and App Design</h4>
        <p className="subtitle is-4">
          Greenroom is a vegan kitchen specializing in healthy "fast-food" that
          is launching at college campuses across the United States. Greenroom
          differentiates itself by not only making healthy "fast-food", but also
          delivering it directly to dorm rooms. It aims to give students a
          healthy and environmentally conscious food choice with as an
          alternative.
        </p>
      </div>
      <div className="column is-half ">
        <div className="image ">
        <img src={logo} alt="greenroom" />
        </div>
      </div>
    </div>


    <div className="container is-fluid ">

    

      <section >
        <h2 className="title is-4">Designing the brand</h2>
        <p>
          This is a design challenge that I was given in a Visual Design class.
          I have created a brand for vegan kitchen to help students stay healthy
          and be aware of a healthy diet. I designed a lively and friendly logo
          that matches with the brand concept, mockup products and the Greenroom
          delivery app.
        </p>
      </section>

      <section className="part">
        <h2 className="title is-4">User Research</h2>
        <p>
          I have conducted interview with four students of both genders who are
          conscious about their food choice. The purpose of this interview is to
          understand our target audiences' diet habits and their needs. Here are
          some of the key points I have concluded:
          </p>
          <ul>
            <li>They acknowledge the importance of healthy diet.</li>
            <li>
              They love to be in a community that shares information about
              healthy lifestyle.
            </li>
            <li>
              They struggle to find healthy vegan options in the restaurant.
            </li>
          </ul>
       
      </section>
 
     
      <section >
      

      <div className="columns is-multiline is-centered">
        <div className="column is-two-fifths">
   
          <img src={persona} alt="persona" />
          <p>
          <h3 className="subtitle is-5">Persona</h3>
            Based on the user reserach I have conducted, I have created a
            persona on a projected customer of Greenroom.
          </p>
        </div>

        <div className="column is-two-fifths">
         
          <img src={sitemap} alt="sitemap" />
          <p>
          <h3 className="subtitle is-5">Sitemap</h3>
        
            This sitemap gives you a clear understanding of the navigational
            hierarchy.
          </p>
        </div>

        <div className="column is-three-quarters">
          
          <img src={userflow} alt="userflow" />
          <p>
          <h3 className="subtitle is-5">Userflow</h3>
            This useflow is simple and smooth. The user can access the
            restuarant page, order page, community page and profile stting page
            after logging in.
          </p>
        </div>

       
        </div>
        </section>




    
        <section className="part">
        <h2 className="title is-4  ">Designing the app</h2>
        <p>
          Since the brand is lively and friendly, I decided to go with a soft
          color scheme. During brainstorming, my group and I have come up with
          different ideas and categorized them into different groups. The
          function of the app will be from browsing the menu to ordering food.
          However, we found out that community is a big part of the vegan
          community and people would like to seek more information regarding the
          nuitrion or health related questions.
        </p>
        </section>

        <div className="columns is-centered">
        <div className="column is-three-fifths">
        <img src={color} alt="color scheme" />
        </div>
      </div>
      
     
      <section >
    
        <h4 className="subtitle is-6  has-text-centered is-uppercase">landing page</h4>
        <div className="columns is-centered is-fluid">
      
          <div className="column is-2  ">
          <img src={home} alt="home" />
          </div>
          <div className="column is-2  ">
          <img src={homeOne} alt="homeOne" />
          </div>
        </div>

        <h4 className="subtitle is-6  has-text-centered is-uppercase ">restaurant search page/ sort by</h4>
        <div className="columns is-centered is-fluid">
          <div className="column is-2 ">
          <img src={Rs} alt="restaurants page" />
          </div>
          <div className="column is-2">
          <img src={sbp} alt="sort by page" />
          </div>
          <div className="column is-2">
          <img src={sR} alt="Sort by restaurant" />
          </div>
        </div>
        
        <h4 className="subtitle is-6  has-text-centered is-uppercase">add in/ view bag page</h4>
        <div className="columns is-centered is-fluid">
          <div className="column is-2">
           <img src={add1} alt="add1" />
          </div>
          <div className="column is-2">
           <img src={add2} alt="add2" />
          </div>
          <div className="column is-2">
           <img src={viewbag} alt="viewbag" />
          </div>
        </div>
      

        <h4 className="subtitle is-6  has-text-centered is-uppercase">orders page</h4>
        <div className="columns is-centered is-fluid">
          <div className="column is-2">
           <img src={order1} alt="order1" />
          </div>
          <div className="column is-2">
           <img src={order2} alt="order2" />
          </div>
          <div className="column is-2">
           <img src={pastorders} alt="past orders" />
          </div>
        </div>
       </section>


       <section>
          <h1 className="title is-4">Commercial Merchandise</h1>


            <div className="columns">
                    <div className="column">
                    <img src={businesscard} alt="persona" />
                            <div className="columns">
                                  <div className="column">
                                  <img src={mockupTwo} alt="persona" />
                                  </div>
                            </div>
                    </div>

                    <div className="column">
                    <img src={mockupThree} alt="persona" />
                            <div className="columns">
                                  <div className="column">
                                  <img src={mockupOne} alt="persona" />
                                  </div>
                            </div>
                    </div>
            </div>
        
       
        </section>




     </div>
     <nav className="pagination" role="navigation" aria-label="pagination">
      <Link to="/namefluffy/"><a className="pagination-previous">Previous Project: Name My  Fluffy Friend</a></Link>
      <Link to="/levooya/"><a className="pagination-next">Next Project: Levooya</a></Link>
     </nav>



  </div>
  
  
)

export default Greenroom
