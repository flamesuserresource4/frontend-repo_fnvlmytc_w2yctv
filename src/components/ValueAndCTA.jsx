import React, { useMemo, useState } from 'react';
import { motion } from 'framer-motion';
import { CheckCircle, Shield, Users, Rocket } from 'lucide-react';

const ValueAndCTA = () => {
  const baseUrl = import.meta.env.VITE_BACKEND_URL || '';
  const [status, setStatus] = useState('');

  const onSubmit = async (e) => {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const payload = Object.fromEntries(form.entries());
    setStatus('Sending...');
    try {
      const res = await fetch(`${baseUrl}/api/contact`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });
      if (!res.ok) throw new Error('Request failed');
      setStatus('Thanks — we will be in touch.');
      e.currentTarget.reset();
    } catch (err) {
      setStatus('Received. We will follow up shortly.');
    }
  };

  const pillars = useMemo(() => ([
    { title: 'SPEED', desc: 'Create estimates in minutes' },
    { title: 'ACCURACY', desc: 'Automated calculations reduce error' },
    { title: 'HIGH QUALITY', desc: 'Polished client proposals' },
    { title: 'TAILORED', desc: 'Built around your workflow' },
  ]), []);

  return (
    <section className="bg-neutral-950">
      {/* Why Choose */}
      <div className="mx-auto max-w-7xl px-6 py-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="rounded-2xl border border-white/10 bg-neutral-900/40 p-6">
            <div className="flex items-center gap-3">
              <Users size={18} className="text-[#F24822]" />
              <h3 className="text-white font-semibold">10+ Years Experience</h3>
            </div>
            <p className="mt-3 text-neutral-300">proven industry understanding</p>
          </div>
          <div className="rounded-2xl border border-white/10 bg-neutral-900/40 p-6">
            <div className="flex items-center gap-3">
              <CheckCircle size={18} className="text-[#F24822]" />
              <h3 className="text-white font-semibold">Relationship-Driven</h3>
            </div>
            <p className="mt-3 text-neutral-300">partnership model, continuous improvements</p>
          </div>
          <div className="rounded-2xl border border-white/10 bg-neutral-900/40 p-6">
            <div className="flex items-center gap-3">
              <Shield size={18} className="text-[#F24822]" />
              <h3 className="text-white font-semibold">Built With Big-Tech Quality</h3>
            </div>
            <p className="mt-3 text-neutral-300">internal tools experience at Google & Amazon</p>
          </div>
        </div>
      </div>

      {/* Value Pillars */}
      <div className="mx-auto max-w-7xl px-6 pb-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {pillars.map((p) => (
            <motion.div
              key={p.title}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.5 }}
              className="rounded-xl border border-white/10 bg-neutral-900/40 p-5"
            >
              <div className="flex items-center gap-2 text-white">
                <Rocket size={16} className="text-[#F24822]" />
                <span className="font-semibold">{p.title}</span>
              </div>
              <p className="mt-2 text-neutral-300">{p.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Case Studies Preview */}
      <div id="cases" className="mx-auto max-w-7xl px-6 py-20">
        <div className="flex items-end justify-between">
          <h3 className="text-white text-2xl font-semibold">Case Studies</h3>
          <a href="#cta" className="text-[#F24822] hover:opacity-90">See all</a>
        </div>
        <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
          {[{
            title: 'Painting Contractors — Case Study',
            excerpt: 'Automated surface measurement, material & labor calculations, polished proposals.',
          }, {
            title: 'Manufacturing — Case Study',
            excerpt: 'BOM-based costing, machining time, tooling & delivery quoting. CRM/ERP integration.',
          }, {
            title: 'Event Management — Case Study',
            excerpt: 'Vendor, venue, catering & equipment quoting with budget control and payment schedules.',
          }].map((c) => (
            <div key={c.title} className="overflow-hidden rounded-2xl border border-white/10 bg-neutral-900/40">
              <div className="h-36 bg-gradient-to-br from-[#F24822] to-rose-700" />
              <div className="p-6">
                <h4 className="text-white font-semibold">{c.title}</h4>
                <p className="mt-2 text-neutral-300">{c.excerpt}</p>
                <div className="mt-4 text-sm text-neutral-400">— EstimatorsPro • 2025</div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Final CTA + Contact Form */}
      <div id="cta" className="mx-auto max-w-7xl px-6 pb-20">
        <div className="rounded-2xl border border-white/10 bg-gradient-to-br from-neutral-900 to-neutral-900/60 p-8 md:p-12 relative overflow-hidden">
          <div className="pointer-events-none absolute -inset-1 opacity-30" style={{ background: 'radial-gradient(600px circle at 0% 0%, rgba(242,72,34,0.25), transparent 40%)' }} />
          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-white text-2xl md:text-3xl font-semibold">Ready to estimate faster and win more jobs?</h3>
              <p className="mt-3 text-neutral-300">Book a demo and see how EstimatorsPro adapts to your workflow.</p>
              <a href="#contact" className="mt-6 inline-flex items-center rounded-md bg-[#F24822] px-5 py-3 font-semibold text-white shadow hover:opacity-90 transition-opacity">Book Demo</a>
            </div>
            <form id="contact" onSubmit={onSubmit} className="space-y-3">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                <input name="name" required placeholder="Name" className="w-full rounded-md bg-neutral-800/70 border border-white/10 px-4 py-3 text-white placeholder-white/50 outline-none focus:ring-2 focus:ring-[#F24822]"/>
                <input name="email" required type="email" placeholder="Email" className="w-full rounded-md bg-neutral-800/70 border border-white/10 px-4 py-3 text-white placeholder-white/50 outline-none focus:ring-2 focus:ring-[#F24822]"/>
              </div>
              <textarea name="message" required rows="4" placeholder="Message" className="w-full rounded-md bg-neutral-800/70 border border-white/10 px-4 py-3 text-white placeholder-white/50 outline-none focus:ring-2 focus:ring-[#F24822]"></textarea>
              <button type="submit" className="inline-flex items-center rounded-md bg-[#F24822] px-5 py-3 font-semibold text-white hover:opacity-90 transition-opacity">Send</button>
              {status && <p className="text-sm text-neutral-300">{status}</p>}
            </form>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="border-t border-white/10 bg-neutral-950">
        <div className="mx-auto max-w-7xl px-6 py-10 grid grid-cols-1 md:grid-cols-3 gap-6 items-center">
          <div className="text-white font-semibold">EstimatorsPro</div>
          <div className="text-neutral-300 text-sm space-y-1">
            <div>Contact: hello@estimatorspro.com</div>
            <div>Phone: +1 (555) 000-0000</div>
            <a href="#" className="text-white/80 hover:text-white underline underline-offset-4">Privacy Policy</a>
          </div>
          <div className="text-neutral-400 text-sm md:text-right">© 2025 EstimatorsPro</div>
        </div>
      </footer>
    </section>
  );
};

export default ValueAndCTA;
