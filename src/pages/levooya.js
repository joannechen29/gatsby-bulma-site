import React from 'react'
import Link from 'gatsby-link'

import logo from '../../public/images/levooya/logo.png'
import sitemap from '../../public/images/levooya/sitemap.png'
import userflow from '../../public/images/levooya/userflow.png'
import appstore from '../../public/images/appstore.png'
//app interface
import home from '../../public/images/levooya/app/home.png'
import filter from '../../public/images/levooya/app/filter.png'
import country from '../../public/images/levooya/app/country.png'
import price from '../../public/images/levooya/app/price.png'

import product from '../../public/images/levooya/app/product.png'
// import category from '../../public/images/levooya/app/category.png'
import profile from '../../public/images/levooya/app/profile.png'

import requestcountry from '../../public/images/levooya/app/requestcountry.png'
import requestcountryfilter from '../../public/images/levooya/app/requestcountryfilter.png'

import MockOne from '../../public/images/levooya/app/LevooyaMockOne.png'
import MockTwo from '../../public/images/levooya/app/LevooyaMockTwo.png'
import MockThree from '../../public/images/levooya/app/LevooyaMockThree.png'



const Levooya = () => (
  <div className=" container is-mobile is-fluid">

    <div className="box columns has-background-white-bis ">
      <div className="column is-half">
        
        <p className="title is-2 ">Levooya</p>
        <p className="subtitle is-4 ">Ecommerce Platform</p>
        <p className="is-6 "><strong>UX App Redeisgn | Dec 2017 - Jan 2018</strong></p>
        <p >
        LeVooya, which name is derived from the concept of “Voyage”, is a platform that allows people to buy and sell products from abroad. The two main customers in the app are the travelers and the buyers. Travelers love to buy products from abroad, and this app brings the ease of taking products from abroad back home by matching their needs and wants. Buyers will also be able to post requests for products they have been looking for, and travelers can accept the request and purchase them for the buyers.
        </p>
      </div>
      <div className="column is-half">
        <img src={logo} alt="logo" />
      </div>
    </div> 


    <div className="container  ">

    <section >
        <h2 className="title is-4">The Problem</h2>
        <p>
        To increase exposure in the millennial generation and improve engagement in the app
        </p>
    </section>
    <section>
          <h2 className="title is-4 ">Goals</h2>
      <div className="columns boxes ">
          <div className="column   ">
          <div className="box">
            <h1 className="subtitle is-5 ">Brand Goals</h1>
            <p className="subtitle is-5 ">
            Allow users to buy popular oversea products and allow the travelers to earn money while traveling
            </p>
            </div>
          </div>
          <div className="column">

          <div className="box">
            <h1 className="subtitle is-5">Business Goals</h1>
              <p>
              Deliver a trustworthy and safety platform for users to buy and sell overseas products
            </p>
            </div>
          </div>
          <div className="column ">

          <div className="box">
            <h1 className="subtitle is-5">User goals</h1>
       
              <ul>
                <li> Easy to navigate platform</li>
                <li>A trustworthy platform</li>
                <li>Reliable source of reviews</li>
              </ul>
              </div>
          </div>
      </div>
    </section>

      <section>
        <h2 className="title is-4 c">User Research</h2>
        <p>
        In order to gain a better understanding of our users, I have conducted user testings with <strong>5 users</strong> in the target market and have found out three major problems while using the exisiting mobile app.
        </p>
            <div className="content">
              <h6 className="is-small" >Design Questions</h6>
              <p>To improve the customer experience while balancing the business goal, I have designed a few questions that need to be discussed in order to understand the user's need.</p>
              <ul className="bullet">
                <li>Does the content meets the brand goals and business goal? </li>
                <li>Does the link meets the user's need?</li>
                <li>What are the current problems that the user is struggling?</li>
                <li>What are the elements to determine if the platform is trustyworthy?</li>
              </ul>
            </div> 


           <div className="content">
              <h6 className="is-small" >Key Findings</h6>
              <p>Here are some of the key points I have learned:</p>
              <ul className="bullet">
                <li>Nonstop scrolling when looking for the product</li>
                <li>Mystery link and  unclear information on the interface lead to inefficient user flow</li>
                <li>Unhelpful page without an obvious route out</li>
              </ul>
            </div> 

      </section>
      <section >
      {/* <div className="columns "> */}
      <div className=" columns is-multiline is-centered smallmargin ">
              <div className=" column is-6"> 
              <img src={sitemap} alt="sitemap" />
              </div>
              <div className=" rightbox column is-3"> 
                <h3 className="subtitle is-5">Sitemap</h3>
                <p>
          This sitemap gives you a clear understanding of the navigational hierarchy.
          </p>
              </div>
            </div>

            <div className=" columns is-multiline is-centered">
              <div className="leftbox column is-3"> 
                <h3 className="subtitle is-5">Userflow</h3>
                <p>
          This userfow represents the user as a buyer and a seller. However, the buyer will be the primary focus in this chart.
          </p>
              </div>
              <div className=" column is-6"> 
              <img src={userflow} alt="userflow" />
              </div>
            </div>



        {/* <div className="column  ">
        <h3 className="subtitle is-5">Sitemap</h3>
          <img src={sitemap} alt="sitemap" />
          <p>
          This sitemap gives you a clear understanding of the navigational hierarchy.
          </p>
        </div>

        <div className="column  ">
        <h3 className="subtitle is-5">Userflow</h3>
          <img src={userflow} alt="userflow" />
          <p>
          This userfow represents the user as a buyer and a seller. However, the buyer will be the primary focus in this chart.
          </p>
        </div>

        </div> */}
        </section>


        <section className="">
        <h2 className="title is-4  ">App Redesign</h2>
        <p>
        To create a more user-centered interface, I decided to redesign three pages based on the user interview. In addition to the core foundation, as an ecommerce app, it is really important to build confidence upon the brand and be transparent to the users.
        </p>

        <div className="part ">
           <h4 className="subtitle is-6  has-text-centered is-uppercase ">home page/ sort by page</h4>
          <div className="columns is-centered ">
            <div className="column is-5  ">
              <img  className="is-mobile" src={MockOne} alt="home page" />
            </div>
            <div className="column is-4 content inline-block">
            <ul>
              <li>Added the filter button: allow user to quickly search for the product</li>
              <li>Match between the system and the real work: on the filter page, added the close icon “X”</li>
              <li>Menu restructure: Explore by country, Limited time, Best Sellers You Rated</li>
              </ul>
            </div> 
          </div>
        </div>

        <div className="part">
           <h4 className="subtitle is-6  has-text-centered is-uppercase ">Product page</h4>
          <div className="columns is-centered ">
            <div className="column is-5  ">
              <img  className="is-mobile" src={MockTwo} alt="home page" />
            </div>
                  
            <div className="column is-4 content ">
            <ul>
            <li>To create more trust and be more transparent, I moved the rating from the product information sectoin to under the seller’s name since the buyer will want to know if the seller is trustworthy or not.</li>

              <li> Minimize the product information</li>

              <li> Added the reviews from previous customers under the user’s profile page</li>
              </ul>
            </div> 
          </div>
        </div>

        <div className="part">
           <h4 className="subtitle is-6  has-text-centered is-uppercase ">request page</h4>
          <div className="columns is-centered ">
             <div className="column is-5  ">
              <img  className="is-mobile" src={MockThree} alt="home page" />
            </div>
            <div className="column is-4 content">
              <ul>
                <li>Shortcut- Sort by country on the request page</li>

                <li> Based on the user testing result and competitive analysis, a shortcut on the request page will provide user a faster way to find a sepcific product.</li>
          </ul>
            </div> 
          </div>
        </div>
        </section>

        <div className="columns is-centered is-mobile">

        <a href="https://itunes.apple.com/tw/app/%E6%A8%82%E9%A3%9B%E4%BA%9E/id1221262097?mt=8">
        <img src={appstore} alt="appstore" />
          </a>
              
         </div>

    </div>
    <nav className="pagination" role="navigation" aria-label="pagination">
      <Link to="/greenroom/"><a className="pagination-previous">Previous Project: Greenroom</a></Link>
      <Link to="/vincitable/"><a className="pagination-next">Next Project: Vincitables</a></Link>
     </nav>

  </div>
)

export default Levooya
