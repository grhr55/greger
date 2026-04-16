"use client";
import React from 'react';
export default function Futer() {
  return (
    <footer className="bg-[#080808] border-t border-white/5 pt-16 mt-20 relative overflow-hidden">
      {/* Декоративная тонкая линия сверху (зелено-желтая) */}
      <div className="absolute top-0 left-0 w-full h-[2px] flex">
        <div className="w-1/2 h-full bg-[#009739]"></div>
        <div className="w-1/2 h-full bg-[#FEDD00]"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16 text-center md:text-left">
          
          {/* 1. БРЕНД И МИССИЯ */}
          <div className="col-span-1 md:col-span-1">
            <h2 className="text-3xl font-black italic uppercase tracking-tighter text-white mb-3">
              Сassino do <span className="text-[#FEDD00]">Tigre</span>
            </h2>
            <p className="text-zinc-500 text-xs font-semibold leading-relaxed uppercase italic tracking-wider max-w-xs mx-auto md:mx-0">
              A maior e mais confiável plataforma de slots demonstrativos do Brasil. Diversão garantida, sem riscos.
            </p>
          </div>

          {/* 2. ОПЛАТА (PIX И КРИПТА) — СТАТУС */}
          <div className="col-span-1 flex flex-col items-center">
             <h4 className="text-[11px] font-black uppercase tracking-[3px] text-zinc-300 mb-6">Pagamentos Instantâneos</h4>
             <div className="flex items-center gap-5 bg-white/5 p-4 rounded-2xl border border-white/10 shadow-inner">
                <img 
                  src="https://logopng.com.br/logos/pix-106.png" 
                  alt="PIX" 
                  className="h-7 opacity-90"
                />
                <div className="w-[1px] h-8 bg-white/10"></div>
                <div className="flex items-center gap-1.5 text-white font-bold text-sm hover:text-[#FEDD00] transition-colors">
                   <span className="text-lg">₿</span> Crypto
                </div>
             </div>
          </div>

          {/* 3. НАВИГАЦИЯ (МЕНЮ) */}
          <div className="col-span-1 flex flex-col items-center">
             <h4 className="text-[11px] font-black uppercase tracking-[3px] text-zinc-300 mb-6">Explorar</h4>
             <ul className="space-y-3 text-sm font-bold text-zinc-400 uppercase italic tracking-tight">
                <li><a href="#" className="hover:text-white transition-colors">Populares</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Lançamentos</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Crash Games</a></li>
             </ul>
          </div>

          {/* 4. СОЦСЕТИ И КОМЬЮНИТИ */}
          <div className="col-span-1 flex flex-col items-center md:items-end">
             <h4 className="text-[11px] font-black uppercase tracking-[3px] text-zinc-300 mb-6">Nossa Comunidade</h4>
             <div className="flex gap-4">
                <a href="#" className="p-3.5 bg-white/5 rounded-full border border-white/10 hover:bg-[#FEDD00] hover:text-black hover:-translate-y-1 transition-all">
                 
                </a>
                <a href="#" className="p-3.5 bg-white/5 rounded-full border border-white/10 hover:bg-[#FEDD00] hover:text-black hover:-translate-y-1 transition-all">
                  
                </a>
             </div>
          </div>
        </div>

        {/* --- СЕКЦИЯ ОТВЕТСТВЕННОЙ ИГРЫ (ЗОЛОТАЯ И ЧИСТАЯ) --- */}
        <div className="border-y border-white/5 py-12 flex flex-col items-center text-center bg-white/[0.01] rounded-3xl shadow-2xl mb-12">
           <div className="flex items-center gap-8 mb-8">
              {/* Значок 18+ — Крупно и Красиво */}
              <div className="w-16 h-16 rounded-xl border-4 border-red-600 flex items-center justify-center text-red-600 font-black text-3xl shadow-[0_0_20px_rgba(220,38,38,0.3)]">
                18+
              </div>
              {/* Сертификаты безопасности */}
             
           </div>
           
           {/* Официальный дисклеймер — КАПСОМ */}
           <p className="max-w-3xl text-[10px] font-bold text-zinc-600 uppercase leading-relaxed tracking-wider italic px-4">
              ATENÇÃO: ESTE SITE DISPONIBILIZA APENAS VERSÕES DEMO (GRATUITAS) DOS JOGOS. NÃO É POSSÍVEL REALIZAR APOSTAS COM DINHEIRO REAL OU OBTER GANHOS FINANCEIROS. O OBJETIVO É EXCLUSIVAMENTE O ENTRETENIMENTO. JOGUE COM RESPONSABILIDADE. SE VOCÊ OU ALGUÉM QUE VOCÊ CONHECE TEM PROBLEMAS COM JOGO, PROCURE AJUDA.
           </p>
        </div>

        {/* --- ПОДПИСЬ И ПОЛИТИКА --- */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-5 text-[10px] font-black text-zinc-500 uppercase tracking-widest text-center md:text-left">
          <p>
             © 2026 Сassino do Tigre. TODOS OS DIREITOS RESERVADOS.
          </p>
          <div className="flex gap-6">
             <a href="#" className="hover:text-white transition-colors underline">Termos</a>
             <a href="#" className="hover:text-white transition-colors underline">Privacidade</a>
          </div>
        </div>
      </div>
    </footer>
  );
}