import Image from "next/image";
import Link from "next/link";
import Hp from '../components/Hp'
import { demogame } from "./demogame";
import { BookOpen, Zap, ShieldCheck, TrendingUp } from "lucide-react";
import FooterBrasil from '../jogos-demo/FooterBrasil'

export default function Sovet() {
  return (
    <section className="bg-[#061409] min-h-screen   overflow-hidden relative">
      <Hp />
      
      {/* Декоративный задний фон (зеленый туман) */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[300px] bg-green-500/5 blur-[120px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 relative z-10">
        
        {/* ЗАГОЛОВОК СЕКЦИИ: СТИЛЬ АНАЛИТИКИ */}
        <div className="pt-20 max-[500px]:pt-10 mb-16 text-center md:text-left">
          <div className="inline-flex items-center gap-2 bg-green-500/10 border border-green-500/20 px-4 py-2 rounded-full mb-6">
            <Zap size={14} className="text-green-500 fill-green-500 animate-pulse" />
            <span className="text-[10px] font-black uppercase tracking-[3px] text-green-500">Centro de Inteligência</span>
          </div>
          
          <h1 className="text-4xl md:text-6xl font-black uppercase italic text-white tracking-tighter leading-none">
            BIBLIOTECA DE <br />
            <span className="text-green-500 drop-shadow-[0_0_15px_rgba(34,197,94,0.3)]">ESTRATÉGIAS EXCLUSIVAS</span>
          </h1>
          <p className="mt-6 text-zinc-500 font-medium italic text-lg max-w-2xl">
            Selecione um jogo abaixo para acessar <span className="text-white">minutos pagadores</span>, padrões de aposta e esquemas testados por especialistas.
          </p>
        </div>

        {/* СЕТКА КАРТОЧЕК-СТАТЕЙ */}
        <div className="grid grid-cols-2  sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {demogame.map((game) => (
            <Link 
              key={game.id} 
              href={`/tips-and-strategies/${game.nickgame}`} 
              className="group relative bg-[#000000] border border-white/5 rounded-[40px] p-2 hover:border-green-500/40 transition-all duration-500 shadow-2xl hover:shadow-green-500/10 flex flex-col"
            >
              {/* Контейнер для изображения */}
              <div className="relative aspect-[1/1] rounded-[32px] overflow-hidden">
                <Image
                  src={game.imggame}
                  alt={game.titlegame}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110 grayscale-[30%] group-hover:grayscale-0"
                />
                
                {/* Бейдж "Схема Проверена" */}
                <div className="absolute top-4 left-4 z-20">
                  <div className="flex items-center gap-1.5 bg-black/80 backdrop-blur-md border border-green-500/50 px-3 py-1.5 rounded-2xl shadow-xl">
                    <ShieldCheck size={12} className="text-green-500" />
                    <span className="text-[9px] font-black uppercase text-white tracking-widest italic">Esquema 2026</span>
                  </div>
                </div>

                {/* Оверлей при ховере (эффект чтения) */}
                <div className="absolute inset-0 bg-green-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
                   <div className="bg-white text-black px-6 py-3 rounded-2xl font-black uppercase italic text-sm flex items-center gap-2 transform translate-y-4 group-hover:translate-y-0 transition-transform">
                      <BookOpen size={18} />
                      Ler Artigo
                   </div>
                </div>
                
                {/* Тень снизу */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#0d0d0d] via-transparent to-transparent opacity-90"></div>
              </div>

              {/* ИНФОРМАЦИЯ О СТРАТЕГИИ */}
              <div className="p-6 max-[500px]:p-3 flex flex-col flex-grow">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-[10px] font-black text-zinc-500 uppercase tracking-widest">{game.razrab}</span>
                  <div className="flex items-center gap-1">
                     <TrendingUp size={10} className="text-green-500" />
                     <span className="text-[10px] font-black text-green-500 uppercase italic">RTP: {game.rtp}</span>
                  </div>
                </div>

                <h2 className="text-2xl max-[500px]:text-[17px] font-black uppercase italic text-white leading-tight mb-4 group-hover:text-green-500 transition-colors">
                  {game.titlegame}
                </h2>

                <div className="mt-auto space-y-3">
                  {/* Краткие тезисы статьи */}
                  <div className="flex flex-wrap gap-2">
                    <span className="text-[8px] font-black uppercase px-2 py-1 bg-white/5 rounded-md text-zinc-400">Minutos Pagadores</span>
                    <span className="text-[8px] font-black uppercase px-2 py-1 bg-white/5 rounded-md text-zinc-400">Gestão de Banca</span>
                  </div>

                  <div className="pt-4 border-t border-white/5 flex items-center justify-between">
                     <div className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse shadow-[0_0_8px_#22c55e]"></div>
                        <span className="text-[10px] text-white font-black uppercase italic">Sinal Ativo</span>
                     </div>
                     <ChevronRightSmall />
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
      <FooterBrasil/>
         <div className="fixed bottom-0 left-0 w-full h-1.5 flex z-[100] shadow-[0_-5px_25px_rgba(0,151,57,0.4)]">
        <div className="flex-[3] bg-[#009739]"></div>
        <div className="flex-[3] bg-[#FEDD00]"></div>
        
      </div>
    </section>
  );
}

// Мини-компонент стрелочки
function ChevronRightSmall() {
  return (
    <div className="w-8 h-8 bg-[#1a1a1a] border border-white/10 rounded-xl flex items-center justify-center text-white group-hover:bg-green-500 group-hover:text-black transition-all">
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="m9 18 6-6-6-6"/></svg>
    </div>
  );
}