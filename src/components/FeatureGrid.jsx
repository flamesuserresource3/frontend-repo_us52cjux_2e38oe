import React from 'react';
import { MessageCircle, Filter, Bookmark, ShieldCheck, Languages } from 'lucide-react';

const features = [
  {
    icon: MessageCircle,
    title: 'Conversational Search',
    desc: 'Ask questions naturally. The assistant understands intent and context to fetch the right schemes.'
  },
  {
    icon: Filter,
    title: 'Smart Filters',
    desc: 'Narrow by category, state, target group, or benefits to quickly find what fits you.'
  },
  {
    icon: Bookmark,
    title: 'Save for Later',
    desc: 'Bookmark useful schemes and build your personalized shortlist across sessions.'
  },
  {
    icon: Languages,
    title: 'Multilingual',
    desc: 'Powered by translation to support Indian languages for better accessibility.'
  },
  {
    icon: ShieldCheck,
    title: 'Verified Details',
    desc: 'See eligibility, benefits, documents, and official links with confidence.'
  },
];

const FeatureGrid = () => {
  return (
    <section className="relative w-full bg-slate-950 py-16 text-white">
      <div className="mx-auto max-w-7xl px-6">
        <h2 className="text-center text-3xl font-bold sm:text-4xl">Everything you need to discover the right scheme</h2>
        <p className="mx-auto mt-3 max-w-2xl text-center text-slate-300">
          A focused experience designed for speed, accuracy, and inclusivity.
        </p>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {features.map(({ icon: Icon, title, desc }) => (
            <div
              key={title}
              className="group rounded-2xl border border-white/10 bg-gradient-to-b from-white/5 to-white/[0.03] p-6 shadow-xl backdrop-blur-sm transition hover:border-violet-500/40 hover:shadow-violet-500/10"
            >
              <div className="flex items-center gap-3">
                <div className="rounded-xl bg-violet-600/15 p-2 text-violet-300 ring-1 ring-inset ring-violet-400/20">
                  <Icon className="h-5 w-5" />
                </div>
                <h3 className="text-lg font-semibold">{title}</h3>
              </div>
              <p className="mt-3 text-sm leading-relaxed text-slate-300">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeatureGrid;
