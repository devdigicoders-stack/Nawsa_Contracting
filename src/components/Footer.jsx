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
            <img src="/logo.png" alt="MBA Contracting Logo" style={{ height: '55px', width: 'auto', maxWidth: '250px', objectFit: 'contain' }} />
          </Link>
          <p className="footer-desc">
            MBA Contracting is a building construction, maintenance and renovation company in Qatar, providing reliable construction and finishing solutions for villas, buildings, and commercial properties.
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
            <li><Link to="/contact">Building Maintenance</Link></li>
            <li><Link to="/contact">Villa Construction</Link></li>
            <li><Link to="/contact">Building Construction</Link></li>
            <li><Link to="/contact">General Finishing Works</Link></li>
          </ul>
        </div>

        <div className="footer-links-col">
          <h4>Industries</h4>
          <ul>
            <li><Link to="/industries">Commercial</Link></li>
            <li><Link to="/industries">Residential</Link></li>
            <li><Link to="/industries">Industrial</Link></li>
            <li><Link to="/industries">Hospitality</Link></li>
          </ul>
        </div>

        <div className="footer-contact">
          <h4>Contact</h4>
          <ul>
            <li><Phone size={16} /> <span>+974 31310436</span></li>
            <li><Mail size={16} /> <span>info@ncfmqa.com</span></li>
            <li><MapPin size={16} /> <span>Doha, Qatar</span></li>
            <li><Clock size={16} /> <span>Mon - Sat: 8:00 AM - 6:00 PM</span></li>
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
          <p>&copy; {new Date().getFullYear()} MBA Contracting. All rights reserved.</p>
          <p className="developed-by">
            Designed and Developed by <a href="https://www.worknestconnect.com/" target="_blank" rel="noreferrer">Worknest Connect</a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
