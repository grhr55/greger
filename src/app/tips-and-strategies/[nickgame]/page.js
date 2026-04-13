"use client";

import React, { useRef, useState, useEffect } from "react"; 
import { demogame } from "../demogame";
import { notFound } from "next/navigation";
import Image from "next/image";
import Hp from "../Hp";
import Link from "next/link";


import { 
  ChevronRight, 
  Zap, 
  Trophy, 
  Info, 
  Clock, 
  Target, 
  AlertTriangle,
  TrendingUp,
  LayoutGrid,
  BookOpen,
  CheckCircle2,
  MousePointer2
} from "lucide-react";

export default function Sovetgames({ params }) {
  const resolvedParams = React.use(params);
  const nickgame = resolvedParams.nickgame;
  const iframeRef = useRef(null);
  
  // Состояние для индикатора чтения
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const updateScroll = () => {
      const currentScroll = window.scrollY;
      const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
      setScrollProgress((currentScroll / scrollHeight) * 100);
    };
    window.addEventListener("scroll", updateScroll);
    return () => window.removeEventListener("scroll", updateScroll);
  }, []);

  const game = demogame.find((l) => l.nickgame.toLowerCase() === nickgame.toLowerCase());
  if (!game) return notFound();

  return (
    <div className="bg-[#020202] min-h-screen text-white pb-20 selection:bg-[#009739]/30 font-sans">
      <Hp />
      
      {/* Индикатор чтения сверху */}
      <div className="fixed top-0 left-0 w-full h-1 z-[100] bg-white/5">
        <div 
          className="h-full bg-[#009739] transition-all duration-150" 
          style={{ width: `${scrollProgress}%` }}
        ></div>
      </div>

      <main className="max-w-6xl mx-auto px-4 pt-16 relative z-10">
        
        {/* --- ВСТУПЛЕНИЕ (HERO) --- */}
        <header className="mb-16 border-b border-white/5 pb-12">
            <div className="flex flex-col md:flex-row items-center gap-8">
                <div className="relative w-32 h-32 md:w-48 md:h-48 shrink-0">
                    <div className="absolute inset-0 bg-[#FEDD00] blur-3xl opacity-20 animate-pulse"></div>
                    <img 
                      src={game.imggame} 
                      alt="Logo" 
                      className="relative z-10 object-cover w-full h-full rounded-[40px] border-2 border-white/10 shadow-2xl" 
                    />
                </div>
                <div className="text-center md:text-left">
                    <div className="flex flex-wrap justify-center md:justify-start gap-3 mb-6">
                        <span className="bg-[#009739]/10 text-[#009739] text-[10px] font-black px-4 py-1.5 rounded-full border border-[#009739]/20 uppercase tracking-widest flex items-center gap-2">
                            <CheckCircle2 size={12} /> Guia Verificado 2026
                        </span>
                        <span className="bg-white/5 text-zinc-400 text-[10px] font-black px-4 py-1.5 rounded-full border border-white/10 uppercase tracking-widest">
                            8 min de leitura
                        </span>
                    </div>
                    <h1 className="text-5xl md:text-8xl font-black uppercase italic tracking-tighter leading-[0.85] mb-4 text-transparent bg-clip-text bg-gradient-to-b from-white to-zinc-500">
                        {game.nickgame} <br />
                        <span className="text-[#FEDD00]">Estratégia Infalível</span>
                    </h1>
                    <p className="text-zinc-500 text-lg md:text-xl italic max-w-2xl">
                      Descubra como funciona o algoritmo da {game.razrab} e os minutos exatos que a máquina costuma liberar o bônus.
                    </p>
                </div>
            </div>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          
         
<div className="lg:col-span-2 space-y-16 text-white">

  {/* 1. ИНДИКАТОР АЛГОРИТМА (Live Status) - Динамический */}
  <section className="bg-[#0a0a0a] rounded-[40px] p-8 border border-green-500/20 relative overflow-hidden shadow-2xl">
    <div className="absolute top-0 right-0 p-6">
       <div className="flex items-center gap-2 bg-green-500/10 px-3 py-1 rounded-full border border-green-500/20">
          <div className="w-2 h-2 bg-green-500 rounded-full animate-ping"></div>
          <span className="text-[10px] font-bold text-green-500 uppercase tracking-widest">Análise em Tempo Real</span>
       </div>
    </div>
    
    <h3 className="text-xl font-black uppercase italic mb-8 flex items-center gap-3">
      <Zap className="text-[#FEDD00]" /> Status do Algoritmo {game.razrab}
    </h3>
    
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {/* Интенсивность */}
      <div className="bg-white/5 p-4 rounded-2xl border border-white/5">
        <p className="text-[9px] text-zinc-500 uppercase font-black mb-1 text-center">Frequência de Bônus</p>
        <div className="h-2 w-full bg-white/10 rounded-full overflow-hidden">
           <div 
             className="h-full bg-green-500 animate-pulse transition-all duration-1000" 
             style={{ width: game.strategy_status?.intensity || '50%' }}
           ></div>
        </div>
        <p className="text-center text-[10px] mt-2 font-bold text-green-500 italic">
          Alta Intensidade ({game.strategy_status?.intensity})
        </p>
      </div>
      
      {/* Объем выплат */}
      <div className="bg-white/5 p-4 rounded-2xl border border-white/5 text-center">
        <p className="text-[9px] text-zinc-500 uppercase font-black mb-1">Volume de Prêmios</p>
        <p className="text-xl font-black text-white italic">
          R$ {game.strategy_status?.payout_volume} <span className="text-[10px] text-zinc-500">/min</span>
        </p>
      </div>

      {/* Окно выплат */}
      <div className="bg-white/5 p-4 rounded-2xl border border-white/5 text-center">
        <p className="text-[9px] text-zinc-500 uppercase font-black mb-1">Próxima Janela (Hot)</p>
        <p className="text-xl font-black text-[#FEDD00] italic">
          Em {game.strategy_status?.hot_window} minutos
        </p>
      </div>
    </div>
  </section>

  {/* 2. ПОШАГОВАЯ ИНСТРУКЦИЯ (MAP) */}
  <section className="space-y-8">
    <div className="flex flex-col items-center md:items-start">
      <h2 className="text-3xl font-black uppercase italic tracking-tighter">
        O Método: <span className="text-[#FEDD00]">A Quebra do Ciclo</span>
      </h2>
      <div className="w-20 h-1 bg-[#009739] mt-2"></div>
    </div>

    <div className="relative space-y-4">
      {game.steps?.map((step, index) => (
        <div 
          key={index} 
          className={`group bg-[#0d0d0d] p-1 rounded-[40px] border border-white/5 transition-all duration-500 ${step.color}`}
        >
          <div className="flex flex-col md:flex-row gap-6 items-start">
            <div className="w-14 h-14 shrink-0 bg-white/5 text-white font-black flex items-center justify-center rounded-2xl border border-white/10 text-2xl italic group-hover:scale-110 transition-transform">
              0{index + 1}
            </div>
            <div>
              <h4 className="text-xl font-black uppercase italic mb-2 tracking-tight">
                {step.title}
              </h4>
              <p className="text-zinc-400 italic leading-relaxed">
                {/* Здесь мы можем подсветить важное слово, если оно есть в desc */}
                {step.desc.split(step.highlight).map((part, i, arr) => (
                  <React.Fragment key={i}>
                    {part}
                    {i !== arr.length - 1 && <span className="text-white font-bold">{step.highlight}</span>}
                  </React.Fragment>
                ))}
              </p>
            </div>
          </div>
        </div>
      ))}
    </div>
  </section>

  {/* 3. ВИЗУАЛЬНЫЕ СИГНАЛЫ (MAP) */}
  <section className="bg-[#111] p-10 rounded-[50px] border border-white/5 shadow-inner">
    <h3 className="text-2xl font-black uppercase italic mb-10 text-center">
      Sinais Visuais: <span className="text-[#FEDD00]">Aprenda a Ler a Tela</span>
    </h3>
    
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      {game.signals?.map((signal, idx) => (
        <div key={idx} className="flex gap-5 items-center p-4 bg-black/20 rounded-3xl border border-white/5 hover:bg-black/40 transition-colors">
          <div className="w-16 h-16 bg-black rounded-3xl border border-white/10 flex items-center justify-center text-3xl shadow-lg">
            {signal.icon}
          </div>
          <div>
            <h5 className="font-black uppercase italic text-[#009739]">{signal.title}</h5>
            <p className="text-xs text-zinc-500 italic leading-snug">{signal.desc}</p>
          </div>
        </div>
      ))}
    </div>
  </section>

  {/* 4. ТАБЛИЦА СТАВОК (Динамические значения на основе игры) */}
  <section className="bg-white/5 p-8 rounded-[40px] border border-white/10 relative overflow-hidden">
    <div className="flex items-center gap-3 mb-8">
        <Target className="text-[#009739]" />
        <h3 className="text-xl font-black uppercase italic leading-none">Gestão de Alavancagem</h3>
    </div>
    <div className="overflow-hidden rounded-3xl border border-white/5">
        <table className="w-full text-left">
            <thead className="bg-white/5 text-[10px] font-black uppercase tracking-widest text-zinc-500">
                <tr>
                    <th className="p-4">Banca Inicial</th>
                    <th className="p-4">Bet Sugerida</th>
                    <th className="p-4">Stop Loss</th>
                </tr>
            </thead>
            <tbody className="text-sm font-bold italic uppercase">
                <tr className="border-b border-white/5 hover:bg-white/[0.02]">
                    <td className="p-4 text-white">R$ 50,00</td>
                    <td className="p-4 text-[#FEDD00]">{game.apostamin} - R$ 1.50</td>
                    <td className="p-4 text-red-500">R$ 20,00</td>
                </tr>
                <tr className="hover:bg-white/[0.02]">
                    <td className="p-4 text-white">R$ 200,00</td>
                    <td className="p-4 text-[#FEDD00]">R$ 2.00 - R$ 5.00</td>
                    <td className="p-4 text-red-500">R$ 80,00</td>
                </tr>
            </tbody>
        </table>
    </div>
  </section>

</div>

          {/* ПРАВАЯ КОЛОНКА: ИНФО-КАРТОЧКИ */}
          <aside className="space-y-8 lg:sticky lg:top-24 h-fit">
            
            {/* КАРТОЧКА АВТОРА/ЭКСПЕРТА */}
            <div className="bg-[#111] p-8 rounded-[40px] border border-white/5">
                <h4 className="text-zinc-500 text-[10px] font-black uppercase tracking-[3px] mb-6">Análise Técnica</h4>
                <div className="space-y-5">
                    <div className="flex justify-between items-center">
                        <span className="text-zinc-400 italic text-sm">RTP Verificado</span>
                        <span className="text-lg font-black text-[#009739] italic">{game.rtp}</span>
                    </div>
                    <div className="flex justify-between items-center">
                        <span className="text-zinc-400 italic text-sm">Dificuldade</span>
                        <span className="text-lg font-black text-[#FEDD00] italic">{game.volatilidade}</span>
                    </div>
                    <div className="flex justify-between items-center">
                        <span className="text-zinc-400 italic text-sm">Provedor</span>
                        <span className="text-lg font-black text-white italic">{game.razrab}</span>
                    </div>
                </div>
                <div className="mt-8 pt-8 border-t border-white/5">
                    <div className="flex items-center gap-3">
                        <div className="w-10 h-10 bg-[#009739] rounded-full flex items-center justify-center font-black">AI</div>
                        <div>
                            <p className="text-[10px] font-black text-white uppercase italic">Analisado por</p>
                            <p className="text-xs text-zinc-500 italic font-bold">Predictor Bot 2.0</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* БЛОК ПРЕДУПРЕЖДЕНИЯ */}
            <div className="bg-red-600/5 p-8 rounded-[40px] border border-red-600/20">
                <AlertTriangle className="text-red-600 mb-4" size={32} />
                <h4 className="text-red-600 font-black uppercase italic text-sm mb-2">Jogo Responsável</h4>
                <p className="text-zinc-500 text-[11px] italic leading-relaxed">
                    Este guia é puramente informativo e baseado em estatísticas de jogo demo. 
                    Nunca aposte dinheiro que você não pode perder. A PG Soft utiliza RNG e 
                    resultados passados não garantem ganhos futuros.
                </p>
            </div>

            {/* CTA КНОПКА */}
            <a href="#" className="flex flex-col items-center justify-center p-8 bg-[#FEDD00] rounded-[40px] text-black hover:scale-[1.02] transition-transform shadow-2xl group">
                <Trophy size={40} className="mb-4" />
                <span className="font-black uppercase italic text-2xl leading-none text-center">Jogar Pra <br /> Valer</span>
                <ChevronRight className="mt-4 group-hover:translate-x-2 transition-transform" />
            </a>
          </aside>
        </div>

        {/* СЕКЦИЯ ДРУГИХ ИГР */}
        <section className="mt-32 pt-20 border-t border-white/5">
            <h2 className="text-3xl font-black uppercase italic mb-12 text-center">Outras <span className="text-[#FEDD00]">Estratégias</span> Populares</h2>
            {/* Тут будет твой маппинг других игр из demogame */}
        </section>

      </main>

         <div className="fixed bottom-0 left-0 w-full h-1.5 flex z-[100] shadow-[0_-5px_25px_rgba(0,151,57,0.4)]">
        <div className="flex-[3] bg-[#009739]"></div>
        <div className="flex-[3] bg-[#FEDD00]"></div>
        
      </div>

    </div>
  );
}