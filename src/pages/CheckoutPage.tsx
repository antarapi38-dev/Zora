import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { formatRupiah } from '../data';
import { MapPin, Receipt } from 'lucide-react';

export default function CheckoutPage() {
  const location = useLocation();
  const navigate = useNavigate();
  const { product, qty } = location.state || {};
  const [shipping, setShipping] = useState('Translink');

  if (!product) {
    return <div className="container mx-auto px-4 py-12 text-center">No items to checkout</div>;
  }

  const shippingCost = 15000;
  const subtotal = product.price * qty;
  const total = subtotal + shippingCost;

  const handlePlaceOrder = () => {
    navigate('/order', { state: { product, qty, total, shipping } });
  };

  return (
    <div className="container mx-auto px-4 py-6">
      <h1 className="text-2xl font-medium text-gray-800 mb-4">Checkout</h1>
      
      {/* Address */}
      <div className="bg-white p-6 rounded-sm shadow-sm mb-4 border-t-4 border-[#ee4d2d]">
        <div className="flex items-center gap-2 text-[#ee4d2d] font-medium mb-4">
          <MapPin size={20} />
          <h2>Alamat Pengiriman</h2>
        </div>
        <div className="flex flex-col md:flex-row md:items-center gap-4 text-sm">
          <div className="font-bold">Budi Santoso (+62) 812-3456-7890</div>
          <div className="text-gray-600">
            Jl. Jend. Sudirman No. 123, RT.01/RW.02, Senayan, Kebayoran Baru, Kota Jakarta Selatan, DKI Jakarta 12190
          </div>
          <button className="text-blue-600 hover:underline md:ml-auto">Ubah</button>
        </div>
      </div>

      {/* Product List */}
      <div className="bg-white p-6 rounded-sm shadow-sm mb-4">
        <div className="grid grid-cols-12 gap-4 text-sm text-gray-500 mb-4 pb-4 border-b border-gray-200">
          <div className="col-span-6">Produk Dipesan</div>
          <div className="col-span-2 text-center">Harga Satuan</div>
          <div className="col-span-2 text-center">Jumlah</div>
          <div className="col-span-2 text-right">Subtotal Produk</div>
        </div>
        
        <div className="grid grid-cols-12 gap-4 items-center text-sm">
          <div className="col-span-6 flex items-center gap-4">
            <img src={product.image} alt={product.name} className="w-12 h-12 object-cover border border-gray-200" />
            <span className="line-clamp-2">{product.name}</span>
          </div>
          <div className="col-span-2 text-center">{formatRupiah(product.price)}</div>
          <div className="col-span-2 text-center">{qty}</div>
          <div className="col-span-2 text-right font-medium">{formatRupiah(subtotal)}</div>
        </div>

        {/* Shipping Options */}
        <div className="mt-6 pt-6 border-t border-gray-200 flex flex-col md:flex-row justify-between items-center gap-4 bg-[#fafdff] p-4">
          <div className="flex items-center gap-4 w-full md:w-auto">
            <span className="font-medium">Opsi Pengiriman:</span>
            <select 
              value={shipping}
              onChange={(e) => setShipping(e.target.value)}
              className="border border-gray-300 rounded-sm px-3 py-1.5 text-sm focus:outline-none focus:border-[#ee4d2d]"
            >
              <option value="Translink">Translink (Reguler)</option>
              <option value="JNE">JNE (Reguler)</option>
              <option value="J&T">J&T Express</option>
            </select>
          </div>
          <div className="text-right w-full md:w-auto">
            <div className="text-sm text-gray-600 mb-1">Diterima dalam 2-4 hari</div>
            <div className="font-medium">{formatRupiah(shippingCost)}</div>
          </div>
        </div>
      </div>

      {/* Payment Summary */}
      <div className="bg-white p-6 rounded-sm shadow-sm">
        <div className="flex items-center gap-2 font-medium mb-4 pb-4 border-b border-gray-200">
          <Receipt size={20} className="text-[#ee4d2d]" />
          <h2>Metode Pembayaran</h2>
          <span className="ml-4 text-sm text-gray-600 border border-gray-300 px-2 py-1 rounded-sm">Transfer Bank</span>
        </div>

        <div className="flex flex-col items-end gap-2 text-sm">
          <div className="grid grid-cols-2 gap-8 w-full md:w-1/3">
            <div className="text-gray-500">Subtotal untuk Produk:</div>
            <div className="text-right">{formatRupiah(subtotal)}</div>
          </div>
          <div className="grid grid-cols-2 gap-8 w-full md:w-1/3">
            <div className="text-gray-500">Total Ongkos Kirim:</div>
            <div className="text-right">{formatRupiah(shippingCost)}</div>
          </div>
          <div className="grid grid-cols-2 gap-8 w-full md:w-1/3 mt-4 items-center">
            <div className="text-gray-500">Total Pembayaran:</div>
            <div className="text-right text-2xl font-medium text-[#ee4d2d]">{formatRupiah(total)}</div>
          </div>
        </div>

        <div className="mt-8 pt-6 border-t border-gray-200 flex justify-end">
          <button 
            onClick={handlePlaceOrder}
            className="bg-[#ee4d2d] text-white px-12 py-3 rounded-sm hover:bg-[#d73211] transition-colors font-medium"
          >
            Buat Pesanan
          </button>
        </div>
      </div>
    </div>
  );
}
