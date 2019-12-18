import React from 'react'
import Link from 'gatsby-link'
import logo from '../../public/images/vegan/logo.png'
import sitemap from '../../public/images/vegan/sitemap.png'
import persona from '../../public/images/vegan/persona.png'
import userflow from '../../public/images/vegan/userflow.png'

import affinitymap from '../../public/images/vegan/card.png'
import color from '../../public/images/vegan/color.png'
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
  <div className="container is-fluid ">

            <div className="box columns has-background-white-bis ">
              <div className="column is-half">
                <p className="title is-2 ">Greenroom</p>
                <p className="subtitle is-4 "> Vegan Delivery Company</p>
                <p className="is-6 "><strong>Branding and App Design | May 2018 - June 2018</strong></p>

                <p >
                Greenroom is a vegan delivery company specializing in healthy "fast-food" that
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
    <div >

    

      <section >
        <h2 className="title is-4">The Challenge</h2>
        <p>
          This is a design challenge that I was given in a Visual Design class. I was tasked to create a <strong>lively and friendly </strong>brand for vegan delivery company that helps students stay healthy
          and be aware of a healthy diet. I designed a logo
          that matches with the brand concept, mockup products, and the Greenroom
          delivery app.
        </p>
      </section>

      <section className="part">
        <h2 className="title is-4">User Research</h2>
        <p>
          I have conducted interview with our target market: <strong>four students </strong>of both genders across the US who 
          are currently studying at schools and looking for healthier food options. The purpose of this interview is to
          understand our target audiences' diet habits and their needs. 
        </p>
           <div className="content">
           <h6 className="is-small" >Key Findings</h6>
           <p>Here are some of the key points I have learned:</p>
              <ul className="bullet">
            
                <li>They acknowledge the importance of healthy diet.</li>
                <li>
                  They love to be in a community that shares information about
                  healthy lifestyle.
                </li>
                <li>
                  They struggle to find healthy vegan options in the restaurant.
                </li>
              </ul>
            </div> 
            <div className="content">
            <h6 className="is-small" >Persona</h6>
            <p>
                To understand the user's needs, behaviors and goals, I created a
                persona based on the user reserach data that I have gathered. 
              </p>
            </div>   
            <div className="columns is-multiline is-centered">
            <div className="column is-two-fifths">
              <img src={persona} alt="persona" />
            </div>
          </div>
      </section>
 
     


        <section className="is-fluid is-mobile">
      
          <h2 className="title is-4  ">Designing the App</h2>
             <p >
            During brainstorming, my group and I have come up with
            different ideas and categorized them into different groups. The
            function of the app will be from browsing the menu to ordering food.
            Through the user interview, we found out that <strong>community is a big part of the vegan
            community and people would like to seek more information regarding the
            nuitrion or health related questions.</strong> 
            </p>

            <div className=" columns is-multiline is-centered smallmargin ">
              <div className=" column is-6"> 
                <img src={affinitymap} alt="affinitymap" />
              </div>
              <div className=" rightbox column is-3"> 
                <h3 className="subtitle is-5">Affinity Map</h3>
                <p >
                From our affinity maping exercise, our team have identified four main groups that we are going to focus on when designing the app.
                </p>
              </div>
            </div>

            <div className=" columns is-multiline is-centered">
              <div className="leftbox column is-3"> 
                <h3 className="subtitle is-5">Sitemap</h3>
                <p >
                To improve usability, I created a sitemap to have a clear understanding of the navigational
                  hierarchy.
                </p>
              </div>
              <div className=" column is-6"> 
                <img src={sitemap} alt="sitemap" />
              </div>
            </div>

                 
            <div className="smallmargin">
              <div className="columns is-multiline is-centered">
              <div className=" column is-9">   
              <h3 className="subtitle is-5">Userflow</h3>

                  <p >
                
                    To understand how the user would navigate the app, I created a userflow to see the complete path that user takes when using the app 
                  </p>
                  <p className="smallmargin">
                
                    This useflow is simple and smooth. The user can access the
                    restuarant page, order page, community page and profile stting page
                    after logging in.
                  </p>
                  <img className="smallmargin" src={userflow} alt="userflow" />
              </div>
            </div>  
          </div>
  

   
        
      

          <div className=" smallmargin columns is-multiline is-centered">
              
              <div className=" leftbox column is-4"> 
              <h3 className="subtitle is-5">UI style guide</h3>
                <p >
                Since the brand is lively and friendly, I decided to go with a soft
            color scheme. 
                </p>
              </div>
              <div className="column is-5"> 
                <img src={color} alt="color scheme" />
              </div>
            </div>
{/*         
            <div className="columns is-centered">
          
              <div className="column is-two-fifths">
              <h3 className="subtitle is-5 is-centered">UI style guide</h3>
              <p>
            Since the brand is lively and friendly, I decided to go with a soft
            color scheme. 
            </p>
            <img src={color} alt="color scheme" />
              </div>
            </div> */}
      </section>
      
     
      <section >
    
        <h4 className="subtitle is-6  has-text-centered is-uppercase">landing page</h4>
        <div className="columns is-centered  is-fluid">
      
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
