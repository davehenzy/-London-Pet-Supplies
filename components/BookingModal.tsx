
import React, { useState } from 'react';
import { X, Calendar, PawPrint, Scissors, Phone, CheckCircle2, ChevronRight, ChevronLeft } from 'lucide-react';

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const BookingModal: React.FC<BookingModalProps> = ({ isOpen, onClose }) => {
  const [step, setStep] = useState(1);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  if (!isOpen) return null;

  const nextStep = () => setStep(s => s + 1);
  const prevStep = () => setStep(s => s - 1);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
    }, 1500);
  };

  const renderStep = () => {
    switch (step) {
      case 1:
        return (
          <div className="space-y-6 animate-in fade-in slide-in-from-right-4 duration-300">
            <h4 className="text-xl font-bold text-slate-900 flex items-center gap-2">
              <PawPrint className="text-indigo-600" size={24} /> Pet Details
            </h4>
            <div className="grid grid-cols-1 gap-4">
              <div>
                <label className="block text-sm font-bold text-slate-700 mb-2 uppercase tracking-wide">Pet Name</label>
                <input type="text" placeholder="e.g. Buddy" className="w-full bg-slate-50 border-2 border-slate-100 rounded-xl p-4 focus:border-indigo-500 transition-all outline-none" required />
              </div>
              <div>
                <label className="block text-sm font-bold text-slate-700 mb-2 uppercase tracking-wide">Breed</label>
                <input type="text" placeholder="e.g. Golden Retriever" className="w-full bg-slate-50 border-2 border-slate-100 rounded-xl p-4 focus:border-indigo-500 transition-all outline-none" required />
              </div>
            </div>
            <button onClick={nextStep} className="w-full bg-indigo-600 text-white font-bold py-4 rounded-xl hover:bg-indigo-700 flex items-center justify-center gap-2 transition-all">
              Continue <ChevronRight size={20} />
            </button>
          </div>
        );
      case 2:
        return (
          <div className="space-y-6 animate-in fade-in slide-in-from-right-4 duration-300">
            <h4 className="text-xl font-bold text-slate-900 flex items-center gap-2">
              <Scissors className="text-indigo-600" size={24} /> Select Service
            </h4>
            <div className="space-y-3">
              {['Full Grooming', 'Bath & Brush', 'Puppy Groom', 'Nail Trimming Only'].map((service) => (
                <label key={service} className="flex items-center gap-4 p-4 rounded-2xl border-2 border-slate-100 hover:border-indigo-200 cursor-pointer transition-all bg-slate-50 hover:bg-white has-[:checked]:border-indigo-600 has-[:checked]:bg-indigo-50/50">
                  <input type="radio" name="service" className="w-5 h-5 text-indigo-600 accent-indigo-600" />
                  <span className="font-semibold text-slate-700">{service}</span>
                </label>
              ))}
            </div>
            <div className="flex gap-4">
              <button onClick={prevStep} className="flex-1 bg-slate-100 text-slate-600 font-bold py-4 rounded-xl hover:bg-slate-200 flex items-center justify-center gap-2 transition-all">
                <ChevronLeft size={20} /> Back
              </button>
              <button onClick={nextStep} className="flex-[2] bg-indigo-600 text-white font-bold py-4 rounded-xl hover:bg-indigo-700 flex items-center justify-center gap-2 transition-all">
                Continue <ChevronRight size={20} />
              </button>
            </div>
          </div>
        );
      case 3:
        return (
          <form onSubmit={handleSubmit} className="space-y-6 animate-in fade-in slide-in-from-right-4 duration-300">
            <h4 className="text-xl font-bold text-slate-900 flex items-center gap-2">
              <Calendar className="text-indigo-600" size={24} /> Schedule & Contact
            </h4>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-bold text-slate-700 mb-2 uppercase tracking-wide">Preferred Date</label>
                <input type="date" className="w-full bg-slate-50 border-2 border-slate-100 rounded-xl p-4 focus:border-indigo-500 outline-none" required />
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-bold text-slate-700 mb-2 uppercase tracking-wide">Owner Name</label>
                  <input type="text" className="w-full bg-slate-50 border-2 border-slate-100 rounded-xl p-4 focus:border-indigo-500 outline-none" required />
                </div>
                <div>
                  <label className="block text-sm font-bold text-slate-700 mb-2 uppercase tracking-wide">Phone Number</label>
                  <input type="tel" className="w-full bg-slate-50 border-2 border-slate-100 rounded-xl p-4 focus:border-indigo-500 outline-none" required />
                </div>
              </div>
            </div>
            <div className="flex gap-4">
              <button type="button" onClick={prevStep} className="flex-1 bg-slate-100 text-slate-600 font-bold py-4 rounded-xl hover:bg-slate-200 transition-all">
                Back
              </button>
              <button type="submit" disabled={isSubmitting} className="flex-[2] bg-indigo-600 text-white font-bold py-4 rounded-xl hover:bg-indigo-700 transition-all disabled:opacity-50">
                {isSubmitting ? 'Requesting...' : 'Complete Request'}
              </button>
            </div>
          </form>
        );
      default:
        return null;
    }
  };

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center px-4">
      {/* Backdrop */}
      <div className="absolute inset-0 bg-indigo-900/40 backdrop-blur-sm animate-in fade-in duration-300" onClick={onClose}></div>
      
      {/* Modal Card */}
      <div className="relative bg-white w-full max-w-xl rounded-[2.5rem] shadow-2xl overflow-hidden animate-in zoom-in-95 duration-300">
        <div className="p-8 md:p-12">
          {/* Close button */}
          <button onClick={onClose} className="absolute top-8 right-8 text-slate-400 hover:text-slate-600 transition-colors">
            <X size={28} />
          </button>

          {isSuccess ? (
            <div className="text-center py-10 animate-in zoom-in duration-500">
              <div className="w-20 h-20 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-8">
                <CheckCircle2 size={48} />
              </div>
              <h3 className="text-3xl font-extrabold text-slate-900 mb-4">Request Sent!</h3>
              <p className="text-slate-600 mb-10 leading-relaxed">
                Thank you! We've received your booking request. Our team will contact you shortly to confirm the appointment time.
              </p>
              <button onClick={onClose} className="w-full bg-slate-900 text-white font-bold py-4 rounded-xl hover:bg-slate-800 transition-colors">
                Close Window
              </button>
            </div>
          ) : (
            <>
              <div className="mb-10">
                <h3 className="text-3xl font-extrabold text-slate-900 mb-2">Book a Session</h3>
                <p className="text-slate-500">Fill in the details below to start your pet's spa journey.</p>
                
                {/* Progress Bar */}
                <div className="flex gap-2 mt-8">
                  {[1, 2, 3].map((s) => (
                    <div key={s} className={`h-1.5 flex-1 rounded-full transition-all duration-500 ${step >= s ? 'bg-indigo-600' : 'bg-slate-100'}`}></div>
                  ))}
                </div>
              </div>

              {renderStep()}
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default BookingModal;
