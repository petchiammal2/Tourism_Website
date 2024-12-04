import React from "react";
import { Link } from "react-router-dom";

import "./CSS/DestinationGrid.css";

import Thailand from "../Assets/Thailand.jpg";
import Switzerland from "../Assets/Switzerland.jpg";
import Australia from "../Assets/Austraila.jpg";
import china from "../Assets/china.jpg";
import France from "../Assets/France.jpg";
import japan from "../Assets/japan.jpg";
import USA from "../Assets/USA.jpg";
import Italy from "../Assets/Italy.jpg";
import Newyork from "../Assets/Newyork.jpg";
import Maldives from "../Assets/Maldives.jpg";


const DestinationGrid = () => {
  const destinations = [
    {
      title: "Thailand",
      image: Thailand,
      description:" Thailand is famous for its beautiful beaches, crystal-clear waters, and lush jungles. Popular destinations include the islands of Phuket, Koh Samui, and Koh Phi Phi, where visitors can relax on pristine beaches or explore coral reefs through diving and snorkeling. The country is also home to impressive mountain ranges in the north, such as those around Chiang."
     },
      {
      title: "Switzerland",
      image: Switzerland,
      description: " Switzerland, located in the heart of Europe, is renowned for its stunning landscapes, political neutrality, and high standard of living. It is bordered by Germany to the north, France to the west, Italy to the south, and Austria and Liechtenstein to the east. Despite its small size, Switzerland boasts a diverse geography."
     }, 
     {
      title: "China",
      image: china,
      description: " China, located in East Asia, is the worlds most populous country and the fourth-largest by land area. With a history that spans over 5,000 years, China is one of the world’s oldest civilizations, rich in culture, philosophy, and traditions. The country is bordered by 14 different countries, including India, Russia, and Mongolia, and has a diverse range ."
    }, 
    {
      title: "Australia",
      image: Australia,
      description: " Australia, located in the Southern Hemisphere, is both a country and a continent, known for its diverse landscapes, unique wildlife, and vibrant cities. It is the sixth-largest country in the world, bordered by the Indian Ocean to the west and the Pacific Ocean to the east. Australia is famous for its natural beauty, ranging from vast deserts and tropical rainforests ."
     },

    {
      title: "France ",
      image: France,
      description: " France, located in Western Europe, is one of the worlds most influential countries, known for its rich history, cultural heritage, and iconic landmarks. Bordered by Belgium, Luxembourg, Germany, Switzerland, Italy, Monaco, Spain, and the Atlantic Ocean, France offers a stunning variety of landscapes, from the snow-capped peaks of the Alps to the sun-kissed beaches of the French Riviera." },

    {
      title:"Maldives",
      image: Maldives,
      description:" The Maldives is known for its luxurious resorts, many of which are situated on private islands and offer overwater bungalows with direct access to the ocean. These resorts provide the ultimate in privacy and comfort, with world-class amenities and exceptional views, making the Maldives a popular destination for honeymooners, couples, and anyone seeking a tropical escape. Many resorts also offer unique experiences such as underwater dining, spas, and excursions for snorkeling ."
     },
      {
      title:"Japan",
      image:japan,
      description:" Japan, an island nation in East Asia, is known for its harmonious blend of ancient traditions and cutting-edge modernity. Located in the Pacific Ocean, Japan is composed of four main islands—Honshu, Hokkaido, Kyushu, and Shikoku—along with numerous smaller islands. The country is bordered by the Sea of Japan to the west and the Pacific Ocean to the east, making it an archipelago with a diverse range of landscapes, from mountainous regions and serene coastlines to bustling centers."
    },
    
    {
      title:"USA",
      image:USA,
      description:" The United States of America (USA) is a vast and diverse country located in North America, bordered by Canada to the north, Mexico to the south, the Atlantic Ocean to the east, and the Pacific Ocean to the west. It is composed of 50 states, each with its own unique culture, landscape, and history. As the third-largest country in the world by both land area and population, the USA offers a remarkable variety of environments, from snow-capped mountains and expansive deserts to dense forests and bustling."
    },

    {
      title:"Italy",
      image:Italy,
      description:" Italy, located in Southern Europe, is a country known for its rich history, art, culture, and breathtaking landscapes. Shaped like a boot, Italy is surrounded by the Mediterranean Sea, bordered by France, Switzerland, Austria, and Slovenia to the north. With a history that spans thousands of years, Italy has had a profound influence on Western civilization, shaping everything from politics and philosophy to art, architecture, and cuisine."
    },
    
    {
      title: "Newyork",
      image: Newyork ,
      description:" New Yorks neighborhoods are rich in character, each with its own distinct vibe. Brooklyn is known for its trendy atmosphere, historic brownstones, and cultural hubs like DUMBO and Williamsburg, offering a mix of art galleries, music venues, and excellent food. Queens, the most ethnically diverse borough, is celebrated for its diverse culinary scene, featuring flavors from every corner of the globe. The Bronx is the birthplace of hip-hop and home to the famous Yankee Stadium, while Staten Island offers a quieter retreat with  views.",

    },
  ]
  return (
    <div className="tourism-grid">
      {destinations.map((destination, index) => (
        <div key={index} className="tourism-item">
          <img
            src={destination.image}
            alt={destination.title}
            className="tourism-image"
            />
          <h3 className="tourism-title">{destination.title}</h3>
          <p className="tourism-description">{destination.description}</p>
          <Link
            to="/about"
            state={{
              title: destination.title,
              description: destination.description,
              image: destination.image,
            }}
            className="read-more"
          >
            Read more
          </Link>
        </div>
      ))}
    </div>
  );
};
export default DestinationGrid;