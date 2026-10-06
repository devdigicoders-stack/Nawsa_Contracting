import React from 'react';
import './ClientLogos.css';

// Import images
import logo1 from '../assets/IMG-20261006-WA0042.jpg.jpeg';
import logo2 from '../assets/IMG-20261006-WA0043.jpg.jpeg';
import logo3 from '../assets/IMG-20261006-WA0044.jpg.jpeg';
import logo4 from '../assets/IMG-20261006-WA0045.jpg.jpeg';
import logo5 from '../assets/IMG-20261006-WA0046.jpg.jpeg';
import logo6 from '../assets/IMG-20261006-WA0047.jpg.jpeg';
import logo7 from '../assets/IMG-20261006-WA0048.jpg.jpeg';
import logo8 from '../assets/IMG-20261006-WA0049.jpg.jpeg';
import logo9 from '../assets/IMG-20261006-WA0050.jpg.jpeg';

const ClientLogos = () => {
  const logos = [logo1, logo2, logo3, logo4, logo5, logo6, logo7, logo8, logo9];

  return (
    <section className="section-padding bg-light client-logos-section">
      <div className="container">
        <div className="section-header text-center mb-5">
          <h2 className="h2">Our Valued Clients & Partners</h2>
          <p className="text-body max-w-2xl mx-auto mt-2">
            Trusted by leading organizations across Qatar for our premium facilities management and contracting services.
          </p>
        </div>
        <div className="logos-marquee-container">
          <div className="logos-marquee-track">
            {[...logos, ...logos].map((logo, index) => (
              <div key={index} className="logo-card flex-shrink-0">
                <img src={logo} alt={`Client Logo ${index + 1}`} className="client-logo-img" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ClientLogos;
