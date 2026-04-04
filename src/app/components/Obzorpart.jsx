"use client";
import { useState } from "react";
import Image from "next/image";
import { leaders } from './datapartnes';
import Sravnevs from './Sravnevpartnes'

export default function Obzornik() {
  const [expanded, setExpanded] = useState({});

  const toggle = (id, e) => {
    e.preventDefault();
    setExpanded(prev => ({ ...prev, [id]: !prev[id] }));
  };

  return (
    <section className="bg-[#122913] py-16 px-6 min-h-screen">
      <div className="max-w-6xl mx-auto">
        
        <div className="mb-16 text-center">
          <h2 className="text-3xl md:text-5xl font-black text-white uppercase tracking-tighter mb-4 italic">
            Conheça os <span className="text-green-500">3 Gigantes</span> do Mercado
          </h2>
          <p className="text-zinc-400 max-w-2xl mx-auto text-lg leading-relaxed">
            Realizamos uma análise detalhada das plataformas que dominarão o Brasil em 2026. Segurança, velocidade e bônus reais são os principais diferenciais da PIX. Você pode encontrar informações completas sobre as empresas clicando no nome abaixo.
          </p>
          <div className="mt-4 flex justify-center gap-1">
            <div className="w-16 h-1 bg-green-600"></div>
            <div className="w-16 h-1 bg-yellow-400"></div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {leaders.map((leader) => (
            <a
              key={leader.id}
              href={`/${leader.title}`}
              className={`bg-[#121212] border p-8 rounded-3xl transition-all duration-300 hover:scale-[1.03] hover:-translate-y-2 flex flex-col justify-between ${leader.cardStyle}`}
            >
              <div>
                <div className="mb-10 flex justify-center md:justify-start items-center h-25">
                  <Image
                    src={leader.logo}
                    alt={`Logo ${leader.title}`}
                    width={180}
                    height={50}
                    priority
                    className={`object-contain transition-all duration-300 ${leader.logoStyle}`}
                  />
                </div>
                
                <h3 className="text-2xl font-black text-white mb-4 tracking-tight uppercase">
                  {leader.title}
                </h3>

                {/* Текст с обрезкой */}
                <div className="relative mb-6">
                  <p className={`text-zinc-400 text-[16px] leading-6 transition-all duration-300 overflow-hidden`}>
                    {leader.bernd}
                  </p>

                

              
                </div>
              </div>

              <div className="mt-auto">
                <div className="bg-white/5 p-4 rounded-xl border border-white/10 flex items-center gap-3">
                  <span className="text-yellow-400 text-lg flex-shrink-0">⭐</span>
                  <div>
                    <p className="text-zinc-500 text-[10px] uppercase font-bold">Destaque Principal:</p>
                    <p className="text-white font-bold text-sm text-green-400">{leader.bonus}</p>
                  </div>
                </div>
              </div>
            </a>
          ))}
        </div>

      </div>
       <Sravnevs/>
    </section>
  );
}