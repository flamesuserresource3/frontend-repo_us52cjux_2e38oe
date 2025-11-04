import React, { useState } from 'react';
import { Send, BookmarkPlus, Globe2 } from 'lucide-react';

const sampleSuggestions = [
  'PM Kisan eligibility for small farmers',
  'Scholarships for girl students in Karnataka',
  'Old age pension schemes in Hindi',
  'Self-employment subsidy in Maharashtra',
];

const ChatBubble = ({ role = 'assistant', text }) => (
  <div className={`flex ${role === 'user' ? 'justify-end' : 'justify-start'}`}>
    <div
      className={`max-w-[85%] rounded-2xl px-4 py-2 text-sm leading-relaxed shadow ${
        role === 'user'
          ? 'bg-violet-600 text-white'
          : 'bg-white/5 text-slate-100 border border-white/10'
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
    // Demo-only echo response
    const assistantMsg = {
      role: 'assistant',
      text:
        'Here are some schemes that may match. In the full app, results will be personalized from the database and shown in your language.'
    };
    setMessages((prev) => [...prev, userMsg, assistantMsg]);
    setInput('');
  };

  return (
    <section id="chat" className="w-full bg-slate-950 py-16 text-white">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-8 px-6 lg:grid-cols-2">
        <div>
          <h2 className="text-3xl font-bold sm:text-4xl">Try the assistant</h2>
          <p className="mt-2 max-w-prose text-slate-300">
            Type a question below. The final product will integrate translation and intelligent search
            across official scheme data.
          </p>

          <div className="mt-6 flex flex-wrap gap-2">
            {sampleSuggestions.map((s) => (
              <button
                key={s}
                onClick={() => setInput(s)}
                className="rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-xs text-slate-200 hover:bg-white/10"
              >
                {s}
              </button>
            ))}
          </div>

          <div className="mt-4 rounded-xl border border-white/10 bg-white/5 p-2">
            <div className="flex items-center gap-2 rounded-lg bg-slate-900/60 p-2">
              <Globe2 className="h-5 w-5 text-slate-300" />
              <input
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && onSend()}
                placeholder="Ask about a scheme in any Indian language…"
                className="flex-1 bg-transparent text-sm text-white placeholder:text-slate-400 focus:outline-none"
              />
              <button
                onClick={onSend}
                className="inline-flex items-center gap-2 rounded-md bg-violet-600 px-3 py-2 text-xs font-medium text-white hover:bg-violet-500"
              >
                <Send className="h-4 w-4" />
                Send
              </button>
            </div>
          </div>
        </div>

        <div className="rounded-2xl border border-white/10 bg-gradient-to-b from-white/5 to-white/[0.03] p-4">
          <div className="flex items-center justify-between border-b border-white/10 p-4">
            <div className="text-sm text-slate-300">Demo conversation</div>
            <button className="inline-flex items-center gap-2 rounded-md border border-white/10 bg-white/5 px-3 py-1.5 text-xs text-slate-200 hover:bg-white/10">
              <BookmarkPlus className="h-4 w-4" /> Save scheme
            </button>
          </div>

          <div className="flex h-80 flex-col gap-3 overflow-y-auto p-4 pr-2">
            {messages.map((m, idx) => (
              <ChatBubble key={idx} role={m.role} text={m.text} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ChatDemo;
