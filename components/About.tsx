import React from 'react';
import { ShieldCheck, Heart, UserCheck, Users } from 'lucide-react';
import { BUSINESS_INFO } from '../constants.tsx';

const About: React.FC = () => {
  const values = [
    {
      title: "Women-Owned",
      desc: "Proudly independent and female-led, bringing a unique, caring perspective to pet health.",
      icon: <UserCheck className="text-indigo-600" size={32} />
    },
    {
      title: "LGBTQ+ Friendly",
      desc: "An inclusive space where every pet and every owner is welcomed with open arms.",
      icon: <Users className="text-indigo-600" size={32} />
    },
    {
      title: "Patient & Gentle",
      desc: "We take our time with anxious dogs, ensuring a stress-free experience for your furry family.",
      icon: <Heart className="text-indigo-600" size={32} />
    },
    {
      title: "Expert Knowledge",
      desc: "Decades of experience in pet nutrition and professional grooming aesthetics.",
      icon: <ShieldCheck className="text-indigo-600" size={32} />
    }
  ];

  return (
    <div className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="grid lg:grid-cols-2 gap-16 items-center">
        <div className="relative">
          <div className="aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl relative">
            <img
              src="https://images.unsplash.com/photo-1541781774459-bb2af2f05b55?auto=format&fit=crop&q=80&w=800"
              alt="Our store interior"
              className="w-full h-full object-cover"
            />
            {/* Floating badge */}
            <div className="absolute -bottom-6 -right-6 bg-white p-6 rounded-2xl shadow-xl hidden sm:block max-w-[200px] border border-slate-100">
              <p className="text-indigo-600 font-bold text-lg mb-1">99% Happy Pets</p>
              <p className="text-slate-500 text-sm">Based on over 500+ successful grooming sessions this year.</p>
            </div>
          </div>
          <div className="absolute -top-6 -left-6 w-32 h-32 bg-indigo-50 rounded-full -z-10 animate-pulse"></div>
        </div>

        <div>
          <h2 className="text-indigo-600 font-bold tracking-widest uppercase text-sm mb-4">Our Story</h2>
          <h3 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-8 leading-tight">
            More Than Just a Pet Shop. <br/>
            <span className="text-slate-500 font-medium">A London Community.</span>
          </h3>
          <p className="text-lg text-slate-600 mb-10 leading-relaxed">
            Located in the heart of Jamaica Road, PETS Veterinary (London Pet Supplies) was founded on the belief that every pet deserves high-quality, personalized care. We combine professional grooming services with a boutique shopping experience.
          </p>

          <div className="grid sm:grid-cols-2 gap-8">
            {values.map((val, idx) => (
              <div key={idx} className="flex flex-col gap-3 group">
                <div className="w-14 h-14 bg-indigo-50 rounded-2xl flex items-center justify-center group-hover:bg-indigo-600 group-hover:text-white transition-all duration-300">
                  {val.icon}
                </div>
                <h4 className="font-bold text-xl text-slate-900">{val.title}</h4>
                <p className="text-slate-500 text-sm leading-relaxed">{val.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;