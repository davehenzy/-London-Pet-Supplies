import React, { useState } from 'react';
import { GALLERY } from '../constants.tsx';
import { Maximize2 } from 'lucide-react';

const Gallery: React.FC = () => {
  const [filter, setFilter] = useState<'all' | 'grooming' | 'store' | 'pets'>('all');

  const filteredItems = filter === 'all' 
    ? GALLERY 
    : GALLERY.filter(item => item.category === filter);

  return (
    <div className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="flex flex-col md:flex-row justify-between items-end gap-6 mb-12">
        <div className="max-w-xl text-center md:text-left">
          <h2 className="text-indigo-600 font-bold tracking-widest uppercase text-sm mb-4">Our Gallery</h2>
          <h3 className="text-4xl md:text-5xl font-extrabold text-slate-900">Captured Moments</h3>
        </div>

        <div className="flex flex-wrap gap-2">
          {['all', 'grooming', 'store', 'pets'].map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat as any)}
              className={`px-5 py-2 rounded-full text-sm font-bold capitalize transition-all ${
                filter === cat 
                ? 'bg-indigo-600 text-white shadow-lg' 
                : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-8">
        {filteredItems.map((item) => (
          <div key={item.id} className="group relative aspect-square rounded-3xl overflow-hidden shadow-md cursor-pointer animate-in fade-in duration-500">
            <img
              src={item.url}
              alt={item.alt}
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-indigo-900/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
              <div className="bg-white/20 backdrop-blur-md p-3 rounded-full text-white border border-white/30">
                <Maximize2 size={24} />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Gallery;