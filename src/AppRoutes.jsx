import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Work from "./pages/Work";
import ReferEarn from "./pages/ReferEarn";
// import Contact from "./pages/Contact";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/work" element={<Work />} />
      <Route path="/refer&earn" element={<ReferEarn />} />
    </Routes>
  );
};

export default AppRoutes;
