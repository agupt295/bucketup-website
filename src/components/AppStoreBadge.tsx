function AppleLogo() {
  return (
    <svg viewBox="0 0 24 24" className="h-6 w-6 shrink-0" aria-hidden="true">
      <circle cx="12" cy="14.2" r="6.6" fill="#fff" />
      <circle cx="17.3" cy="9.6" r="2.6" fill="#000" />
      <rect
        x="11.2"
        y="2.6"
        width="1.5"
        height="4"
        rx="0.75"
        fill="#fff"
        transform="rotate(18 11.95 4.6)"
      />
      <ellipse
        cx="15.1"
        cy="4.3"
        rx="2"
        ry="1.1"
        fill="#fff"
        transform="rotate(35 15.1 4.3)"
      />
    </svg>
  );
}

export default function AppStoreBadge() {
  return (
    <a
      href="#"
      className="inline-flex items-center gap-2.5 rounded-lg bg-black px-4 py-2 text-white ring-1 ring-white/15 transition-opacity hover:opacity-90"
    >
      <AppleLogo />
      <span className="text-left leading-tight">
        <span className="block text-[11px] italic">Available on the</span>
        <span className="block -mt-0.5 text-2xl leading-tight font-semibold tracking-tight">
          App Store
        </span>
      </span>
    </a>
  );
}
