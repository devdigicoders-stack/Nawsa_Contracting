import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle2, Building2, Wrench, Sprout, Wind, Droplet, Paintbrush, ShieldCheck, Phone, MapPin } from 'lucide-react';
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
          facilityType: 'Unspecified', // Required by backend
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

  return (
    <div className="home-page">
      
      {/* 2. Hero Section */}
      <section className="hero" style={{ backgroundImage: `url(${heroImages[currentImage]})` }}>
        <div className="hero-overlay"></div>
        <div className="container hero-content text-center">
          <h1 className="hero-title animate-fade-in-up">Complete Facilities Management Solutions</h1>
          <p className="hero-subtitle mx-auto animate-fade-in-up-delay-1">
            Professional Soft & Hard FM services for commercial, residential and industrial facilities.
          </p>
          <div className="hero-actions justify-center animate-fade-in-up-delay-2">
            <Link to="/services/soft-fm" className="btn btn-primary !px-5 !py-2.5 !text-[0.95rem]">Explore Our Services</Link>
            <Link to="/contact" className="btn btn-outline hero-btn-outline !px-5 !py-2.5 !text-[0.95rem]">Request a Quote</Link>
          </div>
          <div className="hero-highlights animate-fade-in-up-delay-2">
            <span>Soft FM</span>
            <span className="dot">•</span>
            <span>Hard FM</span>
            <span className="dot">•</span>
            <span>PPM</span>
            <span className="dot">•</span>
            <span>Emergency Support</span>
          </div>
        </div>
      </section>

      {/* 3. About NCFM */}
      <section className="section-padding about-section">
        <div className="container about-container">
          <div className="about-image-wrapper">
            <img src="/images/about_ncfm.jpg" alt="Modern Building" className="about-image" />
          </div>
          <div className="about-content">
            <span className="section-label">ABOUT NCFM</span>
            <h2 className="h2">One Partner for Complete Facility Care</h2>
            <p className="text-body mb-4">
              We provide comprehensive Soft and Hard Facilities Management services to maintain clean, hygienic, safe, comfortable, and professionally managed environments across all facility types.
            </p>
            <ul className="about-features">
              <li><CheckCircle2 className="feature-icon" /> Integrated FM Solutions</li>
              <li><CheckCircle2 className="feature-icon" /> Skilled & Professional Teams</li>
              <li><CheckCircle2 className="feature-icon" /> Preventive & Corrective Maintenance</li>
              <li><CheckCircle2 className="feature-icon" /> Customized Service Plans</li>
            </ul>
            <Link to="/about" className="btn btn-primary mt-4">Learn More About Us</Link>
          </div>
        </div>
      </section>

      {/* 4. Our Core Solutions */}
      <section className="section-padding bg-light">
        <div className="container">
          <div className="section-header text-center">
            <h2 className="h2">Our Core Solutions</h2>
            <p className="text-body max-w-2xl mx-auto">
              Delivering specialized services through dedicated soft and hard FM teams to ensure your facility operates at peak performance.
            </p>
          </div>
          
          <div className="core-solutions-grid">
            {/* Soft FM Card */}
            <div className="solution-card">
              <div className="solution-image-container">
                <img src="/images/soft_fm.jpg" alt="Soft FM" />
              </div>
              <div className="solution-content">
                <h3 className="h3">Soft FM Services</h3>
                <p className="text-body mb-4">
                  Maintaining clean, hygienic, and welcoming environments for your staff and visitors.
                </p>
                <div className="solution-tags">
                  <span>Cleaning</span><span>Housekeeping</span><span>Pest Control</span>
                  <span>Landscaping</span><span>Pantry</span><span>Reception</span><span>Waste Management</span>
                </div>
                <Link to="/services/soft-fm" className="btn btn-outline mt-4 w-full">Explore Soft FM</Link>
              </div>
            </div>

            {/* Hard FM Card */}
            <div className="solution-card">
              <div className="solution-image-container">
                <img src="/images/hard_fm.jpg" alt="Hard FM" />
              </div>
              <div className="solution-content">
                <h3 className="h3">Hard FM Services</h3>
                <p className="text-body mb-4">
                  Technical maintenance and infrastructure support to ensure operational continuity.
                </p>
                <div className="solution-tags">
                  <span>HVAC</span><span>Electrical</span><span>Plumbing</span>
                  <span>Civil</span><span>Painting</span><span>Waterproofing</span><span>PPM</span>
                </div>
                <Link to="/services/hard-fm" className="btn btn-outline mt-4 w-full">Explore Hard FM</Link>
              </div>
            </div>
            
            {/* Preventive Maintenance Card */}
            <div className="solution-card">
              <div className="solution-image-container">
                <img src="/images/preventive_maintenance.jpg" alt="Preventive Maintenance" />
              </div>
              <div className="solution-content">
                <h3 className="h3">Preventive Maintenance</h3>
                <p className="text-body mb-4">
                  Scheduled care and regular facility inspections to prevent costly breakdowns.
                </p>
                <div className="solution-tags">
                  <span>PPM</span><span>Asset Care</span><span>Inspections</span>
                  <span>Safety</span><span>Compliance</span>
                </div>
                <Link to="/services/hard-fm" className="btn btn-outline mt-4 w-full">Explore PPM</Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Popular Services Grid */}
      <section className="section-padding">
        <div className="container">
          <div className="section-header text-center">
            <h2 className="h2">Solutions for Every Part of Your Facility</h2>
          </div>
          <div className="services-grid-8">
            <Link to="/services/soft-fm" className="service-mini-card">
              <Paintbrush className="service-icon-sm" />
              <h4>Cleaning & Housekeeping</h4>
              <p>Daily and deep cleaning</p>
              <ArrowRight className="service-arrow" />
            </Link>
            <Link to="/services/hard-fm" className="service-mini-card">
              <Wind className="service-icon-sm" />
              <h4>HVAC Maintenance</h4>
              <p>AC servicing & repair</p>
              <ArrowRight className="service-arrow" />
            </Link>
            <Link to="/services/hard-fm" className="service-mini-card">
              <Wrench className="service-icon-sm" />
              <h4>Electrical Works</h4>
              <p>Systems & lighting</p>
              <ArrowRight className="service-arrow" />
            </Link>
            <Link to="/services/hard-fm" className="service-mini-card">
              <Droplet className="service-icon-sm" />
              <h4>Plumbing & Drainage</h4>
              <p>Piping & fixture repair</p>
              <ArrowRight className="service-arrow" />
            </Link>
            <Link to="/services/hard-fm" className="service-mini-card">
              <Building2 className="service-icon-sm" />
              <h4>Civil Maintenance</h4>
              <p>Repairs & modifications</p>
              <ArrowRight className="service-arrow" />
            </Link>
            <Link to="/services/soft-fm" className="service-mini-card">
              <Sprout className="service-icon-sm" />
              <h4>Landscaping</h4>
              <p>Grounds maintenance</p>
              <ArrowRight className="service-arrow" />
            </Link>
            <Link to="/services/hard-fm" className="service-mini-card">
              <ShieldCheck className="service-icon-sm" />
              <h4>Preventive Maintenance</h4>
              <p>Scheduled asset care</p>
              <ArrowRight className="service-arrow" />
            </Link>
            <Link to="/services/hard-fm" className="service-mini-card">
              <Phone className="service-icon-sm" />
              <h4>Emergency Maintenance</h4>
              <p>24/7 reactive support</p>
              <ArrowRight className="service-arrow" />
            </Link>
          </div>
        </div>
      </section>

      {/* 6. Integrated Facilities Management */}
      <section className="section-padding integrated-section">
        <div className="container text-center">
          <h2 className="h2 text-white">One Facility. One Team. Complete Support.</h2>
          <div className="integrated-flow">
            <div className="flow-step">
              <div className="flow-box">Soft FM</div>
              <p>Cleaning & Hygiene</p>
            </div>
            <div className="flow-arrow">↓</div>
            <div className="flow-step">
              <div className="flow-box">Hard FM</div>
              <p>Technical Maintenance</p>
            </div>
            <div className="flow-arrow">↓</div>
            <div className="flow-step">
              <div className="flow-box">PPM</div>
              <p>Preventive Care</p>
            </div>
            <div className="flow-arrow">↓</div>
            <div className="flow-step">
              <div className="flow-box">Reactive Support</div>
              <p>Urgent Repairs</p>
            </div>
            <div className="flow-arrow">↓</div>
            <div className="flow-step final-step">
              <div className="flow-box highlight-box">Complete Facilities Management</div>
            </div>
          </div>
          <Link to="/contact" className="btn btn-primary mt-5">Discuss Your Requirements</Link>
        </div>
      </section>

      {/* 7. Industries We Serve */}
      <section className="section-padding" style={{ paddingBottom: '2rem' }}>
        <div className="container">
          <div className="section-header text-center">
            <h2 className="h2">Industries We Serve</h2>
          </div>
          <div className="industries-grid">
            <div className="industry-card">
              <img src="/images/commercial.jpg" alt="Commercial" />
              <div className="industry-overlay">
                <h4>Commercial Buildings</h4>
              </div>
            </div>
            <div className="industry-card">
              <img src="/images/residential.jpg" alt="Residential" />
              <div className="industry-overlay">
                <h4>Residential Properties</h4>
              </div>
            </div>
            <div className="industry-card">
              <img src="/images/hospitality.jpg" alt="Hospitality" />
              <div className="industry-overlay">
                <h4>Hospitality</h4>
              </div>
            </div>
            <div className="industry-card">
              <img src="/images/retail.jpg" alt="Retail" />
              <div className="industry-overlay">
                <h4>Retail</h4>
              </div>
            </div>
            <div className="industry-card">
              <img src="/images/industrial.jpg" alt="Industrial" />
              <div className="industry-overlay">
                <h4>Industrial Facilities</h4>
              </div>
            </div>
            <div className="industry-card">
              <img src="/images/warehouses.jpg" alt="Warehouses" />
              <div className="industry-overlay">
                <h4>Warehouses</h4>
              </div>
            </div>
            <div className="industry-card">
              <img src="/images/healthcare.jpg" alt="Healthcare" />
              <div className="industry-overlay">
                <h4>Healthcare</h4>
              </div>
            </div>
            <div className="industry-card">
              <img src="/images/educational.jpg" alt="Educational" />
              <div className="industry-overlay">
                <h4>Educational Facilities</h4>
              </div>
            </div>
          </div>
          <div className="text-center mt-5">
            <Link to="/industries" className="btn btn-outline">Explore Industries</Link>
          </div>
        </div>
      </section>

      {/* 8. Why Choose NCFM */}
      <section className="section-padding bg-light" style={{ paddingTop: '2.5rem' }}>
        <div className="container">
          <div className="section-header text-center">
            <h2 className="h2">Built Around Reliability, Quality & Service</h2>
          </div>
          <div className="why-choose-grid">
            <div className="why-card">
              <span className="why-number">01</span>
              <h4>Skilled Teams</h4>
              <p>Professionally trained and vetted staff for all technical and soft services.</p>
            </div>
            <div className="why-card">
              <span className="why-number">02</span>
              <h4>Integrated Solutions</h4>
              <p>A single point of contact for all your facility management needs.</p>
            </div>
            <div className="why-card">
              <span className="why-number">03</span>
              <h4>Preventive Approach</h4>
              <p>Proactive maintenance to prevent costly breakdowns and extend asset life.</p>
            </div>
            <div className="why-card">
              <span className="why-number">04</span>
              <h4>Responsive Support</h4>
              <p>Quick mobilization and 24/7 emergency response capabilities.</p>
            </div>
            <div className="why-card">
              <span className="why-number">05</span>
              <h4>Quality Control</h4>
              <p>Strict adherence to safety and quality standards across all operations.</p>
            </div>
            <div className="why-card">
              <span className="why-number">06</span>
              <h4>Flexible Service Plans</h4>
              <p>Customized SLAs tailored to your specific facility requirements.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 9. Our Approach / Process */}
      <section className="section-padding">
        <div className="container text-center">
          <h2 className="h2 mb-5">How We Manage Your Facility</h2>
          <div className="process-flow">
            <div className="process-step">
              <div className="process-circle">01</div>
              <h4>Facility Assessment</h4>
            </div>
            <div className="process-line"></div>
            <div className="process-step">
              <div className="process-circle">02</div>
              <h4>Service Planning</h4>
            </div>
            <div className="process-line"></div>
            <div className="process-step">
              <div className="process-circle">03</div>
              <h4>Team Deployment</h4>
            </div>
            <div className="process-line"></div>
            <div className="process-step">
              <div className="process-circle">04</div>
              <h4>Daily Operations</h4>
            </div>
            <div className="process-line"></div>
            <div className="process-step">
              <div className="process-circle">05</div>
              <h4>Inspection & Maintenance</h4>
            </div>
            <div className="process-line"></div>
            <div className="process-step">
              <div className="process-circle">06</div>
              <h4>Reporting & Improvement</h4>
            </div>
          </div>
        </div>
      </section>

      {/* 10. Projects / Work Showcase */}
      <section className="section-padding bg-light">
        <div className="container">
          <div className="section-header text-center">
            <h2 className="h2">Our Work in Action</h2>
          </div>
          <div className="projects-grid">
            <div className="project-card">
              <img src="/images/commercial.jpg" alt="Project 1" />
              <div className="project-info">
                <span className="project-category">Commercial Facility</span>
                <h4>Corporate Tower Maintenance</h4>
                <p className="project-location"><MapPin size={14} /> Downtown Dubai</p>
                <Link to="/projects" className="project-link">View Project <ArrowRight size={14} /></Link>
              </div>
            </div>
            <div className="project-card">
              <img src="/images/residential.jpg" alt="Project 2" />
              <div className="project-info">
                <span className="project-category">Residential Facility</span>
                <h4>Luxury Apartment Complex</h4>
                <p className="project-location"><MapPin size={14} /> Dubai Marina</p>
                <Link to="/projects" className="project-link">View Project <ArrowRight size={14} /></Link>
              </div>
            </div>
            <div className="project-card">
              <img src="/images/industrial.jpg" alt="Project 3" />
              <div className="project-info">
                <span className="project-category">Industrial Facility</span>
                <h4>Logistics Warehouse</h4>
                <p className="project-location"><MapPin size={14} /> JAFZA</p>
                <Link to="/projects" className="project-link">View Project <ArrowRight size={14} /></Link>
              </div>
            </div>
          </div>
          <div className="text-center mt-5">
            <Link to="/projects" className="btn btn-outline">View All Projects</Link>
          </div>
        </div>
      </section>

      {/* 11. Final CTA + Contact */}
      <section className="section-padding final-cta-section">
        <div className="container">
          <div className="final-cta-grid">
            <div className="final-cta-content">
              <h2 className="h2 text-white">Looking for a Reliable Facilities Management Partner?</h2>
              <p className="text-gray-soft mb-4">
                Tell us what your facility needs and our team will help build the right service solution.
              </p>
              <div className="flex gap-4">
                <Link to="/contact" className="btn btn-primary">Request a Quote</Link>
                <a href="tel:+971000000000" className="btn btn-outline hero-btn-outline">Contact Us</a>
              </div>
            </div>
            <div className="final-cta-form">
              <form className="quick-enquiry-form" onSubmit={handleSubmit}>
                <h3>Quick Enquiry</h3>
                {successMsg && <div className="bg-green-100 text-green-700 p-2 mb-3 rounded text-sm">{successMsg}</div>}
                {errorMsg && <div className="bg-red-100 text-red-700 p-2 mb-3 rounded text-sm">{errorMsg}</div>}
                <div className="form-group">
                  <input type="text" name="fullName" value={formData.fullName} onChange={handleInputChange} placeholder="Name" required />
                </div>
                <div className="form-group">
                  <input type="text" name="companyName" value={formData.companyName} onChange={handleInputChange} placeholder="Company (Optional)" />
                </div>
                <div className="form-group flex gap-2">
                  <input type="tel" name="phone" value={formData.phone} onChange={handleInputChange} placeholder="Phone" required />
                  <input type="email" name="email" value={formData.email} onChange={handleInputChange} placeholder="Email" required />
                </div>
                <div className="form-group">
                  <select name="serviceRequired" value={formData.serviceRequired} onChange={handleInputChange} required>
                    <option value="">Service Required</option>
                    <option value="Soft FM">Soft FM</option>
                    <option value="Hard FM">Hard FM</option>
                    <option value="Integrated FM">Integrated FM</option>
                  </select>
                </div>
                <div className="form-group">
                  <textarea name="message" value={formData.message} onChange={handleInputChange} placeholder="Message" rows="3" required></textarea>
                </div>
                <button type="submit" disabled={loading} className="btn btn-primary w-full flex justify-center items-center gap-2">
                  {loading ? (
                    <>
                      <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"><circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle><path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path></svg>
                      Submitting...
                    </>
                  ) : 'Submit Request'}
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
