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

import Explore from "./Pages/Explore";

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

        <Route path="Explore" element={<Explore />} />

        <Route path="*" element={<h1>404 - Page Not Found</h1>} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
