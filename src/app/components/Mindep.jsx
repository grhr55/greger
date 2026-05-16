"use client";
import { leaders } from './datapartnes';
import { Wallet, ArrowRight, Star, Trophy, ShieldCheck } from "lucide-react";
import PaymentSystems from "./Plitsistem"


export default function Mindep() {
  return (
    <div className="min-h-screen w-full py-6 md:py-12 text-zinc-100  md:px-0">
      
      {/* HEADER SECTION */}
      <div className="text-center mb-10 md:mb-20">
       
        <h1 className="text-white text-3xl sm:text-5xl md:text-7xl font-black uppercase italic tracking-tighter leading-none">
          Quarta Rodada <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-cyan-400 drop-shadow-[0_0_30px_rgba(16,185,129,0.3)]">
            Depósitos Mínimos
          </span>
        </h1>
        <p className="mt-4 md:mt-6 text-zinc-500 max-w-2xl mx-auto text-xs md:text-sm font-medium px-2">
          Analisamos as melhores plataformas com entrada acessível e processamento instantâneo.
        </p>
      </div>

      {/* GRID DE CARDS */}
      <div className="max-w-[1440px] mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-6">
          {leaders.map((item, index) => (
            <div
              key={index}
              className="group relative rounded-2xl md:rounded-[32px] p-[1px] bg-gradient-to-b from-white/10 to-transparent md:hover:from-emerald-500/50 transition-all duration-700 md:hover:-translate-y-2"
            >
              <div className="bg-[#0A0A0A] backdrop-blur-3xl rounded-[15px] md:rounded-[31px] p-4 md:p-8 h-full flex flex-col justify-between overflow-hidden relative">
                
                {/* Efeito de Luz no Hover */}
                <div className="absolute -top-24 -right-24 w-48 h-48 bg-emerald-500/10 blur-[80px] group-hover:bg-emerald-500/20 transition-all duration-700" />

                <div>
                  <div className="flex justify-between items-start mb-4 md:mb-8">
                    <div>
                      <h2 className="text-white text-lg md:text-2xl font-black uppercase italic tracking-tight group-hover:text-emerald-400 transition-colors">
                        {item.mindep.brand}
                      </h2>
                      <div className="flex mt-1 md:mt-2 gap-0.5">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} size={10} className="fill-emerald-500 text-emerald-500 sm:w-3 sm:h-3" />
                        ))}
                      </div>
                    </div>
                    <span className="text-[9px] md:text-[10px] font-bold uppercase tracking-tighter text-emerald-400 bg-emerald-400/10 px-2.5 py-0.5 md:px-3 md:py-1 rounded-full border border-emerald-400/20">
                      {item.mindep.ui_display.badge}
                    </span>
                  </div>

                  {/* BOX DE PREÇO */}
                  <div className="bg-white/[0.03] border border-white/5 rounded-xl md:rounded-2xl p-4 md:p-5 mb-4 md:mb-8 group-hover:border-emerald-500/30 transition-all">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3 md:gap-4">
                        <div className="p-2 md:p-3 bg-emerald-500 rounded-lg md:rounded-xl shadow-[0_0_20px_rgba(16,185,129,0.4)] group-hover:scale-110 transition-transform">
                          <Wallet size={16} className="text-black md:w-5 md:h-5" />
                        </div>
                        <div>
                          <p className="text-zinc-500 text-[9px] md:text-[10px] uppercase font-bold tracking-widest mb-0.5 md:mb-1">Mínimo</p>
                          <p className="text-white text-xl md:text-3xl font-black tabular-nums">
                            R$ {item.mindep.limits.min_deposit}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* MÉTODOS */}
                  <div className="space-y-2 md:space-y-3 mb-6 md:mb-8">
                    <p className="text-zinc-600 text-[9px] md:text-[10px] font-bold uppercase tracking-[0.2em] flex items-center gap-1.5">
                      <ShieldCheck size={11} /> Gateways Ativos
                    </p>
                    {item.mindep.payment_methods.slice(0, 3).map((method, i) => (
                      <div key={i} className="flex justify-between items-center text-xs md:text-sm py-1.5 md:py-2 border-b border-white/5">
                        <span className="text-zinc-400 font-medium">{method.method}</span>
                        <span className="text-white font-bold group-hover:text-emerald-400">R$ {method.min}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <button className="w-full py-3 md:py-4 rounded-xl md:rounded-2xl bg-emerald-500 text-black font-black text-xs md:text-sm uppercase tracking-wider flex items-center justify-center gap-2 hover:bg-white transition-all shadow-[0_10px_20px_rgba(16,185,129,0.2)]">
                  Começar Agora
                  <ArrowRight size={14} className="md:w-[18px] md:h-[18px]" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* TABELA COMPARATIVA */}
     <div className="mt-16 md:mt-32 max-w-[1000px] mx-auto">
        
        <div className="flex flex-col md:flex-row justify-between items-baseline mb-4 md:mb-8 gap-2 border-b border-white/5 pb-4 md:pb-6">
          <div>
            <span className="text-emerald-400 text-[10px] md:text-xs font-black uppercase tracking-[0.3em] block mb-1">RANKING ATUALIZADO</span>
            <h3 className="text-2xl md:text-5xl font-black uppercase italic text-white">
              Tabela de <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-yellow-400">Comparação</span>
            </h3>
          </div>
          <div className="text-zinc-500 text-[10px] md:text-[11px] font-bold uppercase tracking-wider">
            Filtro: <span className="text-white">Menor Depósito</span>
          </div>
        </div>

        {/* ТАБЛИЦА С АДАПТИВНЫМ СКРОЛЛОМ */}
        <div className="overflow-hidden rounded-xl md:rounded-[24px] border border-emerald-500/10 bg-[#060B14]/70 backdrop-blur-xl shadow-3xl overflow-x-auto w-full">
          <table className="w-full text-left border-collapse min-w-[500px] md:min-w-full">
            <thead>
              <tr className="bg-white/[0.02] border-b border-white/5">
                <th className="p-4 md:p-6 text-zinc-400 text-[9px] md:text-[10px] uppercase font-black tracking-widest w-[35%] md:w-[40%]">Plataforma</th>
                <th className="p-4 md:p-6 text-zinc-400 text-[9px] md:text-[10px] uppercase font-black tracking-widest text-center">Velocidade</th>
                <th className="p-4 md:p-6 text-zinc-400 text-[9px] md:text-[10px] uppercase font-black tracking-widest text-right">Crypto Mín</th>
                <th className="p-4 md:p-6 text-emerald-400 text-[9px] md:text-[10px] uppercase font-black tracking-widest text-right bg-emerald-500/[0.02]">⚡ Pix Mín</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-white/5">
              {(() => {
                const data = leaders.map(item => ({
                  name: item.mindep.brand,
                  min: item.mindep.limits.min_deposit,
                  speed: "Imediato",
                  cript: item.mindep.payment_methods.find(p => p.method.toLowerCase().includes('cripto') || p.method.toLowerCase().includes('crypto'))?.min || '10'
                }));
                
                const minValue = Math.min(...data.map(i => i.min));
                return data.sort((a,b) => a.min - b.min).map((row, i) => {
                  const isWinner = row.min === minValue;
                  return (
                    <tr key={i} className={`group transition-all duration-200 hover:bg-emerald-500/[0.03] ${isWinner ? "bg-gradient-to-r from-emerald-500/[0.02] to-transparent" : ""}`}>
                      
                      <td className="p-4 md:p-6">
                        <div className="flex flex-col sm:flex-row sm:items-center gap-1 md:gap-4">
                          <span className={`font-black uppercase text-sm md:text-base tracking-wide ${isWinner ? 'text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-yellow-300' : 'text-white'}`}>
                            {row.name}
                          </span>
                          {isWinner && (
                            <span className="w-fit bg-gradient-to-r from-yellow-400 to-amber-500 text-black text-[7px] md:text-[8px] font-black px-1.5 py-0.5 rounded shadow-sm">
                              MELHOR OPÇÃO 🔥
                            </span>
                          )}
                        </div>
                      </td>

                      <td className="p-4 md:p-6 text-center">
                        <div className="inline-flex items-center gap-1.5 text-[10px] md:text-xs font-bold text-zinc-400 bg-white/[0.03] px-2 py-0.5 md:px-3 md:py-1 rounded-full">
                          <div className={`w-1 h-1 md:w-1.5 md:h-1.5 rounded-full ${isWinner ? "bg-emerald-400 animate-pulse" : "bg-zinc-600"}`} />
                          {row.speed}
                        </div>
                      </td>

                      <td className="p-4 md:p-6 text-right font-bold text-xs md:text-sm tabular-nums text-zinc-400">
                        <span className="text-[9px] md:text-[10px] font-normal text-zinc-600 mr-0.5">R$</span>{row.cript}
                      </td>

                      <td className={`p-4 md:p-6 text-right font-black text-sm md:text-base tabular-nums bg-emerald-500/[0.01] ${isWinner ? "text-emerald-400 md:text-lg" : "text-zinc-200"}`}>
                        <span className="text-[10px] md:text-xs font-bold text-emerald-500/70 mr-0.5">R$</span>{row.min}
                      </td>

                    </tr>
                  );
                });
              })()}
            </tbody>
          </table>
        </div>

        {/* BOTTOM EXPERT BOX */}
        <div className="mt-6 md:mt-8 bg-gradient-to-r border border-emerald-500/20 rounded-2xl md:rounded-[28px] p-4 md:p-8 flex flex-col md:flex-row items-center justify-between gap-4 md:gap-6 shadow-2xl relative overflow-hidden group">
          <div className="absolute top-0 right-0 w-72 h-72 bg-emerald-500/10 blur-[90px] pointer-events-none" />
          
          <div className="flex items-center gap-3 md:gap-5 w-full md:w-auto">
            <div className="bg-gradient-to-br from-yellow-400 to-amber-500 p-2.5 md:p-4 rounded-lg md:rounded-xl shadow-lg shrink-0">
              <Trophy size={20} className="text-black md:w-7 md:h-7" />
            </div>
            <div>
              <p className="text-yellow-400 text-[8px] md:text-[10px] font-black uppercase tracking-[0.2em] mb-0.5 md:mb-1">RECOMENDADO PELO EXPERT</p>
              <h2 className="text-lg md:text-3xl font-black uppercase italic text-white leading-tight">
                {leaders[2]?.mindep?.brand || "Plataforma Destaque"}
              </h2>
            </div>
          </div>

          <div className="hidden lg:flex items-center gap-2 bg-emerald-500/5 border border-emerald-500/10 px-4 py-2 rounded-xl text-xs font-black text-emerald-400 uppercase tracking-wider">
            <span>⚡ PAGAMENTO VIA PIX IMEDIATO</span>
          </div>

          <div className="flex flex-row md:flex-col items-center md:items-end justify-between w-full md:w-auto border-t border-white/5 md:border-none pt-3 md:pt-0">
            <p className="text-zinc-500 text-[9px] md:text-[10px] font-black uppercase tracking-widest md:mb-1">Depósito Mínimo</p>
            <div className="text-xl md:text-4xl font-black text-white flex items-baseline gap-0.5 tracking-tight">
              <span className="text-xs md:text-lg font-bold text-emerald-500">R$</span>
              {leaders[2]?.mindep?.limits?.min_deposit }
            </div>
          </div>

        </div>
      </div>
      <PaymentSystems/>
    
    </div>
  );
}