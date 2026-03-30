import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Layout
import Root from "./Layouts/Root";

// Pages
import Home from "./pages/Home";
import ExploreTemples from "./pages/ExploreTemples";
import Festivals from "./pages/Festivals";
import Mythology from "./pages/Mythology";
import TempleDetail from "./pages/TempleDetail";

const App = () => {
  return (
    <Router>
      <Routes>
        {/* Root Layout */}
        <Route path="/" element={<Root />}>
          {/* Nested Routes */}
          <Route index element={<Home />} />
          <Route path="explore" element={<ExploreTemples />} />
          <Route path="festivals" element={<Festivals />} />
          <Route path="mythology" element={<Mythology />} />
          <Route path="temple/:id" element={<TempleDetail />} />
        </Route>
      </Routes>
    </Router>
  );
};

export default App;
