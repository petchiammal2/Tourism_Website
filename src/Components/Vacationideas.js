import React from 'react';
import './CSS/vacation.css';
 import Beachfront from "../Assets/Beachfront.jpg";
 import Group from "../Assets/Group.jpg";
 import CityBreak from "../Assets/CityBreak.jpg";
function vacation() {
  return (
    <section className="vacation-ideas">
      <h3>See Latest Vacation Ideas</h3>
      <div className="ideas">
      <div className="ideas-card">
          <img src={Beachfront} alt="Beachfront" />
          <h4>Beachfront Escape</h4>
        </div>
        <div className="ideas-card">
          <img src={Group} alt="Group" />
          <h4>Group Holidays</h4>
        </div>
        <div className="ideas-card">
          <img src={CityBreak} alt="cityBreak" />
          <h4>City Breaks</h4>
        </div>
        
      </div>
    </section>
  );
}

export default vacation;
