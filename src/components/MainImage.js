import "./MainImage.css";

import React from 'react';

import IntroImg from "../assets/image2.jpeg";

import { Link } from "react-router-dom"

const MainImage = () => {
  return (
    <div className="main">
        <div className="mask">
          <img className="into-img" src={IntroImg} alt="IntroImg" />
        </div>
        <div className="content">
          <p>Welcome to our Website</p>
          <h1>Our Menu</h1>
          <div>
            <Link to="/project" className="btn">Menu</Link>
            <Link to="/contact" className="btn-light">Contact</Link>
          </div>
        </div>
    </div>
  )
}

export default MainImage;