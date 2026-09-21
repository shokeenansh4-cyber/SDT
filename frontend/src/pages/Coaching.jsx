import { motion } from "framer-motion";
import { ArrowRight, Check, MessageCircle, UtensilsCrossed, Dumbbell, Video, CalendarCheck } from "lucide-react";
import { Reveal, MaskedLine, ChapterTag } from "@/components/Reveal";
import PlateSpinner from "@/components/PlateSpinner";
import { useApply } from "@/context/ApplyContext";
import { IMAGES, PROGRAMS, WA_DEFAULT } from "@/data/content";

const PILLARS = [
  { icon: UtensilsCrossed, title: "Indian-Food Nutrition", desc: "Meal plans built around dal, roti, paneer and rice — vegetarian options included. Structured, not banned." },
  { icon: Dumbbell, title: "Structured Training", desc: "Gym or home programs matched to your equipment, schedule and experience — beginners welcome." },
  { icon: CalendarCheck, title: "Weekly Accountability", desc: "Check-ins, progress-photo reviews and plan adjustments every single week. No drifting." },
  { icon: Video, title: "Form Correction", desc: "Send your lift videos, get technique fixes back. Premium clients get scheduled video consultations." },
];

export default function Coaching() {
  const { openApply } = useApply();

  return (
    <main data-testid="coaching-page">
      <section className="relative overflow-hidden pb-20 pt-36 sm:pt-44">
        <PlateSpinner reverse className="absolute -right-24 top-24 h-96 w-96 text-flame/[0.06]" />
        <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-14 px-4 sm:px-8 lg:grid-cols-12 lg:px-16">
          <div className="lg:col-span-7">
            <ChapterTag num="03" label="Online Coaching" />
            <h1 className="mt-6 font-display text-5xl font-extrabold uppercase leading-[0.92] tracking-tight text-white sm:text-7xl" data-testid="coaching-headline">
              <MaskedLine delay={0.1}>World-class coaching.</MaskedLine>
              <MaskedLine delay={0.25}>
                <span className="text-outline-flame">Wherever you live.</span>
              </MaskedLine>
            </h1>
            <Reveal delay={0.4}>
              <p className="mt-7 max-w-xl text-base leading-relaxed text-slate-300 sm:text-lg">
                Fully online, built for busy schedules. Your training, your Indian meal plan and your coach — one WhatsApp message away. Coaching in English, Hindi and Punjabi.
              </p>
            </Reveal>
            <Reveal delay={0.5}>
              <div className="mt-9 flex flex-wrap gap-4">
                <button
                  onClick={openApply}
                  data-testid="coaching-apply-btn"
                  className="group flex items-center gap-2.5 bg-flame px-8 py-4 font-display text-lg font-bold uppercase tracking-widest text-white transition-colors duration-300 hover:bg-volt hover:text-obsidian"
                >
                  Apply for Online Coaching
                  <ArrowRight className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1.5" />
                </button>
                <a
                  href={WA_DEFAULT}
                  target="_blank"
                  rel="noreferrer"
                  data-testid="coaching-whatsapp-btn"
                  className="flex items-center gap-2.5 border border-white/20 px-8 py-4 font-display text-lg font-bold uppercase tracking-widest text-white transition-colors duration-300 hover:border-[#25D366] hover:text-[#25D366]"
                >
                  <MessageCircle className="h-5 w-5" />
                  Ask a Question
                </a>
              </div>
            </Reveal>
          </div>
          <motion.div
            initial={{ opacity: 0, scale: 0.94 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="relative lg:col-span-5"
          >
            <div className="clip-frame-alt overflow-hidden border border-white/10">
              <img src={IMAGES.dumbbell} alt="Online coaching training session" className="h-[420px] w-full object-cover sm:h-[500px]" />
            </div>
            <div className="absolute -right-4 -top-4 -z-10 h-full w-full border border-flame/40" />
          </motion.div>
        </div>
      </section>

      <section className="border-t border-white/10 bg-carbon py-24 sm:py-28" data-testid="coaching-pillars-section">
        <div className="mx-auto max-w-7xl px-4 sm:px-8 lg:px-16">
          <Reveal><ChapterTag num="03.1" label="What You Get" /></Reveal>
          <div className="mt-12 grid gap-px border border-white/10 bg-white/10 sm:grid-cols-2 lg:grid-cols-4">
            {PILLARS.map((p, i) => (
              <Reveal key={p.title} delay={i * 0.08} className="group bg-carbon p-7 transition-colors duration-500 hover:bg-steel">
                <p.icon className="h-7 w-7 text-flame transition-transform duration-500 group-hover:-rotate-12 group-hover:scale-110" />
                <h3 className="mt-5 font-display text-2xl font-bold uppercase leading-tight tracking-wide text-white">{p.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-slate-400">{p.desc}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 sm:py-32" data-testid="coaching-programs-section">
        <div className="mx-auto max-w-7xl px-4 sm:px-8 lg:px-16">
          <div className="flex flex-wrap items-end justify-between gap-6">
            <div>
              <Reveal><ChapterTag num="03.2" label="Programs" /></Reveal>
              <Reveal delay={0.1}>
                <h2 className="mt-5 font-display text-4xl font-extrabold uppercase leading-[0.95] tracking-tight text-white sm:text-6xl">
                  Pick your<br /><span className="text-flame">commitment.</span>
                </h2>
              </Reveal>
            </div>
            <Reveal delay={0.2}>
              <p className="max-w-sm text-sm leading-relaxed text-slate-400">
                Full program details and India pricing are revealed on your consultation call — apply and Sandeep will map you to the right level.
              </p>
            </Reveal>
          </div>

          <div className="mt-14 grid gap-8 lg:grid-cols-3">
            {PROGRAMS.map((p, i) => (
              <Reveal key={p.num} delay={i * 0.1}>
                <div
                  className={`group relative flex h-full flex-col border p-8 transition-colors duration-500 ${
                    p.featured ? "border-flame/60 bg-steel" : "border-white/10 bg-carbon hover:border-volt/50"
                  }`}
                  data-testid={`program-card-${p.num.toLowerCase()}`}
                >
                  {p.featured && (
                    <span className="absolute -top-3 left-8 bg-flame px-3 py-1 font-mono text-[10px] font-bold tracking-[0.25em] text-white">
                      MOST POPULAR
                    </span>
                  )}
                  <p className="font-mono text-xs tracking-[0.35em] text-volt">{p.num}</p>
                  <h3 className="mt-4 font-display text-3xl font-extrabold uppercase leading-none tracking-tight text-white">
                    {p.name}
                  </h3>
                  <p className="mt-3 font-mono text-[11px] uppercase tracking-[0.2em] text-slate-500">Best for: {p.bestFor}</p>
                  <p className="mt-4 text-sm leading-relaxed text-slate-300">{p.promise}</p>
                  <ul className="mt-6 flex-1 space-y-2.5 border-t border-white/10 pt-6">
                    {p.includes.map((inc) => (
                      <li key={inc} className="flex items-start gap-2.5 text-sm text-slate-300">
                        <Check className="mt-0.5 h-4 w-4 shrink-0 text-flame" />
                        {inc}
                      </li>
                    ))}
                  </ul>
                  <button
                    onClick={openApply}
                    data-testid={`program-apply-${p.num.toLowerCase()}`}
                    className={`mt-8 flex items-center justify-center gap-2 py-3.5 font-display text-base font-bold uppercase tracking-widest transition-colors duration-300 ${
                      p.featured
                        ? "bg-flame text-white hover:bg-volt hover:text-obsidian"
                        : "border border-white/20 text-white hover:border-flame hover:text-flame"
                    }`}
                  >
                    Apply
                    <ArrowRight className="h-4 w-4" />
                  </button>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden border-t border-white/10 bg-carbon py-20" data-testid="coaching-meals-section">
        <div className="mx-auto grid max-w-7xl items-center gap-10 px-4 sm:px-8 lg:grid-cols-2 lg:px-16">
          <Reveal className="grid grid-cols-2 gap-4">
            <img src={IMAGES.meal1} alt="Indian meal prep" className="h-56 w-full border border-white/10 object-cover sm:h-72" loading="lazy" />
            <img src={IMAGES.meal2} alt="Structured Indian nutrition plan" className="mt-8 h-56 w-full border border-white/10 object-cover sm:h-72" loading="lazy" />
          </Reveal>
          <div>
            <Reveal><ChapterTag num="03.3" label="Nutrition, The Indian Way" /></Reveal>
            <Reveal delay={0.1}>
              <h2 className="mt-5 font-display text-4xl font-extrabold uppercase leading-[0.95] tracking-tight text-white sm:text-5xl">
                No boiled-chicken<br />punishment diets.
              </h2>
            </Reveal>
            <Reveal delay={0.2}>
              <p className="mt-6 max-w-lg text-base leading-relaxed text-slate-300">
                Your plan is built around the food you actually eat — roti, dal, sabzi, paneer, rice, dosa. Vegetarian and non-vegetarian options, festival-friendly adjustments and honest supplement guidance within professional scope.
              </p>
            </Reveal>
          </div>
        </div>
      </section>
    </main>
  );
}
