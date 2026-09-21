import { useEffect } from "react";
import "@/App.css";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import Lenis from "lenis";
import { Toaster } from "sonner";
import { ApplyProvider } from "@/context/ApplyContext";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppFloat from "@/components/WhatsAppFloat";
import ApplyModal from "@/components/ApplyModal";
import Home from "@/pages/Home";
import Transformations from "@/pages/Transformations";
import Coaching from "@/pages/Coaching";
import ContestPrep from "@/pages/ContestPrep";
import About from "@/pages/About";

function ScrollManager() {
  const { pathname } = useLocation();
  useEffect(() => {
    if (window.__lenis) {
      window.__lenis.scrollTo(0, { immediate: true });
    } else {
      window.scrollTo(0, 0);
    }
  }, [pathname]);
  return null;
}

function App() {
  useEffect(() => {
    const lenis = new Lenis({ lerp: 0.09, smoothWheel: true });
    window.__lenis = lenis;
    let rafId;
    const loop = (time) => {
      lenis.raf(time);
      rafId = requestAnimationFrame(loop);
    };
    rafId = requestAnimationFrame(loop);
    return () => {
      cancelAnimationFrame(rafId);
      lenis.destroy();
      window.__lenis = null;
    };
  }, []);

  return (
    <ApplyProvider>
      <BrowserRouter>
        <ScrollManager />
        <div className="App bg-obsidian font-body text-slate-100">
          <div aria-hidden="true" className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
            <img src="/assets/sandeep-bg.webp" alt="" className="h-full w-full object-cover object-top opacity-[0.16] grayscale-[0.3]" />
            <div className="absolute inset-0 bg-obsidian/55" />
          </div>
          <div aria-hidden="true" className="grain-overlay pointer-events-none fixed inset-0 z-[5] opacity-[0.05]" />
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/transformations" element={<Transformations />} />
            <Route path="/coaching" element={<Coaching />} />
            <Route path="/contest-prep" element={<ContestPrep />} />
            <Route path="/about" element={<About />} />
            <Route path="*" element={<Home />} />
          </Routes>
          <Footer />
          <WhatsAppFloat />
          <ApplyModal />
          <Toaster theme="dark" position="top-center" />
        </div>
      </BrowserRouter>
    </ApplyProvider>
  );
}

export default App;
