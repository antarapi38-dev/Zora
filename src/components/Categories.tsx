import React from 'react';
import { categories } from '../data';

export default function Categories() {
  return (
    <section className="bg-white rounded-sm shadow-sm mt-6">
      <div className="px-4 py-4 border-b border-gray-100">
        <h2 className="text-gray-500 font-medium text-sm uppercase">Categories</h2>
      </div>
      <div className="grid grid-cols-5 md:grid-cols-10">
        {categories.map((category) => {
          const Icon = category.icon;
          return (
            <a 
              key={category.id} 
              href="#" 
              className="flex flex-col items-center justify-center gap-2 p-4 border-r border-b border-gray-100 hover:shadow-md hover:z-10 transition-shadow bg-white"
            >
              <div className="w-12 h-12 rounded-full bg-gray-50 flex items-center justify-center text-gray-700">
                <Icon size={24} strokeWidth={1.5} />
              </div>
              <span className="text-[13px] text-gray-700 text-center leading-tight">
                {category.name}
              </span>
            </a>
          );
        })}
      </div>
    </section>
  );
}
