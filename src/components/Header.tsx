import { Luggage } from "lucide-react";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-black/5 bg-white/80 backdrop-blur-md dark:border-white/10 dark:bg-black/60">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <a href="#" className="flex items-center gap-2 font-semibold tracking-tight">
          <span className="flex h-8 w-8 items-center justify-center rounded-full bg-indigo-500 text-white">
            <Luggage className="h-4 w-4" strokeWidth={2.25} />
          </span>
          Bucketus
        </a>
        <nav className="hidden items-center gap-8 text-sm text-zinc-600 sm:flex dark:text-zinc-400">
          <a href="#features" className="transition-colors hover:text-zinc-950 dark:hover:text-white">
            Features
          </a>
          <a href="#download" className="transition-colors hover:text-zinc-950 dark:hover:text-white">
            Download
          </a>
        </nav>
        <a
          href="#download"
          className="rounded-full bg-indigo-500 px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-indigo-600"
        >
          Get the app
        </a>
      </div>
    </header>
  );
}
