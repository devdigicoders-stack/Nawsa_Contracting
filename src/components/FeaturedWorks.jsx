import React from 'react';
import './FeaturedWorks.css';

// Import exact real images provided by the user
import imgPainting from '../assets/painting/WhatsApp Image 2026-10-06 at 14.00.16.jpeg';
import imgParking from '../assets/parking/WhatsApp Image 2026-10-06 at 14.09.48.jpeg';
import imgCladding from '../assets/Perforated Aluminium Cladding Panel Works1.jpeg';
import imgDoor from '../assets/Door/WhatsApp Image 2026-10-06 at 14.09.53.jpeg';
import imgBin from '../assets/custom aluminium weast dust bean/WhatsApp Image 2026-10-06 at 14.09.56.jpeg';
import imgMep from '../assets/mep work/WhatsApp Image 2026-10-06 at 14.09.59 (1).jpeg';
import imgPuFlooring from '../assets/pu flooring works/WhatsApp Image 2026-10-06 at 14.10.02.jpeg';
import imgUpvc from '../assets/u pvc window/WhatsApp Image 2026-10-06 at 14.10.11.jpeg';
import imgTiles from '../assets/Tiles, Marble & Terrazzo Works/WhatsApp Image 2026-10-06 at 14.10.29 (1).jpeg';
import imgStairs from '../assets/Structural Steel Staircase Works/WhatsApp Image 2026-10-06 at 14.13.05.jpeg';
import imgCeiling from '../assets/Ceiling Works/WhatsApp Image 2026-10-06 at 14.13.08 (1).jpeg';

const worksData = [
  {
    title: "Painting Works",
    desc: "Professional interior and exterior painting services, delivering smooth, durable, and high-quality finishes for residential, commercial, and industrial properties.",
    img: imgPainting
  },
  {
    title: "Parking Shade & Fabric Rectification Works",
    desc: "Professional installation, repair, and rectification of parking shade structures and tensile fabric, ensuring durability, proper tensioning, and a high-quality finish.",
    img: imgParking
  },
  {
    title: "Perforated Aluminium Cladding Panel Works",
    desc: "Professional supply, installation, and rectification of perforated aluminium cladding panels, delivering durable, modern, and high-quality architectural finishes.",
    img: imgCladding
  },
  {
    title: "Door Repair & Lock Cylinder Replacement Works",
    desc: "Professional door repair, adjustment, maintenance, and lock cylinder replacement services to ensure smooth operation, security, and long-lasting performance.",
    img: imgDoor
  },
  {
    title: "Custom Perforated Aluminium Waste Bin Fabrication",
    desc: "Custom design, fabrication, and installation of durable perforated aluminium waste bins, delivering functional, long-lasting, and high-quality finishes.",
    img: imgBin
  },
  {
    title: "MEP Works",
    desc: "Professional MEP installation, maintenance & technical solutions.",
    img: imgMep
  },
  {
    title: "PU Flooring Works",
    desc: "Professional polyurethane (PU) flooring solutions providing a seamless, durable, hygienic, and easy-to-maintain finish for commercial, educational, and industrial facilities.",
    img: imgPuFlooring
  },
  {
    title: "uPVC Windows & Glass Installation Works",
    desc: "Professional supply and installation of uPVC windows and glass systems, providing durable, secure, and high-quality finishes.",
    img: imgUpvc
  },
  {
    title: "Tiles, Marble & Terrazzo Works",
    desc: "Professional installation and finishing of tiles, marble, and terrazzo surfaces, delivering durable, precise, and high-quality finishes.",
    img: imgTiles
  },
  {
    title: "Structural Steel Staircase Works",
    desc: "Professional fabrication and installation of durable structural steel staircases, platforms, handrails, and access systems.",
    img: imgStairs
  },
  {
    title: "Ceiling Works",
    desc: "Professional suspended ceiling installation and finishing solutions for commercial and residential projects.",
    img: imgCeiling
  }
];

const FeaturedWorks = () => {
  return (
    <section className="section-padding bg-light featured-works-section">
      <div className="container">
        <div className="section-header text-center mb-5">
          <h2 className="h2">Our Featured Services & Projects</h2>
          <p className="text-body max-w-2xl mx-auto mt-2">
            A showcase of our professional technical services and the high-quality finishes we deliver.
          </p>
        </div>
        <div className="featured-works-grid">
          {worksData.map((work, index) => (
            <div className="work-card" key={index}>
              <div className="work-img-wrapper">
                <img src={work.img} alt={work.title} className="work-img" />
              </div>
              <div className="work-content">
                <h3 className="h3">{work.title}</h3>
                <p className="text-body">{work.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedWorks;
