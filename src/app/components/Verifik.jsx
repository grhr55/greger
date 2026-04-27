import { leaders } from './datapartnes';
import { Trophy, CheckCircle2, ShieldCheck, Zap, Info } from "lucide-react";
import Mindep from './Mindep'

export default function Verifik() {
  const winner = leaders.find(l => l.title === "Brazino777") || leaders[0];

  return (
    // Добавляем небольшой блюр на весь контейнер, чтобы контент не сливался с активным фоном
    <div className="w-full flex flex-col gap-6 py-10 max-w-7xl mx-auto">
      
      <div className="flex items-center gap-4 mb-4">
        <div className="p-2 bg-white/10 backdrop-blur-md rounded-lg border border-white/20">
          <ShieldCheck className="text-white w-6 h-6" />
        </div>
        <h3 className="text-white text-3xl font-black uppercase tracking-tighter py-10 max-[500px]:py-2">
         Terceira rodada Condições de  <span className="text-emerald-400">verificação</span>
        </h3>
      </div>

      {leaders.map((leader) => (
        <div 
          key={leader.id} 
          // Стекло: полупрозрачный фон + сильный блюр
          className="relative bg-black/60 backdrop-blur-xl border border-white/10 rounded-[32px] p-8 max-[500px]:p-5 hover:border-white/30 transition-all duration-500 group overflow-hidden"
        >
          {/* Декоративное свечение внутри карточки */}
          <div className="absolute -top-24 -right-24 w-48 h-48 bg-emerald-500/10 blur-[80px] rounded-full group-hover:bg-emerald-500/20 transition-colors" />

          <div className="grid grid-cols-1 lg:grid-cols-4 gap-10 relative z-10">
            
            {/* БРЕНД */}
            <div className="flex flex-col gap-6">
              <div className="flex items-center gap-5">
                <div className="relative p-3 bg-white/5 rounded-2xl border border-white/10 shadow-2xl">
                  <img src={leader.logo} className="w-12 h-12 object-contain" alt={leader.title} />
                </div>
                <div>
                  <h2 className="text-white font-black text-2xl uppercase tracking-tight">{leader.title}</h2>
                  <div className="flex items-center gap-2 mt-1">
                    <span className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse" />
                    <span className="text-emerald-400 text-[10px] font-black uppercase tracking-widest leading-none">
                      {leader.verif.region}
                    </span>
                  </div>
                </div>
              </div>
              
              <div className="bg-black/40 backdrop-blur-sm p-4 rounded-2xl border border-white/5">
                <p className="text-zinc-500 text-[9px] uppercase font-black mb-1 tracking-widest flex items-center gap-2">
                  <Info className="w-3 h-3" /> Conformidade Legal
                </p>
                <p className="text-zinc-200 text-[11px] leading-tight font-medium opacity-90">
                  {leader.verif.compliance}
                </p>
              </div>
            </div>

            {/* KYC & ДОКУМЕНТЫ */}
            <div className="lg:col-span-2 flex flex-col gap-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                <div className="space-y-5">
                  <div className="group/item">
                    <p className="text-white text-[14px] font-black flex items-center gap-3">
                      <div className="p-1 bg-emerald-500 rounded-md">
                        <CheckCircle2 className="w-3 h-3 text-black" /> 
                      </div>
                      {leader.verif.requirements.identity.primary_key}
                    </p>
                    <p className="text-zinc-400 text-[11px] mt-2 pl-8 leading-relaxed">
                      {leader.verif.requirements.identity.validation_method}
                    </p>
                  </div>
                  
                  <div>
                    <p className="text-white text-[14px] font-black flex items-center gap-3">
                      <div className="p-1 bg-white/10 rounded-md">
                        <Zap className="w-3 h-3 text-emerald-400 fill-emerald-400" /> 
                      </div>
                      Biometria
                    </p>
                    <p className="text-zinc-400 text-[11px] mt-2 pl-8 leading-tight italic opacity-80">
                      {leader.verif.requirements.biometrics.type}
                    </p>
                  </div>
                </div>

                <div className="bg-white/[0.03] border border-white/10 p-5 rounded-3xl relative">
                  <p className="text-white text-[10px] font-black uppercase mb-4 tracking-wider flex items-center gap-2">
                    <span className="w-1.5 h-1.5 bg-emerald-500 rounded-full" />
                    Documentos Aceitos
                  </p>
                  <ul className="space-y-3">
                    {leader.verif.requirements.documents.accepted_types.slice(0, 4).map((doc, i) => (
                      <li key={i} className="text-zinc-300 text-[11px] font-medium flex items-center gap-3">
                        <div className="w-1 h-[1px] bg-zinc-700" />
                        {doc.split('-')[0].trim()}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            {/* СТАТУС И ВРЕМЯ */}
            <div className="flex flex-col justify-between lg:border-l border-white/10 lg:pl-10">
              <div className="space-y-6">
                <div>
                  <span className="text-zinc-500 text-[10px] font-black uppercase block mb-2 tracking-widest opacity-70">Pagamentos</span>
                  <div className="inline-flex items-center gap-2 bg-emerald-500 text-black px-3 py-1 rounded-full shadow-[0_0_15px_rgba(16,185,129,0.2)]">
                    <span className="font-black text-[10px] uppercase">Pix Oficial</span>
                  </div>
                </div>
                <div>
                  <span className="text-zinc-500 text-[10px] font-black uppercase block mb-1 tracking-widest opacity-70">Aprovação</span>
                  <span className="text-white text-lg font-black tracking-tighter">
                    {leader.verif.process.average_approval_time.automated || leader.verif.process.average_approval_time}
                  </span>
                </div>
              </div>
              
              <div className="mt-8 flex items-end justify-between">
                <span className="text-5xl text-white font-black italic tracking-tighter opacity-20">18+</span>
                <div className="text-right">
                  <div className="bg-white text-black px-3 py-1 text-[10px] font-black uppercase mb-1 rounded-full inline-block">
                    Full Compliance
                  </div>
                  <p className="text-zinc-500 text-[9px] font-black uppercase tracking-[0.2em]">Verified 2026</p>
                </div>
              </div>
            </div>

          </div>
        </div>
      ))}

      {/* БЛОК ПОБЕДИТЕЛЯ */}
 
      <div className="mt-16 w-full px-2 max-w-[1200px] mx-auto">
  <h3 className="text-center pb-10 text-3xl max-[500px]:text-2xl md:text-5xl font-black uppercase italic tracking-tighter text-white drop-shadow-lg">
    Resultado da <span className="text-emerald-500">tabela</span>
  </h3>
  
  <div className="overflow-hidden rounded-[32px] border border-white/10 bg-black/60 backdrop-blur-xl shadow-2xl">
    <div className="overflow-x-auto">
      <table className="w-full text-left border-collapse min-w-[600px]">
        <thead>
          <tr className="bg-white/5 border-b border-white/10">
            <th className="p-5 text-zinc-500 text-[10px] md:text-xs uppercase font-black tracking-[0.2em]">Plataforma</th>
            <th className="p-5 text-zinc-500 text-[10px] md:text-xs uppercase font-black tracking-[0.2em]">Dificuldade</th>
            <th className="p-5 text-zinc-500 text-[10px] md:text-xs uppercase font-black tracking-[0.2em]">Velocidade</th>
            <th className="p-5 text-zinc-500 text-[10px] md:text-xs uppercase font-black tracking-[0.2em]">Tipo de KYC</th>
            <th className="p-5 text-zinc-500 text-[10px] md:text-xs uppercase font-black tracking-[0.2em]">Avaliação</th>
          </tr>
        </thead>

        <tbody className="divide-y divide-white/[0.05]">
          {[
            {
              name: "Brazino777",
              diff: "Muito Fácil",
              speed: "Instantâneo",
              kyc: "Gov.br Sync",
              stars: "⭐⭐⭐⭐⭐",
              color: "text-emerald-400",
              isWinner: true
            },
            {
              name: "1WIN",
              diff: "Fácil",
              speed: "5-15 min",
              kyc: "AI Biometrics",
              stars: "⭐⭐⭐⭐",
              color: "text-emerald-400",
              isWinner: false
            },
            {
              name: "888starz",
              diff: "Normal",
              speed: "Até 24h",
              kyc: "Manual / Docs",
              stars: "⭐⭐⭐⭐",
              color: "text-blue-400",
              isWinner: false
            },
            {
              name: "1xSlots",
              diff: "Mais difícil",
              speed: "Até 72h",
              kyc: "Rigoroso / Video",
              stars: "⭐⭐⭐",
              color: "text-red-400",
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
    
    {/* Мобильная подсказка */}
    <div className="md:hidden p-4 bg-emerald-500/10 border-t border-white/5 text-center">
      <p className="text-emerald-400 text-[10px] font-black uppercase tracking-widest leading-tight">
        ← Deslize para ver mais detalhes →
      </p>
    </div>
  </div>
</div>
  <div className="mt-12 bg-gradient-to-r from-[#0a0a0a] to-[#050505] border border-white/10 rounded-3xl p-6 max-[500px]:p-4 md:p-10 flex flex-col md:flex-row items-center justify-between gap-6 shadow-xl">

          <div className="flex items-center gap-4 text-center md:text-left">
            <div className="bg-green-500 p-4 rounded-xl">
              <Trophy className="text-black" />
            </div>

            <div>
              <h2 className="text-xl md:text-3xl font-black uppercase">
                Vencedor: <span className="text-green-500">{leaders[3].title}</span>
              </h2>
              <p className="text-zinc-400 text-xs md:text-sm mt-1">
                verificação simples
              </p>
            </div>
          </div>

          <div className="text-center md:text-right">
            <p className="text-zinc-500 text-xs uppercase">Score</p>
            <p className="text-3xl font-black text-green-500">1 / 15</p>
          </div>

        </div>
        <Mindep/>
    </div>
  );
}