import React from 'react'
import Navbar from './Navbar';
import AboutUs from './AboutUs';
import Education from './Education';
import Certifications from './Certification';
import Skills from './Skills';
import Projects from './Project';
import ContactUs from './ContactUs';

import Homeimage from './Homeimage';
import WorkExperience from './WorkExperience';


const Main = () => {
  return (
    <div>
       <Navbar/>
       <Homeimage/>
        <AboutUs/>
        <Skills/>
        <WorkExperience/>
        <Projects/>
        <Certifications/>
        <Education/>
        <ContactUs/>
    </div>
  )
}
export default Main;