import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import TopBar from './components/TopBar';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

// Pages
import Home from './pages/Home';
import AboutUs from './pages/AboutUs';
import SoftFM from './pages/SoftFM';
import HardFM from './pages/HardFM';
import Industries from './pages/Industries';
import Projects from './pages/Projects';
import Contact from './pages/Contact';

import ScrollToTop from './components/ScrollToTop';

function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="app-container">
        <TopBar />
        <Navbar />
        <main className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<AboutUs />} />
            <Route path="/services/soft-fm" element={<SoftFM />} />
            <Route path="/services/hard-fm" element={<HardFM />} />
            <Route path="/industries" element={<Industries />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/contact" element={<Contact />} /> 
          </Routes>

        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;