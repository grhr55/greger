"use client";

import React, { useRef } from "react"; 
import { demogame } from "./demogame";
import { notFound } from "next/navigation";


import { ChevronRight, Maximize2, Smartphone, Zap, Trophy,  Info, DollarSign } from "lucide-react";

export default function GameDetailPage({ params }) {
  const resolvedParams = React.use(params);
  const slug = resolvedParams.slug;
  const iframeRef = useRef(null);

  const game = demogame.find((l) => l.slug.toLowerCase() === slug.toLowerCase());
  if (!game) return notFound();

  const toggleFullScreen = () => {
    const iframe = iframeRef.current;
    if (iframe?.requestFullscreen) iframe.requestFullscreen();
    else if (iframe?.webkitRequestFullscreen) iframe.webkitRequestFullscreen();
  };

  return (
    <div className="bg-[#020202] min-h-screen text-white pb-20 selection:bg-[#009739]/30 font-sans">
    
      
      {/* Фоновое свечение в стиле флага Бразилии */}
      <div className="fixed top-0 left-1/2 -translate-x-1/2 w-full h-[500px] bg-[#009739]/10 blur-[120px] pointer-events-none z-0"></div>
      
      <main className="max-w-6xl mx-auto px-3 md:px-4 pt-6 relative z-10">
        
        {/* --- HEADER: МЕГА СТИЛЬ --- */}
        <div className="flex flex-col md:flex-row items-center justify-between mb-6 bg-gradient-to-r from-[#0a0a0a] to-[#111] p-4 md:p-6 rounded-[30px] border border-white/5 shadow-[0_10px_40px_rgba(0,0,0,0.5)]">
          <div className="flex items-center gap-5">
            {/* Анимированная иконка тигра или лого */}
            <div className="relative w-16 h-16 md:w-20 md:h-20 shrink-0 border-2 border-[#FEDD00] rounded-2xl overflow-hidden shadow-[0_0_15px_rgba(254,221,0,0.3)]">
                <img src={game.imggame} alt="Logo" className="object-cover w-full h-full" />
            </div>
            <div>
                <div className="flex items-center gap-2">
                    <span className="bg-[#009739] text-[9px] font-black px-2 py-0.5 rounded text-white uppercase tracking-tighter">Brasil Oficial</span>
                    <span className="bg-[#FEDD00] text-[9px] font-black px-2 py-0.5 rounded text-black uppercase tracking-tighter italic">Original</span>
                </div>
                <h1 className="text-3xl md:text-5xl font-black uppercase italic tracking-tighter text-white drop-shadow-lg leading-none mt-1">
                {game.nickgame}
                </h1>
            </div>
          </div>
          
          <button 
            onClick={toggleFullScreen}
            className="mt-4 md:mt-0 flex items-center gap-2 bg-[#FEDD00] hover:bg-white text-black px-8 py-4 rounded-2xl font-black uppercase italic text-sm transition-all active:scale-95 shadow-[0_0_25px_rgba(254,221,0,0.4)] group"
          >
            <Maximize2 size={20} className="group-hover:rotate-90 transition-transform" /> 
            <span>Abrir Tela Cheia</span>
          </button>
        </div>

      </main>

 


      

    
    </div>
  );
}