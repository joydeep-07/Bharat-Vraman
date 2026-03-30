import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Import your pages
import Home from "./pages/Home";
import ExploreTemples from "./pages/ExploreTemples";
import Festivals from "./pages/Festivals";
import Mythology from "./pages/Mythology";
import TempleDetail from "./pages/TempleDetail";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/explore" element={<ExploreTemples />} />
        <Route path="/festivals" element={<Festivals />} />
        <Route path="/mythology" element={<Mythology />} />
        <Route path="/temple/:id" element={<TempleDetail />} />
      </Routes>
    </Router>
  );
};

export default App;
