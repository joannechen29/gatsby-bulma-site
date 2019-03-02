import React from 'react'
import Link from 'gatsby-link'

import logo from '../../public/images/vincitable/logo.png'
import lowOne from '../../public/images/vincitable/lowOne.png'
import lowTwo from '../../public/images/vincitable/lowTwo.png'
import lowThree from '../../public/images/vincitable/lowThree.png'

import secOne from '../../public/images/vincitable/secondary/booking.png'
import secTwo from '../../public/images/vincitable/secondary/daily.png'
import secThree from '../../public/images/vincitable/secondary/toggle.png'

import login from '../../public/images/vincitable/final/login.png'
import booking from '../../public/images/vincitable/final/booking.png'
import dailySummary from '../../public/images/vincitable/final/dailySummary.png'
import filter from '../../public/images/vincitable/final/dailysumfilter.png'
import currentOperation from '../../public/images/vincitable/final/currentOperation.png'
import available from '../../public/images/vincitable/final/available.png'
import toggle from '../../public/images/vincitable/final/toggle.png'
import list from '../../public/images/vincitable/final/list.png'
import country from '../../public/images/vincitable/final/country.png'



const VinciTable = () => (
  <div className="content">
     <div className="box columns has-background-white-bis">
      <div className="column is-half">
        <h1 className="title is-2 ">VinciTables</h1>
        <h4 className="subtitle is-3 ">UI/UX App deisgn and Development</h4>
        <p className="subtitle is-4">
        Vincitables is a restaurant management app that allows the manager to manage the restaurant through the detail report by tracking the customer’s experience. In addition, Vincitables provides instant daily report by integrating with the POS system and reservation system.
        </p>
      </div>
      <div className="column is-half">
      <img src={logo} alt="logo" />
      </div>
    </div> 

    <div className="container is-fluid">
      <section >
        <h2 className="title is-4">Task</h2>
        <p>
          My task is to design and develop the app through a UX perspective. The <a href="https://www.vincitables.com/en/">website version </a>has already developed and being used by several hospitality group in Portugal. The goal is to develope a mobile app that could be use on the phone that allows the managers to keep track of the managemnet report even they are not in site.
          I used Sketch to design the wireframe and then developed the app by using HTML framework Framework7 with jQuery AJAX and CSS for styling.
        </p>
      </section>

      <section>
      <h2 className="title is-4">Initial wireframes</h2>
      <div className="columns is-centered box has-background-light">
        <div className="column is-one-quarter  ">
          <h1 className="subtitle is-6  has-text-centered is-uppercase">Client Profile</h1>
          <img src={lowOne} alt="low1" />
         
        </div>

        <div className="column is-one-quarter">
          <h1 className="subtitle is-6  has-text-centered is-uppercase">Booking Reports</h1>
          <img src={lowTwo} alt="low2" />
         
        </div>

        <div className="column is-one-quarter">
          <h1 className="subtitle is-6  has-text-centered is-uppercase">Log In</h1>
          <img src={lowThree} alt="low3" />
          
        </div>

       
        </div>


      </section>
      <section>
      <h2 className="title is-4">Secondary wireframes</h2>
      <aside>
      <p>Based on the web app, I decided to choose some important functionalities to apply on the mobile app.</p>
      </aside>
      <div className=" box has-background-light "> 
      <div className="columns is-centered">
        <div className="column is-one-quarter  ">
          <h6 className="subtitle is-6  has-text-centered is-uppercase">Client Profile</h6>
          <img src={secOne} alt="sec1" />
         
        </div>

        <div className="column is-one-quarter">
          <h6 className="subtitle is-6  has-text-centered is-uppercase">Booking Reports</h6>
          <img src={secTwo} alt="sec2" />
         
        </div>

        <div className="column is-one-quarter">
          <h6 className="subtitle is-6  has-text-centered is-uppercase">Log In</h6>
          <img src={secThree} alt="sec3" />
          
        </div>

       
        </div>
        </div>


      </section>

      <section>
      <h2 className="title is-4">Final wireframes</h2>
      <aside>
      <h2 className="subtitle is-5 ">Client Feedbacks:</h2>

      <ul>
            <li>The daily summary can be more concise.</li>

              <li>The restaurant fliter under the toggle menu may be a little confusing and does not really go with the user flow. </li>

              <li>Combine the date picker and the restaurant filter </li>
      </ul>
      
      <h2 className="subtitle is-5">How I addressed:</h2>
      <p>
      After discussing with the managers and knowing the client's need, I redesigned the app to provide a more clear and transparent report.
      They prefer to have a more concise report after logging in, which is the daily summary page.
    
       The managers can go through different pages from the hamburger menu. In the toggle page, I moved the restuarant options to filter since it will be more easily acesss and filter all the needs at the same time.

      </p>
      </aside>
      
      <div className=" box has-background-light "> 
      <div className="columns is-centered ">

       <div className="column is-one-fifth ">
          <h1 className="subtitle is-7  has-text-centered is-uppercase">Login Page</h1>
          <img src={login} alt="sec1" /> 
          <div className="columns">
                                  <div className="column">
                                  <h1 className="subtitle is-7  has-text-centered is-uppercase">Booking Source</h1>
                                  <img src={booking} alt="sec3" />
                                  </div>
                            </div>
        </div>

        <div className="column is-one-fifth  ">
          <h1 className="subtitle is-7  has-text-centered is-uppercase">Daily Summary</h1>
          <img src={dailySummary } alt="sec1" />       
          <div className="columns">
                                  <div className="column">
                                  <h1 className="subtitle is-7  has-text-centered is-uppercase">Filter Page</h1>
                                  <img src={filter} alt="sec1" />
                                  </div>
                            </div>  
        </div>

        <div className="column is-one-fifth">
          <h1 className="subtitle is-7  has-text-centered is-uppercase">Toggle Page</h1>
          <img src={toggle} alt="sec2" />
          <div className="columns">
                                  <div className="column">
                                  <h1 className="subtitle is-7  has-text-centered is-uppercase">Tables Available</h1>
                                  <img src={available} alt="sec1" />
                                  </div>
            </div>
        </div>

        <div className="column is-one-fifth">
          <h1 className="subtitle is-7  has-text-centered is-uppercase">Current Operation</h1>
          <img src={currentOperation} alt="sec2" />
          <div className="columns">
                                  <div className="column">
                                  <h1 className="subtitle is-7  has-text-centered is-uppercase">Client information</h1>
                                  <img src={country} alt="sec1" />
                                  </div>
            </div>
        </div>


        <div className="column is-one-fifth">
          <h1 className="subtitle is-7  has-text-centered is-uppercase">List</h1>
          <img src={list} alt="sec2" />
          <div className="columns">
                                
            </div>
        </div>





       
        </div>
        </div>


      </section>




  </div>
  </div>
)

export default VinciTable
