import AppStoreBadge from "@/components/AppStoreBadge";

export default function CtaBanner() {
  return (
    <section className="mx-auto max-w-6xl px-6 pb-24">
      <div className="flex flex-col items-center gap-6 rounded-3xl bg-gradient-to-br from-zinc-900 to-zinc-950 px-8 py-14 text-center">
        <h2 className="max-w-lg text-3xl font-semibold tracking-tight text-balance text-white sm:text-4xl">
          Your next trip is one plan away.
        </h2>
        <p className="max-w-md text-zinc-400">
          Grab the app and start planning your next trip with friends today.
        </p>
        <AppStoreBadge />
      </div>
    </section>
  );
}
