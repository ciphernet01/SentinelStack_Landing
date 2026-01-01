import React from 'react';

const SolutionSection: React.FC = () => {
  return (
    <section className="py-24 bg-black relative">
       {/* Decorative Lines */}
       <div className="absolute left-0 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-neon/30 to-transparent"></div>
       <div className="absolute right-0 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-neon/30 to-transparent"></div>

      <div className="max-w-7xl mx-auto px-6 text-center">
        <div className="max-w-4xl mx-auto mb-16">
          <h2 className="text-sm font-bold tracking-[0.3em] text-neon uppercase mb-4 font-display">The Protocol</h2>
          <h3 className="text-4xl md:text-6xl font-black text-white mb-8 font-display uppercase">
            Enter <span className="text-transparent bg-clip-text bg-gradient-to-r from-neon to-white">SentinelStack</span>
          </h3>
          <p className="text-xl text-slate-400 leading-relaxed font-light">
            A modular security testing suite built for the modern web. 
            SentinelStack consists of <span className="text-neon font-bold">30 focused tools</span> that validate your application against real-world exploit paths. 
          </p>
          <p className="text-xl text-slate-400 mt-6 leading-relaxed font-light">
             We mimic the methodology of a human penetration tester, automated for speed and consistency.
          </p>
        </div>

        {/* Product Screenshot Showcase - Recreated Terminal */}
        <div className="relative mx-auto max-w-5xl text-left">
          {/* Glow Effect */}
          <div className="absolute -inset-1 bg-gradient-to-r from-neon via-white to-neon opacity-20 blur-xl rounded-lg"></div>
          
          <div className="relative rounded-lg overflow-hidden border border-white/10 bg-[#0c0c0c] shadow-2xl">
            {/* Window Header */}
            <div className="bg-[#111] px-4 py-3 flex items-center border-b border-white/10 justify-between">
              <div className="flex gap-2">
                <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                <div className="w-3 h-3 bg-green-500 rounded-full"></div>
              </div>
              <div className="font-mono text-xs text-slate-500 flex items-center gap-2">
                <span className="text-neon">➜</span>
                <span>admin@sentinel-blade: ~/scans/juice-shop</span>
              </div>
              <div className="w-16"></div> {/* Spacer for centering */}
            </div>

            {/* Terminal Content - Recreating the screenshot content */}
            <div className="p-6 font-mono text-xs md:text-sm bg-[#050505] text-slate-300 leading-tight h-[500px] overflow-y-auto scrollbar-thin scrollbar-thumb-neon/20 scrollbar-track-transparent">
              
              {/* Command Execution */}
              <div className="mb-4">
                <span className="text-neon">admin@sentinel-blade:~$</span> py .\broken_access_control_pro.py --url https://juice-shop.herokuapp.com/
              </div>

              {/* Banner */}
              <div className="text-cyan-400 mb-4">
                ===================================================<br/>
                ENHANCED ACCESS CONTROL VULNERABILITY SCANNER v2.0.0<br/>
                ===================================================
              </div>

              {/* Initial Info */}
              <div className="mb-2">
                <span className="text-yellow-500">[!] WARNING:</span> This tool is for authorized security testing only.<br/>
                <span className="text-slate-400">Type 'YES' to confirm authorization:</span> YES
              </div>
              <div className="mb-4">
                <span className="text-green-500">[START]</span> Scanning https://juice-shop.herokuapp.com<br/>
                <span className="text-blue-400">[CALIBRATE]</span> Capturing baseline for https://juice-shop.herokuapp.com
              </div>

              {/* Scan Results / Logs */}
              <div className="space-y-1">
                 {/* IDORs */}
                 <div className="flex flex-wrap gap-2">
                    <span className="text-red-500 font-bold">[IDOR]</span>
                    <span>200 https://juice-shop.herokuapp.com/api/products/1 (id=1)</span>
                 </div>
                 <div className="flex flex-wrap gap-2">
                    <span className="text-red-500 font-bold">[IDOR]</span>
                    <span>200 https://juice-shop.herokuapp.com/api/products/2 (id=2)</span>
                 </div>

                 {/* Progress Mix */}
                 <div className="flex flex-wrap gap-2 opacity-50">
                    <span className="text-blue-400">[PROGRESS]</span>
                    <span>510/590 (86.4%)</span>
                 </div>
                 <div className="flex flex-wrap gap-2 opacity-50">
                    <span className="text-blue-400">[PROGRESS]</span>
                    <span>520/590 (88.1%)</span>
                 </div>

                 {/* Method Tampering */}
                 <div className="flex flex-wrap gap-2">
                    <span className="text-cyan-400 font-bold">[METHOD_TAMPER]</span>
                    <span>GET-&gt;HEAD https://juice-shop.herokuapp.com/setup.php</span>
                 </div>
                 <div className="flex flex-wrap gap-2">
                    <span className="text-cyan-400 font-bold">[METHOD_TAMPER]</span>
                    <span>GET-&gt;HEAD https://juice-shop.herokuapp.com/admin_controlpanel/_admin</span>
                 </div>
                 <div className="flex flex-wrap gap-2">
                    <span className="text-cyan-400 font-bold">[METHOD_TAMPER]</span>
                    <span>GET-&gt;HEAD https://juice-shop.herokuapp.com/dashboard/</span>
                 </div>
                 
                 <div className="flex flex-wrap gap-2 opacity-50">
                    <span className="text-blue-400">[PROGRESS]</span>
                    <span>550/590 (93.2%)</span>
                 </div>

                 <div className="flex flex-wrap gap-2">
                    <span className="text-cyan-400 font-bold">[METHOD_TAMPER]</span>
                    <span>GET-&gt;HEAD https://juice-shop.herokuapp.com/authentication/_admin</span>
                 </div>
                 <div className="flex flex-wrap gap-2">
                    <span className="text-cyan-400 font-bold">[METHOD_TAMPER]</span>
                    <span>GET-&gt;HEAD https://juice-shop.herokuapp.com/admin_mgmt/</span>
                 </div>
                 <div className="flex flex-wrap gap-2">
                    <span className="text-cyan-400 font-bold">[METHOD_TAMPER]</span>
                    <span>GET-&gt;HEAD https://juice-shop.herokuapp.com/mysql</span>
                 </div>
                 
                 {/* Completion */}
                 <div className="mt-4 border-t border-white/10 pt-2">
                    <div className="flex flex-wrap gap-2">
                        <span className="text-neon font-bold">[COMPLETE]</span>
                        <span>Scan finished in 211.0s</span>
                    </div>
                    <div className="flex flex-wrap gap-2">
                        <span className="text-neon font-bold">[STATS]</span>
                        <span>Findings: 22</span>
                    </div>
                 </div>

                 {/* Reporting */}
                 <div className="mt-4">
                    <div className="text-blue-400 font-bold mb-1">[i] Generating reports...</div>
                    <div className="pl-4 border-l border-white/10 ml-1">
                        <div className="flex flex-wrap gap-2">
                            <span className="text-green-500">[✓] TXT</span>
                            <span className="text-slate-500">→ reports\access_control_enhanced\txt\demo_juice-shop_2024.txt</span>
                        </div>
                        <div className="flex flex-wrap gap-2">
                            <span className="text-green-500">[✓] JSON</span>
                            <span className="text-slate-500">→ reports\access_control_enhanced\json\demo_juice-shop_2024.json</span>
                        </div>
                        <div className="flex flex-wrap gap-2">
                            <span className="text-green-500">[✓] HTML</span>
                            <span className="text-slate-500">→ reports\access_control_enhanced\html\demo_juice-shop_2024.html</span>
                        </div>
                         <div className="flex flex-wrap gap-2">
                            <span className="text-yellow-500">[!] YAML</span>
                            <span className="text-slate-500">Failed to write yaml report: PyYAML not installed</span>
                        </div>
                    </div>
                 </div>

                 {/* Cursor */}
                 <div className="mt-4">
                    <span className="text-neon">admin@sentinel-blade:~$</span> <span className="animate-pulse bg-neon w-2 h-4 inline-block align-middle"></span>
                 </div>
              </div>
            </div>
            
            {/* Overlay Gradient for "Viewer" effect */}
            <div className="absolute inset-0 pointer-events-none bg-gradient-to-t from-black/20 to-transparent"></div>
            
             {/* Floating Label */}
              <div className="absolute bottom-6 right-6 bg-black/80 backdrop-blur border border-neon/30 px-4 py-2 text-xs font-mono text-neon pointer-events-none">
                 STATUS: 22 VULNERABILITIES CONFIRMED
              </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SolutionSection;
