import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  CheckCircle2, ArrowRight, ShieldCheck, 
  MapPin, Wrench, Settings, Building2, Paintbrush
} from 'lucide-react';
import './Projects.css';
import '../pages/SoftFM.css'; // Reusing process flow and layout styles
import '../pages/Industries.css'; // Reusing some pill/tag styles

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState('All');

  const filters = [
    'All', 'Soft FM', 'Hard FM', 'Commercial', 
    'Residential', 'Industrial', 'Hospitality', 'Maintenance'
  ];

  return (
    <div className="projects-page">
      
      {/* 1. Inner Hero Section */}
      <section className="page-hero projects-hero">
        <div className="page-hero-overlay"></div>
        <div className="container page-hero-content text-center">
          <span className="section-label text-white border-white">OUR PROJECTS</span>
          <h1 className="h1 text-white mb-4 mt-2">Facility Management in Action</h1>
          <p className="hero-subtitle mx-auto">
            Explore how NCFM supports commercial, residential and industrial facilities through Soft FM, Hard FM and maintenance solutions.
          </p>
          <div className="hero-actions justify-center mt-4">
            <Link to="/contact" className="btn btn-primary">Discuss Your Project</Link>
          </div>
          <div className="breadcrumb mt-4">
            <Link to="/">Home</Link> <span className="mx-2">/</span> <span className="current">Projects</span>
          </div>
        </div>
      </section>

      {/* 2. Projects Introduction */}
      <section className="section-padding">
        <div className="container projects-intro-container">
          <div className="intro-image-wrapper">
            <img src="https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&q=80&w=800" alt="Projects Experience" />
          </div>
          <div className="intro-content">
            <span className="section-label">OUR EXPERIENCE</span>
            <h2 className="h2">Practical Solutions. Professional Execution.</h2>
            <p className="text-body mb-4">
              NCFM delivers facility-management and maintenance solutions across different property types, with scopes tailored to operational needs, technical systems and service priorities.
            </p>
            <div className="mini-highlights mt-4">
              <span>Soft FM Projects</span>
              <span>Hard FM Projects</span>
              <span>Preventive Maintenance</span>
              <span>Specialist Technical Works</span>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Project Filters */}
      <section className="bg-light py-4 border-b border-gray-200">
        <div className="container">
          <div className="project-filters">
            {filters.map(filter => (
              <button 
                key={filter}
                className={`filter-btn ${activeFilter === filter ? 'active' : ''}`}
                onClick={() => setActiveFilter(filter)}
              >
                {filter}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Main Projects Grid */}
      <section className="section-padding bg-light pt-5">
        <div className="container">
          <div className="projects-grid-3">
            
            {/* Project Card 1 */}
            <div className="proj-card">
              <div className="proj-img">
                <img src="/images/commercial.jpg" alt="Project 1" />
                <div className="proj-category">Commercial</div>
              </div>
              <div className="proj-content">
                <h3 className="h3">Corporate HQ Maintenance</h3>
                <p className="proj-location"><MapPin size={16} className="text-primary" /> Business Bay, Dubai</p>
                <div className="proj-services">
                  <strong>Services Provided:</strong>
                  <ul>
                    <li>• HVAC Maintenance</li>
                    <li>• Daily Cleaning</li>
                    <li>• Electrical Support</li>
                    <li>• PPM Schedule</li>
                  </ul>
                </div>
                <div className="proj-link mt-4">
                  <span className="text-primary font-bold">View Project →</span>
                </div>
              </div>
            </div>

            {/* Project Card 2 */}
            <div className="proj-card">
              <div className="proj-img">
                <img src="/images/residential.jpg" alt="Project 2" />
                <div className="proj-category">Residential</div>
              </div>
              <div className="proj-content">
                <h3 className="h3">Luxury Tower FM</h3>
                <p className="proj-location"><MapPin size={16} className="text-primary" /> Dubai Marina</p>
                <div className="proj-services">
                  <strong>Services Provided:</strong>
                  <ul>
                    <li>• Common Area Cleaning</li>
                    <li>• Plumbing & Drainage</li>
                    <li>• Pool Maintenance Support</li>
                    <li>• Emergency Repairs</li>
                  </ul>
                </div>
                <div className="proj-link mt-4">
                  <span className="text-primary font-bold">View Project →</span>
                </div>
              </div>
            </div>

            {/* Project Card 3 */}
            <div className="proj-card">
              <div className="proj-img">
                <img src="/images/industrial.jpg" alt="Project 3" />
                <div className="proj-category">Industrial</div>
              </div>
              <div className="proj-content">
                <h3 className="h3">Logistics Hub Operations</h3>
                <p className="proj-location"><MapPin size={16} className="text-primary" /> JAFZA</p>
                <div className="proj-services">
                  <strong>Services Provided:</strong>
                  <ul>
                    <li>• Industrial Floor Epoxy</li>
                    <li>• High-Bay Lighting</li>
                    <li>• Preventive Maintenance</li>
                    <li>• Technical Support</li>
                  </ul>
                </div>
                <div className="proj-link mt-4">
                  <span className="text-primary font-bold">View Project →</span>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 5. Featured Project */}
      <section className="section-padding">
        <div className="container featured-project-wrapper">
          <div className="feat-proj-img">
            <img src="/images/hardfm/hardfm_intro_1790150291840.jpg" alt="Featured Project" />
          </div>
          <div className="feat-proj-content">
            <span className="section-label">FEATURED PROJECT</span>
            <h2 className="h2 mb-4">Integrated Facility Management for Multi-Use Complex</h2>
            
            <div className="feat-proj-details mb-4">
              <div className="detail-row">
                <span className="detail-label">Location:</span>
                <span className="detail-value">Downtown Dubai</span>
              </div>
              <div className="detail-row">
                <span className="detail-label">Client Type:</span>
                <span className="detail-value">Commercial & Retail</span>
              </div>
              <div className="detail-row">
                <span className="detail-label">Duration:</span>
                <span className="detail-value">Ongoing Annual Contract</span>
              </div>
            </div>

            <p className="text-body mb-4">
              Comprehensive integrated facilities management covering daily operations, technical maintenance, and hygiene services for a high-traffic mixed-use development. Our team deployed a specialized workforce to handle both soft and hard FM requirements seamlessly.
            </p>

            <div className="ind-tags mb-5">
              <span>HVAC</span><span>Electrical</span><span>Deep Cleaning</span><span>Plumbing</span><span>PPM</span>
            </div>

            <Link to="/contact" className="btn btn-outline">View Project Details</Link>
          </div>
        </div>
      </section>

      {/* 6. Before & After Showcase */}
      <section className="section-padding bg-black text-white">
        <div className="container">
          <div className="section-header text-center">
            <h2 className="h2 text-white">Visible Results. Professional Finish.</h2>
            <p className="text-gray-soft mx-auto max-w-2xl">Showcasing the impact of our deep cleaning and technical repair works.</p>
          </div>
          <div className="showcase-grid">
            <div className="showcase-item">
              <div className="showcase-label bg-gray">BEFORE</div>
              <img src="/images/hardfm/hardfm_civil_1790150358441.jpg" alt="Before Deep Cleaning" />
            </div>
            <div className="showcase-item">
              <div className="showcase-label">AFTER</div>
              <img src="/images/softfm/soft_feat_1_1790080607501.jpg" alt="After Deep Cleaning" />
            </div>
          </div>
        </div>
      </section>

      {/* 7. Project Categories */}
      <section className="section-padding bg-light">
        <div className="container">
          <div className="section-header text-center">
            <h2 className="h2">Project Categories</h2>
          </div>
          <div className="proj-categories-grid">
            <div className="p-cat-card">
              <Paintbrush className="text-primary mb-4" size={40} />
              <h3 className="h3">Soft FM Projects</h3>
              <p className="text-body">Cleaning, housekeeping, landscaping and hygiene work.</p>
            </div>
            <div className="p-cat-card">
              <Wrench className="text-primary mb-4" size={40} />
              <h3 className="h3">Hard FM Projects</h3>
              <p className="text-body">Technical, civil, electrical, HVAC and plumbing work.</p>
            </div>
            <div className="p-cat-card">
              <Settings className="text-primary mb-4" size={40} />
              <h3 className="h3">Preventive Maintenance</h3>
              <p className="text-body">Scheduled inspection and maintenance programs.</p>
            </div>
            <div className="p-cat-card">
              <Building2 className="text-primary mb-4" size={40} />
              <h3 className="h3">Specialist Works</h3>
              <p className="text-body">Waterproofing, epoxy, façade, glass, joinery and other technical works.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 8. Project Delivery Process */}
      <section className="section-padding">
        <div className="container text-center">
          <h2 className="h2 mb-5">From Requirement to Handover</h2>
          
          <div className="process-flow delivery-flow">
            <div className="process-step">
              <div className="process-circle">01</div>
              <h4>Client Requirement</h4>
            </div>
            <div className="process-line"></div>
            <div className="process-step">
              <div className="process-circle">02</div>
              <h4>Site Assessment</h4>
            </div>
            <div className="process-line"></div>
            <div className="process-step">
              <div className="process-circle">03</div>
              <h4>Scope & Proposal</h4>
            </div>
            <div className="process-line"></div>
            <div className="process-step">
              <div className="process-circle">04</div>
              <h4>Mobilization</h4>
            </div>
            <div className="process-line"></div>
            <div className="process-step">
              <div className="process-circle">05</div>
              <h4>Execution</h4>
            </div>
            <div className="process-line"></div>
            <div className="process-step">
              <div className="process-circle">06</div>
              <h4>Inspection</h4>
            </div>
            <div className="process-line"></div>
            <div className="process-step">
              <div className="process-circle">07</div>
              <h4>Handover / Support</h4>
            </div>
          </div>
        </div>
      </section>

      {/* 9. Client Testimonials */}
      <section className="section-padding bg-black text-white text-center">
        <div className="container">
          <h2 className="h2 text-white mb-5">What Our Clients Say</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            <div className="p-6 bg-zinc-900 rounded-lg text-left border border-zinc-800">
              <div className="text-primary text-2xl mb-3">★★★★★</div>
              <p className="text-gray-300 italic mb-4">"NCFM transformed how we handle our building maintenance. Their team is incredibly responsive and highly professional. Outstanding service quality!"</p>
              <h4 className="font-bold text-white">- Commercial Property Manager, Doha</h4>
            </div>
            <div className="p-6 bg-zinc-900 rounded-lg text-left border border-zinc-800">
              <div className="text-primary text-2xl mb-3">★★★★★</div>
              <p className="text-gray-300 italic mb-4">"Having a single partner for both Soft and Hard FM has saved us immense time and money. Their preventive maintenance programs are top-tier."</p>
              <h4 className="font-bold text-white">- Logistics Hub Director</h4>
            </div>
            <div className="p-6 bg-zinc-900 rounded-lg text-left border border-zinc-800">
              <div className="text-primary text-2xl mb-3">★★★★★</div>
              <p className="text-gray-300 italic mb-4">"The deep cleaning and hygiene standards maintained by NCFM at our residential tower have significantly elevated the living experience for our tenants."</p>
              <h4 className="font-bold text-white">- Residential Tower Association</h4>
            </div>
          </div>
        </div>
      </section>

      {/* 10. Client Sectors */}
      <section className="section-padding bg-light">
        <div className="container">
          <div className="section-header text-center">
            <h2 className="h2">Projects Across Diverse Facilities</h2>
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
        </div>
      </section>

      {/* 11. Quality & Project Control */}
      <section className="section-padding">
        <div className="container quality-container">
          <div className="quality-content">
            <h2 className="h2">Controlled Execution at Every Stage</h2>
            <ul className="quality-list mt-4">
              <li><ShieldCheck className="icon" /> Scope confirmation</li>
              <li><ShieldCheck className="icon" /> Site supervision</li>
              <li><ShieldCheck className="icon" /> Safe work practices</li>
              <li><ShieldCheck className="icon" /> Quality inspection</li>
              <li><ShieldCheck className="icon" /> Maintenance checklists</li>
              <li><ShieldCheck className="icon" /> Client coordination</li>
              <li><ShieldCheck className="icon" /> Completion verification</li>
              <li><ShieldCheck className="icon" /> Reporting</li>
            </ul>
          </div>
          <div className="quality-image">
            <img src="/images/hardfm/hardfm_safety_quality_1790150418979.jpg" alt="Quality & Project Control" />
          </div>
        </div>
      </section>

      {/* 13. Project Enquiry CTA */}
      <section className="section-padding final-cta-section projects-cta text-center">
        <div className="container">
          <h2 className="h2 text-white mb-4">Have a Facility or Maintenance Project?</h2>
          <p className="text-gray-soft mb-5 max-w-2xl mx-auto">
            Share your requirements with NCFM and our team can help define the right service scope.
          </p>
          <div className="flex justify-center gap-4">
            <Link to="/contact" className="btn btn-primary">Start a Project</Link>
            <Link to="/contact" className="btn btn-outline hero-btn-outline">Request a Quote</Link>
          </div>
        </div>
      </section>

    </div>
  );
};

export default Projects;
