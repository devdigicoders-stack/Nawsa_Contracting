import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { CheckCircle2, ShieldCheck, Settings, Users, Target, Zap, Clock, Activity, ArrowRight } from 'lucide-react';
import gmImage from '../assets/Hasan Nazmul GM.png';
import ClientLogos from '../components/ClientLogos';
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

  return (
    <div className="about-page">
      
      {/* 1. Inner Page Hero */}
      <section className="page-hero" style={{ backgroundImage: `url(${heroImages[currentImage]})` }}>
        <div className="page-hero-overlay"></div>
        <div className="container page-hero-content text-center">
          <div className="breadcrumb animate-fade-in-up mb-4">
            <Link to="/">Home</Link> <span className="mx-2">/</span> <span className="current">About Us</span>
          </div>
          <h1 className="page-hero-title animate-fade-in-up-delay-1">Your Trusted Construction Partner</h1>
          <p className="page-hero-subtitle mx-auto animate-fade-in-up-delay-1 max-w-3xl">
            Since our founding, MBA Contracting has been dedicated to delivering professional building construction, finishing, maintenance, and renovation services that Doha homeowners and businesses can rely on. With skilled engineers, transparent pricing, and a commitment to excellence, we've become a trusted partner for properties across Qatar.
          </p>
          <div className="page-hero-actions animate-fade-in-up-delay-2">
            <Link to="/projects" className="btn btn-primary !px-5 !py-2.5 !text-[0.95rem]">Explore Our Services</Link>
            <a href="https://wa.me/97431310436" target="_blank" rel="noopener noreferrer" className="btn btn-outline border-white text-white hover:bg-white hover:text-black transition-colors !px-5 !py-2.5 !text-[0.95rem]">Chat with us on WA</a>
          </div>
          <div className="page-hero-highlights animate-fade-in-up-delay-2">
            <span>Villa Construction</span>
            <span className="dot">•</span>
            <span>Building Construction</span>
            <span className="dot">•</span>
            <span>Extension & Majlis</span>
            <span className="dot">•</span>
            <span>General Finishing</span>
            <span className="dot">•</span>
            <span>Maintenance</span>
          </div>
        </div>
      </section>

      {/* 2. Company Overview / About Us */}
      <section className="section-padding">
        <div className="container about-overview-container">
          <div className="overview-image-wrapper">
            <img src="/images/about/about_overview_1790079192293.jpg" alt="Company Overview" />
            <div className="image-quote-badge">
              "Delivering practical solutions with attention to detail across Qatar."
            </div>
          </div>
          <div className="overview-content">
            <span className="section-label">WHO WE ARE</span>
            <h2 className="h2">Built on Quality. Driven by Excellence.</h2>
            <p className="text-body mb-4">
              MBA Contracting is a building construction, maintenance and renovation company in Qatar, providing comprehensive solutions for residential and commercial properties across all major communities. We specialize in general finishing works, villa construction, building construction, extension construction, majlis construction, and building maintenance services.
            </p>
            <p className="text-body mb-4">
              Our mission is simple: make building, maintenance, and renovation effortless, transparent, and reliable. Whether you need a new villa, an extension, a majlis, finishing works, or ongoing maintenance support, our team of experienced engineers and skilled professionals delivers exceptional service with integrity and expertise.
            </p>
            <div className="overview-highlights">
              <div className="highlight-item"><CheckCircle2 className="icon" /> Villa Construction</div>
              <div className="highlight-item"><CheckCircle2 className="icon" /> Building Construction</div>
              <div className="highlight-item"><CheckCircle2 className="icon" /> General Finishing Works</div>
              <div className="highlight-item"><CheckCircle2 className="icon" /> Maintenance Services</div>
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
            <p className="text-black font-semibold mb-4">MBA Contracting</p>
            
            <div className="gm-quote">
              <p className="text-body mb-4">
                "At MBA Contracting, we believe that successful projects are built on more than just construction materials — they depend on engineering reliability, craftsmanship, and consistent care."
              </p>
              <p className="text-body mb-4">
                "Our commitment is to provide dependable building construction, finishing, maintenance, and renovation services that help our clients build and maintain their properties safely, efficiently, and to the highest standards. We understand that every project has unique requirements, which is why we focus on practical, responsive, and tailored engineering solutions."
              </p>
              <p className="text-body mb-4">
                "Our team brings together skilled engineers, experienced site supervisors, and dedicated craftsmen to ensure that every project we deliver meets the expectations of our clients. From villa and majlis construction to general finishing works, we strive to maintain the highest standards of quality and service."
              </p>
              <p className="text-body mb-4">
                "As General Manager, my priority is to build long-term relationships based on trust, transparency, and performance. We continuously work to improve our processes, develop our people, and adopt better ways of delivering construction excellence."
              </p>
              <p className="text-body">
                "I would like to thank our clients, partners, and dedicated team for their continued trust and support. We look forward to growing together and setting higher standards in the construction and contracting industry across Qatar."
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Our Story / Company Background */}
      <section className="section-padding bg-light">
        <div className="container story-container">
          <div className="story-content">
            <h2 className="h2">Built to Deliver Superior Construction</h2>
            <p className="text-body mb-4">
              Founded on the principles of trust, transparency, and technical excellence, MBA Contracting has established itself as a reliable partner for building construction, maintenance, and renovation in Qatar. We understand that every villa, building, extension, and majlis is a valuable investment requiring precision execution.
            </p>
            <p className="text-body mb-4">
              MBA Contracting was established with the purpose of delivering high-quality construction and finishing services. Operating across Doha and greater Qatar, our experienced engineers and skilled tradespeople deliver turnkey solutions aligned with each client's vision and timeline.
            </p>
          </div>
          <div className="story-image-wrapper">
            <img src="/images/about/about_story_1790079206968.jpg" alt="Our Story" />
          </div>
        </div>
      </section>

      {/* 4. Mission & Vision */}
      <section className="section-padding">
        <div className="container mission-vision-grid">
          <div className="mv-card">
            <div className="mv-icon"><Target size={40} /></div>
            <h3 className="h3">Our Mission</h3>
            <p className="text-body">
              To provide dependable building construction, finishing, maintenance, and renovation services in Qatar. We strive to deliver transparent, high-quality, and reliable solutions that enhance the value and comfort of every property we work on, ensuring total customer satisfaction on every project.
            </p>
          </div>
          <div className="mv-card">
            <div className="mv-icon"><Zap size={40} /></div>
            <h3 className="h3">Our Vision</h3>
            <p className="text-body">
              To be the most trusted and sought-after contracting and maintenance partner in Qatar. We aim to set high standards for quality workmanship, safe site practices, and sustainable building methods, building a legacy of quality that lasts for generations.
            </p>
          </div>
        </div>
      </section>

      {/* 5. What We Do */}
      <section className="section-padding bg-black text-white">
        <div className="container text-center">
          <h2 className="h2 text-white mb-5">What We Do</h2>
          <div className="what-we-do-grid">
            <div className="wwd-block text-left">
              <h4>Building Maintenance Services</h4>
              <p>Expert building maintenance in Qatar including Plumbing fixes, electrical work, painting, and general handyman services. Book easily, track progress, and enjoy professional service with upfront pricing.</p>
            </div>
            <div className="wwd-block text-left">
              <h4>Construction Services</h4>
              <p>Complete construction services from MBA Contracting. From site preparation to final handover, we deliver villa, building, extension and majlis construction with organized execution, quality materials, and close site supervision.</p>
            </div>
            <div className="wwd-block text-left">
              <h4>General Finishing Works</h4>
              <p>Complete finishing works for your property. From surface preparation to the final finish, our team manages every detail of your villa, building, or majlis project with skilled workmanship and clean results.</p>
            </div>
          </div>
          <Link to="/contact" className="btn btn-outline hero-btn-outline mt-5">Request Consultation</Link>
        </div>
      </section>

      {/* 6. Core Values – The MBA Difference */}
      <section className="section-padding bg-light" style={{ paddingTop: '2.5rem' }}>
        <div className="container">
          <div className="section-header text-center">
            <span className="section-label" style={{ color: 'var(--color-primary)', fontWeight: '700', letterSpacing: '1px' }}>CORE VALUES</span>
            <h2 className="h2">Core Values – The MBA Difference</h2>
          </div>
          <div className="why-choose-grid">
            <div className="why-card">
              <span className="why-number">01</span>
              <h4>Professional Workmanship</h4>
              <p>A focus on quality and attention to finishing details.</p>
            </div>
            <div className="why-card">
              <span className="why-number">02</span>
              <h4>Complete Solutions</h4>
              <p>Villa, building, extension and majlis construction, finishing and maintenance services through one contracting partner.</p>
            </div>
            <div className="why-card">
              <span className="why-number">03</span>
              <h4>Practical Project Execution</h4>
              <p>Organized execution based on the approved scope and site requirements.</p>
            </div>
            <div className="why-card">
              <span className="why-number">04</span>
              <h4>Quality-Focused Approach</h4>
              <p>Attention to workmanship, materials and final appearance.</p>
            </div>
            <div className="why-card">
              <span className="why-number">05</span>
              <h4>Residential & Commercial Support</h4>
              <p>Solutions can be tailored to different property and project requirements.</p>
            </div>
            <div className="why-card">
              <span className="why-number">06</span>
              <h4>Client-Centered Service</h4>
              <p>Clear communication and coordination throughout the project.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 7. Our Approach */}
      <section className="section-padding">
        <div className="container text-center">
          <span className="section-label" style={{ color: 'var(--color-primary)', fontWeight: '700', letterSpacing: '1px' }}>HOW WE WORK</span>
          <h2 className="h2 mb-5">Our Approach</h2>
          <div className="approach-grid" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))' }}>
            <div className="approach-step">
              <div className="step-num">01. Understand</div>
              <p>Understand the client's requirement</p>
            </div>
            <div className="approach-step">
              <div className="step-num">02. Assess</div>
              <p>Assess the property or project site</p>
            </div>
            <div className="approach-step">
              <div className="step-num">03. Define Scope</div>
              <p>Define the scope of work</p>
            </div>
            <div className="approach-step">
              <div className="step-num">04. Execute</div>
              <p>Execute the approved works professionally</p>
            </div>
            <div className="approach-step">
              <div className="step-num">05. Inspect & Handover</div>
              <p>Inspect completed works and coordinate handover</p>
            </div>
          </div>
        </div>
      </section>

      {/* 8. Why MBA Contracting */}
      <section className="section-padding bg-light">
        <div className="container why-ncfm-container">
          <div className="why-ncfm-content">
            <h2 className="h2">Why Clients Choose MBA Contracting</h2>
            <ul className="why-ncfm-list">
              <li><CheckCircle2 className="icon" /> Construction, maintenance & finishing under one trusted partner</li>
              <li><CheckCircle2 className="icon" /> Dedicated engineers who know your project intimately</li>
              <li><CheckCircle2 className="icon" /> Experts in Qatar construction standards and approvals</li>
              <li><CheckCircle2 className="icon" /> Consistent site supervision & quality checks at every stage</li>
              <li><CheckCircle2 className="icon" /> Transparent pricing & upfront project scope</li>
              <li><CheckCircle2 className="icon" /> Detailed site inspections and clear project records</li>
              <li><CheckCircle2 className="icon" /> Villa, building, extension and majlis construction capability</li>
              <li><CheckCircle2 className="icon" /> Meticulous craftsmanship and dependable handover</li>
            </ul>
          </div>
          <div className="why-ncfm-image-wrapper">
            <img src="/images/about/about_why_us_1790079241863.jpg" alt="Why Choose Us" />
          </div>
        </div>
      </section>

      {/* 9. Quality, Health & Safety */}
      <section className="section-padding">
        <div className="container text-center">
          <div className="section-header">
            <ShieldCheck size={48} className="text-primary mx-auto mb-4" />
            <h2 className="h2">Committed to Quality & Safe Operations</h2>
          </div>
          <div className="qhse-grid">
            <div className="qhse-card">
              <h4>Routine Quality Inspections</h4>
            </div>
            <div className="qhse-card">
              <h4>Safe Work Procedures</h4>
            </div>
            <div className="qhse-card">
              <h4>Maintenance Checklists</h4>
            </div>
            <div className="qhse-card">
              <h4>Team Supervision</h4>
            </div>
            <div className="qhse-card">
              <h4>Equipment & Tool Safety</h4>
            </div>
            <div className="qhse-card">
              <h4>Service Reporting</h4>
            </div>
          </div>
        </div>
      </section>

      {/* 10. Industries We Support */}
      <section className="section-padding bg-black text-white">
        <div className="container">
          <div className="section-header text-center">
            <h2 className="h2 text-white">Supporting Facilities Across Multiple Sectors</h2>
          </div>
          <div className="industries-compact-grid">
            <div className="ind-pill">Commercial</div>
            <div className="ind-pill">Residential</div>
            <div className="ind-pill">Hospitality</div>
            <div className="ind-pill">Retail</div>
            <div className="ind-pill">Industrial</div>
            <div className="ind-pill">Warehousing</div>
            <div className="ind-pill">Healthcare</div>
            <div className="ind-pill">Education</div>
          </div>
          <div className="text-center mt-5">
            <Link to="/industries" className="btn btn-outline hero-btn-outline">Explore Industries</Link>
          </div>
        </div>
      </section>

      {/* 11. Impact & Leadership */}
      <section className="section-padding bg-light">
        <div className="container text-center">
          <h2 className="h2">Our Impact & Leadership</h2>
          <p className="text-body max-w-2xl mx-auto mb-5">
            Driven by a team of industry veterans, our leadership ensures that every project meets the highest standards of quality, safety, and operational efficiency across the region.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-5">
            <div className="p-4 bg-white rounded-lg shadow-sm border border-gray-100">
              <h3 className="h1 text-primary mb-2">50+</h3>
              <p className="text-body font-medium">Projects Completed</p>
            </div>
            <div className="p-4 bg-white rounded-lg shadow-sm border border-gray-100">
              <h3 className="h1 text-primary mb-2">100%</h3>
              <p className="text-body font-medium">Client Satisfaction</p>
            </div>
            <div className="p-4 bg-white rounded-lg shadow-sm border border-gray-100">
              <h3 className="h1 text-primary mb-2">24/7</h3>
              <p className="text-body font-medium">Support Available</p>
            </div>
            <div className="p-4 bg-white rounded-lg shadow-sm border border-gray-100">
              <h3 className="h1 text-primary mb-2">10+</h3>
              <p className="text-body font-medium">Years of Expertise</p>
            </div>
          </div>
        </div>
      </section>

      {/* 12.5 Client Logos */}
      <ClientLogos />

      {/* 13. Final CTA */}
      <section className="section-padding final-cta-section text-center">
        <div className="container">
          <h2 className="h2 text-white mb-4">Need a Contracting & Maintenance Partner You Can Rely On?</h2>
          <p className="text-gray-soft mb-5 max-w-2xl mx-auto">
            From villa and building construction to turnkey general finishing and maintenance, MBA Contracting is ready to support your requirements across Qatar.
          </p>
          <div className="flex justify-center gap-4">
            <Link to="/contact" className="btn btn-primary">Request Consultation</Link>
            <a href="tel:+97431310436" className="btn btn-outline hero-btn-outline">Call us now</a>
          </div>
        </div>
      </section>

    </div>
  );
};

export default AboutUs;
