import React, { useState } from 'react';
import { X, ChevronLeft, ChevronRight, Maximize2 } from 'lucide-react';
import './FeaturedWorks.css';

const allImages = import.meta.glob('../assets/**/*.{png,jpg,jpeg}', { eager: true });

const getImages = (keyword) => {
  return Object.keys(allImages)
    .filter(path => path.includes(keyword))
    .map(path => allImages[path].default);
};

const worksData = [
  {
    title: "Painting Works",
    desc: "Professional interior and exterior painting services, delivering smooth, durable, and high-quality finishes for residential, commercial, and industrial properties.",
    images: getImages('/painting/')
  },
  {
    title: "Parking Shade & Fabric Rectification Works",
    desc: "Professional installation, repair, and rectification of parking shade structures and tensile fabric, ensuring durability, proper tensioning, and a high-quality finish.",
    images: getImages('/parking/')
  },
  {
    title: "Perforated Aluminium Cladding Panel Works",
    desc: "Professional supply, installation, and rectification of perforated aluminium cladding panels, delivering durable, modern, and high-quality architectural finishes.",
    images: getImages('Perforated Aluminium Cladding')
  },
  {
    title: "Door Repair & Lock Cylinder Replacement Works",
    desc: "Professional door repair, adjustment, maintenance, and lock cylinder replacement services to ensure smooth operation, security, and long-lasting performance.",
    images: getImages('/Door/')
  },
  {
    title: "Custom Perforated Aluminium Waste Bin Fabrication",
    desc: "Custom design, fabrication, and installation of durable perforated aluminium waste bins, delivering functional, long-lasting, and high-quality finishes.",
    images: getImages('/custom aluminium')
  },
  {
    title: "MEP Works",
    desc: "Professional MEP installation, maintenance & technical solutions.",
    images: getImages('/mep work/')
  },
  {
    title: "PU Flooring Works",
    desc: "Professional polyurethane (PU) flooring solutions providing a seamless, durable, hygienic, and easy-to-maintain finish for commercial, educational, and industrial facilities.",
    images: getImages('/pu flooring')
  },
  {
    title: "uPVC Windows & Glass Installation Works",
    desc: "Professional supply and installation of uPVC windows and glass systems, providing durable, secure, and high-quality finishes.",
    images: getImages('/u pvc window/')
  },
  {
    title: "Tiles, Marble & Terrazzo Works",
    desc: "Professional installation and finishing of tiles, marble, and terrazzo surfaces, delivering durable, precise, and high-quality finishes.",
    images: getImages('/Tiles, Marble')
  },
  {
    title: "Structural Steel Staircase Works",
    desc: "Professional fabrication and installation of durable structural steel staircases, platforms, handrails, and access systems.",
    images: getImages('/Structural Steel')
  },
  {
    title: "Ceiling Works",
    desc: "Professional suspended ceiling installation and finishing solutions for commercial and residential projects.",
    images: getImages('/Ceiling Works/')
  }
];

const FeaturedWorks = () => {
  const [lightboxData, setLightboxData] = useState(null);

  const openLightbox = (work, startIndex = 0) => {
    if (work.images.length > 0) {
      setLightboxData({ work, currentIndex: startIndex });
      document.body.style.overflow = 'hidden';
    }
  };

  const closeLightbox = () => {
    setLightboxData(null);
    document.body.style.overflow = 'auto';
  };

  const nextImage = (e) => {
    e.stopPropagation();
    if (lightboxData) {
      setLightboxData({
        ...lightboxData,
        currentIndex: (lightboxData.currentIndex + 1) % lightboxData.work.images.length
      });
    }
  };

  const prevImage = (e) => {
    e.stopPropagation();
    if (lightboxData) {
      setLightboxData({
        ...lightboxData,
        currentIndex: (lightboxData.currentIndex - 1 + lightboxData.work.images.length) % lightboxData.work.images.length
      });
    }
  };

  return (
    <>
      <section className="section-padding bg-light featured-works-section">
        <div className="container">
          <div className="section-header text-center mb-5">
            <h2 className="h2">Our Featured Services & Projects</h2>
            <p className="text-body max-w-2xl mx-auto mt-2">
              A showcase of our professional technical services and the high-quality finishes we deliver. Click on any image to view more photos.
            </p>
          </div>
          <div className="featured-works-grid">
            {worksData.map((work, index) => {
              // Get the best image (first one)
              const coverImg = work.images[0] || '';
              return (
                <div className="work-card" key={index}>
                  <div className="work-img-wrapper" onClick={() => openLightbox(work)}>
                    {coverImg && <img src={coverImg} alt={work.title} className="work-img" />}
                    <div className="work-img-overlay">
                      <Maximize2 size={32} className="text-white mb-2" />
                      <span className="text-white font-medium">View {work.images.length} Photos</span>
                    </div>
                  </div>
                  <div className="work-content">
                    <h3 className="h3">{work.title}</h3>
                    <p className="text-body">{work.desc}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Lightbox Modal */}
      {lightboxData && (
        <div className="lightbox-overlay" onClick={closeLightbox}>
          <button className="lightbox-close" onClick={closeLightbox}>
            <X size={32} />
          </button>
          
          <div className="lightbox-content" onClick={(e) => e.stopPropagation()}>
            <img 
              src={lightboxData.work.images[lightboxData.currentIndex]} 
              alt={`${lightboxData.work.title} ${lightboxData.currentIndex + 1}`} 
              className="lightbox-main-img" 
            />
            
            <div className="lightbox-caption">
              <h3 className="text-white font-bold text-lg">{lightboxData.work.title}</h3>
              <p className="text-gray-300 text-sm">Image {lightboxData.currentIndex + 1} of {lightboxData.work.images.length}</p>
            </div>

            {lightboxData.work.images.length > 1 && (
              <>
                <button className="lightbox-nav lightbox-prev" onClick={prevImage}>
                  <ChevronLeft size={36} />
                </button>
                <button className="lightbox-nav lightbox-next" onClick={nextImage}>
                  <ChevronRight size={36} />
                </button>
              </>
            )}
          </div>
        </div>
      )}
    </>
  );
};

export default FeaturedWorks;
