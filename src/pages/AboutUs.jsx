import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { CheckCircle2, ShieldCheck, Settings, Users, Target, Zap, Clock, Activity, ArrowRight } from 'lucide-react';
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
          <h1 className="page-hero-title animate-fade-in-up-delay-1">About NCFM</h1>
          <p className="page-hero-subtitle mx-auto animate-fade-in-up-delay-1">
            Professional Facilities Management Solutions Built Around Reliability, Quality and Performance.
          </p>
          <div className="page-hero-actions animate-fade-in-up-delay-2">
            <Link to="/projects" className="btn btn-primary !px-5 !py-2.5 !text-[0.95rem]">View Our Work</Link>
            <Link to="/contact" className="btn btn-outline border-white text-white hover:bg-white hover:text-black transition-colors !px-5 !py-2.5 !text-[0.95rem]">Get in Touch</Link>
          </div>
          <div className="page-hero-highlights animate-fade-in-up-delay-2">
            <span>Excellence</span>
            <span className="dot">•</span>
            <span>Reliability</span>
            <span className="dot">•</span>
            <span>Quality</span>
            <span className="dot">•</span>
            <span>Safety</span>
          </div>
        </div>
      </section>

      {/* 2. Company Overview */}
      <section className="section-padding">
        <div className="container about-overview-container">
          <div className="overview-image-wrapper">
            <img src="/images/about/about_overview_1790079192293.jpg" alt="Company Overview" />
          </div>
          <div className="overview-content">
            <span className="section-label">WHO WE ARE</span>
            <h2 className="h2">A Complete Facilities Management Partner</h2>
            <p className="text-body mb-4">
              NCFM provides professional Soft and Hard Facilities Management solutions for commercial, residential and industrial facilities. Our services are designed to support clean, safe, functional and efficiently maintained environments.
            </p>
            <div className="overview-highlights">
              <div className="highlight-item"><CheckCircle2 className="icon" /> Soft FM Services</div>
              <div className="highlight-item"><CheckCircle2 className="icon" /> Hard FM Services</div>
              <div className="highlight-item"><CheckCircle2 className="icon" /> Preventive Maintenance</div>
              <div className="highlight-item"><CheckCircle2 className="icon" /> Reactive Maintenance</div>
            </div>
            <Link to="/services/soft-fm" className="btn btn-primary mt-5">Explore Our Services</Link>
          </div>
        </div>
      </section>

      {/* 3. Our Story / Company Background */}
      <section className="section-padding bg-light">
        <div className="container story-container">
          <div className="story-content">
            <h2 className="h2">Built to Support Better Facilities</h2>
            <p className="text-body mb-4">
              {/* [Company Background Placeholder] */}
              <br/><br/>
              NCFM was established with the purpose of delivering high-quality facility management services. Operating across key target markets, we leverage our extensive experience to provide customized, reliable, and professional FM solutions that keep your buildings operating efficiently.
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
              To deliver reliable, efficient and professional facilities management solutions that support safe, clean and high-performing environments.
            </p>
          </div>
          <div className="mv-card">
            <div className="mv-icon"><Zap size={40} /></div>
            <h3 className="h3">Our Vision</h3>
            <p className="text-body">
              To become a trusted facilities management partner known for service quality, technical capability and long-term client relationships.
            </p>
          </div>
        </div>
      </section>

      {/* 5. What We Do */}
      <section className="section-padding bg-black text-white">
        <div className="container text-center">
          <h2 className="h2 text-white mb-5">Integrated Solutions for Every Facility Need</h2>
          <div className="what-we-do-grid">
            <div className="wwd-block">
              <h4>Soft FM</h4>
              <p>Cleaning, housekeeping, hygiene, landscaping, reception, pantry, waste support.</p>
            </div>
            <div className="wwd-block">
              <h4>Hard FM</h4>
              <p>HVAC, electrical, plumbing, civil, painting, carpentry, technical systems.</p>
            </div>
            <div className="wwd-block">
              <h4>Maintenance</h4>
              <p>PPM, corrective maintenance, reactive support and emergency response.</p>
            </div>
          </div>
          <Link to="/services/soft-fm" className="btn btn-outline hero-btn-outline mt-5">View All Services</Link>
        </div>
      </section>

      {/* 6. Our Core Values */}
      <section className="section-padding bg-light" style={{ paddingTop: '2.5rem' }}>
        <div className="container">
          <div className="section-header text-center">
            <h2 className="h2">The Values Behind Our Service</h2>
          </div>
          <div className="why-choose-grid">
            <div className="why-card">
              <span className="why-number">01</span>
              <h4>Reliability</h4>
              <p>Consistent service delivery and dependable facility support.</p>
            </div>
            <div className="why-card">
              <span className="why-number">02</span>
              <h4>Quality</h4>
              <p>High standards in every task, from cleaning to complex repairs.</p>
            </div>
            <div className="why-card">
              <span className="why-number">03</span>
              <h4>Safety</h4>
              <p>Safe working practices across cleaning, maintenance and technical operations.</p>
            </div>
            <div className="why-card">
              <span className="why-number">04</span>
              <h4>Professionalism</h4>
              <p>Trained, vetted, and respectful teams handling your facility.</p>
            </div>
            <div className="why-card">
              <span className="why-number">05</span>
              <h4>Responsiveness</h4>
              <p>Quick action for both planned schedules and emergency calls.</p>
            </div>
            <div className="why-card">
              <span className="why-number">06</span>
              <h4>Continuous Improvement</h4>
              <p>Always refining our processes to serve you better.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 7. Our Approach */}
      <section className="section-padding">
        <div className="container text-center">
          <h2 className="h2 mb-5">A Structured Approach to Facility Management</h2>
          <div className="approach-grid">
            <div className="approach-step">
              <div className="step-num">01. Understand</div>
              <p>Facility assessment and requirement study</p>
            </div>
            <div className="approach-step">
              <div className="step-num">02. Plan</div>
              <p>Scope, manpower and maintenance planning</p>
            </div>
            <div className="approach-step">
              <div className="step-num">03. Mobilize</div>
              <p>Team and resource deployment</p>
            </div>
            <div className="approach-step">
              <div className="step-num">04. Manage</div>
              <p>Daily service and facility operations</p>
            </div>
            <div className="approach-step">
              <div className="step-num">05. Monitor</div>
              <p>Inspection, maintenance and quality checks</p>
            </div>
            <div className="approach-step">
              <div className="step-num">06. Improve</div>
              <p>Reporting and continuous improvement</p>
            </div>
          </div>
        </div>
      </section>

      {/* 8. Why NCFM */}
      <section className="section-padding bg-light">
        <div className="container why-ncfm-container">
          <div className="why-ncfm-content">
            <h2 className="h2">Why Clients Choose NCFM</h2>
            <ul className="why-ncfm-list">
              <li><CheckCircle2 className="icon" /> Soft and Hard FM under one service partner</li>
              <li><CheckCircle2 className="icon" /> Skilled and experienced teams</li>
              <li><CheckCircle2 className="icon" /> Flexible service packages</li>
              <li><CheckCircle2 className="icon" /> Preventive maintenance approach</li>
              <li><CheckCircle2 className="icon" /> Responsive technical support</li>
              <li><CheckCircle2 className="icon" /> Quality and service monitoring</li>
              <li><CheckCircle2 className="icon" /> Commercial, residential and industrial capability</li>
              <li><CheckCircle2 className="icon" /> Customized facility solutions</li>
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

      {/* 11 & 12. Placeholder for Numbers & Leadership (Hidden until actual data is provided) */}
      {/* 
      <section className="section-padding">
        <div className="container text-center">
          <h2 className="h2">Company Numbers & Leadership</h2>
          <p>[Placeholder for actual statistics and team members]</p>
        </div>
      </section>
      */}

      {/* 13. Final CTA */}
      <section className="section-padding final-cta-section text-center">
        <div className="container">
          <h2 className="h2 text-white mb-4">Need a Facility Management Partner You Can Rely On?</h2>
          <p className="text-gray-soft mb-5 max-w-2xl mx-auto">
            From everyday facility operations to technical maintenance, NCFM is ready to support your requirements.
          </p>
          <div className="flex justify-center gap-4">
            <Link to="/contact" className="btn btn-primary">Request a Quote</Link>
            <a href="tel:+971000000000" className="btn btn-outline hero-btn-outline">Contact Us</a>
          </div>
        </div>
      </section>

    </div>
  );
};

export default AboutUs;
