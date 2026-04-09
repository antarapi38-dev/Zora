import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { formatRupiah } from '../data';
import { CheckCircle2, Package, Truck, Home } from 'lucide-react';

export default function OrderPage() {
  const location = useLocation();
  const navigate = useNavigate();
  const { product, qty, total, shipping } = location.state || {};

  if (!product) {
    return <div className="container mx-auto px-4 py-12 text-center">No order found</div>;
  }

  return (
    <div className="container mx-auto px-4 py-12 max-w-3xl">
      <div className="bg-white p-8 rounded-sm shadow-sm text-center">
        <div className="flex justify-center mb-6">
          <CheckCircle2 size={64} className="text-green-500" />
        </div>
        <h1 className="text-2xl font-medium text-gray-800 mb-2">Pesanan Berhasil Dibuat!</h1>
        <p className="text-gray-500 mb-8">Terima kasih telah berbelanja di Zora. Pesanan Anda sedang diproses.</p>

        <div className="border border-gray-200 rounded-sm p-6 text-left mb-8">
          <h2 className="font-medium text-lg mb-4 border-b border-gray-200 pb-2">Detail Pesanan</h2>
          
          <div className="flex items-start gap-4 mb-6">
            <img src={product.image} alt={product.name} className="w-16 h-16 object-cover border border-gray-200 rounded-sm" />
            <div>
              <div className="font-medium text-gray-800 line-clamp-2 mb-1">{product.name}</div>
              <div className="text-sm text-gray-500">{qty} x {formatRupiah(product.price)}</div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-sm">
            <div>
              <div className="text-gray-500 mb-1 flex items-center gap-2">
                <Truck size={16} /> Jasa Pengiriman
              </div>
              <div className="font-medium">{shipping}</div>
            </div>
            <div>
              <div className="text-gray-500 mb-1 flex items-center gap-2">
                <Package size={16} /> Total Pembayaran
              </div>
              <div className="font-medium text-[#ee4d2d] text-lg">{formatRupiah(total)}</div>
            </div>
          </div>
        </div>

        <div className="flex justify-center">
          <button 
            onClick={() => navigate('/')}
            className="flex items-center gap-2 bg-white border border-gray-300 text-gray-700 px-6 py-2.5 rounded-sm hover:bg-gray-50 transition-colors"
          >
            <Home size={18} />
            Kembali ke Beranda
          </button>
        </div>
      </div>
    </div>
  );
}
