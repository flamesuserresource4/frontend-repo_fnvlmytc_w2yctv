import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Star } from 'lucide-react';

const testimonials = [
  { name: 'Mark S', role: 'Construction' },
  { name: 'Sarah T', role: 'Manufacturing' },
  { name: 'Greg Daniels', role: 'Landscaping' },
  { name: 'Emily R', role: 'Home Improvement' },
];

const Testimonials = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const id = setInterval(() => setIndex((i) => (i + 1) % testimonials.length), 4000);
    return () => clearInterval(id);
  }, []);

  return (
    <section className="bg-neutral-950 py-20">
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex items-end justify-between gap-6">
          <div>
            <p className="text-[#F24822] font-medium">What Clients Say</p>
            <h2 className="mt-2 text-2xl md:text-3xl font-semibold text-white">Proof</h2>
          </div>
        </div>

        <div className="mt-8 relative overflow-hidden">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="md:col-span-2 rounded-2xl border border-white/10 bg-neutral-900/40 p-8 min-h-[200px] flex items-center justify-center">
              <AnimatePresence mode="wait">
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.4 }}
                  className="text-center"
                >
                  <div className="flex items-center justify-center gap-1 text-[#F24822] mb-3">
                    <Star size={16} fill="#F24822" />
                    <Star size={16} fill="#F24822" />
                    <Star size={16} fill="#F24822" />
                    <Star size={16} fill="#F24822" />
                    <Star size={16} fill="#F24822" />
                  </div>
                  <p className="text-neutral-300 max-w-xl mx-auto">
                    Trusted by leaders across industries. Results-focused builds and polished quoting experiences that help teams close more deals.
                  </p>
                  <p className="mt-4 text-white font-semibold">
                    {testimonials[index].name} <span className="text-neutral-400 font-normal">({testimonials[index].role})</span>
                  </p>
                </motion.div>
              </AnimatePresence>
            </div>

            <div className="rounded-2xl border border-white/10 bg-neutral-900/40 p-6">
              <p className="text-neutral-300">
                Relationship-Driven — partnership model with continuous improvements and responsive communication.
              </p>
              <div className="mt-6 flex gap-2">
                {testimonials.map((t, i) => (
                  <button
                    key={t.name}
                    onClick={() => setIndex(i)}
                    aria-label={`Show testimonial ${i + 1}`}
                    className={`h-2 w-8 rounded-full transition-colors ${i === index ? 'bg-[#F24822]' : 'bg-white/20 hover:bg-white/30'}`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
