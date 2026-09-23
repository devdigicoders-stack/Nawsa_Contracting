import React from 'react';
import { Link } from 'react-router-dom';
import { 
  CheckCircle2, Building2, ShieldCheck, 
  Settings, Clock, Activity, ArrowRight, Target, Users, Wrench
} from 'lucide-react';
import './Industries.css';
import '../pages/SoftFM.css'; // Reusing some process flow and layout styles

const Industries = () => {
  return (
    <div className="industries-page">
      
      {/* 1. Inner Hero Section */}
      <section className="page-hero industries-hero">
        <div className="page-hero-overlay"></div>
        <div className="container page-hero-content text-center">
          <span className="section-label text-white border-white">INDUSTRIES WE SERVE</span>
          <h1 className="h1 text-white mb-4 mt-2">Facility Management Solutions for Every Environment</h1>
          <p className="hero-subtitle mx-auto">
            NCFM provides customized Soft and Hard FM services for commercial, residential, hospitality, retail, industrial and other facility environments.
          </p>
          <div className="hero-actions justify-center mt-4">
            <Link to="/contact" className="btn btn-primary">Discuss Your Facility</Link>
          </div>
          <div className="breadcrumb mt-4">
            <Link to="/">Home</Link> <span className="mx-2">/</span> <span className="current">Industries</span>
          </div>
        </div>
      </section>

      {/* 2. Industries Introduction */}
      <section className="section-padding">
        <div className="container industries-intro-container">
          <div className="intro-image-wrapper">
            <img src="/images/industries/ind_commercial_1790151322652.jpg" alt="Sectors Expertise" />
          </div>
          <div className="intro-content">
            <span className="section-label">SECTOR EXPERTISE</span>
            <h2 className="h2">Different Facilities. Different Requirements. One Reliable Partner.</h2>
            <p className="text-body mb-4">
              Every facility has different operational, technical and hygiene requirements. NCFM adapts its service approach according to building type, occupancy, usage, maintenance needs and client expectations.
            </p>
            <div className="mini-highlights mt-4">
              <span>Customized Service Plans</span>
              <span>Dedicated Service Teams</span>
              <span>Soft + Hard FM Integration</span>
              <span>Flexible Maintenance Schedules</span>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Main Industries Grid */}
      <section className="section-padding bg-light">
        <div className="container">
          <div className="section-header text-center">
            <h2 className="h2">Supporting Facilities Across Multiple Sectors</h2>
          </div>
          <div className="industries-8-grid">
            
            {/* 01. Commercial */}
            <div className="ind-service-card">
              <div className="ind-img">
                <img src="/images/industries/ind_commercial_1790151322652.jpg" alt="Commercial Offices" />
                <div className="ind-num">01</div>
              </div>
              <div className="ind-content">
                <h3 className="h3">Commercial Offices</h3>
                <p className="text-body mb-3">Reliable facility support for productive and professionally maintained workplaces.</p>
                <div className="ind-tags">
                  <span>Office Cleaning</span><span>Housekeeping</span><span>HVAC</span><span>Electrical</span><span>Plumbing</span><span>Pantry</span><span>Reception</span><span>PPM</span>
                </div>
              </div>
            </div>

            {/* 02. Residential */}
            <div className="ind-service-card">
              <div className="ind-img">
                <img src="https://images.unsplash.com/photo-1460317442991-0ec209397118?auto=format&fit=crop&q=80&w=600" alt="Residential Properties" />
                <div className="ind-num">02</div>
              </div>
              <div className="ind-content">
                <h3 className="h3">Residential Properties</h3>
                <p className="text-body mb-3">Maintaining clean, safe and comfortable residential environments.</p>
                <div className="ind-tags">
                  <span>Common Area Cleaning</span><span>Landscaping</span><span>Plumbing</span><span>Electrical</span><span>HVAC</span><span>Lift Areas</span><span>Civil Repairs</span><span>Reactive Support</span>
                </div>
              </div>
            </div>

            {/* 03. Hospitality */}
            <div className="ind-service-card">
              <div className="ind-img">
                <img src="https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&q=80&w=600" alt="Hospitality" />
                <div className="ind-num">03</div>
              </div>
              <div className="ind-content">
                <h3 className="h3">Hospitality</h3>
                <p className="text-body mb-3">Facility solutions that support guest comfort and service standards.</p>
                <div className="ind-tags">
                  <span>Housekeeping</span><span>Deep Cleaning</span><span>Pantry Support</span><span>Event Cleaning</span><span>HVAC</span><span>Plumbing</span><span>Electrical</span><span>PPM</span>
                </div>
              </div>
            </div>

            {/* 04. Retail */}
            <div className="ind-service-card">
              <div className="ind-img">
                <img src="https://images.unsplash.com/photo-1534452203293-494d7ddbf7e0?auto=format&fit=crop&q=80&w=600" alt="Retail & Shopping" />
                <div className="ind-num">04</div>
              </div>
              <div className="ind-content">
                <h3 className="h3">Retail & Shopping</h3>
                <p className="text-body mb-3">Keeping high-traffic retail environments clean, safe and operational.</p>
                <div className="ind-tags">
                  <span>Floor Cleaning</span><span>Glass Cleaning</span><span>Washroom Hygiene</span><span>Waste Management</span><span>HVAC</span><span>Electrical</span><span>Emergency Maintenance</span>
                </div>
              </div>
            </div>

            {/* 05. Industrial */}
            <div className="ind-service-card">
              <div className="ind-img">
                <img src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=600" alt="Industrial Facilities" />
                <div className="ind-num">05</div>
              </div>
              <div className="ind-content">
                <h3 className="h3">Industrial Facilities</h3>
                <p className="text-body mb-3">Technical and operational support for demanding industrial environments.</p>
                <div className="ind-tags">
                  <span>Technical Maintenance</span><span>Electrical Works</span><span>Mechanical</span><span>Utility Pipelines</span><span>Cleaning</span><span>External Works</span><span>Epoxy</span><span>PPM</span>
                </div>
              </div>
            </div>

            {/* 06. Warehouses */}
            <div className="ind-service-card">
              <div className="ind-img">
                <img src="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&q=80&w=600" alt="Warehouses & Logistics" />
                <div className="ind-num">06</div>
              </div>
              <div className="ind-content">
                <h3 className="h3">Warehouses & Logistics</h3>
                <p className="text-body mb-3">Supporting efficient, clean and operational logistics environments.</p>
                <div className="ind-tags">
                  <span>Industrial Cleaning</span><span>Electrical</span><span>Lighting</span><span>External Cleaning</span><span>Plumbing</span><span>Dock Maintenance</span><span>Reactive Repairs</span><span>PPM</span>
                </div>
              </div>
            </div>

            {/* 07. Healthcare */}
            <div className="ind-service-card">
              <div className="ind-img">
                <img src="https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&q=80&w=600" alt="Healthcare Facilities" />
                <div className="ind-num">07</div>
              </div>
              <div className="ind-content">
                <h3 className="h3">Healthcare Facilities</h3>
                <p className="text-body mb-3">Strict hygiene and technical support for health environments.</p>
                <div className="ind-tags">
                  <span>Cleaning & Hygiene</span><span>Washroom Maintenance</span><span>Waste Support</span><span>HVAC</span><span>Electrical</span><span>Plumbing</span><span>PPM</span><span>Technical Support</span>
                </div>
              </div>
            </div>

            {/* 08. Educational */}
            <div className="ind-service-card">
              <div className="ind-img">
                <img src="https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&q=80&w=600" alt="Educational Facilities" />
                <div className="ind-num">08</div>
              </div>
              <div className="ind-content">
                <h3 className="h3">Educational Facilities</h3>
                <p className="text-body mb-3">Creating clean, safe and well-maintained learning environments.</p>
                <div className="ind-tags">
                  <span>Classroom Cleaning</span><span>Washroom Hygiene</span><span>Common Areas</span><span>Landscaping</span><span>Electrical</span><span>Plumbing</span><span>HVAC</span><span>General Maintenance</span>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 4. Industry-Specific Service Matrix */}
      <section className="section-padding">
        <div className="container">
          <div className="section-header text-center">
            <h2 className="h2">Solutions Matched to Your Facility Type</h2>
          </div>
          <div className="matrix-wrapper">
            <table className="service-matrix">
              <thead>
                <tr>
                  <th>Service</th>
                  <th>Commercial</th>
                  <th>Residential</th>
                  <th>Hospitality</th>
                  <th>Industrial</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Cleaning</td>
                  <td><CheckCircle2 size={18} className="text-primary mx-auto" /></td>
                  <td><CheckCircle2 size={18} className="text-primary mx-auto" /></td>
                  <td><CheckCircle2 size={18} className="text-primary mx-auto" /></td>
                  <td><CheckCircle2 size={18} className="text-primary mx-auto" /></td>
                </tr>
                <tr>
                  <td>Housekeeping</td>
                  <td><CheckCircle2 size={18} className="text-primary mx-auto" /></td>
                  <td><CheckCircle2 size={18} className="text-primary mx-auto" /></td>
                  <td><CheckCircle2 size={18} className="text-primary mx-auto" /></td>
                  <td>—</td>
                </tr>
                <tr>
                  <td>HVAC</td>
                  <td><CheckCircle2 size={18} className="text-primary mx-auto" /></td>
                  <td><CheckCircle2 size={18} className="text-primary mx-auto" /></td>
                  <td><CheckCircle2 size={18} className="text-primary mx-auto" /></td>
                  <td><CheckCircle2 size={18} className="text-primary mx-auto" /></td>
                </tr>
                <tr>
                  <td>Electrical</td>
                  <td><CheckCircle2 size={18} className="text-primary mx-auto" /></td>
                  <td><CheckCircle2 size={18} className="text-primary mx-auto" /></td>
                  <td><CheckCircle2 size={18} className="text-primary mx-auto" /></td>
                  <td><CheckCircle2 size={18} className="text-primary mx-auto" /></td>
                </tr>
                <tr>
                  <td>Plumbing</td>
                  <td><CheckCircle2 size={18} className="text-primary mx-auto" /></td>
                  <td><CheckCircle2 size={18} className="text-primary mx-auto" /></td>
                  <td><CheckCircle2 size={18} className="text-primary mx-auto" /></td>
                  <td><CheckCircle2 size={18} className="text-primary mx-auto" /></td>
                </tr>
                <tr>
                  <td>Landscaping</td>
                  <td><CheckCircle2 size={18} className="text-primary mx-auto" /></td>
                  <td><CheckCircle2 size={18} className="text-primary mx-auto" /></td>
                  <td><CheckCircle2 size={18} className="text-primary mx-auto" /></td>
                  <td><CheckCircle2 size={18} className="text-primary mx-auto" /></td>
                </tr>
                <tr>
                  <td>PPM</td>
                  <td><CheckCircle2 size={18} className="text-primary mx-auto" /></td>
                  <td><CheckCircle2 size={18} className="text-primary mx-auto" /></td>
                  <td><CheckCircle2 size={18} className="text-primary mx-auto" /></td>
                  <td><CheckCircle2 size={18} className="text-primary mx-auto" /></td>
                </tr>
                <tr>
                  <td>Emergency Maintenance</td>
                  <td><CheckCircle2 size={18} className="text-primary mx-auto" /></td>
                  <td><CheckCircle2 size={18} className="text-primary mx-auto" /></td>
                  <td><CheckCircle2 size={18} className="text-primary mx-auto" /></td>
                  <td><CheckCircle2 size={18} className="text-primary mx-auto" /></td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* 5. Integrated Solutions by Sector */}
      <section className="section-padding bg-black text-white">
        <div className="container text-center">
          <h2 className="h2 text-white mb-5">One Facility Partner Across Multiple Service Needs</h2>
          
          <div className="integrated-solutions-grid">
            <div className="int-sol-card">
              <h3 className="text-primary mb-4">Soft FM</h3>
              <ul>
                <li>Cleaning</li>
                <li>Housekeeping</li>
                <li>Hygiene</li>
                <li>Landscaping</li>
                <li>Support Services</li>
              </ul>
            </div>
            
            <div className="int-sol-card">
              <h3 className="text-primary mb-4">Hard FM</h3>
              <ul>
                <li>HVAC</li>
                <li>Electrical</li>
                <li>Plumbing</li>
                <li>Civil</li>
                <li>Technical Maintenance</li>
              </ul>
            </div>
            
            <div className="int-sol-card">
              <h3 className="text-primary mb-4">Maintenance</h3>
              <ul>
                <li>PPM</li>
                <li>Corrective Maintenance</li>
                <li>Reactive Support</li>
                <li>Emergency Response</li>
              </ul>
            </div>
          </div>
          
          <div className="mt-5 pt-4 border-t border-gray-800">
            <p className="text-xl font-medium">A complete FM approach tailored to each industry.</p>
          </div>
        </div>
      </section>

      {/* 6. Industry Challenges Section */}
      <section className="section-padding bg-light">
        <div className="container">
          <div className="section-header text-center">
            <h2 className="h2">Designed Around Real Facility Challenges</h2>
          </div>
          
          <div className="challenges-grid">
            <div className="challenge-card">
              <Users size={40} className="text-primary mb-4" />
              <h4>High Footfall</h4>
              <p>For malls, offices, hospitality and public spaces requiring continuous hygiene and rapid response.</p>
            </div>
            
            <div className="challenge-card">
              <Activity size={40} className="text-primary mb-4" />
              <h4>Technical Downtime</h4>
              <p>For buildings dependent on HVAC, electrical and utility systems demanding high uptime.</p>
            </div>
            
            <div className="challenge-card">
              <ShieldCheck size={40} className="text-primary mb-4" />
              <h4>Hygiene Standards</h4>
              <p>For commercial, residential and high-use environments needing uncompromising cleanliness.</p>
            </div>
            
            <div className="challenge-card">
              <Settings size={40} className="text-primary mb-4" />
              <h4>Asset Performance</h4>
              <p>For facilities requiring structured preventive maintenance to extend asset lifespans.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 7. Our Sector Approach */}
      <section className="section-padding">
        <div className="container text-center">
          <h2 className="h2 mb-5">How We Build the Right Facility Solution</h2>
          
          <div className="process-flow">
            <div className="process-step">
              <div className="process-circle">01</div>
              <h4>Understand the Facility</h4>
            </div>
            <div className="process-line"></div>
            <div className="process-step">
              <div className="process-circle">02</div>
              <h4>Identify Service Requirements</h4>
            </div>
            <div className="process-line"></div>
            <div className="process-step">
              <div className="process-circle">03</div>
              <h4>Build the Service Scope</h4>
            </div>
            <div className="process-line"></div>
            <div className="process-step">
              <div className="process-circle">04</div>
              <h4>Deploy the Right Team</h4>
            </div>
            <div className="process-line"></div>
            <div className="process-step">
              <div className="process-circle">05</div>
              <h4>Monitor Performance</h4>
            </div>
            <div className="process-line"></div>
            <div className="process-step">
              <div className="process-circle">06</div>
              <h4>Improve Continuously</h4>
            </div>
          </div>
        </div>
      </section>

      {/* 8. Sector-Based Project Showcase */}
      <section className="section-padding bg-light">
        <div className="container">
          <div className="section-header text-center">
            <h2 className="h2">Our Experience Across Facility Types</h2>
          </div>
          
          <div className="projects-grid">
            <div className="project-card">
              <img src="/images/industries/ind_commercial_1790151322652.jpg" alt="Commercial" />
              <div className="project-info">
                <span className="project-category">Commercial Facility</span>
                <h4>Corporate Tower HQ</h4>
                <p className="project-location">Dubai</p>
                <p className="text-sm text-gray-500 mb-4">Integrated Soft & Hard FM Services</p>
                <Link to="/projects" className="project-link">View Project <ArrowRight size={14} /></Link>
              </div>
            </div>
            
            <div className="project-card">
              <img src="https://images.unsplash.com/photo-1460317442991-0ec209397118?auto=format&fit=crop&q=80&w=600" alt="Residential" />
              <div className="project-info">
                <span className="project-category">Residential Property</span>
                <h4>Luxury Apartment Complex</h4>
                <p className="project-location">Dubai Marina</p>
                <p className="text-sm text-gray-500 mb-4">Cleaning, MEP & Landscaping</p>
                <Link to="/projects" className="project-link">View Project <ArrowRight size={14} /></Link>
              </div>
            </div>
            
            <div className="project-card">
              <img src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=600" alt="Industrial" />
              <div className="project-info">
                <span className="project-category">Industrial Facility</span>
                <h4>Logistics Hub</h4>
                <p className="project-location">JAFZA</p>
                <p className="text-sm text-gray-500 mb-4">Hard FM & Preventive Maintenance</p>
                <Link to="/projects" className="project-link">View Project <ArrowRight size={14} /></Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 9. Why NCFM Across Industries */}
      <section className="section-padding">
        <div className="container">
          <div className="section-header text-center">
            <h2 className="h2">Why Facilities Choose NCFM</h2>
          </div>
          <div className="values-grid">
            <div className="value-card">
              <Target className="text-primary mb-3" size={32} />
              <h4>Industry-Focused Solutions</h4>
            </div>
            <div className="value-card">
              <Settings className="text-primary mb-3" size={32} />
              <h4>Flexible Service Models</h4>
            </div>
            <div className="value-card">
              <Building2 className="text-primary mb-3" size={32} />
              <h4>Integrated Soft & Hard FM</h4>
            </div>
            <div className="value-card">
              <Wrench className="text-primary mb-3" size={32} />
              <h4>Skilled Technical Teams</h4>
            </div>
            <div className="value-card">
              <Activity className="text-primary mb-3" size={32} />
              <h4>Preventive Maintenance Approach</h4>
            </div>
            <div className="value-card">
              <Clock className="text-primary mb-3" size={32} />
              <h4>Responsive Facility Support</h4>
            </div>
          </div>
        </div>
      </section>

      {/* 10. Custom Facility Solutions */}
      <section className="section-padding bg-light">
        <div className="container custom-fm-container">
          <div className="custom-fm-content">
            <span className="section-label">CUSTOMIZED FM</span>
            <h2 className="h2">No Two Facilities Are the Same</h2>
            <p className="text-body mb-4">
              NCFM can build customized facility-management scopes based on building size, operating hours, occupancy, technical assets and service priorities.
            </p>
            
            <div className="models-grid mb-5">
              <div className="model-item"><CheckCircle2 className="icon" /> Daily Service</div>
              <div className="model-item"><CheckCircle2 className="icon" /> Scheduled Maintenance</div>
              <div className="model-item"><CheckCircle2 className="icon" /> Monthly Contracts</div>
              <div className="model-item"><CheckCircle2 className="icon" /> Annual Maintenance Contracts</div>
              <div className="model-item"><CheckCircle2 className="icon" /> Project-Based Works</div>
              <div className="model-item"><CheckCircle2 className="icon" /> Emergency Support</div>
            </div>
            
            <Link to="/contact" className="btn btn-primary">Request a Customized Proposal</Link>
          </div>
          <div className="custom-fm-image-wrapper">
            <img src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&q=80&w=800" alt="Customized FM Solutions" />
          </div>
        </div>
      </section>

      {/* 11. Final CTA */}
      <section className="section-padding final-cta-section text-center">
        <div className="container">
          <h2 className="h2 text-white mb-4">Which Industry Does Your Facility Belong To?</h2>
          <p className="text-gray-soft mb-5 max-w-2xl mx-auto">
            Tell us about your facility and service requirements. Our team can recommend a suitable Soft FM, Hard FM or integrated solution.
          </p>
          <div className="flex justify-center gap-4">
            <Link to="/contact" className="btn btn-primary">Request a Quote</Link>
            <a href="tel:+971000000000" className="btn btn-outline hero-btn-outline">Talk to Our Team</a>
          </div>
        </div>
      </section>

    </div>
  );
};

export default Industries;
