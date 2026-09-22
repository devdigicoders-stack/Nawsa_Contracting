import React from 'react';
import { Link } from 'react-router-dom';
import { 
  CheckCircle2, ArrowRight, ShieldCheck, 
  Sparkles, Leaf, Users, Trash2, Building2
} from 'lucide-react';
import './SoftFM.css';

const SoftFM = () => {
  return (
    <div className="soft-fm-page">
      
      {/* 1. Inner Hero Section */}
      <section className="page-hero soft-hero">
        <div className="page-hero-overlay"></div>
        <div className="container page-hero-content text-center">
          <span className="section-label text-white border-white">SOFT FACILITIES MANAGEMENT</span>
          <h1 className="h1 text-white mb-4 mt-2">Professional Soft FM Services for Cleaner, Safer & Better Managed Facilities</h1>
          <p className="hero-subtitle mx-auto">
            Comprehensive cleaning, housekeeping, hygiene, support and environmental services for commercial, residential and industrial facilities.
          </p>
          <div className="hero-actions justify-center mt-4">
            <Link to="/contact" className="btn btn-primary">Request a Quote</Link>
          </div>
          <div className="breadcrumb mt-4">
            <Link to="/">Home</Link> <span className="mx-2">/</span> <span className="current">Soft FM Services</span>
          </div>
        </div>
      </section>

      {/* 2. Soft FM Introduction */}
      <section className="section-padding">
        <div className="container soft-intro-container">
          <div className="intro-image-wrapper">
            <img src="/images/softfm/soft_intro_1790080591465.jpg" alt="Soft FM Introduction" />
          </div>
          <div className="intro-content">
            <span className="section-label">SOFT FM SOLUTIONS</span>
            <h2 className="h2">Creating Clean, Hygienic & Professionally Managed Environments</h2>
            <p className="text-body mb-4">
              NCFM provides comprehensive Soft Facilities Management solutions designed to maintain cleanliness, hygiene, presentation and day-to-day operational support across different types of facilities.
            </p>
            <div className="mini-highlights">
              <span>Cleaning & Hygiene</span>
              <span>Housekeeping Support</span>
              <span>Front-of-House Services</span>
              <span>Grounds & External Care</span>
              <span>Specialist Cleaning</span>
              <span>Facility Support</span>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Soft FM Service Categories Overview */}
      <section className="section-padding bg-black text-white">
        <div className="container">
          <div className="section-header text-center">
            <h2 className="h2 text-white">Complete Soft Facilities Management Solutions</h2>
          </div>
          <div className="categories-grid">
            <div className="category-card">
              <Sparkles className="cat-icon" />
              <h4>Category A — Cleaning & Hygiene</h4>
              <p>General Cleaning, Office Cleaning, Deep Cleaning, Washroom Cleaning, Common Area Cleaning, Move-In/Out Cleaning, Post-Construction Cleaning.</p>
            </div>
            <div className="category-card">
              <Building2 className="cat-icon" />
              <h4>Category B — Specialist Cleaning</h4>
              <p>Floor Care, Carpet & Upholstery Cleaning, Glass & Window Cleaning, Façade & High-Level Cleaning, External Area Cleaning.</p>
            </div>
            <div className="category-card">
              <Users className="cat-icon" />
              <h4>Category C — Facility Support</h4>
              <p>Housekeeping & Janitorial Services, Pantry Services, Reception & Front Desk Support, Event Cleaning Support.</p>
            </div>
            <div className="category-card">
              <Leaf className="cat-icon" />
              <h4>Category D — Environmental & Grounds</h4>
              <p>Waste Management Support, Pest Control, Landscaping & Grounds Maintenance.</p>
            </div>
            <div className="category-card">
              <ShieldCheck className="cat-icon" />
              <h4>Category E — Security Support</h4>
              <p>Security Support Services.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Detailed Services Grid (20 Services) */}
      <section className="section-padding bg-light">
        <div className="container">
          <div className="section-header text-center">
            <h2 className="h2">Detailed Soft FM Services</h2>
            <p className="text-body max-w-2xl mx-auto">Explore our 20 specialized soft services tailored for your facility.</p>
          </div>
          <div className="services-20-grid">
            {[
              { id: '01', title: 'General Cleaning Services', desc: 'Daily routine cleaning, dusting, sweeping, mopping, vacuuming and common-area cleaning.' },
              { id: '02', title: 'Office Cleaning', desc: 'Professional workstation, meeting room, reception, pantry and office-area cleaning.' },
              { id: '03', title: 'Deep Cleaning', desc: 'Intensive cleaning of floors, walls, furniture, kitchens, washrooms and difficult-to-reach areas.' },
              { id: '04', title: 'Housekeeping & Janitorial', desc: 'Daily housekeeping, hygiene inspection, consumable support and general janitorial services.' },
              { id: '05', title: 'Washroom Cleaning & Hygiene', desc: 'Washroom cleaning, disinfection, odour control and consumable replenishment.' },
              { id: '06', title: 'Floor Care & Maintenance', desc: 'Machine scrubbing, polishing, stain removal and periodic floor maintenance.' },
              { id: '07', title: 'Carpet & Upholstery Cleaning', desc: 'Carpet, sofa and chair upholstery cleaning with stain treatment.' },
              { id: '08', title: 'Glass & Window Cleaning', desc: 'Internal glass, accessible external windows, partitions, frames and doors.' },
              { id: '09', title: 'Façade & High-Level Cleaning', desc: 'External façade, cladding, canopy and high-level cleaning using suitable access equipment.' },
              { id: '10', title: 'Waste Management Support', desc: 'Waste collection, segregation support, bin cleaning and recycling support.' },
              { id: '11', title: 'Pest Control', desc: 'General pest inspection, insect control, rodent control and preventive treatment.' },
              { id: '12', title: 'Landscaping & Grounds', desc: 'Grass cutting, plant maintenance, hedge trimming, weed removal and outdoor upkeep.' },
              { id: '13', title: 'Pantry Services', desc: 'Pantry cleaning, beverage support, utensil arrangement and consumable monitoring.' },
              { id: '14', title: 'Reception & Front Desk', desc: 'Visitor reception, enquiry handling, visitor registration and meeting-room coordination.' },
              { id: '15', title: 'Security Support Services', desc: 'Entrance monitoring, visitor management support, patrol assistance and incident reporting.' },
              { id: '16', title: 'Move-In / Move-Out Cleaning', desc: 'Complete unit cleaning before occupancy or after handover.' },
              { id: '17', title: 'Post-Construction Cleaning', desc: 'Construction dust, residue, flooring, fixture and glass cleaning before final handover.' },
              { id: '18', title: 'Common Area Cleaning', desc: 'Lobby, corridor, staircase, lifts, entrances and common-area cleaning.' },
              { id: '19', title: 'External Area Cleaning', desc: 'Walkways, outdoor floors, parking areas and external housekeeping.' },
              { id: '20', title: 'Event Cleaning Support', desc: 'Pre-event, during-event and post-event cleaning support.' },
            ].map(service => (
              <div className="service-item-card" key={service.id}>
                <span className="service-id">{service.id}</span>
                <h4>{service.title}</h4>
                <p>{service.desc}</p>
                <div className="service-view-details">→ View Details</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Featured Soft FM Services */}
      <section className="section-padding">
        <div className="container">
          <div className="section-header text-center">
            <h2 className="h2">Featured Services</h2>
          </div>
          <div className="featured-services-grid">
            <div className="featured-card">
              <img src="/images/softfm/soft_feat_1_1790080607501.jpg" alt="Cleaning & Housekeeping" />
              <div className="featured-overlay"><h4>Cleaning & Housekeeping</h4></div>
            </div>
            <div className="featured-card">
              <img src="/images/softfm/soft_feat_2_1790080638671.jpg" alt="Deep Cleaning" />
              <div className="featured-overlay"><h4>Deep Cleaning</h4></div>
            </div>
            <div className="featured-card">
              <img src="/images/softfm/soft_feat_3_1790080650341.jpg" alt="Floor & Carpet Care" />
              <div className="featured-overlay"><h4>Floor & Carpet Care</h4></div>
            </div>
            <div className="featured-card">
              <img src="/images/softfm/soft_feat_4_1790080663413.jpg" alt="Façade Cleaning" />
              <div className="featured-overlay"><h4>Façade Cleaning</h4></div>
            </div>
            <div className="featured-card">
              <img src="/images/softfm/soft_feat_5_1790080685965.jpg" alt="Landscaping" />
              <div className="featured-overlay"><h4>Landscaping</h4></div>
            </div>
            <div className="featured-card">
              <img src="https://images.unsplash.com/photo-1532996122724-e3c354a0b15b?auto=format&fit=crop&q=80" alt="Waste Management" />
              <div className="featured-overlay"><h4>Waste Management</h4></div>
            </div>
          </div>
        </div>
      </section>

      {/* 6. Cleaning Process / Service Method */}
      <section className="section-padding bg-light">
        <div className="container text-center">
          <h2 className="h2 mb-5">How We Deliver Soft FM Services</h2>
          <div className="process-flow">
            <div className="process-step">
              <div className="process-circle">01</div>
              <h4>Site Assessment</h4>
            </div>
            <div className="process-line"></div>
            <div className="process-step">
              <div className="process-circle">02</div>
              <h4>Scope Planning</h4>
            </div>
            <div className="process-line"></div>
            <div className="process-step">
              <div className="process-circle">03</div>
              <h4>Team Deployment</h4>
            </div>
            <div className="process-line"></div>
            <div className="process-step">
              <div className="process-circle">04</div>
              <h4>Daily Service Execution</h4>
            </div>
            <div className="process-line"></div>
            <div className="process-step">
              <div className="process-circle">05</div>
              <h4>Supervisor Inspection</h4>
            </div>
            <div className="process-line"></div>
            <div className="process-step">
              <div className="process-circle">06</div>
              <h4>Quality Reporting</h4>
            </div>
          </div>
        </div>
      </section>

      {/* 7. Hygiene & Quality Control Section */}
      <section className="section-padding">
        <div className="container hygiene-container">
          <div className="hygiene-content">
            <h2 className="h2">Consistent Standards. Every Day.</h2>
            <ul className="hygiene-list mt-4">
              <li><CheckCircle2 className="icon" /> Routine hygiene inspections</li>
              <li><CheckCircle2 className="icon" /> Cleaning checklists</li>
              <li><CheckCircle2 className="icon" /> Supervisor monitoring</li>
              <li><CheckCircle2 className="icon" /> High-touch surface focus</li>
              <li><CheckCircle2 className="icon" /> Proper equipment and materials</li>
              <li><CheckCircle2 className="icon" /> Scheduled deep cleaning</li>
              <li><CheckCircle2 className="icon" /> Quality reporting</li>
              <li><CheckCircle2 className="icon" /> Client feedback review</li>
            </ul>
          </div>
          <div className="hygiene-image">
            <img src="/images/about/about_overview_1790079192293.jpg" alt="Quality Control" />
          </div>
        </div>
      </section>

      {/* 8. Sector-Specific Soft FM */}
      <section className="section-padding bg-black text-white">
        <div className="container">
          <div className="section-header text-center">
            <h2 className="h2 text-white">Soft FM Solutions Tailored to Your Facility</h2>
          </div>
          <div className="sector-grid">
            <div className="sector-card">
              <h4>Offices</h4>
              <p>Office cleaning, pantry, reception and washroom support.</p>
            </div>
            <div className="sector-card">
              <h4>Residential</h4>
              <p>Common areas, external areas, landscaping and cleaning.</p>
            </div>
            <div className="sector-card">
              <h4>Hospitality</h4>
              <p>Housekeeping, event cleaning and hygiene support.</p>
            </div>
            <div className="sector-card">
              <h4>Retail</h4>
              <p>Daily cleaning, floor care, glass cleaning and waste management.</p>
            </div>
            <div className="sector-card">
              <h4>Industrial</h4>
              <p>Cleaning, external housekeeping and waste support.</p>
            </div>
            <div className="sector-card">
              <h4>Educational / Healthcare</h4>
              <p>Structured hygiene and cleaning support.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 9. Service Showcase (Before/After) */}
      <section className="section-padding bg-light">
        <div className="container">
          <div className="section-header text-center">
            <h2 className="h2">Service Showcase</h2>
            <p className="text-body max-w-2xl mx-auto">See the difference our professional deep cleaning makes.</p>
          </div>
          <div className="showcase-grid">
            <div className="showcase-item">
              <div className="showcase-label">Before</div>
              <img src="https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&q=80" alt="Before Cleaning" />
            </div>
            <div className="showcase-item">
              <div className="showcase-label">After</div>
              <img src="https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&fit=crop&q=80" alt="After Cleaning" />
            </div>
          </div>
        </div>
      </section>

      {/* 10. Why Choose NCFM for Soft FM */}
      <section className="section-padding">
        <div className="container">
          <div className="section-header text-center">
            <h2 className="h2">Why Choose NCFM for Soft FM Services</h2>
          </div>
          <div className="values-grid">
            <div className="value-card">
              <ShieldCheck className="text-primary mb-3" size={32} />
              <h4>Professional Cleaning Teams</h4>
            </div>
            <div className="value-card">
              <ShieldCheck className="text-primary mb-3" size={32} />
              <h4>Structured Service Schedules</h4>
            </div>
            <div className="value-card">
              <ShieldCheck className="text-primary mb-3" size={32} />
              <h4>Flexible Service Packages</h4>
            </div>
            <div className="value-card">
              <ShieldCheck className="text-primary mb-3" size={32} />
              <h4>Quality Supervision</h4>
            </div>
            <div className="value-card">
              <ShieldCheck className="text-primary mb-3" size={32} />
              <h4>Wide Service Coverage</h4>
            </div>
            <div className="value-card">
              <ShieldCheck className="text-primary mb-3" size={32} />
              <h4>Responsive Facility Support</h4>
            </div>
          </div>
        </div>
      </section>

      {/* 11. Compliance Notes */}
      <section className="compliance-section">
        <div className="container text-center">
          <p className="compliance-note">
            * Pest-control services are provided through approved/licensed arrangements where required.
          </p>
          <p className="compliance-note">
            * Security manpower and support services are subject to applicable licensing and client requirements.
          </p>
        </div>
      </section>

      {/* 12. Soft FM CTA */}
      <section className="section-padding final-cta-section text-center">
        <div className="container">
          <h2 className="h2 text-white mb-4">Looking for Professional Soft FM Support?</h2>
          <p className="text-gray-soft mb-5 max-w-2xl mx-auto">
            From everyday cleaning to specialist facility support, NCFM can build a Soft FM solution around your operational needs.
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

export default SoftFM;
