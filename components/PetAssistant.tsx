import React, { useState, useRef, useEffect } from 'react';
import { MessageCircle, X, Send, Sparkles, PawPrint } from 'lucide-react';
import { getPetAdvice } from '../services/geminiService.ts';

interface Message {
  text: string;
  sender: 'user' | 'ai';
}

const PetAssistant: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState<Message[]>([
    { text: "Hi there! I'm your PETS Veterinary assistant. How can I help you and your pet today?", sender: 'ai' }
  ]);
  const [loading, setLoading] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages]);

  const handleSend = async () => {
    if (!input.trim() || loading) return;

    const userMsg = input;
    setInput('');
    setMessages(prev => [...prev, { text: userMsg, sender: 'user' }]);
    setLoading(true);

    const aiResponse = await getPetAdvice(userMsg);
    setMessages(prev => [...prev, { text: aiResponse, sender: 'ai' }]);
    setLoading(false);
  };

  return (
    <>
      {/* Trigger Button */}
      <button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-6 right-6 z-50 bg-white text-indigo-600 w-16 h-16 rounded-full shadow-2xl flex items-center justify-center hover:scale-110 transition-transform md:bottom-10 md:right-10 border-4 border-indigo-50 group overflow-hidden"
      >
        <div className="absolute inset-0 bg-indigo-600 opacity-0 group-hover:opacity-10 transition-opacity"></div>
        <MessageCircle size={32} />
        <div className="absolute -top-1 -right-1 w-4 h-4 bg-orange-500 rounded-full border-2 border-white"></div>
      </button>

      {/* Chat Window */}
      {isOpen && (
        <div className="fixed inset-0 md:inset-auto md:bottom-28 md:right-10 z-[60] md:w-96 bg-white md:rounded-[2rem] shadow-2xl border border-slate-100 flex flex-col animate-in fade-in slide-in-from-bottom-10 duration-300 overflow-hidden">
          {/* Header */}
          <div className="bg-indigo-600 p-6 text-white flex justify-between items-center">
            <div className="flex items-center gap-3">
              <div className="bg-white/20 p-2 rounded-xl">
                <Sparkles size={20} />
              </div>
              <div>
                <h4 className="font-bold">Pet Assistant</h4>
                <p className="text-[10px] text-indigo-200 uppercase tracking-widest flex items-center gap-1">
                  <span className="w-1.5 h-1.5 bg-green-400 rounded-full"></span> Online & Caring
                </p>
              </div>
            </div>
            <button onClick={() => setIsOpen(false)} className="hover:bg-white/10 p-1 rounded-lg transition-colors">
              <X size={24} />
            </button>
          </div>

          {/* Messages */}
          <div ref={scrollRef} className="flex-1 overflow-y-auto p-6 space-y-4 bg-stone-50">
            {messages.map((m, i) => (
              <div key={i} className={`flex ${m.sender === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div className={`max-w-[85%] p-4 rounded-2xl text-sm leading-relaxed ${
                  m.sender === 'user' 
                  ? 'bg-indigo-600 text-white rounded-tr-none' 
                  : 'bg-white text-slate-700 shadow-sm rounded-tl-none border border-slate-100'
                }`}>
                  {m.text}
                </div>
              </div>
            ))}
            {loading && (
              <div className="flex justify-start">
                <div className="bg-white p-4 rounded-2xl rounded-tl-none border border-slate-100 flex gap-1">
                  <div className="w-1.5 h-1.5 bg-indigo-300 rounded-full animate-bounce"></div>
                  <div className="w-1.5 h-1.5 bg-indigo-400 rounded-full animate-bounce delay-75"></div>
                  <div className="w-1.5 h-1.5 bg-indigo-500 rounded-full animate-bounce delay-150"></div>
                </div>
              </div>
            )}
          </div>

          {/* Input */}
          <div className="p-4 border-t border-slate-100">
            <div className="flex items-center gap-2 bg-slate-50 rounded-xl px-4 py-1 focus-within:ring-2 focus-within:ring-indigo-500 transition-all">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && handleSend()}
                placeholder="Ask about grooming or supplies..."
                className="flex-1 bg-transparent border-none focus:ring-0 text-sm py-3 outline-none"
              />
              <button
                onClick={handleSend}
                disabled={!input.trim() || loading}
                className="p-2 text-indigo-600 hover:bg-indigo-50 rounded-lg disabled:opacity-30 transition-colors"
              >
                <Send size={20} />
              </button>
            </div>
            <p className="text-[10px] text-slate-400 mt-3 text-center flex items-center justify-center gap-1">
              <PawPrint size={10} /> Powered by Gemini AI for PETS Veterinary
            </p>
          </div>
        </div>
      )}
    </>
  );
};

export default PetAssistant;