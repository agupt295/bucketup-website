import { Luggage } from "lucide-react";

export default function Footer() {
  return (
    <footer className="border-t border-black/5 dark:border-white/10">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-6 py-8 text-sm text-zinc-500 sm:flex-row dark:text-zinc-400">
        <span className="flex items-center gap-2 font-medium text-zinc-700 dark:text-zinc-300">
          <Luggage className="h-4 w-4" strokeWidth={2.25} />
          Bucketus
        </span>
        <p>&copy; {new Date().getFullYear()} Bucketus. All rights reserved.</p>
      </div>
    </footer>
  );
}
