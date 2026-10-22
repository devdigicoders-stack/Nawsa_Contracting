import React from 'react';
import { Link } from 'react-router-dom';
import { 
  CheckCircle2, ArrowRight, ShieldCheck, 
  Building2, Home as HomeIcon, PlusCircle, GraduationCap, Compass, HardHat
} from 'lucide-react';
import useSEO from '../hooks/useSEO';
import './HardFM.css';

const ConstructionServices = () => {
  useSEO({
    title: "Building Construction Company in Qatar | Civil Works | NAWSA",
    description: "NAWSA is a trusted building construction company in Qatar delivering civil works Qatar standards require, structural extensions, and general contracting Doha.",
    keywords: "Building construction company in Qatar, civil works Qatar, general contracting Doha, NAWSA"
  });

  const constructionServices = [
    {
      id: '01',
      title: 'Building Construction & Civil Works',
      desc: 'Practical building and civil construction solutions, including blockwork, plastering, surface preparation, painting, floor and wall tiling, and selected finishing works, subject to project scope and specifications.',
      icon: <Building2 className="text-primary" size={36} />,
      image: '/images/commercial.jpg'
    },
    {
      id: '02',
      title: 'Villa & Property Construction',
      desc: 'Construction of new residential properties built to approved plans, with strong structural integrity, quality materials, and clean execution.',
      icon: <HomeIcon className="text-primary" size={36} />,
      image: '/images/residential.jpg'
    },
    {
      id: '03',
      title: 'Building Extensions & Structural Additions',
      desc: 'Additional rooms, structural extensions, and property expansions built to seamlessly integrate with existing buildings and approved codes.',
      icon: <PlusCircle className="text-primary" size={36} />,
      image: '/images/hard_fm.jpg'
    },
    {
      id: '04',
      title: 'School Maintenance & Renovation',
      desc: 'Maintenance and refurbishment support for educational and institutional facilities, including classroom repairs, painting, tiling, interior finishing and civil works.',
      icon: <GraduationCap className="text-primary" size={36} />,
      image: '/images/educational.jpg'
    }
  ];

  return (
    <div className="hard-fm-page construction-page">
      
      {/* 1. Hero Section */}
      <section className="page-hero hard-hero">
        <div className="page-hero-overlay"></div>
        <div className="container page-hero-content text-center">
          <span className="section-label text-white border-white">GENERAL CONTRACTING DOHA</span>
          <h1 className="h1 text-white mb-4 mt-2">Building Construction Company in Qatar</h1>
          <p className="hero-subtitle mx-auto max-w-3xl">
            NAWSA is an engineering-focused <strong>building construction company in Qatar</strong> delivering turnkey <strong>civil works Qatar</strong> standards mandate, from structural framing to comprehensive <strong>general contracting Doha</strong> projects.
          </p>
          <div className="hero-actions justify-center mt-6 flex gap-4 flex-wrap">
            <Link to="/contact" className="btn btn-primary">Request Consultation</Link>
            <a href="https://wa.me/97431310436" target="_blank" rel="noopener noreferrer" className="btn btn-outline border-white text-white hover:bg-white hover:text-black">
              Chat on WhatsApp
            </a>
          </div>
          <div className="breadcrumb mt-5">
            <Link to="/">Home</Link> <span className="mx-2">/</span> <span className="current">Construction Services</span>
          </div>
        </div>
      </section>

      {/* 2. Intro Section */}
      <section className="section-padding">
        <div className="container hard-intro-container">
          <div className="intro-image-wrapper">
            <img src="/images/hard_fm.jpg" alt="Construction in Qatar" />
          </div>
          <div className="intro-content">
            <span className="section-label">ORGANIZED EXECUTION</span>
            <h2 className="h2">Strong Structure. Quality Materials. Clean Finish.</h2>
            <p className="text-body mb-4">
              From ground-up civil projects to structural extensions and educational refurbishments, NAWSA provides complete construction and project management tailored to Qatar's climate and building standards.
            </p>
            <div className="mini-highlights">
              <span>Civil Works</span>
              <span>Commercial & Residential Buildings</span>
              <span>Extensions & Additions</span>
              <span>School Refurbishment</span>
              <span>Approved Engineering Plans</span>
              <span>Site Safety & Supervision</span>
            </div>
            <div className="mt-6 flex gap-3 flex-wrap">
              <a href="tel:+97431483658" className="btn btn-primary">Call +974 31483658</a>
              <a href="tel:+97431310436" className="btn btn-outline">Call +974 31310436</a>
            </div>
          </div>
        </div>
      </section>

      {/* 3. The 4 Construction Services Cards */}
      <section className="section-padding bg-light">
        <div className="container">
          <div className="section-header text-center">
            <span className="section-label" style={{ color: 'var(--color-primary)', fontWeight: '700', letterSpacing: '1px' }}>CORE SERVICES</span>
            <h2 className="h2">Our Construction Solutions</h2>
            <p className="text-body max-w-2xl mx-auto">
              Delivering organized project execution and quality craftsmanship for properties across Qatar.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
            {constructionServices.map((service) => (
              <div key={service.id} className="bg-white rounded-xl overflow-hidden shadow-sm border border-gray-100 hover:shadow-md transition-all flex flex-col md:flex-row">
                <div className="md:w-2/5 h-56 md:h-auto relative overflow-hidden">
                  <img src={service.image} alt={service.title} className="w-full h-full object-cover" />
                  <div className="absolute top-3 left-3 bg-black/70 text-white text-xs font-bold px-2.5 py-1 rounded">
                    {service.id}
                  </div>
                </div>
                <div className="md:w-3/5 p-6 flex flex-col justify-between">
                  <div>
                    <div className="mb-3">{service.icon}</div>
                    <h3 className="h3 font-bold text-black mb-3">{service.title}</h3>
                    <p className="text-body leading-relaxed">{service.desc}</p>
                  </div>
                  <div className="mt-6 pt-4 border-t border-gray-100">
                    <Link to="/contact" className="text-primary font-semibold flex items-center gap-2 hover:gap-3 transition-all">
                      Consult with Our Engineers <ArrowRight size={16} />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Complete Service Table */}
      <section className="section-padding bg-white">
        <div className="container">
          <div className="section-header text-center">
            <h2 className="h2">Construction Service Scope</h2>
            <p className="text-body max-w-2xl mx-auto">
              Summary of construction and civil capabilities provided by NAWSA in Qatar.
            </p>
          </div>

          <div className="overflow-x-auto mt-8">
            <table className="w-full text-left border-collapse border border-gray-200 rounded-lg overflow-hidden shadow-sm">
              <thead>
                <tr className="bg-black text-white">
                  <th className="py-4 px-6 font-semibold w-1/3">Service</th>
                  <th className="py-4 px-6 font-semibold">Description</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {constructionServices.map((item, idx) => (
                  <tr key={item.id} className={idx % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                    <td className="py-4 px-6 font-bold text-gray-900 flex items-center gap-3">
                      <span className="w-2.5 h-2.5 rounded-full bg-primary flex-shrink-0"></span>
                      {item.title}
                    </td>
                    <td className="py-4 px-6 text-gray-700 leading-relaxed">
                      {item.desc}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* 5. Construction Process */}
      <section className="section-padding bg-light">
        <div className="container text-center">
          <h2 className="h2 mb-5">Our Construction Process</h2>
          <div className="process-flow">
            <div className="process-step">
              <div className="process-circle">01</div>
              <h4>Planning & Scope</h4>
              <p>Review approved plans & site needs</p>
            </div>
            <div className="process-line"></div>
            <div className="process-step">
              <div className="process-circle">02</div>
              <h4>Mobilization</h4>
              <p>Team, safety & material staging</p>
            </div>
            <div className="process-line"></div>
            <div className="process-step">
              <div className="process-circle">03</div>
              <h4>Structure & Civil</h4>
              <p>Strong foundations & safe execution</p>
            </div>
            <div className="process-line"></div>
            <div className="process-step">
              <div className="process-circle">04</div>
              <h4>Finishing & MEP</h4>
              <p>High-grade finishing & systems</p>
            </div>
            <div className="process-line"></div>
            <div className="process-step">
              <div className="process-circle">05</div>
              <h4>Final Handover</h4>
              <p>Inspections & client walkthrough</p>
            </div>
          </div>
        </div>
      </section>

      {/* 6. Why Choose NAWSA for Construction */}
      <section className="section-padding">
        <div className="container hygiene-container">
          <div className="hygiene-content">
            <span className="section-label">THE NAWSA ADVANTAGE</span>
            <h2 className="h2">Dedicated Engineers on Every Site</h2>
            <ul className="hygiene-list mt-4">
              <li><CheckCircle2 className="icon" /> Experienced engineers with deep knowledge of Qatar construction</li>
              <li><CheckCircle2 className="icon" /> Strict adherence to approved plans and safety standards</li>
              <li><CheckCircle2 className="icon" /> Quality materials sourced for longevity and durability</li>
              <li><CheckCircle2 className="icon" /> Consistent site supervision and daily progress tracking</li>
              <li><CheckCircle2 className="icon" /> Clear project records and proactive client communication</li>
              <li><CheckCircle2 className="icon" /> On-schedule handover and dependable warranty support</li>
            </ul>
            <div className="mt-6 flex gap-4">
              <Link to="/contact" className="btn btn-primary">Request Site Consultation</Link>
            </div>
          </div>
          <div className="hygiene-image">
            <img src="/images/about/about_story_1790079206968.jpg" alt="Construction Supervision" />
          </div>
        </div>
      </section>

      {/* 7. Final CTA */}
      <section className="section-padding bg-black text-white text-center">
        <div className="container max-w-3xl">
          <h2 className="h2 text-white mb-4">Planning a Building, Villa Extension or Refurbishment in Qatar?</h2>
          <p className="text-gray-soft mb-6 text-lg">
            Discuss your project scope with NAWSA Contracting & Facilities Management's engineering team today.
          </p>
          <div className="flex justify-center gap-4 flex-wrap">
            <Link to="/contact" className="btn btn-primary !px-6 !py-3">Request a Tailored Proposal</Link>
            <a href="tel:+97431483658" className="btn btn-outline hero-btn-outline !px-6 !py-3">Call +974 31483658</a>
          </div>
        </div>
      </section>

    </div>
  );
};

export default ConstructionServices;
