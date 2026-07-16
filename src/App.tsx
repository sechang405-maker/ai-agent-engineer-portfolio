import { useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Positioning from './components/Positioning';
import Problems from './components/Problems';
import Programs from './components/Programs';
import Outcomes from './components/Outcomes';
import SignatureFramework from './components/SignatureFramework';
import Proof from './components/Proof';
import ContactForm from './components/ContactForm';
import { ArrowUp, Terminal, Shield } from 'lucide-react';

export default function App() {
  const [selectedProgram, setSelectedProgram] = useState<string | undefined>(undefined);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const handleProgramConsult = (programName?: string) => {
    setSelectedProgram(programName);
    scrollToSection('contact-section');
  };

  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-canvas selection:bg-primary-green/30 selection:text-ink-strong">
      {/* Decorative Technical Top Accent Line */}
      <div className="h-1 w-full bg-gradient-to-r from-primary-green via-primary-soft to-primary-deep"></div>

      {/* Shared Header Navigation */}
      <Header
        onContactClick={() => {
          setSelectedProgram(undefined);
          scrollToSection('contact-section');
        }}
        onProgramClick={() => scrollToSection('programs-section')}
        onFrameworkClick={() => scrollToSection('framework-section')}
        onProofClick={() => scrollToSection('proof-section')}
      />

      {/* Main Container */}
      <main>
        {/* 1. Hero Area */}
        <Hero
          onContactClick={() => {
            setSelectedProgram(undefined);
            scrollToSection('contact-section');
          }}
          onFrameworkClick={() => scrollToSection('framework-section')}
        />

        {/* 2. Positioning Area */}
        <Positioning />

        {/* 3. Problems Diagnosis Area */}
        <Problems />

        {/* 4. Programs / Workshop Selection Grid Area */}
        <Programs onContactClick={handleProgramConsult} />

        {/* 5. Outcomes Deliverables Area */}
        <Outcomes />

        {/* 6 & 7. Signature 5-Step Methodology / Framework Area */}
        <SignatureFramework />

        {/* 8. Proof metrics, case archives, testimonials Area */}
        <Proof />

        {/* 9. Secure Contact & Consultation Submission Form Area */}
        <ContactForm 
          selectedProgram={selectedProgram} 
          onSuccessSubmit={() => {
            // Callback when successfully requested
            console.log("App received successful contact packet.");
          }}
        />
      </main>

      {/* Footer Area */}
      <footer className="border-t border-hairline bg-canvas py-12">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6 pb-8 border-b border-hairline/40">
            <div className="space-y-2">
              <div className="flex items-center space-x-2">
                <div className="h-2 w-2 rounded-full bg-primary-green"></div>
                <span className="font-mono text-sm font-bold text-ink-strong tracking-widest">
                  AGENT_ENGINEER
                </span>
              </div>
              <p className="text-xs text-mute font-light max-w-md leading-relaxed">
                단순 트렌드 강의가 아닌, 실제 업무를 바꾸고 조직의 자립적인 생산성 도약을 이끄는 
                현장형 AI 엔지니어링 및 비즈니스 전환 컨설팅 파트너입니다.
              </p>
            </div>

            {/* Quick Links Footer */}
            <div className="flex flex-wrap gap-x-8 gap-y-2 text-xs font-mono text-mute">
              <button onClick={() => scrollToSection('programs-section')} className="hover:text-ink-strong transition-colors text-left cursor-pointer">
                PROGRAMS
              </button>
              <button onClick={() => scrollToSection('framework-section')} className="hover:text-ink-strong transition-colors text-left cursor-pointer">
                METHODOLOGY
              </button>
              <button onClick={() => scrollToSection('proof-section')} className="hover:text-ink-strong transition-colors text-left cursor-pointer">
                CASES_METRICS
              </button>
              <button onClick={() => scrollToSection('contact-section')} className="hover:text-ink-strong transition-colors text-left cursor-pointer text-primary-soft">
                CONSULTATION_SECURE_CHANNEL
              </button>
            </div>
          </div>

          {/* Copyright and System telemetry indicator */}
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 pt-8 text-[11px] font-mono text-mute">
            <div>
              <span>© {new Date().getFullYear()} AGENT_ENGINEER_YUN. All rights reserved.</span>
            </div>
            
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-1.5 text-primary-green/80">
                <Terminal className="h-3.5 w-3.5" />
                <span>RUNNING_STABLE_ON_NODE_PROD</span>
              </div>
              <button
                onClick={handleScrollToTop}
                className="flex items-center space-x-1 rounded border border-hairline bg-canvas px-2.5 py-1 text-ink hover:text-primary-green hover:border-primary-green/50 transition-all cursor-pointer"
                title="상단으로 이동"
                id="back-to-top-btn"
              >
                <ArrowUp className="h-3 w-3" />
                <span>TOP</span>
              </button>
            </div>
          </div>

        </div>
      </footer>
    </div>
  );
}

