
import React from 'react';
import { Calendar } from 'lucide-react';

interface FloatingCTAProps {
  onBookClick: () => void;
}

const FloatingCTA: React.FC<FloatingCTAProps> = ({ onBookClick }) => {
  return (
    <div className="md:hidden fixed bottom-6 left-1/2 -translate-x-1/2 z-50 w-full px-6 pointer-events-none">
      <button
        onClick={onBookClick}
        className="pointer-events-auto w-full flex items-center justify-center gap-3 bg-indigo-600 text-white px-8 py-4 rounded-2xl text-xl font-bold shadow-2xl shadow-indigo-400"
      >
        <Calendar size={24} />
        Book Grooming
      </button>
    </div>
  );
};

export default FloatingCTA;
