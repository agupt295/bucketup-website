import { Compass, PartyPopper, Users, Wallet } from "lucide-react";

const features = [
  {
    icon: Compass,
    title: "Plan & record your dream trips",
    description:
      "Turn someday-ideas into real plans. Keep every activity, place, and detail in one trip.",
  },
  {
    icon: Users,
    title: "Invite friends",
    description:
      "Bring your travel crew in. Everyone sees the same plan and stays in the loop.",
  },
  {
    icon: Wallet,
    title: "Manage expenses",
    description:
      "Add expenses as you go and see who owes what — no spreadsheets, no awkward math.",
  },
  {
    icon: PartyPopper,
    title: "Have fun!",
    description:
      "Less logistics, more memories. Bucketus handles the details so you don't have to.",
  },
];

export default function Features() {
  return (
    <section id="features" className="mx-auto max-w-6xl px-6 pt-8 pb-20 sm:pb-28">
      <div className="mx-auto max-w-2xl text-center">
        <h2 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl">
          Everything your trip needs
        </h2>
        <p className="mt-4 text-lg text-zinc-400">
          From the first idea to the final split — Bucketus covers the whole trip.
        </p>
      </div>
      <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {features.map(({ icon: Icon, title, description }) => (
          <div
            key={title}
            className="rounded-2xl bg-white/5 p-6 ring-1 ring-white/10"
          >
            <span className="flex h-11 w-11 items-center justify-center rounded-full bg-indigo-500/10 text-indigo-500">
              <Icon className="h-5 w-5" strokeWidth={2} />
            </span>
            <h3 className="mt-4 text-base font-semibold text-white">
              {title}
            </h3>
            <p className="mt-2 text-sm text-zinc-400">{description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
