import { useEffect, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { NAV_LINKS } from "@/data/content";
import { useApply } from "@/context/ApplyContext";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const { openApply } = useApply();
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => setMobileOpen(false), [location.pathname]);

  return (
    <>
      <header
        data-testid="site-navbar"
        className={`fixed inset-x-0 top-0 z-50 transition-[background-color,border-color,backdrop-filter] duration-500 ${
          scrolled ? "border-b border-white/10 bg-obsidian/85 backdrop-blur-xl" : "bg-transparent"
        }`}
      >
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-8 lg:px-16">
          <Link to="/" className="group flex items-center gap-3" data-testid="nav-logo">
            <img
              src="/assets/sdf-logo-white.png"
              alt="SDF — Sandeep Dangi Fitness"
              className="h-12 w-12 object-contain drop-shadow-[0_0_14px_rgba(57,255,20,0.25)] transition-transform duration-300 group-hover:scale-105"
            />
          </Link>

          <nav className="hidden items-center gap-7 lg:flex" data-testid="nav-desktop">
            {NAV_LINKS.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                data-testid={link.testId}
                className={({ isActive }) =>
                  `relative font-mono text-[11px] uppercase tracking-[0.22em] transition-colors duration-300 after:absolute after:-bottom-1.5 after:left-0 after:h-px after:bg-flame after:transition-[width] after:duration-300 ${
                    isActive ? "text-white after:w-full" : "text-slate-400 after:w-0 hover:text-white"
                  }`
                }
              >
                {link.label}
              </NavLink>
            ))}
            <span className="hidden whitespace-nowrap border border-white/15 px-2.5 py-1 font-mono text-[10px] tracking-[0.25em] text-volt xl:inline" data-testid="nav-language-badge">
              EN · हिंदी · ਪੰਜਾਬੀ
            </span>
            <button
              onClick={openApply}
              data-testid="apply-now-nav-btn"
              className="bg-flame px-5 py-2.5 font-display text-sm font-bold uppercase tracking-widest text-obsidian shadow-[0_0_20px_rgba(57,255,20,0.35)] transition-[background-color,box-shadow] duration-300 hover:bg-white hover:shadow-[0_0_32px_rgba(57,255,20,0.55)]"
            >
              Apply Now
            </button>
          </nav>

          <button
            className="text-white lg:hidden"
            onClick={() => setMobileOpen((v) => !v)}
            data-testid="mobile-menu-btn"
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X className="h-7 w-7" /> : <Menu className="h-7 w-7" />}
          </button>
        </div>
      </header>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -18 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -18 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="fixed inset-0 z-40 flex flex-col justify-center bg-obsidian/97 px-8 backdrop-blur-2xl lg:hidden"
            data-testid="mobile-menu"
          >
            <img src="/assets/sdf-logo-white.png" alt="" className="mb-10 h-24 w-24 object-contain" />
            {NAV_LINKS.map((link, i) => (
              <motion.div
                key={link.to}
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.06 * i, duration: 0.4 }}
              >
                <NavLink
                  to={link.to}
                  data-testid={`mobile-${link.testId}`}
                  className={({ isActive }) =>
                    `block border-b border-white/10 py-5 font-display text-4xl font-bold uppercase tracking-wide ${
                      isActive ? "text-flame" : "text-white"
                    }`
                  }
                >
                  {link.label}
                </NavLink>
              </motion.div>
            ))}
            <motion.button
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.35 }}
              onClick={() => { setMobileOpen(false); openApply(); }}
              data-testid="apply-now-mobile-btn"
              className="mt-8 bg-flame py-4 font-display text-xl font-bold uppercase tracking-widest text-obsidian shadow-[0_0_24px_rgba(57,255,20,0.4)]"
            >
              Apply Now
            </motion.button>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
