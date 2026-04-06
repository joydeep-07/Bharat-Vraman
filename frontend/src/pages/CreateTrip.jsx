import { useState } from "react";
import axios from "axios";
import { TRIP_ENDPOINTS } from "../api/endpoint";

const CreateTrip = () => {
  const [trip, setTrip] = useState({
    destination: "",
    startDate: "",
    endDate: "",
    budget: "",
  });

  const handleSubmit = async () => {
    const token = localStorage.getItem("token");

    await axios.post(TRIP_ENDPOINTS.CREATE, trip, {
      headers: { Authorization: `Bearer ${token}` },
    });

    alert("Trip Created!");
  };

  return (
    <div className="p-6">
      <h2 className="text-xl mb-4">Create Trip</h2>

      <input
        className="block mb-2 p-2 border"
        placeholder="Destination"
        onChange={(e) => setTrip({ ...trip, destination: e.target.value })}
      />
      <input
        type="date"
        className="block mb-2 p-2 border"
        onChange={(e) => setTrip({ ...trip, startDate: e.target.value })}
      />
      <input
        type="date"
        className="block mb-2 p-2 border"
        onChange={(e) => setTrip({ ...trip, endDate: e.target.value })}
      />
      <input
        className="block mb-4 p-2 border"
        placeholder="Budget"
        onChange={(e) => setTrip({ ...trip, budget: e.target.value })}
      />

      <button onClick={handleSubmit} className="bg-black text-white px-4 py-2">
        Create
      </button>
    </div>
  );
};

export default CreateTrip;
