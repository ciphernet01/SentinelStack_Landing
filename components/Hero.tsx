import React from 'react';
import { ArrowRight, CheckCircle2, ShieldCheck } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden bg-black min-h-screen flex items-center">
      {/* Cyberpunk Grid Background */}
      <div className="absolute inset-0 bg-grid-pattern bg-[size:40px_40px] opacity-20 pointer-events-none"></div>
      <div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-black pointer-events-none"></div>
      
      {/* Glowing Orbs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-neon/10 blur-[150px] rounded-full pointer-events-none"></div>
      <div className="absolute bottom-0 right-0 w-[800px] h-[600px] bg-neon/5 blur-[120px] rounded-full pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          
          {/* Text Content */}
          <div className="text-left">
            <div className="inline-flex items-center gap-2 px-3 py-1 mb-8 border border-neon/30 bg-neon/5 text-neon text-xs font-bold uppercase tracking-widest animate-fade-in-up">
              <span className="w-2 h-2 bg-neon rounded-full animate-pulse shadow-[0_0_10px_#39ff14]"></span>
              System Status: Secure
            </div>

            <h1 className="text-5xl md:text-7xl lg:text-8xl font-black text-white leading-[0.9] mb-8 font-display uppercase tracking-tighter">
              Logic <br />
              <span className="text-neon neon-text-shadow">Flaws</span> <br />
              Detected
            </h1>

            <p className="text-lg md:text-xl text-slate-400 max-w-xl mb-10 leading-relaxed border-l-2 border-neon/50 pl-6 font-light">
              Automated security validation that thinks like a hacker. Detect broken access control and business logic abuse before deployment.
            </p>

            <div className="flex flex-col sm:flex-row items-start gap-6">
              <a
                href="#pricing"
                className="group relative px-8 py-4 bg-neon text-black font-bold text-lg uppercase font-display tracking-wider overflow-hidden"
              >
                <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
                <span className="relative flex items-center gap-2">
                  Initialize Scan <ArrowRight className="w-5 h-5" />
                </span>
              </a>
              
              <a
                href="https://www.linkedin.com/in/shreyansh-singh-239b00222/"
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-4 bg-transparent border border-white/20 text-white font-bold text-lg uppercase font-display tracking-wider hover:border-neon hover:text-neon transition-colors"
              >
                Founder Protocol
              </a>
            </div>

            <div className="mt-12 flex flex-wrap gap-x-8 gap-y-4 text-sm text-slate-500 font-mono">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-neon" /> Zero Source Code
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-neon" /> 48h Latency
              </div>
            </div>
          </div>

          {/* Visual Element - Abstract Tech */}
          <div className="relative hidden lg:block">
            <div className="relative w-full aspect-square max-w-lg mx-auto">
              {/* Outer Ring */}
              <div className="absolute inset-0 border-2 border-neon/20 rounded-full animate-[spin_10s_linear_infinite]"></div>
              <div className="absolute inset-4 border border-dashed border-neon/40 rounded-full animate-[spin_15s_linear_infinite_reverse]"></div>
              
              {/* Central Visual */}
              <div className="absolute inset-0 flex items-center justify-center">
                 <div className="w-64 h-64 bg-black border border-neon/50 relative overflow-hidden flex items-center justify-center neon-box-shadow">
                    <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_25%,rgba(57,255,20,0.1)_50%,transparent_75%)] bg-[length:250%_250%,100%_100%] animate-[background-position_0s_ease_infinite] bg-fixed"></div>
                    <ShieldCheck className="w-32 h-32 text-neon animate-pulse drop-shadow-[0_0_10px_rgba(57,255,20,0.8)]" />
                    
                    {/* Data streams */}
                    <div className="absolute top-2 left-2 text-[10px] text-neon/60 font-mono">ID: 8X-22</div>
                    <div className="absolute bottom-2 right-2 text-[10px] text-neon/60 font-mono">SECURE</div>
                 </div>
              </div>

              {/* Decorative elements */}
              <div className="absolute -top-10 -right-10 text-neon/20 text-9xl font-display font-black opacity-20 select-none">01</div>
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
};

export default Hero;
