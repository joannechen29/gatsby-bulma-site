import React from 'react'
import Link from 'gatsby-link'

import name from "../../public/images/name.png"

import wireOne from '../../public/images/name/wireOne.png'
import wireTwo from '../../public/images/name/wireTwo.png'
import wireThree from '../../public/images/name/wireThree.png'
import wireFour from '../../public/images/name/wireFour.png'

import wireSecond from '../../public/images/name/wireSecond.png'
import Final from '../../public/images/name/final.png'





const nameFluffy =() =>(
<div >
    <div className="box columns has-background-white-bis">      
      <div className="column is-half">
        <h1 className="title is-2 ">Name my Fluffy Friend</h1>
        <h4 className="subtitle is-3 ">UI/UX Web Design and Development</h4>
        <p className="subtitle is-4">
         Namemyfluffyfriend is a website that allows user to generate their pet name according to the pet's habits, personality, sex and color.
         My goal is to develop a fun and interactive website and overcome the frustation of naming your beloved fluffy friend.
        </p>
      </div>
      <div className="column is-half">
      <img src={name} alt="low1" />
      </div>
    </div>
    <div className="container is-fluid">
      <section >
        <h2 className="title is-4">Project Proposal</h2>
        <p>
        Thinking of a name for our fluffy friend is not always easy. We want to create a site that help solve that problem. Using the site, user would select the gender of the new pet and the attributes they like for their pet and the generator will then automatically generate a name that has the quality that the users choose. 
      </p>
      </section>

      <section>
      <h2 className="title is-4">Initial wireframes</h2>
      <div className="columns is-centered box has-background-light">
          <div className="column is-one-quarter  ">
          <h1 className="subtitle is-6  has-text-centered is-uppercase">Client Profile</h1>
          <img src={wireOne} alt="low1" />
         </div>
          <div className="column is-one-quarter">
          <h1 className="subtitle is-6  has-text-centered is-uppercase">Booking Reports</h1>
          <img src={wireTwo} alt="low2" />
          </div>
          <div className="column is-one-quarter">
          <h1 className="subtitle is-6  has-text-centered is-uppercase">Log In</h1>
          <img src={wireThree} alt="low3" />
          </div>
          <div className="column is-one-quarter">
          <h1 className="subtitle is-6  has-text-centered is-uppercase">Log In</h1>
          <img src={wireFour} alt="low3" />
          </div>
      </div>
      </section>

      <section >
      <h2 className="title is-4">UX report I</h2>
      <p>After testing our product with five people within our targeted audience (college students), we concluded two key points that we would like to improve with the constructive comments and recommendation we have received from our subjects, while knowing that our product is not made for everyone:</p>
      <aside>
      <ol>
            <li>The concept: The criteria may be a little too simple. We could consider using more criteria to make our product more comprehensive.</li>
            <li>Labeling: We would need to give more specific and detailed instruction to lead the user to use our product without confusion.</li>
      </ol>
      </aside>

      <p>
      The solution to this could be: adding the user questions before going to the next step. For example, before picking pet type, add a sentence “are you naming for your dog or cat?” to guide the user through all the criteria effectively. The user will then have a better understanding and more clear instruction when using the interface. In addition, we believe that having more criteria for the users to filter through would help fulfill our users’ needs of naming their pets with more specific attributes. </p>
      <div className="columns is-centered ">
      <div className="column is-half  box has-background-light part">
      <img src={wireSecond} alt="low2" />
      </div>
      </div>
      

      </section>

      <section>
      <h2 className="title is-4">UX report II </h2>
      <p>After testing our web app with five people within our target audience (college students) for the second time, we again concluded two key points that we would like to improve with the comments and recommendation we received from our subjects. Specifically, two areas to focus on to improve the prototype would be design and labeling. We will have an introduction section after our title to convey a more clear message to our target audience about what our app is really about. In addition, we will continuing to work on design in terms of color combo on the interface. While also, we might add more images and visual where suitable.
</p>
<div className="has-text-centered">
      <a className="button is-primary is-outlined is-medium " href="https://fluffy-friend.firebaseapp.com/">Click to website</a>
</div>
<div className="columns is-centered ">

     <div className="column is-half  box has-background-light part">
      <img src={Final} alt="low2" />
      </div>
      </div>
      
      </section>


    </div>
    <nav className="pagination" role="navigation" aria-label="pagination">
      <Link to="/greenroom/"><a className="pagination-previous">Previous Project: Greenroom</a></Link>
      <Link to="/vincitable/"><a className="pagination-next">Next Project: Vincitables</a></Link>
     </nav>




</div>



)



export default nameFluffy