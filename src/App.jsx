import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import TopBar from './components/TopBar';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import FloatingButtons from './components/FloatingButtons';

// Pages
import Home from './pages/Home';
import AboutUs from './pages/AboutUs';
import ConstructionServices from './pages/ConstructionServices';
import FinishingWorks from './pages/FinishingWorks';
import FacilitiesManagement from './pages/FacilitiesManagement';
import SchoolServices from './pages/SchoolServices';
import BuildingMaintenance from './pages/BuildingMaintenance';
import CleaningServices from './pages/CleaningServices';
import LandscapingServices from './pages/LandscapingServices';
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
            
            {/* SEO Service Pages */}
            <Route path="/services/construction" element={<ConstructionServices />} />
            <Route path="/services/construction-services" element={<ConstructionServices />} />
            
            <Route path="/services/finishing-works" element={<FinishingWorks />} />
            <Route path="/services/renovation-finishing" element={<FinishingWorks />} />
            <Route path="/services/general-finishing" element={<FinishingWorks />} />
            
            <Route path="/services/facilities-management" element={<FacilitiesManagement />} />
            <Route path="/services/hard-fm" element={<FacilitiesManagement />} />
            <Route path="/services/soft-fm" element={<FacilitiesManagement />} />
            
            <Route path="/services/school-maintenance" element={<SchoolServices />} />
            <Route path="/services/school-services" element={<SchoolServices />} />
            
            <Route path="/services/building-maintenance" element={<BuildingMaintenance />} />
            
            <Route path="/services/cleaning" element={<CleaningServices />} />
            <Route path="/services/commercial-cleaning" element={<CleaningServices />} />
            
            <Route path="/services/landscaping" element={<LandscapingServices />} />
            
            {/* Main Sections */}
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