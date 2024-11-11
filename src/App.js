<<<<<<< Updated upstream
import React from "react";
<<<<<<< Updated upstream
// import { Routes,Route, Link } from "react-router-dom";
// import Home from "./components/Home"
// import About from "./components/About"
// import Blog from "./components/Blog"
// import Contact from "./components/Contact"
// import Layout from "./components/Layout"
// import Gallery from "./components/Gallery"
import './App.css'
import Footer from "./components/Footer"

=======
import React from 'react'
import {Routes,Route} from "react-router-dom";
import Blog from"./Components/Blog"
import './App.css'
>>>>>>> Stashed changes
function App() 

  return (
    <div className="App">
<<<<<<< Updated upstream
      {/* <h1> Welcome Coders</h1>
      <nav>
        <ul className="ul">
          <li>
            <Link to="/" className="home">Home</Link></li>
            <li>  <Link to="/about">About</Link></li>
            <li> <Link to="/contact">Contact</Link></li>
            <li> <Link to="/blog">Blog</Link></li>
            <li> <Link to="/layout">Layout</Link></li>
            <li> <Link to="/gallery">Gallery</Link></li>

           */}
        {/* </ul>
      </nav>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="about" element={<About/>}/>
        <Route path="contact" element={<Contact/>}/>
        <Route path="blog" element={<Blog/>}/>
        <Route path="layout" element={<Layout/>}/>
        <Route path="gallery" element={<Gallery/>}/>
      </Routes>
     */}
      <Footer />

=======
  <Blog/>
    <Routes>
      <Route path="Blog" element={<Blog/>}/>
    </Routes>
>>>>>>> Stashed changes
    </div>
  )
=======
import Footer from "./components/Footer"
import './App.css';

function App() {
    return (
        <div className="App">
            <Footer />
        </div>
    );
>>>>>>> Stashed changes
}
<<<<<<< Updated upstream

=======
>>>>>>> Stashed changes
export default App;
