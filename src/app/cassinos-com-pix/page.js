"use client";

import {
  Zap, ShieldCheck, ArrowRightLeft, Star, Clock,
  CheckCircle2, ChevronRight, DollarSign, TrendingUp, Award, Shield
} from "lucide-react";
import Link from "next/link";
import Hp from "../components/Hp";
import FooterBrasil from '../slots/FooterBrasil'

const casinoData = [
  {
    id: 1,
    title: "1win",
    description: "Líder em bônus agressivos e jogos exclusivos como Lucky Jet.",
    bonus: "500% no 1º depósito",
    bonusFull: "Bônus de 500% no primeiro depósito.",
    fotopart: "/img/photo_2026-04-01_20-03-50.jpg",
    logo: "/img/photo_2026-04-01_15-08-48-removebg-preview.png",
    rating: 5.0,
    vozrast: "2018",
    colgame: "12.000",
    pixrab: "Instantâneo",
    depMin: "R$ 10",
    tag: "Grandes Odds",
    bernd: "Você provavelmente já ouviu falar da 1win. Hoje, ela é uma das marcas que mais crescem no Brasil, combinando uma casa de apostas com um cassino online completo — tudo com saque PIX instantâneo.",
    confiabilidade: "Altíssima",
    rank: 1,
    accent: {
      border: "border-blue-500/40",
      glow: "rgba(59,130,246,0.12)",
      btn: "bg-blue-600 hover:bg-blue-500 text-white shadow-[0_8px_24px_rgba(59,130,246,0.3)]",
      badge: "bg-blue-500/10 text-blue-300 border-blue-500/20",
      strip: "bg-blue-500",
      rankBg: "bg-blue-500 text-white",
    },
  },
  {
    id: 2,
    title: "888starz",
    vozrast: "2020",
    description: "A maior plataforma de iGaming com blockchain. Aceita PIX e mais de 40 criptomoedas.",
    bonus: "100% até R$1.500",
    bonusFull: "Bônus de 100% até R$1.500 no primeiro depósito.",
    logo: "/img/photo_2026-04-02_10-56-41-removebg-preview.png",
    fotopart: "/img/photo_2026-04-02_11-30-06.jpg",
    rating: 5.0,
    tag: "Melhor Escolha",
    depMin: "R$ 1",
    colgame: "7.000",
    pixrab: "Média",
    confiabilidade: "Alta",
    rank: 2,
    bernd: "A 888starz combina blockchain com apostas tradicionais. Aceita PIX, Bitcoin e mais de 40 criptos — perfeita para quem quer diversificar os métodos de pagamento.",
    accent: {
      border: "border-yellow-500/40",
      glow: "rgba(234,179,8,0.10)",
      btn: "bg-yellow-500 hover:bg-yellow-400 text-black shadow-[0_8px_24px_rgba(234,179,8,0.25)]",
      badge: "bg-yellow-500/10 text-yellow-300 border-yellow-500/20",
      strip: "bg-yellow-500",
      rankBg: "bg-yellow-400 text-black",
    },
  },
];

function Stars() {
  return (
     
    <div className="flex gap-0.5">
     
      {[...Array(5)].map((_, i) => (
        <Star key={i} size={11} className="fill-yellow-400 text-yellow-400" />
      ))}
    </div>
  );
}

function MetricBox({ label, value, green, yellow }) {
  return (
    <div className="bg-white/[0.04] rounded-xl px-4 py-3 border border-white/[0.06] flex flex-col gap-1 min-w-0">
      <span className="text-[9px] font-bold uppercase tracking-widest text-zinc-600">{label}</span>
      <span className={`text-sm font-black truncate ${green ? "text-green-400" : yellow ? "text-yellow-400" : "text-white"}`}>
        {value}
      </span>
    </div>
  );
}

function CasinoCard({ c }) {
  const hasBanner = c.fotopart !== c.logo;

  return (
    <div
      className={`group relative rounded-3xl border ${c.accent.border} overflow-hidden transition-all duration-500`}
      style={{ background: "#0b0b0b", boxShadow: `0 0 80px -20px ${c.accent.glow}` }}
    >

      
      {/* цветная полоска слева */}
      <div className={`absolute top-0 left-0 w-[3px] h-full ${c.accent.strip} opacity-70 z-10`} />

      {/* ═══ БАННЕР (fotopart) — только у 888starz ═══ */}
      {hasBanner && (
        <div className="relative w-full h-48 overflow-hidden">
          <img
            src={c.fotopart}
            alt={`${c.title} banner`}
            className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
          />
          {/* затемнение снизу чтобы плавно переходить в карточку */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#0b0b0b] via-[#0b0b0b]/30 to-transparent" />

          {/* ранг поверх баннера */}
          <div className={`absolute top-4 right-4 w-9 h-9 rounded-full flex items-center justify-center text-sm font-black ${c.accent.rankBg} z-10`}>
            #{c.rank}
          </div>

          {/* тег поверх баннера */}
          <div className={`absolute top-4 left-6 inline-flex items-center gap-1.5 text-[10px] font-bold px-3 py-1 rounded-full border backdrop-blur-sm ${c.accent.badge} z-10`}>
            <Award size={9} /> {c.tag}
          </div>
        </div>
      )}

      {/* ═══ ТЕЛО КАРТОЧКИ ═══ */}
      <div className="flex flex-col lg:flex-row">

        {/* — ЛОГО — */}
        <div className={`lg:w-52 flex-shrink-0 flex flex-col items-center justify-center gap-4 p-7 ${hasBanner ? "pt-5" : "p-8"} lg:border-r border-white/[0.05]`}>

          {/* ранг (только без баннера) */}
          {!hasBanner && (
            <div className={`w-9 h-9 rounded-full flex items-center justify-center text-sm font-black ${c.accent.rankBg}`}>
              #{c.rank}
            </div>
          )}

          {/* Лого */}
          <div className="relative w-28 h-28 flex items-center justify-center">
            <div
              className="absolute inset-0 rounded-full blur-2xl opacity-25"
              style={{ background: c.accent.glow.replace("0.12", "1").replace("0.10", "1") }}
            />
            <img
              src={c.logo}
              alt={c.title}
              className="relative z-10 w-full h-full object-contain transition-transform duration-500 group-hover:scale-110"
              style={{ filter: "drop-shadow(0 0 10px rgba(255,255,255,0.07))" }}
            />
          </div>

          <Stars />
          <span className="text-[10px] font-semibold text-zinc-600 uppercase tracking-widest">
            desde {c.vozrast}
          </span>

          {/* тег (только без баннера) */}
          {!hasBanner && (
            <div className={`inline-flex items-center gap-1 text-[10px] font-bold px-3 py-1 rounded-full border ${c.accent.badge}`}>
              <Award size={9} /> {c.tag}
            </div>
          )}
        </div>

        {/* — КОНТЕНТ — */}
        <div className="flex-1 p-7 lg:p-8 flex flex-col gap-5">
          <div>
            <h2 className="text-3xl font-black uppercase tracking-tight leading-none mb-2">
              {c.title}
            </h2>
            <p className="text-zinc-400 text-sm leading-relaxed">{c.bernd}</p>
          </div>

          {/* Метрики */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            <MetricBox label="Saque PIX" value={c.pixrab} green={c.pixrab === "Instantâneo"} />
            <MetricBox label="Jogos"     value={`+${c.colgame}`} />
            <MetricBox label="Dep. mín." value={c.depMin} />
            <MetricBox label="Bônus"     value={c.bonus} yellow />
          </div>

          {/* Бонус-строка */}
          <div className="flex items-center gap-2.5 bg-white/[0.03] border border-white/[0.06] rounded-xl px-4 py-3">
            <CheckCircle2 size={14} className="text-green-400 flex-shrink-0" />
            <span className="text-sm text-zinc-300">{c.bonusFull}</span>
          </div>
        </div>

        {/* — CTA — */}
        <div className="lg:w-48 flex-shrink-0 flex flex-col items-center justify-center gap-3 p-7 lg:border-l border-white/[0.05] bg-white/[0.015]">
          <div className="flex items-center gap-1.5 mb-1">
            <Shield size={11} className="text-green-400" />
            <span className="text-[10px] text-zinc-500 font-medium">Certificado</span>
          </div>

          <Link
            href={`/casino/${c.title}`}
            className="w-full py-3.5 rounded-2xl bg-white text-black text-xs font-black uppercase text-center hover:bg-zinc-100 active:scale-[0.98] transition-all"
          >
            Ver Análise
          </Link>

          <button
            className={`w-full py-3.5 rounded-2xl text-xs font-black uppercase flex items-center justify-center gap-1.5 active:scale-[0.98] transition-all ${c.accent.btn}`}
          >
            Jogar Agora <ChevronRight size={13} />
          </button>

          <p className="text-[10px] text-zinc-700 text-center leading-relaxed">
            +18 · Jogue com responsabilidade
          </p>
        </div>

      </div>
    </div>
  );
}

function FeatureCard({ icon: Icon, title, text, color }) {
  return (
    <div className="bg-[#0c0c0c] p-7 rounded-2xl border border-white/[0.05] hover:border-white/10 transition-colors">
      <div className={`w-10 h-10 rounded-xl flex items-center justify-center mb-5 ${color}`}>
        <Icon size={18} className="text-white" />
      </div>
      <h4 className="font-black text-sm uppercase tracking-tight mb-2">{title}</h4>
      <p className="text-zinc-500 text-sm leading-relaxed">{text}</p>
    </div>
  );
}

export default function CassinosPix() {
  return (
    <div className="bg-[#061409] min-h-screen text-white font-sans antialiased">

       <Hp/>

      {/* ══ HERO ══ */}
      <section className="relative pt-13 max-[500px]:pt-10 pb-20 px-4 overflow-hidden">
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-[600px] bg-green-500/5 rounded-full blur-[100px]" />
          <div className="absolute top-20 right-0 w-[400px] h-[400px] bg-blue-500/5 rounded-full blur-[80px]" />
          <div
            className="absolute inset-0 opacity-[0.02]"
            style={{
              backgroundImage:
                "linear-gradient(rgba(255,255,255,0.4) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,0.4) 1px,transparent 1px)",
              backgroundSize: "60px 60px",
            }}
          />
        </div>

        <div className="max-w-4xl mx-auto text-center relative z-10">
          <div className="inline-flex items-center gap-2.5 bg-green-500/8 border border-green-500/15 px-5 py-2 rounded-full mb-8">
            <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
            <span className="text-xs font-bold text-green-400 uppercase tracking-[2px]">
              Verificado em Abril 2026
            </span>
          </div>

          <h1 className="text-6xl max-[500px]:text-4xl  font-black uppercase italic leading-none mb-6 tracking-tighter">
            Cassinos com
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-emerald-500">
              Saque PIX
            </span>
          </h1>

          <p className="text-[#acacaf] max-w-xl mx-auto text-base leading-relaxed mb-10">
            Testamos e classificamos as plataformas que processam depósitos e saques em segundos. Pagamentos reais, sem espera.
          </p>

          <div className="inline-flex gap-8 border border-white/5 bg-white/[0.03] rounded-2xl px-8 py-5">
            {[
              { label: "Plataformas Testadas", value: "47"   },
              { label: "Selecionadas",          value: "2"    },
              { label: "Tempo Médio Saque",     value: "<30s" },
            ].map((s) => (
              <div key={s.label} className="text-center">
                <div className="text-2xl font-black text-white">{s.value}</div>
                <div className="text-[10px] font-medium text-[#a7a7b1] uppercase tracking-wider mt-0.5">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══ RANKING ══ */}
      <section className="max-w-6xl mx-auto px-4 pb-16 space-y-5">
        <div className="flex items-center gap-3 mb-8">
          <TrendingUp size={17} className="text-green-400" />
          <h2 className="text-sm font-black uppercase tracking-widest text-zinc-400">Ranking 2026</h2>
          <div className="flex-1 h-px bg-white/5" />
        </div>

        {casinoData.map((c) => <CasinoCard key={c.id} c={c} />)}
      </section>

      {/* ══ ПОЧЕМУ PIX ══ */}
      <section className="max-w-6xl mx-auto px-4 pb-16">
        <div className="flex items-center gap-3 mb-8">
          <Zap size={17} className="text-green-400" />
          <h2 className="text-sm font-black uppercase tracking-widest text-zinc-400">Por que cassinos com PIX?</h2>
          <div className="flex-1 h-px bg-white/5" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <FeatureCard icon={Clock}       title="Velocidade Real"   color="bg-green-700"  text="O PIX permite que seu lucro esteja na conta em segundos após a aprovação — sem esperas." />
          <FeatureCard icon={ShieldCheck} title="Zero Taxas"        color="bg-blue-700"   text="Diferente de cartões e TED, o PIX nos cassinos parceiros é 100% gratuito." />
          <FeatureCard icon={DollarSign}  title="Dep. Mínimo Baixo" color="bg-yellow-700" text="Com o PIX, você começa com R$ 1 a R$ 20 — ideal para testar sem risco." />
        </div>
      </section>

      {/* ══ ТАБЛИЦА ══ */}
      <section className="max-w-6xl mx-auto px-4 ">
        <div className="flex items-center gap-3 mb-8">
          <ArrowRightLeft size={17} className="text-green-400" />
          <h2 className="text-sm font-black uppercase tracking-widest text-zinc-400">Comparativo Rápido</h2>
          <div className="flex-1 h-px bg-white/5" />
        </div>

        <div className="bg-[#0c0c0c] rounded-2xl border border-white/[0.06] overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-white/[0.05]">
                  {["Plataforma","Saque PIX","Dep. Mínimo","Jogos","Bônus"].map((h) => (
                    <th key={h} className="px-5 py-4 text-left text-[10px] font-black uppercase tracking-widest text-zinc-600">{h}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {casinoData.map((c, i) => (
                  <tr key={c.id} className={`border-b border-white/[0.04] last:border-0 hover:bg-white/[0.02] transition-colors ${i === 0 ? "bg-white/[0.015]" : ""}`}>
                    <td className="px-5 py-4">
                      <div className="flex items-center gap-3">
                        <img src={c.logo} alt={c.title} className="w-8 h-8 object-contain rounded" />
                        <span className="font-bold">{c.title}</span>
                        {i === 0 && (
                          <span className="text-[9px] bg-green-500/10 text-green-400 border border-green-500/20 px-2 py-0.5 rounded-full font-bold uppercase">#1</span>
                        )}
                      </div>
                    </td>
                    <td className="px-5 py-4">
                      <span className={`font-bold ${c.pixrab === "Instantâneo" ? "text-green-400" : "text-zinc-300"}`}>{c.pixrab}</span>
                    </td>
                    <td className="px-5 py-4 text-zinc-300 font-medium">{c.depMin}</td>
                    <td className="px-5 py-4 text-yellow-400 font-bold">{c.bonus}</td>
                    <td className="px-5 py-4">
                      <div className="flex items-center gap-1.5">
                        <CheckCircle2 size={13} className="text-green-400" />
                        <span className="text-zinc-300 font-medium">{c.confiabilidade}</span>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

      </section>

      {/* ══ ГИГАНТСКИЙ SEO БЛОК (LONGREAD 2000+ WORDS ARCHITECTURE) ══ */}
<section className="max-w-5xl mx-auto px-6 pt-[50px] text-[#ededed] border-t border-white/5">
  <div className="prose prose-invert max-w-none">
   
    <div className="space-y-12 text-base md:text-lg leading-relaxed">
      
      {/* --- БЛОК 1: ЧТО и КТО --- */}
      <div className="bg-white/[0.02] p-10 rounded-[40px] border border-white/5">
        <h3 className="text-2xl max-[500px]:text-[28px] font-bold text-[#f3f3f3] mb-6  underline-offset-8">
          O que são os cassinos online com Pix e quem domina este mercado?
        </h3>
        <p className="mb-4">
          Para entender o que mudou no Brasil, precisamos olhar para o passado. Antigamente, o jogador dependia de boletos que demoravam 72 horas para compensar. Hoje, a realidade é outra. Mas quem são os verdadeiros donos do mercado em 2026? Marcas como 1win e 888starz não apenas aceitam o método, elas criaram uma infraestrutura onde o saque rápido via Pix é a prioridade absoluta.
        </p>
        <p>
          Quem busca segurança deve focar em plataformas de apostas confiáveis. A pergunta não é apenas sobre o jogo, mas sobre quem garante que seu dinheiro chegará na conta. A resposta envolve licenças internacionais e auditorias constantes.
        </p>
      </div>

      {/* --- БЛОК 2: ЗАЧЕМ и ПОЧЕМУ --- */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        <div className="space-y-4">
          <h3 className="text-xl font-black text-[#f3f3f3] uppercase tracking-wider">Por que o Pix venceu?</h3>
          <p>
            Você pode se perguntar: por que o Pix se tornou o método soberano? A razão principal é a eliminação de intermediários. Para que pagar taxas bancárias absurdas se você pode realizar transações gratuitas? O motivo pelo qual os grandes players investem bilhões nessa tecnologia é a retenção do usuário. Um jogador satisfeito com um saque rápido é um jogador fiel.
          </p>
        </div>
        <div className="space-y-4">
          <h3 className="text-xl font-black text-[#f3f3f3] uppercase tracking-wider">Para que servem os bônus?</h3>
          <p>
            Muitos questionam para que os cassinos oferecem bônus de 500%. É marketing, sim, mas também é uma oportunidade. Vale a pena aproveitar se você souber ler as entrelinhas. O objetivo é dar tempo de jogo para que você conheça a plataforma sem arriscar todo o seu capital de uma vez.
          </p>
        </div>
      </div>

      {/* --- БЛОК 3: КАК, КОГДА и ГДЕ --- */}
      <div className="bg-gradient-to-br from-green-500/10 to-transparent p-6 rounded-[40px] border border-green-500/10">
        <h3 className="text-2xl font-bold text-[#f3f3f3] mb-6">Como depositar e onde encontrar os melhores jogos?</h3>
        <p className="mb-6">
          O processo de como depositar é trivial, mas exige atenção. Você gera o código, abre o app do banco e cola. Mas onde esse dinheiro rende mais? Atualmente, o Jogo do Tigre via Pix é o maior fenômeno de busca. Onde jogar com RTP alto? A resposta está em sites que possuem provedores originais como PG Soft e Pragmatic Play.
        </p>
        <p>
          Quando é o melhor momento para sacar? A regra é clara: ganhou, sacou. Não espere a sorte virar. Quando você utiliza cassinos que pagam na hora, essa dinâmica se torna muito mais fluida, permitindo que você gerencie seu lucro em tempo real.
        </p>
      </div>

      {/* --- БЛОК 4: СКОЛЬКО и КАКОЙ --- */}
      <div>
        <h3 className="text-2xl font-bold text-[#f3f3f3] mb-6">Quanto investir e qual o perfil de cada cassino?</h3>
        <p className="mb-4">
          A questão de quanto depositar é subjetiva. Para alguns, um depósito mínimo 1 real é o suficiente para diversão. Para outros, o foco são as mesas VIP de Roleta. Qual é o seu perfil? Se você é conservador, procure por melhores cassinos com Pix que oferecem cashback semanal.
        </p>
        <p>
          Qual plataforma escolher hoje? Se você quer bônus, 1win é a resposta. Se quer diversidade de ativos e cripto, 888starz ganha a disputa. A escolha depende inteiramente da sua estratégia de risco.
        </p>
      </div>

      {/* --- БЛОК 5: РАЗНИЦА, ОТЛИЧИЕ и ВЫБОР --- */}
      <div className="border-y border-white/10 py-12 my-12">
        <h3 className="text-3xl max-[500px]:text-[20px] font-black text-[#f3f3f3] uppercase mb-8 italic text-center">A Ciência da Escolha: Diferença e Diferencial</h3>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="p-6 bg-white/5 rounded-2xl">
            <h4 className="text-green-400 font-bold mb-3">Diferença</h4>
            <p className="text-sm">A diferença entre um site licenciado e um "espelho" ilegal é o suporte. Sites sérios têm chat em português 24h.</p>
          </div>
          <div className="p-6 bg-white/5 rounded-2xl">
            <h4 className="text-green-400 font-bold mb-3">Escolha</h4>
            <p className="text-sm">Sua escolha deve ser baseada em fatos: velocidade de processamento, variedade de slots e reputação no Reclame Aqui.</p>
          </div>
          <div className="p-6 bg-white/5 rounded-2xl">
            <h4 className="text-green-400 font-bold mb-3">Diferencial</h4>
            <p className="text-sm">O grande diferencial das marcas que listamos é a estabilidade do servidor e a ausência de taxas escondidas no Pix.</p>
          </div>
        </div>
      </div>

      
      <div className="space-y-6">
        <h3 className="text-2xl font-bold text-[#f3f3f3] italic">Segurança e Ética: Pode-se confiar?</h3>
        <p>
          De quem é a culpa se o dinheiro não cair? Se você usou uma conta de terceiros, a culpa é sua. O Pix deve ser seu, vinculado ao seu CPF. Chave Pix de quem? Sempre do titular da conta. Pode-se usar cartões de crédito via Pix? Sim, alguns bancos permitem, mas vale a pena? O custo do juro bancário pode não compensar o jogo.
        </p>
        <p>
          Стоит ли (Vale a pena) entrar nesse mercado agora? Se você busca entretenimento rápido, sim. Pode-se ganhar a vida com isso? Não, cassino é sorte. É possível ter lucros consistentes? Apenas com gestão rígida e sabendo a hora de parar.
        </p>
      </div>

     

      {/* ══ FAQ SECTION (SEO & UX OPTIMIZED) ══ */}
<section className="max-w-4xl mx-auto  ">
  <div className="flex flex-col items-center mb-12 text-center">
   
    <h4 className="text-4xl font-black text-white uppercase italic tracking-tighter">
      Perguntas <span className="text-green-400">FAQ</span>
    </h4>
  </div>

  <div className="space-y-4">
    {[
      {
        q: "Como depositar via Pix nos cassinos online?",
        a: "O processo de **como** depositar é instantâneo. Basta acessar a área de caixa, selecionar Pix, definir **quanto** quer depositar e escanear o QR Code. O saldo cai na conta em segundos."
      },
      {
        q: "Qual a diferença entre saque instantâneo e processamento rápido?",
        a: "A **diferença** reside na aprovação. No saque instantâneo, o sistema envia o dinheiro via Pix automaticamente. No rápido, há um **atendimento** humano prévio. A **escolha** de plataformas como 1win garante a maior velocidade."
      },
      {
        q: "Vale a pena aceitar bônus de boas-vindas?",
        a: "Depende do rollover. **Vale a pena** se os requisitos forem realistas. O grande **diferencial** das plataformas confiáveis é a transparência nos termos e condições."
      },
      {
        q: "É possível jogar o Jogo do Tigre com apenas R$ 1?",
        a: "Sim, **é possível**. Muitos cassinos listados oferecem o **depósito mínimo 1 real**, permitindo que você jogue Fortune Tiger e outros slots com baixo risco."
      },
      {
        q: "De quem é a responsabilidade pela segurança dos dados?",
        a: "A responsabilidade é da plataforma licenciada. **Por que** confiar? Porque sites com licença de Curaçao ou Malta usam criptografia SSL para proteger sua **chave Pix** e dados pessoais."
      },
      {
        q: "Posso sacar para a chave Pix de outra pessoa?",
        a: "Não. Por segurança, o CPF do titular da conta no cassino deve ser o mesmo da chave Pix. Essa é a maior **diferença** de segurança entre sites sérios e amadores."
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
  </div>
</section>
      <FooterBrasil/>

      {/* ══ ФЛАГ ══ */}
      <div className="fixed bottom-0 left-0 w-full h-[3px] flex z-50">
        <div className="bg-[#009739] flex-3" />
        <div className="bg-[#FEDD00] flex-3" />
        
      </div>
    </div>
  );
}