import React from 'react';
import { AlertTriangle, Fingerprint, ZapOff } from 'lucide-react';

const ProblemSection: React.FC = () => {
  return (
    <section className="py-20 bg-[#050505] border-y border-white/5 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-neon/5 blur-[100px] rounded-full pointer-events-none"></div>
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-5xl font-black text-white mb-6 font-display uppercase leading-tight">
              Traditional Scanners <br /><span className="text-red-500">Fail</span> The Logic Test
            </h2>
            <p className="text-slate-400 mb-6 leading-relaxed border-l-2 border-red-500/30 pl-4">
              Most automated scanners (DAST/SAST) are built on signature matching. 
              They flood you with noise while missing the <span className="text-white font-bold">business logic flaws</span> that cause real data breaches.
            </p>
            <p className="text-slate-400 mb-8 leading-relaxed">
              Attackers don't just look for outdated libraries. They look for logical errors in how your application 
              handles users, money, and data.
            </p>
          </div>

          <div className="grid gap-4">
            <div className="p-6 bg-black border border-white/10 hover:border-red-500 transition-all group relative">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-red-500/10 text-red-500 group-hover:bg-red-500 group-hover:text-black transition-colors">
                  <Fingerprint className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-slate-200 mb-1 font-display uppercase">Broken Access Control</h3>
                  <p className="text-sm text-slate-400">
                    Can User A access User B's data by changing an ID? Scanners miss this context.
                  </p>
                </div>
              </div>
            </div>

            <div className="p-6 bg-black border border-white/10 hover:border-red-500 transition-all group">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-red-500/10 text-red-500 group-hover:bg-red-500 group-hover:text-black transition-colors">
                  <ZapOff className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-slate-200 mb-1 font-display uppercase">Business Logic Abuse</h3>
                  <p className="text-sm text-slate-400">
                    Bypassing payment steps or abusing coupon codes requires understanding the flow, not just code.
                  </p>
                </div>
              </div>
            </div>

             <div className="p-6 bg-black border border-white/10 hover:border-red-500 transition-all group">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-red-500/10 text-red-500 group-hover:bg-red-500 group-hover:text-black transition-colors">
                  <AlertTriangle className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-slate-200 mb-1 font-display uppercase">Token & Session Flaws</h3>
                  <p className="text-sm text-slate-400">
                    JWT lifecycle issues and refresh token reuse are often invisible to standard tools.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProblemSection;