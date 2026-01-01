import React from 'react';
import { Linkedin, Github } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="py-12 bg-black border-t border-white/10 text-sm">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6">
        
        <div className="text-center md:text-left">
          <h4 className="font-bold text-white text-lg font-display tracking-wide">SentinelStack<span className="text-neon">™</span></h4>
          <p className="text-slate-500 mt-2">Enterprise-grade security validation.</p>
        </div>

        <div className="flex items-center gap-6">
          <a href="https://www.linkedin.com/in/shreyansh-singh-239b00222/" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-neon transition-colors">
            <Linkedin className="w-5 h-5" />
            <span className="sr-only">LinkedIn</span>
          </a>
           {/* Placeholder for future social links */}
           {/* <a href="#" className="text-slate-400 hover:text-neon transition-colors">
            <Github className="w-5 h-5" />
            <span className="sr-only">GitHub</span>
          </a> */}
        </div>
      </div>
      
      <div className="max-w-7xl mx-auto px-6 mt-12 pt-8 border-t border-white/10 text-center text-slate-600">
        <p>&copy; {new Date().getFullYear()} SentinelStack. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;