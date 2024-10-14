// src/pages/Home.js
import React from "react";
import './Home.css'
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <h1>Welcome to the Travel Itinerary Planner</h1>
      <p>Plan your next trip!</p>
      <Link to="/add-itinerary">Add Itinerary</Link>
    </div>
  );
};

export default Home;
