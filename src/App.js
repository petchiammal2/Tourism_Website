
import './App.css'

import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Blog from "./Pages/Blog";
import Contact from "./Pages/Contact";
import Layout from "./Components/Layout";
import Gallery from "./Pages/Gallery";
import './App.css';
import Footer from "./Components/Footer";
import Header from "./Components/Header";



function App() {
  return (
    <div className="App">
    
      
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="contact" element={<Contact />} />
        <Route path="blog" element={<Blog />} />
        <Route path="layout" element={<Layout />} />
        <Route path="gallery" element={<Gallery />} />
      </Routes>
      <Footer />
    
    </div>
  );
}

export default App;
