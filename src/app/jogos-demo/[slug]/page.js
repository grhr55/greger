"use client";

import React, { useRef } from "react"; 
import { demogame } from "../demogame";
import { notFound } from "next/navigation";
import Image from "next/image";
import Hp from "./Hp";
import Link from "next/link";
import leaders from './datapartnes'



import { ChevronRight, Maximize2, Smartphone, Zap, Trophy,  Info, DollarSign ,Star } from "lucide-react";

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
    <div className="bg-[#020202] min-h-screen text-white pb-24 selection:bg-[#009739]/30 font-sans overflow-x-hidden">
      <Hp />
      
      
      <div className="fixed top-0 left-1/2 -translate-x-1/2 w-full h-[600px] bg-[#009739]/5 blur-[140px] pointer-events-none z-0"></div>
      
      <main className="max-w-6xl mx-auto px-4 pt-6 relative z-10">
        
        {/* --- HEADER --- */}
        <header className="flex flex-col md:flex-row items-center justify-between mb-8 bg-[#0a0a0a] p-4 md:p-6 rounded-[35px] border border-white/5 shadow-2xl">
          <div className="flex items-center gap-4 md:gap-6 w-full md:w-auto">
            <div className="relative w-20 h-20 md:w-24 md:h-24 shrink-0 p-1 bg-gradient-to-br from-[#FEDD00] to-[#009739] rounded-3xl shadow-lg">
                <img src={game.imggame} alt={game.nickgame} className="object-cover w-full h-full rounded-[20px]" />
            </div>
            <div>
                <div className="flex items-center gap-2 mb-1">
                    <span className="bg-[#009739] text-[8px] md:text-[10px] font-black px-2 py-0.5 rounded text-white uppercase italic">Oficial Brasil</span>
                    <span className="bg-white/10 text-zinc-400 text-[8px] md:text-[10px] font-black px-2 py-0.5 rounded uppercase tracking-widest">RNG Verificado</span>
                </div>
                <h1 className="text-3xl md:text-5xl font-black uppercase italic tracking-tighter leading-none">
                  {game.nickgame}
                </h1>
                <p className="text-[#FEDD00] text-xs md:text-sm font-bold uppercase italic opacity-80 mt-1">{game.razrab}</p>
            </div>
          </div>
          
          <button 
            onClick={toggleFullScreen}
            className="hidden md:flex items-center gap-3 bg-[#FEDD00] hover:bg-white text-black px-6 py-4 rounded-2xl font-black uppercase italic text-sm transition-all shadow-[0_10px_30px_rgba(254,221,0,0.3)] active:scale-95"
          >
            <Maximize2 size={18} /> 
            <span>Tela Cheia</span>
          </button>
        </header>

        {/* --- ТЕРМИНАЛ ИГРЫ --- */}
        <section className="relative w-full flex justify-center bg-[#050505] rounded-[40px] md:rounded-[60px] overflow-hidden border-[4px] md:border-[8px] border-[#111] shadow-2xl">
          <div className="w-full aspect-[9/16] md:aspect-video relative">
            <iframe 
              ref={iframeRef}
              src={game.gamedemo}
              className="absolute inset-0 w-full h-full border-none"
              allow="autoplay; fullscreen" 
            />
          </div>
          
          {/* Кнопка Fullscreen для мобилок поверх игры */}
          <button onClick={toggleFullScreen} className="md:hidden absolute bottom-4 right-4 bg-black/80 p-3 rounded-full border border-white/20">
            <Maximize2 size={20} />
          </button>

          <div className="absolute top-6 left-6 flex items-center gap-2 bg-black/60 backdrop-blur-xl px-4 py-2 rounded-full border border-white/10">
             <div className="w-2 h-2 bg-[#009739] rounded-full animate-ping"></div>
             <span className="text-[10px] font-black text-white uppercase tracking-[2px]">Demo Ativo</span>
          </div>
        </section>

        {/* --- КОНТЕНТНАЯ СЕТКА --- */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mt-12">
          
          {/* ЛЕВАЯ ЧАСТЬ (ОПИСАНИЕ И ТТХ) */}
          <div className="lg:col-span-8 space-y-8">
            <div className="bg-[#0a0a0a] p-8 md:p-12 rounded-[50px] border border-white/5 relative overflow-hidden group">
               <div className="relative z-10">
                  <h2 className="text-3xl font-black uppercase italic mb-6 flex items-center gap-3">
                     <Zap className="text-[#FEDD00] fill-[#FEDD00]" size={28} /> Veredito do Expert
                  </h2>
                  <p className="text-zinc-400 text-lg md:text-2xl italic leading-relaxed mb-10">
                    "{game.settinggame}" <span className="text-white font-bold">{game.veredito}</span>
                  </p>

                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    <div className="bg-white/5 p-5 rounded-3xl border border-white/5 text-center">
                        <p className="text-[9px] font-black text-zinc-500 uppercase mb-2">RTP Oficial</p>
                        <p className="text-2xl font-black text-[#009739] italic">{game.rtp}</p>
                    </div>
                    <div className="bg-white/5 p-5 rounded-3xl border border-white/5 text-center">
                        <p className="text-[9px] font-black text-zinc-500 uppercase mb-2">Max Win</p>
                        <p className="text-2xl font-black text-[#FEDD00] italic">{game.maxwin}</p>
                    </div>
                    <div className="bg-white/5 p-5 rounded-3xl border border-white/5 text-center">
                        <p className="text-[9px] font-black text-zinc-500 uppercase mb-2">Volatilidade</p>
                        <p className="text-xl font-black text-white italic">{game.volatilidade}</p>
                    </div>
                    <div className="bg-white/5 p-5 rounded-3xl border border-white/5 text-center flex flex-col items-center justify-center">
                        <Smartphone size={20} className="text-[#009739] mb-1" />
                        <p className="text-[10px] font-black text-white uppercase italic">Mobile OK</p>
                    </div>
                  </div>
               </div>
            </div>

            {/* Доп инфо блок */}
            <div className="bg-gradient-to-r from-[#009739]/10 to-transparent p-8 rounded-[40px] border-l-4 border-[#009739] flex flex-col md:flex-row justify-between items-center gap-6">
                <div>
                    <h3 className="text-zinc-500 text-[10px] font-black uppercase tracking-[3px] mb-2">Melhor Símbolo</h3>
                    <p className="text-3xl font-black uppercase italic text-white flex items-center gap-3">
                        <DollarSign className="text-[#FEDD00]" /> {game.topSymbol}
                    </p>
                </div>
                <div className="text-center md:text-right">
                    <h3 className="text-zinc-500 text-[10px] font-black uppercase tracking-[3px] mb-2">Provedor</h3>
                    <p className="text-xl font-black uppercase italic text-zinc-300">{game.razrab}</p>
                </div>
            </div>
          </div>

          {/* ПРАВАЯ ЧАСТЬ (SIDEBAR) */}
          <aside className="lg:col-span-4 space-y-6">
            <div className="bg-[#111] p-8 rounded-[50px] border border-white/5 shadow-2xl relative overflow-hidden">
               <div className="absolute top-0 right-0 p-6 opacity-10">
                  <Trophy size={80} />
               </div>
               
               <h4 className="text-2xl font-black uppercase italic mb-6 leading-none">
                 Onde Jogar <br /> <span className="text-[#FEDD00]">Real</span>
               </h4>
               
               <div className="space-y-4">
                {leaders.map((item, index) => (
                  <div key={item.id} className="bg-black/40 border border-white/5 rounded-3xl p-5 hover:border-green-500/50 transition-all">
                    <div className="flex items-center gap-4 mb-4">
                        <img src={item.logo} alt={item.title} className="h-8 object-contain" />
                        <div className="flex text-[#FEDD00] text-[10px]">
                           {"★".repeat(5)}
                        </div>
                    </div>
                    <p className="text-lg font-black text-white italic mb-4 leading-none">{item.bonus}</p>
                    <a href="#" className="flex items-center justify-center gap-2 bg-[#009739] hover:bg-[#FEDD00] hover:text-black text-white w-full py-4 rounded-2xl font-black uppercase italic text-xs transition-all">
                        Jogar Agora <ChevronRight size={16} />
                    </a>
                  </div>
                ))}
               </div>
            </div>

            {/* Dica do Especialista */}
            <div className="bg-white/5 p-8 rounded-[40px] border border-white/5 group">
                <div className="flex items-center gap-2 mb-4 text-[#FEDD00]">
                    <Info size={20} />
                    <h4 className="text-xs font-black uppercase italic">Dica Pro</h4>
                </div>
                <p className="text-zinc-400 italic text-sm leading-relaxed mb-6">
                   "{game.fiagame}"
                </p>
                <div className="bg-black/50 p-4 rounded-2xl border border-green-500/20 group-hover:border-green-500/50 transition-colors">
                    <p className="text-green-500 font-black text-[9px] uppercase tracking-widest mb-1">Algoritmo Verificado:</p>
                    <p className="text-white text-[11px] font-bold italic">{game.tip}</p>
                </div>
            </div>
          </aside>
        </div>

        {/* --- МАППИНГ ДРУГИХ ИГР (2 КОЛОНКИ НА ТЕЛЕФОНЕ) --- */}
        <section className="mt-24">
          <div className="flex flex-col items-center mb-16">
            <h2 className="text-4xl md:text-6xl font-black uppercase italic tracking-tighter text-white text-center">
              Mais <span className="text-[#FEDD00]">Populares</span>
            </h2>
            <div className="w-24 h-1.5 bg-[#009739] mt-4 rounded-full"></div>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-8">
            {demogame.map((game) => (
              <Link 
                key={game.id} 
                href={`/jogos-demo/${game.slug}`} 
                className="group relative bg-[#0a0a0a] border border-white/5 rounded-[30px] md:rounded-[45px] overflow-hidden hover:border-[#009739]/50 transition-all duration-500 shadow-2xl"
              >
                <div className="relative aspect-[4/5] overflow-hidden">
                  <Image
                    src={game.imggame}
                    alt={game.titlegame}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-transparent to-transparent opacity-80"></div>
                  
                  {/* Play Icon */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all z-20">
                     <div className="bg-[#FEDD00] p-4 rounded-full text-black shadow-2xl">
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                          <path d="M8 5v14l11-7z" />
                        </svg>
                     </div>
                  </div>
                </div>

                <div className="p-4 md:p-6 text-center md:text-left">
                  <h5 className="text-sm md:text-xl font-black uppercase italic text-white group-hover:text-[#FEDD00] transition-colors truncate">
                    {game.titlegame}
                  </h5>
                  <div className="mt-2 md:mt-4 flex items-center justify-between">
                     <span className="text-[8px] md:text-[10px] text-zinc-500 font-black uppercase tracking-widest">{game.razrab}</span>
                     <span className="hidden md:block text-[9px] font-black uppercase italic text-green-500">Demo Free</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </section>
      </main>

       <div className="fixed bottom-0 left-0 w-full h-1.5 flex z-[100] shadow-[0_-5px_25px_rgba(0,151,57,0.4)]">
        <div className="flex-[3] bg-[#009739]"></div>
        <div className="flex-[3] bg-[#FEDD00]"></div>
        
      </div>
    </div>
  );
}