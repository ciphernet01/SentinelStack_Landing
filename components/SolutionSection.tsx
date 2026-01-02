import React, { useState, useEffect } from 'react';

const SolutionSection: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'features' | 'demo' | 'workflow'>('demo');
  const [terminalLines, setTerminalLines] = useState<string[]>([]);
  const [scanProgress, setScanProgress] = useState(0);
  
  // Terminal simulation data
  const terminalCommands = [
    "python sentinel_blade.py --profile aggressive --target https://juice-shop.herokuapp.com",
    "Starting SentinelBlade v2.0.0 - Comprehensive Security Audit",
    "Loading 30 security testing modules...",
    "Module 1/30: Access Control Scanner ✓",
    "Module 2/30: Rate Limit Analyzer ✓",
    "Module 3/30: CORS Security Tester ✓",
    "...",
    "All modules loaded successfully (30/30)",
    "Calibrating baseline metrics...",
    "Testing 589 endpoints with 15 concurrent threads",
    "Estimated completion: 3 minutes 31 seconds"
  ];
  
  const scanResults = [
    { type: "IDOR", status: "CRITICAL", endpoint: "/api/users/{id}", found: 8 },
    { type: "Broken Auth", status: "HIGH", endpoint: "/auth/token", found: 3 },
    { type: "CORS Misconfig", status: "HIGH", endpoint: "/api/*", found: 12 },
    { type: "Rate Limit Bypass", status: "MEDIUM", endpoint: "/login", found: 4 },
    { type: "Path Traversal", status: "MEDIUM", endpoint: "/download", found: 2 },
    { type: "Info Leakage", status: "LOW", endpoint: "/debug", found: 6 }
  ];
  
  const features = [
    {
      icon: "🔐",
      title: "Comprehensive Coverage",
      description: "30 specialized tools covering OWASP Top 10 and beyond"
    },
    {
      icon: "⚡",
      title: "High Performance",
      description: "Parallel scanning with intelligent rate limiting"
    },
    {
      icon: "📊",
      title: "Actionable Reports",
      description: "Multiple formats with detailed remediation steps"
    },
    {
      icon: "🔄",
      title: "Continuous Updates",
      description: "Regular updates with new attack vectors and techniques"
    }
  ];
  
  const workflowSteps = [
    { step: 1, title: "Target Discovery", description: "Automated endpoint enumeration and technology fingerprinting" },
    { step: 2, title: "Vulnerability Scanning", description: "Parallel execution of 30 specialized security tests" },
    { step: 3, title: "Exploit Validation", description: "Safe exploit simulation to confirm vulnerabilities" },
    { step: 4, title: "Risk Assessment", description: "Intelligent scoring based on CVSS and business impact" },
    { step: 5, title: "Report Generation", description: "Comprehensive reports with remediation guidance" }
  ];

  // Simulate terminal typing effect
  useEffect(() => {
    let currentLine = 0;
    const interval = setInterval(() => {
      if (currentLine < terminalCommands.length) {
        setTerminalLines(prev => [...prev, terminalCommands[currentLine]]);
        currentLine++;
        setScanProgress(Math.min(100, (currentLine / terminalCommands.length) * 100));
      } else {
        clearInterval(interval);
      }
    }, 300);
    
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-24 bg-black relative overflow-hidden" id="solution">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-neon/10 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-r from-neon/5 to-transparent rounded-full blur-3xl"></div>
        
        {/* Grid Pattern */}
        <div className="absolute inset-0" style={{
          backgroundImage: `linear-gradient(rgba(0, 255, 255, 0.03) 1px, transparent 1px),
                           linear-gradient(90deg, rgba(0, 255, 255, 0.03) 1px, transparent 1px)`,
          backgroundSize: '50px 50px'
        }}></div>
      </div>

      {/* Decorative Lines */}
      <div className="absolute left-0 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-neon/50 to-transparent"></div>
      <div className="absolute right-0 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-neon/50 to-transparent"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="max-w-4xl mx-auto mb-16 text-center">
          <div className="inline-flex items-center gap-2 bg-black/50 border border-neon/30 rounded-full px-4 py-2 mb-6">
            <div className="w-2 h-2 bg-neon rounded-full animate-pulse"></div>
            <span className="text-sm font-semibold tracking-widest text-neon uppercase font-mono">
              The SentinelStack Protocol
            </span>
          </div>
          
          <h2 className="text-4xl md:text-6xl lg:text-7xl font-black text-white mb-8 font-display leading-tight">
            Enterprise Security Testing
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-neon via-white to-neon">
              Redefined
            </span>
          </h2>
          
          <p className="text-xl md:text-2xl text-slate-300 leading-relaxed max-w-3xl mx-auto">
            A comprehensive suite of <span className="text-neon font-bold">30 specialized tools</span> that 
            automate professional penetration testing methodology for web applications and APIs.
          </p>
        </div>

        {/* Tabs Navigation */}
        <div className="flex justify-center mb-12">
          <div className="inline-flex bg-black/50 backdrop-blur border border-white/10 rounded-2xl p-1">
            <button
              onClick={() => setActiveTab('features')}
              className={`px-6 py-3 rounded-xl text-sm font-semibold transition-all duration-300 ${activeTab === 'features' ? 'bg-neon/20 text-neon border border-neon/30' : 'text-slate-400 hover:text-white'}`}
            >
              <span className="flex items-center gap-2">
                <span className="text-lg">🔍</span>
                Features
              </span>
            </button>
            <button
              onClick={() => setActiveTab('demo')}
              className={`px-6 py-3 rounded-xl text-sm font-semibold transition-all duration-300 ${activeTab === 'demo' ? 'bg-neon/20 text-neon border border-neon/30' : 'text-slate-400 hover:text-white'}`}
            >
              <span className="flex items-center gap-2">
                <span className="text-lg">💻</span>
                Live Demo
              </span>
            </button>
            <button
              onClick={() => setActiveTab('workflow')}
              className={`px-6 py-3 rounded-xl text-sm font-semibold transition-all duration-300 ${activeTab === 'workflow' ? 'bg-neon/20 text-neon border border-neon/30' : 'text-slate-400 hover:text-white'}`}
            >
              <span className="flex items-center gap-2">
                <span className="text-lg">🔄</span>
                Workflow
              </span>
            </button>
          </div>
        </div>

        {/* Content based on active tab */}
        <div className="mb-16">
          {activeTab === 'features' && (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {features.map((feature, index) => (
                <div 
                  key={index}
                  className="group relative bg-gradient-to-br from-black/50 to-black/30 backdrop-blur border border-white/10 rounded-2xl p-6 hover:border-neon/50 transition-all duration-300 hover:scale-105"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-neon/5 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="relative">
                    <div className="text-4xl mb-4">{feature.icon}</div>
                    <h3 className="text-xl font-bold text-white mb-2">{feature.title}</h3>
                    <p className="text-slate-400 text-sm leading-relaxed">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
          )}

          {activeTab === 'demo' && (
            <div className="relative mx-auto max-w-6xl">
              {/* Glow Effect */}
              <div className="absolute -inset-4 bg-gradient-to-r from-neon via-white to-neon opacity-10 blur-3xl rounded-2xl"></div>
              
              <div className="relative rounded-xl overflow-hidden border border-white/10 bg-gradient-to-br from-[#0a0a0a] to-black shadow-2xl">
                {/* Window Header */}
                <div className="bg-gradient-to-r from-[#111] to-[#0a0a0a] px-6 py-4 flex items-center border-b border-white/10 justify-between">
                  <div className="flex items-center gap-4">
                    <div className="flex gap-2">
                      <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                      <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                      <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                    </div>
                    <div className="font-mono text-sm text-slate-400">
                      <span className="text-neon">➜</span>
                      <span className="ml-2">admin@sentinel-blade</span>
                      <span className="text-slate-600">:</span>
                      <span className="text-white">~/scans/production</span>
                    </div>
                  </div>
                  
                  {/* Scan Progress Indicator */}
                  <div className="flex items-center gap-3">
                    <div className="text-xs text-slate-500 font-mono">
                      SCAN: {scanProgress.toFixed(0)}%
                    </div>
                    <div className="w-32 h-2 bg-white/10 rounded-full overflow-hidden">
                      <div 
                        className="h-full bg-gradient-to-r from-neon to-green-500 rounded-full transition-all duration-300"
                        style={{ width: `${scanProgress}%` }}
                      ></div>
                    </div>
                  </div>
                </div>

                {/* Terminal Content */}
                <div className="p-6 font-mono text-xs md:text-sm bg-gradient-to-b from-[#050505] to-black text-slate-300 leading-relaxed h-[500px] overflow-y-auto">
                  {/* Terminal Output */}
                  <div className="space-y-2">
                    {terminalLines.map((line, index) => (
                      <div key={index} className="animate-fadeIn">
                        {line.includes("python") ? (
                          <div>
                            <span className="text-green-400">admin@sentinel-blade</span>
                            <span className="text-white">:</span>
                            <span className="text-blue-400">~/scans</span>
                            <span className="text-white">$ </span>
                            <span className="text-neon">{line}</span>
                          </div>
                        ) : line.includes("✓") ? (
                          <div className="text-green-400 pl-4">✔ {line.replace("✓", "")}</div>
                        ) : line.includes("!") ? (
                          <div className="text-yellow-500">⚠ {line}</div>
                        ) : line.includes("[") ? (
                          <div className="text-blue-400">{line}</div>
                        ) : (
                          <div className="text-slate-400">{line}</div>
                        )}
                      </div>
                    ))}
                    
                    {/* Cursor */}
                    {terminalLines.length === terminalCommands.length && (
                      <div className="flex items-center gap-2 mt-4">
                        <span className="text-green-400">admin@sentinel-blade</span>
                        <span className="text-white">:</span>
                        <span className="text-blue-400">~/scans</span>
                        <span className="text-white">$ </span>
                        <div className="w-2 h-4 bg-neon animate-pulse"></div>
                      </div>
                    )}
                  </div>

                  {/* Scan Results Visualization */}
                  {terminalLines.length === terminalCommands.length && (
                    <div className="mt-8 border-t border-white/10 pt-6">
                      <div className="flex items-center justify-between mb-4">
                        <h4 className="text-lg font-bold text-white">Scan Results Summary</h4>
                        <div className="px-3 py-1 bg-red-500/20 border border-red-500/30 rounded-full">
                          <span className="text-red-400 text-sm font-semibold">22 CRITICAL</span>
                        </div>
                      </div>
                      
                      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                        {scanResults.map((result, index) => (
                          <div 
                            key={index}
                            className="bg-black/50 border border-white/10 rounded-lg p-4 hover:border-neon/50 transition-colors duration-300"
                          >
                            <div className="flex items-center justify-between mb-2">
                              <span className={`px-2 py-1 text-xs rounded ${
                                result.status === 'CRITICAL' ? 'bg-red-500/20 text-red-400' :
                                result.status === 'HIGH' ? 'bg-orange-500/20 text-orange-400' :
                                result.status === 'MEDIUM' ? 'bg-yellow-500/20 text-yellow-400' :
                                'bg-blue-500/20 text-blue-400'
                              }`}>
                                {result.status}
                              </span>
                              <span className="text-xs text-slate-500">{result.found} found</span>
                            </div>
                            <div className="font-bold text-white mb-1">{result.type}</div>
                            <div className="text-xs text-slate-400 truncate">{result.endpoint}</div>
                          </div>
                        ))}
                      </div>
                      
                      {/* Report Links */}
                      <div className="mt-6 p-4 bg-black/30 border border-white/10 rounded-lg">
                        <div className="text-green-400 font-bold mb-2">[✓] Reports Generated</div>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-2">
                          <div className="flex items-center gap-2 text-sm">
                            <div className="w-2 h-2 bg-neon rounded-full"></div>
                            <span className="text-slate-400">HTML:</span>
                            <span className="text-white">scan_report_2024.html</span>
                          </div>
                          <div className="flex items-center gap-2 text-sm">
                            <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                            <span className="text-slate-400">JSON:</span>
                            <span className="text-white">vulnerabilities.json</span>
                          </div>
                          <div className="flex items-center gap-2 text-sm">
                            <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                            <span className="text-slate-400">PDF:</span>
                            <span className="text-white">executive_summary.pdf</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
                
                {/* Floating Stats */}
                <div className="absolute bottom-6 right-6 bg-black/80 backdrop-blur-xl border border-neon/30 px-4 py-3 rounded-lg">
                  <div className="text-xs text-neon font-mono mb-1">ACTIVE SCAN</div>
                  <div className="text-white font-bold text-lg">589 endpoints</div>
                  <div className="text-slate-400 text-xs">30 modules • 15 threads</div>
                </div>
                
                {/* Scan Time Badge */}
                <div className="absolute top-6 right-6 bg-gradient-to-r from-neon to-blue-500 text-black px-3 py-1 rounded-full text-xs font-bold">
                  3:31 min
                </div>
              </div>
            </div>
          )}

          {activeTab === 'workflow' && (
            <div className="relative">
              <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
                {workflowSteps.map((step, index) => (
                  <div key={index} className="relative">
                    {/* Connecting Lines */}
                    {index < workflowSteps.length - 1 && (
                      <div className="hidden md:block absolute top-8 left-full w-full h-0.5 bg-gradient-to-r from-neon/50 to-transparent z-0"></div>
                    )}
                    
                    <div className="relative bg-gradient-to-br from-black/50 to-black/30 backdrop-blur border border-white/10 rounded-2xl p-6 text-center group hover:border-neon/50 transition-all duration-300 z-10">
                      <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 w-8 h-8 bg-neon rounded-full flex items-center justify-center text-black font-bold">
                        {step.step}
                      </div>
                      <h3 className="text-xl font-bold text-white mb-3 mt-4">{step.title}</h3>
                      <p className="text-slate-400 text-sm leading-relaxed">{step.description}</p>
                      
                      {/* Hover Indicator */}
                      <div className="absolute inset-0 border-2 border-neon rounded-2xl opacity-0 group-hover:opacity-30 transition-opacity duration-300"></div>
                    </div>
                  </div>
                ))}
              </div>
              
              {/* Workflow Legend */}
              <div className="mt-12 p-6 bg-black/50 backdrop-blur border border-white/10 rounded-xl max-w-2xl mx-auto">
                <div className="text-center mb-4">
                  <h4 className="text-white font-bold text-lg">Key Metrics</h4>
                  <p className="text-slate-400 text-sm">Average scan performance</p>
                </div>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-neon">30</div>
                    <div className="text-sm text-slate-400">Tools</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-neon">5-10x</div>
                    <div className="text-sm text-slate-400">Faster</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-neon">98%</div>
                    <div className="text-sm text-slate-400">Accuracy</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-neon">24/7</div>
                    <div className="text-sm text-slate-400">Monitoring</div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <div className="inline-flex flex-col sm:flex-row items-center gap-6 p-6 bg-gradient-to-r from-black/50 to-black/30 backdrop-blur border border-white/10 rounded-2xl">
            <div className="text-left">
              <h3 className="text-xl font-bold text-white mb-2">Ready to secure your applications?</h3>
              <p className="text-slate-400">Start scanning with SentinelStack today.</p>
            </div>
            <div className="flex gap-3">
              <button className="px-6 py-3 bg-gradient-to-r from-neon to-blue-500 text-black font-bold rounded-lg hover:opacity-90 transition-opacity duration-300">
                Get Started Free
              </button>
              <button className="px-6 py-3 border border-neon text-neon font-bold rounded-lg hover:bg-neon/10 transition-colors duration-300">
                View Documentation
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Gradient */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black to-transparent"></div>
    </section>
  );
};

export default SolutionSection;
