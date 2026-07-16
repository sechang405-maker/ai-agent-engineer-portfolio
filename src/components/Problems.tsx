import { ShieldAlert, FileText, UserCheck, Database, CheckSquare, Terminal } from 'lucide-react';

export default function Problems() {
  const problems = [
    {
      code: 'ERR_01: NO_SCENARIO',
      title: '구체적인 자동화 시나리오 부재',
      desc: '"챗GPT로 제안서 써줘" 수준의 질문은 시나리오가 아닙니다. 어떤 데이터에서 유의미한 값을 가져오고, 최종 포맷은 어때야 하는지 흐름도가 누락되어 있습니다.',
      icon: <FileText className="h-5 w-5 text-red-400" />
    },
    {
      code: 'ERR_02: NO_OWNER',
      title: '에이전트 관리자 및 책임자 부재',
      desc: 'AI는 독립된 존재가 아닙니다. AI의 아웃풋을 검수하고, 예외 처리를 진행하며 에이전트를 모니터링할 "인간 관리자"의 역할이 정의되어 있지 않습니다.',
      icon: <UserCheck className="h-5 w-5 text-red-400" />
    },
    {
      code: 'ERR_03: SILOED_DATA',
      title: '분절되어 흐르지 못하는 파편화 데이터',
      desc: '노션, 구글 드라이브, 사내 데이터베이스 등 기업의 중요 데이터가 파편화되어 있어 에이전트가 올바른 컨텍스트를 조회하지 못하고 엉뚱한 답을 냅니다.',
      icon: <Database className="h-5 w-5 text-red-400" />
    },
    {
      code: 'ERR_04: NO_VALIDATION',
      title: '출력 품질에 대한 실시간 검증 기준 부재',
      desc: 'AI 결과물이 90% 이상 일관되게 정답을 내는지 테스트 케이스가 전혀 없습니다. 한 번 잘못된 출력이 나오면 담당자가 불신하여 결국 사용을 중단합니다.',
      icon: <CheckSquare className="h-5 w-5 text-red-400" />
    }
  ];

  return (
    <section className="py-20 border-t border-hairline bg-canvas-soft/30" id="problems-section">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Title */}
        <div className="max-w-3xl mb-12 md:mb-16">
          <span className="font-mono text-xs text-red-400 uppercase tracking-wider block mb-2">
            02 // SYSTEM DIAGNOSTIC RUNTIME ERROR
          </span>
          <h2 className="text-3xl sm:text-4xl font-light text-ink-strong tracking-tight">
            왜 생성형 AI를 구독해도, <br />
            <span className="font-semibold text-red-400">팀의 실제 업무 효율은 그대로</span>일까요?
          </h2>
          <p className="mt-4 text-sm text-body leading-relaxed">
            도구를 몰라서가 아닙니다. 프롬프트를 못써서도 아닙니다. 
            진짜 비효율을 해결하려면, 업무 전후 단계를 분석하여 에이전트의 작동 흐름을 설계하고 
            이를 보완할 <strong>안정화 시스템</strong>을 함께 만들어야 합니다.
          </p>
        </div>

        {/* 4-Grid Diagnostic Error logs style */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {problems.map((prob, idx) => (
            <div 
              key={idx}
              className="rounded-lg border border-hairline bg-canvas p-6 flex flex-col justify-between hover:border-red-400/30 transition-all duration-300"
              id={`problem-card-${idx}`}
            >
              <div>
                {/* Header with terminal error code */}
                <div className="flex items-center justify-between mb-4 pb-3 border-b border-hairline/50">
                  <span className="font-mono text-xs text-red-400 font-medium tracking-wider flex items-center space-x-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-red-400 animate-pulse"></span>
                    <span>{prob.code}</span>
                  </span>
                  {prob.icon}
                </div>

                {/* Body copy */}
                <h3 className="text-lg font-semibold text-ink-strong mb-2">
                  {prob.title}
                </h3>
                <p className="text-sm text-body leading-relaxed font-light">
                  {prob.desc}
                </p>
              </div>

              {/* Console tip style footer */}
              <div className="mt-6 pt-3 border-t border-hairline/40 flex items-center justify-between text-[11px] font-mono text-mute">
                <span>REMEDY STATUS:</span>
                <span className="text-primary-green">연결 설계 후 자동 해결 가능</span>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Banner callout */}
        <div className="mt-12 rounded-lg border border-hairline bg-canvas-soft p-6 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="flex items-start space-x-4">
            <div className="mt-1 flex h-10 w-10 shrink-0 items-center justify-center rounded border border-primary-green/30 bg-primary-green/5 text-primary-green">
              <Terminal className="h-5 w-5" />
            </div>
            <div>
              <h4 className="text-sm font-semibold text-ink-strong">
                "강의로 끝내지 마세요. 업무 자동화 설계서가 필수적입니다."
              </h4>
              <p className="mt-1 text-xs text-mute leading-relaxed max-w-2xl">
                이 네 가지 문제를 단번에 진단하고 해결하는 것이 워크숍의 시작입니다. 
                단순히 API 사용법을 알려주는 교육이 아닌, 조직 내부의 데이터 수집, 검증, 연동 파이프라인 전반을 아우르는 솔루션을 가져가세요.
              </p>
            </div>
          </div>
          <a
            href="#contact-section"
            className="shrink-0 text-xs font-mono font-bold text-primary-green hover:text-primary-soft transition-colors tracking-wide flex items-center space-x-1 uppercase"
          >
            <span>진단 컨설팅 받아보기</span>
            <span>→</span>
          </a>
        </div>

      </div>
    </section>
  );
}
