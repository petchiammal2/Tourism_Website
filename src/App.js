import './App.css';

import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Blog from "./Pages/Blog";
import Contact from "./Pages/Contact";
import Service from "./Pages/Service";
import Layout from "./Components/Layout";
import Gallery from "./Pages/Gallery";
import Header from './Components/Header';
import Footer from "./Components/Footer";
import WCintegration from "./Components/WCintegration";


function App() {
  return (
    <div className="App">
      <Header />
      <WCintegration />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="contact" element={<Contact />} />
        <Route path="blog" element={<Blog />} />
        <Route path="layout" element={<Layout />} />
        <Route path="gallery" element={<Gallery />} />
        <Route path="service" element={<Service/>} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
