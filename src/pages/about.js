import React from 'react'
import Link from 'gatsby-link'
import me from "../../public/images/me.jpeg"


const About = () => (




    <div className="columns is-centered is-fluid ">
        <div className="column is-one-third">
        <img src={me} alt="me" />
        </div>
  
         <section className="column is-one-third">
        <h2 className="title is-4  ">About Joanne</h2>
        <p>
        Hi I am Yen Chen, Joanne, currently a senior at Boston University. 
        To me, User Experience is not simply about how to make user interface more friendly but the ultimate goal is to deliver the best experience by connecting the wants and needs of the users.
        I have a passion for hospitality because I believe it is the most sincere interaction between humans.
        However, this is also why I’m interested in UX. UX focuses on the user’s natural experience towards products.
        By studying both fields, I am able to bring both skills together to create an ultimate customer and user experience.
        </p>
        </section>
    </div>
 

)

export default About