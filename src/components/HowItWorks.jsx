import React from 'react';
import { Database, MessagesSquare, Wand2, Link as LinkIcon } from 'lucide-react';
import { motion } from 'framer-motion';

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
    <section id="how" className="relative w-full bg-white py-16 text-slate-900 dark:bg-slate-950 dark:text-white">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(255,255,255,0.6),transparent_60%)] dark:bg-[radial-gradient(ellipse_at_center,rgba(148,163,184,0.08),transparent_60%)]" />
      <div className="relative mx-auto max-w-6xl px-6">
        <motion.h2
          initial={{ opacity: 0, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ type: 'spring', stiffness: 120, damping: 18 }}
          className="text-center text-3xl font-bold sm:text-4xl"
        >
          How it works
        </motion.h2>
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map(({ title, desc, icon: Icon }, idx) => (
            <motion.div
              key={title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ delay: idx * 0.05, type: 'spring', stiffness: 120, damping: 20 }}
              className="rounded-2xl border border-slate-900/10 bg-white/70 p-6 shadow-lg backdrop-blur-xl dark:border-white/10 dark:bg-white/[0.06]"
            >
              <div className="flex items-center gap-3">
                <div className="rounded-xl bg-emerald-500/15 p-2 text-emerald-600 ring-1 ring-inset ring-emerald-400/20 dark:text-emerald-300">
                  <Icon className="h-5 w-5" />
                </div>
                <h3 className="text-lg font-semibold">{title}</h3>
              </div>
              <p className="mt-3 text-sm text-slate-600 dark:text-slate-300">{desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
