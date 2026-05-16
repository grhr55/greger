import { leaders } from "./datapartnes";
import { Check, Zap, Trophy } from "lucide-react";
import Sposobreg from './Sposobreg'


export default function Sravnevs() {
  return (
    <section className="  ">
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
                  className="bg-[#080707] hover:bg-[#152733] transition rounded-2xl"
                >

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
     <div className="mt-4 sm:mt-7 bg-gray-900 border border-white/10 rounded-xl sm:rounded-2xl p-3 sm:p-6 md:p-10 relative flex flex-col md:flex-row items-stretch md:items-center justify-between gap-4 md:gap-6">

  {/* Контентная часть */}
  <div className="flex items-center gap-3 sm:gap-4 flex-1 min-w-0 pr-12 md:pr-0">
    {/* Компактный кубок для мобилки */}
    <div className="bg-green-500 p-2.5 sm:p-4 rounded-lg sm:rounded-xl flex-shrink-0">
      <Trophy size={20} className="text-black sm:w-6 sm:h-6" />
    </div>

    {/* Тексты */}
    <div className="min-w-0">
      <h2 className="text-sm sm:text-xl md:text-3xl font-black text-white uppercase tracking-tight truncate">
        Vencedor: <span className="text-green-500">{leaders[0].title}</span>
      </h2>
      <p className="text-amber-50 text-[11px] sm:text-xs md:text-sm mt-0.5 sm:mt-1 leading-tight sm:leading-normal font-medium opacity-90">
        1ª rodada {leaders[0].title} pela resposta rápida e pelo extenso banco de dados de jogos da PIX.
      </p>
    </div>
  </div>

  {/* Блок Score: на мобилках уходит в абсолют в угол, на ПК встает в общую линию */}
  <div className="absolute top-3 right-3 text-right md:relative md:top-auto md:right-auto md:text-right flex flex-col justify-center flex-shrink-0">
    <p className="text-zinc-500 text-[9px] md:text-xs uppercase font-bold tracking-wider leading-none md:leading-normal">Score</p>
    <p className="text-lg md:text-3xl font-black text-green-500 leading-none md:leading-normal mt-0.5">1 / 15</p>
  </div>

</div>

      </div>

      <Sposobreg/>

    </section>
  );
}