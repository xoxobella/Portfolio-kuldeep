// eslint-disable-next-line no-unused-vars
import React from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from './Component/Navbar/Navbar';
import Home from './Component/Hero/Hero'
import Resume from './Component/Resume/Resume';
import Work from './Component/Work/Work';
import Contact from './Component/Contact/Contact';
import SocialMedia from './Component/Socialmedia/Socialmedia';


const App = () => {
 
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/resume" element={<Resume />} />
          <Route path="/work" element={<Work />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <SocialMedia />
      </Router>
    </>
  )
}

export default App