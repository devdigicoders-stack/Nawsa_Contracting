import React from 'react';
import { Link } from 'react-router-dom';
import { 
  CheckCircle2, ArrowRight, ShieldCheck, 
  Sparkles, Building2, Home as HomeIcon, Check
} from 'lucide-react';
import useSEO from '../hooks/useSEO';
import ClientLogos from '../components/ClientLogos';
import './SoftFM.css';

const CleaningServices = () => {
  useSEO({
    title: "Commercial Cleaning Services Qatar | Deep Cleaning & Housekeeping | NAWSA",
    description: "NAWSA delivers reliable commercial cleaning services Qatar businesses trust, including specialized deep cleaning, office housekeeping, and thorough post-construction cleaning in Doha.",
    keywords: "Commercial cleaning services Qatar, deep cleaning, housekeeping, post-construction cleaning, NAWSA"
  });

  const cleaningScopes = [
    {
      title: "Commercial & Office Cleaning",
      desc: "Scheduled day-to-day office housekeeping, janitorial routines, high-touch sanitization, and workstation disinfection."
    },
    {
      title: "Intensive Deep Cleaning",
      desc: "Comprehensive deep cleaning for villas, residential towers, commercial kitchens, washrooms, and high-occupancy facilities."
    },
    {
      title: "Post-Construction Cleaning",
      desc: "Heavy debris removal, paint snag clearing, grout haze cleaning, and detailed handover polishing for new construction and fit-out handovers."
    },
    {
      title: "Glass, Facade & Floor Buffing",
      desc: "High-reach external glass washing, marble crystallization, carpet extraction, and industrial tile scrubbing."
    }
  ];

  return (
    <div className="soft-fm-page cleaning-page">
      {/* 1. Hero */}
      <section className="page-hero soft-hero">
        <div className="page-hero-overlay"></div>
        <div className="container page-hero-content text-center">
          <span className="section-label text-white border-white">HYGIENE & FACILITY CARE</span>
          <h1 className="h1 text-white mb-4 mt-2">Commercial Cleaning Services Qatar</h1>
          <p className="hero-subtitle mx-auto max-w-3xl">
            NAWSA provides professional <strong>commercial cleaning services Qatar</strong> facilities rely upon. We deliver specialized <strong>deep cleaning</strong>, dependable corporate <strong>housekeeping</strong>, and meticulous <strong>post-construction cleaning</strong> for projects across Doha.
          </p>
          <div className="hero-actions justify-center mt-6 flex gap-4 flex-wrap">
            <Link to="/contact" className="btn btn-primary">Request Cleaning Quote</Link>
            <a href="https://wa.me/97431310436" target="_blank" rel="noopener noreferrer" className="btn btn-outline border-white text-white hover:bg-white hover:text-black">
              Chat on WhatsApp
            </a>
          </div>
          <div className="breadcrumb mt-5">
            <Link to="/">Home</Link> <span className="mx-2">/</span> <span className="current">Cleaning Services</span>
          </div>
        </div>
      </section>

      {/* 2. Overview */}
      <section className="section-padding">
        <div className="container soft-intro-container">
          <div className="intro-image-wrapper">
            <img src="/images/soft_fm.jpg" alt="Commercial cleaning and housekeeping services in Doha Qatar" />
          </div>
          <div className="intro-content">
            <span className="section-label">SPOTLESS STANDARDS</span>
            <h2 className="h2">Pristine Environments for Health & Productivity</h2>
            <p className="text-body mb-4">
              A pristine work and living environment reflects professionalism and protects occupant health. NAWSA’s <strong>commercial cleaning services Qatar</strong> teams utilize eco-friendly chemicals, industrial extraction machines, and vetted staff to deliver hospital-grade <strong>deep cleaning</strong>, consistent <strong>housekeeping</strong>, and handover-ready <strong>post-construction cleaning</strong>.
            </p>
            <div className="mini-highlights">
              <span>Eco-Friendly Detergents</span>
              <span>Trained & Vetted Staff</span>
              <span>Hospitality & Health Standards</span>
              <span>Flexible Daily/Weekly Shifts</span>
              <span>Post-Fit-Out Handover Specialists</span>
              <span>Transparent Quality Audits</span>
            </div>
            <div className="mt-6 flex gap-3 flex-wrap">
              <a href="tel:+97431483658" className="btn btn-primary">Call +974 31483658</a>
              <Link to="/contact" className="btn btn-outline">Schedule Site Inspection</Link>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Detailed Scope */}
      <section className="section-padding bg-light">
        <div className="container">
          <div className="section-header text-center">
            <span className="section-label" style={{ color: 'var(--color-primary)', fontWeight: '700', letterSpacing: '1px' }}>CLEANING SOLUTIONS</span>
            <h2 className="h2">Tailored Cleaning & Housekeeping Capabilities</h2>
            <p className="text-body max-w-2xl mx-auto mt-2">
              From daily corporate upkeep to intensive industrial deep cleaning across Doha.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
            {cleaningScopes.map((scope, idx) => (
              <div key={idx} className="p-6 bg-white rounded-xl shadow-sm border border-gray-100 flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-primary/10 text-primary flex items-center justify-center flex-shrink-0 mt-1">
                  <Sparkles size={20} />
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
          <h2 className="h2 text-white mb-4">Elevate Your Facility's Hygiene Standards</h2>
          <p className="text-gray-soft mb-6 text-lg">
            Schedule a site walkthrough with NAWSA's cleaning supervisors for a tailored commercial cleaning plan.
          </p>
          <div className="flex justify-center gap-4 flex-wrap">
            <Link to="/contact" className="btn btn-primary !px-6 !py-3">Request a Proposal</Link>
            <a href="tel:+97431310436" className="btn btn-outline hero-btn-outline !px-6 !py-3">Call +974 31310436</a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CleaningServices;
