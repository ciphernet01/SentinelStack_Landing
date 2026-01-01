import React, { useState, useEffect } from 'react';
import { ShieldCheck, Menu, X } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Capabilities', href: '#features' },
    { name: 'Process', href: '#process' },
    { name: 'Pricing', href: '#pricing' },
    { name: 'Trust', href: '#trust' },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b ${
        isScrolled
          ? 'bg-black/80 backdrop-blur-md border-neon/20 py-3'
          : 'bg-transparent border-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        <div className="flex items-center gap-2 cursor-pointer group" onClick={() => window.scrollTo(0, 0)}>
          <div className="relative">
            <div className="absolute inset-0 bg-neon blur-md opacity-20 group-hover:opacity-40 transition-opacity"></div>
            <ShieldCheck className="w-8 h-8 text-neon relative z-10" />
          </div>
          <span className="text-xl font-bold tracking-tight text-white font-display">
            Sentinel<span className="text-neon">Stack</span>
          </span>
        </div>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-sm font-medium text-slate-300 hover:text-neon transition-colors tracking-wide uppercase font-display"
            >
              {link.name}
            </a>
          ))}
          <a
            href="#pricing"
            className="px-6 py-2 text-sm font-bold text-black bg-neon rounded-none skew-x-[-10deg] hover:bg-neon-dim transition-all hover:shadow-[0_0_20px_rgba(57,255,20,0.4)]"
          >
            <span className="block skew-x-[10deg] uppercase font-display tracking-wider">Get Snapshot</span>
          </a>
        </div>

        {/* Mobile Toggle */}
        <button
          className="md:hidden text-neon"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Nav */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-black border-b border-neon/20 p-6 flex flex-col gap-4">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setIsMobileMenuOpen(false)}
              className="text-base font-bold text-slate-300 hover:text-neon font-display uppercase tracking-wide"
            >
              {link.name}
            </a>
          ))}
          <a
            href="#pricing"
            onClick={() => setIsMobileMenuOpen(false)}
            className="px-5 py-4 text-center text-sm font-bold text-black bg-neon hover:bg-neon-dim font-display uppercase tracking-wider"
          >
            Get Snapshot
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;