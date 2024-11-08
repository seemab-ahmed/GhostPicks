import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import AppRoutes from './AppRoutes';

function App() {
  return (
    <Router>
      <Header />
      <div className="text-center">
        <AppRoutes />
      </div>
      <Footer />
    </Router>
  );
}

export default App;
