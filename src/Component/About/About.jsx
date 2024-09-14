import React from 'react'
import './about.css'
import { Link } from 'react-router-dom'

const About = () => {
  return (
    <>
    <div className="About-container">
        <div className="about-box">
            <div className="about-img">
                <img src="./images/ABOUT.png" alt="" />
            </div>
            <div className="about-text">
            <h1>About Us</h1>
            <p>
              <span>.Gov.in</span>This is a portal of information about the
              funds by a government. This portal is designed as per the needs of
              the people and our main motive is that how the funds given by the
              government are sent to each sector and how much funds are
              distributed in each sector. Because it is the right of every human
              being to know about the development of his country.
            </p>

            <p>
              <span>Company Overview</span> Our creative team - "Creativity is
              seeing the same thing but thinking differently " our team of
              Digital Savers are here to Assist and Guide your Business to
              better reach to your customer. A team is made up of several key
              members. Starting with Creative directors, IT Consultant ,
              Editors, Graphic designer, Content writer, Digital marketers and
              Web developers.
            </p>
            <div className="about-link">
              <strong>Visit Us - </strong>
              <Link to="http://digitalsavers.in/" target= '_blank' >https://digitalsavers.in/</Link>
            </div>
            </div>
        </div>
    </div>
    </>
  )
}

export default About