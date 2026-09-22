import React from 'react';
import { Phone, Mail, Clock } from 'lucide-react';
import { FaFacebook, FaInstagram, FaLinkedin, FaTiktok } from 'react-icons/fa';
import './TopBar.css';

const TopBar = () => {
  return (
    <div className="topbar">
      <div className="container topbar-container">
        <div className="topbar-left">
          <div className="topbar-item">
            <Phone size={14} />
            <span>+974 31310436</span>
          </div>
          <div className="topbar-item">
            <Mail size={14} />
            <span>info@ncfmqa.com</span>
          </div>
          <div className="topbar-item d-none-mobile">
            <Clock size={14} />
            <span>Mon - Sat: 8:00 AM - 6:00 PM</span>
          </div>
        </div>
        <div className="flex gap-4 d-none-mobile">
          <a href="https://www.facebook.com/profile.php?id=61588099337472" target="_blank" rel="noreferrer" className="transition-opacity hover:opacity-80" style={{ color: '#1877F2' }}><FaFacebook size={16} /></a>
          <a href="https://www.instagram.com/nawsafm?utm_source=qr&stkn=MWFkZ3hyaGNvMnpzcQ==" target="_blank" rel="noreferrer" className="transition-opacity hover:opacity-80" style={{ color: '#E4405F' }}><FaInstagram size={16} /></a>
          <a href="https://www.linkedin.com/in/nawsa-contracting-facilities-management-undefined-5b2b7a436" target="_blank" rel="noreferrer" className="transition-opacity hover:opacity-80" style={{ color: '#0A66C2' }}><FaLinkedin size={16} /></a>
          <a href="https://www.tiktok.com/@nawsafm?_r=1&_t=ZS-99uavOdbwu7" target="_blank" rel="noreferrer" className="transition-opacity hover:opacity-80" style={{ color: '#FFFFFF' }}><FaTiktok size={16} /></a>
        </div>
      </div>
    </div>
  );
};

export default TopBar;
