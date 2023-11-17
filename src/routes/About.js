import React from 'react'
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import HeroImg from '../components/HeroImg';
import AboutContact from '../components/AboutContact';

const About = () => {
  return (
    <div>
      <Navbar/>
      <HeroImg heading="ABOUT" text="I AM A GOOD FOOD LANGUAGE" />
      <AboutContact/>
      <Footer/>
    </div>

  )
}

export default About;