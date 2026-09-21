import { Link } from "react-router-dom";
import { ArrowUpRight, Instagram, Youtube, Zap } from "lucide-react";
import { NAV_LINKS, WA_DEFAULT } from "@/data/content";

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-carbon" data-testid="site-footer">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-8 lg:px-16">
        <p className="font-display text-4xl font-extrabold uppercase leading-none tracking-tight text-outline-flame sm:text-6xl">
          Transform or
        </p>
        <p className="font-display text-4xl font-extrabold uppercase leading-none tracking-tight text-white sm:text-6xl">
          Stay Average<span className="text-flame">.</span>
        </p>

        <div className="mt-12 grid gap-10 md:grid-cols-3">
          <div>
            <div className="flex items-center gap-2">
              <span className="flex h-8 w-8 items-center justify-center bg-flame">
                <Zap className="h-4 w-4 text-white" />
              </span>
              <span className="font-display text-xl font-extrabold uppercase tracking-wider">SDF</span>
            </div>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-slate-400">
              Premium online transformation coaching for busy men and women across India — personalized training, Indian meal plans and weekly accountability.
            </p>
            <p className="mt-4 font-mono text-[11px] tracking-[0.25em] text-volt" data-testid="footer-language-line">
              COACHING IN ENGLISH · हिंदी · ਪੰਜਾਬੀ
            </p>
          </div>

          <div>
            <p className="font-mono text-[11px] uppercase tracking-[0.3em] text-slate-500">Navigate</p>
            <ul className="mt-4 space-y-2.5">
              {NAV_LINKS.map((l) => (
                <li key={l.to}>
                  <Link
                    to={l.to}
                    data-testid={`footer-${l.testId}`}
                    className="group inline-flex items-center gap-1.5 text-sm text-slate-300 transition-colors duration-300 hover:text-flame"
                  >
                    {l.label}
                    <ArrowUpRight className="h-3.5 w-3.5 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="font-mono text-[11px] uppercase tracking-[0.3em] text-slate-500">Start Today</p>
            <a
              href={WA_DEFAULT}
              target="_blank"
              rel="noreferrer"
              data-testid="footer-whatsapp-link"
              className="mt-4 inline-flex items-center gap-2 border border-white/15 px-5 py-3 font-display text-sm font-bold uppercase tracking-widest text-white transition-colors duration-300 hover:border-[#25D366] hover:text-[#25D366]"
            >
              Chat on WhatsApp
              <ArrowUpRight className="h-4 w-4" />
            </a>
            <div className="mt-6 flex gap-3">
              <a href="https://instagram.com" target="_blank" rel="noreferrer" aria-label="Instagram" data-testid="footer-instagram-link" className="flex h-10 w-10 items-center justify-center border border-white/15 text-slate-400 transition-colors duration-300 hover:border-flame hover:text-flame">
                <Instagram className="h-4 w-4" />
              </a>
              <a href="https://youtube.com" target="_blank" rel="noreferrer" aria-label="YouTube" data-testid="footer-youtube-link" className="flex h-10 w-10 items-center justify-center border border-white/15 text-slate-400 transition-colors duration-300 hover:border-flame hover:text-flame">
                <Youtube className="h-4 w-4" />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-14 border-t border-white/10 pt-6 text-xs leading-relaxed text-slate-500">
          <p>
            Results vary by individual. Coaching provides general fitness and nutrition guidance and is not medical advice. Client photographs are published only with written permission.
          </p>
          <p className="mt-3 font-mono tracking-[0.2em]">
            © 2026 SANDEEP DANGI FITNESS · INDIA ONLINE TRAINING
          </p>
        </div>
      </div>
    </footer>
  );
}
