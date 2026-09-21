import React from 'react';
import { Phone, Mail, Clock } from 'lucide-react';
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
      </div>
    </div>
  );
};

export default TopBar;
