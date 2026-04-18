import { leaders } from "./datapartnes";
import { Check, Zap, Trophy } from "lucide-react";

export default function Sravnevs() {
  return (
    <section className="  py-10">
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

        {/* TABLE WRAPPER */}
        <div className="w-full overflow-x-auto">
          <table className="min-w-[900px] w-full border-separate border-spacing-y-3">

            {/* HEAD */}
            <thead>
              <tr className="text-zinc-500 text-[10px] uppercase tracking-[3px]">
                <th className="text-left px-4">Plataforma</th>
                <th className="text-left px-4">Jogos</th>
                <th className="text-center px-4">PIX</th>
                <th className="text-center px-4">App</th>
                <th className="text-right px-4">Mercado</th>
              </tr>
            </thead>

            {/* BODY */}
            <tbody>
              {leaders.map((leader) => (
                <tr
                  key={leader.id}
                  className="bg-slate-900 hover:bg-[#121212] transition rounded-2xl"
                >

                  {/* PLATFORM */}
                  <td className="px-4 max-[500px]:px-2  py-5 rounded-l-2xl border border-white/5">
                    <div className="flex items-center gap-3">
                      <img
                        src={leader.logo}
                        alt={leader.title}
                        className="w-10 h-10 object-contain"
                      />
                      <span className="text-white font-bold uppercase text-sm">
                        {leader.title}
                      </span>
                    </div>
                  </td>

                  {/* GAMES */}
                  <td className="px-4 min-[500px]:px-1 py-5 border-t border-b border-white/5">
                    <div className="pl-3 max-[500px]:pl-0">
                      <p className="text-white pl-1 font-bold">{leader.colgame}</p>
                      <p className="text-zinc-600 text-[10px] uppercase">
                        jogos ativos
                      </p>
                    </div>
                  </td>

                  {/* PIX */}
                  <td className="px-4 min-[500px]:px-1  py-5 text-center border-t border-b border-white/5">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-green-500/10 border border-green-500/20">
                      <Zap size={14} className="text-green-500" />
                      <span className="text-green-500 text-xs font-bold">
                        {leader.pixrab}
                      </span>
                    </div>
                  </td>

                  {/* APP */}
                  <td className="px-4 min-[500px]:px-1  py-5 text-center border-t border-b border-white/5">
                    <div className="inline-flex items-center justify-center">
                      <Check className="text-blue-500" size={18} />
                    </div>
                  </td>

                  {/* MARKET */}
                  <td className="px-4 min-[500px]:px-1 py-5 text-right  rounded-r-2xl border border-white/5">
                    <span className="text-white pr-6 max-[500px]:pr-4 font-bold">
                      {leader.vozrast}
                    </span>
                  </td>

                </tr>
              ))}
            </tbody>

          </table>
        </div>

        {/* WINNER CARD */}
        <div className="mt-10 bg-gray-900 border rounded-2xl p-6 md:p-10 text-center md:text-left flex flex-col md:flex-row items-center justify-between gap-6">

          <div className="flex items-center gap-4">
            <div className="bg-green-500 p-4 rounded-xl">
              <Trophy className="text-black" />
            </div>

            <div>
              <h2 className="text-xl md:text-3xl font-black text-white uppercase">
                Vencedor: <span className="text-green-500">{leaders[0].title}</span>
              </h2>
              <p className="text-zinc-500 text-xs md:text-sm mt-1">
                Melhor performance geral em 2026
              </p>
            </div>
          </div>

          <div className="text-center md:text-right">
            <p className="text-zinc-500 text-xs uppercase">Score</p>
            <p className="text-3xl font-black text-green-500">1 / 15</p>
          </div>

        </div>

      </div>
    </section>
  );
}