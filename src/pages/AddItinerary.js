import React, { useState } from "react";
import { db } from "../firebase/firebase";
import { collection, addDoc } from "firebase/firestore";

const AddItinerary = () => {
  const [destination, setDestination] = useState("");
  const [activity, setActivity] = useState("");
  const [dates, setDates] = useState("");
  const [tripType, setTripType] = useState("");
  const [loading, setLoading] = useState(false); // Step 1: Add loading state

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Step 2: Set loading to true while the form is being submitted
    setLoading(true);

    try {
      await addDoc(collection(db, "itineraries"), {
        destination,
        activity,
        dates,
        tripType,
      });
      alert("Itinerary added successfully!");

      // Step 3: Reset form and stop loading
      setDestination("");
      setActivity("");
      setDates("");
      setTripType("");
      setLoading(false); // Stop loading after submission
    } catch (error) {
      console.error("Error adding itinerary: ", error);
      setLoading(false); // Stop loading if there's an error
    }
  };

  return (
    <div>
      <h2>Add New Itinerary</h2>
      <form onSubmit={handleSubmit}>
        <label>Destination:</label>
        <input
          type="text"
          value={destination}
          onChange={(e) => setDestination(e.target.value)}
          required
        />

        <label>Activity:</label>
        <input
          type="text"
          value={activity}
          onChange={(e) => setActivity(e.target.value)}
          required
        />

        <label>Dates:</label>
        <input
          type="text"
          value={dates}
          onChange={(e) => setDates(e.target.value)}
          required
        />

        <label>Trip Type:</label>
        <select
          value={tripType}
          onChange={(e) => setTripType(e.target.value)}
          required
        >
          <option value="Adventure">Adventure</option>
          <option value="Leisure">Leisure</option>
          <option value="Work">Work</option>
        </select>

        <button type="submit" disabled={loading}>
          {loading ? "Adding..." : "Add Itinerary"}
        </button>
      </form>

      {/* Step 4: Show loading spinner when loading */}
      {loading && <div className="spinner">Loading...</div>}
    </div>
  );
};

export default AddItinerary;
