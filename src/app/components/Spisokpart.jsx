"use client";

import Image from "next/image";
import { leaders } from './datapartnes';
import Obzornik from './Obzorpart';
import { Star } from "lucide-react";

export default function Sposok() {
  const handlePlay = (url) => {
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <section className="px-2 sm:px-4 bg-[#061409] min-h-screen py-4 sm:py-10">
      <div className="max-w-5xl mx-auto">
       
        {/* Компактный заголовок */}
        <div className="text-center mb-6 sm:mb-12">
          <h1 className="text-xl sm:text-4xl md:text-5xl pt-2 sm:pt-10 font-black text-white uppercase italic tracking-tighter">
            Top <span className="text-green-500">Cassinos</span> no <span className="text-yellow-400">Brasil</span>
          </h1>
          <div className="flex justify-center gap-1.5 mt-1.5">
            <div className="h-1 w-10 sm:w-16 bg-green-500 rounded-full"></div>
            <div className="h-1 w-10 sm:w-16 bg-yellow-400 rounded-full"></div>
          </div>
        </div>

        {/* Список карточек */}
        <div className="space-y-3 sm:space-y-6">
          {leaders.map((item, index) => (
            <div 
              key={item.id}
              className="relative overflow-hidden bg-[#111] border border-white/10 rounded-xl transition-all duration-300 md:hover:border-yellow-400/50 md:hover:shadow-[0_0_30px_rgba(251,191,36,0.1)]"
            >
              
              {/* На телефонах: Сверхкомпактный строчный дизайн | На ПК: Классический вид */}
              <div className="p-3 sm:p-6">
                
                {/* Мобильная верстка (до md:) */}
                <div className="flex md:hidden items-center gap-3">
                  
                  {/* Позиция и Логотип в одном мини-блоке */}
                  <div className="relative w-20 h-12 flex-shrink-0 bg-black/40 rounded-lg border border-white/5 flex items-center justify-center p-1">
                    <span className={`absolute -top-1.5 -left-1.5 w-5 h-5 flex items-center justify-center font-black text-[10px] rounded-full shadow-md z-10
                      ${index === 0 ? "bg-yellow-400 text-black" : "bg-zinc-800 text-white"}`}>
                      {index + 1}
                    </span>
                    <Image
                      src={item.logo} 
                      alt={item.title}
                      width={70}
                      height={24}
                      className="object-contain max-h-full"
                    />
                  </div>

                  {/* Текст и Рейтинг по центру */}
                  <div className="flex-1 min-w-0">
                    <h2 className="text-sm font-black text-white uppercase tracking-tight truncate">
                      {item.title || "Cassino"}
                    </h2>
                    <p className="text-green-400 text-[11px] font-bold leading-tight truncate">
                      {item.bonus}
                    </p>
                    {/* Компактные звезды */}
                    <div className="flex items-center gap-1 mt-0.5">
                      <Star size={10} fill="currentColor" className="text-yellow-400" />
                      <span className="text-[10px] text-zinc-400 font-bold">{item.rating}</span>
                      <span className="text-[9px] text-zinc-600 font-medium">| PIX ✅</span>
                    </div>
                  </div>

                  {/* Аккуратная кнопка справа */}
                  <div className="flex flex-col items-center justify-center flex-shrink-0">
                    <button 
                      onClick={() => handlePlay(item.affiUrl)} 
                      className="bg-yellow-400 active:bg-green-500 text-black font-black py-2.5 px-4 rounded-lg text-xs uppercase italic tracking-tighter shadow-md"
                    >
                      Jogar
                    </button>
                    <span className="text-[7px] text-zinc-600 mt-0.5 font-bold uppercase">T&Cs</span>
                  </div>

                </div>

                {/* Десктопная верстка (от md: и выше) — сохраняет ваш исходный красивый вид */}
                <div className="hidden md:flex items-center gap-6">
                  <div className={`absolute top-0 left-0 w-12 h-12 flex items-center justify-center font-black text-xl rounded-br-2xl z-10 
                    ${index === 0 ? "bg-yellow-400 text-black" : "bg-zinc-800 text-white"}`}>
                    {index + 1}
                  </div>

                  <div className="w-40 h-20 relative flex items-center justify-center bg-black/40 rounded-xl p-4 border border-white/5">
                    <Image
                      src={item.logo} 
                      alt={item.title}
                      width={150}
                      height={40}
                      className="drop-shadow-[0_0_8px_rgba(255,215,0,0.3)] object-contain"
                    />
                  </div>

                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <span className="text-[10px] bg-green-600/20 text-green-400 px-2 py-1 rounded-md border border-green-600/30 font-bold uppercase">
                        {item.tag}
                      </span>
                    </div>
                    <h2 className="text-2xl font-black text-white">{item.bonus}</h2>
                    <p className="text-zinc-500 pt-2 text-sm">Pagamento instantâneo via PIX ✅</p>
                  </div>

                  <div className="bg-white/5 border border-white/10 p-6 rounded-[30px] text-center">
                    <div className="flex justify-center gap-1 text-yellow-400 mb-2">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          size={22}
                          fill={i < Math.round(item.rating) ? "currentColor" : "none"}
                        />
                      ))}
                    </div>
                    <p className="text-2xl font-black italic text-amber-50">{item.rating} / 5.0</p>
                  </div>

                  <div className="flex flex-col gap-3">
                    <button 
                      onClick={() => handlePlay(item.affiUrl)} 
                      className="bg-yellow-400 hover:bg-green-500 text-black font-black py-4 px-8 rounded-xl transition-all transform hover:scale-105 shadow-[0_5px_15px_rgba(251,191,36,0.3)] uppercase italic tracking-tighter text-lg"
                    >
                      Jogar Agora
                    </button>
                    <p className="text-[10px] text-zinc-600 text-center uppercase font-bold">T&Cs se aplicam</p>
                  </div>
                </div>

              </div>

              {/* Микро-дисклеймер в самом низу карточки */}
              <p className="text-zinc-600 text-[9px] sm:text-xs px-3 sm:px-6 pb-2 text-center md:text-left leading-tight border-t border-white/5 pt-2"> 
                🔞 18+. Jogue com responsabilidade.
              </p>

              <div className={`h-1 w-full bg-gradient-to-r ${item.color} opacity-50`}></div>
            </div>
          ))}
        </div>

      </div>
      <Obzornik />
    </section>
  );
}