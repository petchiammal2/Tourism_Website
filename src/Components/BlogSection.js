import React from "react";
import "./CSS/Bloghero.css";
import background from "../Assets/background.jpg"

const BlogSection = ({ backgroundImage }) => {
   return ( 

    <div className="blog-hero">
 <img src={background} alt="background" className="blog-img"/>

      <div className="overlay">
        <div className="blog-content">
          <h4 className="blog-title">Welcome to our Blog</h4>
          <p className="blog-breadcrumb">
            <a href="/">Home</a> &gt; <span>Blog</span>
          </p>
        </div>
      </div>
    </div>
    
  );
};

export default BlogSection;
