import { leaders } from './datapartnes'
import Image from "next/image";
import {  Trophy } from "lucide-react";

export default function Sposobreg() {
  return (
    <section className="py-16  text-white">
      <div className="max-w-6xl mx-auto ">

        {/* HEADER */}
        <div className="mb-16 text-center">
          <h2 className="text-3xl md:text-5xl font-black uppercase italic tracking-tight mb-3">
            Segunda rodada
          </h2>
          <p className="text-green-500 font-bold uppercase tracking-[2px] text-sm md:text-xs">
            Quem tem as melhores condições de inscrição?
          </p>
        </div>

        {/* LIST */}
        <div className="space-y-20">
          {leaders.map((item) => (
            <div key={item.id} className="space-y-10">

              {/* TITLE */}
              <h3 className="text-xl md:text-2xl font-extrabold  text-green-400 uppercase tracking-wide">
                {item.title}
              </h3>

              {/* IMAGE */}
              {item.fotoreger && (
                <div className="relative rounded-3xl overflow-hidden border border-white/10 shadow-2xl group">
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent z-10"></div>

                  <Image
                    src={item.fotoreger}
                    alt={item.title}
                    title={item.title}
                    width={1200}
                    height={500}
                    className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-700"
                  />

                  <div className="absolute bottom-4 left-4 z-20">
                    <span className="bg-green-500 text-black px-4 py-1 rounded-full font-black text-sm uppercase">
                      {item.title}
                    </span>
                  </div>
                </div>
              )}

              {/* METHODS */}
              <div className="grid md:grid-cols-2 gap-8">
                
                {/* FAST REG */}
                <div className="relative bg-gradient-to-br from-[#0a0a0a] to-[#050505] border border-green-500/20 rounded-3xl p-6 md:p-8 space-y-6 hover:border-green-500/40 transition">
                  <h3 className="text-green-400 font-black uppercase text-sm tracking-wide">
                    {item.pravilareg.fast.title}
                  </h3>
                  <p className="text-zinc-400 text-sm md:text-base leading-relaxed">
                    {item.pravilareg.fast.desc}
                  </p>
                  <div className="space-y-4">
                    {item.pravilareg.fast.steps.map((step, i) => (
                      <div key={i} className="flex gap-3 items-start">
                        <span className="text-green-400 mt-1">●</span>
                        <div className="text-sm md:text-base">
                          <span className="text-white font-bold block">{step.label}</span>
                          <span className="text-zinc-400">{step.val}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* SOCIAL REG */}
                <div className="relative bg-gradient-to-br from-[#0a0a0a] to-[#050505] border border-blue-500/20 rounded-3xl p-6 md:p-8 space-y-6 hover:border-blue-500/40 transition">
                  <h3 className="text-blue-400 font-black uppercase text-sm tracking-wide">
                    {item.pravilareg.social.title}
                  </h3>
                  <p className="text-zinc-400 text-sm md:text-base leading-relaxed">
                    {item.pravilareg.social.desc}
                  </p>
                  <div className="space-y-4">
                    {item.pravilareg.social.steps.map((step, i) => (
                      <div key={i} className="flex gap-3 items-start">
                        <span className="text-blue-400 mt-1">●</span>
                        <div className="text-sm md:text-base">
                          <span className="text-white font-bold block">{step.label}</span>
                          <span className="text-zinc-400">{step.val}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

              </div>
            </div>
          ))}
        </div>

        {/* TABLE */}
        <div className="overflow-x-auto mt-16">
          <table className="w-full text-sm text-left border border-white/10 rounded-3xl overflow-hidden">
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
              <tr className="border-t border-white/10 hover:bg-white/5 transition">
                <td className="p-4 font-bold">1xSlots</td>
                <td className="p-4 text-green-400">Muito fácil</td>
                <td className="p-4">⚡ Rápido</td>
                <td className="p-4 text-yellow-400">Depois do saque</td>
                <td className="p-4">⭐⭐⭐⭐⭐</td>
              </tr>

              <tr className="border-t border-white/10 hover:bg-white/5 transition">
                <td className="p-4 font-bold">1WIN</td>
                <td className="p-4 text-green-400">Fácil</td>
                <td className="p-4">⚡ Rápido</td>
                <td className="p-4 text-yellow-400">Médio</td>
                <td className="p-4">⭐⭐⭐⭐</td>
              </tr>

              <tr className="border-t border-white/10 hover:bg-white/5 transition">
                <td className="p-4 font-bold">888starz</td>
                <td className="p-4 text-blue-400">Normal</td>
                <td className="p-4">⚡ Médio</td>
                <td className="p-4 text-red-400">Obrigatório</td>
                <td className="p-4">⭐⭐⭐⭐</td>
              </tr>

              <tr className="border-t border-white/10 hover:bg-white/5 transition">
                <td className="p-4 font-bold">Brazino777</td>
                <td className="p-4 text-red-400">Mais difícil</td>
                <td className="p-4">⏳ Médio</td>
                <td className="p-4 text-red-500">Imediato (CPF)</td>
                <td className="p-4">⭐⭐⭐</td>
              </tr>
            </tbody>
          </table>
        </div>

         <div className="mt-10 bg-gray-900 border rounded-2xl p-6 md:p-10 text-center md:text-left flex flex-col md:flex-row items-center justify-between gap-6">
        
                  <div className="flex items-center gap-4">
                    <div className="bg-green-500 p-4 rounded-xl">
                      <Trophy className="text-black" />
                    </div>
        
                    <div>
                      <h2 className="text-xl md:text-3xl font-black text-white uppercase">
                        Vencedor: <span className="text-green-500">{leaders[2].title}</span>
                      </h2>
                      <p className="text-amber-50 text-xs md:text-sm mt-1">
                       2 rodada {leaders[0].title} Para um cadastro fácil e rápido
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
  )
}