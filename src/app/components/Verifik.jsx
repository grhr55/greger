import { leaders } from './datapartnes';
import { Trophy, CheckCircle2, ShieldCheck, Zap, Info } from "lucide-react";
import Mindep from './Mindep';

export default function Verifik() {
  const winner =
    leaders.find((l) => l.title === "Winner") || leaders[0];

  return (
    <div className="relative w-full flex flex-col gap-10 py-14 max-w-7xl mx-auto text-white overflow-hidden">

      {/* BACKGROUND GLOW */}
      <div className="absolute top-[-200px] right-[-200px] w-[500px] h-[500px] rounded-full pointer-events-none" />
      <div className="absolute bottom-[-200px] left-[-200px] w-[500px] h-[500px] bg-blue-500/10 blur-[160px] rounded-full pointer-events-none" />

      {/* HEADER */}
      <div className="text-center space-y-4 px-4">
      

        <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tighter">
          TOP VERIFIED <span className="text-emerald-400">PLATFORMS</span>
        </h2>

        <p className="text-zinc-400 text-sm max-w-2xl mx-auto">
          Analysis of approval speed, KYC complexity and payment reliability across leading platforms
        </p>
      </div>

      {/* WINNER HERO */}
      <div className="
        relative overflow-hidden rounded-[40px] p-8 md:p-12
        bg-gradient-to-br from-emerald-500/20 via-black to-black
        border border-emerald-500/30
        shadow-[0_0_80px_rgba(16,185,129,0.25)]
      ">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(16,185,129,0.25),transparent_60%)]" />

        <div className="relative flex flex-col md:flex-row justify-between gap-8">
          
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <Trophy className="text-emerald-400 w-6 h-6" />
              <span className="text-xs uppercase tracking-[0.3em] text-emerald-300">
                #1 Winner
              </span>
            </div>

            <h3 className="text-4xl md:text-6xl font-black uppercase">
              {winner.title}
            </h3>

            <p className="text-zinc-300 text-sm max-w-md">
              Fastest approval system with automated KYC verification and instant PIX payments.
            </p>

            <div className="flex gap-2 flex-wrap">
              <span className="px-3 py-1 text-xs bg-emerald-500/20 border border-emerald-500/30 rounded-full">
                Instant Approval
              </span>
              <span className="px-3 py-1 text-xs bg-white/5 border border-white/10 rounded-full">
                Gov Verified
              </span>
              <span className="px-3 py-1 text-xs bg-white/5 border border-white/10 rounded-full">
                PIX Enabled
              </span>
            </div>
          </div>

          <div className="flex flex-col justify-between text-right">
            <div>
              <p className="text-zinc-400 text-xs uppercase">Approval Time</p>
              <p className="text-3xl font-black text-emerald-400">
                {winner.verif.process.average_approval_time.automated ||
                  winner.verif.process.average_approval_time}
              </p>
            </div>

            <div className="mt-6">
              <p className="text-zinc-400 text-xs uppercase">Score</p>
              <p className="text-4xl font-black">1 / 15</p>
            </div>
          </div>
        </div>
      </div>

      {/* RANKING CARDS */}
      <div className="grid gap-5 px-2">

        {leaders.map((leader, i) => (
          <div
            key={leader.id}
            className="
              group relative overflow-hidden
              rounded-3xl p-6 md:p-8
              bg-white/[0.03]
              border border-white/10
              hover:bg-white/[0.06]
              hover:border-white/20
              transition-all duration-500
              hover:-translate-y-1
            "
          >
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition bg-[radial-gradient(circle_at_top_left,rgba(16,185,129,0.08),transparent_60%)]" />

            <div className="relative flex flex-col md:flex-row md:items-center justify-between gap-6">

              {/* LEFT */}
              <div className="flex items-center gap-4">
                <div className="p-3 rounded-2xl bg-white/5 border border-white/10">
                  <img src={leader.logo} className="w-10 h-10 object-contain" />
                </div>

                <div>
                  <h3 className="text-xl font-black uppercase">
                    {leader.title}
                  </h3>

                  <div className="flex items-center gap-2 mt-1">
                    <span className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse" />
                    <span className="text-xs text-zinc-400 uppercase tracking-widest">
                      {leader.verif.region}
                    </span>
                  </div>
                </div>
              </div>

              {/* CENTER */}
              <div className="grid grid-cols-3 gap-6 text-sm text-center">
                <div>
                  <p className="text-zinc-500 text-xs">Difficulty</p>
                  <p className="font-bold text-white">{leader.verif.difficulty || "—"}</p>
                </div>

                <div>
                  <p className="text-zinc-500 text-xs">Speed</p>
                  <p className="font-bold text-white">
                    {leader.verif.process.average_approval_time.automated }
                  </p>
                </div>

                <div>
                  <p className="text-zinc-500 text-xs">KYC</p>
                  <p className="font-bold text-white">
                    {leader.verif.requirements.identity.primary_key}
                  </p>
                </div>
              </div>

              {/* RIGHT */}
              <div className="flex items-center justify-between md:justify-end gap-6">

                <div className="text-right">
                  <p className="text-xs text-zinc-500 uppercase">Rating</p>
                  <p className="text-sm font-black text-emerald-400">
                    {i === 0 ? "★★★★★" : i === 1 ? "★★★★☆" : "★★★☆☆"}
                  </p>
                </div>

                {i === 0 && (
                  <div className="px-3 py-1 rounded-full bg-emerald-500 text-black text-[10px] font-black uppercase">
                    Top
                  </div>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>

        <div className="mt-12 bg-gradient-to-r bg-gray-900 rounded-3xl p-6 max-[500px]:p-4 md:p-10 flex flex-col md:flex-row items-center justify-between gap-6 shadow-xl">
   
             <div className="flex items-center gap-4 text-center md:text-left">
               <div className="bg-green-500 p-4 rounded-xl">
                 <Trophy className="text-black" />
               </div>
   
               <div>
                 <h2 className="text-xl md:text-3xl font-black uppercase">
                   Vencedor: <span className="text-green-500">{leaders[0].title}</span>
                 </h2>
                 <p className="text-zinc-400 text-xs md:text-sm mt-1">
                  Verificação fácil e rápida
                 </p>
               </div>
             </div>
   
             <div className="text-center md:text-right">
               <p className="text-zinc-500 text-xs uppercase">Score</p>
               <p className="text-3xl font-black text-green-500">1 / 15</p>
             </div>
   
           </div>

      <Mindep />
    </div>
  );
}