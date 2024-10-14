// src/App.js
import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Dashboard from './pages/Dashboard';
import AddItinerary from './pages/AddItinerary';
import Login from './pages/Login';
import Signup from './pages/Signup';
import './App.css'
const App = () => {
  return (
    <>
      <Navbar />
      <Routes>   {/* Use Routes here for routing */}
        <Route path="/" element={<Home />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/add-itinerary" element={<AddItinerary />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
    </>
  );
};

export default App;
