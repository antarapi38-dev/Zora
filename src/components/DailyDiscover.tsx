import React from 'react';
import ProductCard from './ProductCard';
import { products } from '../data';

export default function DailyDiscover() {
  return (
    <section className="mt-6">
      <div className="bg-white px-4 py-4 border-b-4 border-[#ee4d2d] sticky top-[116px] md:top-[120px] z-40 shadow-sm">
        <h2 className="text-[#ee4d2d] font-medium text-base uppercase text-center tracking-wider">
          Daily Discover
        </h2>
      </div>
      
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-2 mt-2">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
      
      <div className="flex justify-center mt-6">
        <button className="bg-white text-gray-600 border border-gray-300 hover:bg-gray-50 px-16 py-2 rounded-sm text-sm transition-colors shadow-sm">
          See More
        </button>
      </div>
    </section>
  );
}
