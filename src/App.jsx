import React, { useEffect } from 'react';
import earth from "./assets/earth.mp4";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Services from "./components/Services";
import Banner from "./components/Banner";
import AOS from "aos";
import "aos/dist/aos.css";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import About from './components/About.jsx';
const App = () => {
  useEffect(() => {
    AOS.init({
      duration: 1200,
      easing: "ease-in-out",
    });
  }, []);

  return (
    <Router>
      <div className='h-[700px] relative'>
        <video autoPlay loop muted className='fixed right-0 top-0 h-[700px] w-full object-cover z-[-1]'>
          <source src={earth} type="video/mp4" />
        </video>
        <Navbar />
        <Hero />
      </div>
      <Routes>
        <Route path="/about" element={<About />} />
      </Routes>
      <Services />
      <Banner />
    </Router>
  );
}

export default App;
