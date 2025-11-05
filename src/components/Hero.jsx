import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import Spline from '@splinetool/react-spline';

const Hero = () => {
  // Inject Tawk.to placeholder script once
  useEffect(() => {
    const existing = document.getElementById('tawk-placeholder');
    if (existing) return;
    const s = document.createElement('script');
    s.id = 'tawk-placeholder';
    s.defer = true;
    s.innerHTML = `/* Tawk.to placeholder. Replace with your property ID when ready. */`;
    document.body.appendChild(s);
  }, []);

  return (
    <section className="relative min-h-[90vh] overflow-hidden bg-neutral-950">
      {/* Sticky Nav */}
      <div className="sticky top-0 z-20 backdrop-blur supports-[backdrop-filter]:bg-neutral-900/60 bg-neutral-900/80 border-b border-white/10">
        <div className="mx-auto max-w-7xl px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="h-6 w-6 rounded-md bg-gradient-to-br from-[#F24822] to-rose-600" />
            <span className="text-white font-semibold">EstimatorsPro</span>
          </div>
          <a href="#cta" className="inline-flex items-center gap-2 rounded-md bg-[#F24822] px-4 py-2 text-sm font-semibold text-white shadow-sm hover:opacity-90 transition-opacity">
            Book Demo
          </a>
        </div>
      </div>

      {/* Spline Background */}
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/cEecEwR6Ehj4iT8T/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
      </div>

      {/* Soft gradient overlay (non-blocking for Spline) */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-neutral-950/30 via-neutral-950/40 to-neutral-950" />

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-7xl px-6 pt-28 pb-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
          className="max-w-3xl"
        >
          <p className="text-[#F24822] font-medium tracking-wide">Quotation & Estimation Software</p>
          <h1 className="mt-4 text-4xl md:text-6xl font-semibold text-white leading-tight">
            Win More Jobs With Precision Estimates
          </h1>
          <p className="mt-6 text-neutral-300 text-lg md:text-xl">
            Custom estimation software built for your business processes — eliminate spreadsheet chaos, deliver accurate quotes faster, and close more deals.
          </p>
          <div className="mt-8 flex items-center gap-4">
            <a href="#cta" className="inline-flex items-center justify-center rounded-lg bg-[#F24822] px-6 py-3 text-white font-semibold shadow hover:opacity-90 transition-opacity">
              Book Demo
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
