import React from 'react';

const HowItWorks: React.FC = () => {
  const steps = [
    {
      num: "01",
      title: "Scope Definition",
      desc: "You provide the URL and testing credentials (if auth testing is required). We sign an NDA if requested."
    },
    {
      num: "02",
      title: "Automated Execution",
      desc: "SentinelStack's modular engines crawl and analyze your application logic using 30+ specialized tools."
    },
    {
      num: "03",
      title: "Validation & Triage",
      desc: "Raw findings are processed to remove false positives and categorize risk based on business impact."
    },
    {
      num: "04",
      title: "Snapshot Delivery",
      desc: "You receive a comprehensive report (PDF/JSON) with technical findings and executive summary within 48h."
    }
  ];

  return (
    <section id="process" className="py-24 bg-black">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-white text-center mb-16 font-display uppercase tracking-wider">How It Works</h2>
        
        <div className="grid md:grid-cols-4 gap-8 relative">
          {/* Connector Line (Desktop) */}
          <div className="hidden md:block absolute top-12 left-0 right-0 h-0.5 bg-gradient-to-r from-neutral-800 via-neon/50 to-neutral-800 -z-10" />
          
          {steps.map((step, idx) => (
            <div key={idx} className="relative bg-black pt-4 md:pt-0">
              <div className="w-12 h-12 bg-black border-2 border-neon text-neon rounded-full flex items-center justify-center font-bold text-lg mb-6 shadow-[0_0_15px_rgba(57,255,20,0.4)] mx-auto md:mx-0 z-10 relative font-display">
                {step.num}
              </div>
              <h3 className="text-xl font-bold text-white mb-3 text-center md:text-left font-display uppercase">{step.title}</h3>
              <p className="text-slate-400 text-sm leading-relaxed text-center md:text-left">
                {step.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;