import { leaders } from './datapartnes';
import { Wallet, ArrowRight, Star, MousePointer2 } from "lucide-react";

export default function Mindep() {
  return (
    <div className="min-h-screen w-full py-16 bg-gradient-to-b">
      
      {/* HEADER */}
      <div className="text-center mb-16">
        <h4 className="text-white text-4xl md:text-6xl font-black uppercase italic tracking-tight leading-none">
          quarta rodada <br />
          <span className="text-emerald-500 drop-shadow-[0_0_25px_rgba(16,185,129,0.6)]">
            Depósitos Mínimos
          </span>
        </h4>

       
      </div>

      {/* GRID */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 max-w-[1400px] mx-auto">
        {leaders.map((item, index) => (
          <div
            key={index}
            className="relative group rounded-[28px] p-[1px] bg-gradient-to-b from-white/10 to-white/0 hover:from-emerald-500/40 transition-all duration-500"
          >
            {/* CARD */}
            <div className="bg-black/80 backdrop-blur-2xl rounded-[28px] p-6 h-full flex flex-col justify-between shadow-[0_20px_50px_rgba(0,0,0,0.6)]">

              {/* glow hover */}
              <div className="absolute inset-0 rounded-[28px] opacity-0 group-hover:opacity-100 transition duration-500 bg-emerald-500/5 blur-2xl" />

              <div>
                {/* HEADER */}
                <div className="flex justify-between items-start mb-6">
                  <div>
                    <h2 className="text-white text-xl font-black uppercase italic leading-none">
                      {item.mindep.brand}
                    </h2>

                    <div className="flex mt-1">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} size={10} className="fill-emerald-500 text-emerald-500" />
                      ))}
                    </div>
                  </div>

                  <span className="text-[9px] font-black uppercase tracking-widest text-emerald-500 bg-emerald-500/10 px-2 py-1 rounded-md border border-emerald-500/20">
                    {item.mindep.ui_display.badge}
                  </span>
                </div>

                {/* PRICE */}
                <div className="bg-white/[0.04] border border-white/5 rounded-2xl p-4 mb-6 flex justify-between items-center">
                  <div className="flex items-center gap-3">
                    <div className="p-2 bg-emerald-500 rounded-xl shadow-[0_0_25px_rgba(16,185,129,0.5)]">
                      <Wallet size={18} className="text-black" />
                    </div>

                    <div>
                      <p className="text-zinc-500 text-[10px] uppercase tracking-widest">
                        mínimo
                      </p>
                      <p className="text-white text-2xl font-black">
                        R$ {item.mindep.limits.min_deposit}
                      </p>
                    </div>
                  </div>

                  <MousePointer2 className="text-zinc-700 group-hover:text-emerald-500 transition" />
                </div>

                {/* METHODS */}
                <div className="space-y-2 mb-6">
                  <p className="text-zinc-600 text-[9px] uppercase tracking-[0.3em]">
                    gateways ativos
                  </p>

                  {item.mindep.payment_methods.slice(0, 3).map((method, i) => (
                    <div
                      key={i}
                      className="flex justify-between text-[12px] py-1 border-b border-white/5"
                    >
                      <span className="text-zinc-400">{method.method}</span>
                      <span className="text-white font-semibold">
                        R$ {method.min}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* BUTTON */}
              <button className="w-full py-4 rounded-2xl bg-emerald-500 text-black font-black text-[12px] uppercase tracking-[0.2em] flex items-center justify-center gap-2 
              hover:bg-emerald-400 active:scale-95 transition-all shadow-[0_15px_30px_rgba(16,185,129,0.25)]">
                Começar Agora
                <ArrowRight size={16} />
              </button>
            </div>
          </div>
        ))}
      </div>
       <div className="overflow-hidden rounded-[32px] border border-white/10 bg-black/60 backdrop-blur-xl shadow-2xl">
    <div className="overflow-x-auto">
      <table className="w-full text-left border-collapse min-w-[600px]">
        <thead>
          <tr className="bg-white/5 border-b border-white/10">
            <th className="p-5 text-zinc-500 text-[10px] md:text-xs uppercase font-black tracking-[0.2em]">Plataforma</th>
            <th className="p-5 text-zinc-500 text-[10px] md:text-xs uppercase font-black tracking-[0.2em]">Min</th>
            <th className="p-5 text-zinc-500 text-[10px] md:text-xs uppercase font-black tracking-[0.2em]">Velocidade</th>
            <th className="p-5 text-zinc-500 text-[10px] md:text-xs uppercase font-black tracking-[0.2em]">Tipo de KYC</th>
            <th className="p-5 text-zinc-500 text-[10px] md:text-xs uppercase font-black tracking-[0.2em]">Avaliação</th>
          </tr>
        </thead>

        <tbody className="divide-y divide-white/[0.05]">
          {[
              {
              name: "1xSlots",
              diff: "1R$",
              speed: "Até 72h",
              kyc: "Rigoroso / Video",
              stars: "⭐⭐⭐",
              color: "text-emerald-400",
              isWinner: true
            },
              {
              name: "888starz",
              diff: "5R$",
              speed: "Até 24h",
              kyc: "Manual / Docs",
              stars: "⭐⭐⭐⭐",
              color: "text-emerald-400",
              isWinner: false
            },
         
            {
              name: "Brazino777",
              diff: "6R$",
              speed: "Instantâneo",
              kyc: "Gov.br Sync",
              stars: "⭐⭐⭐⭐⭐",
              color: "text-emerald-400",
              isWinner: false
            },
            {
              name: "1WIN",
              diff: "10R$",
              speed: "5-15 min",
              kyc: "AI Biometrics",
              stars: "⭐⭐⭐⭐",
              color: "text-emerald-400",
              isWinner: false
            },
          
            
          ].map((row, i) => (
            <tr 
              key={i} 
              className={`transition-colors hover:bg-white/[0.03] ${row.isWinner ? 'bg-emerald-500/5' : ''}`}
            >
              <td className="p-5">
                <div className="flex items-center gap-2">
                  <span className="text-white font-black text-sm uppercase tracking-tight">{row.name}</span>
                  {row.isWinner && <span className="bg-emerald-500 text-black text-[8px] font-black px-1.5 py-0.5 rounded-full uppercase">Top</span>}
                </div>
              </td>
              <td className={`p-5 text-[11px] font-black uppercase italic ${row.color}`}>
                {row.diff}
              </td>
              <td className="p-5 text-zinc-300 text-xs font-medium">
                <div className="flex items-center gap-2">
                  <div className={`w-1.5 h-1.5 rounded-full ${row.isWinner ? 'bg-emerald-500 animate-pulse' : 'bg-zinc-600'}`} />
                  {row.speed}
                </div>
              </td>
              <td className="p-5 text-zinc-400 text-xs font-bold uppercase tracking-tighter">
                {row.kyc}
              </td>
              <td className="p-5 text-[10px] tracking-widest">
                {row.stars}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
    
    <div className="md:hidden p-4 bg-emerald-500/10 border-t border-white/5 text-center">
      <p className="text-emerald-400 text-[10px] font-black uppercase tracking-widest leading-tight">
        ← Deslize para ver mais detalhes →
      </p>
    </div>
  </div>
    </div>
  );
}