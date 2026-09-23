import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import './Navbar.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <header className="navbar">
      <div className="container navbar-container">
        <Link to="/" className="navbar-logo flex items-center">
          <img src="/logo.png" alt="NCFM Logo" style={{ height: '70px', width: 'auto', maxWidth: '300px', objectFit: 'contain' }} />
        </Link>

        {/* Desktop Menu */}
        <nav className="navbar-menu desktop-menu">
          <NavLink to="/" className="nav-link" end>Home</NavLink>
          <NavLink to="/about" className="nav-link">About</NavLink>
          <NavLink to="/services/soft-fm" className="nav-link">Soft FM</NavLink>
          <NavLink to="/services/hard-fm" className="nav-link">Hard FM</NavLink>
          <NavLink to="/industries" className="nav-link">Industries</NavLink>
          <NavLink to="/projects" className="nav-link">Projects</NavLink>
          <NavLink to="/contact" className="nav-link">Contact</NavLink>
          <Link to="/contact" className="btn btn-primary !px-4 !py-2 !text-[0.85rem]">Request a Quote</Link>
        </nav>

        {/* Mobile Toggle */}
        <button className="mobile-toggle" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="mobile-menu">
          <NavLink to="/" className="mobile-link" end onClick={() => setIsOpen(false)}>Home</NavLink>
          <NavLink to="/about" className="mobile-link" onClick={() => setIsOpen(false)}>About</NavLink>
          <NavLink to="/services/soft-fm" className="mobile-link" onClick={() => setIsOpen(false)}>Soft FM</NavLink>
          <NavLink to="/services/hard-fm" className="mobile-link" onClick={() => setIsOpen(false)}>Hard FM</NavLink>
          <NavLink to="/industries" className="mobile-link" onClick={() => setIsOpen(false)}>Industries</NavLink>
          <NavLink to="/projects" className="mobile-link" onClick={() => setIsOpen(false)}>Projects</NavLink>
          <NavLink to="/contact" className="mobile-link" onClick={() => setIsOpen(false)}>Contact</NavLink>
          <Link to="/contact" className="mobile-link highlight-link" onClick={() => setIsOpen(false)}>Request a Quote</Link>
        </div>
      )}
    </header>
  );
};

export default Navbar;
