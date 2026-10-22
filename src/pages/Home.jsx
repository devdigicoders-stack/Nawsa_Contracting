import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { 
  ArrowRight, CheckCircle2, Building2, Wrench, ShieldCheck, 
  Phone, Mail, MapPin, Paintbrush, Trees, 
  GraduationCap, Home as HomeIcon, Sparkles, Layers,
  Compass, ClipboardCheck, Users, HardHat, Check, Award
} from 'lucide-react';
import ClientLogos from '../components/ClientLogos';
import FeaturedWorks from '../components/FeaturedWorks';
import GovSchools from '../components/GovSchools';
import useSEO from '../hooks/useSEO';
import './Home.css';

const Home = () => {
  const heroImages = [
    '/hero/hero1.jpg',
    '/hero/hero2.jpg',
    '/hero/hero3.jpg'
  ];
  const [currentImage, setCurrentImage] = useState(0);

  const [formData, setFormData] = useState({
    fullName: '',
    companyName: '',
    phone: '',
    email: '',
    serviceRequired: '',
    message: ''
  });
  const [loading, setLoading] = useState(false);
  const [successMsg, setSuccessMsg] = useState('');
  const [errorMsg, setErrorMsg] = useState('');

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setErrorMsg('');
    setSuccessMsg('');

    try {
      const response = await fetch(`${import.meta.env.VITE_API_URL}/enquiries`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...formData,
          facilityType: 'Unspecified',
          preferredContactMethod: 'Email'
        }),
      });

      const data = await response.json();

      if (response.ok && data.success) {
        setSuccessMsg('Thank you! Your enquiry has been submitted successfully.');
        setFormData({ fullName: '', companyName: '', phone: '', email: '', serviceRequired: '', message: '' });
        setTimeout(() => setSuccessMsg(''), 5000);
      } else {
        setErrorMsg(data.message || 'Failed to submit enquiry. Please try again.');
        setTimeout(() => setErrorMsg(''), 5000);
      }
    } catch (err) {
      setErrorMsg('An error occurred while submitting your enquiry. Please check your connection.');
      setTimeout(() => setErrorMsg(''), 5000);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % heroImages.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  useSEO({
    title: "Construction and Facilities Management Company in Qatar | NAWSA",
    description: "NAWSA is a premier construction and facilities management company in Qatar. As a trusted contracting company Doha developers rely on, we provide turnkey civil works, renovation, and building maintenance Qatar.",
    keywords: "Construction and facilities management company in Qatar, Contracting company Doha, building maintenance Qatar, NAWSA, NCFM"
  });

  const coreServices = [
    {
      id: "01",
      icon: <Building2 className="text-primary w-8 h-8" />,
      title: "Building Construction & Civil Works",
      desc: "Practical building and civil construction solutions, including blockwork, plastering, surface preparation, painting, floor and wall tiling, and selected finishing works, subject to project scope and specifications.",
      tags: ["Civil Works", "Blockwork", "Plastering", "Tiling & Finishing"],
      link: "/services/construction"
    },
    {
      id: "02",
      icon: <Wrench className="text-primary w-8 h-8" />,
      title: "Building Maintenance Services",
      desc: "Planned and corrective maintenance for residential, commercial and institutional properties, including civil repairs, electrical accessories, plumbing fixtures, painting and general building upkeep.",
      tags: ["Planned Maintenance", "Civil Repairs", "Electrical & Plumbing", "General Upkeep"],
      link: "/services/building-maintenance"
    },
    {
      id: "03",
      icon: <Layers className="text-primary w-8 h-8" />,
      title: "Facilities Management Services",
      desc: "Integrated hard and soft facilities management support designed to help maintain building functionality, occupant comfort, cleanliness and operational continuity.",
      tags: ["Hard FM", "Soft FM", "Operational Continuity", "Asset Care"],
      link: "/services/facilities-management"
    },
    {
      id: "04",
      icon: <GraduationCap className="text-primary w-8 h-8" />,
      title: "School Maintenance & Renovation",
      desc: "Maintenance and refurbishment support for educational facilities, including classroom and facility repairs, painting, tiling, interior finishing and civil maintenance works.",
      tags: ["Classroom Refurbishment", "Safety Standards", "Educational Facilities", "Civil Repairs"],
      link: "/services/school-maintenance"
    },
    {
      id: "05",
      icon: <HomeIcon className="text-primary w-8 h-8" />,
      title: "Villa & Commercial Building Maintenance",
      desc: "Property maintenance and renovation solutions covering interior and exterior repairs, plumbing, electrical maintenance, finishing works and common-area upkeep.",
      tags: ["Villa Maintenance", "Commercial Properties", "Interior & Exterior", "Common Areas"],
      link: "/services/building-maintenance"
    },
    {
      id: "06",
      icon: <Paintbrush className="text-primary w-8 h-8" />,
      title: "Painting, Fit-Out & Finishing Works",
      desc: "Professional finishing support, including internal painting, surface repairs, ceiling repairs, flooring, tiling, decorative finishes and snagging rectification.",
      tags: ["Internal Painting", "Ceiling Repairs", "Decorative Finishes", "Snagging Rectification"],
      link: "/services/finishing-works"
    },
    {
      id: "07",
      icon: <Sparkles className="text-primary w-8 h-8" />,
      title: "Cleaning & Housekeeping",
      desc: "Cleaning solutions for offices, commercial spaces and residential properties, including deep cleaning, post-construction cleaning, glass cleaning and floor care.",
      tags: ["Deep Cleaning", "Commercial Offices", "Post-Construction", "Floor & Glass Care"],
      link: "/services/cleaning"
    },
    {
      id: "08",
      icon: <Trees className="text-primary w-8 h-8" />,
      title: "Landscaping & Outdoor Maintenance",
      desc: "Landscaping, gardening, irrigation care and external-area maintenance to help keep outdoor spaces clean, functional and well maintained.",
      tags: ["Landscape Design", "Gardening", "Irrigation Systems", "External Grounds"],
      link: "/services/landscaping"
    }
  ];

  const whyChoosePoints = [
    {
      num: "01",
      title: "Integrated Service Capabilities",
      desc: "Construction, renovation, maintenance and property support through a coordinated service approach."
    },
    {
      num: "02",
      title: "Practical Project Planning",
      desc: "Clear scopes, realistic scheduling, site assessment and resource coordination."
    },
    {
      num: "03",
      title: "Quality-Focused Workmanship",
      desc: "Attention to materials, finishing details, inspections and agreed handover requirements."
    },
    {
      num: "04",
      title: "Safety-Conscious Execution",
      desc: "Consideration of site hazards, work methods, access requirements and applicable safety procedures."
    },
    {
      num: "05",
      title: "Client-Focused Communication",
      desc: "Coordination with clients and relevant project stakeholders throughout the agreed service process."
    },
    {
      num: "06",
      title: "Solutions for Different Property Types",
      desc: "Service capabilities for educational, residential, commercial and institutional environments."
    }
  ];

  const approachSteps = [
    { num: "01", title: "Enquiry & Assessment", desc: "Enquiry and requirement assessment" },
    { num: "02", title: "Site Survey", desc: "Site survey and condition review" },
    { num: "03", title: "Scope & Proposal", desc: "Scope definition and proposal" },
    { num: "04", title: "Mobilisation", desc: "Resource planning and mobilisation" },
    { num: "05", title: "Work Execution", desc: "Work execution and coordination" },
    { num: "06", title: "Quality Inspection", desc: "Quality inspection and rectification" },
    { num: "07", title: "Handover", desc: "Handover and agreed follow-up" }
  ];

  return (
    <div className="home-page">
      
      {/* 1. Hero Section */}
      <section className="hero" style={{ backgroundImage: `url(${heroImages[currentImage]})` }}>
        <div className="hero-overlay"></div>
        <div className="container hero-content text-center">
          <div className="inline-block px-4 py-1.5 mb-3 rounded-full bg-primary/90 text-white text-xs font-bold tracking-widest uppercase animate-fade-in-up">
            Build. Maintain. Sustain.
          </div>
          <h1 className="hero-title animate-fade-in-up">
            Reliable Construction & Facilities Management Services in Qatar
          </h1>
          <p className="hero-subtitle mx-auto animate-fade-in-up-delay-1 max-w-3xl">
            As a leading <strong>construction and facilities management company in Qatar</strong>, NAWSA Contracting & Facilities Management delivers practical construction, renovation, and <strong>building maintenance Qatar</strong> solutions across Doha. We are the trusted <strong>contracting company Doha</strong> developers, institutions, and property managers rely on for coordinated project execution and long-term care.
          </p>
          <p className="text-white/80 text-sm md:text-base max-w-2xl mx-auto mb-6 animate-fade-in-up-delay-1">
            From civil construction and finishing works to school maintenance, building renovation, electrical and plumbing maintenance, cleaning and landscaping, our services are tailored to the specific requirements of each property and project.
          </p>

          <div className="hero-motto italic text-white/95 font-medium mb-6 animate-fade-in-up-delay-2 text-sm md:text-base">
            "Your Property. Our Commitment. Built Around Long-Term Value."
          </div>

          <div className="hero-actions justify-center animate-fade-in-up-delay-2 flex flex-wrap gap-3">
            <Link to="/contact" className="btn btn-primary !px-6 !py-3 !text-[0.95rem]">Request a Consultation</Link>
            <a href="#services" className="btn btn-outline hero-btn-outline !px-6 !py-3 !text-[0.95rem]">Explore Our Services</a>
          </div>

          <div className="hero-highlights animate-fade-in-up-delay-2 mt-8">
            <span>Civil Construction</span>
            <span className="dot">•</span>
            <span>Building Maintenance</span>
            <span className="dot">•</span>
            <span>Facilities Management</span>
            <span className="dot">•</span>
            <span>School Maintenance</span>
            <span className="dot">•</span>
            <span>Finishing Works</span>
            <span className="dot">•</span>
            <span>Landscaping</span>
          </div>
        </div>
      </section>

      {/* 2. Comprehensive Contracting & Property Maintenance Solutions */}
      <section className="section-padding about-section" id="about-overview">
        <div className="container about-container">
          <div className="about-image-wrapper">
            <img src="/images/about_ncfm.jpg" alt="NAWSA Building Care" className="about-image" />
            <div className="floating-tags-container">
              <span className="floating-tag">Quality-Focused Workmanship</span>
              <span className="floating-tag">Safety-Conscious Execution</span>
            </div>
          </div>
          <div className="about-content">
            <span className="section-label">COMPREHENSIVE SOLUTIONS</span>
            <h2 className="h2">Comprehensive Contracting & Property Maintenance Solutions</h2>
            <p className="text-body mb-4">
              At NAWSA, we understand that every property requires dependable construction, regular maintenance and professional care to remain safe, functional and presentable.
            </p>
            <p className="text-body mb-4">
              Our service portfolio covers general construction, civil works, painting, tiling, fit-out and finishing, hard and soft facilities management, school maintenance, villa maintenance, commercial building maintenance, drainage support and landscaping.
            </p>
            <p className="text-body mb-4">
              Whether you require a specific maintenance service or coordinated support across a larger property, we work to understand your requirements, define the scope and deliver an appropriate service solution.
            </p>
            <ul className="about-features">
              <li><CheckCircle2 className="feature-icon" /> Dependable construction & civil works</li>
              <li><CheckCircle2 className="feature-icon" /> Regular & planned property maintenance</li>
              <li><CheckCircle2 className="feature-icon" /> Integrated hard & soft facilities management</li>
              <li><CheckCircle2 className="feature-icon" /> Tailored solutions for residential, commercial & educational properties</li>
            </ul>
            <div className="mt-5 flex gap-3 flex-wrap">
              <Link to="/contact" className="btn btn-primary">Request Consultation</Link>
              <Link to="/about" className="btn btn-outline">Learn About NAWSA</Link>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Our Core Services (The 8 Services) */}
      <section className="section-padding bg-light" id="services">
        <div className="container">
          <div className="section-header text-center">
            <span className="section-label" style={{ color: 'var(--color-primary)', fontWeight: '700', letterSpacing: '1px' }}>SERVICE PORTFOLIO</span>
            <h2 className="h2">Our Core Services</h2>
            <p className="text-body max-w-3xl mx-auto mt-2">
              Comprehensive contracting, renovation and property maintenance capabilities designed to support every phase of your facility's operational lifecycle.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-8">
            {coreServices.map((service) => (
              <div key={service.id} className="p-6 bg-white rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-all flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-xs font-bold text-gray-400 bg-gray-50 px-2 py-1 rounded">{service.id}</span>
                    {service.icon}
                  </div>
                  <h3 className="h4 font-bold text-black mb-3">{service.title}</h3>
                  <p className="text-body text-sm leading-relaxed mb-4">{service.desc}</p>
                </div>
                <div>
                  <div className="flex flex-wrap gap-1.5 mb-4">
                    {service.tags.map((tag, tIdx) => (
                      <span key={tIdx} className="text-[11px] bg-gray-50 text-gray-600 px-2 py-0.5 rounded border border-gray-100 font-medium">
                        {tag}
                      </span>
                    ))}
                  </div>
                  <Link to={service.link || "/contact"} className="text-primary font-semibold text-sm flex items-center gap-1 hover:gap-2 transition-all">
                    Explore Service <ArrowRight size={15} />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Supporting Educational & Government-Sector Projects */}
      <section className="section-padding bg-white">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center mb-8">
            <span className="section-label">PUBLIC & INSTITUTIONAL EXPERTISE</span>
            <h2 className="h2 mt-2">Supporting Educational & Government-Sector Projects</h2>
            <p className="text-body mt-4 leading-relaxed">
              NAWSA has experience delivering maintenance and renovation-related works on government-sector projects in Qatar. Our educational property service capabilities include school maintenance, classroom refurbishment, civil repairs, painting, tiling and finishing works.
            </p>
            <p className="text-body mt-2 leading-relaxed">
              We approach each assignment with attention to the agreed scope, site coordination, workmanship, safety and project requirements.
            </p>
          </div>
          
          {/* Government educational projects interactive school list */}
          <GovSchools />
        </div>
      </section>

      {/* 5. Why Choose NAWSA? */}
      <section className="section-padding bg-light">
        <div className="container">
          <div className="section-header text-center">
            <span className="section-label" style={{ color: 'var(--color-primary)', fontWeight: '700', letterSpacing: '1px' }}>KEY ADVANTAGES</span>
            <h2 className="h2">Why Choose NAWSA?</h2>
            <p className="text-body max-w-2xl mx-auto mt-2">
              Structured execution, verified workmanship, and dependable maintenance solutions built around long-term value.
            </p>
          </div>
          <div className="why-choose-grid mt-8">
            {whyChoosePoints.map((item, idx) => (
              <div key={idx} className="why-card">
                <span className="why-number">{item.num}</span>
                <h4>{item.title}</h4>
                <p>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. Our Approach: From Enquiry to Handover */}
      <section className="section-padding bg-white">
        <div className="container text-center">
          <span className="section-label" style={{ color: 'var(--color-primary)', fontWeight: '700', letterSpacing: '1px' }}>METHODOLOGY</span>
          <h2 className="h2 mb-4">Our Approach: From Enquiry to Handover</h2>
          <p className="text-body max-w-2xl mx-auto mb-8">
            A transparent 7-step process ensuring quality control and smooth coordination at every milestone.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-4">
            {approachSteps.map((step, idx) => (
              <div key={idx} className="p-4 bg-gray-50 rounded-xl border border-gray-100 flex flex-col items-center text-center hover:bg-white hover:shadow-sm transition-all">
                <div className="w-10 h-10 rounded-full bg-primary text-white font-bold flex items-center justify-center text-sm mb-3">
                  {step.num}
                </div>
                <h4 className="text-sm font-bold text-gray-900 mb-1.5">{step.title}</h4>
                <p className="text-xs text-gray-600 leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. Our Commitment */}
      <section className="section-padding bg-black text-white text-center">
        <div className="container max-w-3xl">
          <span className="section-label text-white border-white mb-3">OUR CORE COMMITMENT</span>
          <h2 className="h2 text-white mb-4">Your Property. Our Commitment. Built Around Long-Term Value.</h2>
          <p className="text-gray-300 text-base md:text-lg leading-relaxed mb-6">
            At NAWSA, we aim to create long-term value through dependable construction, responsive maintenance and responsible facilities management. Our focus is on helping clients maintain functional properties, manage maintenance requirements and support the long-term usability of their buildings.
          </p>
          <div className="flex justify-center gap-4 flex-wrap">
            <Link to="/contact" className="btn btn-primary !px-6 !py-3">Request a Consultation</Link>
            <Link to="/about" className="btn btn-outline hero-btn-outline !px-6 !py-3">Read Our Mission & Vision</Link>
          </div>
        </div>
      </section>

      {/* 8. Featured Works (Real Photos) */}
      <FeaturedWorks />

      {/* 9. Valued Clients & Logos */}
      <section className="section-padding bg-white">
        <div className="container">
          <div className="section-header text-center">
            <h2 className="h2">Our Valued Clients</h2>
            <p className="text-body max-w-2xl mx-auto mt-2">
              Trusted by leading organizations across Qatar for facilities management, renovation, maintenance, and contracting services.
            </p>
          </div>
          <div className="clients-grid mt-6">
            {[
              "Darwish Interserve",
              "Qatari Diar",
              "Elegancia Facilities Management",
              "Evaluation for Project",
              "Al Aalia Agriculture & Maintenance",
              "Qualified Facilities Management",
              "A to Z Group",
              "Al Aali International",
              "Al Asmakh Real Estate",
              "Lusail Real Estate Company",
              "Arab International School"
            ].map((client, index) => (
              <div key={index} className="client-card">
                <span className="client-number">{index + 1}</span>
                <h4 className="client-name">{client}</h4>
              </div>
            ))}
          </div>
        </div>
      </section>

      <ClientLogos />

      {/* 10. Let's Discuss Your Project / Contact CTA */}
      <section className="section-padding final-cta-section" id="contact-cta">
        <div className="container">
          <div className="final-cta-grid">
            <div className="final-cta-content">
              <span className="section-label text-white border-white mb-2">LET'S DISCUSS YOUR PROJECT</span>
              <h2 className="h2 text-white">Looking for a Construction, Renovation or FM Partner in Qatar?</h2>
              <p className="text-gray-soft mb-4">
                Contact NAWSA Contracting & Facilities Management to discuss your project requirements and receive a tailored service proposal.
              </p>
              
              <div className="space-y-2 mb-6 text-sm text-gray-200">
                <p className="font-semibold text-white">NAWSA Contracting & Facilities Management W.L.L.</p>
                <p className="flex items-center gap-2"><MapPin size={16} className="text-primary flex-shrink-0" /> Doha, Qatar</p>
                <p className="flex items-center gap-2">
                  <Phone size={16} className="text-primary flex-shrink-0" /> 
                  <a href="tel:+97431483658" className="hover:text-white underline">+974 31483658</a> 
                  <span className="mx-1">|</span> 
                  <a href="tel:+97431310436" className="hover:text-white underline">+974 31310436</a>
                </p>
                <p className="flex items-center gap-2"><Mail size={16} className="text-primary flex-shrink-0" /> info@ncfmqa.com</p>
              </div>

              <div className="flex gap-4 flex-wrap">
                <Link to="/contact" className="btn btn-primary">Contact Our Team</Link>
                <a href="https://wa.me/97431310436" target="_blank" rel="noopener noreferrer" className="btn btn-outline hero-btn-outline">
                  WhatsApp Us
                </a>
              </div>
            </div>

            <div className="final-cta-form">
              <form className="quick-enquiry-form" onSubmit={handleSubmit}>
                <h3>Request a Tailored Proposal</h3>
                {successMsg && <div className="bg-green-100 text-green-700 p-2 mb-3 rounded text-sm">{successMsg}</div>}
                {errorMsg && <div className="bg-red-100 text-red-700 p-2 mb-3 rounded text-sm">{errorMsg}</div>}
                <div className="form-group">
                  <input type="text" name="fullName" value={formData.fullName} onChange={handleInputChange} placeholder="Your Name" required />
                </div>
                <div className="form-group">
                  <input type="text" name="companyName" value={formData.companyName} onChange={handleInputChange} placeholder="Company / Organization" />
                </div>
                <div className="form-group flex gap-2">
                  <input type="tel" name="phone" value={formData.phone} onChange={handleInputChange} placeholder="Phone Number" required />
                  <input type="email" name="email" value={formData.email} onChange={handleInputChange} placeholder="Email Address" required />
                </div>
                <div className="form-group">
                  <select name="serviceRequired" value={formData.serviceRequired} onChange={handleInputChange} required>
                    <option value="">Select Service Required</option>
                    <option value="Building Construction & Civil Works">Building Construction & Civil Works</option>
                    <option value="Building Maintenance Services">Building Maintenance Services</option>
                    <option value="Facilities Management Services">Facilities Management Services</option>
                    <option value="School Maintenance & Renovation">School Maintenance & Renovation</option>
                    <option value="Villa & Commercial Building Maintenance">Villa & Commercial Building Maintenance</option>
                    <option value="Painting, Fit-Out & Finishing Works">Painting, Fit-Out & Finishing Works</option>
                    <option value="Cleaning & Housekeeping">Cleaning & Housekeeping</option>
                    <option value="Landscaping & Outdoor Maintenance">Landscaping & Outdoor Maintenance</option>
                  </select>
                </div>
                <div className="form-group">
                  <textarea name="message" value={formData.message} onChange={handleInputChange} placeholder="Project Scope or Requirements" rows="3" required></textarea>
                </div>
                <button type="submit" disabled={loading} className="btn btn-primary w-full flex justify-center items-center gap-2">
                  {loading ? (
                    <>
                      <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"><circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle><path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path></svg>
                      Submitting...
                    </>
                  ) : 'Request a Proposal'}
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
      
    </div>
  );
};

export default Home;
