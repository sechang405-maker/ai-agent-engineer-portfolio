import { ArrowRight, Terminal, Sparkles, ChevronRight } from 'lucide-react';
import CodeMockup from './CodeMockup';

interface HeroProps {
  onContactClick: () => void;
  onFrameworkClick: () => void;
}

export default function Hero({ onContactClick, onFrameworkClick }: HeroProps) {
  return (
    <section className="relative overflow-hidden pt-12 pb-20 md:pt-16 md:pb-28" id="hero-section">
      {/* Grid Canvas Overlay */}
      <div className="absolute inset-0 z-0 bg-[linear-gradient(to_right,#3D3A39_1px,transparent_1px),linear-gradient(to_bottom,#3D3A39_1px,transparent_1px)] bg-[size:5rem_5rem] opacity-[0.25] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_20%,#000_60%,transparent_100%)]"></div>
      
      {/* Ambient soft glow on background */}
      <div className="absolute left-1/2 top-1/4 -z-10 h-[300px] w-[500px] -translate-x-1/2 rounded-full bg-primary-green/5 blur-[120px]"></div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Hero Copy & CTA (7 cols on desktop) */}
          <div className="lg:col-span-7 space-y-6 md:space-y-8">
            
            {/* Status Pill Indicator */}
            <div className="inline-flex items-center space-x-2 rounded-full border border-primary-green/30 bg-primary-green/5 px-3 py-1">
              <span className="flex h-2 w-2 rounded-full bg-primary-green animate-pulse"></span>
              <span className="font-mono text-[11px] font-semibold tracking-wider text-primary-soft uppercase">
                2026 AI_TRANSFORMATION // LIVE
              </span>
            </div>

            {/* Headline */}
            <h1 className="text-center break-keep text-[42px] sm:text-[52px] lg:text-[60px] xl:text-[64px] font-bold tracking-tight text-ink-strong leading-[1.12]">
              AI 에이전트를 누구나 이해하고, <br className="hidden md:inline" />
              자기 업무에 <span className="font-semibold text-primary-green border-b border-primary-green/40">바로 실행</span>하게 만드는 <br />
              <span className="font-bold text-ink">실전형 AI 전환 파트너</span>
            </h1>

            {/* Supporting Paragraph */}
            <p className="max-w-2xl text-base md:text-lg text-body font-light leading-relaxed">
              AI 에이전트는 트렌드가 아니라 실제 업무 변화로 연결되어야 합니다. <br />
              복잡한 AI 개념을 현업 언어로 번역하고, 자동화 시나리오부터 실제 배포 가능한 프로토타입까지 함께 설계하고 만듭니다.
            </p>

            {/* Micro Terminal Instruction Badge */}
            <div className="flex items-center space-x-3 text-xs text-mute font-mono bg-canvas-soft border border-hairline py-2 px-3.5 rounded w-max">
              <Terminal className="h-3.5 w-3.5 text-primary-green" />
              <span>const partner = new AIAgentEngineer("실전업무_자동화_전문");</span>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2">
              <button
                onClick={onContactClick}
                className="group flex items-center justify-center space-x-2 rounded bg-primary-green px-6 py-3.5 text-sm font-semibold text-canvas hover:bg-primary-soft transition-all duration-200 shadow-md shadow-primary-green/10 cursor-pointer"
                id="hero-primary-cta"
              >
                <span>워크숍 및 컨설팅 문의하기</span>
                <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </button>

              <button
                onClick={onFrameworkClick}
                className="flex items-center justify-center space-x-1.5 rounded border border-hairline bg-canvas px-6 py-3.5 text-sm font-semibold text-ink hover:bg-canvas-soft hover:border-mute transition-colors cursor-pointer"
                id="hero-secondary-cta"
              >
                <span>에이전트 구축 프로세스 보기</span>
                <ChevronRight className="h-4 w-4 text-mute" />
              </button>

              <a
                href="https://deploy-rkim5oimlgy2vdf7nfbdah.streamlit.app/"
                target="_blank"
                rel="noreferrer"
                className="flex items-center justify-center space-x-2 rounded border border-primary-green/50 bg-primary-green/5 px-6 py-3.5 text-sm font-semibold text-primary-soft hover:bg-primary-green/15 hover:border-primary-green transition-colors cursor-pointer"
                id="hero-rag-demo-link"
              >
                <Sparkles className="h-4 w-4" />
                <span>PDF RAG 챗봇 데모 실행</span>
              </a>
            </div>
              <a
  href="https://cosmomate-weyzwbdjcyvwamskyxsd7y.streamlit.app/"
  target="_blank"
  rel="noreferrer"
  className="flex items-center justify-center space-x-2 rounded border border-primary-green/50 bg-primary-green/5 px-6 py-3.5 text-sm font-semibold text-primary-soft hover:bg-primary-green/15 hover:border-primary-green transition-colors cursor-pointer"
  id="hero-cosmomate-link"
>
  <Sparkles className="h-4 w-4" />
  <span>CosmoMate 우주 과학 챗봇 실행</span>
</a>
            {/* Core Values Indicators */}
            <div className="grid grid-cols-3 gap-4 pt-6 border-t border-hairline/60">
              <div>
                <span className="font-mono text-xs text-mute block uppercase tracking-wider">METHOD</span>
                <span className="text-sm font-medium text-ink-strong">100% 결과물 중심</span>
              </div>
              <div>
                <span className="font-mono text-xs text-mute block uppercase tracking-wider">INTERFACE</span>
                <span className="text-sm font-medium text-ink-strong">현업 툴(슬랙/노션) 연동</span>
              </div>
              <div>
                <span className="font-mono text-xs text-mute block uppercase tracking-wider">ENGINE</span>
                <span className="text-sm font-medium text-ink-strong">실제 작동하는 에이전트</span>
              </div>
            </div>

          </div>

          {/* Right Column: CodeMockup Animation widget (5 cols on desktop) */}
          <div className="lg:col-span-5 w-full">
            <div className="relative">
              {/* Subtle background card depth shadow */}
              <div className="absolute -inset-1 rounded-lg bg-gradient-to-r from-primary-green/20 to-transparent opacity-30 blur-lg"></div>
              
              <div className="relative">
                <CodeMockup />
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
