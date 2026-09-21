import { motion } from "framer-motion";
import { ArrowRight, Dumbbell, Heart, Trophy, Flag } from "lucide-react";
import { Reveal, MaskedLine, ChapterTag } from "@/components/Reveal";
import PlateSpinner from "@/components/PlateSpinner";
import Marquee from "@/components/Marquee";
import { useApply } from "@/context/ApplyContext";
import { IMAGES, PHILOSOPHY } from "@/data/content";

const CHAPTERS = [
  {
    num: "01",
    icon: Dumbbell,
    title: "The Iron Years",
    body: "Sandeep's journey started 26 years ago in a bare-bones gym — chalk, iron and obsession. No shortcuts, no trends. Just decades of learning what actually builds a body, tested first on himself and then on thousands of clients.",
  },
  {
    num: "02",
    icon: Heart,
    title: "The Promise",
    body: "After losing his father, Sandeep made a promise: health would never be an afterthought in his family — or in anyone else's. Raising his child as a single father while competing taught him the discipline he now demands, gently but firmly, from every client.",
  },
  {
    num: "03",
    icon: Trophy,
    title: "The Titles",
    body: "In Canada, Sandeep took that discipline to the stage — multiple bodybuilding titles as a Men's Physique athlete, and a reputation as a contest-prep coach who gets athletes conditioned, posed and ready when it counts.",
  },
  {
    num: "04",
    icon: Flag,
    title: "The Homecoming",
    body: "Now the mission is India. Busy professionals, parents, people over 35 who think their best shape is behind them. Sandeep brings world-class coaching home — in English, Hindi and Punjabi, with nutrition built around real Indian food.",
  },
];

export default function About() {
  const { openApply } = useApply();

  return (
    <main data-testid="about-page">
      <section className="relative overflow-hidden pb-20 pt-36 sm:pt-44">
        <span aria-hidden="true" className="text-outline pointer-events-none absolute -right-10 top-24 select-none font-display text-[18rem] font-extrabold leading-none">26</span>
        <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-14 px-4 sm:px-8 lg:grid-cols-12 lg:px-16">
          <div className="lg:col-span-7">
            <ChapterTag num="04" label="About Sandeep" />
            <h1 className="mt-6 font-display text-5xl font-extrabold uppercase leading-[0.92] tracking-tight text-white sm:text-7xl" data-testid="about-headline">
              <MaskedLine delay={0.1}>The man behind</MaskedLine>
              <MaskedLine delay={0.25}>
                <span className="text-flame">5,000+</span> transformations
              </MaskedLine>
            </h1>
            <Reveal delay={0.4}>
              <p className="mt-7 max-w-xl text-base leading-relaxed text-slate-300 sm:text-lg">
                Not a resume. A story — 26 years of iron, a promise made after loss, titles earned on Canadian stages, and a return home to coach India.
              </p>
            </Reveal>
          </div>
          <motion.div
            initial={{ opacity: 0, scale: 0.94 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="relative lg:col-span-5"
          >
            <div className="clip-frame relative overflow-hidden border border-white/10" data-testid="about-portrait-frame">
              <img src={IMAGES.contest} alt="Sandeep Dangi — Men's Physique athlete" className="h-[460px] w-full object-cover sm:h-[540px]" />
              <div className="absolute inset-0 bg-gradient-to-t from-obsidian/70 via-transparent to-transparent" />
            </div>
            <div className="absolute -left-4 -top-4 -z-10 h-full w-full border border-volt/40" />
            <div className="absolute -bottom-5 right-4 bg-flame px-5 py-3 font-display text-lg font-bold uppercase tracking-widest text-white" data-testid="about-title-badge">
              Canadian Bodybuilding Titles
            </div>
          </motion.div>
        </div>
      </section>

      <Marquee />

      <section className="relative overflow-hidden py-24 sm:py-32" data-testid="about-story-section">
        <PlateSpinner className="absolute -left-28 bottom-20 h-80 w-80 text-white/[0.04]" />
        <div className="mx-auto max-w-7xl px-4 sm:px-8 lg:px-16">
          <Reveal><ChapterTag num="05" label="The Story" /></Reveal>
          <div className="mt-12 grid gap-px border border-white/10 bg-white/10 md:grid-cols-2">
            {CHAPTERS.map((c, i) => (
              <Reveal key={c.num} delay={i * 0.08} className="group bg-obsidian p-8 transition-colors duration-500 hover:bg-steel sm:p-10">
                <div className="flex items-center justify-between">
                  <p className="font-mono text-xs tracking-[0.35em] text-flame">CHAPTER {c.num}</p>
                  <c.icon className="h-6 w-6 text-slate-600 transition-all duration-500 group-hover:-rotate-12 group-hover:text-volt" />
                </div>
                <h2 className="mt-6 font-display text-3xl font-extrabold uppercase tracking-tight text-white sm:text-4xl" data-testid={`about-chapter-${c.num}`}>
                  {c.title}
                </h2>
                <p className="mt-4 max-w-md text-base leading-relaxed text-slate-400">{c.body}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-white/10 bg-carbon py-24 sm:py-32" data-testid="about-philosophy-section">
        <div className="mx-auto max-w-7xl px-4 sm:px-8 lg:px-16">
          <div className="grid items-start gap-14 lg:grid-cols-12">
            <div className="lg:col-span-5">
              <Reveal><ChapterTag num="06" label="Coaching Philosophy" /></Reveal>
              <Reveal delay={0.1}>
                <h2 className="mt-5 font-display text-4xl font-extrabold uppercase leading-[0.95] tracking-tight text-white sm:text-6xl">
                  How I coach<br />is how <span className="text-flame">I trained.</span>
                </h2>
              </Reveal>
              <Reveal delay={0.2}>
                <p className="mt-6 max-w-md text-base leading-relaxed text-slate-300">
                  Real experience. Real results. A personal story. That is the brand advantage — and the standard every client is coached to.
                </p>
              </Reveal>
              <Reveal delay={0.3}>
                <button
                  onClick={openApply}
                  data-testid="about-apply-btn"
                  className="group mt-9 flex items-center gap-2.5 bg-flame px-8 py-4 font-display text-lg font-bold uppercase tracking-widest text-white transition-colors duration-300 hover:bg-volt hover:text-obsidian"
                >
                  Train With Sandeep
                  <ArrowRight className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1.5" />
                </button>
              </Reveal>
            </div>
            <div className="space-y-px border border-white/10 bg-white/10 lg:col-span-7">
              {PHILOSOPHY.map((p, i) => (
                <Reveal key={p.num} delay={i * 0.07} className="group flex items-start gap-6 bg-carbon p-6 transition-colors duration-500 hover:bg-steel sm:p-7">
                  <span className="font-display text-4xl font-extrabold text-outline-flame transition-colors duration-500 group-hover:text-flame">
                    {p.num}
                  </span>
                  <div>
                    <h3 className="font-display text-2xl font-bold uppercase tracking-wide text-white" data-testid={`philosophy-${p.num}`}>{p.title}</h3>
                    <p className="mt-1.5 text-sm leading-relaxed text-slate-400">{p.desc}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
