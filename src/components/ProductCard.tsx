import React from 'react';
import { Link } from 'react-router-dom';
import { formatRupiah } from '../data';

interface ProductProps {
  product: {
    id: number;
    name: string;
    price: number;
    sold: number;
    image: string;
    discount: number;
    location: string;
  };
}

export default function ProductCard({ product }: ProductProps) {
  return (
    <Link 
      to={`/product/${product.id}`}
      className="bg-white rounded-sm shadow-sm hover:shadow-md hover:-translate-y-[1px] transition-all duration-200 flex flex-col group border border-transparent hover:border-[#ee4d2d]/30"
    >
      {/* Product Image */}
      <div className="relative aspect-square overflow-hidden bg-gray-100">
        <img 
          src={product.image} 
          alt={product.name} 
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
          referrerPolicy="no-referrer"
        />
        {product.discount > 0 && (
          <div className="absolute top-0 right-0 bg-[#fceea7] text-[#ee4d2d] text-[10px] font-bold px-1 py-1 flex flex-col items-center leading-none">
            <span>{product.discount}%</span>
            <span className="text-white bg-[#ee4d2d] px-1 mt-0.5 uppercase text-[8px]">Off</span>
          </div>
        )}
      </div>

      {/* Product Info */}
      <div className="p-2 flex flex-col flex-1">
        <h3 className="text-xs text-gray-800 line-clamp-2 leading-tight min-h-[32px] mb-1">
          {product.name}
        </h3>
        
        <div className="mt-auto">
          <div className="flex items-center gap-1 mb-1">
            <span className="text-[10px] text-white bg-[#ee4d2d] px-1 rounded-sm">Mall</span>
            {product.discount > 0 && (
              <span className="text-[10px] text-[#ee4d2d] border border-[#ee4d2d] px-1 rounded-sm">
                Cashback
              </span>
            )}
          </div>
          
          <div className="flex items-center justify-between mt-2">
            <span className="text-[#ee4d2d] font-medium text-sm md:text-base">
              {formatRupiah(product.price)}
            </span>
            <span className="text-[10px] text-gray-500">
              {product.sold >= 1000 ? `${(product.sold / 1000).toFixed(1)}RB` : product.sold} Terjual
            </span>
          </div>
          
          <div className="text-[10px] text-gray-400 mt-1">
            {product.location}
          </div>
        </div>
      </div>
    </Link>
  );
}
