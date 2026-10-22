import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle2, Building2, Wrench, Sprout, Wind, Droplet, Paintbrush, ShieldCheck, Phone, MapPin } from 'lucide-react';
import ClientLogos from '../components/ClientLogos';
import FeaturedWorks from '../components/FeaturedWorks';
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
          <h1 className="hero-title animate-fade-in-up">Building Construction, Maintenance & Renovation in Qatar</h1>
          <p className="hero-subtitle mx-auto animate-fade-in-up-delay-1 max-w-3xl">
            NCFM is a building construction, maintenance and renovation company in Qatar, providing reliable construction and finishing solutions for villas, buildings, extensions, majlis, and commercial properties. Our services include general finishing works, villa construction, building construction, extension construction, majlis construction, and building maintenance services.
          </p>
          <div className="hero-actions justify-center animate-fade-in-up-delay-2">
            <a href="tel:+97431310436" className="btn btn-primary !px-5 !py-2.5 !text-[0.95rem]">Call us now</a>
            <a href="https://wa.me/97431310436" target="_blank" rel="noopener noreferrer" className="btn btn-outline hero-btn-outline !px-5 !py-2.5 !text-[0.95rem]">Or chat with us on WhatsApp</a>
          </div>
          <div className="hero-highlights animate-fade-in-up-delay-2">
            <span>General Finishing Works</span>
            <span className="dot">•</span>
            <span>Villa Construction</span>
            <span className="dot">•</span>
            <span>Building Construction</span>
            <span className="dot">•</span>
            <span>Extension Construction</span>
            <span className="dot">•</span>
            <span>Majlis Construction</span>
            <span className="dot">•</span>
            <span>Building Maintenance</span>
          </div>
        </div>
      </section>

      {/* 3. Experience the Difference of NCFM */}
      <section className="section-padding about-section">
        <div className="container about-container">
          <div className="about-image-wrapper">
            <img src="/images/about_ncfm.jpg" alt="Dedicated Engineers" className="about-image" />
            <div className="floating-tags-container">
              <span className="floating-tag">Experts in Qatar construction</span>
              <span className="floating-tag">Consistent site supervision</span>
            </div>
          </div>
          <div className="about-content">
            <span className="section-label">SUPERIOR QUALITY</span>
            <h2 className="h2">Dedicated Engineers Who Know Your Project</h2>
            <p className="text-body mb-4">
              Our experienced engineers understand the unique needs of every project, from villa and building construction to finishing, electrical and plumbing works. Through detailed site inspections and clear project records, every stage is planned, precise, and efficient. Your property is never just another job. It is a carefully managed project built around quality and reliability.
            </p>
            <ul className="about-features">
              <li><CheckCircle2 className="feature-icon" /> Experts in Qatar construction</li>
              <li><CheckCircle2 className="feature-icon" /> Consistent site supervision</li>
              <li><CheckCircle2 className="feature-icon" /> Detailed site inspections & clear project records</li>
              <li><CheckCircle2 className="feature-icon" /> Planned, precise, and efficient execution</li>
            </ul>
            <Link to="/contact" className="btn btn-primary mt-4">Request Consultation</Link>
          </div>
        </div>
      </section>

      {/* 4. Our Core Solutions / What We Do */}
      <section className="section-padding bg-light">
        <div className="container">
          <div className="section-header text-center">
            <h2 className="h2">What We Do</h2>
            <p className="text-body max-w-2xl mx-auto">
              Main business: Building Construction, Maintenance & Renovation in Qatar.
            </p>
          </div>
          
          <div className="core-solutions-grid">
            {/* Card 1: Building Maintenance Services */}
            <div className="solution-card">
              <div className="solution-image-container">
                <img src="/images/preventive_maintenance.jpg" alt="Building Maintenance Services" />
              </div>
              <div className="solution-content">
                <h3 className="h3">Building Maintenance Services</h3>
                <p className="text-body mb-4">
                  Expert building maintenance in Qatar including Plumbing fixes, electrical work, painting, and general handyman services. Book easily, track progress, and enjoy professional service with upfront pricing.
                </p>
                <div className="solution-tags">
                  <span>Plumbing Fixes</span><span>Electrical Work</span><span>Painting</span><span>Handyman Services</span><span>Upfront Pricing</span>
                </div>
                <Link to="/contact" className="btn btn-outline mt-4 w-full">Request Maintenance</Link>
              </div>
            </div>

            {/* Card 2: Construction Services */}
            <div className="solution-card">
              <div className="solution-image-container">
                <img src="/images/hard_fm.jpg" alt="Construction Services" />
              </div>
              <div className="solution-content">
                <h3 className="h3">Construction Services</h3>
                <p className="text-body mb-4">
                  Complete construction services from NCFM. From site preparation to final handover, we deliver villa, building, extension and majlis construction with organized execution, quality materials, and close site supervision.
                </p>
                <div className="solution-tags">
                  <span>Villa Construction</span><span>Building Construction</span><span>Extension Construction</span><span>Majlis Construction</span>
                </div>
                <Link to="/services/construction" className="btn btn-outline mt-4 w-full">Explore Construction</Link>
              </div>
            </div>
            
            {/* Card 3: General Finishing Works */}
            <div className="solution-card">
              <div className="solution-image-container">
                <img src="/images/soft_fm.jpg" alt="General Finishing Works" />
              </div>
              <div className="solution-content">
                <h3 className="h3">General Finishing Works</h3>
                <p className="text-body mb-4">
                  Complete finishing works for your property. From surface preparation to the final finish, our team manages every detail of your villa, building, or majlis project with skilled workmanship and clean results.
                </p>
                <div className="solution-tags">
                  <span>Tile Installation & Flooring Works</span><span>Painting & Plastering Works</span><span>Gypsum Board & Interior Finishing</span><span>Electrical & Plumbing Works</span>
                </div>
                <Link to="/services/finishing-works" className="btn btn-outline mt-4 w-full">Explore Finishing</Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. General Finishing Works Grid */}
      <section className="section-padding">
        <div className="container">
          <div className="section-header text-center">
            <h2 className="h2">General Finishing Works</h2>
            <p className="text-body max-w-2xl mx-auto">
              Precision finishing and craft solutions for villas, buildings, and commercial spaces across Qatar.
            </p>
          </div>
          <div className="services-grid-8">
            <Link to="/services/finishing-works" className="service-mini-card">
              <Building2 className="service-icon-sm" />
              <h4>Tile Installation Works</h4>
              <p>Floors, walls & custom patterns</p>
              <ArrowRight className="service-arrow" />
            </Link>
            <Link to="/services/finishing-works" className="service-mini-card">
              <Paintbrush className="service-icon-sm" />
              <h4>Painting Works</h4>
              <p>Interior & exterior premium coats</p>
              <ArrowRight className="service-arrow" />
            </Link>
            <Link to="/services/finishing-works" className="service-mini-card">
              <Building2 className="service-icon-sm" />
              <h4>Gypsum Board Works</h4>
              <p>Ceilings, partitions & design</p>
              <ArrowRight className="service-arrow" />
            </Link>
            <Link to="/services/finishing-works" className="service-mini-card">
              <Wrench className="service-icon-sm" />
              <h4>Plastering Works</h4>
              <p>Surface prep & smooth rendering</p>
              <ArrowRight className="service-arrow" />
            </Link>
            <Link to="/services/finishing-works" className="service-mini-card">
              <CheckCircle2 className="service-icon-sm" />
              <h4>Flooring Works</h4>
              <p>Durable marble & tile flooring</p>
              <ArrowRight className="service-arrow" />
            </Link>
            <Link to="/services/finishing-works" className="service-mini-card">
              <ShieldCheck className="service-icon-sm" />
              <h4>Interior Finishing Works</h4>
              <p>Turnkey interior detailing</p>
              <ArrowRight className="service-arrow" />
            </Link>
            <Link to="/services/finishing-works" className="service-mini-card">
              <Wrench className="service-icon-sm" />
              <h4>Electrical Works</h4>
              <p>Safe wiring & fixtures</p>
              <ArrowRight className="service-arrow" />
            </Link>
            <Link to="/services/finishing-works" className="service-mini-card">
              <Droplet className="service-icon-sm" />
              <h4>Plumbing Works</h4>
              <p>Piping, drainage & sanitary fixes</p>
              <ArrowRight className="service-arrow" />
            </Link>
          </div>
        </div>
      </section>

      {/* 6. Engineered Solutions */}
      <section className="section-padding integrated-section engineered-section">
        <div className="container text-center max-w-4xl">
          <span className="section-label" style={{ color: 'var(--color-primary)', fontWeight: '700', letterSpacing: '1px' }}>ENGINEERED SOLUTIONS</span>
          <h2 className="h2 text-white mb-4">Your Property, Built for Reliability</h2>
          <p className="text-gray-soft mb-6 leading-relaxed" style={{ fontSize: '1.05rem' }}>
            We go beyond basic repairs to deliver reliable building construction, finishing, maintenance and renovation services in Qatar. Our engineers use proper tools, strong technical expertise, and a preventive approach to build and care for every part of your property. From plastering, tiling and gypsum works to electrical and plumbing systems, we ensure consistent quality and long-term performance.
          </p>
          <div className="flex flex-wrap justify-center gap-3 mb-8">
            <span className="floating-tag">Expert analysis</span>
            <span className="floating-tag">Quality checks at every stage</span>
          </div>
          <div className="flex flex-wrap justify-center gap-4">
            <a href="tel:+97431310436" className="btn btn-primary !px-6 !py-3">Call us now</a>
            <a href="https://wa.me/97431310436" target="_blank" rel="noopener noreferrer" className="btn btn-outline hero-btn-outline !px-6 !py-3">Or chat with us on WhatsApp</a>
          </div>
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

      {/* 10. Featured Works (Real Photos) */}
      <FeaturedWorks />

      {/* 10.5 Our Valued Clients */}
      <section className="section-padding bg-white">
        <div className="container">
          <div className="section-header text-center">
            <h2 className="h2">Our Valued Clients</h2>
            <p className="text-body max-w-2xl mx-auto mt-2">
              Trusted by leading organizations across Qatar for facilities management, renovation, maintenance, and contracting services.
            </p>
          </div>
          <div className="clients-grid mt-5">
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

      {/* 10.6 Client Logos */}
      <ClientLogos />

      {/* 11. Final CTA + Contact */}
      <section className="section-padding final-cta-section">
        <div className="container">
          <div className="final-cta-grid">
            <div className="final-cta-content">
              <h2 className="h2 text-white">Looking for a Reliable Construction & Maintenance Partner?</h2>
              <p className="text-gray-soft mb-4">
                Tell us what your property or project needs and our engineering team will build the right service solution.
              </p>
              <div className="flex gap-4">
                <Link to="/contact" className="btn btn-primary">Request Consultation</Link>
                <a href="tel:+97431310436" className="btn btn-outline hero-btn-outline">Call us now</a>
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
                    <option value="General Finishing Works">General Finishing Works</option>
                    <option value="Villa Construction">Villa Construction</option>
                    <option value="Building Construction">Building Construction</option>
                    <option value="Extension Construction">Extension Construction</option>
                    <option value="Majlis Construction">Majlis Construction</option>
                    <option value="Building Maintenance Services">Building Maintenance Services</option>
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
