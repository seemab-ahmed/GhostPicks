import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { BrowserRouter as Router } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import AppRoutes from "./AppRoutes";
import ScrollToTop from "./components/ScrollToTop"; // Import ScrollToTop component

function App() {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <Router>
      {/* Add ScrollToTop here */}
      <ScrollToTop />

      <Header />
      <div>
        <AppRoutes />
      </div>
      <Footer />
    </Router>
  );
}

export default App;
