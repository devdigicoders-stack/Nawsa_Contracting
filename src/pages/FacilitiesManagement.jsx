import React from 'react';
import { Link } from 'react-router-dom';
import { 
  CheckCircle2, ArrowRight, ShieldCheck, 
  Layers, Wrench, Sparkles, Building2, Cpu, Clock, Check
} from 'lucide-react';
import useSEO from '../hooks/useSEO';
import ClientLogos from '../components/ClientLogos';
import './HardFM.css';

const FacilitiesManagement = () => {
  useSEO({
    title: "Facilities Management Services Qatar | Hard FM & Soft FM | NAWSA",
    description: "NAWSA delivers comprehensive facilities management services Qatar relies upon, providing integrated Hard FM, Soft FM, and responsive property maintenance for commercial, residential and institutional properties.",
    keywords: "Facilities management services Qatar, Hard FM, soft FM, property maintenance, NAWSA"
  });

  const fmServices = [
    {
      id: "01",
      title: "Hard Facilities Management (Hard FM)",
      desc: "Technical maintenance covering HVAC cooling systems, electrical distribution, plumbing infrastructure, fire-fighting systems, and routine civil repairs.",
      points: ["HVAC & Cooling Plants", "Electrical Distribution & Lighting", "Plumbing & Drainage Networks", "Fire Alarm & Safety Systems", "Planned Preventive Maintenance (PPM)"]
    },
    {
      id: "02",
      title: "Soft Facilities Management (Soft FM)",
      desc: "Comprehensive soft services that enhance occupant hygiene, comfort, and workplace aesthetics across commercial, educational, and residential buildings.",
      points: ["Commercial Deep Cleaning", "Housekeeping & Janitorial", "Waste Management & Disposal", "Pest Control Management", "Indoor & Outdoor Landscaping Care"]
    },
    {
      id: "03",
      title: "Integrated Property Maintenance",
      desc: "Single-source facility care combining reactive repair callouts, scheduled site audits, and 24/7 emergency response to protect asset value.",
      points: ["24/7 Rapid Response Desk", "Dedicated Site Technicians", "Asset Lifecycle Monitoring", "Energy & Efficiency Audits", "Transparent Service Reporting"]
    }
  ];

  return (
    <div className="hard-fm-page fm-page">
      {/* 1. Hero */}
      <section className="page-hero hard-hero">
        <div className="page-hero-overlay"></div>
        <div className="container page-hero-content text-center">
          <span className="section-label text-white border-white">INTEGRATED FM SOLUTIONS</span>
          <h1 className="h1 text-white mb-4 mt-2">Facilities Management Services Qatar</h1>
          <p className="hero-subtitle mx-auto max-w-3xl">
            NAWSA delivers end-to-end <strong>facilities management services Qatar</strong> organizations depend upon. We coordinate integrated <strong>Hard FM</strong> technical maintenance, hygienic <strong>soft FM</strong> care, and proactive <strong>property maintenance</strong> across commercial, educational, and residential assets.
          </p>
          <div className="hero-actions justify-center mt-6 flex gap-4 flex-wrap">
            <Link to="/contact" className="btn btn-primary">Request FM Proposal</Link>
            <a href="https://wa.me/97431310436" target="_blank" rel="noopener noreferrer" className="btn btn-outline border-white text-white hover:bg-white hover:text-black">
              Chat on WhatsApp
            </a>
          </div>
          <div className="breadcrumb mt-5">
            <Link to="/">Home</Link> <span className="mx-2">/</span> <span className="current">Facilities Management</span>
          </div>
        </div>
      </section>

      {/* 2. Overview */}
      <section className="section-padding">
        <div className="container hard-intro-container">
          <div className="intro-image-wrapper">
            <img src="/images/hard_fm.jpg" alt="Facilities Management Services Qatar" />
          </div>
          <div className="intro-content">
            <span className="section-label">OPERATIONAL CONTINUITY</span>
            <h2 className="h2">Engineered Care for Building Lifecycles</h2>
            <p className="text-body mb-4">
              Our <strong>facilities management services Qatar</strong> programs are designed around operational continuity, occupant safety, and asset longevity. By seamlessly blending <strong>Hard FM</strong> technical precision with meticulous <strong>soft FM</strong> services, NAWSA provides unified <strong>property maintenance</strong> solutions with defined SLAs and single-point accountability.
            </p>
            <div className="mini-highlights">
              <span>Hard FM Technical Care</span>
              <span>Soft FM Hygiene</span>
              <span>Preventive Maintenance</span>
              <span>Rapid Emergency Response</span>
              <span>Dedicated Supervision</span>
              <span>Transparent Reporting</span>
            </div>
            <div className="mt-6 flex gap-3 flex-wrap">
              <a href="tel:+97431483658" className="btn btn-primary">Call +974 31483658</a>
              <Link to="/contact" className="btn btn-outline">Request Site Assessment</Link>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Core Pillars */}
      <section className="section-padding bg-light">
        <div className="container">
          <div className="section-header text-center">
            <span className="section-label" style={{ color: 'var(--color-primary)', fontWeight: '700', letterSpacing: '1px' }}>CORE FM PILLARS</span>
            <h2 className="h2">Tailored Hard & Soft FM Solutions</h2>
            <p className="text-body max-w-2xl mx-auto mt-2">
              Structured facility operations safeguarding your infrastructure and ensuring seamless day-to-day functionality.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
            {fmServices.map((service) => (
              <div key={service.id} className="p-8 bg-white rounded-2xl shadow-sm border border-gray-100 flex flex-col justify-between hover:shadow-md transition-all">
                <div>
                  <span className="text-xs font-bold text-primary tracking-widest uppercase">Pillar {service.id}</span>
                  <h3 className="h4 font-bold text-gray-900 mt-2 mb-3">{service.title}</h3>
                  <p className="text-body text-sm leading-relaxed mb-6">{service.desc}</p>
                  <ul className="space-y-2 mb-6">
                    {service.points.map((pt, idx) => (
                      <li key={idx} className="flex items-center gap-2 text-xs text-gray-700">
                        <CheckCircle2 size={15} className="text-primary flex-shrink-0" />
                        <span>{pt}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <Link to="/contact" className="btn btn-outline w-full text-center text-sm">Enquire for Facility Scope</Link>
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
          <h2 className="h2 text-white mb-4">Need Reliable Facilities Management in Doha, Qatar?</h2>
          <p className="text-gray-soft mb-6 text-lg">
            Let our FM specialists audit your property and prepare a tailored maintenance schedule aligned with your budget and operational priorities.
          </p>
          <div className="flex justify-center gap-4 flex-wrap">
            <Link to="/contact" className="btn btn-primary !px-6 !py-3">Request a Consultation</Link>
            <a href="tel:+97431310436" className="btn btn-outline hero-btn-outline !px-6 !py-3">Call +974 31310436</a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default FacilitiesManagement;
