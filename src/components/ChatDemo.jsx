import React, { useState } from 'react';
import { Send, BookmarkPlus, Globe2 } from 'lucide-react';
import { motion } from 'framer-motion';

const sampleSuggestions = [
  'PM Kisan eligibility for small farmers',
  'Scholarships for girl students in Karnataka',
  'Old age pension schemes in Hindi',
  'Self-employment subsidy in Maharashtra',
];

const ChatBubble = ({ role = 'assistant', text }) => (
  <div className={`flex ${role === 'user' ? 'justify-end' : 'justify-start'}`}>
    <div
      className={`max-w-[85%] rounded-2xl px-4 py-2 text-sm leading-relaxed shadow transition will-change-transform ${
        role === 'user'
          ? 'bg-violet-600 text-white'
          : 'border border-slate-900/10 bg-white/70 text-slate-800 backdrop-blur-xl dark:border-white/10 dark:bg-white/5 dark:text-slate-100'
      }`}
    >
      {text}
    </div>
  </div>
);

const ChatDemo = () => {
  const [messages, setMessages] = useState([
    {
      role: 'assistant',
      text:
        'Namaste! Ask me about government schemes. I can help with eligibility, benefits, documents, and how to apply.'
    },
  ]);
  const [input, setInput] = useState('');

  const onSend = () => {
    if (!input.trim()) return;
    const userMsg = { role: 'user', text: input.trim() };
    const assistantMsg = {
      role: 'assistant',
      text:
        'Here are some schemes that may match. In the full app, results will be personalized from the database and shown in your language.'
    };
    setMessages((prev) => [...prev, userMsg, assistantMsg]);
    setInput('');
  };

  return (
    <section id="chat" className="relative w-full bg-white py-16 text-slate-900 dark:bg-slate-950 dark:text-white">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,rgba(139,92,246,0.10),transparent_55%),radial-gradient(ellipse_at_top_left,rgba(16,185,129,0.10),transparent_55%)]" />
      <div className="relative mx-auto grid max-w-7xl grid-cols-1 gap-8 px-6 lg:grid-cols-2">
        <div>
          <motion.h2
            initial={{ opacity: 0, y: 8 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ type: 'spring', stiffness: 120, damping: 16 }}
            className="text-3xl font-bold sm:text-4xl"
          >
            Try the assistant
          </motion.h2>
          <p className="mt-2 max-w-prose text-slate-600 dark:text-slate-300">
            Type a question below. The final product will integrate translation and intelligent search
            across official scheme data.
          </p>

          <div className="mt-6 flex flex-wrap gap-2">
            {sampleSuggestions.map((s, i) => (
              <motion.button
                key={s}
                initial={{ opacity: 0, y: 6 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05, type: 'spring', stiffness: 150, damping: 18 }}
                onClick={() => setInput(s)}
                className="rounded-full border border-slate-900/10 bg-white/70 px-3 py-1.5 text-xs text-slate-700 shadow-sm backdrop-blur-xl hover:bg-white dark:border-white/10 dark:bg-white/5 dark:text-slate-200 dark:hover:bg-white/10"
              >
                {s}
              </motion.button>
            ))}
          </div>

          <div className="mt-4 rounded-xl border border-slate-900/10 bg-white/70 p-2 shadow backdrop-blur-xl dark:border-white/10 dark:bg-white/5">
            <div className="flex items-center gap-2 rounded-lg bg-slate-100/60 p-2 dark:bg-slate-900/60">
              <Globe2 className="h-5 w-5 text-slate-500 dark:text-slate-300" />
              <input
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && onSend()}
                placeholder="Ask about a scheme in any Indian language…"
                className="flex-1 bg-transparent text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none dark:text-white"
              />
              <button
                onClick={onSend}
                className="inline-flex items-center gap-2 rounded-md bg-violet-600 px-3 py-2 text-xs font-medium text-white shadow-lg shadow-violet-600/30 transition hover:-translate-y-0.5 hover:bg-violet-500"
              >
                <Send className="h-4 w-4" />
                Send
              </button>
            </div>
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ type: 'spring', stiffness: 110, damping: 18 }}
          className="rounded-2xl border border-slate-900/10 bg-white/70 p-4 shadow-xl backdrop-blur-2xl dark:border-white/10 dark:bg-white/[0.06]"
        >
          <div className="flex items-center justify-between border-b border-slate-900/10 p-4 dark:border-white/10">
            <div className="text-sm text-slate-600 dark:text-slate-300">Demo conversation</div>
            <button className="inline-flex items-center gap-2 rounded-md border border-slate-900/10 bg-white/70 px-3 py-1.5 text-xs text-slate-700 shadow-sm backdrop-blur-xl hover:bg-white dark:border-white/10 dark:bg-white/5 dark:text-slate-200 dark:hover:bg-white/10">
              <BookmarkPlus className="h-4 w-4" /> Save scheme
            </button>
          </div>

          <div className="flex h-80 flex-col gap-3 overflow-y-auto p-4 pr-2">
            {messages.map((m, idx) => (
              <ChatBubble key={idx} role={m.role} text={m.text} />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ChatDemo;
