import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import StrategyBuilder from './pages/StrategyBuilder';
import SavedStrategies from './pages/SavedStrategies';
import Results from './pages/Results';

function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col bg-gray-50">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/builder" element={<StrategyBuilder />} />
            <Route path="/saved" element={<SavedStrategies />} />
            <Route path="/results" element={<Results />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;