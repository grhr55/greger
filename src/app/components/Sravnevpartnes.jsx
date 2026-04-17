import { leaders } from "./datapartnes";
import { Check, Zap, Trophy, Gamepad2, Globe } from "lucide-react";

export default function Sravnevs() {
  return (
    <section className="px-4 py-10">
      <div className="max-w-6xl mx-auto">

        {/* HEADER */}
        <div className="text-center mb-10 md:mb-16">
          <h3 className="text-3xl md:text-6xl font-black text-white uppercase italic tracking-tight mb-4 md:mb-6">
            Comparativo <span className="text-green-500">Elite 2026</span>
          </h3>
          <p className="text-zinc-500 text-xs md:text-sm font-medium max-w-2xl mx-auto">
            Comparação direta das principais plataformas do Brasil com foco em bônus, PIX e experiência.
          </p>
        </div>

        {/* DESKTOP TABLE */}
        <div className="hidden md:block w-full overflow-x-auto">
          <table className="min-w-[900px] w-full border-separate border-spacing-y-3">
            <thead>
              <tr className="text-zinc-500 text-[10px] uppercase tracking-[3px]">
                <th className="text-left px-4">Plataforma</th>
                <th className="text-left px-4">Jogos</th>
                <th className="text-center px-4">PIX</th>
                <th className="text-center px-4">App</th>
                <th className="text-right px-4">Mercado</th>
              </tr>
            </thead>
            <tbody>
              {leaders.map((leader) => (
                <tr
                  key={leader.id}
                  className="bg-[#0a0a0a] hover:bg-[#121212] transition rounded-2xl"
                >
                  <td className="px-4 py-5 rounded-l-2xl border border-white/5">
                    <div className="flex items-center gap-3">
                      <img src={leader.logo} alt={leader.title} className="w-10 h-10 object-contain" />
                      <span className="text-white font-bold uppercase text-sm">{leader.title}</span>
                    </div>
                  </td>
                  <td className="px-4 py-5 border-t border-b border-white/5">
                    <div>
                      <p className="text-white font-bold">{leader.colgame}</p>
                      <p className="text-zinc-600 text-[10px] uppercase">jogos ativos</p>
                    </div>
                  </td>
                  <td className="px-4 py-5 text-center border-t border-b border-white/5">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-green-500/10 border border-green-500/20">
                      <Zap size={14} className="text-green-500" />
                      <span className="text-green-500 text-xs font-bold">{leader.pixrab}</span>
                    </div>
                  </td>
                  <td className="px-4 py-5 text-center border-t border-b border-white/5">
                    <div className="inline-flex items-center justify-center">
                      <Check className="text-blue-500" size={18} />
                    </div>
                  </td>
                  <td className="px-4 py-5 text-right rounded-r-2xl border border-white/5">
                    <span className="text-white font-bold">{leader.vozrast}</span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* MOBILE CARDS */}
        <div className="flex flex-col gap-3 md:hidden">
          {leaders.map((leader, index) => (
            <div
              key={leader.id}
              className="bg-[#0a0a0a] border border-white/5 rounded-2xl p-4 active:bg-[#121212] transition"
            >
              {/* Card Top: logo + name + rank badge */}
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-3">
                  <img src={leader.logo} alt={leader.title} className="w-10 h-10 object-contain" />
                  <span className="text-white font-black uppercase text-sm tracking-wide">
                    {leader.title}
                  </span>
                </div>
                <span className="text-zinc-600 text-xs font-bold">
                  #{index + 1}
                </span>
              </div>

              {/* Card Stats Row */}
              <div className="grid grid-cols-3 gap-2">

                {/* Games */}
                <div className="bg-white/5 rounded-xl p-3 flex flex-col items-center gap-1">
                  <Gamepad2 size={14} className="text-zinc-400" />
                  <p className="text-white font-bold text-sm leading-none">{leader.colgame}</p>
                  <p className="text-zinc-600 text-[9px] uppercase tracking-wide text-center">Jogos</p>
                </div>

                {/* PIX */}
                <div className="bg-green-500/10 border border-green-500/20 rounded-xl p-3 flex flex-col items-center gap-1">
                  <Zap size={14} className="text-green-500" />
                  <p className="text-green-400 font-bold text-sm leading-none">{leader.pixrab}</p>
                  <p className="text-green-700 text-[9px] uppercase tracking-wide">PIX</p>
                </div>

                {/* Market */}
                <div className="bg-white/5 rounded-xl p-3 flex flex-col items-center gap-1">
                  <Globe size={14} className="text-zinc-400" />
                  <p className="text-white font-bold text-sm leading-none truncate max-w-full text-center">{leader.vozrast}</p>
                  <p className="text-zinc-600 text-[9px] uppercase tracking-wide">Mercado</p>
                </div>

              </div>

              {/* App badge */}
              <div className="mt-3 flex items-center gap-2">
                <Check size={13} className="text-blue-500" />
                <span className="text-blue-400 text-[11px] font-semibold uppercase tracking-wide">App disponível</span>
              </div>

            </div>
          ))}
        </div>

        {/* WINNER CARD */}
        <div className="mt-6 md:mt-10 bg-[#0a0a0a] border border-green-500/20 rounded-2xl p-5 md:p-10 flex flex-col md:flex-row items-center justify-between gap-4 md:gap-6">

          <div className="flex items-center gap-4">
            <div className="bg-green-500 p-3 md:p-4 rounded-xl shrink-0">
              <Trophy className="text-black" size={20} />
            </div>
            <div>
              <h2 className="text-lg md:text-3xl font-black text-white uppercase leading-tight">
                Vencedor: <span className="text-green-500">{leaders[0].title}</span>
              </h2>
              <p className="text-zinc-500 text-xs mt-1">
                Melhor performance geral em 2026
              </p>
            </div>
          </div>

          <div className="flex flex-row md:flex-col items-center md:items-end gap-2 md:gap-0">
            <p className="text-zinc-500 text-xs uppercase">Score</p>
            <p className="text-2xl md:text-3xl font-black text-green-500">1 / 15</p>
          </div>

        </div>

      </div>
    </section>
  );
}