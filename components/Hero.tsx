import React from 'react';
import { Phone, Instagram, ArrowRight } from 'lucide-react';
import { BUSINESS_INFO } from '../constants.tsx';

interface HeroProps {
  onBookClick: () => void;
}

const Hero: React.FC<HeroProps> = ({ onBookClick }) => {
  return (
    <div className="relative min-h-[90vh] flex items-center pt-20">
      {/* Background with overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1516734212186-a967f81ad0d7?auto=format&fit=crop&q=80&w=2000"
          alt="Happy pet in London"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-white via-white/90 to-transparent"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="max-w-2xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-100 text-indigo-700 text-sm font-bold mb-6">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-indigo-500"></span>
            </span>
            Professional Care in London
          </div>
          
          <h1 className="text-5xl md:text-7xl font-extrabold text-slate-900 leading-tight mb-6">
            Grooming with <span className="text-indigo-600">Love</span> & Quality Supplies
          </h1>
          
          <p className="text-xl text-slate-600 mb-10 leading-relaxed max-w-lg">
            A boutique pet destination in London SE16. We offer premium grooming packages, high-quality food, and expert advice in a friendly, inclusive environment.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 mb-10">
            <button
              onClick={onBookClick}
              className="inline-flex items-center justify-center gap-2 bg-indigo-600 text-white px-8 py-4 rounded-2xl text-lg font-bold hover:bg-indigo-700 transition-all shadow-xl shadow-indigo-200 transform hover:-translate-y-1"
            >
              Book Grooming <ArrowRight size={20} />
            </button>
            <a
              href={`tel:${BUSINESS_INFO.phone}`}
              className="inline-flex items-center justify-center gap-2 bg-white text-slate-800 border-2 border-slate-200 px-8 py-4 rounded-2xl text-lg font-bold hover:bg-slate-50 transition-all transform hover:-translate-y-1"
            >
              <Phone size={20} className="text-indigo-600" /> Call Shop
            </a>
          </div>

          <div className="flex flex-wrap items-center gap-6 text-slate-500 font-medium border-t border-slate-200 pt-8">
            <div className="flex items-center gap-2">
              <div className="bg-yellow-100 text-yellow-700 px-2 py-1 rounded font-bold text-xs uppercase">4.9 ★</div>
              <span>Google Verified</span>
            </div>
            <div className="flex items-center gap-2">
              <Instagram size={20} className="text-pink-600" />
              <span>Join 5k+ Followers</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;