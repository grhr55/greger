"use client";
import Image from "next/image";
import Link from "next/link";
import Hp from '../components/Hp'
import { demogame } from "./demogame";
import FooterBrasil from './FooterBrasil'
import {
 ChevronRight
} from "lucide-react";


export default function Catagordemogam() {

  const handlePlay = (url) => {
  window.open(url, '_blank', 'noopener,noreferrer');
};

  return (
    <section className="  bg-[#061409]">
        <Hp/>
      <div className="max-w-7xl mx-auto px-4">
        
        {/* Заголовок секции */}
        <div className="flex items-center gap-3 pt-15 mb-10">
          <div className="w-2 h-10 bg-green-500 rounded-full shadow-[0_0_15px_rgba(34,197,94,0.4)]"></div>
          <h1 className="text-3xl md:text-4xl font-black uppercase italic text-white tracking-tight">
            Jogos <span className="text-green-500">slots</span>
          </h1>
        </div>

        {/* Адаптивная сетка */}
        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-6 ">
          {demogame.map((game) => (
  <div 
    key={game.id} 
    className="group relative bg-[#0a0a0a] border border-white/5 rounded-[30px] overflow-hidden hover:border-green-500/50 transition-all duration-500 shadow-2xl"
  >
    {/* Контейнер для фото */}
    <div className="relative aspect-[4/5] overflow-hidden">
      <Image
        src={game.imggame}
        alt={game.nickgame}
        fill
        className="object-cover transition-transform duration-700 group-hover:scale-110 group-hover:blur-[2px]"
      />
      
      {/* Градиент поверх фото */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-transparent to-transparent opacity-80"></div>

      {/* ══ КНОПКИ ПРИ НАВЕДЕНИИ ══ */}
      <div className="absolute inset-0 z-20 flex flex-col items-center justify-center gap-3 px-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black/40 backdrop-blur-[2px]">
        <Link 
          href={`/slots/${game.slug}`}
          className="w-full py-3 bg-white/10 hover:bg-white/20 border border-white/20 backdrop-blur-md text-white text-[11px] font-black uppercase tracking-tighter rounded-2xl text-center transition-all transform translate-y-4 group-hover:translate-y-0"
        >
          Jogar Demo
        </Link>
        <button 
          onClick={() => handlePlay(game.affiUrl)}
          className="w-full py-3 bg-amber-300 hover:bg-amber-300 text-black text-[11px] font-black uppercase tracking-tighter rounded-2xl text-center shadow-[0_10px_20px_rgba(34,197,94,0.3)] transition-all transform translate-y-4 group-hover:translate-y-0 delay-75"
        >
          Jogar Real
        </button>
      </div>
      
      {/* Лейбл разработчика */}
      <div className="absolute top-4 left-4 bg-black/60 backdrop-blur-md border border-white/10 px-3 py-1 rounded-full z-10">
        <p className="text-[10px] max-[500px]:text-[7px] font-black uppercase text-zinc-400 tracking-widest">
          {game.razrab}
        </p>
      </div>
    </div>

    {/* Инфо блок (теперь без Link, так как ссылки внутри) */}
    <div className="p-6">
      <p className="text-xl font-black uppercase italic text-white group-hover:text-green-500 transition-colors">
        {game.nickgame}
      </p>
      
      <div className="mt-4 flex items-center justify-between">
         <span className="text-[10px] text-zinc-600 font-black uppercase tracking-tighter">Escolha seu modo</span>
         <div className="flex gap-1">
            <div className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse"></div>
            <div className="w-1.5 h-1.5 rounded-full bg-green-500/40"></div>
         </div>
      </div>
    </div>
  </div>
))}
        </div>

        <section className="max-w-4xl mx-auto pt-20  ">
          <div className="flex flex-col items-center mb-12 text-center">
           
            <h4 className="text-4xl font-black text-white uppercase italic tracking-tighter">
              Perguntas <span className="text-green-400">FAQ</span>
            </h4>
          </div>
        
          <div className="space-y-4">
            {[
             {
    q: "Como ganhar no Jogo do Tigre via Pix?",
    a: "A pergunta sobre **como** vencer no Fortune Tiger envolve entender a volatilidade. Não existe um robô milagroso, mas a melhor estratégia é gerenciar **quanto** você aposta em cada rodada. **É possível** obter ganhos significativos se você aproveitar os momentos de bônus (cartinha) e usar **plataformas de apostas confiáveis** que não manipulam o RTP."
  },
  {
    q: "Qual a diferença entre Slots tradicionais e Crash Games como Aviator?",
    a: "A principal **diferença** está no controle. Nos slots, você gira e espera. No Aviator, você decide **quando** parar o voo. O **atendimento** e a agilidade do **saque rápido via Pix** tornam os Crash Games ideais para quem busca adrenalina e lucro imediato."
  },
  {
    q: "Vale a pena usar sinais ou robôs de cassino?",
    a: "Muitos iniciantes questionam: **vale a pena** pagar por sinais? A **razão** pela qual especialistas desaconselham é que os jogos são baseados em RNG (Gerador de Números Aleatórios). O verdadeiro **diferencial** de um jogador lucrativo é a disciplina e a **escolha** de bônus com termos justos."
  },
  {
    q: "Pode-se jogar jogos demo antes de apostar dinheiro real?",
    a: "Sim, **pode-se** e deve-se! Testar a versão demo ajuda a entender **qual** a mecânica do jogo sem risco. **Onde** encontrar? Quase todas as **melhores cassinos com Pix** listados aqui oferecem o modo 'Brincar' para você entender **como** o jogo se comporta."
  },
  {
    q: "Por que alguns jogos pagam mais em determinados horários?",
    a: "Essa é uma dúvida comum: **por que** dizem que o tigre paga mais à noite? Na verdade, é uma questão de volume de jogadores. **Quanto** mais pessoas jogando, mais o prêmio acumulado gira, mas a **diferença** real no algoritmo é inexistente. O importante é saber **quando** parar, independentemente do horário."
  },
  {
    q: "Quem são os provedores de jogos mais seguros?",
    a: "**Quem** garante a integridade são empresas como PG Soft, Pragmatic Play и Evolution Gaming. A **razão** da confiança é que esses provedores são auditados internacionalmente. **De quem** é a responsabilidade pelo pagamento do prêmio do slot? Do cassino, por isso a **escolha** de uma marca com **confiabilidade alta** é o primeiro passo."
  }
            ].map((faq, index) => (
              <details 
                key={index} 
                className="group bg-white/[0.02] border border-white/5 rounded-2xl overflow-hidden hover:border-white/10 transition-all"
              >
                <summary className="flex items-center justify-between p-6 cursor-pointer list-none">
                  <span className="text-sm md:text-base font-bold text-zinc-200 group-hover:text-green-400 transition-colors pr-4">
                    {faq.q}
                  </span>
                  <div className="relative flex-shrink-0 w-6 h-6">
                    <ChevronRight 
                      size={18} 
                      className="text-zinc-500 group-open:rotate-90 transition-transform duration-300" 
                    />
                  </div>
                </summary>
                <div className="px-6 pb-6 text-sm md:text-base text-zinc-500 leading-relaxed border-t border-white/[0.02] pt-4">
                  <p dangerouslySetInnerHTML={{ __html: faq.a.replace(/\*\*(.*?)\*\*/g, '<strong class="text-zinc-300">$1</strong>') }} />
                </div>
              </details>
            ))}
          </div>
        
        </section>

      </div>
      <FooterBrasil/>

         <div className="fixed bottom-0 left-0 w-full h-1.5 flex z-[100] shadow-[0_-5px_25px_rgba(0,151,57,0.4)]">
        <div className="flex-[3] bg-[#009739]"></div>
        <div className="flex-[3] bg-[#FEDD00]"></div>
        
      </div>

    </section>
  );
}