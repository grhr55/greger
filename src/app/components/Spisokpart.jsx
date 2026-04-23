"use client";

import Image from "next/image";
import {leaders} from './datapartnes'
import Obzornik from './Obzorpart'
import { Star } from "lucide-react";


export default function Sposok() {

    const handlePlay = (url) => {
  window.open(url, '_blank', 'noopener,noreferrer');
};
  return (
    <section className=" px-4  bg-[#061409] min-h-screen">
      <div className="max-w-5xl mx-auto">
       
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl pt-10 font-black text-white uppercase italic tracking-tighter">
            Top <span className="text-green-500">Cassinos</span> no <span className="text-yellow-400">Brasil</span>
          </h1>
          <div className="flex justify-center gap-2 mt-2">
            <div className="h-1 w-16 bg-green-500 rounded-full"></div>
            <div className="h-1 w-16 bg-yellow-400 rounded-full"></div>
          
          </div>
        </div>

        
        <div className="space-y-6">
          {leaders.map((item, index) => (
            <div 
              key={item.id}
              className="relative group overflow-hidden bg-[#111] border border-white/10 rounded-2xl transition-all duration-300 hover:border-yellow-400/50 hover:shadow-[0_0_30px_rgba(251,191,36,0.1)]"
            >
              
              <div className={`absolute top-0 left-0 w-12 h-12 flex items-center justify-center font-black text-xl rounded-br-2xl z-10 
                ${index === 0 ? "bg-yellow-400 text-black" : "bg-zinc-800 text-white"}`}>
                {index + 1}
              </div>

              <div>
                <div className="flex flex-col md:flex-row items-center p-6 gap-6">
                
               
                <div className="w-40 h-20 relative flex items-center justify-center bg-black/40 rounded-xl p-4 border border-white/5">
                
                    <Image
                    src={item.logo} 
                    alt={item.title}
                    title={item.title}
                     width={150}
                     height={40}
                     className="drop-shadow-[0_0_8px_rgba(255,215,0,0.3)]"
                     />
                </div>

                
                <div className="flex-1 text-center md:text-left">
                  <div className="flex flex-wrap justify-center md:justify-start items-center gap-3 mb-2">
                    <span className="text-[10px] bg-green-600/20 text-green-400 px-2 py-1 rounded-md border border-green-600/30 font-bold uppercase">
                      {item.tag}
                    </span>
                    <div className="flex text-yellow-400 text-sm">
                      {"★".repeat(Math.floor(item.rating))}
                    </div>
                  </div>
                  <h2 className="text-2xl font-black text-white">{item.bonus}</h2>
                  <p className="text-zinc-500 pt-2 text-sm">Pagamento instantâneo via PIX ✅</p>
                 
                </div>

            <div className="bg-white/5 border border-white/10 p-4 md:p-6 rounded-[24px] md:rounded-[30px] text-center w-full md:w-auto">
  <div className="flex justify-center gap-1 text-yellow-400 mb-1 md:mb-2">
    {[...Array(5)].map((_, i) => (
      <Star
        key={i}
        size={16}
        fill={i < Math.round(item.rating) ? "currentColor" : "none"}
        className="md:w-[22px] md:h-[22px]"
      />
    ))}
  </div>
  <p className="text-lg text-amber-50 md:text-2xl font-black italic">{item.rating} / 5.0</p>
</div>


               
                <div className="w-full md:w-auto flex flex-col gap-3">
                  <button onClick={() => handlePlay(item.affiUrl)} className="bg-yellow-400 hover:bg-green-500 text-black font-black py-4 px-8 rounded-xl transition-all transform hover:scale-105 shadow-[0_5px_15px_rgba(251,191,36,0.3)] uppercase italic tracking-tighter text-lg">
                    Jogar Agora
                  </button>
                  <p className="text-[10px] text-zinc-600 text-center uppercase font-bold">T&Cs se aplicam</p>
                </div>
                
              </div>
              <p className="text-zinc-400 pt-1 text-sm px-6 pb-3"> 🔞 Apenas para maiores de 18 anos. O jogo pode causar dependência. Jogue com responsabilidade. Não aposte dinheiro que você não pode perder. Apostas não garantem lucro. </p>

              </div>

             
              <div className={`h-1 w-full bg-gradient-to-r ${item.color} opacity-50`}></div>
            </div>
          ))}
        </div>

       
      </div>
      <Obzornik/>

    </section>
  );
}