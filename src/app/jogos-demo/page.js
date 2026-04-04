import Image from "next/image";
import Link from "next/link";
import Hp from '../components/Hp'
import { demogame } from "./demogame";
import FooterBrasil from './FooterBrasil'


export default function Catagordemogam() {
  return (
    <section className=" bg-[#0b250c]">
        <Hp/>
      <div className="max-w-7xl mx-auto px-4">
        
        {/* Заголовок секции */}
        <div className="flex items-center gap-3 pt-15 mb-10">
          <div className="w-2 h-10 bg-green-500 rounded-full shadow-[0_0_15px_rgba(34,197,94,0.4)]"></div>
          <h1 className="text-3xl md:text-4xl font-black uppercase italic text-white tracking-tight">
            Jogos <span className="text-green-500">Populares</span>
          </h1>
        </div>

        {/* Адаптивная сетка */}
        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-6 ">
          {demogame.map((game) => (
            <Link 
              key={game.id} 
              href={`/jogos-demo/${game.slug}`} 
              className="group relative bg-[#0a0a0a] border border-white/5 rounded-[30px] overflow-hidden hover:border-green-500/50 transition-all duration-500 shadow-2xl"
            >
              {/* Контейнер для фото */}
              <div className="relative aspect-[4/5] overflow-hidden">
                <Image
                  src={game.imggame}
                  alt={game.titlegame}
                  fill
                  className="object-cover transition-transform duration-700  group-hover:scale-110"
                />
                {/* Градиент поверх фото для читаемости текста */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-transparent to-transparent opacity-80"></div>
                
                {/* Лейбл разработчика на фото */}
                <div className="absolute top-4 left-4 bg-black/60 backdrop-blur-md border border-white/10 px-3 py-1 rounded-full">
                  <p className="text-[10px] font-black uppercase text-zinc-400 tracking-widest">
                    {game.razrab}
                  </p>
                </div>
              </div>

              {/* Инфо блок */}
              <div className="p-6">
                <h2 className="text-xl font-black uppercase italic text-white group-hover:text-green-500 transition-colors">
                  {game.titlegame}
                </h2>
                <p className="text-zinc-500 text-xs font-bold uppercase tracking-widest mt-1">
                  {game.nickgame}
                </p>
                
            
                <div className="mt-4 flex items-center justify-between">
                   <span className="text-[10px] text-zinc-600 font-black uppercase tracking-tighter">Demo Disponível</span>
                   <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center text-black group-hover:scale-110 transition-transform">
                      <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M8 5v14l11-7z" />
                      </svg>
                   </div>
                </div>
              </div>
            </Link>
          ))}
        </div>

      </div>
      <FooterBrasil/>

    </section>
  );
}