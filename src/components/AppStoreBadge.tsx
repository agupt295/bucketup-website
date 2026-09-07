import { Smartphone } from "lucide-react";

export default function AppStoreBadge() {
  return (
    <a
      href="#"
      className="inline-flex items-center gap-3 rounded-xl bg-zinc-950 px-5 py-3 text-white transition-colors hover:bg-zinc-800 dark:bg-white dark:text-zinc-950 dark:hover:bg-zinc-200"
    >
      <Smartphone className="h-6 w-6" strokeWidth={1.75} />
      <span className="text-left leading-tight">
        <span className="block text-[10px] text-zinc-300 dark:text-zinc-500">Download on the</span>
        <span className="block text-base font-semibold">App Store</span>
      </span>
    </a>
  );
}
