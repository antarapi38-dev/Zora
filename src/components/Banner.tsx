import React from 'react';

export default function Banner() {
  return (
    <div className="flex flex-col md:flex-row gap-2 mt-6">
      {/* Main Carousel Placeholder */}
      <div className="flex-2 md:w-2/3 bg-gray-200 aspect-[21/9] md:aspect-[2/1] relative rounded-sm overflow-hidden group cursor-pointer">
        <img 
          src="/OIG4.jpeg.jpg" 
          alt="Electronics Promo" 
          className="w-full h-full object-cover"
        />
        <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-1.5">
          <div className="w-2 h-2 rounded-full bg-[#ee4d2d]"></div>
          <div className="w-2 h-2 rounded-full bg-white/70"></div>
          <div className="w-2 h-2 rounded-full bg-white/70"></div>
          <div className="w-2 h-2 rounded-full bg-white/70"></div>
        </div>
      </div>
      
      {/* Side Banners */}
      <div className="flex-1 md:w-1/3 flex flex-row md:flex-col gap-2">
        <div className="flex-1 bg-gray-200 rounded-sm overflow-hidden cursor-pointer">
          <img 
            src="/OIG4 (1).jpeg" 
            alt="Dress Promo" 
            className="w-full h-full object-cover hover:opacity-90 transition-opacity"
          />
        </div>
        <div className="flex-1 bg-gray-200 rounded-sm overflow-hidden cursor-pointer">
          <img 
            src="/OIG2.jpeg" 
            alt="Cosmetics Promo" 
            className="w-full h-full object-cover hover:opacity-90 transition-opacity"
          />
        </div>
      </div>
    </div>
  );
}
