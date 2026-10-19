import React, { useState } from 'react';
import { 
  FileText, Download, Eye, ExternalLink, 
  ShieldCheck, Award, Landmark, Building2, CheckCircle2, X 
} from 'lucide-react';
import './CorporateDocuments.css';

const documents = [
  {
    id: 'cr',
    title: 'Commercial Registration (CR)',
    arabicTitle: 'السجل التجاري',
    authority: 'Ministry of Commerce & Industry (MOCI)',
    docNumber: 'CR Certified',
    description: 'Official corporate registration certifying legal establishment and authorized contracting activities in the State of Qatar.',
    url: '/pdf/commercial-registration.pdf',
    downloadName: 'MBA_Contracting_Commercial_Registration.pdf',
    icon: Landmark,
    color: '#B20D17'
  },
  {
    id: 'license',
    title: 'Commercial License',
    arabicTitle: 'رخصة تجارية',
    authority: 'Ministry of Municipality & MOCI',
    docNumber: 'MOCI Licensed',
    description: 'Official municipality operating license authorizing full building construction, maintenance, and civil works.',
    url: '/pdf/commercial-license.pdf',
    downloadName: 'MBA_Contracting_Commercial_License.pdf',
    icon: Award,
    color: '#0F172A'
  },
  {
    id: 'establishment',
    title: 'Establishment Card',
    arabicTitle: 'قيد المنشأة (Computer Card)',
    authority: 'Ministry of Interior (MOI)',
    docNumber: 'MOI Authorized',
    description: 'Immigration & labor establishment identification recognizing authorized signatories and legal representation in Qatar.',
    url: '/pdf/establishment-card.pdf',
    downloadName: 'MBA_Contracting_Establishment_Card.pdf',
    icon: ShieldCheck,
    color: '#B20D17'
  },
  {
    id: 'tax',
    title: 'Tax Card',
    arabicTitle: 'البطاقة الضريبية',
    authority: 'General Tax Authority (GTA)',
    docNumber: 'GTA Registered',
    description: 'Official General Tax Authority registration confirming corporate tax compliance and standing in the State of Qatar.',
    url: '/pdf/tax-card.pdf',
    downloadName: 'MBA_Contracting_Tax_Card.pdf',
    icon: FileText,
    color: '#0F172A'
  }
];

const companyProfile = {
  id: 'profile',
  title: 'MBA Contracting & NCFM Company Profile 2027',
  arabicTitle: 'الملف التعريفي للشركة',
  edition: '2027 Official Edition',
  format: 'High-Resolution PDF',
  description: 'Download our comprehensive company profile highlighting our full contracting portfolio, villa construction, commercial building, general finishing, and facility maintenance capabilities in Qatar.',
  highlights: [
    'Complete Scope of Construction & Finishing Services',
    'Major Projects Portfolio & Client Case Studies',
    'Health, Safety & Quality (QHSE) Standards',
    'Technical Equipment, Fleet & Skilled Workforce'
  ],
  url: '/pdf/company-profile.pdf',
  downloadName: 'MBA_Contracting_Company_Profile_2027.pdf'
};

const CorporateDocuments = () => {
  const [activeModalDoc, setActiveModalDoc] = useState(null);

  const handleOpenModal = (doc) => {
    setActiveModalDoc(doc);
    document.body.style.overflow = 'hidden';
  };

  const handleCloseModal = () => {
    setActiveModalDoc(null);
    document.body.style.overflow = 'unset';
  };

  return (
    <section className="section-padding corporate-docs-section" id="credentials">
      <div className="container">
        
        {/* Section Header */}
        <div className="section-header text-center mb-10">
          <span className="section-label">OFFICIAL REGISTRATIONS & CREDENTIALS</span>
          <h2 className="h2 mt-2">Government Registrations & Corporate Profile</h2>
          <p className="text-body max-w-3xl mx-auto mt-3">
            MBA Contracting is fully licensed, registered, and compliant with all regulatory authorities in the State of Qatar. Review our verified official credentials below.
          </p>
        </div>

        {/* 4 Legal Registration Documents Grid */}
        <div className="docs-grid mb-12">
          {documents.map((doc) => {
            const IconComponent = doc.icon;
            return (
              <div key={doc.id} className="doc-card">
                <div className="doc-card-top">
                  <div className="doc-icon-wrapper" style={{ backgroundColor: `${doc.color}15`, color: doc.color }}>
                    <IconComponent size={24} />
                  </div>
                  <span className="doc-badge">{doc.docNumber}</span>
                </div>

                <div className="doc-card-body">
                  <h3 className="doc-title">{doc.title}</h3>
                  <span className="doc-arabic-title" dir="rtl">{doc.arabicTitle}</span>
                  <div className="doc-authority">
                    <strong>Authority:</strong> {doc.authority}
                  </div>
                  <p className="doc-desc">{doc.description}</p>
                </div>

                <div className="doc-card-actions">
                  <button 
                    type="button"
                    onClick={() => handleOpenModal(doc)}
                    className="doc-action-btn btn-view"
                    title={`View ${doc.title}`}
                  >
                    <Eye size={16} />
                    <span>View</span>
                  </button>
                  <a 
                    href={doc.url} 
                    download={doc.downloadName}
                    className="doc-action-btn btn-download"
                    title={`Download ${doc.title}`}
                  >
                    <Download size={16} />
                    <span>Download</span>
                  </a>
                </div>
              </div>
            );
          })}
        </div>

        {/* 5th Feature: Company Profile Showcase Banner */}
        <div className="company-profile-banner">
          <div className="profile-banner-content">
            <div className="profile-banner-badge">
              <Building2 size={16} />
              <span>{companyProfile.edition}</span>
            </div>
            
            <h3 className="profile-banner-title">{companyProfile.title}</h3>
            <p className="profile-banner-arabic" dir="rtl">{companyProfile.arabicTitle}</p>
            <p className="profile-banner-desc">{companyProfile.description}</p>

            <div className="profile-highlights-grid">
              {companyProfile.highlights.map((item, index) => (
                <div key={index} className="profile-highlight-item">
                  <CheckCircle2 size={16} className="text-primary-light flex-shrink-0" />
                  <span>{item}</span>
                </div>
              ))}
            </div>

            <div className="profile-banner-actions">
              <a 
                href={companyProfile.url} 
                download={companyProfile.downloadName}
                className="btn btn-primary profile-btn-primary"
              >
                <Download size={18} />
                <span>Download Company Profile (PDF)</span>
              </a>
              <button 
                type="button"
                onClick={() => handleOpenModal({ ...companyProfile, docNumber: 'Full Brochure' })}
                className="btn btn-outline hero-btn-outline profile-btn-outline"
              >
                <Eye size={18} />
                <span>Preview Profile Online</span>
              </button>
            </div>
          </div>

          <div className="profile-banner-visual">
            <div className="profile-card-preview">
              <div className="preview-header">
                <FileText size={32} className="text-primary" />
                <span className="file-badge">PDF • 16.2 MB</span>
              </div>
              <div className="preview-body">
                <div className="preview-logo-placeholder">
                  <img src="/logo.png" alt="MBA Contracting" className="preview-logo" />
                </div>
                <h4>Corporate Profile</h4>
                <p>Contracting & Maintenance</p>
                <div className="preview-bars">
                  <div className="preview-bar w-full"></div>
                  <div className="preview-bar w-3/4"></div>
                  <div className="preview-bar w-1/2"></div>
                </div>
              </div>
              <div className="preview-footer">
                <span className="verified-tag">
                  <ShieldCheck size={14} /> Verified Qatar Contractor
                </span>
              </div>
            </div>
          </div>
        </div>

      </div>

      {/* Interactive PDF Modal Preview */}
      {activeModalDoc && (
        <div className="doc-modal-overlay" onClick={handleCloseModal}>
          <div className="doc-modal-container" onClick={(e) => e.stopPropagation()}>
            <div className="doc-modal-header">
              <div className="doc-modal-title-wrapper">
                <FileText size={22} className="text-primary" />
                <div>
                  <h3 className="doc-modal-title">{activeModalDoc.title}</h3>
                  <span className="doc-modal-subtitle">{activeModalDoc.authority || activeModalDoc.edition}</span>
                </div>
              </div>
              <div className="doc-modal-header-actions">
                <a 
                  href={activeModalDoc.url} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="modal-icon-btn"
                  title="Open in new window"
                >
                  <ExternalLink size={18} />
                </a>
                <a 
                  href={activeModalDoc.url} 
                  download={activeModalDoc.downloadName}
                  className="modal-icon-btn"
                  title="Download PDF"
                >
                  <Download size={18} />
                </a>
                <button 
                  type="button" 
                  onClick={handleCloseModal}
                  className="modal-icon-btn close-btn"
                  title="Close modal"
                >
                  <X size={20} />
                </button>
              </div>
            </div>

            <div className="doc-modal-body">
              <iframe 
                src={`${activeModalDoc.url}#view=FitH`} 
                title={activeModalDoc.title}
                className="doc-modal-iframe"
              />
            </div>

            <div className="doc-modal-footer">
              <p className="modal-footer-note">
                Having trouble viewing? You can also <a href={activeModalDoc.url} target="_blank" rel="noopener noreferrer" className="underline font-medium text-primary">open in a new tab</a> or <a href={activeModalDoc.url} download={activeModalDoc.downloadName} className="underline font-medium text-primary">download directly</a>.
              </p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default CorporateDocuments;
