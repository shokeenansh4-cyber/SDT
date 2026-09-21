import { motion } from "framer-motion";

export const Reveal = ({ children, delay = 0, y = 44, className }) => (
  <motion.div
    className={className}
    initial={{ opacity: 0, y }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-70px" }}
    transition={{ duration: 0.8, delay, ease: [0.22, 1, 0.36, 1] }}
  >
    {children}
  </motion.div>
);

export const MaskedLine = ({ children, delay = 0, className }) => (
  <span className={`block overflow-hidden pb-[0.08em] ${className || ""}`}>
    <motion.span
      className="block will-change-transform"
      initial={{ y: "115%" }}
      animate={{ y: 0 }}
      transition={{ duration: 0.95, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.span>
  </span>
);

export const ChapterTag = ({ num, label }) => (
  <div
    className="flex items-center gap-3 font-mono text-[11px] sm:text-xs tracking-[0.35em] uppercase"
    data-testid={`chapter-tag-${num}`}
  >
    <span className="text-flame font-semibold">{num}</span>
    <span className="h-px w-10 bg-white/25" />
    <span className="text-volt">{label}</span>
  </div>
);
