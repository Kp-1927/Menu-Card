import "./Footer.css"

import React from 'react'
import {FaFacebook, FaHome,FaLinkedin,FaMailBulk,FaPhone, FaTwitter} from 'react-icons/fa';

const Footer = () => {
  return (
    <div className="footer">
       <div className="footer-container">
        <div className="left">
            <div className="location">
                <FaHome size={20} style={{color:"white",marginRight:"2rem"}} />
                <div>
                    <p>143 Housing Board Colony</p>
                    <p>India</p>
                </div>
            </div>
            <div className="phone">
               <FaPhone size={20} style={{color:"white",marginRight:"2rem"}} />
                <div>
                    <p>+91-9178956451</p>
                    
                </div>
            </div>
            <div className="email">
               <FaMailBulk size={20} style={{color:"white",marginRight:"2rem"}} />
                <div>
                    <p>info@gmail.com</p>
                    
                </div>
            </div>

        </div>
        <div className="right">
            <h4>About the cafe</h4>
            <p>We speak the good food language.Our creative,elevated,food and beverage program combines satisfying staples with imaginative twists.From boozy vrunches and happy hours to family dinners,special occasions and everything in bbetween,The originals has something for everyone.</p>
            <div className="social">
                <FaFacebook size={20} style={{color:"white",marginRight:"1rem"}} />
                <FaLinkedin size={20} style={{color:"white",marginRight:"1rem"}} />
                <FaTwitter size={20} style={{color:"white",marginRight:"1rem"}} />
            </div>
        </div>
       </div>
    </div>
  )
}

export default Footer;