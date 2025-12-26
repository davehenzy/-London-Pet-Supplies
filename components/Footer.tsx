import React from 'react';
import { Heart, Instagram, Facebook, Twitter } from 'lucide-react';
import { BUSINESS_INFO } from '../constants.tsx';

const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-900 text-white pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-12 mb-20">
          <div className="col-span-1 md:col-span-1">
            <div className="flex items-center gap-2 mb-6">
              <div className="p-2 bg-indigo-600 rounded-lg">
                <Heart className="text-white" size={24} />
              </div>
              <div>
                <span className="block text-xl font-bold leading-none">{BUSINESS_INFO.name}</span>
                <span className="block text-xs font-medium text-slate-400">{BUSINESS_INFO.subBrand}</span>
              </div>
            </div>
            <p className="text-slate-400 text-sm leading-relaxed mb-8">
              Professional dog grooming and quality supplies in South East London. Women-owned and inclusive for all pet lovers.
            </p>
            <div className="flex gap-4">
              <a href={BUSINESS_INFO.instagram} target="_blank" className="w-10 h-10 bg-slate-800 rounded-full flex items-center justify-center hover:bg-indigo-600 transition-colors">
                <Instagram size={18} />
              </a>
              <a href="#" className="w-10 h-10 bg-slate-800 rounded-full flex items-center justify-center hover:bg-indigo-600 transition-colors">
                <Facebook size={18} />
              </a>
              <a href="#" className="w-10 h-10 bg-slate-800 rounded-full flex items-center justify-center hover:bg-indigo-600 transition-colors">
                <Twitter size={18} />
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-6">Quick Links</h4>
            <ul className="space-y-4 text-sm text-slate-400">
              <li><a href="#home" className="hover:text-indigo-400 transition-colors">Home</a></li>
              <li><a href="#about" className="hover:text-indigo-400 transition-colors">About Us</a></li>
              <li><a href="#services" className="hover:text-indigo-400 transition-colors">Services</a></li>
              <li><a href="#gallery" className="hover:text-indigo-400 transition-colors">Gallery</a></li>
              <li><a href="#contact" className="hover:text-indigo-400 transition-colors">Contact</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-6">Services</h4>
            <ul className="space-y-4 text-sm text-slate-400">
              <li>Full Grooming</li>
              <li>Puppy's First Groom</li>
              <li>Wash & Tidy</li>
              <li>Nail Clipping</li>
              <li>Pet Food Supplies</li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-6">Our Location</h4>
            <p className="text-sm text-slate-400 leading-relaxed mb-4">
              {BUSINESS_INFO.address}
            </p>
            <p className="text-sm font-bold text-white mb-2">{BUSINESS_INFO.phone}</p>
            <p className="text-xs text-slate-500 uppercase tracking-widest">{BUSINESS_INFO.hours}</p>
          </div>
        </div>

        <div className="pt-10 border-t border-slate-800 flex flex-col md:flex-row justify-between items-center gap-6 text-slate-500 text-xs uppercase tracking-widest font-bold">
          <p>© {new Date().getFullYear()} {BUSINESS_INFO.name}. All rights reserved.</p>
          <div className="flex gap-8">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;