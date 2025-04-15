import React from 'react'
import Navbar from './Navbar';
import AboutUs from './AboutUs';
import Education from './Education';
import Certifications from './Certification';
import Skills from './Skills';
import Projects from './Project';
import ContactUs from './ContactUs';

import Homeimage from './Homeimage';


const Main = () => {
  return (
    <div>
       <Navbar/>
       <Homeimage/>
        <AboutUs/>
        <Education/>
        <Certifications/>
        <Skills/>
        <Projects/>
        <ContactUs/>
    </div>
  )
}
export default Main;