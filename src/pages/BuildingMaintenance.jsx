import React from 'react';
import { Link } from 'react-router-dom';
import { 
  CheckCircle2, ArrowRight, ShieldCheck, 
  Wrench, Zap, Droplet, Building2, Paintbrush, Clock
} from 'lucide-react';
import useSEO from '../hooks/useSEO';
import ClientLogos from '../components/ClientLogos';
import './HardFM.css';

const BuildingMaintenance = () => {
  useSEO({
    title: "Building Maintenance Company Doha | MEP & Civil Repairs | NAWSA",
    description: "NAWSA is a top-tier building maintenance company Doha counts on, delivering certified electrical maintenance, reliable plumbing maintenance, and prompt civil repairs for residential and commercial properties.",
    keywords: "Building maintenance company Doha, electrical maintenance, plumbing maintenance, civil repairs, NAWSA"
  });

  const maintenancePillars = [
    {
      icon: <Zap className="text-primary w-8 h-8" />,
      title: "Electrical Maintenance",
      desc: "Comprehensive electrical upkeep, distribution board testing, wiring inspections, circuit-breaker replacements, and safety earthing audits.",
      points: ["Switchboard & DB Inspections", "Lighting Fixtures & LED Retrofits", "Power Outage Troubleshooting", "Load Balancing & Safety Checks"]
    },
    {
      icon: <Droplet className="text-primary w-8 h-8" />,
      title: "Plumbing Maintenance",
      desc: "Fast, dependable plumbing repairs, sanitary fixture servicing, booster pump maintenance, water heater fixes, and pipeline leak rectifications.",
      points: ["Pipe Leak Detection & Repair", "Water Tank Cleaning & Float Valves", "Drainage Unblocking & Jetting", "Booster Pump Servicing"]
    },
    {
      icon: <Wrench className="text-primary w-8 h-8" />,
      title: "Civil Repairs & Masonry",
      desc: "Prompt structural and cosmetic civil maintenance covering plaster patching, tile re-grouting, door and window hardware, and ceiling repairs.",
      points: ["Wall Plaster & Gypsum Patches", "Cracked Tile Replacement", "Waterproofing Snags Rectification", "Handyman & General Repairs"]
    }
  ];

  return (
    <div className="hard-fm-page maintenance-page">
      {/* 1. Hero */}
      <section className="page-hero hard-hero">
        <div className="page-hero-overlay"></div>
        <div className="container page-hero-content text-center">
          <span className="section-label text-white border-white">RELIABLE PROPERTY UPKEEP</span>
          <h1 className="h1 text-white mb-4 mt-2">Building Maintenance Company Doha</h1>
          <p className="hero-subtitle mx-auto max-w-3xl">
            NAWSA is a trusted <strong>building maintenance company Doha</strong> properties rely on. We provide qualified <strong>electrical maintenance</strong>, 24/7 <strong>plumbing maintenance</strong>, and prompt <strong>civil repairs</strong> to ensure uninterrupted facility operations.
          </p>
          <div className="hero-actions justify-center mt-6 flex gap-4 flex-wrap">
            <Link to="/contact" className="btn btn-primary">Request Maintenance Support</Link>
            <a href="https://wa.me/97431310436" target="_blank" rel="noopener noreferrer" className="btn btn-outline border-white text-white hover:bg-white hover:text-black">
              Chat on WhatsApp
            </a>
          </div>
          <div className="breadcrumb mt-5">
            <Link to="/">Home</Link> <span className="mx-2">/</span> <span className="current">Building Maintenance</span>
          </div>
        </div>
      </section>

      {/* 2. Overview */}
      <section className="section-padding">
        <div className="container hard-intro-container">
          <div className="intro-image-wrapper">
            <img src="/images/preventive_maintenance.jpg" alt="Building Maintenance Company Doha" />
          </div>
          <div className="intro-content">
            <span className="section-label">UPFRONT PRICING & TRUST</span>
            <h2 className="h2">Preventive Care & Rapid Corrective Support</h2>
            <p className="text-body mb-4">
              As a dedicated <strong>building maintenance company Doha</strong>, NAWSA takes a structured, preventive approach to building care. From critical <strong>electrical maintenance</strong> and sanitary <strong>plumbing maintenance</strong> to timely <strong>civil repairs</strong>, we safeguard property integrity and eliminate costly surprise breakdowns.
            </p>
            <div className="mini-highlights">
              <span>Upfront Pricing</span>
              <span>Certified MEP Technicians</span>
              <span>Preventive Service Schedules</span>
              <span>Rapid Breakdown Callouts</span>
              <span>Comprehensive Civil Works</span>
              <span>Transparent Project Tracking</span>
            </div>
            <div className="mt-6 flex gap-3 flex-wrap">
              <a href="tel:+97431483658" className="btn btn-primary">Call +974 31483658</a>
              <Link to="/contact" className="btn btn-outline">Book Maintenance Service</Link>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Core Pillars */}
      <section className="section-padding bg-light">
        <div className="container">
          <div className="section-header text-center">
            <span className="section-label" style={{ color: 'var(--color-primary)', fontWeight: '700', letterSpacing: '1px' }}>CORE SERVICES</span>
            <h2 className="h2">Integrated Maintenance Capabilities</h2>
            <p className="text-body max-w-2xl mx-auto mt-2">
              End-to-end technical support for commercial complexes, residential villas, and institutional buildings.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
            {maintenancePillars.map((pillar, idx) => (
              <div key={idx} className="p-8 bg-white rounded-2xl shadow-sm border border-gray-100 flex flex-col justify-between hover:shadow-md transition-all">
                <div>
                  <div className="mb-4">{pillar.icon}</div>
                  <h3 className="h4 font-bold text-gray-900 mb-3">{pillar.title}</h3>
                  <p className="text-body text-sm leading-relaxed mb-6">{pillar.desc}</p>
                  <ul className="space-y-2 mb-6">
                    {pillar.points.map((pt, pIdx) => (
                      <li key={pIdx} className="flex items-center gap-2 text-xs text-gray-700">
                        <CheckCircle2 size={15} className="text-primary flex-shrink-0" />
                        <span>{pt}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <Link to="/contact" className="btn btn-outline w-full text-center text-sm">Request Service</Link>
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
          <h2 className="h2 text-white mb-4">Book Your Building Maintenance Team Today</h2>
          <p className="text-gray-soft mb-6 text-lg">
            Ensure long-term functionality and occupant comfort with NAWSA's planned maintenance agreements.
          </p>
          <div className="flex justify-center gap-4 flex-wrap">
            <Link to="/contact" className="btn btn-primary !px-6 !py-3">Request a Free Quote</Link>
            <a href="tel:+97431310436" className="btn btn-outline hero-btn-outline !px-6 !py-3">Call +974 31310436</a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default BuildingMaintenance;
