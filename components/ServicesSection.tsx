import React from 'react';
import { SERVICES } from '../constants.tsx';
import { CheckCircle2 } from 'lucide-react';

interface ServicesSectionProps {
  onBookClick: () => void;
}

const ServicesSection: React.FC<ServicesSectionProps> = ({ onBookClick }) => {
  return (
    <div className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="text-center mb-16">
        <h2 className="text-indigo-600 font-bold tracking-widest uppercase text-sm mb-4">Our Offerings</h2>
        <h3 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-6">World-Class Pet Care Services</h3>
        <p className="text-lg text-slate-600 max-w-2xl mx-auto">
          From a refreshing scrub to a stylish new look, we provide a full range of services designed to keep your pet happy and healthy.
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
        {SERVICES.map((service) => (
          <div key={service.id} className="group bg-stone-50 rounded-3xl p-8 hover:bg-white hover:shadow-2xl hover:shadow-indigo-100 transition-all duration-500 border border-transparent hover:border-indigo-100">
            <div className="text-4xl mb-6 transform group-hover:scale-110 transition-transform duration-300 inline-block">{service.icon}</div>
            <h4 className="text-xl font-bold text-slate-900 mb-4">{service.title}</h4>
            <p className="text-slate-500 text-sm leading-relaxed mb-6">
              {service.description}
            </p>
            <ul className="space-y-2">
              <li className="flex items-center gap-2 text-xs font-semibold text-slate-700">
                <CheckCircle2 size={14} className="text-green-500" /> Expert Handlers
              </li>
              <li className="flex items-center gap-2 text-xs font-semibold text-slate-700">
                <CheckCircle2 size={14} className="text-green-500" /> Premium Products
              </li>
            </ul>
          </div>
        ))}
      </div>

      <div className="mt-20 bg-indigo-900 rounded-[3rem] p-8 md:p-16 text-center text-white relative overflow-hidden">
        <div className="relative z-10">
          <h4 className="text-3xl md:text-4xl font-bold mb-6">Need a custom grooming package?</h4>
          <p className="text-indigo-200 text-lg mb-10 max-w-2xl mx-auto">
            We understand every pet is unique. Contact us today to discuss specific requirements for your dog's size, breed, and temperament.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <button 
              onClick={onBookClick}
              className="bg-white text-indigo-900 px-8 py-4 rounded-2xl font-bold hover:bg-indigo-50 transition-colors shadow-lg"
            >
              Request a Quote
            </button>
            <a href="#contact" className="bg-indigo-800 text-white border border-indigo-700 px-8 py-4 rounded-2xl font-bold hover:bg-indigo-700 transition-colors">
              Contact Details
            </a>
          </div>
        </div>
        {/* Background Decorative element */}
        <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/2 w-96 h-96 bg-indigo-700/30 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 translate-y-1/2 -translate-x-1/2 w-96 h-96 bg-indigo-400/20 rounded-full blur-3xl"></div>
      </div>
    </div>
  );
};

export default ServicesSection;