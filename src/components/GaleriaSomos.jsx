import React, { useState } from 'react';
import img1 from '../assets/somos5.jpeg';
import img2 from '../assets/somos2.jpeg';
import img3 from '../assets/somos3.jpeg';
import img4 from '../assets/somos4.jpeg';

const GaleriaSomos = () => {
  const [selectedImg, setSelectedImg] = useState(null);

  const images = [
    { id: 1, src: img1, alt: 'Descripción 1', className: '' },
    { id: 2, src: img2, alt: 'Descripción 2', className: '' },
    { id: 3, src: img3, alt: 'Descripción 3', className: '' },
    { id: 4, src: img4, alt: 'Descripción 4', className: '' },
  ];

  return (
    <div className="p-4">
      {/* Grid Principal */}
      <div className='w-full grid grid-cols-1 md:grid-cols-2 gap-4 auto-rows-[250px]'>
        {images.map((img) => (
          <div 
            key={img.id}
            onClick={() => setSelectedImg(img.src)}
            className={`cursor-pointer overflow-hidden group relative ${img.className}`}
          >
            <img
              src={img.src}
              alt={img.alt}
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
            />
            {/* Overlay sutil al hacer hover */}
            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300 flex items-center justify-center">
            
            </div>
          </div>
        ))}
      </div>

      {/* Modal (Lightbox) */}
      {selectedImg && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4 animate-in fade-in duration-300"
          onClick={() => setSelectedImg(null)}
        >
          <button 
            className="absolute top-5 right-5 text-white text-4xl"
            onClick={() => setSelectedImg(null)}
          >
            &times;
          </button>
          
          <img 
            src={selectedImg} 
            className="max-w-full max-h-full rounded-lg shadow-2xl animate-in zoom-in duration-300" 
            alt="Full size" 
          />
        </div>
      )}
    </div>
  );
};

export default GaleriaSomos;