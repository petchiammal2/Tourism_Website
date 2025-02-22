import React from "react";
import { Routes,Route, Link } from "react-router-dom";
import Home from "./components/Home"
import About from "./components/About"
import Blog from "./components/Blog"
import Contact from "./components/Contact"
import Layout from "./components/Layout"
import './App.css'

function App() {

  return (
    <div className="App">
      <h1> Welcome Coders</h1>
      <nav>
        <ul className="ul">
          <li>
            <Link to="/" className="home">Home</Link></li>
            <li>  <Link to="/about">About</Link></li>
            <li> <Link to="/contact">Contact</Link></li>
            <li> <Link to="/blog">Blog</Link></li>
            <li> <Link to="/layout">Layout</Link></li>
          
        </ul>
      </nav>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="about" element={<About/>}/>
        <Route path="contact" element={<Contact/>}/>
        <Route path="blog" element={<Blog/>}/>
        <Route path="layout" element={<Layout/>}/>
      </Routes>
    
    </div>
  )
}

export default App