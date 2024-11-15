import './App.css';

import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Blog from "./Pages/Blog";
import Contact from "./Pages/Contact";
import Layout from "./Components/Layout";
import Gallery from "./Pages/Gallery";

import Header from './Components/Header';
import HeroSection from' ./Components/HeroSection';
import HomeSection1 from'./Components/HomeSection1';
import Footer from "./Components/Footer";
import HomeSection1 from './Components/HomeSection1';

function App() {
  return (
    <div className="App">
      <Header />
      <HeroSection/>
      <HomeSection1/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="contact" element={<Contact />} />
        <Route path="blog" element={<Blog />} />
        <Route path="layout" element={<Layout />} />
        <Route path="gallery" element={<Gallery />} />
        <Route path="*" element={<h1>404 - Page Not Found</h1>} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
