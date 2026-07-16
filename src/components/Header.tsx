import { useState } from 'react';
import { Terminal, Copy, Check, Menu, X, ArrowUpRight } from 'lucide-react';

interface HeaderProps {
  onContactClick: () => void;
  onProgramClick: () => void;
  onFrameworkClick: () => void;
  onProofClick: () => void;
}

export default function Header({
  onContactClick,
  onProgramClick,
  onFrameworkClick,
  onProofClick,
}: HeaderProps) {
  const [copied, setCopied] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const commandText = 'npx init-agent-workshop';

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(commandText);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy: ', err);
    }
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b border-hairline bg-canvas/80 backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl h-16 items-center justify-between px-4 sm:px-6 lg:px-8">
        
        {/* Logo / Brand Name */}
        <div className="flex items-center space-x-3">
          <div className="flex h-8 w-8 items-center justify-center rounded border border-primary-green bg-canvas-soft">
            <span className="font-mono text-xs font-bold text-primary-green">A</span>
          </div>
          <div>
            <span className="font-mono text-sm font-semibold tracking-wider text-ink-strong">
              AGENT_ENGINEER
            </span>
            <span className="mx-2 text-hairline font-light">|</span>
            <span className="text-xs text-mute hidden sm:inline-block">AI Transformation Partner</span>
          </div>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <button
            onClick={onProgramClick}
            className="text-sm text-body hover:text-ink-strong transition-colors cursor-pointer"
          >
            워크숍 프로그램
          </button>
          <button
            onClick={onFrameworkClick}
            className="text-sm text-body hover:text-ink-strong transition-colors cursor-pointer"
          >
            에이전트 방법론
          </button>
          <button
            onClick={onProofClick}
            className="text-sm text-body hover:text-ink-strong transition-colors cursor-pointer"
          >
            수행 실적
          </button>
        </nav>

        {/* Desktop Actions */}
        <div className="hidden md:flex items-center space-x-4">
          {/* Command Chip */}
          <div 
            onClick={copyToClipboard}
            className="group flex items-center space-x-2 rounded-md border border-hairline bg-canvas-soft px-3 py-1.5 cursor-pointer hover:border-primary-green/50 transition-all duration-200"
            title="클릭하여 워크숍 준비 명령어 복사"
            id="copy-command-btn"
          >
            <Terminal className="h-3.5 w-3.5 text-mute group-hover:text-primary-green transition-colors" />
            <span className="font-mono text-xs text-ink/80 tracking-tight select-none">
              {commandText}
            </span>
            {copied ? (
              <Check className="h-3 w-3 text-primary-green animate-scale" />
            ) : (
              <Copy className="h-3 w-3 text-mute group-hover:text-ink transition-colors" />
            )}
          </div>

          <button
            onClick={onContactClick}
            className="flex items-center space-x-1 rounded bg-primary-green px-3.5 py-1.5 text-xs font-semibold text-canvas hover:bg-primary-soft transition-colors duration-200"
            id="header-cta-btn"
          >
            <span>워크숍 문의하기</span>
            <ArrowUpRight className="h-3 w-3" />
          </button>
        </div>

        {/* Mobile menu button */}
        <div className="flex items-center space-x-3 md:hidden">
          {/* Mobile Command Chip */}
          <div 
            onClick={copyToClipboard}
            className="flex items-center space-x-1 rounded-md border border-hairline bg-canvas-soft px-2.5 py-1 cursor-pointer"
          >
            <span className="font-mono text-[10px] text-ink/75">{commandText}</span>
            {copied ? (
              <Check className="h-2.5 w-2.5 text-primary-green" />
            ) : (
              <Copy className="h-2.5 w-2.5 text-mute" />
            )}
          </div>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="rounded border border-hairline p-1.5 text-body hover:text-ink-strong"
            id="mobile-menu-toggle"
          >
            {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>

      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="border-b border-hairline bg-canvas px-4 pt-2 pb-6 md:hidden">
          <div className="flex flex-col space-y-4">
            <button
              onClick={() => {
                onProgramClick();
                setMobileMenuOpen(false);
              }}
              className="text-left text-sm font-medium text-body py-2 hover:text-ink-strong"
            >
              워크숍 프로그램
            </button>
            <button
              onClick={() => {
                onFrameworkClick();
                setMobileMenuOpen(false);
              }}
              className="text-left text-sm font-medium text-body py-2 hover:text-ink-strong"
            >
              에이전트 방법론
            </button>
            <button
              onClick={() => {
                onProofClick();
                setMobileMenuOpen(false);
              }}
              className="text-left text-sm font-medium text-body py-2 hover:text-ink-strong"
            >
              수행 실적
            </button>
            <div className="pt-2 border-t border-hairline flex flex-col space-y-3">
              <button
                onClick={() => {
                  onContactClick();
                  setMobileMenuOpen(false);
                }}
                className="w-full flex items-center justify-center space-x-2 rounded bg-primary-green py-2.5 text-sm font-semibold text-canvas hover:bg-primary-soft transition-colors"
              >
                <span>워크숍 문의하기</span>
                <ArrowUpRight className="h-4 w-4" />
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
