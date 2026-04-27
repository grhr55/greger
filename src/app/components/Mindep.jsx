import { leaders } from './datapartnes';
import { Zap, Wallet, ArrowRight, Star, MousePointer2 } from "lucide-react";

export default function Mindep() {
  return (
    <div className="min-h-screen w-full py-10 md:px-10 bg-transparent overflow-x-hidden">
      
      {/* HEADER */}
      <div className="text-center mb-12">
     
        <h4 className="text-white text-4xl md:text-6xl font-black uppercase italic tracking-tighter leading-none">
         quarta rodada Depósitos <span className="text-emerald-500 drop-shadow-[0_0_20px_rgba(16,185,129,0.5)]">Mínimos</span>
        </h4>
      </div>

      {/* GRID CONTAINER: 1 колонка на мобиле, 2 на планшете, 3-4 на десктопе */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 max-w-[1400px] mx-auto">
        {leaders.map((item, index) => (
          <div
            key={index}
            className="relative bg-black/70 backdrop-blur-3xl border border-white/10 rounded-[32px] p-6 flex flex-col justify-between transition-all duration-500 hover:border-emerald-500/50 hover:-translate-y-2 group shadow-2xl"
          >
            {/* Декор для десктопа (появляется при ховере) */}
            <div className="absolute inset-0 bg-emerald-500/5 opacity-0 group-hover:opacity-100 transition-opacity rounded-[32px]" />

            <div>
              {/* Шапка карточки */}
              <div className="flex justify-between items-start mb-6 relative z-10">
                <div className="flex flex-col gap-1">
                  <h2 className="text-white text-xl font-black uppercase italic tracking-tighter leading-none">
                    {item.mindep.brand}
                  </h2>
                  <div className="flex items-center gap-0.5">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} size={8} className="fill-emerald-500 text-emerald-500" />
                    ))}
                  </div>
                </div>
                <div className="bg-emerald-500/10 border border-emerald-500/20 px-2 py-1 rounded-lg">
                  <span className="text-emerald-500 text-[9px] font-black uppercase tracking-widest leading-none">
                    {item.mindep.ui_display.badge}
                  </span>
                </div>
              </div>

              {/* Главный блок с ценой */}
              <div className="bg-white/[0.03] border border-white/5 rounded-2xl p-4 mb-6 flex items-center justify-between relative z-10">
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-emerald-500 rounded-xl shadow-[0_0_20px_rgba(16,185,129,0.4)]">
                    <Wallet size={20} className="text-black" />
                  </div>
                  <div>
                    <p className="text-zinc-500 text-[9px] font-black uppercase tracking-widest">Mínimo</p>
                    <p className="text-white text-2xl font-black tracking-tighter leading-none">
                      R$ {item.mindep.limits.min_deposit}
                    </p>
                  </div>
                </div>
                <div className="hidden sm:block">
                    <MousePointer2 size={16} className="text-zinc-700 group-hover:text-emerald-500 transition-colors" />
                </div>
              </div>

              {/* Список методов */}
              <div className="space-y-2 mb-6 relative z-10">
                <p className="text-zinc-600 text-[8px] font-black uppercase tracking-[0.2em]">Gateways Ativos</p>
                {item.mindep.payment_methods.slice(0, 3).map((method, i) => (
                  <div key={i} className="flex justify-between items-center text-[11px] font-medium py-1 border-b border-white/5">
                    <span className="text-zinc-400">{method.method}</span>
                    <span className="text-white font-bold">R$ {method.min}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Футер: Кнопки депозита и переход */}
            <div className="relative z-10 mt-auto">
              <div className="flex gap-2 mb-4">
                {item.mindep.ui_display.fast_deposit_buttons.slice(0, 3).map((val, i) => (
                  <button
                    key={i}
                    className="flex-1 bg-white/5 border border-white/10 py-2 rounded-xl text-[10px] font-black text-white hover:bg-white hover:text-black transition-all"
                  >
                    +{val}
                  </button>
                ))}
              </div>

              <button className="w-full bg-emerald-500 text-black py-4 rounded-2xl font-black text-[11px] uppercase tracking-[0.2em] flex items-center justify-center gap-2 hover:bg-emerald-400 transition-all shadow-[0_10px_20px_rgba(16,185,129,0.2)]">
                Começar Agora <ArrowRight size={14} />
              </button>
            </div>
          </div>
        ))}
      </div>

   
    </div>
  );
}