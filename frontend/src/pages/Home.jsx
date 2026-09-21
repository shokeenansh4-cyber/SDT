import { useRef } from "react";
import { Link } from "react-router-dom";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight, ArrowUpRight, BadgeCheck, Dumbbell, Medal, MessageCircle, Trophy } from "lucide-react";
import { Reveal, MaskedLine, ChapterTag } from "@/components/Reveal";
import PlateSpinner from "@/components/PlateSpinner";
import Marquee from "@/components/Marquee";
import Counter from "@/components/Counter";
import BeforeAfter from "@/components/BeforeAfter";
import { useApply } from "@/context/ApplyContext";
import { IMAGES, STATS, PHILOSOPHY, TRANSFORMATIONS, WA_DEFAULT } from "@/data/content";

const heroContainer = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12, delayChildren: 0.7 } },
};
const heroItem = {
  hidden: { opacity: 0, y: 26 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } },
};

export default function Home() {
  const { openApply } = useApply();
  const heroRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ["start start", "end start"] });
  const imgY = useTransform(scrollYProgress, [0, 1], [0, 130]);
  const bgY = useTransform(scrollYProgress, [0, 1], [0, -80]);

  return (
    <main data-testid="home-page">
      {/* ============ HERO ============ */}
      <section ref={heroRef} className="relative flex min-h-screen items-center overflow-hidden pt-24" data-testid="hero-section">
        <motion.span
          style={{ y: bgY }}
          aria-hidden="true"
          className="text-outline pointer-events-none absolute -right-8 top-1/2 -translate-y-1/2 select-none font-display text-[26rem] font-extrabold leading-none tracking-tighter"
        >
          SDF
        </motion.span>
        <PlateSpinner className="absolute -left-24 top-24 h-72 w-72 text-white/[0.05]" />
        <PlateSpinner reverse className="absolute -bottom-28 right-[38%] h-96 w-96 text-flame/[0.07]" />

        <div className="relative z-10 mx-auto grid w-full max-w-7xl grid-cols-1 items-center gap-14 px-4 pb-20 sm:px-8 lg:grid-cols-12 lg:px-16">
          <div className="lg:col-span-7">
            <motion.div variants={heroContainer} initial="hidden" animate="show">
              <motion.p variants={heroItem} className="mb-6 inline-flex items-center gap-2 border border-volt/40 px-3 py-1.5 font-mono text-[11px] uppercase tracking-[0.3em] text-volt" data-testid="hero-eyebrow">
                <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-volt" />
                India Online Training
              </motion.p>
            </motion.div>

            <h1 className="font-display text-5xl font-extrabold uppercase leading-[0.92] tracking-tight text-white sm:text-7xl lg:text-8xl" data-testid="hero-headline">
              <MaskedLine delay={0.15}>Transform</MaskedLine>
              <MaskedLine delay={0.3}>
                Your <span className="text-flame">Body</span> With
              </MaskedLine>
              <MaskedLine delay={0.45}>World-Class</MaskedLine>
              <MaskedLine delay={0.6}>
                <span className="text-outline-flame">Online Coaching</span>
              </MaskedLine>
            </h1>

            <motion.div variants={heroContainer} initial="hidden" animate="show">
              <motion.p variants={heroItem} className="mt-7 max-w-xl text-base leading-relaxed text-slate-300 sm:text-lg" data-testid="hero-subline">
                Personalized training, Indian meal plans and weekly accountability with award-winning physique coach{" "}
                <span className="font-semibold text-white">Sandeep Dangi</span>. Built for busy men and women over 35.
              </motion.p>

              <motion.div variants={heroItem} className="mt-9 flex flex-wrap items-center gap-4">
                <button
                  onClick={openApply}
                  data-testid="hero-apply-btn"
                  className="group flex items-center gap-2.5 bg-flame px-8 py-4 font-display text-lg font-bold uppercase tracking-widest text-white transition-colors duration-300 hover:bg-volt hover:text-obsidian"
                >
                  Apply for Online Coaching
                  <ArrowRight className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1.5" />
                </button>
                <a
                  href={WA_DEFAULT}
                  target="_blank"
                  rel="noreferrer"
                  data-testid="hero-whatsapp-btn"
                  className="group flex items-center gap-2.5 border border-white/20 px-8 py-4 font-display text-lg font-bold uppercase tracking-widest text-white transition-colors duration-300 hover:border-[#25D366] hover:text-[#25D366]"
                >
                  <MessageCircle className="h-5 w-5" />
                  Chat on WhatsApp
                </a>
              </motion.div>

              <motion.p variants={heroItem} className="mt-7 font-mono text-[11px] tracking-[0.3em] text-slate-500" data-testid="hero-language-line">
                COACHING AVAILABLE IN <span className="text-volt">ENGLISH</span> · <span className="text-volt">हिंदी</span> · <span className="text-volt">ਪੰਜਾਬੀ</span>
              </motion.p>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.94 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.1, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className="relative lg:col-span-5"
          >
            <motion.div style={{ y: imgY }} className="relative">
              <div className="clip-frame relative overflow-hidden border border-white/10" data-testid="hero-image-frame">
                <img
                  src={IMAGES.hero}
                  alt="Coach Sandeep Dangi training"
                  className="h-[420px] w-full object-cover sm:h-[520px]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-obsidian/80 via-transparent to-transparent" />
                <div className="absolute bottom-4 left-4 flex items-center gap-2 border border-white/15 bg-obsidian/70 px-3 py-2 backdrop-blur-md" data-testid="hero-coach-badge">
                  <BadgeCheck className="h-4 w-4 text-volt" />
                  <span className="font-mono text-[10px] tracking-[0.25em] text-white">NASM CERTIFIED COACH</span>
                </div>
              </div>
              <div className="absolute -right-4 -top-4 -z-10 h-full w-full border border-flame/40" />
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ============ TRUST STRIP ============ */}
      <section className="border-y border-white/10 bg-carbon" data-testid="trust-strip">
        <div className="mx-auto grid max-w-7xl grid-cols-2 lg:grid-cols-4">
          {STATS.map((s, i) => (
            <Reveal key={s.label} delay={i * 0.08} className={`border-white/10 px-6 py-10 ${i % 2 === 1 ? "border-l" : ""} ${i > 1 ? "border-t lg:border-t-0 lg:border-l" : ""}`}>
              <p className="font-mono text-[10px] tracking-[0.3em] text-slate-500">{s.mono}</p>
              <p className="mt-2 font-display text-5xl font-extrabold tracking-tight text-white sm:text-6xl">
                {s.value !== null ? <Counter to={s.value} suffix={s.suffix} /> : s.text}
              </p>
              <p className="mt-1 text-sm text-slate-400">{s.label}</p>
            </Reveal>
          ))}
        </div>
      </section>

      <Marquee />

      {/* ============ CHAPTER 01 — THE COACH ============ */}
      <section className="relative overflow-hidden py-24 sm:py-32" data-testid="home-coach-section">
        <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-14 px-4 sm:px-8 lg:grid-cols-2 lg:px-16">
          <Reveal className="relative order-2 lg:order-1">
            <div className="clip-frame-alt overflow-hidden border border-white/10">
              <img src={IMAGES.coaching} alt="Sandeep Dangi coaching" className="h-[440px] w-full object-cover transition-transform duration-700 hover:scale-105" loading="lazy" />
            </div>
            <div className="absolute -bottom-5 -left-3 bg-flame px-5 py-3 font-display text-xl font-bold uppercase tracking-widest text-white sm:-left-6" data-testid="coach-exp-badge">
              26 Years of Iron
            </div>
          </Reveal>
          <div className="order-1 lg:order-2">
            <Reveal><ChapterTag num="01" label="The Coach" /></Reveal>
            <Reveal delay={0.1}>
              <h2 className="mt-5 font-display text-4xl font-extrabold uppercase leading-[0.95] tracking-tight text-white sm:text-6xl">
                Not an influencer.<br />A <span className="text-flame">lifer.</span>
              </h2>
            </Reveal>
            <Reveal delay={0.18}>
              <p className="mt-6 max-w-lg text-base leading-relaxed text-slate-300 sm:text-lg">
                26 years under the bar. Multiple Canadian bodybuilding titles. 5,000+ transformations across men, women and clients over 40. Sandeep coaches the way he trained — controlled, honest and relentless.
              </p>
            </Reveal>
            <Reveal delay={0.26}>
              <div className="mt-7 space-y-3">
                {["NASM Certified Personal Trainer", "Men's Physique athlete & contest-prep coach", "Transformations for men, women & clients over 40"].map((item) => (
                  <div key={item} className="flex items-center gap-3 text-sm text-slate-300">
                    <Medal className="h-4 w-4 shrink-0 text-volt" />
                    {item}
                  </div>
                ))}
              </div>
            </Reveal>
            <Reveal delay={0.34}>
              <Link
                to="/about"
                data-testid="home-meet-sandeep-link"
                className="group mt-9 inline-flex items-center gap-2 border-b-2 border-flame pb-1 font-display text-lg font-bold uppercase tracking-widest text-white transition-colors duration-300 hover:text-flame"
              >
                Read Sandeep's Story
                <ArrowUpRight className="h-5 w-5 transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1" />
              </Link>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ============ CHAPTER 02 — THE PROOF ============ */}
      <section className="relative overflow-hidden border-t border-white/10 bg-carbon py-24 sm:py-32" data-testid="home-proof-section">
        <PlateSpinner className="absolute -right-24 top-10 h-80 w-80 text-white/[0.04]" />
        <div className="mx-auto max-w-7xl px-4 sm:px-8 lg:px-16">
          <div className="flex flex-wrap items-end justify-between gap-6">
            <div>
              <Reveal><ChapterTag num="02" label="The Proof" /></Reveal>
              <Reveal delay={0.1}>
                <h2 className="mt-5 font-display text-4xl font-extrabold uppercase leading-[0.95] tracking-tight text-white sm:text-6xl">
                  Real people.<br /><span className="text-outline-flame">Real numbers.</span>
                </h2>
              </Reveal>
            </div>
            <Reveal delay={0.2}>
              <Link
                to="/transformations"
                data-testid="home-all-transformations-link"
                className="group inline-flex items-center gap-2 bg-white px-6 py-3.5 font-display text-base font-bold uppercase tracking-widest text-obsidian transition-colors duration-300 hover:bg-flame hover:text-white"
              >
                All Transformations
                <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
            </Reveal>
          </div>

          <div className="mt-14 grid gap-8 md:grid-cols-3">
            {TRANSFORMATIONS.slice(0, 3).map((t, i) => (
              <Reveal key={t.id} delay={i * 0.12}>
                <Link to="/transformations" className="group block border border-white/10 bg-obsidian transition-colors duration-300 hover:border-flame/50" data-testid={`home-proof-card-${t.id}`}>
                  <BeforeAfter before={t.before} after={t.after} id={`home-${t.id}`} />
                  <div className="p-5">
                    <div className="flex items-center justify-between">
                      <p className="font-display text-xl font-bold uppercase tracking-wide text-white">
                        {t.name}, {t.age} · {t.city}
                      </p>
                    </div>
                    <div className="mt-2 flex items-center gap-3 font-mono text-xs">
                      <span className="bg-flame px-2 py-1 font-bold text-white">{t.result}</span>
                      <span className="text-slate-400">{t.weeks} WEEKS</span>
                    </div>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
          <Reveal delay={0.2}>
            <p className="mt-6 font-mono text-[10px] tracking-[0.2em] text-slate-600" data-testid="home-proof-disclaimer">
              SAMPLE IMAGERY — REAL CLIENT PHOTOS ARE PUBLISHED ONLY WITH WRITTEN PERMISSION.
            </p>
          </Reveal>
        </div>
      </section>

      {/* ============ CHAPTER 03 — THE METHOD ============ */}
      <section className="relative overflow-hidden py-24 sm:py-32" data-testid="home-method-section">
        <span aria-hidden="true" className="text-outline pointer-events-none absolute -left-6 bottom-0 select-none font-display text-[16rem] font-extrabold leading-none">03</span>
        <div className="relative mx-auto max-w-7xl px-4 sm:px-8 lg:px-16">
          <Reveal><ChapterTag num="03" label="The Method" /></Reveal>
          <Reveal delay={0.1}>
            <h2 className="mt-5 max-w-3xl font-display text-4xl font-extrabold uppercase leading-[0.95] tracking-tight text-white sm:text-6xl">
              Five rules.<br />Zero shortcuts.
            </h2>
          </Reveal>
          <div className="mt-14 grid gap-px border border-white/10 bg-white/10 sm:grid-cols-2 lg:grid-cols-5">
            {PHILOSOPHY.map((p, i) => (
              <Reveal key={p.num} delay={i * 0.08} className="group bg-obsidian p-7 transition-colors duration-500 hover:bg-steel">
                <p className="font-mono text-xs tracking-[0.3em] text-flame">{p.num}</p>
                <Dumbbell className="mt-5 h-6 w-6 text-slate-600 transition-all duration-500 group-hover:rotate-12 group-hover:text-volt" />
                <h3 className="mt-4 font-display text-2xl font-bold uppercase leading-tight tracking-wide text-white">{p.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-slate-400">{p.desc}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ============ CTA BAND ============ */}
      <section className="relative overflow-hidden border-t border-white/10 bg-carbon py-24 sm:py-28" data-testid="home-cta-section">
        <PlateSpinner reverse className="absolute -left-20 -top-20 h-72 w-72 text-flame/10" />
        <PlateSpinner className="absolute -bottom-24 -right-16 h-96 w-96 text-white/[0.05]" />
        <div className="relative mx-auto max-w-7xl px-4 text-left sm:px-8 lg:px-16">
          <Reveal>
            <p className="font-mono text-[11px] uppercase tracking-[0.35em] text-volt">The bar is loaded</p>
          </Reveal>
          <Reveal delay={0.1}>
            <h2 className="mt-4 font-display text-5xl font-extrabold uppercase leading-[0.9] tracking-tight text-white sm:text-7xl">
              Your first rep<br />starts <span className="text-flame">here.</span>
            </h2>
          </Reveal>
          <Reveal delay={0.2}>
            <div className="mt-10 flex flex-wrap gap-4">
              <button
                onClick={openApply}
                data-testid="cta-apply-btn"
                className="group flex items-center gap-2.5 bg-flame px-8 py-4 font-display text-lg font-bold uppercase tracking-widest text-white transition-colors duration-300 hover:bg-volt hover:text-obsidian"
              >
                Apply for Online Coaching
                <ArrowRight className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1.5" />
              </button>
              <a
                href={WA_DEFAULT}
                target="_blank"
                rel="noreferrer"
                data-testid="cta-whatsapp-btn"
                className="flex items-center gap-2.5 border border-white/20 px-8 py-4 font-display text-lg font-bold uppercase tracking-widest text-white transition-colors duration-300 hover:border-[#25D366] hover:text-[#25D366]"
              >
                <MessageCircle className="h-5 w-5" />
                Chat on WhatsApp
              </a>
            </div>
          </Reveal>
          <Reveal delay={0.28}>
            <div className="mt-10 flex items-center gap-3 text-sm text-slate-500">
              <Trophy className="h-4 w-4 text-volt" />
              Applications reviewed personally by Sandeep within 24 hours.
            </div>
          </Reveal>
        </div>
      </section>
    </main>
  );
}
