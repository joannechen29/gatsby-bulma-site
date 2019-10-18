import React from 'react'
import Link from 'gatsby-link'
import me from "../../public/images/me.jpeg"


const About = () => (




    <div className="columns is-centered is-fluid ">
        <div className="column is-one-third">
        <img className="profile" src={me} alt="me" />
        </div>
  
         <section className="column is-one-third">
        <h2 className="title is-4  ">Joanne Yen Chen</h2>
        <p>I am a recent graduate at Boston University majoring in hospitality and minoring in computer science. Throughout my time at BU I’ve found that I can take skills from both of these and apply them to UX. 
Hospitality has taught me customer service by developing interpersonal skills and attention to detail. These transferable skills also apply to UX design, since UX focuses on the user’s natural experience towards products. By studying both fields, I am able to bring a holistic approach to designing the ultimate user experience. In addition, I am also interested in front-end development. By challenging myself, I self-learned and coded my personal website through React Gatsby and CSS framework Bulma.
        </p>
        </section>
        
    </div>
 

)

export default About