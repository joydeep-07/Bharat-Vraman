import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Layout
import Root from "./layouts/Root";

// Pages
import Home from "./pages/Home";
import ExploreTemples from "./pages/ExploreTemples";
import Festivals from "./pages/Festivals";
import Mythology from "./pages/Mythology";
import TempleDetail from "./pages/TempleDetail";
import SmoothScroll from "./utils/SmoothScroll";
import TripPlan from "./pages/TripPlan";
import Login from "./pages/Login";
import Register from "./pages/Register";
import ProtectedRoute from "./utils/ProtectedRoute";
import Dashboard from "./pages/Dashboard";
import CreateTrip from "./pages/CreateTrip";
import Trips from "./pages/Trips";

const App = () => {
  return (
    <Router>
      <SmoothScroll />
      <Routes>
        {/* Root Layout */}
        <Route path="/" element={<Root />}>
          {/* Nested Routes */}
          <Route index element={<Home />} />
          <Route path="explore" element={<ExploreTemples />} />
          <Route path="festivals" element={<Festivals />} />
          <Route path="trip-planner" element={<TripPlan />} />
          <Route path="mythology" element={<Mythology />} />
          <Route path="temple/:slug" element={<TempleDetail />} />

          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />

          <Route element={<ProtectedRoute />}>
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/create-trip" element={<CreateTrip />} />
            <Route path="/trips" element={<Trips />} />
          </Route>
        </Route>
      </Routes>
    </Router>
  );
};

export default App;
