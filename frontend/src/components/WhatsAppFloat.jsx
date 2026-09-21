import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowUpRight, MessageCircle, X } from "lucide-react";
import { WA_DEFAULT } from "@/data/content";

export default function WhatsAppFloat() {
  const [open, setOpen] = useState(false);

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3">
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 16, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 16, scale: 0.95 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="w-72 border border-white/10 bg-steel/95 p-5 shadow-2xl backdrop-blur-xl"
            data-testid="whatsapp-popup"
          >
            <p className="font-display text-lg font-bold uppercase tracking-wide text-white">
              Talk to Sandeep
            </p>
            <p className="mt-2 text-sm leading-relaxed text-slate-400">
              Questions about coaching, programs or pricing? Get answers directly on WhatsApp.
            </p>
            <a
              href={WA_DEFAULT}
              target="_blank"
              rel="noreferrer"
              data-testid="whatsapp-start-chat-btn"
              className="mt-4 flex items-center justify-center gap-2 bg-[#25D366] py-3 font-display text-sm font-bold uppercase tracking-widest text-obsidian transition-colors duration-300 hover:bg-white"
            >
              Start Chat
              <ArrowUpRight className="h-4 w-4" />
            </a>
          </motion.div>
        )}
      </AnimatePresence>

      <button
        onClick={() => setOpen((v) => !v)}
        data-testid="whatsapp-float-btn"
        aria-label="Chat on WhatsApp"
        className="relative flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-obsidian shadow-[0_8px_30px_rgba(37,211,102,0.4)] transition-transform duration-300 hover:scale-110"
      >
        <span className="absolute inset-0 rounded-full bg-[#25D366] animate-pulse-ring" />
        {open ? <X className="relative h-6 w-6" /> : <MessageCircle className="relative h-6 w-6" />}
      </button>
    </div>
  );
}
