import React from 'react';
import { Link } from 'react-router-dom';
import { 
  CheckCircle2, ArrowRight, ShieldCheck, 
  Paintbrush, Wrench, Droplet, Zap, Building2, Layers, CheckSquare
} from 'lucide-react';
import './SoftFM.css';

const FinishingWorks = () => {
  const finishingServices = [
    {
      id: '01',
      title: 'Tile Installation Works',
      desc: 'Professional wall and floor tiling with accurate leveling, alignment, and neat finishing for lasting results.',
      icon: <Layers className="cat-icon text-primary" size={32} />
    },
    {
      id: '02',
      title: 'Painting Works',
      desc: 'Interior and exterior painting with proper surface preparation for a smooth, durable, and attractive finish.',
      icon: <Paintbrush className="cat-icon text-primary" size={32} />
    },
    {
      id: '03',
      title: 'Gypsum Board Works',
      desc: 'Gypsum partitions, false ceilings, and decorative ceiling designs installed with precision.',
      icon: <Building2 className="cat-icon text-primary" size={32} />
    },
    {
      id: '04',
      title: 'Plastering Works',
      desc: 'Smooth, even plastering for internal and external walls, ready for painting or final finishes.',
      icon: <Wrench className="cat-icon text-primary" size={32} />
    },
    {
      id: '05',
      title: 'Flooring Works',
      desc: 'Supply and installation of flooring solutions suited to your space, budget, and usage.',
      icon: <CheckSquare className="cat-icon text-primary" size={32} />
    },
    {
      id: '06',
      title: 'Interior Finishing Works',
      desc: 'Complete interior finishing to bring your space to a handover-ready standard.',
      icon: <ShieldCheck className="cat-icon text-primary" size={32} />
    },
    {
      id: '07',
      title: 'Electrical Works',
      desc: 'Safe and reliable electrical installation, wiring, and repair carried out by skilled technicians.',
      icon: <Zap className="cat-icon text-primary" size={32} />
    },
    {
      id: '08',
      title: 'Plumbing Works',
      desc: 'Dependable plumbing installation, repair, and maintenance for homes and commercial properties.',
      icon: <Droplet className="cat-icon text-primary" size={32} />
    }
  ];

  return (
    <div className="soft-fm-page finishing-works-page">
      
      {/* 1. Hero Section */}
      <section className="page-hero soft-hero">
        <div className="page-hero-overlay"></div>
        <div className="container page-hero-content text-center">
          <span className="section-label text-white border-white">GENERAL FINISHING WORKS</span>
          <h1 className="h1 text-white mb-4 mt-2">General Finishing Works in Qatar</h1>
          <p className="hero-subtitle mx-auto max-w-3xl">
            NCFM provides complete general finishing works for villas, apartments, offices, and commercial buildings across Qatar. Our skilled team delivers clean, precise results at every stage, from surface preparation to the final finish, all under one contracting partner.
          </p>
          <div className="hero-actions justify-center mt-6 flex gap-4 flex-wrap">
            <Link to="/contact" className="btn btn-primary">Request Consultation</Link>
            <a href="https://wa.me/97431310436" target="_blank" rel="noopener noreferrer" className="btn btn-outline border-white text-white hover:bg-white hover:text-black">
              Chat on WhatsApp
            </a>
          </div>
          <div className="breadcrumb mt-5">
            <Link to="/">Home</Link> <span className="mx-2">/</span> <span className="current">Finishing Works</span>
          </div>
        </div>
      </section>

      {/* 2. Overview Section */}
      <section className="section-padding">
        <div className="container soft-intro-container">
          <div className="intro-image-wrapper">
            <img src="/images/soft_fm.jpg" alt="Finishing Works in Qatar" />
          </div>
          <div className="intro-content">
            <span className="section-label">ONE CONTRACTING PARTNER</span>
            <h2 className="h2">From Surface Preparation to the Final Handover</h2>
            <p className="text-body mb-4">
              NCFM delivers precision craftsmanship across residential villas, high-rise buildings, majlis, and commercial spaces. We understand that finishing defines the aesthetic and longevity of your property.
            </p>
            <div className="mini-highlights">
              <span>Tile Installation</span>
              <span>Interior & Exterior Painting</span>
              <span>Gypsum Board & Ceilings</span>
              <span>Plastering & Rendering</span>
              <span>Flooring Solutions</span>
              <span>Electrical & MEP</span>
              <span>Plumbing Works</span>
              <span>Turnkey Detailing</span>
            </div>
            <div className="mt-6">
              <a href="tel:+97431310436" className="btn btn-primary">Call +974 31310436</a>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Detailed Services Cards Grid (8 Services) */}
      <section className="section-padding bg-light">
        <div className="container">
          <div className="section-header text-center">
            <span className="section-label" style={{ color: 'var(--color-primary)', fontWeight: '700', letterSpacing: '1px' }}>OUR CRAFTSMANSHIP</span>
            <h2 className="h2">Specialized Finishing Services</h2>
            <p className="text-body max-w-2xl mx-auto">
              Clean, precise results delivered at every stage of your project.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-8">
            {finishingServices.map((service) => (
              <div key={service.id} className="p-6 bg-white rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-xs font-bold text-gray-400 bg-gray-50 px-2 py-1 rounded">{service.id}</span>
                    {service.icon}
                  </div>
                  <h3 className="h4 font-bold text-black mb-3">{service.title}</h3>
                  <p className="text-body text-sm leading-relaxed">{service.desc}</p>
                </div>
                <div className="mt-6 pt-4 border-t border-gray-100">
                  <Link to="/contact" className="text-primary font-semibold text-sm flex items-center gap-1 hover:gap-2 transition-all">
                    Request Quote <ArrowRight size={15} />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Complete Service Table (Matches Scope Document) */}
      <section className="section-padding bg-white">
        <div className="container">
          <div className="section-header text-center">
            <h2 className="h2">Service Scope & Description</h2>
            <p className="text-body max-w-2xl mx-auto">
              Summary of all general finishing works managed by NCFM.
            </p>
          </div>

          <div className="overflow-x-auto mt-8">
            <table className="w-full text-left border-collapse border border-gray-200 rounded-lg overflow-hidden shadow-sm">
              <thead>
                <tr className="bg-black text-white">
                  <th className="py-4 px-6 font-semibold w-1/3">Service</th>
                  <th className="py-4 px-6 font-semibold">Description</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {finishingServices.map((item, idx) => (
                  <tr key={item.id} className={idx % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                    <td className="py-4 px-6 font-bold text-gray-900 flex items-center gap-3">
                      <span className="w-2 h-2 rounded-full bg-primary flex-shrink-0"></span>
                      {item.title}
                    </td>
                    <td className="py-4 px-6 text-gray-700 leading-relaxed">
                      {item.desc}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* 5. Process Flow */}
      <section className="section-padding bg-light">
        <div className="container text-center">
          <h2 className="h2 mb-5">How We Deliver Finishing Works</h2>
          <div className="process-flow">
            <div className="process-step">
              <div className="process-circle">01</div>
              <h4>Site Assessment</h4>
              <p>Inspection & surface assessment</p>
            </div>
            <div className="process-line"></div>
            <div className="process-step">
              <div className="process-circle">02</div>
              <h4>Scope & Specs</h4>
              <p>Material selection & plan</p>
            </div>
            <div className="process-line"></div>
            <div className="process-step">
              <div className="process-circle">03</div>
              <h4>Surface Prep</h4>
              <p>Proper substrate leveling & prep</p>
            </div>
            <div className="process-line"></div>
            <div className="process-step">
              <div className="process-circle">04</div>
              <h4>Execution</h4>
              <p>Clean, accurate installation</p>
            </div>
            <div className="process-line"></div>
            <div className="process-step">
              <div className="process-circle">05</div>
              <h4>Quality Handover</h4>
              <p>Supervision & client approval</p>
            </div>
          </div>
        </div>
      </section>

      {/* 6. Why Choose NCFM for Finishing Works */}
      <section className="section-padding">
        <div className="container hygiene-container">
          <div className="hygiene-content">
            <span className="section-label">SUPERIOR QUALITY</span>
            <h2 className="h2">Consistent Standards. Lasting Finish.</h2>
            <ul className="hygiene-list mt-4">
              <li><CheckCircle2 className="icon" /> Qualified engineers overseeing site operations</li>
              <li><CheckCircle2 className="icon" /> Strict leveling and alignment standards</li>
              <li><CheckCircle2 className="icon" /> Proper surface preparation before painting & tiling</li>
              <li><CheckCircle2 className="icon" /> Top-grade materials and clean site housekeeping</li>
              <li><CheckCircle2 className="icon" /> Upfront, transparent pricing without hidden surprises</li>
              <li><CheckCircle2 className="icon" /> Timely handover aligned with agreed timelines</li>
            </ul>
            <div className="mt-6 flex gap-4">
              <Link to="/contact" className="btn btn-primary">Schedule Consultation</Link>
            </div>
          </div>
          <div className="hygiene-image">
            <img src="/images/about/about_overview_1790079192293.jpg" alt="NCFM Finishing Quality" />
          </div>
        </div>
      </section>

      {/* 7. Final CTA */}
      <section className="section-padding bg-black text-white text-center">
        <div className="container max-w-3xl">
          <h2 className="h2 text-white mb-4">Looking for General Finishing Works in Qatar?</h2>
          <p className="text-gray-soft mb-6 text-lg">
            Connect with NCFM for dependable tile installation, painting, gypsum, plastering, electrical, and plumbing works.
          </p>
          <div className="flex justify-center gap-4 flex-wrap">
            <Link to="/contact" className="btn btn-primary !px-6 !py-3">Request a Free Quote</Link>
            <a href="tel:+97431310436" className="btn btn-outline hero-btn-outline !px-6 !py-3">Call +974 31310436</a>
          </div>
        </div>
      </section>

    </div>
  );
};

export default FinishingWorks;
