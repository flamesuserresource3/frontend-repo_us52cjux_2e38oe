import React from 'react';
import { Database, MessagesSquare, Wand2, Link as LinkIcon } from 'lucide-react';

const steps = [
  {
    title: 'Ask in your language',
    desc: 'Type your question or describe your situation. The assistant understands and translates seamlessly.',
    icon: MessagesSquare,
  },
  {
    title: 'AI understands & searches',
    desc: 'Your intent is matched with verified scheme data stored in a structured database.',
    icon: Wand2,
  },
  {
    title: 'Get verified results',
    desc: 'See eligibility, benefits, required documents, and official application links.',
    icon: Database,
  },
  {
    title: 'Save & apply',
    desc: 'Bookmark schemes and follow direct links to apply on official portals.',
    icon: LinkIcon,
  },
];

const HowItWorks = () => {
  return (
    <section id="how" className="w-full bg-slate-950 py-16 text-white">
      <div className="mx-auto max-w-6xl px-6">
        <h2 className="text-center text-3xl font-bold sm:text-4xl">How it works</h2>
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map(({ title, desc, icon: Icon }) => (
            <div key={title} className="rounded-2xl border border-white/10 bg-white/[0.03] p-6">
              <div className="flex items-center gap-3">
                <div className="rounded-xl bg-emerald-500/15 p-2 text-emerald-300 ring-1 ring-inset ring-emerald-400/20">
                  <Icon className="h-5 w-5" />
                </div>
                <h3 className="text-lg font-semibold">{title}</h3>
              </div>
              <p className="mt-3 text-sm text-slate-300">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
