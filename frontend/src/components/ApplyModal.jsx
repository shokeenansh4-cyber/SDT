import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowLeft, ArrowRight, X } from "lucide-react";
import { toast } from "sonner";
import { useApply } from "@/context/ApplyContext";
import { waLink } from "@/data/content";

const GOALS = ["Fat Loss", "Muscle Gain", "Strength", "Contest Prep", "General Fitness"];
const PROGRAMS_OPT = ["8-Week Transformation", "12-Week Premium", "Contest Prep Elite", "Not sure yet"];
const READINESS = ["Ready to start now", "Within 2–4 weeks", "Just exploring"];

const initialForm = { name: "", age: "", city: "", whatsapp: "", goal: "", challenge: "", program: "", readiness: "" };

const inputCls =
  "w-full border border-white/15 bg-obsidian px-4 py-3 text-sm text-white placeholder:text-slate-500 focus:border-flame focus:outline-none focus:shadow-[0_0_18px_rgba(57,255,20,0.15)]";

export default function ApplyModal() {
  const { open, closeApply } = useApply();
  const [step, setStep] = useState(0);
  const [form, setForm] = useState(initialForm);

  const set = (key, value) => setForm((f) => ({ ...f, [key]: value }));
  const stepOneValid = form.name.trim() && form.age && form.city.trim() && form.whatsapp.trim().length >= 10;
  const stepTwoValid = form.goal && form.program;

  const submit = () => {
    const msg = `Hi Sandeep, new coaching application.\n\nName: ${form.name}\nAge: ${form.age}\nCity: ${form.city}\nWhatsApp: ${form.whatsapp}\nGoal: ${form.goal}\nBiggest challenge: ${form.challenge || "-"}\nProgram: ${form.program}\nReadiness: ${form.readiness || "-"}`;
    window.open(waLink(msg), "_blank");
    toast.success("Application ready — opening WhatsApp to send it to Sandeep.");
    closeApply();
    setStep(0);
    setForm(initialForm);
  };

  const chip = (key, options, testPrefix) => (
    <div className="flex flex-wrap gap-2">
      {options.map((opt) => (
        <button
          key={opt}
          type="button"
          onClick={() => set(key, opt)}
          data-testid={`${testPrefix}-${opt.toLowerCase().replace(/[^a-z0-9]+/g, "-")}`}
          className={`border px-4 py-2 font-mono text-xs tracking-wider transition-colors duration-300 ${
            form[key] === opt
              ? "border-flame bg-flame text-obsidian shadow-[0_0_16px_rgba(57,255,20,0.35)]"
              : "border-white/15 text-slate-300 hover:border-flame/60 hover:text-flame"
          }`}
        >
          {opt}
        </button>
      ))}
    </div>
  );

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[60] flex items-center justify-center bg-obsidian/85 p-4 backdrop-blur-md"
          onClick={closeApply}
          data-testid="apply-modal"
        >
          <motion.div
            initial={{ opacity: 0, y: 40, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 40, scale: 0.97 }}
            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
            onClick={(e) => e.stopPropagation()}
            className="relative max-h-[90vh] w-full max-w-lg overflow-y-auto border border-flame/25 bg-carbon p-6 shadow-[0_0_80px_rgba(57,255,20,0.12)] sm:p-9"
          >
            <button
              onClick={closeApply}
              data-testid="apply-modal-close-btn"
              aria-label="Close application"
              className="absolute right-4 top-4 text-slate-500 transition-colors duration-300 hover:text-flame"
            >
              <X className="h-5 w-5" />
            </button>

            <p className="font-mono text-[11px] tracking-[0.3em] text-volt">STEP {step + 1} / 2</p>
            <h3 className="mt-2 font-display text-3xl font-extrabold uppercase tracking-tight text-white">
              {step === 0 ? "Apply for Coaching" : "Your Goals"}
            </h3>

            {step === 0 ? (
              <div className="mt-6 space-y-4">
                <input
                  value={form.name}
                  onChange={(e) => set("name", e.target.value)}
                  placeholder="Full name"
                  data-testid="apply-name-input"
                  className={inputCls}
                />
                <div className="grid grid-cols-2 gap-4">
                  <input
                    value={form.age}
                    onChange={(e) => set("age", e.target.value.replace(/\D/g, "").slice(0, 2))}
                    placeholder="Age"
                    inputMode="numeric"
                    data-testid="apply-age-input"
                    className={inputCls}
                  />
                  <input
                    value={form.city}
                    onChange={(e) => set("city", e.target.value)}
                    placeholder="City"
                    data-testid="apply-city-input"
                    className={inputCls}
                  />
                </div>
                <input
                  value={form.whatsapp}
                  onChange={(e) => set("whatsapp", e.target.value.replace(/[^\d+]/g, "").slice(0, 15))}
                  placeholder="WhatsApp number"
                  inputMode="tel"
                  data-testid="apply-whatsapp-input"
                  className={inputCls}
                />
                <button
                  onClick={() => setStep(1)}
                  disabled={!stepOneValid}
                  data-testid="apply-next-btn"
                  className="flex w-full items-center justify-center gap-2 bg-flame py-3.5 font-display text-base font-bold uppercase tracking-widest text-obsidian shadow-[0_0_22px_rgba(57,255,20,0.3)] transition-colors duration-300 hover:bg-white disabled:cursor-not-allowed disabled:opacity-40"
                >
                  Continue
                  <ArrowRight className="h-4 w-4" />
                </button>
              </div>
            ) : (
              <div className="mt-6 space-y-5">
                <div>
                  <p className="mb-2 font-mono text-[11px] uppercase tracking-[0.25em] text-slate-500">Main goal</p>
                  {chip("goal", GOALS, "apply-goal")}
                </div>
                <div>
                  <p className="mb-2 font-mono text-[11px] uppercase tracking-[0.25em] text-slate-500">Preferred program</p>
                  {chip("program", PROGRAMS_OPT, "apply-program")}
                </div>
                <div>
                  <p className="mb-2 font-mono text-[11px] uppercase tracking-[0.25em] text-slate-500">Readiness to start</p>
                  {chip("readiness", READINESS, "apply-readiness")}
                </div>
                <input
                  value={form.challenge}
                  onChange={(e) => set("challenge", e.target.value)}
                  placeholder="Biggest challenge (optional)"
                  data-testid="apply-challenge-input"
                  className={inputCls}
                />
                <div className="flex gap-3">
                  <button
                    onClick={() => setStep(0)}
                    data-testid="apply-back-btn"
                    className="flex items-center gap-2 border border-white/15 px-5 py-3.5 font-display text-sm font-bold uppercase tracking-widest text-slate-300 transition-colors duration-300 hover:border-white/40"
                  >
                    <ArrowLeft className="h-4 w-4" />
                    Back
                  </button>
                  <button
                    onClick={submit}
                    disabled={!stepTwoValid}
                    data-testid="apply-submit-btn"
                    className="flex flex-1 items-center justify-center gap-2 bg-flame py-3.5 font-display text-base font-bold uppercase tracking-widest text-obsidian shadow-[0_0_22px_rgba(57,255,20,0.3)] transition-colors duration-300 hover:bg-white disabled:cursor-not-allowed disabled:opacity-40"
                  >
                    Send via WhatsApp
                    <ArrowRight className="h-4 w-4" />
                  </button>
                </div>
              </div>
            )}

            <p className="mt-5 text-[11px] leading-relaxed text-slate-500">
              By applying you agree to be contacted on WhatsApp. Your details stay private and are used only for your coaching consultation.
            </p>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
