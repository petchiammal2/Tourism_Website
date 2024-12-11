import React from "react";
import { Link } from "react-router-dom";  // Import Link from react-router-dom
import Section1 from "../Components/Section1";
import HomeSection1 from "../Components/HomeSection1";
import HomeSection3 from "../Components/HomeSection3";
import Book from "../Pages/Book";

const Home = () => {
  return (
    <>
      <Section1 />
      
      <HomeSection1 />
      
      

      <HomeSection3 />
      <Book/>
    </>
  );
};

export default Home;
