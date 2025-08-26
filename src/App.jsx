import React from 'react';

export default function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-950 via-indigo-950 to-slate-900 text-white">
      <Header />
      <Hero />
      <Features />
      <Products />
      <CTA />
      <Footer />
    </div>
  );
}

function Header() {
  return (
    <header className="sticky top-0 z-40 backdrop-blur supports-[backdrop-filter]:bg-white/5 bg-white/0 border-b border-white/10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <a href="#" className="flex items-center gap-2">
            <span className="relative inline-flex h-8 w-8 items-center justify-center rounded-md bg-gradient-to-tr from-fuchsia-500 to-indigo-500 shadow-lg shadow-fuchsia-500/30">
              <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.6">
                <path d="M6 10h12M8 14h8" opacity=".7" />
                <rect x="3" y="4" width="18" height="16" rx="4" className="opacity-80" />
              </svg>
            </span>
            <span className="font-semibold tracking-tight">RoboSpark</span>
          </a>
          <nav className="hidden md:flex items-center gap-8 text-sm text-white/80">
            <a href="#features" className="hover:text-white">Features</a>
            <a href="#products" className="hover:text-white">Robots</a>
            <a href="#support" className="hover:text-white">Support</a>
          </nav>
          <div className="flex items-center gap-3">
            <a href="#products" className="hidden sm:inline-flex rounded-md border border-white/15 px-4 py-2 text-sm hover:bg-white/5">Explore</a>
            <a href="#buy" className="inline-flex rounded-md bg-gradient-to-r from-fuchsia-500 to-indigo-500 px-4 py-2 text-sm font-medium shadow-lg shadow-fuchsia-500/30 hover:opacity-95">Buy now</a>
          </div>
        </div>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="pointer-events-none absolute inset-0 -z-10 opacity-40">
        <div className="absolute -top-24 -left-24 h-72 w-72 rounded-full bg-fuchsia-500 blur-3xl" />
        <div className="absolute top-48 -right-16 h-72 w-72 rounded-full bg-indigo-500 blur-3xl" />
      </div>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 lg:py-24 grid lg:grid-cols-2 gap-10 items-center">
        <div>
          <p className="mb-3 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3 py-1 text-xs text-white/80">
            <span className="inline-block h-2 w-2 rounded-full bg-emerald-400 animate-pulse" /> In stock • Free 2‑day shipping
          </p>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight leading-tight">
            Bring home a friendly robot
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-fuchsia-400 via-indigo-400 to-cyan-300"> that learns with you</span>
          </h1>
          <p className="mt-4 text-white/80 max-w-xl">
            RoboSpark builds playful, powerful robots for families, makers, and classrooms. AI‑ready, safe, and endlessly customizable.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-3">
            <a href="#buy" className="inline-flex items-center gap-2 rounded-md bg-gradient-to-r from-fuchsia-500 to-indigo-500 px-5 py-3 font-medium shadow-lg shadow-fuchsia-500/30 hover:opacity-95">
              Shop robots
              <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.8"><path d="M5 12h14M13 5l7 7-7 7"/></svg>
            </a>
            <a href="#features" className="inline-flex items-center gap-2 rounded-md border border-white/15 bg-white/5 px-5 py-3 font-medium hover:bg-white/10">
              See features
              <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.8"><path d="M12 5v14M5 12h14"/></svg>
            </a>
            <span className="text-xs text-white/60 ml-1">No subscription required</span>
          </div>
          <div className="mt-8 flex items-center gap-6 text-white/70">
            <Stat k="8 hrs" v="battery life" />
            <Stat k="<45 dB" v="quiet motors" />
            <Stat k="Child‑safe" v="materials" />
          </div>
        </div>
        <div className="relative">
          <div className="absolute -inset-6 rounded-3xl bg-gradient-to-tr from-fuchsia-500/20 via-indigo-500/10 to-cyan-400/10 blur-2xl" />
          <div className="relative rounded-2xl border border-white/10 bg-white/5 shadow-2xl overflow-hidden">
            <SplineEmbed />
          </div>
          <p className="mt-3 text-xs text-white/60 text-center">Interactive 3D preview. Drag to rotate.</p>
        </div>
      </div>
    </section>
  );
}

function Stat({ k, v }) {
  return (
    <div>
      <div className="text-lg font-semibold">{k}</div>
      <div className="text-xs text-white/60">{v}</div>
    </div>
  );
}

function SplineEmbed() {
  // Using iframe to embed Spline scene (no extra deps required)
  const url = 'https://my.spline.design/magicpotionbreakdownvideo-lJeP6eeKsLVq4Dtmndjpzwld/';
  return (
    <div className="w-full h-[360px] sm:h-[420px] lg:h-[520px]">
      <iframe
        title="RoboSpark 3D"
        src={url}
        className="w-full h-full"
        style={{ border: '0' }}
        allow="autoplay; fullscreen"
      />
    </div>
  );
}

function Features() {
  const items = [
    {
      title: 'Modular brains',
      text: 'Snap‑in AI modules: vision, mapping, voice. Upgrade as you grow.',
      icon: (
        <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.6">
          <rect x="3" y="3" width="7" height="7" rx="2"/><rect x="14" y="3" width="7" height="7" rx="2"/><rect x="3" y="14" width="7" height="7" rx="2"/>
          <path d="M14 14h7v7h-7z" opacity=".6"/>
        </svg>
      ),
    },
    {
      title: 'Safe by design',
      text: 'Rounded edges, soft torque limits, and kid‑friendly materials.',
      icon: (
        <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.6">
          <path d="M12 3l7 4v5c0 5-3.5 8.5-7 9-3.5-.5-7-4-7-9V7l7-4z"/>
        </svg>
      ),
    },
    {
      title: 'Open playground',
      text: 'SDK for JS & Python, Blockly for kids, ROS 2 under the hood.',
      icon: (
        <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.6">
          <path d="M4 7h16M4 12h10M4 17h16"/>
        </svg>
      ),
    },
    {
      title: 'All‑day battery',
      text: 'Smart power management: up to 8 hours of active exploration.',
      icon: (
        <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.6">
          <rect x="2" y="7" width="18" height="10" rx="2"/><path d="M22 10v4"/><rect x="4" y="9" width="10" height="6" rx="1" className="fill-current opacity-40" />
        </svg>
      ),
    },
  ];

  return (
    <section id="features" className="relative py-14 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">Smarter robots. Happier humans.</h2>
          <p className="mt-3 text-white/75">Every RoboSpark combines delightful design with pro‑grade robotics in a package anyone can enjoy.</p>
        </div>
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {items.map((it, i) => (
            <div key={i} className="group relative rounded-2xl border border-white/10 bg-white/5 p-5 hover:bg-white/10 transition">
              <div className="mb-3 inline-flex h-9 w-9 items-center justify-center rounded-lg bg-gradient-to-tr from-fuchsia-500/30 to-indigo-500/30 text-fuchsia-200">
                {it.icon}
              </div>
              <h3 className="font-semibold">{it.title}</h3>
              <p className="mt-1 text-sm text-white/70">{it.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Products() {
  const robots = [
    {
      name: 'Nova Mini',
      desc: 'Palm‑size companion with big personality and modular faceplate.',
      price: '$249',
      emoji: '🤖',
      gradient: 'from-amber-400/20 to-rose-400/20',
    },
    {
      name: 'Atlas Go',
      desc: 'All‑terrain, vision‑enabled rover for makers and classrooms.',
      price: '$589',
      emoji: '🛞',
      gradient: 'from-fuchsia-400/20 to-indigo-400/20',
    },
    {
      name: 'Muse Arm',
      desc: '6‑axis desktop arm with haptics and precision repeatability.',
      price: '$799',
      emoji: '🦾',
      gradient: 'from-cyan-400/20 to-emerald-400/20',
    },
  ];

  return (
    <section id="products" className="relative py-14 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-end justify-between gap-6">
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">Choose your robot</h2>
            <p className="mt-2 text-white/75">All models include our open SDK, lifetime updates, and a 2‑year warranty.</p>
          </div>
          <a href="#buy" className="hidden sm:inline-flex rounded-md border border-white/15 bg-white/5 px-4 py-2 text-sm hover:bg-white/10">Compare models</a>
        </div>
        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {robots.map((r) => (
            <div key={r.name} className="group relative rounded-2xl border border-white/10 bg-white/5 p-6 overflow-hidden hover:translate-y-[-2px] transition">
              <div className={`absolute -top-24 -right-24 h-56 w-56 rounded-full bg-gradient-to-tr ${r.gradient} blur-3xl`} />
              <div className="relative">
                <div className="text-4xl select-none">{r.emoji}</div>
                <h3 className="mt-3 text-lg font-semibold">{r.name}</h3>
                <p className="mt-1 text-sm text-white/70">{r.desc}</p>
                <div className="mt-4 flex items-center justify-between">
                  <span className="text-xl font-bold">{r.price}</span>
                  <a href="#buy" className="inline-flex items-center gap-2 rounded-md bg-white/10 px-3 py-2 text-sm hover:bg-white/20">Add to cart<svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="1.8"><path d="M5 12h14M13 5l7 7-7 7"/></svg></a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function CTA() {
  return (
    <section id="buy" className="relative py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-r from-fuchsia-500/10 via-indigo-500/10 to-cyan-500/10 p-8 sm:p-12">
          <div className="absolute -inset-1 rounded-3xl bg-gradient-to-r from-fuchsia-500/20 via-indigo-500/20 to-cyan-500/20 blur-2xl" />
          <div className="relative grid lg:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl sm:text-3xl font-bold">Ready to roll out?</h3>
              <p className="mt-2 text-white/80 max-w-xl">Get free accessories, a quick‑start course, and priority support with your first robot.</p>
              <div className="mt-6 flex flex-wrap items-center gap-3">
                <a href="#" className="inline-flex items-center gap-2 rounded-md bg-gradient-to-r from-fuchsia-500 to-indigo-500 px-5 py-3 font-medium shadow-lg shadow-fuchsia-500/30 hover:opacity-95">Checkout now</a>
                <a href="#support" className="inline-flex items-center gap-2 rounded-md border border-white/15 bg-white/5 px-5 py-3 font-medium hover:bg-white/10">Talk to a specialist</a>
              </div>
            </div>
            <ul className="relative grid sm:grid-cols-3 gap-3 text-sm">
              <li className="rounded-xl border border-white/10 bg-white/5 p-3">Free 2‑day shipping</li>
              <li className="rounded-xl border border-white/10 bg-white/5 p-3">30‑day returns</li>
              <li className="rounded-xl border border-white/10 bg-white/5 p-3">2‑year warranty</li>
              <li className="rounded-xl border border-white/10 bg-white/5 p-3">SDK & docs included</li>
              <li className="rounded-xl border border-white/10 bg-white/5 p-3">Classroom discounts</li>
              <li className="rounded-xl border border-white/10 bg-white/5 p-3">Secure checkout</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer id="support" className="border-t border-white/10 py-10 text-sm">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
          <div className="flex items-center gap-2">
            <span className="relative inline-flex h-7 w-7 items-center justify-center rounded-md bg-gradient-to-tr from-fuchsia-500 to-indigo-500">
              <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="1.6">
                <path d="M6 10h12M8 14h8" opacity=".7" />
                <rect x="3" y="4" width="18" height="16" rx="4" className="opacity-80" />
              </svg>
            </span>
            <span className="font-semibold">RoboSpark</span>
          </div>
          <div className="flex flex-wrap gap-4 text-white/70">
            <a href="#" className="hover:text-white">Privacy</a>
            <a href="#" className="hover:text-white">Terms</a>
            <a href="#" className="hover:text-white">Status</a>
            <a href="#" className="hover:text-white">Support</a>
          </div>
        </div>
        <p className="mt-6 text-white/50">© {new Date().getFullYear()} RoboSpark Robotics Inc. All rights reserved.</p>
      </div>
    </footer>
  );
}
