import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { Menu, X, ChevronDown } from 'lucide-react';
import './Navbar.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);

  return (
    <header className="navbar">
      <div className="container navbar-container">
        <Link to="/" className="navbar-logo flex items-center">
          <img src="/logo.png" alt="NAWSA NCFM Logo" className="navbar-logo-img" />
        </Link>

        {/* Desktop Menu */}
        <nav className="navbar-menu desktop-menu">
          <NavLink to="/" className="nav-link" end>Home</NavLink>
          <NavLink to="/about" className="nav-link">About</NavLink>
          
          {/* Services Dropdown */}
          <div 
            className="relative group py-2"
            onMouseEnter={() => setServicesOpen(true)}
            onMouseLeave={() => setServicesOpen(false)}
          >
            <button className="nav-link flex items-center gap-1 focus:outline-none">
              Services <ChevronDown size={14} className={`transition-transform duration-200 ${servicesOpen ? 'rotate-180 text-primary' : ''}`} />
            </button>
            {servicesOpen && (
              <div className="absolute top-full -left-4 bg-white shadow-xl rounded-xl py-2 w-72 border border-gray-100 z-50 animate-fade-in">
                <Link to="/services/construction" className="block px-4 py-2 hover:bg-gray-50 text-sm text-gray-800 font-medium">
                  Building Construction
                  <span className="block text-xs text-gray-400 font-normal">Civil works & general contracting</span>
                </Link>
                <Link to="/services/facilities-management" className="block px-4 py-2 hover:bg-gray-50 text-sm text-gray-800 font-medium">
                  Facilities Management
                  <span className="block text-xs text-gray-400 font-normal">Hard & soft FM solutions</span>
                </Link>
                <Link to="/services/school-maintenance" className="block px-4 py-2 hover:bg-gray-50 text-sm text-gray-800 font-medium">
                  School Services
                  <span className="block text-xs text-gray-400 font-normal">Educational facility maintenance</span>
                </Link>
                <Link to="/services/building-maintenance" className="block px-4 py-2 hover:bg-gray-50 text-sm text-gray-800 font-medium">
                  Building Maintenance
                  <span className="block text-xs text-gray-400 font-normal">Electrical, plumbing & civil repairs</span>
                </Link>
                <Link to="/services/finishing-works" className="block px-4 py-2 hover:bg-gray-50 text-sm text-gray-800 font-medium">
                  Renovation & Finishing
                  <span className="block text-xs text-gray-400 font-normal">Painting, tiling & fit-out</span>
                </Link>
                <Link to="/services/cleaning" className="block px-4 py-2 hover:bg-gray-50 text-sm text-gray-800 font-medium">
                  Commercial Cleaning
                  <span className="block text-xs text-gray-400 font-normal">Deep cleaning & housekeeping</span>
                </Link>
                <Link to="/services/landscaping" className="block px-4 py-2 hover:bg-gray-50 text-sm text-gray-800 font-medium">
                  Landscaping Services
                  <span className="block text-xs text-gray-400 font-normal">Garden & irrigation maintenance</span>
                </Link>
              </div>
            )}
          </div>

          <NavLink to="/industries" className="nav-link">Industries</NavLink>
          <NavLink to="/projects" className="nav-link">Projects</NavLink>
          <NavLink to="/contact" className="nav-link">Contact</NavLink>
          <Link to="/contact" className="btn btn-primary !px-4 !py-2 !text-[0.85rem]">Request Consultation</Link>
        </nav>

        {/* Mobile Toggle */}
        <button className="mobile-toggle" onClick={() => setIsOpen(!isOpen)} aria-label="Toggle navigation">
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="mobile-menu">
          <NavLink to="/" className="mobile-link" end onClick={() => setIsOpen(false)}>Home</NavLink>
          <NavLink to="/about" className="mobile-link" onClick={() => setIsOpen(false)}>About</NavLink>
          
          <div>
            <button 
              className="mobile-link w-full text-left flex justify-between items-center"
              onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
            >
              Services <ChevronDown size={16} className={`transition-transform ${mobileServicesOpen ? 'rotate-180' : ''}`} />
            </button>
            {mobileServicesOpen && (
              <div className="pl-4 py-1 space-y-1 bg-gray-50/60 rounded-lg my-1">
                <NavLink to="/services/construction" className="mobile-link text-sm py-1.5" onClick={() => setIsOpen(false)}>Building Construction</NavLink>
                <NavLink to="/services/facilities-management" className="mobile-link text-sm py-1.5" onClick={() => setIsOpen(false)}>Facilities Management</NavLink>
                <NavLink to="/services/school-maintenance" className="mobile-link text-sm py-1.5" onClick={() => setIsOpen(false)}>School Services</NavLink>
                <NavLink to="/services/building-maintenance" className="mobile-link text-sm py-1.5" onClick={() => setIsOpen(false)}>Building Maintenance</NavLink>
                <NavLink to="/services/finishing-works" className="mobile-link text-sm py-1.5" onClick={() => setIsOpen(false)}>Renovation & Finishing</NavLink>
                <NavLink to="/services/cleaning" className="mobile-link text-sm py-1.5" onClick={() => setIsOpen(false)}>Commercial Cleaning</NavLink>
                <NavLink to="/services/landscaping" className="mobile-link text-sm py-1.5" onClick={() => setIsOpen(false)}>Landscaping Services</NavLink>
              </div>
            )}
          </div>

          <NavLink to="/industries" className="mobile-link" onClick={() => setIsOpen(false)}>Industries</NavLink>
          <NavLink to="/projects" className="mobile-link" onClick={() => setIsOpen(false)}>Projects</NavLink>
          <NavLink to="/contact" className="mobile-link" onClick={() => setIsOpen(false)}>Contact</NavLink>
          <Link to="/contact" className="mobile-link highlight-link" onClick={() => setIsOpen(false)}>Request Consultation</Link>
        </div>
      )}
    </header>
  );
};

export default Navbar;
