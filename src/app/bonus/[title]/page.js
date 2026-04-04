import { leaders } from "./datapartnes";
import Image from "next/image";
import { notFound } from "next/navigation";
import Hp from './Hp'
import { Star, ShieldCheck, Zap, Trophy, Gift, ChevronRight, Timer, Coins, Percent } from "lucide-react";

export default async function Page({ params }) {
  const { title } = await params;
  const decodedTitle = decodeURIComponent(title);

  const leader = leaders.find(
    (l) => l.title.toLowerCase() === decodedTitle.toLowerCase()
  );

  if (!leader) return notFound();

  return (
    <div className="bg-[#050505] min-h-screen text-white pb-24 selection:bg-green-500/30 overflow-x-hidden">
      <Hp />
      
      <main className="max-w-6xl mx-auto px-3 sm:px-4 pt-6 md:pt-12">
        
        {/* --- BONUS HEADER BLOCK --- */}
        <div className="relative mb-6 md:mb-10 p-[1px] bg-gradient-to-r from-green-500/40 via-yellow-400/20 to-transparent rounded-[30px] md:rounded-[40px] shadow-[0_20px_50px_rgba(34,197,94,0.15)]">
          <div className="bg-[#0a0a0a] rounded-[29px] md:rounded-[39px] p-6 md:p-14 flex flex-col lg:flex-row items-center justify-between gap-8">
            
            <div className="flex flex-col items-center lg:items-start gap-6 w-full lg:w-2/3">
              {/* Badge Срочности */}
              <div className="flex items-center gap-2 px-4 py-1.5 bg-yellow-400 text-black rounded-full shadow-[0_0_20px_rgba(250,204,21,0.4)]">
                <Timer size={14} strokeWidth={3} className="animate-pulse" />
                <span className="text-[10px] md:text-xs font-black uppercase tracking-wider">Oferta Exclusiva: Expira em 24h</span>
              </div>
              
              <div className="flex flex-col md:flex-row items-center gap-6 md:gap-10">
                <div className="bg-black p-4 rounded-3xl border border-white/10 shadow-2xl shrink-0">
                  <Image src={leader.logo} alt={leader.title} width={180} height={70} className="object-contain" />
                </div>
                <div className="text-center md:text-left">
                  <h1 className="text-5xl md:text-4xl font-black uppercase italic tracking-tighter leading-none text-transparent bg-clip-text bg-gradient-to-b from-white to-zinc-500">
                    {leader.bonus}
                  </h1>
                  <p className="text-green-500 font-black uppercase tracking-[4px] text-xs md:text-sm mt-2">Bônus de Boas-Vindas Ativado ✅</p>
                </div>
              </div>
            </div>

            {/* Score Card */}
            <div className="bg-white/5 border border-white/10 p-6 md:p-8 rounded-[35px] text-center w-full lg:w-auto min-w-[200px] backdrop-blur-md">
              <span className="text-zinc-500 text-[10px] font-black uppercase tracking-widest mb-3 block">Nota do Bônus</span>
              <div className="text-4xl md:text-5xl font-black italic text-yellow-400 mb-2">5<span className="text-zinc-600 text-xl md:text-2xl">/5</span></div>
              <div className="flex justify-center gap-1 text-yellow-400/50">
                {[...Array(5)].map((_, i) => <Star key={i} size={14} fill="currentColor" />)}
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 md:gap-10">
          
          <div className="lg:col-span-2 space-y-8 md:space-y-12">
            
            {/* CTA ПРИЗЫВ: Крупный блок перед текстом */}
            <div className="bg-gradient-to-br from-green-600 to-green-900 rounded-[35px] p-8 md:p-12 relative overflow-hidden group shadow-2xl">
                <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:scale-110 transition-transform">
                    <Gift size={200} />
                </div>
                <div className="relative z-10">
                    <h3 className="text-3xl md:text-2xl font-black uppercase italic mb-6 leading-tight">Ganhe seu bônus de <br /> {leader.bonus} agora!</h3>
                    <div className="flex flex-wrap gap-4 mb-8">
                        {["Depósito Instantâneo", "Saque PIX", "Sem Taxas"].map((tag, i) => (
                            <span key={i} className="bg-black/20 backdrop-blur-sm px-4 py-2 rounded-xl text-[10px] md:text-xs font-black uppercase border border-white/10">{tag}</span>
                        ))}
                    </div>
                    <a href={leader.affiliateLink} className="inline-flex items-center gap-3 bg-white text-black px-10 py-5 rounded-2xl font-black uppercase italic text-lg hover:scale-105 transition-transform">
                        Resgatar Bônus <ChevronRight size={20} />
                    </a>
                </div>
            </div>

            {/* ОПИСАНИЕ УСЛОВИЙ */}
            <section className="bg-[#0a0a0a] border border-white/5 rounded-[40px] p-8 md:p-14">
               <div className="space-y-8">
                  <div className="flex items-center gap-4">
                    <Percent className="text-green-500" size={32} />
                    <h2 className="text-2xl md:text-4xl font-black uppercase italic tracking-tight">Regras do Bônus {leader.title}</h2>
                  </div>

                  <div className="prose prose-invert max-w-none">
                    <p className="text-zinc-400 text-lg md:text-xl leading-relaxed whitespace-pre-line font-medium">
                      {leader.bonususlov}
                    </p>
                  </div>
               </div>
            </section>
          </div>

          {/* SIDEBAR: Сфокусирован на "Почему этот бонус лучший" */}
          <aside className="space-y-6">
            <div className="md:sticky md:top-28 space-y-6">
              
              <div className="bg-[#0a0a0a] border border-white/10 p-8 rounded-[40px] relative overflow-hidden">
                {/* Подсветка */}
                <div className="absolute -top-10 -right-10 w-32 h-32 bg-green-500/10 blur-[50px] rounded-full"></div>
                
                <h3 className="text-xs font-black uppercase tracking-[3px] text-zinc-500 mb-8 flex items-center gap-2">
                  <Zap size={14} className="text-yellow-400" /> Benefícios VIP
                </h3>
                
                <div className="space-y-6">
                  {[
                    { label: "Bônus Máximo", val: leader.bonus, color: "text-green-500" },
                    { label: "Rollover", val: "Baixo / Justo", color: "text-white" },
                    { label: "Depósito PIX", val: "A partir R$ 1", color: "text-white" },
                    { label: "Prazo Saque", val: "Até 5 min", color: "text-yellow-400" },
                    { label: "Suporte", val: "Chat Online 24h", color: "text-white" },
                  ].map((fact, i) => (
                    <div key={i} className="flex justify-between items-center border-b border-white/5 pb-4">
                      <span className="text-zinc-600 font-bold uppercase text-[10px]">{fact.label}</span>
                      <span className={`${fact.color} font-black uppercase italic text-[11px] md:text-sm`}>{fact.val}</span>
                    </div>
                  ))}
                </div>

                <div className="mt-10 p-6 bg-green-500/5 rounded-3xl border border-green-500/20 text-center">
                   <p className="text-white text-[11px] font-black uppercase mb-4 italic">Métodos Aceitos</p>
                   <div className="flex justify-center gap-6 opacity-80">
                      <Zap size={24} className="text-green-500" />
                      <Coins size={24} className="text-yellow-500" />
                      <div className="font-black text-xl italic leading-none">PIX</div>
                   </div>
                </div>
              </div>

              {/* Мини-инфо блок */}
              <div className="p-8 bg-white/5 rounded-[40px] border border-white/5 text-center">
                 <ShieldCheck className="mx-auto text-zinc-700 mb-4" size={40} />
                 <p className="text-[10px] text-zinc-500 font-bold uppercase tracking-widest leading-relaxed">
                   Licença Auditada <br /> {leader.title} Gaming Int.
                 </p>
              </div>
            </div>
          </aside>
        </div>
      </main>

      {/* FOOTER ACCENT */}
      <div className="fixed bottom-0 left-0 w-full h-1.5 flex z-[100] shadow-[0_-5px_20px_rgba(0,151,57,0.3)]">
        <div className="flex-1 bg-[#009739]"></div>
        <div className="flex-1 bg-[#FEDD00]"></div>
        <div className="flex-1 bg-[#012169]"></div>
      </div>
    </div>
  );
}