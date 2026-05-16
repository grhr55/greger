import { leaders } from './datapartnes';
import { Wallet, ArrowRight, Star, MousePointer2, Trophy, Zap, ShieldCheck } from "lucide-react";


export default function Mindep() {
  return (
    <div className="min-h-screen w-full py-12   text-zinc-100 selection:bg-emerald-500/30">
      
      {/* HEADER SECTION */}
      <div className="text-center mb-20 px-4">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-500 text-xs font-bold uppercase tracking-widest mb-4">
          <Zap size={14} /> Atualizado Hoje
        </div>
        <h1 className="text-white text-5xl md:text-7xl font-black uppercase italic tracking-tighter leading-none">
          Quarta Rodada <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-cyan-400 drop-shadow-[0_0_30px_rgba(16,185,129,0.3)]">
            Depósitos Mínimos
          </span>
        </h1>
        <p className="mt-6 text-zinc-500 max-w-2xl mx-auto font-medium">
          Analisamos as melhores plataformas com entrada acessível e processamento instantâneo.
        </p>
      </div>

      {/* GRID DE CARDS */}
      <div className="px-6 max-w-[1440px] mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {leaders.map((item, index) => (
            <div
              key={index}
              className="group relative rounded-[32px] p-[1px] bg-gradient-to-b from-white/10 to-transparent hover:from-emerald-500/50 transition-all duration-700 hover:-translate-y-2"
            >
              <div className="bg-[#0A0A0A] backdrop-blur-3xl rounded-[31px] p-8 h-full flex flex-col justify-between overflow-hidden relative">
                
                {/* Efeito de Luz no Hover */}
                <div className="absolute -top-24 -right-24 w-48 h-48 bg-emerald-500/10 blur-[80px] group-hover:bg-emerald-500/20 transition-all duration-700" />

                <div>
                  <div className="flex justify-between items-start mb-8">
                    <div>
                      <h2 className="text-white text-2xl font-black uppercase italic tracking-tight group-hover:text-emerald-400 transition-colors">
                        {item.mindep.brand}
                      </h2>
                      <div className="flex mt-2 gap-0.5">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} size={12} className="fill-emerald-500 text-emerald-500" />
                        ))}
                      </div>
                    </div>
                    <span className="text-[10px] font-bold uppercase tracking-tighter text-emerald-400 bg-emerald-400/10 px-3 py-1 rounded-full border border-emerald-400/20">
                      {item.mindep.ui_display.badge}
                    </span>
                  </div>

                  {/* BOX DE PREÇO */}
                  <div className="bg-white/[0.03] border border-white/5 rounded-2xl p-5 mb-8 group-hover:border-emerald-500/30 transition-all">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-4">
                        <div className="p-3 bg-emerald-500 rounded-xl shadow-[0_0_20px_rgba(16,185,129,0.4)] group-hover:scale-110 transition-transform">
                          <Wallet size={20} className="text-black" />
                        </div>
                        <div>
                          <p className="text-zinc-500 text-[10px] uppercase font-bold tracking-widest mb-1">Mínimo</p>
                          <p className="text-white text-3xl font-black tabular-nums">
                            R$ {item.mindep.limits.min_deposit}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* MÉTODOS */}
                  <div className="space-y-3 mb-8">
                    <p className="text-zinc-600 text-[10px] font-bold uppercase tracking-[0.2em] flex items-center gap-2">
                      <ShieldCheck size={12} /> Gateways Ativos
                    </p>
                    {item.mindep.payment_methods.slice(0, 3).map((method, i) => (
                      <div key={i} className="flex justify-between items-center text-sm py-2 border-b border-white/5">
                        <span className="text-zinc-400 font-medium">{method.method}</span>
                        <span className="text-white font-bold group-hover:text-emerald-400">R$ {method.min}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <button className="w-full py-4 rounded-2xl bg-emerald-500 text-black font-black text-sm uppercase tracking-wider flex items-center justify-center gap-3 hover:bg-white transition-all shadow-[0_10px_20px_rgba(16,185,129,0.2)]">
                  Começar Agora
                  <ArrowRight size={18} />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* TABELA COMPARATIVA */}
      <div className="mt-32 max-w-[1000px] mx-auto px-6">
        <div className="text-center mb-12">
          <h3 className="text-3xl md:text-5xl font-black uppercase italic text-white">
            Tabela de <span className="text-emerald-500">Comparação</span>
          </h3>
        </div>

        <div className="overflow-hidden rounded-[32px] border border-white/10 bg-[#0A0A0A]/50 backdrop-blur-xl shadow-3xl overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-white/5 border-b border-white/10">
                <th className="p-6 text-zinc-500 text-[10px] uppercase font-black tracking-widest">Plataforma</th>
                <th className="p-6 text-zinc-500 text-[10px] uppercase font-black tracking-widest text-center">Pix Mín</th>
                <th className="p-6 text-zinc-500 text-[10px] uppercase font-black tracking-widest text-center">Crypto Mín</th>
                <th className="p-6 text-zinc-500 text-[10px] uppercase font-black tracking-widest">Velocidade</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-white/[0.05]">
              {(() => {
                const data = [
                  { name: "1xSlots", min: 1, speed: "Instantâneo", cript: '5' },
                  { name: "888Starz", min: 5, speed: "10 min", cript: '5' },
                  { name: "Brazino777", min: 6, speed: "Até 2h", cript: '5' },
                  { name: "1WIN", min: 10, speed: "5–15 min", cript: '15' },
                ];
                const minValue = Math.min(...data.map(i => i.min));
                return data.sort((a,b) => a.min - b.min).map((row, i) => {
                  const isWinner = row.min === minValue;
                  return (
                    <tr key={i} className={`group transition-colors hover:bg-emerald-500/5 ${isWinner ? "bg-emerald-500/[0.03]" : ""}`}>
                      <td className="p-6">
                        <div className="flex items-center gap-3">
                          <span className={`font-black uppercase text-sm ${isWinner ? 'text-emerald-400' : 'text-white'}`}>{row.name}</span>
                          {isWinner && <span className="bg-emerald-500 text-black text-[8px] font-black px-2 py-0.5 rounded-full">MELHOR OPÇÃO</span>}
                        </div>
                      </td>
                      <td className={`p-6 text-center font-black tabular-nums ${isWinner ? "text-emerald-400" : "text-zinc-300"}`}>R$ {row.min}</td>
                      <td className="p-6 text-center font-black tabular-nums text-zinc-300">R$ {row.cript}</td>
                      <td className="p-6">
                        <div className="flex items-center gap-2 text-xs font-bold text-zinc-400">
                          <div className={`w-2 h-2 rounded-full ${isWinner ? "bg-emerald-500 animate-ping" : "bg-zinc-700"}`} />
                          {row.speed}
                        </div>
                      </td>
                    </tr>
                  );
                });
              })()}
            </tbody>
          </table>
        </div>

        {/* VENCEDOR DESTAQUE */}
        <div className="mt-12 bg-gradient-to-br from-emerald-600/20 via-zinc-900/50 to-zinc-900/50 border border-emerald-500/20 rounded-[32px] p-8 md:p-10 flex flex-col md:flex-row items-center justify-between gap-8 shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-500/10 blur-[100px] pointer-events-none" />
          
          <div className="flex items-center gap-6 relative z-10">
            <div className="bg-emerald-500 p-5 rounded-2xl shadow-[0_0_30px_rgba(16,185,129,0.4)]">
              <Trophy size={32} className="text-black" />
            </div>
            <div>
              <p className="text-emerald-500 text-xs font-black uppercase tracking-[0.3em] mb-1">Recomendação do Expert</p>
              <h2 className="text-2xl md:text-4xl font-black uppercase text-white leading-none">
                {leaders[2].title}
              </h2>
            </div>
          </div>

          <div className="flex flex-col items-center md:items-end relative z-10">
            <p className="text-zinc-500 text-[10px] font-black uppercase tracking-widest mb-1">bolas</p>
            <div className="text-5xl font-black text-white flex items-baseline gap-1">
              2 <span className="text-emerald-500 text-xl"></span>
            </div>
          </div>
        </div>
      </div>
    
    </div>
  );
}