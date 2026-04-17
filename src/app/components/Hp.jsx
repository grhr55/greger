"use client";
import { useState } from "react";
import Image from "next/image";
import leaders from './datapartnes'
// Импортируем иконки для выпадающего меню
import { ChevronDown, MessageSquare, Zap } from "lucide-react";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [isBonusOpen, setIsBonusOpen] = useState(false);

  return (
    <div>
      <header className="w-full h-auto bg-[#0d1e0b] border-b-2 pt-[20px] pb-[20px] border-green-600 shadow-[0_4px_20px_rgba(0,168,89,0.2)] sticky top-0 z-50">
        <div className="max-w-6xl mx-auto px-4 h-[150px] max-[500px]:h-[100px] flex items-center justify-between">
         
          <div className="flex-shrink-0 z-50">
            <Image
              src="/img/unnamed-removebg-preview.png"
              alt="Logo"
              width={150}
              height={40}
              className="drop-shadow-[0_0_8px_rgba(255,215,0,0.3)] max-[500px]:h-[150px] max-[500px]:w-[120px]   h-[180px] w-[150px]"
            />
          </div>

      <nav className="hidden md:flex items-center gap-8 text-amber-50 font-bold text-[14px]">
       
      
     
     
       {/* 2. BÔNUS (ПАРТНЕРЫ С ИХ БОНУСАМИ) */}
       <div className="relative group py-4">
         <button className="flex items-center gap-1 hover:text-green-500 transition-colors uppercase tracking-tighter font-black italic cursor-pointer text-green-500">
           Bônus
           <ChevronDown size={14} className="group-hover:rotate-180 transition-transform duration-300" />
         </button>
         <div className="absolute top-full left-1/2 -translate-x-1/2 mt-0 w-72 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50 pt-4">
           <div className="bg-[#0a0a0a] border border-green-500/20 rounded-2xl p-3 shadow-[0_10px_50px_rgba(0,168,89,0.3)] backdrop-blur-xl">
             <p className="text-[9px] text-zinc-500 font-black uppercase tracking-[2px] mb-3 ml-2 italic text-left">Melhores Ofertas</p>
             <div className="flex flex-col gap-2">
               {leaders.slice(0, 3).map((leader) => (
                 <a key={leader.id} href={`/bonus/${leader.title}`} className="flex items-center justify-between p-3 bg-white/5 hover:bg-green-500/10 border border-white/5 hover:border-green-500/30 rounded-xl transition-all group/partner">
                   <div className="flex items-center gap-3">
                     <div className="w-10 h-10 bg-black rounded-lg flex items-center justify-center p-1.5 border border-white/10 group-hover/partner:border-green-500/50">
                       <img src={leader.logo} alt={leader.title} className="w-full h-full object-contain" />
                     </div>
                     <div className="flex flex-col text-left">
                       <span className="text-white text-[12px] font-black uppercase italic leading-none mb-1">{leader.title}</span>
                       <span className="text-green-500 text-[10px] font-bold tracking-tighter uppercase leading-none">{leader.bonus}</span>
                     </div>
                   </div>
                 </a>
               ))}
             </div>
           </div>
         </div>
       </div>
     
      
     
       <a href="/slots" className="hover:text-green-500 transition-colors uppercase tracking-tighter italic">Slots</a>
       <a href="/tips-and-strategies" className="hover:text-green-500 transition-colors uppercase tracking-tighter italic">Dicas e estratégias</a>
       <a href="/about-us" className="hover:text-green-500 transition-colors uppercase tracking-tighter italic">Sobre nós</a>
     
       <a 
         href="/cassinos-com-pix" 
         className="bg-gradient-to-r from-yellow-400 to-amber-500 hover:from-green-500 hover:to-green-600 text-black px-6 py-2 rounded-md font-black transition-all shadow-[0_0_15px_rgba(251,191,36,0.4)] uppercase italic"
       >
         Cassinos com PIX
       </a>
     </nav>


          {/* Бургер для мобилок */}
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

        
       <div className={`
  fixed top-0 left-0 w-full h-[100dvh] bg-[#050505] transform transition-all duration-500 ease-[cubic-bezier(0.85,0,0.15,1)] z-[100]
  flex flex-col overflow-y-auto overscroll-contain
  ${isOpen ? "translate-x-0" : "translate-x-full"}
`}>
            
        

            <div className="flex justify-between items-center px-6 py-8">
              <Image src="/img/unnamed-removebg-preview.png" alt="Logo" width={120} height={30} className="brightness-110" />
              <button onClick={() => setIsOpen(false)} className="text-white bg-white/5 p-3 rounded-full border border-white/10 active:scale-90 transition-transform">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
              </button>
            </div>

            <nav className="flex flex-col gap-3 px-6 relative z-10">
              <p className="text-zinc-500 text-[11px] uppercase font-bold tracking-[3px] mb-2 ml-2">Navegação</p>
              
          
  
  {/* CATEGORIA BÔNUS MOBILE */}
  <div className="flex flex-col ">
 
       <button 
      onClick={() => setIsBonusOpen(!isBonusOpen)} 
      className={`flex items-center justify-between p-5 rounded-2xl border transition-all ${isBonusOpen ? 'bg-green-500/10 border-green-500/30' : 'bg-white/5 border-white/5'}`}
    >
      <span className="text-white text-xl font-bold tracking-tight italic">Bônus</span>
      <span className={`text-green-500 transition-transform duration-300 ${isBonusOpen ? 'rotate-180' : ''}`}>
        <ChevronDown size={24} />
      </span>
    </button>

    {/* LISTA DE BÔNUS (EXIBIDA AO CLICAR) */}
    <div className={`flex flex-col gap-2 overflow-hidden mt-2 transition-all duration-300 ${isBonusOpen ? 'max-h-[400px] opacity-100 mb-4' : 'max-h-0 opacity-0'}`}>
      {leaders.slice(0, 3).map((leader) => (
        <a 
          key={leader.id} 
          href={`/bonus/${leader.title}`} 
          onClick={() => setIsOpen(false)}
          className="flex items-center justify-between p-4 bg-white/5 border border-white/5 rounded-xl active:bg-green-500/20"
        >
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-black rounded-lg flex items-center justify-center p-1.5 border border-white/10">
              <img src={leader.logo} alt={leader.title} className="w-full h-full object-contain" />
            </div>
            <div className="flex flex-col">
              <span className="text-white text-[14px] font-black uppercase italic leading-none">{leader.title}</span>
              <span className="text-green-500 text-[11px] font-bold uppercase">{leader.bonus}</span>
            </div>
          </div>
          <span className="text-zinc-600">→</span>
        </a>
      ))}
    </div>

  </div>

  


                <a onClick={() => setIsOpen(false)} href="/jogos-demo" className="flex items-center justify-between bg-white/5 p-5 rounded-2xl border border-white/5 active:bg-white/10 transition-all group">
                <span className="text-white text-xl font-bold tracking-tight italic">Jogos Demo</span>
                <span className="text-green-500">→</span>
               </a>

              <a onClick={() => setIsOpen(false)} href="/tips-and-strategies" className="flex items-center justify-between bg-white/5 p-5 rounded-2xl border border-white/5 active:bg-white/10 transition-all group">
                <span className="text-white text-xl font-bold tracking-tight italic">Dicas e estratégias</span>
                <span className="text-green-500">→</span>
              </a>

              <a onClick={() => setIsOpen(false)} href="/about-us" className="flex items-center justify-between bg-white/5 p-5 rounded-2xl border border-white/5 active:bg-white/10 transition-all group">
                <span className="text-white text-xl font-bold tracking-tight italic">Sobre nós</span>
                <span className="text-green-500">→</span>
              </a>
            </nav>

            <div className="p-6 bg-white/[0.02] border-t border-white/5 backdrop-blur-sm">
              <a 
                onClick={() => setIsOpen(false)}
                href="/cassinos-com-pix" 
                className="relative flex items-center justify-center w-full bg-gradient-to-r from-[#fbff00] to-[#00ff40] p-5 rounded-2xl text-black font-black text-lg uppercase italic tracking-tighter shadow-[0_10px_40px_rgba(0,255,64,0.3)]"
              >
                <span>🚀 Cassinos com PIX</span>
              </a>

              <div className="mt-8 flex items-center justify-center gap-4 text-white font-black italic uppercase text-[10px]">
                <div className="h-[1px] flex-1 bg-green-500/50"></div>
                Top Brasil 2026
                <div className="h-[1px] flex-1 bg-blue-500/50"></div>
              </div>
            </div>
          </div>
        </div>
      </header>
   
    </div>
  );
}