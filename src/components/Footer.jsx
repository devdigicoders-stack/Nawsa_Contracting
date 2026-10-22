import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, Clock } from 'lucide-react';
import { FaFacebook, FaInstagram, FaLinkedin, FaTiktok } from 'react-icons/fa';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container footer-container">
        <div className="footer-brand">
          <Link to="/" className="footer-logo mb-4 inline-block">
            <img src="/logo.png" alt="NAWSA NCFM Logo" style={{ height: '55px', width: 'auto', maxWidth: '250px', objectFit: 'contain' }} />
          </Link>
          <p className="footer-desc">
            NAWSA Contracting & Facilities Management delivers practical construction, renovation, building maintenance and integrated facilities management solutions across Doha, Qatar.
          </p>
        </div>

        <div className="footer-links-col">
          <h4>Company</h4>
          <ul>
            <li><Link to="/about">About Us</Link></li>
            <li><Link to="/about#credentials">Credentials & Profile</Link></li>
            <li><Link to="/projects">Projects</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>
        </div>

        <div className="footer-links-col">
          <h4>Official Documents</h4>
          <ul>
            <li><a href="/pdf/company-profile.pdf" target="_blank" rel="noopener noreferrer">Company Profile 2027</a></li>
            <li><a href="/pdf/commercial-registration.pdf" target="_blank" rel="noopener noreferrer">Commercial Registration</a></li>
            <li><a href="/pdf/commercial-license.pdf" target="_blank" rel="noopener noreferrer">Commercial License</a></li>
            <li><a href="/pdf/establishment-card.pdf" target="_blank" rel="noopener noreferrer">Establishment Card</a></li>
            <li><a href="/pdf/tax-card.pdf" target="_blank" rel="noopener noreferrer">Tax Card</a></li>
          </ul>
        </div>

        <div className="footer-links-col">
          <h4>Services</h4>
          <ul>
            <li><Link to="/services/construction">Building Construction</Link></li>
            <li><Link to="/services/facilities-management">Facilities Management</Link></li>
            <li><Link to="/services/school-maintenance">School Services</Link></li>
            <li><Link to="/services/building-maintenance">Building Maintenance</Link></li>
            <li><Link to="/services/finishing-works">Renovation & Finishing</Link></li>
            <li><Link to="/services/cleaning">Commercial Cleaning</Link></li>
            <li><Link to="/services/landscaping">Landscaping Services</Link></li>
          </ul>
        </div>

        <div className="footer-links-col">
          <h4>Industries</h4>
          <ul>
            <li><Link to="/industries">Educational</Link></li>
            <li><Link to="/industries">Commercial</Link></li>
            <li><Link to="/industries">Residential</Link></li>
            <li><Link to="/industries">Industrial</Link></li>
            <li><Link to="/industries">Hospitality</Link></li>
          </ul>
        </div>

        <div className="footer-contact">
          <h4>Contact NAWSA</h4>
          <ul>
            <li>
              <Phone size={16} /> 
              <span>
                <a href="tel:+97431483658" className="hover:text-white">+974 31483658</a> / <a href="tel:+97431310436" className="hover:text-white">+974 31310436</a>
              </span>
            </li>
            <li><Mail size={16} /> <span><a href="mailto:info@ncfmqa.com" className="hover:text-white">info@ncfmqa.com</a></span></li>
            <li><MapPin size={16} /> <span>Doha, Qatar</span></li>
            <li><Clock size={16} /> <span>Sunday to Thursday: 09:30 AM - 05:30 PM</span></li>
          </ul>
          <div className="flex gap-4 mt-6">
            <a href="https://www.facebook.com/profile.php?id=61588099337472" target="_blank" rel="noreferrer" className="transition-opacity hover:opacity-80" style={{ color: '#1877F2' }}><FaFacebook size={20} /></a>
            <a href="https://www.instagram.com/nawsafm?utm_source=qr&stkn=MWFkZ3hyaGNvMnpzcQ==" target="_blank" rel="noreferrer" className="transition-opacity hover:opacity-80" style={{ color: '#E4405F' }}><FaInstagram size={20} /></a>
            <a href="https://www.linkedin.com/in/nawsa-contracting-facilities-management-undefined-5b2b7a436" target="_blank" rel="noreferrer" className="transition-opacity hover:opacity-80" style={{ color: '#0A66C2' }}><FaLinkedin size={20} /></a>
            <a href="https://www.tiktok.com/@nawsafm?_r=1&_t=ZS-99uavOdbwu7" target="_blank" rel="noreferrer" className="transition-opacity hover:opacity-80" style={{ color: '#FFFFFF' }}><FaTiktok size={20} /></a>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <div className="container footer-bottom-container">
          <p>&copy; {new Date().getFullYear()} NAWSA Contracting Facilities Management W.L.L. (NCFM). All rights reserved.</p>
          <p className="developed-by">
            Designed and Developed by <a href="https://www.worknestconnect.com/" target="_blank" rel="noreferrer">Worknest Connect</a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
