import React, { useEffect } from 'react';
import Hero from './components/Hero.jsx';
import WhoWeServe from './components/WhoWeServe.jsx';
import Testimonials from './components/Testimonials.jsx';
import ValueAndCTA from './components/ValueAndCTA.jsx';

function App() {
  useEffect(() => {
    document.title = 'EstimatorsPro — Quotation & Estimation Software';
    const ensureTag = (selector, create) => {
      let el = document.querySelector(selector);
      if (!el) {
        el = create();
        document.head.appendChild(el);
      }
      return el;
    };

    ensureTag('meta[name="description"]', () => {
      const m = document.createElement('meta');
      m.setAttribute('name', 'description');
      m.setAttribute('content', 'Customized estimation tools for service & industrial businesses. Eliminate spreadsheet chaos, deliver accurate quotes faster, and close more deals.');
      return m;
    }).setAttribute('content', 'Customized estimation tools for service & industrial businesses. Eliminate spreadsheet chaos, deliver accurate quotes faster, and close more deals.');

    ensureTag('meta[property="og:title"]', () => {
      const m = document.createElement('meta');
      m.setAttribute('property', 'og:title');
      m.setAttribute('content', 'EstimatorsPro — Quotation & Estimation Software');
      return m;
    });

    ensureTag('meta[property="og:description"]', () => {
      const m = document.createElement('meta');
      m.setAttribute('property', 'og:description');
      m.setAttribute('content', 'Customized estimation tools for service & industrial businesses.');
      return m;
    });

    ensureTag('meta[name="theme-color"]', () => {
      const m = document.createElement('meta');
      m.setAttribute('name', 'theme-color');
      m.setAttribute('content', '#0a0a0a');
      return m;
    });
  }, []);

  return (
    <div className="bg-neutral-950 text-white">
      <Hero />
      <WhoWeServe />
      <Testimonials />
      <ValueAndCTA />
    </div>
  );
}

export default App;
