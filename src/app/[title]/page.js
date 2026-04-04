import { leaders } from "../components/datapartnes";
import Image from "next/image";
import { notFound } from "next/navigation";
import Hp from '../components/Hp';
import { Star, ShieldCheck, Zap, Trophy, CreditCard, ChevronRight, Info, Coins } from "lucide-react";

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
        
        {/* --- HEADER BLOCK --- */}
        <div className="relative mb-6 md:mb-10 p-[1px] bg-gradient-to-r from-white/10 to-transparent rounded-[30px] md:rounded-[40px]">
          <div className="bg-[#0a0a0a] rounded-[29px] md:rounded-[39px] p-5 md:p-12 flex flex-col md:flex-row items-center justify-between gap-6 md:gap-8">
            <div className="flex flex-col items-center md:items-start gap-4 md:gap-6 w-full md:w-auto">
  
              <div className="flex items-center gap-2 px-3 py-1 bg-green-500/10 border border-green-500/20 rounded-full">
                <ShieldCheck size={12} className="text-green-500" />
                <span className="text-green-500 text-[9px] md:text-[10px] font-black uppercase tracking-[1px] md:tracking-[2px]">Operador Verificado</span>
              </div>
              
              <div className="flex flex-col md:flex-row items-center gap-4 md:gap-8 w-full">
                <div className="bg-black p-3 md:p-4 rounded-2xl md:rounded-3xl shadow-xl w-fit">
                  <Image
                    src={leader.logo}
                    alt={leader.title}
                    width={120}
                    height={60}
                    className="object-contain md:w-[160px] md:h-[60px]"
                  />
                </div>
                <div className="text-center md:text-left">
                  <h1 className="text-4xl sm:text-5xl md:text-8xl font-black uppercase italic tracking-tighter leading-tight md:leading-none mb-1">
                    {leader.title}
                  </h1>
                  <p className="text-zinc-500 font-bold uppercase tracking-[2px] md:tracking-[4px] text-[10px]">Review Oficial Brasil 2026</p>
                </div>
              </div>
            </div>

            {/* Рейтинг: на мобилках компактнее */}
            <div className="bg-white/5 border border-white/10 p-4 md:p-6 rounded-[24px] md:rounded-[30px] text-center w-full md:w-auto">
              <div className="flex justify-center gap-1 text-yellow-400 mb-1 md:mb-2">
                {[...Array(5)].map((_, i) => <Star key={i} size={16} fill="currentColor" className="md:w-[22px] md:h-[22px]" />)}
              </div>
              <p className="text-lg md:text-2xl font-black italic">5.0 / 5.0</p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 md:gap-10">
          
          <div className="lg:col-span-2 space-y-8 md:space-y-12">
            
            {/* Большой Баннер */}
            <div className="relative group overflow-hidden rounded-[30px] md:rounded-[40px] border border-white/10 shadow-2xl">
              <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-transparent to-transparent z-10"></div>
              <Image
                src={leader.fotopart}
                alt="Promoção"
                width={1200}
                height={600}
                className="w-full h-auto object-cover transition-transform duration-1000 group-hover:scale-105 min-h-[200px]"
              />
              <div className="absolute bottom-4 left-4 md:bottom-8 md:left-8 z-20 pr-4">
                <span className="bg-yellow-400 text-black px-2 py-0.5 md:px-4 md:py-1 rounded md:rounded-lg font-black uppercase text-[9px] md:text-xs mb-2 inline-block">Oferta Ativa</span>
                <h2 className="text-2xl sm:text-3xl md:text-5xl font-black uppercase italic leading-tight">{leader.bonus}</h2>
              </div>
            </div>

            {/* Текстовый блок Обзора */}
            <section className="bg-[#0a0a0a] border border-white/5 rounded-[30px] md:rounded-[45px] p-6 md:p-14 relative overflow-hidden">
               <div className="absolute top-0 right-0 p-10 opacity-[0.02] pointer-events-none hidden md:block">
                  <Info size={200} />
               </div>
               
               <div className="relative z-10 space-y-6 md:space-y-8">
                  <div className="flex items-center gap-3 md:gap-4">
                    <div className="w-2 md:w-3 h-8 md:h-12 bg-green-500 rounded-full shadow-[0_0_20px_rgba(34,197,94,0.5)]"></div>
                    <h2 className="text-2xl md:text-4xl font-black uppercase italic tracking-tight">Sobre a {leader.title}</h2>
                  </div>

                  <div className="prose prose-invert max-w-none">
                    <p className="text-zinc-400 text-base md:text-xl leading-[1.6] md:leading-[1.8] font-medium whitespace-pre-line first-letter:text-4xl md:first-letter:text-5xl first-letter:font-black first-letter:text-white first-letter:mr-2 md:first-letter:mr-3 first-letter:float-left">
                      {leader.kompania}
                    </p>
                  </div>
               </div>
            </section>
          </div>

          {/* SIDEBAR */}
          <aside className="space-y-6">
            <div className="md:sticky md:top-28 space-y-6">
              
              {/* Кнопка регистрации: теперь во всю ширину */}
              <a href="#" className="group relative block w-full bg-green-500 p-0.5 rounded-[20px] md:rounded-3xl transition-transform active:scale-95">
                 <div className="bg-green-500 text-black font-black py-5 md:py-8 rounded-[18px] md:rounded-[22px] text-center text-lg md:text-2xl uppercase italic flex items-center justify-center gap-2 group-hover:bg-green-400 transition-colors">
                    Jogar Agora <ChevronRight size={24} strokeWidth={3} className="md:w-[28px]" />
                 </div>
              </a>

              {/* Таблица характеристик */}
              <div className="bg-[#0a0a0a] border border-white/10 p-6 md:p-8 rounded-[30px] md:rounded-[40px]">
                <h3 className="text-xs font-black uppercase tracking-[2px] text-zinc-500 mb-6 flex items-center gap-2">
                  <Trophy size={14} /> Quick Facts
                </h3>
                
                <div className="space-y-4 md:space-y-6">
                  {[
                    { label: "Velocidade PIX", val: "Instantâneo", color: "text-green-500" },
                    { label: "Depósito Mín", val: "R$ 1.00", color: "text-white" },
                    { label: "Suporte", val: "24/7 PT-BR", color: "text-white" },
                    { label: "Odds", val: "Altas", color: "text-yellow-400" },
                    { label: "licença", val: "№8048/JAZ2018-040", color: "text-yellow-400" },
                    { label: "no mercado", val: "2018", color: "text-yellow-400" },
                  ].map((fact, i) => (
                    <div key={i} className="flex justify-between items-center border-b border-white/5 pb-3 md:pb-4">
                      <span className="text-zinc-600 font-bold uppercase text-[9px] md:text-[10px]">{fact.label}</span>
                      <span className={`${fact.color} font-black uppercase italic text-xs md:text-sm`}>{fact.val}</span>
                    </div>
                  ))}
                </div>

                <div className="mt-8 p-4 md:p-6 bg-white/5 rounded-2xl md:rounded-3xl border border-white/10 text-center">
                   <p className="text-zinc-500 text-[9px] font-bold uppercase mb-3">Métodos de Pagamento</p>
                   <div className="flex justify-center gap-4 grayscale opacity-70">
                      <CreditCard size={20} className="md:w-6" />
                      <Zap size={20} className="md:w-6" />
                      <Coins size={20} className="md:w-6" />
                   </div>
                </div>
              </div>

              <p className="text-center text-[9px] md:text-[10px] text-zinc-700 font-bold uppercase tracking-widest leading-relaxed px-6 md:px-10">
                Aposte com responsabilidade. Menores de 18 anos são proibidos.
              </p>
            </div>
          </aside>

         
<section className="mt-10 space-y-6">
  <div className="flex items-center gap-3 md:gap-4">
    <div className="w-2 md:w-3 h-8 md:h-10 bg-blue-500 rounded-full shadow-[0_0_20px_rgba(59,130,246,0.5)]"></div>
    <h3 className="text-2xl md:text-3xl font-black uppercase italic tracking-tight">
      Melhores Jogos <span className="text-blue-500">Popular</span>
    </h3>
  </div>


</section>


        </div>
      </main>

      {/* Флаг-акцент: всегда на виду */}
      <div className="fixed bottom-0 left-0 w-full h-1 md:h-1.5 flex z-[100]">
        <div className="flex-1 bg-[#009739]"></div>
        <div className="flex-1 bg-[#FEDD00]"></div>
        <div className="flex-1 bg-[#012169]"></div>
      </div>
    </div>
  );
}