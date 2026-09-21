import React from 'react';
import { Link } from 'react-router-dom';
import { 
  CheckCircle2, ArrowRight, ShieldCheck, 
  Wrench, Hammer, Factory, Settings, AlertTriangle, Activity
} from 'lucide-react';
import './HardFM.css';
import '../pages/SoftFM.css'; // Reusing some common layout styles like process-flow

const HardFM = () => {
  return (
    <div className="hard-fm-page">
      
      {/* 1. Inner Hero Section */}
      <section className="page-hero hard-hero">
        <div className="page-hero-overlay"></div>
        <div className="container page-hero-content text-center">
          <span className="section-label text-white border-white">HARD FACILITIES MANAGEMENT</span>
          <h1 className="h1 text-white mb-4 mt-2">Technical Facility Management That Keeps Your Building Running</h1>
          <p className="hero-subtitle mx-auto">
            Comprehensive maintenance, repair and technical support for building systems, infrastructure and critical facility assets.
          </p>
          <div className="hero-actions justify-center mt-4">
            <Link to="/contact" className="btn btn-primary">Request Technical Support</Link>
          </div>
          <div className="breadcrumb mt-4">
            <Link to="/">Home</Link> <span className="mx-2">/</span> <span className="current">Hard FM Services</span>
          </div>
        </div>
      </section>

      {/* 2. Hard FM Introduction */}
      <section className="section-padding">
        <div className="container hard-intro-container">
          <div className="intro-image-wrapper">
            <img src="https://images.unsplash.com/photo-1504307651254-35680f356f58?auto=format&fit=crop&q=80" alt="Hard FM Introduction" />
          </div>
          <div className="intro-content">
            <span className="section-label">HARD FM SOLUTIONS</span>
            <h2 className="h2">Reliable Technical Support for Every Part of Your Facility</h2>
            <p className="text-body mb-4">
              NCFM provides Hard Facilities Management services covering building systems, technical assets, utilities, planned maintenance, corrective works and reactive support for commercial, residential and industrial facilities.
            </p>
            <div className="mini-highlights">
              <span>HVAC & Mechanical</span>
              <span>Electrical Systems</span>
              <span>Plumbing & Drainage</span>
              <span>Civil Maintenance</span>
              <span>Technical Repairs</span>
              <span>Preventive Maintenance</span>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Hard FM Service Categories Overview */}
      <section className="section-padding bg-black text-white">
        <div className="container">
          <div className="section-header text-center">
            <h2 className="h2 text-white">Complete Hard FM Capabilities</h2>
          </div>
          <div className="categories-grid categories-grid-4">
            <div className="category-card">
              <Settings className="cat-icon" />
              <h4>Category A — MEP & Technical Systems</h4>
              <p>HVAC, Electrical Works, Plumbing & Drainage, Mechanical Pipelines, Water Pumps, Fire & Life Safety Systems.</p>
            </div>
            <div className="category-card">
              <Hammer className="cat-icon" />
              <h4>Category B — Civil & Building Works</h4>
              <p>Civil Maintenance, Painting & Decorating, Waterproofing, Gypsum & Ceiling, Flooring Works.</p>
            </div>
            <div className="category-card">
              <Factory className="cat-icon" />
              <h4>Category C — Specialist Building Works</h4>
              <p>Epoxy Coating, Carpentry, Aluminium & Glass, Doors & Access, Façade & Work-at-Height, Parking Shades.</p>
            </div>
            <div className="category-card">
              <Wrench className="cat-icon" />
              <h4>Category D — Maintenance Management</h4>
              <p>Planned Preventive Maintenance, Corrective Maintenance, Reactive & Emergency Maintenance.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Detailed Services Grid (20 Services) */}
      <section className="section-padding bg-light">
        <div className="container">
          <div className="section-header text-center">
            <h2 className="h2">Detailed Hard FM Services</h2>
            <p className="text-body max-w-2xl mx-auto">Explore our 20 specialized technical services tailored for your facility.</p>
          </div>
          <div className="services-20-grid">
            {[
              { id: '01', title: 'HVAC & Air Conditioning Works', desc: 'Maintenance, servicing and troubleshooting of HVAC and air-conditioning systems.' },
              { id: '02', title: 'Electrical Works', desc: 'Electrical installation, repair, inspection and maintenance services.' },
              { id: '03', title: 'Plumbing & Drainage', desc: 'Complete plumbing and drainage maintenance for facility operations.' },
              { id: '04', title: 'Civil & Building Maintenance', desc: 'Masonry, plastering, concrete repair, screeding and general civil repairs.' },
              { id: '05', title: 'Painting & Decorating Works', desc: 'Interior, exterior, ceiling and metal painting with proper surface preparation.' },
              { id: '06', title: 'Waterproofing Works', desc: 'Rooftop, balcony, toilet waterproofing and leakage repair.' },
              { id: '07', title: 'Epoxy & Protective Coating', desc: 'Floor coating, anti-slip and protective coatings for industrial and parking floors.' },
              { id: '08', title: 'Carpentry & Joinery Works', desc: 'Cabinets, wardrobes, doors, shelving, partitions and furniture repair.' },
              { id: '09', title: 'Aluminium & Glass Works', desc: 'Doors, windows, partitions, glass replacement and curtain wall maintenance.' },
              { id: '10', title: 'Gypsum & Ceiling Works', desc: 'Gypsum partitions, false ceilings, tile replacement and crack repairs.' },
              { id: '11', title: 'Flooring Works', desc: 'Ceramic, porcelain, marble, granite, vinyl, screeding and grouting.' },
              { id: '12', title: 'Mechanical Pipeline Works', desc: 'LPG, CNG, compressed air pipelines, valves and pressure testing.' },
              { id: '13', title: 'Water Pump & Tank Works', desc: 'Pump inspection, maintenance, control troubleshooting and leak rectification.' },
              { id: '14', title: 'Doors & Access Systems', desc: 'Maintenance of wooden, aluminium, glass, sliding and automatic doors.' },
              { id: '15', title: 'Fire & Life Safety Systems', desc: 'Fire alarm support, extinguisher inspection, sprinklers and emergency lighting.' },
              { id: '16', title: 'Façade & Work-at-Height Works', desc: 'External wall repairs, high-level painting, boom lift and scaffolding works.' },
              { id: '17', title: 'Parking Shade & External Works', desc: 'Fabric shade repair, steel frame repair, rust treatment and pergola maintenance.' },
              { id: '18', title: 'Planned Preventive Maintenance', desc: 'Scheduled inspections, asset maintenance, lubrication and checklist reporting.' },
              { id: '19', title: 'Corrective Maintenance', desc: 'Fault diagnosis, component replacement and planned technical repairs.' },
              { id: '20', title: 'Reactive & Emergency', desc: 'AC breakdowns, electrical faults, leaks, pump failures and urgent repairs.' },
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

      {/* 5. Featured Technical Services */}
      <section className="section-padding">
        <div className="container">
          <div className="section-header text-center">
            <h2 className="h2">Featured Technical Services</h2>
          </div>
          <div className="featured-services-grid">
            <div className="featured-card">
              <img src="https://images.unsplash.com/photo-1599304313271-e730704445bb?auto=format&fit=crop&q=80" alt="HVAC Maintenance" />
              <div className="featured-overlay"><h4>HVAC Maintenance</h4></div>
            </div>
            <div className="featured-card">
              <img src="https://images.unsplash.com/photo-1621905251189-08b45d6a269e?auto=format&fit=crop&q=80" alt="Electrical Systems" />
              <div className="featured-overlay"><h4>Electrical Systems</h4></div>
            </div>
            <div className="featured-card">
              <img src="https://images.unsplash.com/photo-1505798577917-a65157d3320a?auto=format&fit=crop&q=80" alt="Plumbing & Drainage" />
              <div className="featured-overlay"><h4>Plumbing & Drainage</h4></div>
            </div>
            <div className="featured-card">
              <img src="https://images.unsplash.com/photo-1504307651254-35680f356f58?auto=format&fit=crop&q=80" alt="Civil Maintenance" />
              <div className="featured-overlay"><h4>Civil Maintenance</h4></div>
            </div>
            <div className="featured-card">
              <img src="https://images.unsplash.com/photo-1541888001691-8dc941323380?auto=format&fit=crop&q=80" alt="Fire & Life Safety" />
              <div className="featured-overlay"><h4>Fire & Life Safety</h4></div>
            </div>
            <div className="featured-card">
              <img src="https://images.unsplash.com/photo-1581092921461-eab62e97a780?auto=format&fit=crop&q=80" alt="Preventive Maintenance" />
              <div className="featured-overlay"><h4>Preventive Maintenance</h4></div>
            </div>
          </div>
        </div>
      </section>

      {/* 6. Preventive Maintenance Section */}
      <section className="section-padding ppm-section">
        <div className="container">
          <div className="ppm-content-wrapper text-center">
            <span className="section-label border-white text-white mb-4">PLANNED PREVENTIVE MAINTENANCE</span>
            <h2 className="h2 text-white mb-5">Prevent Problems Before They Disrupt Operations</h2>
            <div className="ppm-points">
              <span>Scheduled inspection</span>
              <span>Asset maintenance</span>
              <span>Cleaning and lubrication</span>
              <span>Filter replacement</span>
              <span>Functional testing</span>
              <span>Fault detection</span>
              <span>Asset condition reporting</span>
            </div>
            <Link to="/contact" className="btn btn-primary mt-5">Enquire About PPM</Link>
          </div>
        </div>
      </section>

      {/* 7. Corrective & Reactive Maintenance */}
      <section className="section-padding bg-light">
        <div className="container">
          <div className="section-header text-center">
            <h2 className="h2">Fast Response When Something Goes Wrong</h2>
          </div>
          <div className="cr-grid">
            <div className="cr-card">
              <Wrench className="text-primary mb-3" size={40} />
              <h3 className="h3">Corrective Maintenance</h3>
              <p className="text-body">For identified faults and planned technical repairs to restore optimal performance.</p>
            </div>
            <div className="cr-card">
              <AlertTriangle className="text-primary mb-3" size={40} />
              <h3 className="h3">Reactive Maintenance</h3>
              <p className="text-body">For urgent operational breakdowns and emergency technical requirements demanding immediate action.</p>
            </div>
          </div>
          
          <div className="cr-flow-container text-center mt-5">
            <div className="cr-flow">
              <div className="cr-step">Issue Identified</div>
              <div className="cr-arrow">→</div>
              <div className="cr-step">Technical Assessment</div>
              <div className="cr-arrow">→</div>
              <div className="cr-step">Repair / Replacement</div>
              <div className="cr-arrow">→</div>
              <div className="cr-step">Testing</div>
              <div className="cr-arrow">→</div>
              <div className="cr-step cr-final">System Restored</div>
            </div>
          </div>
        </div>
      </section>

      {/* 8. Asset & Building Systems Coverage */}
      <section className="section-padding">
        <div className="container">
          <div className="section-header text-center">
            <h2 className="h2">Supporting the Systems That Keep Facilities Operational</h2>
          </div>
          <div className="asset-grid">
            <div className="asset-card">Air Conditioning</div>
            <div className="asset-card">Electrical Distribution</div>
            <div className="asset-card">Water Systems</div>
            <div className="asset-card">Drainage</div>
            <div className="asset-card">Fire Systems</div>
            <div className="asset-card">Doors & Access</div>
            <div className="asset-card">Building Fabric</div>
            <div className="asset-card">External Structures</div>
          </div>
        </div>
      </section>

      {/* 9. Our Technical Maintenance Process */}
      <section className="section-padding bg-black text-white">
        <div className="container text-center">
          <h2 className="h2 text-white mb-5">Structured Maintenance from Inspection to Completion</h2>
          <div className="process-flow">
            <div className="process-step">
              <div className="process-circle">01</div>
              <h4 className="text-white">Site Inspection</h4>
            </div>
            <div className="process-line"></div>
            <div className="process-step">
              <div className="process-circle">02</div>
              <h4 className="text-white">Fault Assessment</h4>
            </div>
            <div className="process-line"></div>
            <div className="process-step">
              <div className="process-circle">03</div>
              <h4 className="text-white">Scope & Planning</h4>
            </div>
            <div className="process-line"></div>
            <div className="process-step">
              <div className="process-circle">04</div>
              <h4 className="text-white">Technical Execution</h4>
            </div>
            <div className="process-line"></div>
            <div className="process-step">
              <div className="process-circle">05</div>
              <h4 className="text-white">Testing</h4>
            </div>
            <div className="process-line"></div>
            <div className="process-step">
              <div className="process-circle">06</div>
              <h4 className="text-white">Reporting & Handover</h4>
            </div>
          </div>
        </div>
      </section>

      {/* 10. Safety & Technical Quality */}
      <section className="section-padding bg-light">
        <div className="container safety-container">
          <div className="safety-content">
            <h2 className="h2">Safety and Quality Built Into Every Job</h2>
            <ul className="safety-list mt-4">
              <li><ShieldCheck className="icon" /> Safe work practices</li>
              <li><ShieldCheck className="icon" /> Appropriate tools and equipment</li>
              <li><ShieldCheck className="icon" /> Supervisor inspections</li>
              <li><ShieldCheck className="icon" /> Maintenance checklists</li>
              <li><ShieldCheck className="icon" /> Technical testing</li>
              <li><ShieldCheck className="icon" /> Work completion reporting</li>
              <li><ShieldCheck className="icon" /> Client coordination</li>
              <li><ShieldCheck className="icon" /> Preventive recommendations</li>
            </ul>
          </div>
          <div className="safety-image">
            <img src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&q=80" alt="Technical Quality & Safety" />
          </div>
        </div>
      </section>

      {/* 11. Industries Supported */}
      <section className="section-padding">
        <div className="container">
          <div className="section-header text-center">
            <h2 className="h2">Industries Supported</h2>
          </div>
          <div className="industries-compact-grid">
            <div className="ind-pill">Commercial Buildings</div>
            <div className="ind-pill">Residential Properties</div>
            <div className="ind-pill">Hospitality</div>
            <div className="ind-pill">Industrial Facilities</div>
            <div className="ind-pill">Warehouses</div>
            <div className="ind-pill">Retail</div>
            <div className="ind-pill">Healthcare</div>
            <div className="ind-pill">Education</div>
          </div>
        </div>
      </section>

      {/* 12. Compliance Note */}
      <section className="compliance-section">
        <div className="container text-center">
          <p className="compliance-note">
            * Fire and life-safety works are subject to applicable authority approvals, licensing and project requirements.
          </p>
          <p className="compliance-note">
            * Other specialist technical works are executed strictly in accordance with local regulations and project specifications.
          </p>
        </div>
      </section>

      {/* 13. Hard FM CTA */}
      <section className="section-padding final-cta-section technical-cta text-center">
        <div className="container">
          <h2 className="h2 text-white mb-4">Need Reliable Technical Maintenance Support?</h2>
          <p className="text-gray-soft mb-5 max-w-2xl mx-auto">
            From preventive maintenance to urgent repairs, NCFM provides technical support to keep your facility systems safe and operational.
          </p>
          <div className="flex justify-center gap-4">
            <Link to="/contact" className="btn btn-primary">Request Technical Support</Link>
            <a href="tel:+971000000000" className="btn btn-outline hero-btn-outline">Contact Our Team</a>
          </div>
        </div>
      </section>

    </div>
  );
};

export default HardFM;
