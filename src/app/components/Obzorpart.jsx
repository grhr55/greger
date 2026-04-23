"use client";
import { useState } from "react";
import Image from "next/image";
import { leaders } from './datapartnes';
import Sravnevs from './Sravnevpartnes';

export default function Obzornik() {
  const [expanded, setExpanded] = useState({});

  return (
    <section className="bg-[#061409]   min-h-screen selection:bg-green-500/30 overflow-hidden relative">
      
      {/* Background Orbs para profundidade */}
      <div className="absolute top-[10%] left-[-10%] w-[500px] h-[500px] bg-green-600/10 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-[20%] right-[-10%] w-[400px] h-[400px] bg-blue-600/10 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-6xl mx-auto relative z-10">
        
        {/* --- HEADER --- */}
        <div className="my-20 max-[500px]:my-10 text-center">
          <div className="inline-block bg-green-500/10 text-green-500 text-[10px] font-black uppercase tracking-[5px] px-4 py-2 rounded-full mb-6 border border-green-500/20">
            Análise Especializada 2026
          </div>
          <h2 className="text-4xl md:text-7xl font-black text-white uppercase tracking-tighter mb-6 italic leading-none">
            Conheça os <span className="text-green-500 drop-shadow-[0_0_15px_rgba(34,197,94,0.4)]">3 Gigantes</span>
          </h2>
          <p className="text-zinc-400 max-w-3xl mx-auto text-sm md:text-lg leading-relaxed font-medium">
            Analisamos segurança, velocidade de saque e bônus reais. Estas plataformas dominam o mercado brasileiro com tecnologia de ponta e <span className="text-white border-b border-green-500/50">processamento PIX instantâneo.</span>
          </p>
          
          <div className="mt-8 flex justify-center items-center gap-3">
            <div className="h-[2px] w-12 bg-gradient-to-r from-transparent to-green-600"></div>
            <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
            <div className="h-[2px] w-12 bg-gradient-to-l from-transparent to-green-600"></div>
          </div>
        </div>

        {/* --- CARDS GRID --- */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 ">
          {leaders.map((leader) => (
            <a
              key={leader.id}
              href={`/${leader.title}`}
              className="group relative bg-white/[0.03] border border-white/5 p-8 rounded-[40px] transition-all duration-500 hover:bg-white/[0.06] hover:-translate-y-3 flex flex-col backdrop-blur-md overflow-hidden"
            >
              {/* Card Hover Glow */}
              <div className="absolute inset-0 bg-gradient-to-b from-green-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              <div className="relative z-10">
                {/* Logo Container */}
                <div className="mb-10 flex justify-center items-center h-24 bg-black/40 rounded-3xl border border-white/5 group-hover:border-green-500/30 transition-colors shadow-inner p-6">
                  <Image
                    src={leader.logo}
                    alt={`Logo ${leader.title}`}
                    width={180}
                    height={60}
                    priority
                    className="object-contain transform group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                
                <div className="flex items-center gap-2 mb-4">
                   <div className="w-2 h-2 rounded-full bg-green-500"></div>
                   <h3 className="text-2xl font-black text-white tracking-tight uppercase italic">
                    {leader.title}
                  </h3>
                </div>

                <p className="text-zinc-400 text-sm leading-6 mb-8 line-clamp-4 group-hover:text-zinc-300 transition-colors font-medium">
                  {leader.bernd}
                </p>
              </div>

              {/* Destaque / Bonus Section */}
              <div className="mt-auto relative z-10">
                <div className="bg-black/60 p-5 rounded-[24px] border border-white/10 group-hover:border-green-500/20 transition-all">
                  <div className="flex items-center gap-3">
                    <div className="bg-yellow-400/10 p-2 rounded-lg">
                      <span className="text-yellow-400 text-xl block leading-none">⭐</span>
                    </div>
                    <div>
                      <p className="text-zinc-500 text-[10px] uppercase font-black tracking-widest">Destaque de Elite</p>
                      <p className="text-green-400 font-black text-sm uppercase italic tracking-tight leading-tight mt-1">
                        {leader.bonus}
                      </p>
                    </div>
                  </div>
                </div>
                
                <div className="mt-4 flex justify-center">
                   <span className="text-[10px] text-zinc-600 font-bold uppercase tracking-[2px] group-hover:text-white transition-colors">
                     Ver Review Completo →
                   </span>
                </div>
              </div>
            </a>
          ))}
        </div>

       
        <div className="pt-10">
          <Sravnevs />
        </div>

      </div>
    </section>
  );
}