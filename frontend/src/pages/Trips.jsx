import { useEffect, useState } from "react";
import axios from "axios";
import { TRIP_ENDPOINTS } from "../api/endpoint";

const Trips = () => {
  const [trips, setTrips] = useState([]);

  useEffect(() => {
    const fetchTrips = async () => {
      const token = localStorage.getItem("token");

      const res = await axios.get(TRIP_ENDPOINTS.GET_ALL, {
        headers: { Authorization: `Bearer ${token}` },
      });

      setTrips(res.data);
    };

    fetchTrips();
  }, []);

  return (
    <div className="p-6">
      <h2 className="text-2xl mb-4">My Trips</h2>

      {trips.map((trip) => (
        <div key={trip._id} className="border p-4 mb-2">
          <h3 className="font-bold">{trip.destination}</h3>
          <p>Budget: ₹{trip.budget}</p>
        </div>
      ))}
    </div>
  );
};

export default Trips;
