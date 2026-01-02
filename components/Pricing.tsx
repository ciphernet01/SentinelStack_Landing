import React from 'react';
import { Check, Download, Clock, Shield } from 'lucide-react';

const Pricing: React.FC = () => {
  const deliverables = [
    "Executive Summary",
    "Detailed Technical Findings",
    "Risk Impact Scoring",
    "Remediation Guidelines",
    "JSON/CSV Export for JIRA",
    "48-Hour Turnaround"
  ];

  return (
    <section id="pricing" className="py-24 bg-[#050505] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          {/* Left Side: Offer Context */}
          <div>
            <h2 className="text-4xl md:text-5xl font-black text-white mb-6 font-display uppercase">
              Acquire <span className="text-neon">Snapshot™</span>
            </h2>
            <p className="text-lg text-slate-400 mb-8 leading-relaxed font-light">
              Ideal for startups and SMEs preparing for launch, compliance audit, or investor due diligence. 
              Get a clear picture of your security posture without the overhead of a full pentest engagement.
            </p>
            
            <div className="space-y-6">
               <div className="flex items-start gap-4">
                <div className="p-2 border border-neon/30 bg-neon/5">
                  <Shield className="w-5 h-5 text-neon" />
                </div>
                <div>
                  <h4 className="font-bold text-white font-display uppercase">Founder-Led Validation</h4>
                  <p className="text-sm text-slate-400">Transparent methodology led by security expert Shreyansh Singh.</p>
                </div>
               </div>
               
               <div className="flex items-start gap-4">
                <div className="p-2 border border-neon/30 bg-neon/5">
                  <Clock className="w-5 h-5 text-neon" />
                </div>
                <div>
                  <h4 className="font-bold text-white font-display uppercase">Rapid Results</h4>
                  <p className="text-sm text-slate-400">Actionable intelligence delivered in under 48 hours.</p>
                </div>
               </div>

               <div className="flex items-start gap-4">
                <div className="p-2 border border-neon/30 bg-neon/5">
                  <Download className="w-5 h-5 text-neon" />
                </div>
                <div>
                  <h4 className="font-bold text-white font-display uppercase">Evidence-Backed Reports</h4>
                  <p className="text-sm text-slate-400">No generic warnings. Proof of concept for every finding.</p>
                </div>
               </div>
            </div>
          </div>

          {/* Right Side: Pricing Card */}
          <div className="relative">
            {/* Glow Effect */}
            <div className="absolute inset-0 bg-neon/10 blur-[60px] rounded-full opacity-50"></div>
            
            <div className="relative bg-black border-2 border-neon box-shadow-neon p-8">
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-neon text-black text-xs font-black px-6 py-1 uppercase tracking-widest skew-x-[-10deg]">
                Introductory Offer
              </div>

              <div className="text-center mb-8 border-b border-white/10 pb-8">
                <h3 className="text-xl font-bold text-slate-300 mb-4 font-display uppercase tracking-widest">Security Snapshot™</h3>
                <div className="flex flex-col items-center justify-center gap-0">
                  <span className="text-6xl font-black text-white font-display tracking-tighter">₹15k</span>
                  <span className="text-xl text-slate-400 font-display tracking-wide uppercase mt-1">or $199 USD</span>
                </div>
                <p className="text-sm text-neon mt-4 font-mono uppercase">One-time assessment fee</p>
              </div>

              <ul className="space-y-4 mb-8">
                {deliverables.map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-slate-300">
                    <Check className="w-5 h-5 text-neon shrink-0" />
                    <span className="font-light">{item}</span>
                  </li>
                ))}
              </ul>

              <a 
                href="https://www.linkedin.com/in/shreyansh-singh-239b00222/" 
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full py-5 bg-neon hover:bg-white hover:text-black text-black font-black text-center text-lg uppercase font-display tracking-widest transition-all duration-300"
              >
                Initialize
              </a>
              <p className="text-xs text-center text-slate-600 mt-4 font-mono">
                LIMITED AVAILABILITY FOR THIS CYCLE
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Pricing;
