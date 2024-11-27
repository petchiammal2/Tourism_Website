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
import StayPackage from './components/StayPackage'; 
import PackageDetail from './components/PackageDetail'; 
import GuidedTourService from './components/GuidedTourService';
import TransportationService from './components/TransportationService';
import WCintegration from './components/WCintegration';
import GuidedTourDetail from './Component/GuidedTourDetail';
import Contact1 from './components/Contact';

function App() {
  return (
    <div className="App">
      <Header />
      <WCintegration /> {/* Always rendered */}
 
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="contact" element={<Contact />} />
        <Route path="blog" element={<Blog />} />
        <Route path="layout" element={<Layout />} />
        <Route path="gallery" element={<Gallery />} />
        <Route path="Service" element={<Service/>} />
          <Route path="/StayPackage" element={<StayPackage />} />
          <Route path="/GuidedTourService" element={<GuidedTourService />} />
          <Route path="/TransportationService" element={<TransportationService />} />
          <Route path="/GuidedTourDetail" element={<GuidedTourDetail />} />
          <Route path="/PackageDetail" element={<PackageDetail />} />
          <Route path="/Contact1" element={<Contact1 />} />
          <Route path="/handleWhatsAppMessage" element={<WCintegration />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
