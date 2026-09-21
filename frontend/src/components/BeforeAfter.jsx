export default function BeforeAfter({ before, after, id }) {
  return (
    <div className="relative aspect-[4/5] w-full overflow-hidden bg-carbon" data-testid={`before-after-${id}`}>
      <div className="absolute inset-y-0 left-0 w-1/2 overflow-hidden">
        <img
          src={before}
          alt="Before transformation"
          className="h-full w-full object-cover grayscale brightness-[0.6]"
          loading="lazy"
        />
      </div>
      <div className="absolute inset-y-0 right-0 w-1/2 overflow-hidden">
        <img
          src={after}
          alt="After transformation"
          className="h-full w-full object-cover"
          loading="lazy"
        />
      </div>

      <div className="pointer-events-none absolute inset-y-0 left-1/2 w-px -translate-x-1/2 bg-flame shadow-[0_0_14px_rgba(57,255,20,0.9)]" />

      <span className="absolute left-3 top-3 bg-obsidian/80 px-2 py-1 font-mono text-[10px] tracking-[0.25em] text-slate-300 backdrop-blur-sm">
        BEFORE
      </span>
      <span className="absolute right-3 top-3 bg-flame px-2 py-1 font-mono text-[10px] font-bold tracking-[0.25em] text-obsidian">
        AFTER
      </span>
    </div>
  );
}
