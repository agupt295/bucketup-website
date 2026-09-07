import { Luggage } from "lucide-react";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-black/60 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <a href="#" className="flex items-center gap-2 font-semibold tracking-tight text-white">
          <span className="flex h-8 w-8 items-center justify-center rounded-full bg-indigo-500 text-white">
            <Luggage className="h-4 w-4" strokeWidth={2.25} />
          </span>
          Bucketus
        </a>
        <nav className="hidden items-center gap-8 text-sm text-zinc-400 sm:flex">
          <a href="#features" className="transition-colors hover:text-white">
            Features
          </a>
          <a href="#download" className="transition-colors hover:text-white">
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
