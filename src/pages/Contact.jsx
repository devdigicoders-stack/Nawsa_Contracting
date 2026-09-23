import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  Phone, Mail, MapPin, Clock, ArrowRight,
  ChevronDown, ChevronUp, AlertCircle
} from 'lucide-react';
import './Contact.css';

const Contact = () => {
  const [activeFaq, setActiveFaq] = useState(null);

  const toggleFaq = (index) => {
    setActiveFaq(activeFaq === index ? null : index);
  };

  const faqs = [
    {
      q: "What types of facilities does NCFM support?",
      a: "Commercial, residential, hospitality, retail, industrial and other facility environments."
    },
    {
      q: "Do you provide both Soft and Hard FM services?",
      a: "Yes, service scopes can cover Soft FM, Hard FM or integrated FM requirements."
    },
    {
      q: "Can services be customized?",
      a: "Yes, service scopes can be structured according to facility requirements."
    },
    {
      q: "Do you provide preventive maintenance?",
      a: "Yes, planned preventive maintenance can cover various technical building systems."
    },
    {
      q: "Can I request project-based maintenance?",
      a: "Yes, individual maintenance, repair and specialist project requirements can be discussed."
    },
    {
      q: "How can I request a quotation?",
      a: "Submit the enquiry form or contact the NCFM team directly."
    }
  ];

  return (
    <div className="contact-page">
      
      {/* 1. Inner Hero Section */}
      <section className="page-hero contact-hero">
        <div className="page-hero-overlay"></div>
        <div className="container page-hero-content text-center">
          <span className="section-label text-white border-white">CONTACT NCFM</span>
          <h1 className="h1 text-white mb-4 mt-2">Let’s Talk About Your Facility Requirements</h1>
          <p className="hero-subtitle mx-auto">
            Whether you need Soft FM, Hard FM, preventive maintenance or project-based support, our team is ready to discuss the right solution for your facility.
          </p>
          <div className="hero-actions justify-center mt-4">
            <a href="#enquiry-form" className="btn btn-primary">Request a Quote</a>
          </div>
          <div className="breadcrumb mt-4">
            <Link to="/">Home</Link> <span className="mx-2">/</span> <span className="current">Contact Us</span>
          </div>
        </div>
      </section>

      {/* 2. Contact Introduction */}
      <section className="section-padding text-center">
        <div className="container">
          <span className="section-label mx-auto">GET IN TOUCH</span>
          <h2 className="h2 mt-3 mb-4">How Can We Support Your Facility?</h2>
          <p className="text-body max-w-2xl mx-auto mb-5">
            NCFM can support day-to-day facility operations, scheduled maintenance, technical repairs and specialized facility-management requirements.
          </p>
          
          <div className="contact-quick-options">
            <Link to="/services/soft-fm" className="c-option-card">
              <h4>Need Cleaning & Soft FM?</h4>
              <span className="text-primary font-bold mt-2 inline-block">Talk to Us →</span>
            </Link>
            <Link to="/services/hard-fm" className="c-option-card">
              <h4>Need Technical / Hard FM?</h4>
              <span className="text-primary font-bold mt-2 inline-block">Talk to Us →</span>
            </Link>
            <Link to="/services/hard-fm" className="c-option-card">
              <h4>Need Preventive Maintenance?</h4>
              <span className="text-primary font-bold mt-2 inline-block">Talk to Us →</span>
            </Link>
          </div>
        </div>
      </section>

      {/* 3. Contact Information Cards */}
      <section className="section-padding bg-light">
        <div className="container">
          <div className="contact-info-grid">
            <div className="c-info-card premium-card">
              <Phone className="text-primary mb-3 mx-auto" size={32} />
              <h4>Call Us</h4>
              <p>+974 31310436</p>
            </div>
            <div className="c-info-card premium-card">
              <Mail className="text-primary mb-3 mx-auto" size={32} />
              <h4>Email Us</h4>
              <p>info@ncfmqa.com</p>
            </div>
            <div className="c-info-card premium-card">
              <MapPin className="text-primary mb-3 mx-auto" size={32} />
              <h4>Visit Us</h4>
              <p>Doha, Qatar</p>
            </div>
            <div className="c-info-card premium-card">
              <Clock className="text-primary mb-3 mx-auto" size={32} />
              <h4>Working Hours</h4>
              <p>Mon - Sat</p>
              <p className="text-sm">08:00 AM - 06:00 PM</p>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Main Enquiry Form */}
      <section id="enquiry-form" className="section-padding">
        <div className="container form-container">
          <div className="form-content">
            <h2 className="h2 mb-4">Tell Us What You Need</h2>
            <p className="text-body mb-5">
              Provide your facility details and service requirement. Our team can review the scope and contact you.
            </p>
            <img src="https://images.unsplash.com/photo-1573164713988-8665fc963095?auto=format&fit=crop&q=80" alt="Customer Support" className="rounded-lg shadow-lg" />
          </div>
          
          <div className="form-wrapper">
            <form className="enquiry-form">
              <div className="form-grid">
                <div className="form-group">
                  <label>Full Name *</label>
                  <input type="text" placeholder="Enter Your Name" required />
                </div>
                <div className="form-group">
                  <label>Company Name</label>
                  <input type="text" placeholder="Company LLC" />
                </div>
                <div className="form-group">
                  <label>Phone Number *</label>
                  <input type="tel" placeholder="Enter Your Phone Number" required />
                </div>
                <div className="form-group">
                  <label>Email Address *</label>
                  <input type="email" placeholder="Enter Your Email" required />
                </div>
              </div>

              <div className="form-grid mt-4">
                <div className="form-group">
                  <label>Facility Type *</label>
                  <select required>
                    <option value="">Select Facility Type</option>
                    <option value="Commercial">Commercial</option>
                    <option value="Residential">Residential</option>
                    <option value="Hospitality">Hospitality</option>
                    <option value="Retail">Retail</option>
                    <option value="Industrial">Industrial</option>
                    <option value="Warehouse">Warehouse</option>
                    <option value="Other">Other</option>
                  </select>
                </div>
                <div className="form-group">
                  <label>Service Required *</label>
                  <select required>
                    <option value="">Select Service</option>
                    <option value="Soft FM">Soft FM</option>
                    <option value="Hard FM">Hard FM</option>
                    <option value="Integrated FM">Integrated FM</option>
                    <option value="Preventive Maintenance">Preventive Maintenance</option>
                    <option value="Corrective Maintenance">Corrective Maintenance</option>
                    <option value="Emergency Maintenance">Emergency Maintenance</option>
                    <option value="Project-Based Work">Project-Based Work</option>
                  </select>
                </div>
              </div>

              <div className="form-grid mt-4">
                <div className="form-group">
                  <label>Location</label>
                  <input type="text" placeholder="e.g., Business Bay, Dubai" />
                </div>
                <div className="form-group">
                  <label>Preferred Contact Method</label>
                  <select>
                    <option value="Call">Call</option>
                    <option value="Email">Email</option>
                    <option value="WhatsApp">WhatsApp</option>
                  </select>
                </div>
              </div>

              <div className="form-group mt-4">
                <label>Message / Requirement *</label>
                <textarea rows="4" placeholder="Tell us more about your facility and requirements..." required></textarea>
              </div>

              <button type="submit" className="btn btn-primary w-full mt-4">Submit Enquiry</button>
            </form>
          </div>
        </div>
      </section>

      {/* 5. Quick Quote Section */}
      <section className="bg-primary text-white py-4">
        <div className="container">
          <div className="quick-quote-bar">
            <h3 className="h3 text-white mb-3 mb-lg-0 whitespace-nowrap mr-4">Need a Quick Service Quote?</h3>
            <form className="quick-quote-form w-full flex-grow">
              <input type="text" placeholder="Name" required />
              <input type="tel" placeholder="Phone" required />
              <input type="text" placeholder="Service" required />
              <input type="text" placeholder="Location" required />
              <button type="submit" className="btn btn-outline border-white text-white hover:bg-white hover:text-primary whitespace-nowrap">Get a Quote</button>
            </form>
          </div>
        </div>
      </section>

      {/* 6. Service Selection Cards */}
      <section className="section-padding bg-light">
        <div className="container">
          <div className="section-header text-center">
            <h2 className="h2">What Can We Help You With?</h2>
          </div>
          <div className="service-selection-grid">
            <div className="ss-card">
              <h4>Soft FM Services</h4>
              <p>Cleaning, housekeeping, hygiene, landscaping and support services.</p>
              <Link to="/services/soft-fm">View Soft FM →</Link>
            </div>
            <div className="ss-card">
              <h4>Hard FM Services</h4>
              <p>HVAC, electrical, plumbing, civil and technical maintenance.</p>
              <Link to="/services/hard-fm">View Hard FM →</Link>
            </div>
            <div className="ss-card">
              <h4>Preventive Maintenance</h4>
              <p>Scheduled maintenance and regular facility inspections.</p>
              <Link to="/services/hard-fm">Discuss PPM →</Link>
            </div>
            <div className="ss-card">
              <h4>Reactive Support</h4>
              <p>Breakdowns, urgent repairs and technical troubleshooting.</p>
              <a href="#enquiry-form">Contact Team →</a>
            </div>
          </div>
        </div>
      </section>

      {/* 7. Office Location / Map */}
      <section className="section-padding">
        <div className="container map-container">
          <div className="map-wrapper bg-gray-200">
            <iframe src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d2588.2706334016825!2d51.512899975384705!3d25.28377877765527!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMjXCsDE3JzAxLjYiTiA1McKwMzAnNTUuNyJF!5e1!3m2!1sen!2sin!4v1789990113676!5m2!1sen!2sin" width="100%" height="100%" style={{ border: 0, minHeight: '400px' }} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
          </div>
          <div className="map-content">
            <h2 className="h2 mb-4">Find Us</h2>
            <h4 className="font-bold text-lg mb-2">Nawsa Contracting Facilities Management</h4>
            <p className="text-gray-600 mb-4 flex items-start gap-2"><MapPin size={18} className="mt-1 flex-shrink-0" /> Doha, Qatar</p>
            <p className="text-gray-600 mb-2 flex items-center gap-2"><Phone size={18} /> +974 31310436</p>
            <p className="text-gray-600 mb-4 flex items-center gap-2"><Mail size={18} /> info@ncfmqa.com</p>
            <p className="text-gray-600 mb-6 flex items-center gap-2"><Clock size={18} /> Sun – Thu, 08:00 AM - 05:00 PM</p>
            
            <div className="flex gap-3">
              <button className="btn btn-primary">Get Directions</button>
              <a href="tel:+97431310436" className="btn btn-outline">Call Office</a>
            </div>
          </div>
        </div>
      </section>

      {/* 8. Emergency / Urgent Maintenance Strip */}
      <section className="urgent-strip">
        <div className="container urgent-content">
          <div className="urgent-text">
            <h2 className="h2 text-white mb-2 flex items-center gap-3">
              <AlertCircle size={32} /> Need Urgent Facility Support?
            </h2>
            <p className="text-gray-300 max-w-3xl">
              For urgent maintenance requirements such as AC breakdowns, electrical faults, water leakage, drainage issues or other reactive maintenance needs, contact our team.
            </p>
          </div>
          <div className="urgent-action">
            <a href="tel:+971000000000" className="btn bg-white text-black hover:bg-gray-200 font-bold px-8">Call for Support</a>
          </div>
        </div>
      </section>

      {/* 9. Frequently Asked Questions */}
      <section className="section-padding bg-light">
        <div className="container max-w-4xl mx-auto">
          <div className="section-header text-center">
            <h2 className="h2">Frequently Asked Questions</h2>
          </div>
          <div className="faq-container">
            {faqs.map((faq, index) => (
              <div 
                className={`faq-item ${activeFaq === index ? 'active' : ''}`} 
                key={index}
                onClick={() => toggleFaq(index)}
              >
                <div className="faq-question">
                  <h4>{faq.q}</h4>
                  {activeFaq === index ? <ChevronUp className="text-primary" /> : <ChevronDown className="text-gray-400" />}
                </div>
                <div className="faq-answer">
                  <p>{faq.a}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 10. Final CTA */}
      <section className="section-padding final-cta-section contact-final-cta text-center">
        <div className="container">
          <h2 className="h2 text-white mb-4">Your Facility Deserves the Right Support</h2>
          <p className="text-gray-soft mb-5 max-w-2xl mx-auto">
            Let’s build a facility-management solution around your operational and maintenance requirements.
          </p>
          <div className="flex justify-center gap-4">
            <a href="#enquiry-form" className="btn btn-primary">Request a Quote</a>
            <a href="tel:+971000000000" className="btn btn-outline hero-btn-outline">Talk to Our Team</a>
          </div>
        </div>
      </section>

    </div>
  );
};

export default Contact;
