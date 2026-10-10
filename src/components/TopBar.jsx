import React from 'react';
import { Phone, Mail, Clock } from 'lucide-react';
import { FaFacebook, FaInstagram, FaLinkedin, FaTiktok } from 'react-icons/fa';
import './TopBar.css';

const TopBar = () => {
  return (
    <div className="topbar">
      <div className="container topbar-container">
        <div className="topbar-left">
          <a href="tel:+97431310436" className="topbar-item">
            <Phone size={13} />
            <span>+974 31310436</span>
          </a>
          <a href="mailto:info@ncfmqa.com" className="topbar-item">
            <Mail size={13} />
            <span>info@ncfmqa.com</span>
          </a>
          <div className="topbar-item topbar-clock">
            <Clock size={13} />
            <span>Mon - Sat: 8:00 AM - 6:00 PM</span>
          </div>
        </div>
        <div className="topbar-socials">
          <a href="https://www.facebook.com/profile.php?id=61588099337472" target="_blank" rel="noreferrer" className="social-icon" style={{ color: '#1877F2' }} aria-label="Facebook"><FaFacebook size={15} /></a>
          <a href="https://www.instagram.com/nawsafm?utm_source=qr&stkn=MWFkZ3hyaGNvMnpzcQ==" target="_blank" rel="noreferrer" className="social-icon" style={{ color: '#E4405F' }} aria-label="Instagram"><FaInstagram size={15} /></a>
          <a href="https://www.linkedin.com/in/nawsa-contracting-facilities-management-undefined-5b2b7a436" target="_blank" rel="noreferrer" className="social-icon" style={{ color: '#0A66C2' }} aria-label="LinkedIn"><FaLinkedin size={15} /></a>
          <a href="https://www.tiktok.com/@nawsafm?_r=1&_t=ZS-99uavOdbwu7" target="_blank" rel="noreferrer" className="social-icon" style={{ color: '#FFFFFF' }} aria-label="TikTok"><FaTiktok size={15} /></a>
        </div>
      </div>
    </div>
  );
};

export default TopBar;
