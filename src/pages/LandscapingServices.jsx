import React from 'react';
import { Link } from 'react-router-dom';
import { 
  CheckCircle2, ArrowRight, ShieldCheck, 
  Trees, Droplet, Sprout, Sun, Flower2, Check
} from 'lucide-react';
import useSEO from '../hooks/useSEO';
import ClientLogos from '../components/ClientLogos';
import './SoftFM.css';

const LandscapingServices = () => {
  useSEO({
    title: "Landscaping Services Qatar | Garden & Irrigation Maintenance | NAWSA",
    description: "NAWSA offers premier landscaping services Qatar relies upon, providing systematic garden maintenance, automated irrigation maintenance, and comprehensive outdoor care.",
    keywords: "Landscaping services Qatar, garden maintenance, irrigation maintenance, outdoor care, NAWSA"
  });

  const landscapeScopes = [
    {
      title: "Routine Garden Maintenance",
      desc: "Scheduled lawn mowing, edging, pruning, seasonal plant nutrition, pest prevention, and weed control for lush outdoor environments."
    },
    {
      title: "Irrigation Maintenance & Water Efficiency",
      desc: "Automated drip and sprinkler system audits, pipe leak rectification, pump servicing, timer optimization, and water conservation adjustments."
    },
    {
      title: "Hardscape & Outdoor Care",
      desc: "Pathway pressure washing, exterior curbing repairs, decorative gravel replenishment, planter maintenance, and common outdoor space upkeep."
    },
    {
      title: "Softscape Installation & Green Enhancement",
      desc: "Selection and planting of climate-resilient flora, palms, flowering shrubs, turf installation, and organic soil enrichment."
    }
  ];

  return (
    <div className="soft-fm-page landscape-page">
      {/* 1. Hero */}
      <section className="page-hero soft-hero">
        <div className="page-hero-overlay"></div>
        <div className="container page-hero-content text-center">
          <span className="section-label text-white border-white">EXTERIOR GROUNDS & NATURE</span>
          <h1 className="h1 text-white mb-4 mt-2">Landscaping Services Qatar</h1>
          <p className="hero-subtitle mx-auto max-w-3xl">
            NAWSA provides complete <strong>landscaping services Qatar</strong> properties trust for vibrant outdoor living. Our groundskeepers deliver structured <strong>garden maintenance</strong>, water-efficient <strong>irrigation maintenance</strong>, and meticulous <strong>outdoor care</strong> across residential, commercial, and institutional grounds.
          </p>
          <div className="hero-actions justify-center mt-6 flex gap-4 flex-wrap">
            <Link to="/contact" className="btn btn-primary">Request Landscaping Quote</Link>
            <a href="https://wa.me/97431310436" target="_blank" rel="noopener noreferrer" className="btn btn-outline border-white text-white hover:bg-white hover:text-black">
              Chat on WhatsApp
            </a>
          </div>
          <div className="breadcrumb mt-5">
            <Link to="/">Home</Link> <span className="mx-2">/</span> <span className="current">Landscaping Services</span>
          </div>
        </div>
      </section>

      {/* 2. Overview */}
      <section className="section-padding">
        <div className="container soft-intro-container">
          <div className="intro-image-wrapper">
            <img src="/images/residential.jpg" alt="Landscaping and garden maintenance services in Doha Qatar" />
          </div>
          <div className="intro-content">
            <span className="section-label">SUSTAINABLE OUTDOOR LIVING</span>
            <h2 className="h2">Thriving Greenery Adapted to Qatar's Climate</h2>
            <p className="text-body mb-4">
              Qatar’s desert environment demands specialized horticultural knowledge and efficient water usage. With NAWSA’s <strong>landscaping services Qatar</strong> programs, your property enjoys flourishing plant life through proactive <strong>garden maintenance</strong>, precision <strong>irrigation maintenance</strong>, and year-round <strong>outdoor care</strong>.
            </p>
            <div className="mini-highlights">
              <span>Smart Irrigation Control</span>
              <span>Climate-Resilient Plants</span>
              <span>Scheduled Pruning & Trimming</span>
              <span>Organic Soil Conditioning</span>
              <span>Exterior Hardscape Care</span>
              <span>Seasonal Greenery Plans</span>
            </div>
            <div className="mt-6 flex gap-3 flex-wrap">
              <a href="tel:+97431483658" className="btn btn-primary">Call +974 31483658</a>
              <Link to="/contact" className="btn btn-outline">Consult Our Landscapers</Link>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Detailed Scope */}
      <section className="section-padding bg-light">
        <div className="container">
          <div className="section-header text-center">
            <span className="section-label" style={{ color: 'var(--color-primary)', fontWeight: '700', letterSpacing: '1px' }}>LANDSCAPE CAPABILITIES</span>
            <h2 className="h2">Comprehensive Grounds Maintenance</h2>
            <p className="text-body max-w-2xl mx-auto mt-2">
              Tailored horticultural and outdoor management solutions for villas, hotels, schools, and business campuses.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
            {landscapeScopes.map((scope, idx) => (
              <div key={idx} className="p-6 bg-white rounded-xl shadow-sm border border-gray-100 flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-primary/10 text-primary flex items-center justify-center flex-shrink-0 mt-1">
                  <Trees size={20} />
                </div>
                <div>
                  <h4 className="text-lg font-bold text-gray-900 mb-2">{scope.title}</h4>
                  <p className="text-sm text-gray-600 leading-relaxed">{scope.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Client Logos */}
      <ClientLogos />

      {/* 5. Final CTA */}
      <section className="section-padding bg-black text-white text-center">
        <div className="container max-w-3xl">
          <h2 className="h2 text-white mb-4">Enhance Your Property's Curb Appeal</h2>
          <p className="text-gray-soft mb-6 text-lg">
            Discuss your garden design, irrigation upgrade, or grounds maintenance contract with NAWSA today.
          </p>
          <div className="flex justify-center gap-4 flex-wrap">
            <Link to="/contact" className="btn btn-primary !px-6 !py-3">Request Free Consultation</Link>
            <a href="tel:+97431310436" className="btn btn-outline hero-btn-outline !px-6 !py-3">Call +974 31310436</a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default LandscapingServices;
