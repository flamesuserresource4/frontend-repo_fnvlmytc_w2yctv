import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle, Rocket } from 'lucide-react';

const Card = ({ title, desc }) => (
  <div className="group rounded-2xl border border-white/10 bg-neutral-900/40 p-6 hover:border-white/20 transition-colors">
    <div className="flex items-center gap-3">
      <div className="h-10 w-10 rounded-xl bg-gradient-to-br from-[#F24822] to-rose-600 flex items-center justify-center text-white">
        <Rocket size={18} />
      </div>
      <h3 className="text-white text-lg font-semibold">{title}</h3>
    </div>
    <p className="mt-4 text-neutral-300 leading-relaxed">{desc}</p>
  </div>
);

const WhoWeServe = () => {
  return (
    <section className="relative bg-neutral-950 py-20">
      <div className="absolute inset-x-0 -top-24 h-24 bg-gradient-to-b from-transparent to-neutral-950" aria-hidden="true" />
      <div className="mx-auto max-w-7xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6 }}
          className="max-w-2xl"
        >
          <p className="text-[#F24822] font-medium">Who We Serve</p>
          <h2 className="mt-2 text-2xl md:text-3xl font-semibold text-white">Customized estimation tools for service & industrial businesses</h2>
        </motion.div>

        <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card
            title="Painting Contractors"
            desc="Automated surface measurement, material & labor calculations, polished proposals."
          />
          <Card
            title="Manufacturing"
            desc="BOM-based costing, machining time, tooling & delivery quoting. CRM/ERP integration."
          />
          <Card
            title="Event Management"
            desc="Vendor, venue, catering & equipment quoting with budget control and payment schedules."
          />
        </div>

        <div className="mt-10">
          <a href="#cases" className="inline-flex items-center gap-2 rounded-md border border-white/15 px-5 py-3 text-white/90 hover:text-white hover:border-white/30 transition-colors">
            <CheckCircle size={18} className="text-[#F24822]" />
            <span>See Case Studies</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default WhoWeServe;
