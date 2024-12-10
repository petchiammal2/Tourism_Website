import './App.css'; // Make sure your styles are properly linked

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
import Book from "./Pages/Book"; // Import the new Book component for the booking page

function App() {
  return (
    <div className="App">
      {/* Header Component */}
      <Header />

      {/* WCintegration Component */}
      <WCintegration />

      {/* Routes for different pages */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="contact" element={<Contact />} />
        <Route path="blog" element={<Blog />} />
        <Route path="layout" element={<Layout />} />
        <Route path="gallery" element={<Gallery />} />
        <Route path="service" element={<Service />} />
        <Route path="explore" element={<Explore />} />
        
        {/* Route for the new Book page */}
        <Route path="book" element={<Book />} />

        {/* Fallback route for 404 - Page Not Found */}
        <Route path="*" element={<h1>404 - Page Not Found</h1>} />
      </Routes>

      {/* Footer Component */}
      <Footer />
    </div>
  );
}

export default App;
