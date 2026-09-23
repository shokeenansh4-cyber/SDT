export const WA_NUMBER = "2363323621";
export const waLink = (text) =>
  `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(text)}`;
export const WA_DEFAULT = waLink(
  "Hi Sandeep, I want to apply for online coaching."
);

export const IMAGES = {
  hero: "/assets/sandeep-hero.webp",
  contest: "https://images.unsplash.com/photo-1610312856669-2cee66b2949c?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjA1MTN8MHwxfHNlYXJjaHwxfHxtdXNjdWxhciUyMGJvZHlidWlsZGVyJTIwZ3ltJTIwdHJhaW5lciUyMHBvcnRyYWl0JTIwc2hpcnRsZXNzJTIwZml0bmVzcyUyMGF0aGxldGV8ZW58MHx8fHwxNzg5OTczMTI3fDA&ixlib=rb-4.1.0&q=85&w=900&h=1200&fit=crop",
  coaching: "/assets/sandeep-iron.webp",
  coachingHero: "/assets/sandeep-coaching.webp",
  contestPrep: "/assets/sandeep-contest.webp",
  about: "/assets/sandeep-bg.webp",
  bg: "/assets/sandeep-bg.webp",
  logo: "/assets/sdf-logo-white.png",
  physique: "https://images.unsplash.com/photo-1754475172820-6053bbed3b25?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjA1MTN8MHwxfHNlYXJjaHw0fHxtdXNjdWxhciUyMGJvZHlidWlsZGVyJTIwZ3ltJTIwdHJhaW5lciUyMHBvcnRyYWl0JTIwc2hpcnRsZXNzJTIwZml0bmVzcyUyMGF0aGxldGV8ZW58MHx8fHwxNzg5OTczMTI3fDA&ixlib=rb-4.1.0&q=85&w=900&h=1100&fit=crop",
  biceps: "https://images.pexels.com/photos/5327538/pexels-photo-5327538.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=1000&w=760",
  dumbbell: "https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjY2NzV8MHwxfHNlYXJjaHxfHxmaXRuZXNzJTIwdHJhbnNmb3JtYXRpb24lMjBib2R5YnVpbGRlciUyMHdvcmtvdXQlMjBkdW1iYmVsbCUyMGd5bSUyMGVxdWlwbWVudHxlbnwwfHx8fDE3ODk5NzMxMzN8MA&ixlib=rb-4.1.0&q=85&w=900&h=1100&fit=crop",
  barbell: "https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjY2NzV8MHwxfHNlYXJjaHwyfHxmaXRuZXNzJTIwdHJhbnNmb3JtYXRpb24lMjBib2R5YnVpbGRlciUyMHdvcmtvdXQlMjBkdW1iYmVsbCUyMGd5bSUyMGVxdWlwbWVudHxlbnwwfHx8fDE3ODk5NzMxMzN8MA&ixlib=rb-4.1.0&q=85&w=900&h=1100&fit=crop",
  gymSession: "https://images.pexels.com/photos/31849600/pexels-photo-31849600.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=1000&w=760",
  meal1: "https://images.pexels.com/photos/30635714/pexels-photo-30635714.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=800&w=1100",
  meal2: "https://images.pexels.com/photos/30635720/pexels-photo-30635720.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=800&w=1100",
};

export const NAV_LINKS = [
  { to: "/", label: "Home", testId: "nav-link-home" },
  { to: "/transformations", label: "Transformations", testId: "nav-link-transformations" },
  { to: "/coaching", label: "Online Coaching", testId: "nav-link-coaching" },
  { to: "/contest-prep", label: "Contest Prep", testId: "nav-link-contest-prep" },
  { to: "/about", label: "About Sandeep", testId: "nav-link-about" },
];

export const MARQUEE_ITEMS = [
  "TRANSFORM OR STAY AVERAGE",
  "26 YEARS OF IRON",
  "5,000+ TRANSFORMATIONS",
  "NASM CERTIFIED",
  "CANADIAN BODYBUILDING TITLES",
];

export const STATS = [
  { value: 26, suffix: "+", label: "Years of Experience", mono: "YRS-26" },
  { value: 5000, suffix: "+", label: "Transformations", mono: "TNS-5K" },
  { value: null, text: "NASM", label: "Certified Personal Trainer", mono: "CRT-NASM" },
  { value: null, text: "MULTI", label: "Canadian Bodybuilding Titles", mono: "TTL-CAN" },
];

export const PHILOSOPHY = [
  { num: "01", title: "Controlled Training", desc: "Every rep with intent. Tempo, tension and progression — never ego lifting." },
  { num: "02", title: "Proper Technique", desc: "Form corrected on video, week after week, until movement is bulletproof." },
  { num: "03", title: "Disciplined Nutrition", desc: "Practical Indian-food meal plans. Dal, roti, paneer, rice — structured, not banned." },
  { num: "04", title: "Honest Feedback", desc: "No sugar-coating. You hear exactly what is working and what is not." },
  { num: "05", title: "Long-Term Accountability", desc: "Weekly check-ins and photo reviews that keep you answerable for months, not days." },
];

export const TRANSFORMATIONS = [
  {
    id: "rohit",
    name: "Rohit S.",
    age: 41,
    city: "New Delhi",
    category: "fat-loss",
    weeks: 16,
    result: "-18 kg",
    quote: "I travel every week for work. Sandeep built the plan around hotel gyms and dhaba food. First time a diet actually fit my life.",
    training: "4-day strength split, hotel-gym variants",
    nutrition: "High-protein North Indian meals, no crash dieting",
    accountability: "Weekly photo check-ins, Sunday review calls",
    before: "https://images.pexels.com/photos/31849600/pexels-photo-31849600.jpeg?auto=compress&cs=tinysrgb&dpr=1&h=900&w=700",
    after: "https://images.unsplash.com/photo-1754475172820-6053bbed3b25?crop=entropy&cs=srgb&fm=jpg&q=85&w=700&h=900&fit=crop",
  },
  {
    id: "priya",
    name: "Priya M.",
    age: 38,
    city: "Mumbai",
    category: "fat-loss",
    weeks: 12,
    result: "-12 kg",
    quote: "After two kids I thought this was just my body now. Twelve weeks later I deadlift more than my husband.",
    training: "3-day full-body + daily 8k steps",
    nutrition: "Vegetarian Maharashtrian plan, protein anchored",
    accountability: "WhatsApp check-ins, form videos reviewed",
    before: "https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?crop=entropy&cs=srgb&fm=jpg&q=85&w=700&h=900&fit=crop",
    after: "https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?crop=entropy&cs=srgb&fm=jpg&q=85&w=700&h=900&fit=crop",
  },
  {
    id: "amandeep",
    name: "Amandeep K.",
    age: 45,
    city: "Ludhiana",
    category: "muscle",
    weeks: 20,
    result: "+7 kg muscle",
    quote: "At 45 I wanted size, not just weight loss. Sandeep's old-school progression put muscle on me I never had in my 20s.",
    training: "5-day hypertrophy block, progressive overload",
    nutrition: "Punjabi home food, structured surpluses",
    accountability: "Bi-weekly video calls, lift tracking sheets",
    before: "https://images.pexels.com/photos/5327538/pexels-photo-5327538.jpeg?auto=compress&cs=tinysrgb&dpr=1&h=900&w=700",
    after: "https://images.unsplash.com/photo-1610312856669-2cee66b2949c?crop=entropy&cs=srgb&fm=jpg&q=85&w=700&h=900&fit=crop",
  },
  {
    id: "vikram",
    name: "Vikram R.",
    age: 52,
    city: "Bengaluru",
    category: "over-35",
    weeks: 18,
    result: "-15 kg",
    quote: "Blood pressure down, belt down three holes. My doctor asked what changed. I sent him Sandeep's number.",
    training: "Joint-friendly strength work, low-impact cardio",
    nutrition: "South Indian diabetic-friendly plan",
    accountability: "Weekly metrics review, habit scorecard",
    before: "https://images.pexels.com/photos/29886673/pexels-photo-29886673.jpeg?auto=compress&cs=tinysrgb&dpr=1&h=900&w=700",
    after: "https://images.unsplash.com/photo-1626724419913-ac60f768c20f?crop=entropy&cs=srgb&fm=jpg&q=85&w=700&h=900&fit=crop",
  },
  {
    id: "simran",
    name: "Simran J.",
    age: 36,
    city: "Chandigarh",
    category: "fat-loss",
    weeks: 14,
    result: "-11 kg",
    quote: "No starvation, no two-hour workouts. Just structure. I finally stopped restarting every Monday.",
    training: "Home dumbbell program, 40 minutes a day",
    nutrition: "Roti-sabzi based plan with flexible weekends",
    accountability: "Daily habit tracker, weekly photo review",
    before: "https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?crop=entropy&cs=srgb&fm=jpg&q=85&w=700&h=900&fit=crop",
    after: "https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?crop=entropy&cs=srgb&fm=jpg&q=85&w=700&h=900&fit=crop",
  },
  {
    id: "arjun",
    name: "Arjun T.",
    age: 29,
    city: "Pune",
    category: "contest",
    weeks: 24,
    result: "Stage-ready, -9 kg",
    quote: "From gym fit to stage conditioned. The posing drills and peak-week protocol were on another level.",
    training: "Contest-prep split, posing 3x per week",
    nutrition: "Periodised cut with refeeds and peak week",
    accountability: "Twice-weekly check-ins in final 8 weeks",
    before: "https://images.unsplash.com/photo-1626724419913-ac60f768c20f?crop=entropy&cs=srgb&fm=jpg&q=85&w=700&h=900&fit=crop",
    after: "https://images.unsplash.com/photo-1610312856669-2cee66b2949c?crop=entropy&cs=srgb&fm=jpg&q=85&w=700&h=900&fit=crop",
  },
];

export const FILTERS = [
  { id: "all", label: "All" },
  { id: "fat-loss", label: "Fat Loss" },
  { id: "muscle", label: "Muscle Gain" },
  { id: "over-35", label: "Over 35" },
  { id: "contest", label: "Contest Prep" },
];

export const PROGRAMS = [
  {
    num: "P1",
    name: "8-Week Transformation",
    bestFor: "Fat loss, fitness and habit building",
    promise: "A structured start with clear weekly accountability.",
    includes: ["Custom workout plan", "Indian-food nutrition plan", "Weekly check-ins", "WhatsApp support"],
  },
  {
    num: "P2",
    name: "12-Week Premium Coaching",
    bestFor: "Serious body transformation and muscle building",
    promise: "More time, deeper personalization and ongoing adjustments.",
    includes: ["Everything in 8-Week", "Exercise-form correction", "Plan adjustments every phase", "Scheduled video consultations"],
    featured: true,
  },
  {
    num: "P3",
    name: "Contest Prep Elite",
    bestFor: "Men's Physique and bodybuilding competitors",
    promise: "Stage-focused training, nutrition, posing and check-ins.",
    includes: ["Stage-focused programming", "Posing coaching", "Peak-week protocol", "Twice-weekly check-ins"],
  },
];
