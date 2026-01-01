import React from 'react';
import { Lock, FileKey, ShieldAlert, Key, Globe, Activity } from 'lucide-react';

const Features: React.FC = () => {
  const capabilities = [
    {
      icon: <Lock className="w-6 h-6" />,
      title: "Broken Access Control",
      desc: "Detects IDOR, forced browsing, and privilege escalation attempts horizontally and vertically."
    },
    {
      icon: <Key className="w-6 h-6" />,
      title: "Auth & Session Security",
      desc: "Validates login flows, session fixation, entropy issues, and comprehensive JWT analysis."
    },
    {
      icon: <FileKey className="w-6 h-6" />,
      title: "Token Lifecycle",
      desc: "Analyzes token misuse, improper invalidation, and secure storage implementation."
    },
    {
      icon: <Activity className="w-6 h-6" />,
      title: "Rate Limiting & Abuse",
      desc: "Tests for brute-force vulnerability, API abuse, and denial-of-service vectors on logic endpoints."
    },
    {
      icon: <ShieldAlert className="w-6 h-6" />,
      title: "Privilege Escalation",
      desc: "Attempts to bypass role-based access controls to perform administrative actions."
    },
    {
      icon: <Globe className="w-6 h-6" />,
      title: "Black-Box Validation",
      desc: "Zero knowledge testing. We see exactly what an external attacker sees. No source code needed."
    }
  ];

  return (
    <section id="features" className="py-20 relative bg-black">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-black text-white mb-4 font-display uppercase tracking-wide">
            System <span className="text-neon">Capabilities</span>
          </h2>
          <p className="text-slate-400 font-mono text-sm uppercase tracking-widest">Targeting Logic Vulnerabilities</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {capabilities.map((cap, idx) => (
            <div key={idx} className="group relative bg-[#0a0a0a] border border-white/10 p-8 hover:border-neon transition-all duration-300">
              {/* Corner Accents */}
              <div className="absolute top-0 left-0 w-2 h-2 border-t-2 border-l-2 border-neon opacity-0 group-hover:opacity-100 transition-opacity"></div>
              <div className="absolute top-0 right-0 w-2 h-2 border-t-2 border-r-2 border-neon opacity-0 group-hover:opacity-100 transition-opacity"></div>
              <div className="absolute bottom-0 left-0 w-2 h-2 border-b-2 border-l-2 border-neon opacity-0 group-hover:opacity-100 transition-opacity"></div>
              <div className="absolute bottom-0 right-0 w-2 h-2 border-b-2 border-r-2 border-neon opacity-0 group-hover:opacity-100 transition-opacity"></div>

              <div className="bg-black border-2 border-neon p-4 inline-block mb-6 text-neon shadow-[0_0_15px_rgba(57,255,20,0.2)] group-hover:bg-neon group-hover:text-black group-hover:scale-110 group-hover:animate-neon-pulse transition-all duration-300 ease-out">
                {cap.icon}
              </div>
              <h3 className="text-xl font-bold text-white mb-3 font-display uppercase">{cap.title}</h3>
              <p className="text-slate-400 leading-relaxed text-sm">
                {cap.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;