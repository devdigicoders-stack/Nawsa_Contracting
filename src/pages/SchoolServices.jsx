import React from 'react';
import { Link } from 'react-router-dom';
import { 
  CheckCircle2, ArrowRight, ShieldCheck, 
  GraduationCap, Building2, Paintbrush, Wrench, Check
} from 'lucide-react';
import useSEO from '../hooks/useSEO';
import GovSchools from '../components/GovSchools';
import './HardFM.css';

const SchoolServices = () => {
  useSEO({
    title: "School Maintenance Qatar | Renovation & Educational FM | NAWSA",
    description: "NAWSA provides specialized school maintenance Qatar trusts, including classroom refurbishment, comprehensive school renovation, and educational facility maintenance across Doha.",
    keywords: "School maintenance Qatar, school renovation, educational facility maintenance, NAWSA"
  });

  const schoolScopes = [
    {
      title: "Classroom & Campus Refurbishment",
      desc: "Turnkey internal refurbishment for classrooms, lecture halls, corridors, and administrative blocks with safe, non-toxic materials."
    },
    {
      title: "Educational Civil Repairs & Painting",
      desc: "Surface preparation, anti-bacterial interior painting, wall and floor tiling, gypsum ceiling repairs, and structural touch-ups."
    },
    {
      title: "Plumbing, Sanitary & Restroom Overhauls",
      desc: "High-traffic student restroom repairs, hygienic sanitary installations, drainage line clearing, and scheduled water tank upkeep."
    },
    {
      title: "Electrical, Lighting & Fire Safety Inspections",
      desc: "Energy-efficient classroom lighting, safety distribution boards, emergency egress lighting, and fire alarm maintenance."
    }
  ];

  return (
    <div className="hard-fm-page school-page">
      {/* 1. Hero */}
      <section className="page-hero hard-hero">
        <div className="page-hero-overlay"></div>
        <div className="container page-hero-content text-center">
          <span className="section-label text-white border-white">EDUCATIONAL FACILITY CARE</span>
          <h1 className="h1 text-white mb-4 mt-2">School Maintenance Qatar – Renovation & Educational FM</h1>
          <p className="hero-subtitle mx-auto max-w-3xl">
            NAWSA delivers reliable <strong>school maintenance Qatar</strong> educational leadership counts on. We handle turnkey <strong>school renovation</strong>, classroom civil repairs, and comprehensive <strong>educational facility maintenance</strong> across Doha with rigorous safety protocols and minimal disruption.
          </p>
          <div className="hero-actions justify-center mt-6 flex gap-4 flex-wrap">
            <Link to="/contact" className="btn btn-primary">Request School Assessment</Link>
            <a href="https://wa.me/97431310436" target="_blank" rel="noopener noreferrer" className="btn btn-outline border-white text-white hover:bg-white hover:text-black">
              Chat on WhatsApp
            </a>
          </div>
          <div className="breadcrumb mt-5">
            <Link to="/">Home</Link> <span className="mx-2">/</span> <span className="current">School Services</span>
          </div>
        </div>
      </section>

      {/* 2. Overview */}
      <section className="section-padding">
        <div className="container hard-intro-container">
          <div className="intro-image-wrapper">
            <img src="/images/educational.jpg" alt="School maintenance and educational facility renovation in Doha Qatar" />
          </div>
          <div className="intro-content">
            <span className="section-label">SAFETY & COMPLIANCE</span>
            <h2 className="h2">Creating Safe, Inspiring Learning Spaces</h2>
            <p className="text-body mb-4">
              Proper <strong>educational facility maintenance</strong> is essential for student safety, staff comfort, and regulatory compliance. NAWSA provides scheduled and holiday-period <strong>school renovation</strong> programs covering civil repairs, fresh painting, hygienic tiling, and electrical safety audits tailored to Qatar's Ministry standards.
            </p>
            <div className="mini-highlights">
              <span>Hygienic Environment</span>
              <span>Fast Turnaround Handover</span>
              <span>Holiday Period Mobilization</span>
              <span>Non-Toxic Materials</span>
              <span>Strict Site Safety</span>
              <span>Detailed Project Records</span>
            </div>
            <div className="mt-6 flex gap-3 flex-wrap">
              <a href="tel:+97431483658" className="btn btn-primary">Call +974 31483658</a>
              <Link to="/contact" className="btn btn-outline">Enquire for School Contract</Link>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Detailed Scope */}
      <section className="section-padding bg-light">
        <div className="container">
          <div className="section-header text-center">
            <span className="section-label" style={{ color: 'var(--color-primary)', fontWeight: '700', letterSpacing: '1px' }}>SERVICE HIGHLIGHTS</span>
            <h2 className="h2">Comprehensive School Maintenance & Renovation</h2>
            <p className="text-body max-w-2xl mx-auto mt-2">
              Flexible scheduling during school terms, weekends, and vacation breaks to ensure seamless school operations.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
            {schoolScopes.map((scope, idx) => (
              <div key={idx} className="p-6 bg-white rounded-xl shadow-sm border border-gray-100 flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-primary/10 text-primary flex items-center justify-center flex-shrink-0 mt-1">
                  <GraduationCap size={20} />
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

      {/* 4. Interactive List of Supported Educational Institutions */}
      <GovSchools />

      {/* 5. Final CTA */}
      <section className="section-padding bg-black text-white text-center">
        <div className="container max-w-3xl">
          <h2 className="h2 text-white mb-4">Partner with Qatar's Trusted School Maintenance Specialist</h2>
          <p className="text-gray-soft mb-6 text-lg">
            Plan your school's maintenance, classroom refurbishment, or campus renovation with NAWSA today.
          </p>
          <div className="flex justify-center gap-4 flex-wrap">
            <Link to="/contact" className="btn btn-primary !px-6 !py-3">Contact Education Team</Link>
            <a href="tel:+97431310436" className="btn btn-outline hero-btn-outline !px-6 !py-3">Call +974 31310436</a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SchoolServices;
