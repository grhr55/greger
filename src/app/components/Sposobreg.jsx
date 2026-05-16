import { leaders } from './datapartnes'
import Image from "next/image";
import { Trophy } from "lucide-react";
import Verifik from './Verifik'

export default function Sposobreg() {
  return (
    <section className="py-16 max-[500px]:py-10 text-white bg-gradient-to-b from-[#061409] ">
      <div className="max-w-6xl mx-auto">

        {/* HEADER */}
        <div className="mb-16 text-center">
          <h2 className="text-3xl md:text-5xl font-black uppercase italic tracking-tight mb-3">
            Segunda rodada
          </h2>
          <p className="text-green-500 font-bold uppercase tracking-[2px] text-xs md:text-sm">
            Quem tem as melhores condições de inscrição e como se inscrever?
          </p>
        </div>

        {/* LIST */}
        <div className="space-y-16 max-[500px]:space-y-8">
          {leaders.map((item) => (
            <div key={item.id} className="space-y-10 max-[500px]:space-y-5">

              {/* TITLE */}
              <h3 className="text-3xl md:text-4xl font-black text-center text-amber-50 uppercase tracking-wide">
                {item.title}
              </h3>

              {/* IMAGE */}
              {item.fotoreger && (
                <div className="relative rounded-3xl overflow-hidden border border-white/10 shadow-2xl group">
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent z-10"></div>

                  <Image
                    src={item.fotoreger}
                    alt={item.title}
                    title={item.title}
                    width={1200}
                    height={500}
                    className="w-full h-auto object-cover group-hover:scale-105 transition duration-700"
                  />

                  <div className="absolute bottom-4 left-4 z-20">
                    <span className="bg-green-500 text-black px-4 py-1 rounded-full font-black text-xs md:text-sm uppercase">
                      {item.title}
                    </span>
                  </div>
                </div>
              )}

            
              <div className="grid md:grid-cols-2 gap-6 md:gap-8">

             
                <div className="bg-gradient-to-br from-[#0a0a0a] to-[#050505] border border-green-500/20 rounded-3xl p-6 md:p-8 hover:border-green-500/40 transition shadow-lg">
                  <h3 className="text-green-400 font-black uppercase text-sm mb-3">
                    {item.pravilareg.fast.title}
                  </h3>

                  <p className="text-zinc-400 text-sm mb-5 leading-relaxed">
                    {item.pravilareg.fast.desc}
                  </p>

                  <div className="space-y-4">
                    {item.pravilareg.fast.steps.map((step, i) => (
                      <div key={i} className="flex gap-3">
                        <span className="text-green-400 mt-1">●</span>
                        <div className="text-sm">
                          <p className="text-white font-bold">{step.label}</p>
                          <p className="text-zinc-400">{step.val}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* SOCIAL */}
                <div className="bg-gradient-to-br from-[#0a0a0a] to-[#050505] border border-blue-500/20 rounded-3xl p-6 md:p-8 hover:border-blue-500/40 transition shadow-lg">
                  <h3 className="text-blue-400 font-black uppercase text-sm mb-3">
                    {item.pravilareg.social.title}
                  </h3>

                  <p className="text-zinc-400 text-sm mb-5 leading-relaxed">
                    {item.pravilareg.social.desc}
                  </p>

                  <div className="space-y-4">
                    {item.pravilareg.social.steps.map((step, i) => (
                      <div key={i} className="flex gap-3">
                        <span className="text-blue-400 mt-1">●</span>
                        <div className="text-sm">
                          <p className="text-white font-bold">{step.label}</p>
                          <p className="text-zinc-400">{step.val}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

              </div>
            </div>
          ))}
        </div>

        

       
        <div className="overflow-x-auto mt-16">
          <h3 className='text-center pb-10 text-3xl max-[500px]:text-2xl md:text-5xl font-black uppercase italic tracking-tight'>Resultado da tabela</h3>
          <table className="w-full text-sm border border-white/10 rounded-3xl overflow-hidden">
            <thead className="bg-white/5 text-zinc-400 uppercase text-[10px] md:text-xs tracking-widest">
              <tr>
                <th className="p-4">Plataforma</th>
                <th className="p-4">Registro</th>
                <th className="p-4">Velocidade</th>
                <th className="p-4">KYC</th>
                <th className="p-4">Avaliação</th>
              </tr>
            </thead>

            <tbody className="text-white">
              {[
                ["1xSlots","Muito fácil","⚡ Rápido","Depois do saque","⭐⭐⭐⭐⭐","text-green-400"],
                ["1WIN","Fácil","⚡ Rápido","Médio","⭐⭐⭐⭐","text-green-400"],
                ["888starz","Normal","⚡ Médio","Obrigatório","⭐⭐⭐⭐","text-blue-400"],
                ["Brazino777","Mais difícil","⏳ Médio","Imediato (CPF)","⭐⭐⭐","text-red-400"],
              ].map((row, i) => (
                <tr key={i} className="border-t border-white/10 hover:bg-white/5 transition">
                  <td className="p-4 font-bold">{row[0]}</td>
                  <td className={`p-4 ${row[5]}`}>{row[1]}</td>
                  <td className="p-4">{row[2]}</td>
                  <td className="p-4">{row[3]}</td>
                  <td className="p-4">{row[4]}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* WINNER */}
      

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
                Vencedor: <span className="text-green-500">{leaders[2].title}</span>
              </h2>
              <p className="text-amber-50 text-[11px] sm:text-xs md:text-sm mt-0.5 sm:mt-1 leading-tight sm:leading-normal font-medium opacity-90">
               Cadastro rápido e simples na 2ª rodada
              </p>
            </div>
          </div>
        
          {/* Блок Score: на мобилках уходит в абсолют в угол, на ПК встает в общую линию */}
          <div className="absolute top-3 right-3 text-right md:relative md:top-auto md:right-auto md:text-right flex flex-col justify-center flex-shrink-0">
            <p className="text-zinc-500 text-[9px] md:text-xs uppercase font-bold tracking-wider leading-none md:leading-normal">Score</p>
            <p className="text-lg md:text-3xl font-black text-green-500 leading-none md:leading-normal mt-0.5">1 / 15</p>
          </div>
        
        </div>

        <Verifik/>

      </div>
    </section>
  )
}