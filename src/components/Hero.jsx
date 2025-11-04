import React from 'react';
import Spline from '@splinetool/react-spline';
import { Sparkles, Languages } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative min-h-[78vh] w-full overflow-hidden bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 text-white">
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/4cHQr84zOGAHOehh/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
      </div>

      {/* Subtle gradient overlay to improve text contrast (doesn't block interactions) */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-slate-950/70 via-slate-900/50 to-slate-950/80" />

      <div className="relative mx-auto flex max-w-7xl flex-col items-center px-6 pt-20 text-center sm:pt-28">
        <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 backdrop-blur-sm">
          <Sparkles className="h-4 w-4 text-violet-300" />
          <span className="text-sm text-violet-200/90">AI-powered welfare scheme assistant</span>
        </div>

        <h1 className="mt-6 text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl">
          Yojana Sahayak AI
        </h1>
        <p className="mt-4 max-w-2xl text-balance text-lg text-slate-200/90 sm:text-xl">
          Discover eligible government welfare schemes through a smart, multilingual assistant.
          Ask in your language, get verified answers, and save schemes for later.
        </p>

        <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
          <a
            href="#chat"
            className="group inline-flex items-center justify-center gap-2 rounded-lg bg-violet-600 px-5 py-3 text-white shadow-lg shadow-violet-600/30 transition hover:bg-violet-500"
          >
            Start exploring
            <span className="transition-transform group-hover:translate-x-0.5">→</span>
          </a>
          <a
            href="#how"
            className="inline-flex items-center justify-center gap-2 rounded-lg border border-white/15 bg-white/5 px-5 py-3 text-white/90 backdrop-blur-sm transition hover:bg-white/10"
          >
            <Languages className="h-5 w-5" />
            Works in multiple Indian languages
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
