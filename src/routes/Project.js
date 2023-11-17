import React from 'react';
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import HeroImg from '../components/HeroImg';

import Menu from '../components/Menu';

const Project = () => {
  return (
    <div>
      <Navbar/>
      <HeroImg heading="Menu" text="Specials" />
      <Menu/>
      <Footer/>
       
    </div>
  )
}

export default Project;