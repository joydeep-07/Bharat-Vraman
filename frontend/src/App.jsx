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

         
        </Route>
      </Routes>
    </Router>
  );
};

export default App;
