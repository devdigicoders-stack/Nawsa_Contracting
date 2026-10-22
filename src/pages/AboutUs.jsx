import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { 
  CheckCircle2, ShieldCheck, Target, Compass, 
  Award, Users, HardHat, FileText, ArrowRight,
  TrendingUp, Sparkles, Building2, Wrench
} from 'lucide-react';
import gmImage from '../assets/Hasan Nazmul GM.png';
import ClientLogos from '../components/ClientLogos';
import CorporateDocuments from '../components/CorporateDocuments';
import useSEO from '../hooks/useSEO';
import './AboutUs.css';

const AboutUs = () => {
  const heroImages = [
    '/images/about/about_hero_1_1790079145368.jpg',
    '/images/about/about_hero_2_1790079161270.jpg',
    '/images/about/about_hero_3_1790079175328.jpg'
  ];
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % heroImages.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  useSEO({
    title: "Contracting Company in Qatar | About NAWSA",
    description: "Learn about NAWSA, an established contracting company in Qatar and premier facilities management company Doha offering turnkey property maintenance services.",
    keywords: "Contracting company in Qatar, facilities management company Doha, property maintenance services, NAWSA"
  });

  const coreValues = [
    {
      title: "Integrity",
      desc: "We value transparent communication, responsible conduct and realistic commitments.",
      icon: <ShieldCheck className="text-primary w-8 h-8" />
    },
    {
      title: "Quality",
      desc: "We pay attention to appropriate materials, workmanship, inspections and agreed project requirements.",
      icon: <Award className="text-primary w-8 h-8" />
    },
    {
      title: "Safety",
      desc: "We consider people, property and worksite risks throughout planning and execution.",
      icon: <HardHat className="text-primary w-8 h-8" />
    },
    {
      title: "Accountability",
      desc: "We promote clear responsibilities, timely communication and effective issue resolution.",
      icon: <FileText className="text-primary w-8 h-8" />
    },
    {
      title: "Collaboration",
      desc: "We coordinate with clients, consultants, suppliers and subcontractors to support efficient project delivery.",
      icon: <Users className="text-primary w-8 h-8" />
    },
    {
      title: "Continuous Improvement",
      desc: "We use feedback and site experience to improve our working methods and service delivery.",
      icon: <TrendingUp className="text-primary w-8 h-8" />
    }
  ];

  const clientCommitments = [
    "Clear communication and defined service scopes.",
    "Practical planning and coordinated execution.",
    "Attention to workmanship and finishing quality.",
    "Safety-conscious site practices.",
    "Responsible resource use and property care.",
    "Continuous improvement through site experience and client feedback."
  ];

  return (
    <div className="about-page">
      
      {/* 1. Inner Page Hero */}
      <section className="page-hero" style={{ backgroundImage: `url(${heroImages[currentImage]})` }}>
        <div className="page-hero-overlay"></div>
        <div className="container page-hero-content text-center">
          <div className="breadcrumb animate-fade-in-up mb-4">
            <Link to="/">Home</Link> <span className="mx-2">/</span> <span className="current">About Us</span>
          </div>
          <span className="section-label text-white border-white mb-2">CONSTRUCTION EXPERTISE. A FACILITIES MANAGEMENT MINDSET.</span>
          <h1 className="page-hero-title animate-fade-in-up-delay-1">
            About NAWSA Contracting & Facilities Management
          </h1>
          <p className="page-hero-subtitle mx-auto animate-fade-in-up-delay-1 max-w-3xl">
            As a premier <strong>contracting company in Qatar</strong> and trusted <strong>facilities management company Doha</strong>, NAWSA delivers integrated building maintenance, renovation and <strong>property maintenance services</strong> for residential, commercial and institutional properties across Qatar.
          </p>
          <div className="page-hero-actions animate-fade-in-up-delay-2 flex flex-wrap justify-center gap-3">
            <Link to="/contact" className="btn btn-primary !px-5 !py-2.5 !text-[0.95rem]">Request Consultation</Link>
            <a href="#credentials" className="btn btn-outline border-white text-white hover:bg-white hover:text-black transition-colors !px-5 !py-2.5 !text-[0.95rem]">Company Profile & Credentials</a>
            <a href="https://wa.me/97431310436" target="_blank" rel="noopener noreferrer" className="btn btn-outline border-white text-white hover:bg-white hover:text-black transition-colors !px-5 !py-2.5 !text-[0.95rem]">Chat on WA</a>
          </div>
          <div className="page-hero-highlights animate-fade-in-up-delay-2 mt-6">
            <span>Civil & Building Works</span>
            <span className="dot">•</span>
            <span>Fit-Out & Finishing</span>
            <span className="dot">•</span>
            <span>Property Maintenance</span>
            <span className="dot">•</span>
            <span>School Refurbishment</span>
            <span className="dot">•</span>
            <span>Facilities Management</span>
          </div>
        </div>
      </section>

      {/* 2. Company Overview / About Us */}
      <section className="section-padding">
        <div className="container about-overview-container">
          <div className="overview-image-wrapper">
            <img src="/images/about/about_overview_1790079192293.jpg" alt="NAWSA Company Overview" />
            <div className="image-quote-badge">
              "Your Property. Our Commitment. Built Around Long-Term Value."
            </div>
          </div>
          <div className="overview-content">
            <span className="section-label">WHO WE ARE</span>
            <h2 className="h2">Construction Expertise. A Facilities Management Mindset.</h2>
            <p className="text-body mb-4">
              NAWSA Contracting & Facilities Management is a premier <strong>contracting company in Qatar</strong> providing civil contracting, building maintenance, renovation and integrated facilities management services for residential, commercial and institutional properties.
            </p>
            <p className="text-body mb-4">
              Headquartered in Doha, we operate as a client-first <strong>facilities management company Doha</strong> and regional partners rely upon. We bring together engineering capabilities and specialized <strong>property maintenance services</strong> to help clients manage their buildings throughout their operational life.
            </p>
            <p className="text-body mb-4">
              Our services cover civil and building works, fit-out and finishing, painting, tiling, electrical and plumbing maintenance, drainage support, cleaning, housekeeping and landscaping. We also provide maintenance and renovation support for educational facilities, villas and commercial buildings, subject to the agreed project scope.
            </p>
            <p className="text-body mb-4">
              We believe successful project delivery starts with understanding client requirements, defining responsibilities and coordinating work effectively. Our approach focuses on practical planning, responsible workmanship, site safety, quality checks and clear communication.
            </p>
            <div className="overview-highlights">
              <div className="highlight-item"><CheckCircle2 className="icon" /> Building Construction & Civil Works</div>
              <div className="highlight-item"><CheckCircle2 className="icon" /> Building Maintenance Services</div>
              <div className="highlight-item"><CheckCircle2 className="icon" /> Integrated Hard & Soft FM</div>
              <div className="highlight-item"><CheckCircle2 className="icon" /> School Maintenance & Renovation</div>
            </div>
            <Link to="/contact" className="btn btn-primary mt-5">Request Consultation</Link>
          </div>
        </div>
      </section>

      {/* 2.5 Message from General Manager */}
      <section className="section-padding bg-white">
        <div className="container gm-message-container">
          <div className="gm-image-wrapper">
            <img src={gmImage} alt="Eng. Hasan Nazmul" className="gm-image" />
          </div>
          <div className="gm-content">
            <span className="section-label">MESSAGE FROM OUR LEADERSHIP</span>
            <h2 className="h2">Eng. Hasan Nazmul</h2>
            <h4 className="h4 text-primary mb-2">General Manager</h4>
            <p className="text-black font-semibold mb-4">NAWSA Contracting Facilities Management W.L.L.</p>
            
            <div className="gm-quote">
              <p className="text-body mb-4">
                "At NAWSA, we believe that successful projects are built on more than just construction materials — they depend on engineering reliability, craftsmanship, and consistent property care."
              </p>
              <p className="text-body mb-4">
                "Our commitment is to provide dependable building construction, finishing, maintenance, and facilities management services that help our clients maintain their properties safely, efficiently, and to the highest standards. We understand that every project has unique requirements, which is why we focus on practical, responsive, and tailored engineering solutions."
              </p>
              <p className="text-body mb-4">
                "Our team brings together skilled engineers, experienced site supervisors, and dedicated craftsmen to ensure that every project we deliver meets the expectations of our clients. From institutional and educational maintenance to general finishing and civil works, we strive to maintain the highest standards of quality and service."
              </p>
              <p className="text-body">
                "As General Manager, my priority is to build long-term relationships based on trust, transparency, and performance. We continuously work to improve our processes, develop our people, and adopt better ways of delivering property excellence across Qatar."
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Our Mission & Vision */}
      <section className="section-padding bg-light">
        <div className="container">
          <div className="section-header text-center mb-8">
            <span className="section-label" style={{ color: 'var(--color-primary)', fontWeight: '700', letterSpacing: '1px' }}>GUIDING PRINCIPLES</span>
            <h2 className="h2">Our Mission & Vision</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Mission */}
            <div className="p-8 bg-white rounded-2xl shadow-sm border border-gray-100 flex flex-col justify-between">
              <div>
                <div className="w-14 h-14 rounded-xl bg-primary/10 text-primary flex items-center justify-center mb-6">
                  <Target size={32} />
                </div>
                <span className="text-xs font-bold text-primary tracking-widest uppercase">Our Mission</span>
                <h3 className="h3 font-bold text-gray-900 mt-1 mb-4">Quality from Planning to Handover</h3>
                <p className="text-body leading-relaxed mb-4">
                  Our mission is to deliver dependable construction, renovation and facilities management solutions through clear planning, practical scheduling, appropriate resource coordination and consistent quality checks.
                </p>
                <p className="text-body leading-relaxed mb-4">
                  We strive to understand each client’s requirements, communicate progress effectively, manage site risks responsibly and complete work with attention to safety, functionality and value.
                </p>
                <p className="text-body leading-relaxed">
                  Through professional service delivery and a commitment to continuous improvement, we aim to build lasting client relationships and contribute to the reliable operation and upkeep of properties across Qatar.
                </p>
              </div>
            </div>

            {/* Vision */}
            <div className="p-8 bg-white rounded-2xl shadow-sm border border-gray-100 flex flex-col justify-between">
              <div>
                <div className="w-14 h-14 rounded-xl bg-primary/10 text-primary flex items-center justify-center mb-6">
                  <Compass size={32} />
                </div>
                <span className="text-xs font-bold text-primary tracking-widest uppercase">Our Vision</span>
                <h3 className="h3 font-bold text-gray-900 mt-1 mb-4">Built Around Long-Term Value</h3>
                <p className="text-body leading-relaxed mb-4">
                  Our vision is to become a trusted contracting and facilities management partner in Qatar, recognised for dependable service delivery, quality workmanship, technical care and strong client relationships.
                </p>
                <p className="text-body leading-relaxed mb-4">
                  We aspire to contribute to safer, better-maintained and more resource-efficient built environments by supporting the long-term usability of residential, commercial and institutional properties.
                </p>
                <p className="text-body leading-relaxed">
                  Through responsible execution, effective coordination and continuous improvement, we aim to create lasting value for our clients, building occupants and the wider communities we serve.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Our Core Values */}
      <section className="section-padding bg-white">
        <div className="container">
          <div className="section-header text-center mb-8">
            <span className="section-label" style={{ color: 'var(--color-primary)', fontWeight: '700', letterSpacing: '1px' }}>WHAT DRIVES US</span>
            <h2 className="h2">Our Core Values</h2>
            <p className="text-body max-w-2xl mx-auto mt-2">
              The fundamental standards and ethical commitments guiding every engagement across Qatar.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {coreValues.map((val, idx) => (
              <div key={idx} className="p-6 rounded-xl bg-gray-50 border border-gray-100 hover:bg-white hover:shadow-md transition-all">
                <div className="mb-4">{val.icon}</div>
                <h4 className="text-lg font-bold text-gray-900 mb-2">{val.title}</h4>
                <p className="text-sm text-gray-600 leading-relaxed">{val.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Our Approach & Commitment to Clients */}
      <section className="section-padding bg-light">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            <div>
              <span className="section-label">PARTNERSHIP & TRUST</span>
              <h2 className="h2 mb-4">Our Approach</h2>
              <p className="text-body mb-4">
                We aim to be more than a service provider. We work to establish dependable working relationships by understanding the specific requirements of every site and proposing solutions aligned with its operational needs.
              </p>
              <p className="text-body mb-6">
                From individual repair assignments to coordinated maintenance programmes, our focus remains on functionality, quality, safety and long-term property value.
              </p>
              <Link to="/contact" className="btn btn-primary">Start a Conversation</Link>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
              <h3 className="h3 font-bold text-gray-900 mb-4">Our Commitment to Clients</h3>
              <ul className="space-y-3">
                {clientCommitments.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <CheckCircle2 size={18} className="text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-sm text-gray-700 leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-6 pt-6 border-t border-gray-100 text-xs text-gray-500 italic">
                NAWSA is committed to supporting better-maintained buildings and more functional environments across Qatar through reliable contracting and facilities management solutions.
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6. Official Corporate Documents & Company Profile */}
      <div id="credentials">
        <CorporateDocuments />
      </div>

      {/* 7. Client Logos */}
      <ClientLogos />

      {/* 8. Final CTA */}
      <section className="section-padding final-cta-section text-center">
        <div className="container">
          <h2 className="h2 text-white mb-4">Need a Contracting & Facilities Management Partner You Can Rely On?</h2>
          <p className="text-gray-soft mb-6 max-w-2xl mx-auto">
            From civil construction and renovation to ongoing facilities management and school maintenance, NAWSA is ready to support your requirements across Qatar.
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

export default AboutUs;
