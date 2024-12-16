import React from 'react';
import './CSS/Explore.css';


import Beach from "../Assets/beach.jpg";
import cliff from "../Assets/cliff.jpg";
import sunset from "../Assets/sunset.jpg";
import rainforest  from "../Assets/rainforest.jpg";
import norway from "../Assets/norway.jpg";
import resort from "../Assets/resorts.jpg";
function Explores() {
  return (
    <div>
      

      {/* Most Famous Places Section */}
      <section className="famous-places">
        <h2>Most famous places</h2>
        <p className="subtitle">Recommended</p>
        <div className="places-grid">
          <div className="place-card">
            <img src={Beach} alt="Beach" />
            <h3>Beach</h3>
            <p>Experience the vibrant culture and historic landmarks.Famous for luxurious water villas with private slides into the ocean.
            Jet skiing, parasailing, paddleboarding, and windsurfing. </p>
            <button className="discover-button">Discover place</button>
          </div>
          <div className="place-card">
            <img src={sunset} alt="sunset" />
            <h3>sunset</h3>
            <p>Discover ancient ruins and timeless art.Intense reds and oranges against vast, empty landscapes.
Best Spots: Sahara Desert, Arizona, Dubai.Mountain Sunset</p>
            <button className="discover-button">Discover place</button>
          </div>
          <div className="place-card">
            <img src={cliff} alt="Cliff" />
            <h3>Cliff</h3>
            <p>A hidden gem in the heart of Transylvania.Dramatic cliffs plunging into the Atlantic Ocean with lush green landscapesWalking trails along the edge, birdwatching (puffins!), and exploring nearby villages.</p>
            <button className="discover-button">Discover place</button>
          </div>
          <div className="place-card">
            <img src={rainforest} alt="rainforest" />
            <h3>raiforest</h3>
            <p>The city of light and romance.The rainforest is renowned for its unique geography, luxury experiences, and pristine natural beauty. Here are the key ways the Maldives stands out compared to other destinations and what makes it so distinctive.</p>
            <button className="discover-button">Discover place</button>
          </div>
          <div className="place-card">
            <img src={norway} alt="norway" />
            <h3>norway</h3>
            <p>Explore the iconic canals and vibrant streets.Norway is home to some of the world most dramatic fjords, including the UNESCO-listed Geirangerfjord and Nærøyfjord. These deep, narrow inlets are surrounded by steep cliffs and are unique to countries with glacial terrains</p>
            <button className="discover-button">Discover place</button>
          </div>
          <div className="place-card">
            <img src={resort} alt="resort" />
            <h3>resort</h3>
            <p>A blend of modernist architecture and sunny beaches.Beach resorts offer serene and romantic settings with plenty of opportunities for relaxation, swimming, snorkeling, and water sports like surfing and kayaking. Maldives  Overwater bungalows, crystal-clear waters, and private islands.
</p>
            <button className="discover-button">Discover place</button>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Explores;
