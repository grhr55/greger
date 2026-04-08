import React from "react";
import { 
  ShieldCheck, 
  Target, 
  Zap, 
  Globe, 
  Award, 
  CheckCircle2,
} from "lucide-react";
import Image from "next/image";
import Hp from '../components/Hp'
import FooterBrasil from '../jogos-demo/FooterBrasil'

export default function Onas() {
  const stats = [
    { label: "Análises Pro", val: "250+" },
    { label: "Plataformas", val: "42" },
    { label: "RTP Auditado", val: "98.8%" },
  ];
  return (
    <div className="bg-[#061409] text-white selection:bg-green-500/30 font-sans pb-20 overflow-x-hidden">

    <Hp />
      
 
      <div className="fixed top-0 left-1/2 -translate-x-1/2 w-full h-[500px] bg-green-600/10 blur-[150px] pointer-events-none z-0"></div>

      <main className="max-w-6xl mx-auto px-4 pt-20 relative z-10">
        
     
        <div className="text-center mb-20">
      
          <h1 className="text-8xl  max-[600px]:text-[50px] font-black uppercase italic tracking-tighter  mb-6">
            NOSSA <br /> <p className="text-transparent bg-clip-text bg-gradient-to-r from-green-500 to-[#FEDD00]">IDENTIDADE</p>
          </h1>
          <p className="text-zinc-500 max-w-2xl mx-auto text-lg md:text-xl italic font-medium leading-relaxed">
            Unimos tecnologia e transparência para filtrar o que há de melhor no iGaming. 
            Não apenas analisamos, nós <span className="text-white">validamos o seu lucro</span>.
          </p>
        </div>

      
        <section className="relative group mb-5">
         
          <div className="absolute -inset-1 bg-gradient-to-r from-green-600 to-[#FEDD00] rounded-[50px] blur opacity-10 group-hover:opacity-20 transition duration-1000"></div>
          
          <div className="relative bg-[#0a0a0a] rounded-[50px] border border-white/5 p-8 md:p-16 overflow-hidden">
            {/* Паттерн на фоне */}

            <div className="absolute inset-0  opacity-10 pointer-events-none"></div>
            
            <div className="flex flex-col lg:flex-row items-center gap-12 relative z-10">
              
              {/* Фото-блок */}
              <div className="relative shrink-0">
                <div className="w-44 h-44 md:w-60 md:h-60 rounded-[40px] bg-gradient-to-br from-zinc-800 to-black p-1 rotate-3 group-hover:rotate-0 transition-transform duration-500 shadow-2xl">
                  <div className=" bg-[#050505] flex items-center justify-center overflow-hidden">

                                <Image
                                  src="/img/fotor_creation_2026-04-06.jpg"
                                  alt="Logo"
                                  width={150}
                                  height={40}
                                  className="drop-shadow-[0_0_8px_rgba(255,215,0,0.3)]] w-full h-full rounded-[38px] "
                                />
                  
                  </div>
                </div>
                <div className="absolute -bottom-4 -right-4 bg-[#FEDD00] text-black p-4 rounded-3xl shadow-xl -rotate-6 group-hover:rotate-0 transition-all">
                  <Award size={32} strokeWidth={3} />
                </div>
              </div>

              {/* Текст об авторе */}
              <div className="flex-1 text-center lg:text-left space-y-6">
                <div>
                  <h2 className="text-5xl max-[500px]:text-4xl  font-black pt-[0px] max-[1030px]:pt-[40px] uppercase italic leading-none mb-2">Thiago <span className="text-zinc-600">Silva</span></h2>
                  <div className="flex flex-wrap justify-center lg:justify-start gap-4 mt-4">
                    <span className="flex items-center gap-1 text-[10px] font-black uppercase tracking-widest bg-green-500/10 text-green-500 px-3 py-1 rounded-lg border border-green-500/20">
                       <CheckCircle2 size={12} /> Verificado
                    </span>
                    <span className="flex items-center gap-1 text-[10px] font-black uppercase tracking-widest bg-white/5 text-zinc-400 px-3 py-1 rounded-lg border border-white/10">
                       <Globe size={12} /> São Paulo, BR
                    </span>
                  </div>
                </div>

                <p className="text-zinc-400 text-lg md:text-xl italic leading-relaxed font-medium">
                  Minha jornada no iGaming começou com um objetivo simples: eliminar as dúvidas dos jogadores. Hoje, lidero uma equipe que disseca algoritmos e garante que o seu <span className="text-white font-bold underline decoration-green-500">PIX caia na conta</span> sem burocracia.
                </p>

                <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-8">
                  {stats.map((s, i) => (
                    <div key={i} className="text-center lg:text-left">
                      <p className="text-3xl font-black italic text-white leading-none">{s.val}</p>
                      <p className="text-[9px] text-zinc-600 font-black uppercase tracking-tighter mt-1">{s.label}</p>
                    </div>
                  ))}
                </div>
              </div>


            </div>
            
          </div>

        </section>
        <section className="grid pt-[20px] grid-cols-1 md:grid-cols-3 gap-6">
          {[
            { icon: <Zap className="text-[#FEDD00]" />, title: "Agilidade PIX", desc: "Testamos a velocidade de saque em todas as plataformas que recomendamos." },
            { icon: <Target className="text-green-500" />, title: "Análise Real", desc: "Sem promessas falsas. Apenas dados brutos sobre RTP e volatilidade." },
            { icon: <ShieldCheck className="text-blue-500" />, title: "Segurança 360", desc: "Auditamos a licença e a criptografia de cada cassino da nossa lista." },
          ].map((card, i) => (
            <div key={i} className="bg-[#0a0a0a] border border-white/5 p-10 rounded-[45px] hover:bg-white/5 transition-all group overflow-hidden relative">
              <div className="bg-white/5 w-16 h-16 rounded-[24px] flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                {card.icon}
              </div>
              <h4 className="text-2xl font-black uppercase italic mb-3">{card.title}</h4>
              <p className="text-zinc-500 text-sm italic leading-relaxed mb-6">{card.desc}</p>
             
            </div>
          ))}
        </section>

    


 <div className="bg-[#0a0a0a] mt-10 p-8 md:p-16 rounded-[50px] border border-white/5 relative overflow-hidden group shadow-2xl">
  {/* Декоративный градиент на фоне для глубины */}
  <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-green-500/5 blur-[120px] pointer-events-none"></div>
  
  <div className="relative z-10 max-w-4xl mx-auto">
    
    {/* --- БЛОК 1: ВСТУПЛЕНИЕ --- */}
    <header className="mb-16">
      <h2 className="text-white text-4xl font-black uppercase italic leading-none mb-8 tracking-tighter">
        Quem é <span className="text-green-500">Thiago Silva</span> <br /> 
        <span className="text-zinc-600 text-2xl md:text-3xl font-bold">e por que confiar nas minhas análises?</span>
      </h2>
      <p className="text-zinc-400 text-lg md:text-xl leading-relaxed italic border-l-4 border-green-500 pl-6">
        O mercado de apostas e cassinos online no Brasil cresceu de forma explosiva nos últimos anos. Com essa expansão, surgiram milhares de plataformas, mas infelizmente, nem todas são seguras. É aqui que eu entro. Meu nome é <span className="text-white font-bold">Thiago Silva</span>, e minha missão é ser o filtro entre você e as armadilhas do mundo do iGaming.
      </p>
    </header>

    {/* --- БЛОК 2: ТРАЕКТОРИЯ --- */}
    <section className="mb-16 space-y-6">
      <h3 className="text-amber-50 text-2xl  font-black uppercase italic tracking-tight flex items-center gap-4">
        <span className="text-green-500 text-4xl">01</span> Minha Trajetória: De Programador a Analista
      </h3>
      <div className="text-zinc-400 leading-relaxed space-y-4 text-base md:text-lg">
        <p>
          Minha jornada não começou nas mesas de apostas, mas sim atrás das linhas de código. Sou desenvolvedor de sistemas por formação e trabalhei durante anos auditando algoritmos de <span className="text-white">RNG (Geradores de Números Aleatórios)</span>. Eu entendo como a "máquina" funciona por dentro, desde a integração das APIs até o processamento de pagamentos no back-end.
        </p>
        <p>
          Há 8 anos, percebi que o jogador brasileiro era alvo fácil de sites sem licença e termos de bônus abusivos. Decidi mudar de lado. Hoje, não trabalho para as casas de apostas; <span className="text-white font-bold text-lg">eu trabalho para você.</span> Minha expertise técnica me permite identificar em poucos minutos se um site é uma plataforma séria ou apenas um script copiado para reter o seu depósito.
        </p>
      </div>
    </section>

    {/* --- БЛОК 3: МЕТОДОЛОГИЯ (ПРОТОКОЛ) --- */}
    <section className="mb-16">
      <h3 className="text-amber-50 text-2xl md:text-3xl font-black uppercase italic tracking-tight mb-10 flex items-center gap-4">
        <span className="text-green-500 text-4xl">02</span> O "Protocolo Silva" de Auditoria
      </h3>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="bg-white/5 p-8 rounded-[35px] border border-white/5 hover:border-green-500/30 transition-all">
          <h4 className="text-green-500 font-black text-xs uppercase tracking-widest mb-4">⚡ Velocidade Real do PIX</h4>
          <p className="text-zinc-400 text-sm leading-relaxed italic">
            Eu não acredito no que o site diz. Eu deposito meu próprio dinheiro e realizo o saque. Se o PIX demorar mais de 10 minutos sem uma justificativa real, a plataforma perde pontos. No Brasil de 2026, agilidade não é diferencial, é obrigação.
          </p>
        </div>

        <div className="bg-white/5 p-8 rounded-[35px] border border-white/5 hover:border-green-500/30 transition-all">
          <h4 className="text-green-500 font-black text-xs uppercase tracking-widest mb-4">🔍 Transparência nos Bônus</h4>
          <p className="text-zinc-400 text-sm leading-relaxed italic">
            O famoso "bônus de 500%" pode ser uma armadilha se o rollover for impossível. Eu leio as letras miúdas (os Termos e Condições) e traduzo para você o que realmente vale a pena e o que é cilada.
          </p>
        </div>

        <div className="bg-white/5 p-8 rounded-[35px] border border-white/5 hover:border-green-500/30 transition-all">
          <h4 className="text-green-500 font-black text-xs uppercase tracking-widest mb-4">🛡️ Segurança de Dados</h4>
          <p className="text-zinc-400 text-sm leading-relaxed italic">
            Verifico os certificados SSL e a criptografia de ponta a ponta. Seus dados bancários e pessoais são sagrados. Se a arquitetura do site for frágil, ele nunca aparecerá nas minhas recomendações.
          </p>
        </div>

        <div className="bg-white/5 p-8 rounded-[35px] border border-white/5 hover:border-green-500/30 transition-all">
          <h4 className="text-green-500 font-black text-xs uppercase tracking-widest mb-4">🇧🇷 Suporte Nativo</h4>
          <p className="text-zinc-400 text-sm leading-relaxed italic">
            Se você tiver um problema, precisa de um humano falando português real para resolver, não um bot com tradução automática mal feita. Testo o chat ao vivo em horários de pico para medir a eficiência.
          </p>
        </div>
      </div>
    </section>

    {/* --- БЛОК 4: ФИНАЛ --- */}
    <section className="pt-12 border-t border-white/5">
      <h3 className="text-amber-50 text-2xl md:text-3xl font-black uppercase italic mb-8">
        Sinceridade Brutal: <span className="text-green-500">Por Que Confiar?</span>
      </h3>
      <div className="text-zinc-400 text-lg space-y-6 leading-relaxed italic">
        <p>
          A confiança não se ganha com palavras, mas com consistência. Ao longo dos anos, construí uma reputação baseada na <span className="text-white font-bold underline decoration-green-500">sinceridade brutal</span>. Se uma plataforma renomada começa a atrasar pagamentos, eu sou o primeiro a avisar e removê-la do topo do ranking.
        </p>
        <p>
          Minhas análises são baseadas em dados, matemática e testes reais. Eu não prometo lucros mágicos — porque isso não existe. O que eu prometo é que, ao seguir minhas orientações, você estará jogando em um ambiente justo, auditado e seguro. 
        </p>
        <div className="bg-green-500/10 p-8 rounded-3xl border border-green-500/20 mt-10">
           <p className="text-white font-medium text-xl italic mb-4">
             Meu objetivo é que você se divirta com responsabilidade e tenha a certeza de que, quando ganhar, o dinheiro estará na sua conta via PIX.
           </p>
           <p className="text-green-500 font-black uppercase tracking-[3px] text-xs">
             — Thiago Silva, Especialista em iGaming & Ex-Dev de Sistemas
           </p>
        </div>
      </div>
    </section>
  </div>
</div>





      </main>
      
<FooterBrasil/>
    
      <div className="fixed bottom-0 left-0 w-full h-1.5 flex z-[100] shadow-[0_-5px_25px_rgba(0,151,57,0.4)]">
        <div className="flex-[3] bg-[#009739]"></div>
        <div className="flex-[3] bg-[#FEDD00]"></div>
        
      </div>
    </div>
  );
}