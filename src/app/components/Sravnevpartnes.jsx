import { leaders } from "./datapartnes";
import { Check, Zap, Trophy, Star } from "lucide-react";

export default function Sravnevs() {
  return (
    <section className="bg-[#122913] py-20 px-4 selection:bg-green-500/30">
      <div className="max-w-6xl mx-auto">
        
        {/* --- HEADER --- */}
        <div className="text-center mb-16">
          <h3 className="text-4xl md:text-6xl font-black text-white uppercase italic tracking-tighter mb-6">
            Comparativo <span className="text-green-500 text-shadow-glow">Elite 2026</span>
          </h3>
          <p className="text-zinc-500 font-bold uppercase tracking-[2px] text-[11px] md:text-sm max-w-3xl mx-auto leading-relaxed">
            Qual plataforma escolher hoje? As regras são claras: comparamos os 3 gigantes do mercado, e aquele que somar mais pontos leva a coroa no Brasil. <span className="text-white">Quem domina o PIX e os bônus?</span> Descubra agora.
          </p>
        </div>

        {/* --- TABLE CONTAINER --- */}
        <div className="overflow-x-auto pb-8 scrollbar-hide">
          <table className="w-full text-left border-separate border-spacing-y-4">
            <thead>
              <tr className="text-zinc-600 uppercase text-[10px] font-black tracking-[3px] italic">
                <th className="px-6 py-2">Plataforma</th>
                <th className="px-6 py-2">Catálogo</th>
                <th className="px-6 py-2 text-center">Saque PIX</th>
                <th className="px-6 py-2 text-center">App Móvel</th>
                <th className="px-6 py-2 text-right">Tempo de Mercado</th>
              </tr>
            </thead>
            
            <tbody>
              {leaders.map((leader) => (
                <tr 
                  key={leader.id} 
                  className="bg-[#0a0a0a] border border-white/5 group hover:bg-[#111] transition-all duration-500"
                >
                  {/* LOGO BLOCK */}
                  <td className="px-4 py-6 rounded-l-[32px] border-y border-l border-white/5 min-w-[180px]">
                    <div className="flex items-center gap-4">
                      <div className="w-24 h-12 md:w-32 md:h-16 bg-black border border-white/10 rounded-2xl flex items-center justify-center p-3 shadow-2xl overflow-hidden shrink-0 group-hover:border-green-500/30 transition-colors">
                        <img 
                          src={leader.logo} 
                          alt={leader.title} 
                          className="w-full h-full object-contain transform group-hover:scale-110 transition-transform duration-700" 
                        />
                      </div>
                      <span className="text-white font-black uppercase italic text-sm md:text-base tracking-tighter">
                        {leader.title}
                      </span>
                    </div>
                  </td>

                  {/* GAMES */}
                  <td className="px-6 py-6 border-y border-white/5">
                    <div className="flex flex-col">
                      <span className="text-white font-black text-base md:text-lg uppercase leading-none">{leader.colgame}</span>
                      <span className="text-zinc-600 text-[9px] font-black uppercase tracking-widest mt-1">Títulos Ativos</span>
                    </div>
                  </td>

                  {/* PIX SPEED */}
                  <td className="px-6 py-6 border-y border-white/5 text-center">
                    <div className="inline-flex flex-col items-center gap-1.5">
                      <div className="flex items-center gap-2 bg-green-500/10 px-4 py-1.5 rounded-full border border-green-500/20 shadow-[0_0_15px_rgba(34,197,94,0.1)]">
                         <Zap size={14} className="text-amber-400 fill-amber-400" />
                         <span className="text-green-500 font-black text-[11px] uppercase tracking-tight">{leader.pixrab}</span>
                      </div>
                      <span className="text-[8px] text-zinc-600 font-bold uppercase italic">Processamento 24/7</span>
                    </div>
                  </td>

                  {/* APP AVAILABILITY */}
                  <td className="px-6 py-6 border-y border-white/5 text-center">
                    <div className="flex flex-col items-center gap-2">
                       <div className="bg-blue-500/10 p-2 rounded-xl border border-blue-500/20 text-blue-500 group-hover:scale-110 transition-transform">
                          <Check size={20} strokeWidth={4} />
                       </div>
                       <span className="text-[9px] text-zinc-600 font-black uppercase">iOS & Android</span>
                    </div>
                  </td>

                  {/* AGE / VOZRAST */}
                  <td className="px-8 py-6 rounded-r-[32px] border-y border-r border-white/5 text-right">
                    <div className="flex flex-col items-end">
                      <span className="text-amber-50 font-black text-sm md:text-lg italic uppercase">{leader.vozrast}</span>
                      <span className="text-zinc-600 text-[9px] font-black uppercase tracking-widest">Operando</span>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* --- WINNER VERDICT --- */}
        <div className="mt-12 bg-gradient-to-br from-green-900/30 via-[#0a0a0a] to-blue-900/30 p-8 md:p-12 rounded-[48px] border border-white/10 relative overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.5)]">
          <div className="absolute top-0 right-0 w-64 h-64 bg-green-500/10 blur-[100px] rounded-full"></div>
          
          <div className="flex flex-col md:flex-row items-center justify-between gap-10 relative z-10">
            <div className="flex flex-col md:flex-row items-center gap-8">
              <div className="relative">
                <div className="absolute inset-0 bg-green-500 blur-2xl opacity-20 animate-pulse"></div>
                <div className="relative bg-green-500 p-6 rounded-[32px] shadow-2xl transform -rotate-6 group-hover:rotate-0 transition-transform">
                  <Trophy className="text-black" size={48} strokeWidth={2.5} />
                </div>
              </div>
              
              <div className="text-center md:text-left">
                <div className="inline-block bg-green-500/20 text-green-500 text-[10px] font-black uppercase tracking-[4px] px-3 py-1 rounded-full mb-4 border border-green-500/30">
                  Melhor Escolha 2026
                </div>
                <h2 className="text-3xl md:text-5xl font-black uppercase italic text-white leading-none mb-4">
                  Vencedor: <span className="text-green-500">{leaders[0].title}</span>
                </h2>
                <p className="text-zinc-400 text-sm md:text-base font-medium max-w-lg leading-relaxed">
                  Líder absoluto devido ao seu <span className="text-white font-bold italic underline decoration-green-500">saque PIX instantâneo</span> e ao maior catálogo do mercado, com mais de <span className="text-white font-bold">{leaders[0].colgame} títulos</span> disponíveis.
                </p>
              </div>
            </div>

            {/* SCORE DISPLAY */}
            <div className="flex flex-col items-center md:items-end gap-3 bg-black/40 backdrop-blur-xl p-8 rounded-[40px] border border-white/10 min-w-[200px] w-full md:w-auto shadow-inner">
              <span className="text-zinc-500 text-[11px] font-black uppercase tracking-[5px] mb-2">Score Elite</span>
              <div className="flex items-baseline gap-2">
                <span className="text-6xl md:text-7xl font-black italic text-green-500 tracking-tighter drop-shadow-[0_0_15px_rgba(34,197,94,0.5)]">1</span>
                <span className="text-zinc-600 font-black text-2xl uppercase tracking-tighter">/15</span>
              </div>
            
              <p className="text-[10px] text-green-500 font-black uppercase mt-4 italic tracking-[2px] animate-pulse">
                Performance Imbatível
              </p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}