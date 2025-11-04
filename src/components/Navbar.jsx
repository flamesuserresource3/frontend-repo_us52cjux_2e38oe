import React, { useEffect, useState } from 'react';
import { Moon, Sun, Sparkles } from 'lucide-react';

const applyTheme = (t) => {
  const root = document.documentElement;
  if (t === 'dark') {
    root.classList.add('dark');
  } else {
    root.classList.remove('dark');
  }
};

const getInitialTheme = () => {
  if (typeof window === 'undefined') return 'light';
  const stored = localStorage.getItem('theme');
  if (stored === 'dark' || stored === 'light') return stored;
  const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  return prefersDark ? 'dark' : 'light';
};

const Navbar = () => {
  const [theme, setTheme] = useState(getInitialTheme);

  useEffect(() => {
    applyTheme(theme);
    localStorage.setItem('theme', theme);
  }, [theme]);

  return (
    <header className="sticky top-0 z-50 w-full backdrop-blur-md">
      <div className="mx-auto max-w-7xl px-4 py-3 sm:px-6">
        <div className="flex items-center justify-between rounded-2xl border border-slate-900/10 bg-white/70 px-4 py-2 shadow-sm dark:border-white/10 dark:bg-white/[0.06]">
          <a href="#" className="flex items-center gap-2">
            <div className="rounded-lg bg-violet-600/15 p-1.5 text-violet-500 ring-1 ring-inset ring-violet-400/20 dark:text-violet-300">
              <Sparkles className="h-5 w-5" />
            </div>
            <span className="font-semibold tracking-tight">Yojana Sahayak AI</span>
          </a>

          <nav className="hidden items-center gap-6 text-sm text-slate-700 dark:text-slate-300 sm:flex">
            <a href="#how" className="hover:text-slate-900 dark:hover:text-white">How it works</a>
            <a href="#chat" className="hover:text-slate-900 dark:hover:text-white">Try the assistant</a>
            <a href="#features" className="hover:text-slate-900 dark:hover:text-white">Features</a>
          </nav>

          <button
            aria-label="Toggle theme"
            onClick={() => setTheme((t) => (t === 'dark' ? 'light' : 'dark'))}
            className="inline-flex items-center gap-2 rounded-xl border border-slate-900/10 bg-white/80 px-3 py-2 text-slate-700 shadow-sm transition hover:bg-white dark:border-white/10 dark:bg-white/10 dark:text-slate-200"
          >
            {theme === 'dark' ? (
              <>
                <Sun className="h-4 w-4" />
                <span className="hidden sm:inline">Light</span>
              </>
            ) : (
              <>
                <Moon className="h-4 w-4" />
                <span className="hidden sm:inline">Dark</span>
              </>
            )}
          </button>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
