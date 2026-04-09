import React from 'react';
import { Link } from 'react-router-dom';
import { Search, ShoppingCart, Bell, HelpCircle, Globe, ShoppingBag } from 'lucide-react';

export default function Header() {
  return (
    <header className="bg-[#ee4d2d] text-white sticky top-0 z-50">
      {/* Top Navigation */}
      <div className="hidden md:block border-b border-white/20">
        <div className="container mx-auto px-4 py-1.5 flex justify-between text-[13px]">
          <div className="flex items-center gap-4">
            <a href="#" className="hover:text-white/80 transition-colors">Seller Centre</a>
            <span className="w-px h-3 bg-white/40"></span>
            <a href="#" className="hover:text-white/80 transition-colors">Download</a>
            <span className="w-px h-3 bg-white/40"></span>
            <div className="flex items-center gap-1">
              <span>Follow us on</span>
              {/* Social icons placeholders */}
              <div className="flex gap-1">
                <div className="w-4 h-4 rounded-full bg-white/20"></div>
                <div className="w-4 h-4 rounded-full bg-white/20"></div>
              </div>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <a href="#" className="flex items-center gap-1 hover:text-white/80 transition-colors">
              <Bell size={14} /> Notifications
            </a>
            <a href="#" className="flex items-center gap-1 hover:text-white/80 transition-colors">
              <HelpCircle size={14} /> Help
            </a>
            <a href="#" className="flex items-center gap-1 hover:text-white/80 transition-colors">
              <Globe size={14} /> English
            </a>
            <span className="w-px h-3 bg-white/40"></span>
            <a href="#" className="font-medium hover:text-white/80 transition-colors">Sign Up</a>
            <span className="w-px h-3 bg-white/40"></span>
            <a href="#" className="font-medium hover:text-white/80 transition-colors">Login</a>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <div className="container mx-auto px-4 py-4 flex flex-wrap md:flex-nowrap items-center gap-4 md:gap-8">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2 text-2xl md:text-3xl font-bold tracking-tighter shrink-0 cursor-pointer">
          <ShoppingBag size={36} className="md:w-10 md:h-10" />
          <span>Zora</span>
        </Link>

        {/* Search Bar */}
        <div className="flex-1 flex flex-col gap-1 w-full order-last md:order-none">
          <div className="flex bg-white rounded-sm p-1 shadow-sm">
            <input 
              type="text" 
              className="flex-1 px-3 py-1.5 text-sm text-gray-800 outline-none placeholder:text-gray-400 min-w-0" 
              placeholder="Search for products, brands and shops" 
            />
            <button className="bg-[#ee4d2d] hover:bg-[#d73f21] transition-colors px-4 md:px-6 py-1.5 rounded-sm flex items-center justify-center shrink-0">
              <Search size={18} className="text-white" />
            </button>
          </div>
          <div className="hidden md:flex gap-3 text-[11px] text-white/90">
            <a href="#" className="hover:text-white">iPhone 15</a>
            <a href="#" className="hover:text-white">Laptop Gaming</a>
            <a href="#" className="hover:text-white">Skincare</a>
            <a href="#" className="hover:text-white">Sepatu Pria</a>
            <a href="#" className="hover:text-white">Kipas Angin</a>
            <a href="#" className="hover:text-white">Tas Wanita</a>
          </div>
        </div>

        {/* Cart */}
        <div className="shrink-0 px-2 cursor-pointer relative group ml-auto md:ml-0">
          <ShoppingCart size={28} />
          <span className="absolute -top-1 -right-1 bg-white text-[#ee4d2d] text-[10px] font-bold px-1.5 py-0.5 rounded-full border border-[#ee4d2d]">
            3
          </span>
        </div>
      </div>
    </header>
  );
}
