import React, { useState, useEffect } from 'react';
import { Phone, MessageCircle, ArrowUp } from 'lucide-react';
import './FloatingButtons.css';

const FloatingButtons = () => {
  const [isVisible, setIsVisible] = useState(false);

  // Show scroll-to-top button when scrolling down
  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <div className="floating-buttons-container">
      {/* Scroll to Top Button */}
      <button 
        className={`floating-btn btn-top ${isVisible ? 'visible' : ''}`}
        onClick={scrollToTop}
        title="Scroll to Top"
      >
        <ArrowUp size={24} />
      </button>

      {/* WhatsApp/Message Button */}
      <a 
        href="https://wa.me/97431310436" 
        target="_blank"
        rel="noopener noreferrer"
        className="floating-btn btn-msg"
        title="WhatsApp Us"
      >
        <MessageCircle size={24} />
      </a>

      {/* Call Button */}
      <a 
        href="tel:+97431310436" 
        className="floating-btn btn-call"
        title="Call Us"
      >
        <Phone size={24} />
      </a>

    </div>
  );
};

export default FloatingButtons;
