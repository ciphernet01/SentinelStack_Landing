import React from 'react';
import { ShieldCheck, Lock } from 'lucide-react';

const Trust: React.FC = () => {
  return (
    <section id="trust" className="py-20 bg-black border-t border-white/10">
      <div className="max-w-5xl mx-auto px-6">
        <div className="bg-neutral-900/50 rounded-2xl p-8 md:p-12 border border-white/10">
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="flex-1">
              <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-2">
                <ShieldCheck className="text-neon" /> Trust & Ethics
              </h2>
              <div className="space-y-4 text-slate-400 text-sm leading-relaxed">
                <p>
                  <strong>Permission First:</strong> SentinelStack operates strictly within authorized boundaries. 
                  We never scan targets without explicit written consent or ownership verification.
                </p>
                <p>
                  <strong>Responsible Disclosure:</strong> All findings are communicated securely. 
                  We adhere to strict confidentiality protocols and industry-standard responsible disclosure guidelines.
                </p>
                <p>
                  <strong>Black-Box Methodology:</strong> Our testing simulates a real external threat. 
                  We do not access your source code repositories or internal infrastructure beyond the public-facing application.
                </p>
              </div>
            </div>
            <div className="shrink-0 p-6 bg-black rounded-xl border border-white/10 text-center">
              <Lock className="w-12 h-12 text-slate-600 mx-auto mb-3" />
              <p className="text-slate-500 text-sm font-medium">Encrypted Reports</p>
              <p className="text-slate-600 text-xs mt-1">PGP Keys Available</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Trust;