import { Link } from "react-router-dom";
import "./AboutContact.css"
import React from 'react'
import pro1 from "../assets/pro1.jpg"
import pro2 from "../assets/pro2.jpg"
const AboutContact = () => {
  return (
    <div className="about">
        <div className="left">
            <h1>Who we are </h1>
            <p>We are the family of cooks who are conserving the recipes from hundreds of year.</p>
            <Link to="/contact">
                <button className="btn">Contact</button>
            </Link>
        </div>
        <div className="right">
            <div className="img-container">

                <div className="img-stack-top">
                    <img src={pro2} className="img" alt="true"/>

                </div>
                <div className="img-stack-bottom">
                    <img src={pro1} className="img" alt="true"/>

                </div>
            </div>
        </div>
    </div> 
  )
};
 
export default AboutContact;