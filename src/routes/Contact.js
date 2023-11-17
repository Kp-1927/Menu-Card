import React from 'react'
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import HeroImg from '../components/HeroImg';
const Contact = () => {
  return (
    <div>
       <Navbar/>
      <HeroImg heading="Contact us " text="Lets catch up." />
      <Footer/>
    </div>
  );
}

export default Contact;