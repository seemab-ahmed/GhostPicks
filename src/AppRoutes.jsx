import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Work from "./pages/Work";
import ReferEarn from "./pages/ReferEarn";
import CookiesPolicy from "./pages/CookiesPolicy";
import TermsAndConditions from "./pages/TermsAndConditions";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import RefundPolicy from "./pages/RefundPolicy";
// import Contact from "./pages/Contact";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/work" element={<Work />} />
      <Route path="/refer&earn" element={<ReferEarn />} />
      <Route path="/cookie-policy" element={<CookiesPolicy />} />
      <Route path="/terms&conditions" element={<TermsAndConditions />} />
      <Route path="/privacy-policy" element={<PrivacyPolicy />} />
      <Route path="/refund-policy" element={<RefundPolicy />} />
    </Routes>
  );
};

export default AppRoutes;
