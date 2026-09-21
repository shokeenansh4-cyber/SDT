import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Dumbbell, Quote, Salad, CalendarCheck } from "lucide-react";
import { Reveal, MaskedLine, ChapterTag } from "@/components/Reveal";
import BeforeAfter from "@/components/BeforeAfter";
import PlateSpinner from "@/components/PlateSpinner";
import { useApply } from "@/context/ApplyContext";
import { TRANSFORMATIONS, FILTERS } from "@/data/content";

export default function Transformations() {
  const [filter, setFilter] = useState("all");
  const { openApply } = useApply();
  const list = filter === "all" ? TRANSFORMATIONS : TRANSFORMATIONS.filter((t) => t.category === filter);

  return (
    <main data-testid="transformations-page">
      <section className="relative overflow-hidden pb-16 pt-36 sm:pt-44">
        <PlateSpinner className="absolute -right-24 top-16 h-80 w-80 text-flame/[0.07]" />
        <div className="mx-auto max-w-7xl px-4 sm:px-8 lg:px-16">
          <ChapterTag num="02" label="Proof, Not Promises" />
          <h1 className="mt-6 font-display text-5xl font-extrabold uppercase leading-[0.92] tracking-tight text-white sm:text-7xl" data-testid="transformations-headline">
            <MaskedLine delay={0.1}>5,000+ bodies.</MaskedLine>
            <MaskedLine delay={0.25}>
              <span className="text-outline-flame">5,000+ stories.</span>
            </MaskedLine>
          </h1>
          <Reveal delay={0.35}>
            <p className="mt-6 max-w-2xl text-base leading-relaxed text-slate-300 sm:text-lg">
              Every case study shows the time taken, the measurable outcome and exactly what changed in training, nutrition and accountability.
            </p>
          </Reveal>
          <Reveal delay={0.45}>
            <div className="mt-8 inline-flex items-center gap-2 border border-volt/30 bg-volt/5 px-4 py-2.5 text-xs text-volt" data-testid="transformations-disclaimer">
              <span className="h-1.5 w-1.5 rounded-full bg-volt" />
              Sample imagery shown. Real client photos are published only with written permission.
            </div>
          </Reveal>
        </div>
      </section>

      <section className="border-t border-white/10 bg-carbon py-8">
        <div className="mx-auto flex max-w-7xl flex-wrap gap-3 px-4 sm:px-8 lg:px-16" data-testid="transformations-filters">
          {FILTERS.map((f) => (
            <button
              key={f.id}
              onClick={() => setFilter(f.id)}
              data-testid={`filter-${f.id}`}
              className={`border px-5 py-2.5 font-mono text-xs uppercase tracking-[0.2em] transition-colors duration-300 ${
                filter === f.id
                  ? "border-flame bg-flame text-obsidian shadow-[0_0_20px_rgba(57,255,20,0.35)]"
                  : "border-white/15 text-slate-400 hover:border-flame/60 hover:text-flame"
              }`}
            >
              {f.label}
            </button>
          ))}
        </div>
      </section>

      <section className="bg-carbon pb-28 pt-10">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-8 md:grid-cols-2 lg:px-16">
          <AnimatePresence mode="popLayout">
            {list.map((t, i) => (
              <motion.article
                key={t.id}
                layout
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.96 }}
                transition={{ duration: 0.5, delay: i * 0.06, ease: [0.22, 1, 0.36, 1] }}
                className="border border-white/10 bg-obsidian transition-[border-color,box-shadow] duration-500 hover:border-flame/40 hover:shadow-[0_0_50px_rgba(57,255,20,0.1)]"
                data-testid={`transformation-card-${t.id}`}
              >
                <BeforeAfter before={t.before} after={t.after} id={t.id} />
                <div className="p-6 sm:p-8">
                  <div className="flex flex-wrap items-center justify-between gap-3">
                    <h2 className="font-display text-2xl font-bold uppercase tracking-wide text-white">
                      {t.name}, {t.age} · {t.city}
                    </h2>
                    <div className="flex items-center gap-2 font-mono text-xs">
                      <span className="bg-flame px-2.5 py-1 font-bold text-obsidian" data-testid={`result-${t.id}`}>{t.result}</span>
                      <span className="border border-white/15 px-2.5 py-1 text-slate-400">{t.weeks} WEEKS</span>
                    </div>
                  </div>

                  <div className="mt-5 border-l-2 border-flame pl-4">
                    <Quote className="h-4 w-4 text-flame" />
                    <p className="mt-2 text-sm italic leading-relaxed text-slate-300" data-testid={`quote-${t.id}`}>
                      "{t.quote}"
                    </p>
                  </div>

                  <div className="mt-6 space-y-3 border-t border-white/10 pt-5">
                    {[
                      { icon: Dumbbell, label: "Training", value: t.training },
                      { icon: Salad, label: "Nutrition", value: t.nutrition },
                      { icon: CalendarCheck, label: "Accountability", value: t.accountability },
                    ].map((row) => (
                      <div key={row.label} className="flex items-start gap-3 text-sm">
                        <row.icon className="mt-0.5 h-4 w-4 shrink-0 text-volt" />
                        <p className="text-slate-400">
                          <span className="font-mono text-[10px] uppercase tracking-[0.25em] text-slate-500">{row.label} — </span>
                          {row.value}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.article>
            ))}
          </AnimatePresence>
        </div>

        <Reveal className="mx-auto mt-20 max-w-7xl px-4 sm:px-8 lg:px-16">
          <div className="flex flex-col items-start justify-between gap-6 border border-flame/30 bg-flame/5 p-8 shadow-[0_0_60px_rgba(57,255,20,0.08)] sm:flex-row sm:items-center sm:p-10" data-testid="transformations-cta">
            <div>
              <p className="font-display text-3xl font-extrabold uppercase tracking-tight text-white sm:text-4xl">
                Your photo could be next.
              </p>
              <p className="mt-2 text-sm text-slate-400">Applications are reviewed personally. Serious inquiries only.</p>
            </div>
            <button
              onClick={openApply}
              data-testid="transformations-apply-btn"
              className="shrink-0 bg-flame px-8 py-4 font-display text-lg font-bold uppercase tracking-widest text-obsidian shadow-[0_0_28px_rgba(57,255,20,0.3)] transition-[background-color,box-shadow] duration-300 hover:bg-white hover:shadow-[0_0_44px_rgba(57,255,20,0.5)]"
            >
              Apply Now
            </button>
          </div>
        </Reveal>
      </section>
    </main>
  );
}
