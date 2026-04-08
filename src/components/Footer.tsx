import React from 'react';

export default function Footer() {
  return (
    <footer className="bg-white border-t-4 border-[#ee4d2d] mt-12 pt-12 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-8">
          <div>
            <h3 className="font-bold text-gray-800 text-xs uppercase mb-4">Customer Service</h3>
            <ul className="text-xs text-gray-500 space-y-2">
              <li><a href="#" className="hover:text-[#ee4d2d]">Help Centre</a></li>
              <li><a href="#" className="hover:text-[#ee4d2d]">Zora Blog</a></li>
              <li><a href="#" className="hover:text-[#ee4d2d]">Zora Guarantee</a></li>
              <li><a href="#" className="hover:text-[#ee4d2d]">Payment Methods</a></li>
              <li><a href="#" className="hover:text-[#ee4d2d]">ShopeePay</a></li>
              <li><a href="#" className="hover:text-[#ee4d2d]">Track Order</a></li>
              <li><a href="#" className="hover:text-[#ee4d2d]">Free Shipping</a></li>
              <li><a href="#" className="hover:text-[#ee4d2d]">Return & Refund</a></li>
              <li><a href="#" className="hover:text-[#ee4d2d]">Contact Us</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-bold text-gray-800 text-xs uppercase mb-4">About Zora</h3>
            <ul className="text-xs text-gray-500 space-y-2">
              <li><a href="#" className="hover:text-[#ee4d2d]">About Us</a></li>
              <li><a href="#" className="hover:text-[#ee4d2d]">Zora Careers</a></li>
              <li><a href="#" className="hover:text-[#ee4d2d]">Zora Policies</a></li>
              <li><a href="#" className="hover:text-[#ee4d2d]">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-[#ee4d2d]">Zora Mall</a></li>
              <li><a href="#" className="hover:text-[#ee4d2d]">Seller Centre</a></li>
              <li><a href="#" className="hover:text-[#ee4d2d]">Flash Deals</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-bold text-gray-800 text-xs uppercase mb-4">Payment</h3>
            <div className="grid grid-cols-3 gap-2">
              <div className="bg-white border border-gray-200 p-1 rounded shadow-sm flex items-center justify-center h-8 text-[10px] font-bold text-blue-800">VISA</div>
              <div className="bg-white border border-gray-200 p-1 rounded shadow-sm flex items-center justify-center h-8 text-[10px] font-bold text-red-600">MasterCard</div>
              <div className="bg-white border border-gray-200 p-1 rounded shadow-sm flex items-center justify-center h-8 text-[10px] font-bold text-blue-500">JCB</div>
            </div>
            
            <h3 className="font-bold text-gray-800 text-xs uppercase mb-4 mt-6">Logistics</h3>
            <div className="grid grid-cols-3 gap-2">
              <div className="bg-white border border-gray-200 p-1 rounded shadow-sm flex items-center justify-center h-8 text-[10px] font-bold text-red-500">J&T</div>
              <div className="bg-white border border-gray-200 p-1 rounded shadow-sm flex items-center justify-center h-8 text-[10px] font-bold text-blue-600">JNE</div>
              <div className="bg-white border border-gray-200 p-1 rounded shadow-sm flex items-center justify-center h-8 text-[10px] font-bold text-green-600">GOSEND</div>
            </div>
          </div>
          
          <div>
            <h3 className="font-bold text-gray-800 text-xs uppercase mb-4">Follow Us</h3>
            <ul className="text-xs text-gray-500 space-y-2">
              <li><a href="#" className="hover:text-[#ee4d2d] flex items-center gap-2">Facebook</a></li>
              <li><a href="#" className="hover:text-[#ee4d2d] flex items-center gap-2">Instagram</a></li>
              <li><a href="#" className="hover:text-[#ee4d2d] flex items-center gap-2">Twitter</a></li>
              <li><a href="#" className="hover:text-[#ee4d2d] flex items-center gap-2">LinkedIn</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-bold text-gray-800 text-xs uppercase mb-4">Zora App Download</h3>
            <div className="flex gap-2">
              <div className="w-20 h-20 bg-gray-200 rounded flex items-center justify-center text-xs text-gray-500">QR Code</div>
              <div className="flex flex-col gap-2 justify-center">
                <div className="bg-gray-800 text-white text-[10px] px-2 py-1 rounded text-center">App Store</div>
                <div className="bg-gray-800 text-white text-[10px] px-2 py-1 rounded text-center">Google Play</div>
                <div className="bg-gray-800 text-white text-[10px] px-2 py-1 rounded text-center">AppGallery</div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-200 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-gray-500">
          <p>&copy; 2026 Zora. All Rights Reserved.</p>
          <div className="flex gap-4 mt-4 md:mt-0">
            <span>Country & Region:</span>
            <a href="#" className="hover:text-[#ee4d2d]">Singapore</a>
            <span className="text-gray-300">|</span>
            <a href="#" className="hover:text-[#ee4d2d]">Indonesia</a>
            <span className="text-gray-300">|</span>
            <a href="#" className="hover:text-[#ee4d2d]">Taiwan</a>
            <span className="text-gray-300">|</span>
            <a href="#" className="hover:text-[#ee4d2d]">Thailand</a>
            <span className="text-gray-300">|</span>
            <a href="#" className="hover:text-[#ee4d2d]">Malaysia</a>
            <span className="text-gray-300">|</span>
            <a href="#" className="hover:text-[#ee4d2d]">Vietnam</a>
            <span className="text-gray-300">|</span>
            <a href="#" className="hover:text-[#ee4d2d]">Philippines</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
