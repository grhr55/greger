"use client";
import { useState } from "react";
import Image from "next/image";


export default function Hp() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
        <header className="w-full bg-[#0a0a0a] border-b-2 border-green-600 shadow-[0_4px_20px_rgba(0,168,89,0.2)] sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 h-[150px] flex items-center justify-between">
        
        {/* Логотип */}
        <div className="flex-shrink-0 z-50">
        <Image
            src="/img/unnamed-removebg-preview.png"
            alt="Logo"
            width={150}
            height={40}
            className="drop-shadow-[0_0_8px_rgba(255,215,0,0.3)]"
        />
        </div>
        <nav className="hidden md:flex items-center gap-8 text-amber-50 font-bold text-[14px]">
          <a href="#" className="hover:text-green-500 transition-colors uppercase tracking-tighter">Categorias</a>
          <a href="#" className="hover:text-green-500 transition-colors uppercase tracking-tighter">Jogos Demo</a>
          <a href="#" className="hover:text-green-500 transition-colors uppercase tracking-tighter">Dicas e estratégias</a>
    
          <a 
            href="#" 
            className="bg-gradient-to-r from-yellow-400 to-amber-500 hover:from-green-500 hover:to-green-600 text-black px-6 py-2 rounded-md font-black transition-all shadow-[0_0_15px_rgba(251,191,36,0.4)] uppercase"
          >
            Cassinos com PIX
          </a>
       
        </nav>

        
        <div className="md:hidden z-50">
          <button 
            onClick={() => setIsOpen(!isOpen)}
            className="p-2 text-yellow-400 focus:outline-none"
          >
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M4 6h16M4 12h16m-7 6h7" />
              )}
            </svg>
          </button>
        </div>

        {/* Мобильное меню (Выезжающее) */}
<div className={`
  fixed top-0 left-0 w-full h-screen bg-[#050505] transform transition-all duration-500 ease-[cubic-bezier(0.85,0,0.15,1)] z-[100]
  flex flex-col justify-between overflow-hidden
  ${isOpen ? "translate-x-0" : "translate-x-full"}
`}>
  
  {/* Фоновые "энергетические" круги (Стиль Бразилии) */}
  <div className="absolute top-[-10%] left-[-10%] w-[300px] h-[300px] bg-green-600/10 blur-[100px] rounded-full"></div>
  <div className="absolute bottom-[10%] right-[-10%] w-[250px] h-[250px] bg-blue-600/10 blur-[80px] rounded-full"></div>

  {/* Хедер внутри меню для закрытия */}
  <div className="flex justify-between items-center px-6 py-8">
    <Image src="/img/unnamed-removebg-preview.png" alt="Logo" width={120} height={30} className="brightness-110" />
    <button onClick={() => setIsOpen(false)} className="text-white bg-white/5 p-3 rounded-full border border-white/10 active:scale-90 transition-transform">
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
        </svg>
    </button>
  </div>

  {/* Основная навигация */}
  <nav className="flex flex-col gap-3 px-6 relative z-10">
    <p className="text-zinc-500 text-[11px] uppercase font-bold tracking-[3px] mb-2 ml-2">Navegação</p>
    
    <a onClick={() => setIsOpen(false)} href="#" className="flex items-center justify-between bg-white/5 p-5 rounded-2xl border border-white/5 active:bg-white/10 transition-all group">
      <span className="text-white text-xl font-bold tracking-tight">Categorias</span>
      <span className="text-green-500 group-hover:translate-x-1 transition-transform">→</span>
    </a>

    <a onClick={() => setIsOpen(false)} href="#" className="flex items-center justify-between bg-white/5 p-5 rounded-2xl border border-white/5 active:bg-white/10 transition-all group">
      <span className="text-white text-xl font-bold tracking-tight">Jogos Demo</span>
      <span className="text-green-500 group-hover:translate-x-1 transition-transform">→</span>
    </a>

    <a onClick={() => setIsOpen(false)} href="#" className="flex items-center justify-between bg-white/5 p-5 rounded-2xl border border-white/5 active:bg-white/10 transition-all group">
      <span className="text-white text-xl font-bold tracking-tight">Dicas e Estratégias</span>
      <span className="text-green-500 group-hover:translate-x-1 transition-transform">→</span>
    </a>
  </nav>

  {/* Нижний блок с главной кнопкой (PIX) */}
  <div className="p-6 bg-white/[0.02] border-t border-white/5 backdrop-blur-sm">
    <a 
      onClick={() => setIsOpen(false)}
      href="#" 
      className="relative flex items-center justify-center w-full bg-gradient-to-r from-[#fbff00] to-[#00ff40] p-5 rounded-2xl text-black font-black text-lg uppercase italic tracking-tighter shadow-[0_10px_40px_rgba(0,255,64,0.3)] active:scale-[0.98] transition-all"
    >
      <span>🚀 Cassinos com PIX</span>
      <div className="absolute inset-0 rounded-2xl bg-white/20 animate-pulse pointer-events-none"></div>
    </a>

    {/* Флаг Бразилии (Минимализм) */}
    <div className="mt-8 flex items-center justify-center gap-4">
      <div className="h-1 flex-1 bg-gradient-to-r from-transparent to-green-600 rounded-full"></div>
      <div className="flex gap-1.5">
        <div className="w-2 h-2 bg-green-500 rounded-full"></div>
        <div className="w-2 h-2 bg-yellow-400 rounded-full"></div>
        <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
      </div>
      <div className="h-1 flex-1 bg-gradient-to-l from-transparent to-blue-600 rounded-full"></div>
    </div>
    <p className="text-center text-[10px] text-zinc-600 font-bold uppercase tracking-[5px] mt-4">Top 3 Brasil</p>
  </div>
</div>

      </div>
    </header>
    </div>
  );
}