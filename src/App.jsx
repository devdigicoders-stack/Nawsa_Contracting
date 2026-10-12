import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import TopBar from './components/TopBar';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import FloatingButtons from './components/FloatingButtons';

// Pages
import Home from './pages/Home';
import AboutUs from './pages/AboutUs';
import FinishingWorks from './pages/FinishingWorks';
import ConstructionServices from './pages/ConstructionServices';
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
            <Route path="/services/construction" element={<ConstructionServices />} />
            <Route path="/services/construction-services" element={<ConstructionServices />} />
            <Route path="/services/finishing-works" element={<FinishingWorks />} />
            <Route path="/services/general-finishing" element={<FinishingWorks />} />
            {/* Backwards-compatibility routes */}
            <Route path="/services/soft-fm" element={<FinishingWorks />} />
            <Route path="/services/hard-fm" element={<ConstructionServices />} />
            <Route path="/industries" element={<Industries />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/contact" element={<Contact />} /> 
          </Routes>

        </main>
        <Footer />
        <FloatingButtons />
      </div>
    </Router>
  );
}

export default App;