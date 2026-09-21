import { motion } from "framer-motion";
import { ArrowRight, Check, Medal, MessageCircle } from "lucide-react";
import { Reveal, MaskedLine, ChapterTag } from "@/components/Reveal";
import PlateSpinner from "@/components/PlateSpinner";
import { useApply } from "@/context/ApplyContext";
import { IMAGES, WA_DEFAULT } from "@/data/content";

const INCLUDES = [
  "Stage-focused training split built to your show date",
  "Periodised contest nutrition with refeeds and peak-week protocol",
  "Posing coaching — mandatory poses, transitions, stage presence",
  "Twice-weekly check-ins in the final 8 weeks",
  "Tanning, water and show-day logistics guidance",
  "Direct WhatsApp access to Sandeep through prep",
];

export default function ContestPrep() {
  const { openApply } = useApply();

  return (
    <main data-testid="contest-prep-page">
      <section className="relative overflow-hidden pb-20 pt-36 sm:pt-44">
        <span aria-hidden="true" className="text-outline pointer-events-none absolute -left-8 bottom-0 select-none font-display text-[16rem] font-extrabold leading-none">PRO</span>
        <PlateSpinner className="absolute -right-24 top-20 h-96 w-96 text-flame/[0.07]" />
        <div className="relative mx-auto grid max-w-7xl grid-cols-1 items-center gap-14 px-4 sm:px-8 lg:grid-cols-12 lg:px-16">
          <div className="lg:col-span-7">
            <ChapterTag num="07" label="Contest Prep Elite" />
            <h1 className="mt-6 font-display text-5xl font-extrabold uppercase leading-[0.92] tracking-tight text-white sm:text-7xl" data-testid="contest-headline">
              <MaskedLine delay={0.1}>From gym fit</MaskedLine>
              <MaskedLine delay={0.25}>
                to <span className="text-flame">stage ready.</span>
              </MaskedLine>
            </h1>
            <Reveal delay={0.4}>
              <p className="mt-7 max-w-xl text-base leading-relaxed text-slate-300 sm:text-lg">
                Specialist prep for Men's Physique and bodybuilding competitors — from a coach who has stood on Canadian stages himself and put athletes there too.
              </p>
            </Reveal>
            <Reveal delay={0.5}>
              <div className="mt-9 flex flex-wrap items-center gap-4">
                <button
                  onClick={openApply}
                  data-testid="contest-apply-btn"
                  className="group flex items-center gap-2.5 bg-flame px-8 py-4 font-display text-lg font-bold uppercase tracking-widest text-white transition-colors duration-300 hover:bg-volt hover:text-obsidian"
                >
                  Apply for Contest Prep
                  <ArrowRight className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1.5" />
                </button>
                <span className="inline-flex items-center gap-2 border border-volt/40 px-4 py-2.5 font-mono text-[11px] uppercase tracking-[0.25em] text-volt" data-testid="contest-application-only-badge">
                  <Medal className="h-4 w-4" />
                  Application only — limited spots
                </span>
              </div>
            </Reveal>
          </div>
          <motion.div
            initial={{ opacity: 0, scale: 0.94 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="relative lg:col-span-5"
          >
            <div className="clip-frame overflow-hidden border border-white/10">
              <img src={IMAGES.physique} alt="Men's Physique athlete stage conditioning" className="h-[440px] w-full object-cover sm:h-[520px]" />
              <div className="absolute inset-0 bg-gradient-to-t from-obsidian/70 via-transparent to-transparent" />
            </div>
            <div className="absolute -left-4 -top-4 -z-10 h-full w-full border border-flame/40" />
          </motion.div>
        </div>
      </section>

      <section className="border-t border-white/10 bg-carbon py-24 sm:py-32" data-testid="contest-includes-section">
        <div className="mx-auto grid max-w-7xl gap-14 px-4 sm:px-8 lg:grid-cols-12 lg:px-16">
          <div className="lg:col-span-5">
            <Reveal><ChapterTag num="07.1" label="Inside Prep" /></Reveal>
            <Reveal delay={0.1}>
              <h2 className="mt-5 font-display text-4xl font-extrabold uppercase leading-[0.95] tracking-tight text-white sm:text-5xl">
                Everything the<br />stage demands.
              </h2>
            </Reveal>
            <Reveal delay={0.2}>
              <p className="mt-6 max-w-md text-base leading-relaxed text-slate-300">
                Prep is not a diet. It is a 20-week campaign of training, nutrition, posing and ruthless check-ins — adjusted as your conditioning comes in.
              </p>
            </Reveal>
            <Reveal delay={0.3}>
              <a
                href={WA_DEFAULT}
                target="_blank"
                rel="noreferrer"
                data-testid="contest-whatsapp-btn"
                className="mt-9 inline-flex items-center gap-2.5 border border-white/20 px-8 py-4 font-display text-lg font-bold uppercase tracking-widest text-white transition-colors duration-300 hover:border-[#25D366] hover:text-[#25D366]"
              >
                <MessageCircle className="h-5 w-5" />
                Discuss Your Show
              </a>
            </Reveal>
          </div>
          <div className="space-y-px border border-white/10 bg-white/10 lg:col-span-7">
            {INCLUDES.map((item, i) => (
              <Reveal key={item} delay={i * 0.07} className="group flex items-start gap-5 bg-carbon p-6 transition-colors duration-500 hover:bg-steel">
                <span className="font-mono text-xs tracking-[0.3em] text-flame">{String(i + 1).padStart(2, "0")}</span>
                <p className="flex-1 text-base text-slate-200">{item}</p>
                <Check className="mt-1 h-4 w-4 shrink-0 text-volt opacity-40 transition-opacity duration-300 group-hover:opacity-100" />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 sm:py-28" data-testid="contest-cta-section">
        <div className="mx-auto max-w-7xl px-4 sm:px-8 lg:px-16">
          <Reveal>
            <div className="relative overflow-hidden border border-flame/30 bg-flame/5 p-10 sm:p-14">
              <PlateSpinner reverse className="absolute -right-16 -top-16 h-64 w-64 text-flame/10" />
              <p className="font-mono text-[11px] uppercase tracking-[0.35em] text-volt">Show day is coming either way</p>
              <h2 className="mt-4 max-w-2xl font-display text-4xl font-extrabold uppercase leading-[0.95] tracking-tight text-white sm:text-6xl">
                Step on stage knowing you did <span className="text-flame">everything.</span>
              </h2>
              <button
                onClick={openApply}
                data-testid="contest-cta-apply-btn"
                className="mt-9 bg-flame px-8 py-4 font-display text-lg font-bold uppercase tracking-widest text-white transition-colors duration-300 hover:bg-volt hover:text-obsidian"
              >
                Start Your Prep
              </button>
            </div>
          </Reveal>
        </div>
      </section>
    </main>
  );
}
