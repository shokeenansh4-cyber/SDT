# PRD — SDF | Sandeep Dangi Fitness (India Online Training)

## Original Problem Statement
Build a good-looking frontend for the SDF (Sandeep Dangi Fitness) online training website, working point-by-point through the client's PDF work plan. Phase 1 covers **Point 1 (The Website's Main Job — hero, positioning, conversions, navigation)** and **Point 2 (Proof, Story and Transformations — credibility, case studies, About Sandeep)** of the PDF. User choices: multipage site, aesthetic professional trainer look with strong UI, good animations + gym-equipment related animations, sample photos for now (real photos of Sandeep / clients to be supplied later), WhatsApp number to be added later (placeholder in use).

- Marquee trimmed + Netlify-ready (2026-07-23): removed ENGLISH/हिंदी/ਪੰਜਾਬੀ items from the scrolling ticker (languages still shown in navbar badge, hero line and footer); added /app/netlify.toml (base=frontend, `yarn build`, publish=build, CI=false, Node 20) + public/_redirects SPA fallback; production build verified compiling with all real photos bundled. Deploy: connect repo to Netlify (auto-reads netlify.toml) or drag-drop frontend/build to app.netlify.com/drop

- Bug fix (2026-07-23): Home-page before/after sliders were unswipeable because the cards were wrapped in a Link to /transformations, which intercepted the drag; cards are now plain containers — sliders respond to drag on Home without navigating away (verified via browser automation: handle moves, URL stays on home)

- Contact links live (2026-07-23): real WhatsApp number +1 (236) 332-3621 (US country code — wa.me/12363323621) wired into every CTA (hero, CTA band, footer, floating chat, apply-modal submit); footer Instagram now links to instagram.com/sandeep_dangi15; YouTube link removed

## User Personas
- Busy Indian men & women 35+ wanting structure, accountability and Indian-food nutrition (primary market)
- Serious transformation clients considering premium 12-week coaching
- Men's Physique / bodybuilding competitors needing contest prep
- The coach (Sandeep) — needs trust-building proof and a lead funnel (Apply / WhatsApp)

## Architecture
- Frontend-only React SPA (react-router-dom v7), dark "Performance Pro" art direction: obsidian #07090E, flame #FF3838, volt amber #FF9F1C; Barlow Condensed display / Plus Jakarta Sans body / JetBrains Mono stats
- Motion: framer-motion (kinetic masked hero reveal, scroll reveals, page elements) + lenis smooth momentum scrolling; rotating SVG weight-plate motifs; slow editorial marquee; animated stat counters; before/after comparison sliders
- No backend/database in this phase. Conversions: Apply Now modal (2-step form) → builds prefilled WhatsApp message → wa.me link; floating WhatsApp chat button

## Implemented (2026-07-21… Phase 1)
- Real brand assets (2026-07-21): Sandeep's real photos integrated — photo 1 (green tank) in the hero NASM frame, photo 2 (B&W stage) in the "26 Years of Iron" section, photo 3 (mural) as a fixed subtle scrolling background behind transparent sections AND as the About Sandeep page portrait; gym-posing photo added to the Online Coaching hero (auto-cropped for framing); IFBB Pro Qualifier medal photo added to the Contest Prep hero (cropped to feature Sandeep + medals); SDF shield logo processed to transparent-white version, now used as navbar/footer logo and browser favicon (/app/frontend/public/assets/). All Sandeep photos on site are now real — no stock portraits remain
- Rebrand + UI upgrade (2026-07-21): palette switched to black + neon green (#39FF14 primary, #A3FF5E soft-green accents) with neon glow on CTAs, badges, filters, cards and image frames; before/after comparison slider restyled with neon handle (user briefly had it static, then requested the draggable slider back — restored 2026-07-22)
- Responsive pass (2026-07-21): fixed mobile horizontal overflow (clipped at root + overflow guards on decorative sections), verified at 390px phone and 768px tablet — mobile hamburger menu, stacked layouts, apply modal and sliders all work on touch sizes
- Multi-page routing: Home, Transformations, Online Coaching, Contest Prep, About Sandeep
- Home: kinetic masked-line hero (headline from PDF), Apply + WhatsApp CTAs, EN/हिंदी/ਪੰਜਾਬੀ language badges, trust strip with animated counters (26+ yrs, 5,000+ transformations, NASM, Canadian titles), marquee, numbered chapters (The Coach / The Proof / The Method), philosophy grid, CTA band
- Transformations page: 6 sample case studies (name/age/city, weeks, measurable result, testimonial, training/nutrition/accountability breakdown), drag before/after sliders, category filters (Fat Loss, Muscle Gain, Over 35, Contest Prep), sample-imagery disclaimer per PDF
- About Sandeep: 4 numbered story chapters (Iron Years, The Promise, The Titles, The Homecoming) + 5-pillar coaching philosophy
- Online Coaching: 4-pillar inclusions, 3 program cards (8-Week / 12-Week Premium / Contest Prep Elite), Indian nutrition section
- Contest Prep: specialist page, "application only" positioning, inclusions list, CTA
- Apply Now modal: 2-step application (contact → goals/program/readiness), sends prefilled WhatsApp message
- Floating WhatsApp button with popup; footer with disclaimer + language line
- Placeholder WhatsApp number: 919876543210 (to be replaced with Sandeep's real number)

## MOCKED / Sample Data
- All photos are stock placeholders (Pexels/Unsplash), NOT real photos of Sandeep or clients
- Transformation names/quotes are sample content pending real client case studies with written permission
- Instagram/YouTube footer links point to platform homepages (pending real handles)

## Backlog (per PDF)
- P0: Real photos of Sandeep + real client transformations (replace placeholders); real WhatsApp number; real social handles
- P1: Point 3 — full program detail + India pricing display (₹); Point 4 — FAQ section + consultation booking flow; richer application form (height/weight, start date, best contact time)
- P2: Point 5 — Razorpay payments + payment links, lead/enquiry management dashboard, Google search/SEO setup, privacy policy / coaching agreement / medical disclaimer / refund policy pages (legal review), client login + progress tracking (post-traction)

## Next Tasks
1. Swap in real Sandeep photos + real transformation case studies
2. Add real WhatsApp business number everywhere (single constant: WA_NUMBER in src/data/content.js)
3. Build Point 3 pricing/detail sections and Point 4 FAQ + full application form
4. Point 5: Razorpay integration + trust/policy pages
