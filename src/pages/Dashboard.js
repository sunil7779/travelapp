// // src/pages/Dashboard.js
// import React, { useState, useEffect } from "react";
// import { db } from "../firebase/firebase";
// import { collection, getDocs } from "firebase/firestore";
// import { useNavigate } from "react-router-dom";

// const Dashboard = () => {
//   const [itineraries, setItineraries] = useState([]);
//   const navigate = useNavigate();

//   useEffect(() => {
//     const fetchItineraries = async () => {
//       const querySnapshot = await getDocs(collection(db, "itineraries"));
//       const itinerariesData = querySnapshot.docs.map(doc => doc.data());
//       setItineraries(itinerariesData);
//     };
//     fetchItineraries();
//   }, []);

//   return (
//     <div>
//       <h2>Your Itineraries</h2>
//       <ul>
//         {itineraries.map((itinerary, index) => (
//           <li key={index}>
//             <h3>{itinerary.destination}</h3>
//             <p>{itinerary.activity}</p>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// export default Dashboard;


import React, { useState, useEffect } from 'react';
import { db } from '../firebase/firebase';  // Import Firestore
import { collection, getDocs } from 'firebase/firestore';  // Firebase Firestore methods
import { useNavigate } from 'react-router-dom';
import './Dashboard.css'; // Add your styling here

const Dashboard = () => {
  const [itineraries, setItineraries] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    const fetchItineraries = async () => {
      try {
        // Get itineraries from Firestore
        const itinerariesCollection = collection(db, 'itineraries');
        const itinerariesSnapshot = await getDocs(itinerariesCollection);
        const itinerariesList = itinerariesSnapshot.docs.map(doc => doc.data());
        
        setItineraries(itinerariesList);
        setLoading(false);
      } catch (err) {
        setError('Failed to load itineraries.');
        setLoading(false);
      }
    };

    fetchItineraries();
  }, []);

  if (loading) {
    return <div className="loading-spinner">Loading...</div>;  // Optional: Show a loading spinner while fetching
  }

  return (
    <div className="dashboard-container">
      <h2>Welcome to Your Dashboard!</h2>
      
      {/* Check if there are any itineraries */}
      {itineraries.length === 0 ? (
        <div className="no-itineraries-message">
          <h3>No itineraries found!</h3>
          <p>It looks like you haven't planned any trips yet.</p>
          <p>Start planning your next adventure now!</p>
          <button onClick={() => navigate('/add-itinerary')} className="add-itinerary-btn">
            Add New Itinerary
          </button>
        </div>
      ) : (
        <div className="itinerary-list">
          <h3>Your Itineraries</h3>
          <ul>
            {itineraries.map((itinerary, index) => (
              <li key={index}>
                <h4>{itinerary.destination}</h4>
                <p>{itinerary.activity}</p>
                <p>{itinerary.date}</p>
                <button onClick={() => navigate(`/itinerary/${itinerary.id}`)}>View Details</button>
              </li>
            ))}
          </ul>
        </div>
      )}

      {error && <p className="error-message">{error}</p>}
    </div>
  );
};

export default Dashboard;
