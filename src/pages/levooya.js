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



const Levooya = () => (
  <div className=" is-mobile is-fluid">

    <div className="box columns has-background-white-bis ">
      <div className="column is-half">
        <h1 className="title is-2 ">Levooya</h1>
        <h4 className="subtitle is-3 ">UX App Redeisgn</h4>
        <p className="subtitle is-4">
        LeVooya, which name is derived from the concept of “Voyage”, is a platform that allows people to buy and sell products from abroad. The two main customers in the app are the travelers and the buyers. Travelers love to buy products from abroad, and this app brings the ease of taking products from abroad back home by matching their needs and wants. Buyers will also be able to post requests for products they have been looking for, and travelers can accept the request and purchase them for the buyers.
        </p>
      </div>
      <div className="column is-half">
        <img src={logo} alt="logo" />
      </div>
    </div> 


    <div className="container  content">
    <section>
          <h2 className="title is-4 ">Goals</h2>
      <div className="columns boxes ">
          <div className="column   ">
          <div className="box">
            <h1 className="subtitle is-5 ">Brand Goals</h1>
            <p>
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

      <section className="content">
        <h2 className="title is-4 c">User research</h2>
        <p>
        I have conducted user testings with 5 users and have found out three major problems:
        </p>
        <ul>
              <li> Easy to navigate platform</li>
              <li>A trustworthy platform</li>
              <li>Reliable source of reviews</li>
          </ul>
      </section>
      <section className="content">
      <div className="columns ">
        <div className="column  ">
          <h1 className="title is-4">Sitemap</h1>
          <img src={sitemap} alt="sitemap" />
          <p>
          This sitemap gives you a clear understanding of the navigational hierarchy.
          </p>
        </div>

        <div className="column  ">
          <h1 className="title is-4">Userflow</h1>
          <img src={userflow} alt="userflow" />
          <p>
          This userfow represents the user as a buyer and a seller. However, the buyer will be the primary focus in this chart.
          </p>
        </div>

        </div>
        </section>


        <section className="">
        <h2 className="title is-4  ">App redesign</h2>
        <p>
        To create a more user-centered interface, I decided to redesign three pages based on the user interview. In addition to the core foundation, as an ecommerce app, it is really important to build confidence upon the brand and be transparent to the users.
        </p>

        <div className="part ">
           <h4 className="subtitle is-6  has-text-centered is-uppercase ">restaurant search page/ sort by</h4>
          <div className="columns is-centered ">
            <div className="column is-one-quarter  ">
              <img  className="is-mobile" src={home} alt="restaurants page" />
            </div>
            <div className="column is-one-quarter  ">
              <img className="is-mobile" src={filter} alt="sort by page" />
            </div>
            <div className="column is-half content inline-block">
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
                  <div className="column is-one-quarter ">
                    <img src={product} alt="restaurants page" />
                  </div>
                  <div className="column is-one-quarter">
                    <img src={profile} alt="sort by page" />
                  </div>
                  
            <div className="column is-half content ">
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
            <div className="column is-one-quarter ">
              <img src={requestcountry} alt="restaurants page" />
            </div>
            <div className="column is-one-quarter">
              <img src={requestcountryfilter} alt="sort by page" />
            </div>
            <div className="column is-half content">
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

  </div>
)

export default Levooya
