import React, { useState, useEffect } from 'react';

const SolutionSection: React.FC = () => {
  const [terminalLines, setTerminalLines] = useState<string[]>([]);
  const [showResults, setShowResults] = useState(false);
  
  // Terminal simulation data
  useEffect(() => {
    const commands = [
      "admin@sentinel-blade:~$ python sentinel_blade.py --profile aggressive --target https://juice-shop.herokuapp.com",
      "",
      "===================================================",
      "SENTINEL BLADE v2.0.0 - COMPREHENSIVE SECURITY AUDIT",
      "===================================================",
      "",
      "[!] WARNING: Authorized security testing only",
      "[!] Ensure you have explicit permission to scan the target",
      "",
      "Type 'YES' to confirm authorization: YES",
      "",
      "[START] Initializing SentinelBlade scan engine",
      "[LOAD] Loading 30 security testing modules...",
      "  ✓ Module 1/30: broken_access_control_pro.py",
      "  ✓ Module 2/30: cors_analyzer_pro.py",
      "  ✓ Module 3/30: enhanced_cors_security_analyzer.py",
      "  ✓ Module 4/30: enhanced_broken_access_control_scanner.py",
      "  ✓ Module 5/30: enhanced_rateguard_pro.py",
      "  ... 25 more modules loaded",
      "",
      "[CALIBRATE] Capturing baseline for https://juice-shop.herokuapp.com",
      "[CONFIG] Testing 589 endpoints with 15 concurrent threads",
      "[SCAN] Estimated completion: 3 minutes 31 seconds",
      "",
      "===================================================",
      "REAL-TIME FINDINGS",
      "===================================================",
      "",
      "[IDOR] 200 https://juice-shop.herokuapp.com/api/products/1 (id=1)",
      "[IDOR] 200 https://juice-shop.herokuapp.com/api/products/2 (id=2)",
      "[IDOR] 200 https://juice-shop.herokuapp.com/api/users/3 (id=3)",
      "[FORCED] 403 https://juice-shop.herokuapp.com/admin/",
      "[FORCED] 200 https://juice-shop.herokuapp.com/admin/config",
      "[TAMPER] 200 https://juice-shop.herokuapp.com/api/v1/users/me (X-Forwarded-For: 127.0.0.1)",
      "[CORS] 200 https://juice-shop.herokuapp.com/api/v1/users (Origin: https://evil.com)",
      "[PROGRESS] 120/589 (20.4%)",
      "",
      "[METHOD_TAMPER] GET→HEAD https://juice-shop.herokuapp.com/setup.php",
      "[METHOD_TAMPER] GET→HEAD https://juice-shop.herokuapp.com/admin_controlpanel/_admin",
      "[METHOD_TAMPER] GET→HEAD https://juice-shop.herokuapp.com/dashboard/",
      "[RATE_LIMIT] 429 https://juice-shop.herokuapp.com/api/login (Retry-After: 60)",
      "[CORS] 200 https://juice-shop.herokuapp.com/graphql (Origin: null)",
      "[PROGRESS] 245/589 (41.6%)",
      "",
      "[IDOR] 200 https://juice-shop.herokuapp.com/api/orders/100 (id=100)",
      "[TAMPER] 200 https://juice-shop.herokuapp.com/api/auth (X-Original-URL: /admin)",
      "[FORCED] 401 https://juice-shop.herokuapp.com/secure/",
      "[PROGRESS] 367/589 (62.3%)",
      "",
      "[METHOD_TAMPER] GET→POST https://juice-shop.herokuapp.com/api/users",
      "[CORS] 200 https://juice-shop.herokuapp.com/api/v2/data (Access-Control-Allow-Origin: *)",
      "[RATE_LIMIT] 200 https://juice-shop.herokuapp.com/api/search (soft throttling detected)",
      "[PROGRESS] 452/589 (76.7%)",
      "",
      "[IDOR] 200 https://juice-shop.herokuapp.com/api/comments/999 (id=999)",
      "[TAMPER] 403→200 https://juice-shop.herokuapp.com/admin/panel (X-HTTP-Method-Override: GET)",
      "[FORCED] 200 https://juice-shop.herokuapp.com/.env",
      "[PROGRESS] 520/589 (88.3%)",
      "",
      "[COMPLETE] Scan finished in 211.0 seconds",
      "[STATS] Total requests: 15,432",
      "[STATS] Vulnerabilities found: 22",
      "[STATS] Critical findings: 8",
      "",
      "===================================================",
      "GENERATING REPORTS",
      "===================================================",
      "",
      "[✓] TXT → reports/sentinel_blade/juice-shop_2024-01-15_14-30-22.txt",
      "[✓] JSON → reports/sentinel_blade/juice-shop_2024-01-15_14-30-22.json",
      "[✓] CSV → reports/sentinel_blade/juice-shop_2024-01-15_14-30-22.csv",
      "[✓] HTML → reports/sentinel_blade/juice-shop_2024-01-15_14-30-22.html",
      "[✓] MARKDOWN → reports/sentinel_blade/juice-shop_2024-01-15_14-30-22.md",
      "",
      "[SUMMARY]",
      "  Critical: 8 vulnerabilities",
      "  High: 6 vulnerabilities",
      "  Medium: 5 vulnerabilities",
      "  Low: 3 vulnerabilities",
      "",
      "admin@sentinel-blade:~$"
    ];

    let currentIndex = 0;
    const interval = setInterval(() => {
      if (currentIndex < commands.length) {
        setTerminalLines(prev => [...prev, commands[currentIndex]]);
        currentIndex++;
        
        // Show results section when we reach the progress indicators
        if (commands[currentIndex] && commands[currentIndex].includes('[PROGRESS] 520/589')) {
          setTimeout(() => setShowResults(true), 500);
        }
      } else {
        clearInterval(interval);
      }
    }, 100);

    return () => clearInterval(interval);
  }, []);

  // Function to color code terminal lines
  const getLineColor = (line: string): string => {
    if (line.startsWith('admin@sentinel-blade')) return 'text-green-400';
    if (line.startsWith('[!]')) return 'text-yellow-500';
    if (line.startsWith('[START]') || line.startsWith('[CALIBRATE]') || line.startsWith('[CONFIG]') || line.startsWith('[SCAN]')) return 'text-blue-400';
    if (line.startsWith('[IDOR]')) return 'text-red-500';
    if (line.startsWith('[FORCED]')) return 'text-yellow-400';
    if (line.startsWith('[TAMPER]')) return 'text-purple-400';
    if (line.startsWith('[CORS]')) return 'text-cyan-400';
    if (line.startsWith('[METHOD_TAMPER]')) return 'text-pink-400';
    if (line.startsWith('[RATE_LIMIT]')) return 'text-orange-400';
    if (line.startsWith('[PROGRESS]')) return 'text-blue-300';
    if (line.startsWith('[COMPLETE]') || line.startsWith('[STATS]')) return 'text-green-300';
    if (line.startsWith('[✓]')) return 'text-green-500';
    if (line.startsWith('===================================')) return 'text-cyan-300';
    if (line.includes('SENTINEL BLADE') || line.includes('REAL-TIME FINDINGS') || line.includes('GENERATING REPORTS')) return 'text-cyan-400 font-bold';
    if (line.startsWith('[SUMMARY]')) return 'text-white font-bold';
    if (line.includes('Critical:') || line.includes('High:')) return 'text-red-400';
    if (line.includes('Medium:')) return 'text-yellow-400';
    if (line.includes('Low:')) return 'text-green-400';
    return 'text-slate-300';
  };

  return (
    <section className="py-24 bg-black relative">
      {/* Keep existing decorative lines and top section - only changing terminal */}
      <div className="absolute left-0 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-neon/30 to-transparent"></div>
      <div className="absolute right-0 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-neon/30 to-transparent"></div>

      <div className="max-w-7xl mx-auto px-6 text-center">
        {/* Keep existing header section */}
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

        {/* Enhanced Terminal View */}
        <div className="relative mx-auto max-w-5xl text-left">
          {/* Glow Effect */}
          <div className="absolute -inset-1 bg-gradient-to-r from-neon via-white to-neon opacity-20 blur-xl rounded-lg"></div>
          
          <div className="relative rounded-lg overflow-hidden border border-white/10 bg-[#0c0c0c] shadow-2xl">
            {/* Window Header */}
            <div className="bg-gradient-to-r from-[#111] to-[#0a0a0a] px-4 py-3 flex items-center border-b border-white/10 justify-between">
              <div className="flex gap-2">
                <div className="w-3 h-3 bg-red-500 rounded-full hover:bg-red-400 transition-colors cursor-pointer"></div>
                <div className="w-3 h-3 bg-yellow-500 rounded-full hover:bg-yellow-400 transition-colors cursor-pointer"></div>
                <div className="w-3 h-3 bg-green-500 rounded-full hover:bg-green-400 transition-colors cursor-pointer"></div>
              </div>
              <div className="font-mono text-xs text-slate-500 flex items-center gap-2">
                <span className="text-green-400">admin@sentinel-blade</span>
                <span className="text-white">:</span>
                <span className="text-blue-400">~/scans/juice-shop</span>
                <span className="text-green-400">$</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="text-xs text-slate-500 font-mono">
                  <span className="text-green-400">●</span> LIVE
                </div>
                <div className="w-24 h-2 bg-white/10 rounded-full overflow-hidden">
                  <div className="h-full bg-gradient-to-r from-neon to-green-500 rounded-full animate-pulse" style={{ width: '82%' }}></div>
                </div>
              </div>
            </div>

            {/* Terminal Content */}
            <div className="p-6 font-mono text-xs md:text-sm bg-gradient-to-b from-[#050505] to-black text-slate-300 leading-tight h-[500px] overflow-y-auto scrollbar-thin scrollbar-thumb-neon/20 scrollbar-track-transparent">
              <div className="space-y-0.5">
                {terminalLines.map((line, index) => (
                  <div key={index} className={getLineColor(line)}>
                    {line.startsWith('admin@sentinel-blade') ? (
                      <>
                        <span className="text-green-400">admin@sentinel-blade</span>
                        <span className="text-white">:</span>
                        <span className="text-blue-400">~/scans/juice-shop</span>
                        <span className="text-white">$ </span>
                        <span className="text-white">{line.split('$ ')[1]}</span>
                      </>
                    ) : line.startsWith('  ✓') ? (
                      <span className="text-green-500">{line}</span>
                    ) : line === '' ? (
                      <br />
                    ) : (
                      line
                    )}
                  </div>
                ))}
                
                {/* Blinking cursor at the end */}
                {terminalLines.length > 0 && (
                  <div className="flex items-center">
                    <span className="text-green-400">admin@sentinel-blade</span>
                    <span className="text-white">:</span>
                    <span className="text-blue-400">~/scans/juice-shop</span>
                    <span className="text-white">$ </span>
                    <div className="w-2 h-4 bg-neon animate-pulse ml-1"></div>
                  </div>
                )}
              </div>

              {/* Results Summary Overlay */}
              {showResults && (
                <div className="mt-6 p-4 bg-black/50 backdrop-blur-sm border border-white/10 rounded-lg">
                  <div className="flex items-center justify-between mb-3">
                    <div className="text-lg font-bold text-white">Scan Results Summary</div>
                    <div className="flex gap-2">
                      <span className="px-2 py-1 bg-red-500/20 text-red-400 text-xs rounded border border-red-500/30">8 CRITICAL</span>
                      <span className="px-2 py-1 bg-orange-500/20 text-orange-400 text-xs rounded border border-orange-500/30">6 HIGH</span>
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-3 mb-4">
                    <div className="p-3 bg-black/50 border border-white/10 rounded hover:border-neon/50 transition-colors">
                      <div className="text-xs text-slate-500 mb-1">IDOR Vulnerabilities</div>
                      <div className="text-xl font-bold text-red-400">5 found</div>
                      <div className="text-xs text-slate-400">/api/users/{'{id}'}, /api/products/{'{id}'}</div>
                    </div>
                    
                    <div className="p-3 bg-black/50 border border-white/10 rounded hover:border-neon/50 transition-colors">
                      <div className="text-xs text-slate-500 mb-1">CORS Misconfigurations</div>
                      <div className="text-xl font-bold text-cyan-400">4 found</div>
                      <div className="text-xs text-slate-400">Wildcard origins, null allowed</div>
                    </div>
                    
                    <div className="p-3 bg-black/50 border border-white/10 rounded hover:border-neon/50 transition-colors">
                      <div className="text-xs text-slate-500 mb-1">Rate Limit Bypasses</div>
                      <div className="text-xl font-bold text-orange-400">3 found</div>
                      <div className="text-xs text-slate-400">/api/login, /api/search</div>
                    </div>
                  </div>
                  
                  <div className="text-xs text-slate-400 border-t border-white/10 pt-3">
                    Reports saved to: <span className="text-white">reports/sentinel_blade/</span>
                  </div>
                </div>
              )}
            </div>
            
            {/* Status Bar */}
            <div className="bg-[#111] px-4 py-2 border-t border-white/10 flex justify-between text-xs text-slate-500">
              <div className="font-mono">
                <span className="text-neon">SentinelBlade</span> v2.0.0
              </div>
              <div className="flex gap-4">
                <span>Threads: <span className="text-green-400">15</span></span>
                <span>Endpoints: <span className="text-blue-400">589</span></span>
                <span>Time: <span className="text-yellow-400">3:31</span></span>
              </div>
            </div>
            
            {/* Floating Scan Status */}
            <div className="absolute bottom-6 right-6 bg-black/90 backdrop-blur border border-neon/30 px-4 py-3 rounded-lg shadow-2xl">
              <div className="text-xs text-neon font-mono mb-1 flex items-center gap-2">
                <div className="w-2 h-2 bg-neon rounded-full animate-pulse"></div>
                SCAN ACTIVE
              </div>
              <div className="text-white font-bold text-lg">22 VULNERABILITIES</div>
              <div className="text-slate-400 text-xs font-mono">8 critical • 6 high • 5 medium • 3 low</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SolutionSection;
