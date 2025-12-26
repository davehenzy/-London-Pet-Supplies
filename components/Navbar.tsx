import React, { useState } from 'react';
import { Menu, X, Heart, Calendar } from 'lucide-react';
import { BUSINESS_INFO } from '../constants.tsx';

interface NavbarProps {
  isScrolled: boolean;
  onBookClick: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ isScrolled, onBookClick }) => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Reviews', href: '#testimonials' },
    { name: 'Gallery', href: '#gallery' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white shadow-md py-3' : 'bg-transparent py-5'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <div className="flex items-center gap-2 group cursor-pointer">
            <div className={`p-2 rounded-lg transition-colors ${isScrolled ? 'bg-indigo-600' : 'bg-white'}`}>
              <Heart className={isScrolled ? 'text-white' : 'text-indigo-600'} size={24} />
            </div>
            <div>
              <span className={`block text-xl font-bold leading-none ${isScrolled ? 'text-indigo-900' : 'text-white md:text-indigo-900'}`}>
                {BUSINESS_INFO.name}
              </span>
              <span className={`block text-xs font-medium ${isScrolled ? 'text-indigo-500' : 'text-indigo-200 md:text-indigo-400'}`}>
                {BUSINESS_INFO.subBrand}
              </span>
            </div>
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className={`text-sm font-semibold transition-colors hover:text-indigo-500 ${
                  isScrolled ? 'text-slate-600' : 'text-slate-800'
                }`}
              >
                {link.name}
              </a>
            ))}
            <button
              onClick={onBookClick}
              className="bg-indigo-600 text-white px-5 py-2.5 rounded-full text-sm font-bold hover:bg-indigo-700 transition-all shadow-lg hover:shadow-indigo-200 flex items-center gap-2"
            >
              <Calendar size={16} /> Book Online
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-md text-slate-800"
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white border-t border-slate-100 animate-in fade-in slide-in-from-top-4 duration-300">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="block px-3 py-4 text-base font-medium text-slate-700 hover:text-indigo-600 hover:bg-slate-50 rounded-md"
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </a>
            ))}
            <div className="pt-4 pb-2 px-3 space-y-3">
              <button
                onClick={() => { onBookClick(); setIsOpen(false); }}
                className="w-full flex justify-center items-center gap-2 bg-indigo-600 text-white px-5 py-3 rounded-xl text-lg font-bold"
              >
                <Calendar size={20} /> Book Online
              </button>
              <a
                href={`tel:${BUSINESS_INFO.phone}`}
                className="w-full flex justify-center items-center gap-2 bg-slate-100 text-slate-800 px-5 py-3 rounded-xl text-lg font-bold"
              >
                Call Shop
              </a>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;