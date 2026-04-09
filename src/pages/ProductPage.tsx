import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { products, formatRupiah } from '../data';
import { Star, Minus, Plus, ShoppingCart, ArrowLeft } from 'lucide-react';

export default function ProductPage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const product = products.find(p => p.id === Number(id));
  const [qty, setQty] = useState(1);

  if (!product) {
    return <div className="container mx-auto px-4 py-12 text-center">Product not found</div>;
  }

  const handleOrder = () => {
    navigate('/checkout', { state: { product, qty } });
  };

  return (
    <div className="container mx-auto px-4 py-6">
      <button 
        onClick={() => navigate(-1)}
        className="flex items-center gap-2 text-gray-600 hover:text-[#ee4d2d] transition-colors mb-4"
      >
        <ArrowLeft size={20} />
        <span>Kembali</span>
      </button>
      
      <div className="bg-white p-4 md:p-6 rounded-sm shadow-sm flex flex-col md:flex-row gap-8">
        {/* Product Image */}
        <div className="w-full md:w-2/5">
          <div className="aspect-square bg-gray-100 rounded-sm overflow-hidden">
            <img 
              src={product.image} 
              alt={product.name} 
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
          </div>
        </div>

        {/* Product Details */}
        <div className="w-full md:w-3/5 flex flex-col">
          <h1 className="text-xl md:text-2xl font-medium text-gray-800 mb-2">
            {product.name}
          </h1>
          
          <div className="flex items-center gap-4 text-sm mb-4">
            <div className="flex items-center text-[#ee4d2d]">
              <span className="font-medium mr-1 border-b border-[#ee4d2d]">4.8</span>
              <div className="flex">
                {[1, 2, 3, 4, 5].map(i => (
                  <Star key={i} size={14} fill="currentColor" />
                ))}
              </div>
            </div>
            <div className="w-px h-4 bg-gray-300"></div>
            <div>
              <span className="border-b border-gray-800 mr-1">1.2RB</span>
              <span className="text-gray-500">Penilaian</span>
            </div>
            <div className="w-px h-4 bg-gray-300"></div>
            <div>
              <span className="mr-1">{product.sold}</span>
              <span className="text-gray-500">Terjual</span>
            </div>
          </div>

          <div className="bg-gray-50 p-4 mb-6">
            {product.discount > 0 && (
              <div className="flex items-center gap-2 mb-1">
                <span className="text-gray-400 line-through text-sm">
                  {formatRupiah(product.price / (1 - product.discount / 100))}
                </span>
                <span className="bg-[#fceea7] text-[#ee4d2d] text-[10px] font-bold px-1 py-0.5 uppercase">
                  {product.discount}% Off
                </span>
              </div>
            )}
            <div className="text-3xl font-medium text-[#ee4d2d]">
              {formatRupiah(product.price)}
            </div>
          </div>

          <div className="flex items-center gap-6 mb-6">
            <span className="text-gray-500 w-24">Kuantitas</span>
            <div className="flex items-center border border-gray-300 rounded-sm">
              <button 
                className="w-8 h-8 flex items-center justify-center text-gray-600 hover:bg-gray-100"
                onClick={() => setQty(Math.max(1, qty - 1))}
              >
                <Minus size={16} />
              </button>
              <div className="w-12 h-8 flex items-center justify-center border-x border-gray-300 text-sm">
                {qty}
              </div>
              <button 
                className="w-8 h-8 flex items-center justify-center text-gray-600 hover:bg-gray-100"
                onClick={() => setQty(qty + 1)}
              >
                <Plus size={16} />
              </button>
            </div>
            <span className="text-sm text-gray-500">Tersisa 145 buah</span>
          </div>

          <div className="flex gap-4 mt-auto">
            <button className="flex-1 bg-[#ffeee8] text-[#ee4d2d] border border-[#ee4d2d] py-3 rounded-sm flex items-center justify-center gap-2 hover:bg-[#fff5f1] transition-colors">
              <ShoppingCart size={20} />
              <span>Masukkan Keranjang</span>
            </button>
            <button 
              onClick={handleOrder}
              className="flex-1 bg-[#ee4d2d] text-white py-3 rounded-sm hover:bg-[#d73211] transition-colors"
            >
              Beli Sekarang
            </button>
          </div>
        </div>
      </div>

      {/* Description & Reviews */}
      <div className="mt-4 bg-white p-4 md:p-6 rounded-sm shadow-sm">
        <h2 className="text-lg font-medium text-gray-800 mb-4 bg-gray-50 p-3">Spesifikasi Produk</h2>
        <div className="text-sm text-gray-600 space-y-4 px-3 mb-8">
          <div className="flex">
            <span className="w-32 text-gray-400">Kategori</span>
            <span className="text-blue-600">Zora &gt; {product.name.split(' ')[0]}</span>
          </div>
          <div className="flex">
            <span className="w-32 text-gray-400">Stok</span>
            <span>145</span>
          </div>
          <div className="flex">
            <span className="w-32 text-gray-400">Dikirim Dari</span>
            <span>{product.location}</span>
          </div>
        </div>

        <h2 className="text-lg font-medium text-gray-800 mb-4 bg-gray-50 p-3">Deskripsi Produk</h2>
        <div className="text-sm text-gray-600 px-3 whitespace-pre-line">
          {`Produk berkualitas tinggi dengan desain modern.
          
          Fitur Utama:
          - Material premium yang tahan lama
          - Desain ergonomis dan nyaman digunakan
          - Cocok untuk penggunaan sehari-hari
          
          Catatan:
          Harap membaca deskripsi dengan teliti sebelum membeli. Barang yang sudah dibeli tidak dapat ditukar atau dikembalikan kecuali ada cacat pabrik.`}
        </div>
      </div>
    </div>
  );
}
