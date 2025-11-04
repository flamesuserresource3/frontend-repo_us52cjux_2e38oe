import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import FeatureGrid from './components/FeatureGrid';
import HowItWorks from './components/HowItWorks';
import ChatDemo from './components/ChatDemo';

const Footer = () => (
  <footer className="w-full bg-white py-10 text-slate-700 dark:bg-slate-950 dark:text-white">
    <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-6 sm:flex-row">
      <p className="text-sm text-slate-600 dark:text-slate-400">© {new Date().getFullYear()} Yojana Sahayak AI. Empowering citizens with accessible governance.</p>
      <div className="flex items-center gap-4 text-sm text-slate-600 dark:text-slate-300">
        <a className="hover:text-slate-900 dark:hover:text-white" href="#how">How it works</a>
        <a className="hover:text-slate-900 dark:hover:text-white" href="#chat">Try the assistant</a>
      </div>
    </div>
  </footer>
);

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-slate-50 text-slate-900 antialiased dark:from-slate-950 dark:via-slate-900 dark:to-slate-950 dark:text-white">
      <Navbar />
      <Hero />
      <FeatureGrid />
      <HowItWorks />
      <ChatDemo />
      <Footer />
    </div>
  );
}

export default App;
