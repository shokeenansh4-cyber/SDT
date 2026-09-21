import { MARQUEE_ITEMS } from "@/data/content";
import { Dumbbell } from "lucide-react";

export default function Marquee() {
  const items = [...MARQUEE_ITEMS, ...MARQUEE_ITEMS];
  return (
    <div
      className="relative overflow-hidden border-y border-white/10 bg-carbon py-5"
      data-testid="proof-marquee"
    >
      <div className="flex w-max animate-marquee items-center gap-10 whitespace-nowrap">
        {items.map((item, i) => (
          <span key={i} className="flex items-center gap-10">
            <span className="font-display text-2xl sm:text-3xl font-bold uppercase tracking-wide text-slate-200">
              {item}
            </span>
            <Dumbbell className="h-5 w-5 text-flame" />
          </span>
        ))}
      </div>
    </div>
  );
}
