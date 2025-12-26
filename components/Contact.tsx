import React from 'react';
import { Phone, Mail, MapPin, Clock, Instagram, Send } from 'lucide-react';
import { BUSINESS_INFO } from '../constants.tsx';

const Contact: React.FC = () => {
  return (
    <div className="py-24 bg-stone-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16">
          <div>
            <h2 className="text-indigo-600 font-bold tracking-widest uppercase text-sm mb-4">Find Us</h2>
            <h3 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-8">Get In Touch</h3>
            
            <div className="space-y-8 mb-12">
              <div className="flex gap-6">
                <div className="w-14 h-14 bg-white rounded-2xl shadow-sm flex items-center justify-center flex-shrink-0 text-indigo-600">
                  <MapPin size={28} />
                </div>
                <div>
                  <h4 className="font-bold text-xl text-slate-900 mb-1">Our Location</h4>
                  <p className="text-slate-500">{BUSINESS_INFO.address}</p>
                </div>
              </div>

              <div className="flex gap-6">
                <div className="w-14 h-14 bg-white rounded-2xl shadow-sm flex items-center justify-center flex-shrink-0 text-indigo-600">
                  <Phone size={28} />
                </div>
                <div>
                  <h4 className="font-bold text-xl text-slate-900 mb-1">Call Us</h4>
                  <a href={`tel:${BUSINESS_INFO.phone}`} className="text-slate-500 hover:text-indigo-600 transition-colors">{BUSINESS_INFO.phone}</a>
                </div>
              </div>

              <div className="flex gap-6">
                <div className="w-14 h-14 bg-white rounded-2xl shadow-sm flex items-center justify-center flex-shrink-0 text-indigo-600">
                  <Clock size={28} />
                </div>
                <div>
                  <h4 className="font-bold text-xl text-slate-900 mb-1">Opening Hours</h4>
                  <p className="text-slate-500">{BUSINESS_INFO.hours}</p>
                  <p className="text-xs text-orange-500 font-semibold mt-1 italic">*{BUSINESS_INFO.specialNotes}</p>
                </div>
              </div>
            </div>

            <div className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100">
              <h4 className="font-bold text-xl text-slate-900 mb-6 flex items-center gap-2">
                <Send size={20} className="text-indigo-600" /> Quick Message
              </h4>
              <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
                <div className="grid grid-cols-2 gap-4">
                  <input type="text" placeholder="Name" className="bg-slate-50 border-none rounded-xl p-4 text-sm focus:ring-2 focus:ring-indigo-500 transition-all outline-none" />
                  <input type="email" placeholder="Email" className="bg-slate-50 border-none rounded-xl p-4 text-sm focus:ring-2 focus:ring-indigo-500 transition-all outline-none" />
                </div>
                <textarea placeholder="How can we help?" rows={4} className="w-full bg-slate-50 border-none rounded-xl p-4 text-sm focus:ring-2 focus:ring-indigo-500 transition-all outline-none resize-none"></textarea>
                <button className="w-full bg-indigo-600 text-white font-bold py-4 rounded-xl hover:bg-indigo-700 transition-colors shadow-lg shadow-indigo-100">
                  Send Message
                </button>
              </form>
            </div>
          </div>

          <div className="relative">
            {/* Map Placeholder */}
            <div className="w-full h-full min-h-[500px] rounded-3xl overflow-hidden shadow-lg border-8 border-white bg-slate-100 relative">
               {/* Note: IFrame placeholder used in static build environments */}
               <div className="absolute inset-0 bg-slate-200 flex flex-col items-center justify-center p-8 text-center">
                 <MapPin size={48} className="text-indigo-600 mb-4" />
                 <h4 className="font-bold text-xl text-slate-800">Visit Us in Bermondsey</h4>
                 <p className="text-slate-500 mt-2 max-w-xs">{BUSINESS_INFO.address}</p>
                 <a 
                   href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(BUSINESS_INFO.address)}`}
                   target="_blank"
                   rel="noopener noreferrer"
                   className="mt-6 bg-white px-6 py-3 rounded-full shadow-md text-sm font-bold text-indigo-600 uppercase tracking-widest hover:bg-indigo-50 transition-colors"
                 >
                    Open in Google Maps
                 </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;