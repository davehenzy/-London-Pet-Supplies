import React from 'react';
import { REVIEWS, BUSINESS_INFO } from '../constants.tsx';
import { Star, Quote } from 'lucide-react';

const Testimonials: React.FC = () => {
  return (
    <div className="py-24 bg-stone-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-end gap-6 mb-16">
          <div className="max-w-xl">
            <h2 className="text-indigo-600 font-bold tracking-widest uppercase text-sm mb-4">Customer Love</h2>
            <h3 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-0">Trusted by Local Owners</h3>
          </div>
          <div className="flex items-center gap-4 bg-white px-6 py-4 rounded-2xl shadow-sm border border-slate-100">
            <div className="text-center border-r border-slate-100 pr-4">
              <span className="block text-2xl font-bold text-slate-900 leading-none">{BUSINESS_INFO.rating}</span>
              <span className="text-[10px] uppercase tracking-wider text-slate-400 font-bold">Rating</span>
            </div>
            <div className="flex flex-col">
              <div className="flex text-yellow-400 mb-0.5">
                {[...Array(5)].map((_, i) => <Star key={i} size={14} fill="currentColor" />)}
              </div>
              <span className="text-xs text-slate-500 font-medium">From {BUSINESS_INFO.reviewCount} Google Reviews</span>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {REVIEWS.map((review) => (
            <div key={review.id} className="bg-white p-10 rounded-[2.5rem] shadow-sm hover:shadow-xl transition-all duration-300 relative group border border-slate-50">
              <Quote className="absolute top-10 right-10 text-indigo-50 group-hover:text-indigo-100 transition-colors" size={64} strokeWidth={3} />
              <div className="relative z-10">
                <div className="flex text-yellow-400 mb-6">
                  {[...Array(review.rating)].map((_, i) => <Star key={i} size={18} fill="currentColor" />)}
                </div>
                <p className="text-slate-600 text-lg leading-relaxed mb-8 italic">
                  "{review.text}"
                </p>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-indigo-100 rounded-full flex items-center justify-center font-bold text-indigo-600">
                    {review.author[0]}
                  </div>
                  <div>
                    <h5 className="font-bold text-slate-900">{review.author}</h5>
                    <p className="text-slate-400 text-xs font-medium uppercase tracking-tighter">{review.date}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <a
            href="https://www.google.com/search?q=PETS+Veterinary+London+Pet+Supplies+reviews"
            target="_blank"
            rel="noopener noreferrer"
            className="text-indigo-600 font-bold hover:text-indigo-700 transition-colors inline-flex items-center gap-2 group"
          >
            Read all Google reviews <span className="group-hover:translate-x-1 transition-transform">→</span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;