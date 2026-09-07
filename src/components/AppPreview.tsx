export default function AppPreview() {
  return (
    <div className="relative mx-auto w-[260px] select-none sm:w-[280px]">
      <div className="rounded-[2.5rem] border-[8px] border-zinc-900 bg-zinc-900 shadow-2xl shadow-indigo-500/20">
        <div className="relative overflow-hidden rounded-[2rem] bg-zinc-50">
          <div className="absolute top-0 left-1/2 z-10 h-5 w-24 -translate-x-1/2 rounded-b-2xl bg-zinc-900" />

          <div className="px-4 pt-9 pb-5">
            <p className="text-center text-[13px] font-semibold text-zinc-900">US trip</p>
          </div>

          <div className="mx-3 rounded-2xl bg-gradient-to-br from-zinc-800 to-zinc-950 p-4 text-white">
            <p className="text-[15px] font-semibold">US trip</p>
            <p className="text-[11px] text-zinc-300">Sep 27 – Oct 2, 2026</p>
          </div>

          <div className="mx-3 mt-3 flex items-center justify-between rounded-xl bg-white px-3 py-2.5 shadow-sm ring-1 ring-black/5">
            <span className="text-[11px] text-zinc-500">You&apos;re owed</span>
            <span className="text-[13px] font-semibold text-emerald-600">$6.52</span>
          </div>

          <div className="mx-3 mt-2 rounded-xl bg-white p-3 shadow-sm ring-1 ring-black/5">
            <p className="text-[10px] font-medium tracking-wide text-zinc-400 uppercase">On this plan</p>
            <div className="mt-2 flex items-center justify-between text-[11px]">
              <span className="text-zinc-700">Biking</span>
              <span className="text-emerald-600">Adventure</span>
            </div>
            <div className="mt-1.5 flex items-center justify-between text-[11px]">
              <span className="text-zinc-400 line-through">Peter Pancakes</span>
              <span className="text-amber-600">Food &amp; Drink</span>
            </div>
          </div>

          <div className="mx-3 mt-2 mb-4 rounded-full bg-indigo-500 py-2.5 text-center text-[12px] font-medium text-white shadow-sm">
            Add expense
          </div>
        </div>
      </div>
    </div>
  );
}
