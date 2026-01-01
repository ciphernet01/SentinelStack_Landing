import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import TerminalDemo from './components/TerminalDemo';
import ProblemSection from './components/ProblemSection';
import SolutionSection from './components/SolutionSection';
import Features from './components/Features';
import HowItWorks from './components/HowItWorks';
import Pricing from './components/Pricing';
import Trust from './components/Trust';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-black text-slate-200 selection:bg-neon selection:text-black">
      <Navbar />
      <main>
        <Hero />
        <TerminalDemo />
        <ProblemSection />
        <SolutionSection />
        <Features />
        <HowItWorks />
        <Pricing />
        <Trust />
      </main>
      <Footer />
    </div>
  );
};

export default App;