import React, { useState, useEffect, useRef } from 'react';

interface TerminalLine {
  type: 'input' | 'output' | 'system';
  content: React.ReactNode;
}

const TerminalDemo: React.FC = () => {
  const [input, setInput] = useState('');
  const [history, setHistory] = useState<TerminalLine[]>([
    {
      type: 'system',
      content: (
        <div className="text-neon font-bold mb-4 whitespace-pre">
{`>> INITIALIZING LOGIC KERNEL...
>> LOADED MODULES: 32
===================================================
SENTINEL STACK - LOGIC VALIDATION SUITE v2.0.0
===================================================`}
        </div>
      )
    },
    { type: 'system', content: <div><span className="text-slate-500">Target:</span> Visitor Session</div> },
    { type: 'system', content: <div className="text-neon">[INFO] Interactive Shell Ready. Type 'help' for commands.</div> },
  ]);

  const bottomRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  // Auto-scroll to bottom
  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [history]);

  const handleCommand = (cmd: string) => {
    const cleanCmd = cmd.trim().toLowerCase();
    let response: React.ReactNode = '';

    // Command Logic
    if (cleanCmd === 'help') {
      response = (
        <div className="text-slate-400">
          Available commands: <br/>
          <span className="text-neon">about</span> - What is SentinelStack?<br/>
          <span className="text-neon">features</span> - List capabilities<br/>
          <span className="text-neon">pricing</span> - Cost details<br/>
          <span className="text-neon">process</span> - How it works<br/>
          <span className="text-neon">contact</span> - Get in touch<br/>
          <span className="text-neon">clear</span> - Clear terminal
        </div>
      );
    } else if (cleanCmd === 'pricing' || cleanCmd === 'cost') {
      response = (
        <div>
          <span className="text-white font-bold">Snapshot™ Assessment:</span> ₹15k / $150 USD (Introductory Offer)<br/>
          Includes: Technical Findings, Risk Scoring, Remediation Guide.<br/>
          <span className="text-slate-500">Turnaround: 48 Hours.</span>
        </div>
      );
    } else if (cleanCmd === 'about' || cleanCmd === 'who') {
      response = "SentinelStack is an automated security validation suite detecting logic flaws, broken access control, and business logic abuse that traditional scanners miss.";
    } else if (cleanCmd === 'features' || cleanCmd === 'scan') {
      response = (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
          <div>[+] Broken Access Control</div>
          <div>[+] Auth & Session Security</div>
          <div>[+] Token Lifecycle Analysis</div>
          <div>[+] Rate Limiting & Abuse</div>
          <div>[+] Privilege Escalation</div>
          <div>[+] Logic Flaws</div>
        </div>
      );
    } else if (cleanCmd === 'process') {
      response = "1. Scope Definition -> 2. Automated Execution -> 3. Validation -> 4. Report Delivery (PDF/JSON).";
    } else if (cleanCmd === 'contact' || cleanCmd === 'email') {
      response = (
        <div>
          Founder Protocol: Shreyansh Singh<br/>
          LinkedIn: <a href="https://www.linkedin.com/in/shreyansh-singh-239b00222/" target="_blank" rel="noopener noreferrer" className="text-neon underline hover:text-white">Connect Here</a>
        </div>
      );
    } else if (cleanCmd === 'clear' || cleanCmd === 'cls') {
      setHistory([]);
      return;
    } else if (cleanCmd === '') {
      response = null;
    } else {
      response = <span className="text-red-500">Command not found: {cmd}. Type 'help' for options.</span>;
    }

    // Add to history
    const newHistory: TerminalLine[] = [
      ...history,
      { type: 'input', content: cmd }
    ];

    if (response) {
      newHistory.push({ type: 'output', content: response });
    }

    setHistory(newHistory);
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      handleCommand(input);
      setInput('');
    }
  };

  const focusInput = () => {
    inputRef.current?.focus();
  };

  return (
    <section className="bg-black pb-20 pt-10 border-b border-white/5 relative">
      <div className="max-w-5xl mx-auto px-6 relative z-10">
        <div className="text-center mb-10">
            <h2 className="text-2xl font-bold text-white mb-2 font-display uppercase tracking-wider">Live Terminal</h2>
            <p className="text-slate-400 font-mono text-xs">Interact with the system. Ask about pricing, features, or process.</p>
        </div>
        
        <div 
          className="overflow-hidden bg-[#050505] border border-neon/30 shadow-[0_0_50px_rgba(57,255,20,0.1)] font-mono text-xs md:text-sm relative group mx-auto cursor-text rounded-lg"
          onClick={focusInput}
        >
          
          {/* Window Controls */}
          <div className="bg-[#111] px-4 py-2 flex items-center gap-2 border-b border-white/10 select-none">
             <div className="flex gap-2">
                <div className="w-3 h-3 bg-red-500/50 rounded-full"></div>
                <div className="w-3 h-3 bg-yellow-500/50 rounded-full"></div>
                <div className="w-3 h-3 bg-green-500/50 rounded-full"></div>
             </div>
            <div className="ml-4 text-neon/70 text-xs truncate">root@sentinel:~/interactive_shell</div>
          </div>

          {/* Terminal Content */}
          <div className="h-96 p-4 md:p-6 text-slate-300 space-y-2 overflow-y-auto leading-relaxed scrollbar-thin scrollbar-thumb-neon/20 scrollbar-track-transparent">
            
            {history.map((line, index) => (
              <div key={index} className={`${line.type === 'input' ? 'mt-4' : ''}`}>
                {line.type === 'input' && (
                   <span className="text-neon mr-2">root@sentinel:~$</span>
                )}
                <span className={line.type === 'input' ? 'text-white' : 'text-slate-300'}>
                  {line.content}
                </span>
              </div>
            ))}

            {/* Input Line */}
            <div className="flex items-center mt-2">
              <span className="text-neon mr-2 whitespace-nowrap">root@sentinel:~$</span>
              <input 
                ref={inputRef}
                type="text" 
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={handleKeyDown}
                className="w-full bg-transparent border-none outline-none text-slate-200 focus:ring-0 p-0 font-bold"
                autoFocus
                spellCheck={false}
                autoComplete="off"
              />
            </div>
            <div ref={bottomRef} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default TerminalDemo;