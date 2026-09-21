import { useState } from "react";
import { MoveHorizontal } from "lucide-react";

export default function BeforeAfter({ before, after, id }) {
  const [pos, setPos] = useState(50);

  return (
    <div className="relative aspect-[4/5] w-full overflow-hidden bg-carbon" data-testid={`before-after-${id}`}>
      <img
        src={after}
        alt="After transformation"
        className="absolute inset-0 h-full w-full object-cover"
        loading="lazy"
      />
      <div
        className="absolute inset-0"
        style={{ clipPath: `inset(0 ${100 - pos}% 0 0)` }}
      >
        <img
          src={before}
          alt="Before transformation"
          className="h-full w-full object-cover grayscale brightness-[0.65]"
          loading="lazy"
        />
      </div>

      <div
        className="pointer-events-none absolute inset-y-0 w-px bg-flame"
        style={{ left: `${pos}%` }}
      >
        <span className="absolute left-1/2 top-1/2 flex h-9 w-9 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border-2 border-flame bg-obsidian text-flame">
          <MoveHorizontal className="h-4 w-4" />
        </span>
      </div>

      <span className="absolute left-3 top-3 bg-obsidian/80 px-2 py-1 font-mono text-[10px] tracking-[0.25em] text-slate-300 backdrop-blur-sm">
        BEFORE
      </span>
      <span className="absolute right-3 top-3 bg-flame px-2 py-1 font-mono text-[10px] tracking-[0.25em] text-white">
        AFTER
      </span>

      <input
        type="range"
        min="0"
        max="100"
        value={pos}
        onChange={(e) => setPos(Number(e.target.value))}
        aria-label="Compare before and after"
        data-testid={`ba-slider-${id}`}
        className="absolute inset-0 h-full w-full cursor-ew-resize opacity-0"
      />
    </div>
  );
}
