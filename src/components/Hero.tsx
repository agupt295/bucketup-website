import AppStoreBadge from "@/components/AppStoreBadge";
import FrontImage from "@/components/FrontImage";

export default function Hero() {
  return (
    <section className="mx-auto grid max-w-6xl items-center gap-8 px-6 pt-16 pb-8 sm:pt-24 lg:grid-cols-2">
      <div className="text-center">
        <h1 className="text-4xl font-semibold tracking-tight text-balance text-zinc-950 sm:text-5xl dark:text-white">
          It&apos;s time to act upon your dream trips!
        </h1>
        <p className="mx-auto mt-5 max-w-md text-lg text-zinc-600 dark:text-zinc-400">
          Plan it, invite your crew, split the bill, and go — Bucketus keeps
          every trip organized from daydream to departure.
        </p>
        <div className="mt-8 flex flex-col items-center gap-3" id="download">
          <AppStoreBadge />
          <p className="text-xs text-zinc-500 dark:text-zinc-500">
            Available now on iOS. Android — coming soon.
          </p>
        </div>
      </div>
      <div className="flex justify-center">
        <FrontImage />
      </div>
    </section>
  );
}
