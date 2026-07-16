import { BookOpen, Zap, Compass, User, CheckCircle2, ArrowRight } from 'lucide-react';
import { WorkshopProgram } from '../types';

interface ProgramsProps {
  onContactClick: (programName?: string) => void;
}

export default function Programs({ onContactClick }: ProgramsProps) {
  const programs: WorkshopProgram[] = [
    {
      id: 'pg_01',
      tag: 'INTRO',
      title: 'AI 에이전트 입문 워크숍',
      duration: '1일 (6시간) 과정',
      target: 'AI 에이전트의 작동 원리를 직관적으로 깨우치고 싶은 리더, 실무자, 기획자',
      description: '단순 프롬프트를 넘어 LLM 에이전트의 뇌(뇌신경망 작동 흐름), 메모리, 도구 사용 방식을 가상 시나리오를 통해 이해하고 기본적인 단일 자동화 에이전트 설계안을 작성합니다.',
      goals: [
        'AI 에이전트 핵심 메커니즘과 동작 파이프라인 정립',
        '인간의 문제 해결 과정을 에이전트 가이드로 논리 번역',
        '나만의 첫 번째 업무 파트너 에이전트 기획서 설계'
      ],
      deliverable: '내 업무에 적용 가능한 1차 AI 에이전트 시스템 기획서(Blueprint)'
    },
    {
      id: 'pg_02',
      tag: 'AUTOMATION',
      title: '업무 자동화 워크숍 (중급)',
      duration: '2일 (12시간) 과정',
      target: '반복 업무가 너무 많아 구글 시트, 이메일, 노션 등의 연결 자동화가 즉시 필요한 팀',
      description: '실제로 작동하는 API 툴(Make, Zapier, Webhook 등)을 활용해, 수집된 데이터를 에이전트로 가공하고 메일 발송이나 슬랙 보고까지 한 번에 이어지는 Multi-Step 프로세스를 완성합니다.',
      goals: [
        '기존 사용 중인 Saas 툴과 에이전트 실시간 동기화',
        '트리거-동작(Trigger-Action) 기반 다단계 자동화 설계',
        '에러 0%를 목표로 하는 데이터 필터 및 예외 처리 가이드'
      ],
      deliverable: '슬랙 / 구글 시트 / 지메일이 동기화된 실시간 AI 자동화 파이프라인 연동'
    },
    {
      id: 'pg_03',
      tag: 'ENTERPRISE',
      title: '조직 AI 전환 컨설팅 & 워크숍',
      duration: '4주 ~ 8주 중장기',
      target: '조직 전반의 생산성을 높이고, 팀원들이 스스로 에이전트를 만들 수 있는 인프라를 구축하려는 기업',
      description: '팀별 업무 진단을 바탕으로 핵심 비효율 지점을 찾아내고, 전용 RAG(사내 지식 데이터 연동) 에이전트를 프로토타이핑하며 임직원이 주도하는 AI 내재화 프로세스를 구축합니다.',
      goals: [
        '부서별(인사/영업/마케팅/개발) 자동화 가능 시나리오 개발',
        '민감한 사내 비밀 정보 유출 없는 보안 안전지대 AI 설계',
        '사내 AI 챔피언(전문가 리더) 육성 및 자립 운영 가이드'
      ],
      deliverable: '부서별 업무 자동화 가이드라인 + 맞춤형 AI 에이전트 프로토타입 3종'
    },
    {
      id: 'pg_04',
      tag: 'INDIVIDUAL',
      title: '개인 업무 에이전트 빌딩 코칭',
      duration: '1:1 맞춤형 4회차',
      target: '생성형 AI를 활발히 쓰고 있으나, 나만의 독립된 최고 조수를 완벽하게 만들어 일의 크기를 키우고 싶은 사업가/1인 전문가',
      description: '나의 비즈니스 고유 자산과 문서들을 연동해 최상의 답변을 얻어내고, 복잡한 업무(리서치, 보고서 초안, 분석 등)를 혼자서도 쾌속으로 해결하는 퍼스널 에이전트를 1:1로 코칭하여 완성합니다.',
      goals: [
        '개인 지식 정리(PKM) 및 옵시디언/노션 데이터 에이전트 통합',
        '맞춤 프롬프트 엔지니어링 딥 다이브 및 개인 도구 연동',
        '자동화된 콘텐츠 제작 또는 데이터 분석 봇 운영'
      ],
      deliverable: '개인 맞춤형 최적화 에이전트 + 비즈니스 실행 체크리스트'
    }
  ];

  return (
    <section className="py-20 border-t border-hairline bg-canvas" id="programs-section">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="font-mono text-xs text-primary-green uppercase tracking-wider block mb-2">
            03 // AGENT IMPLEMENTATION PROGRAMS
          </span>
          <h2 className="text-3xl sm:text-4xl font-light text-ink-strong tracking-tight">
            강의로 끝나지 않는, <br />
            <span className="font-semibold text-primary-green">실전 결과물 중심 워크숍 라인업</span>
          </h2>
          <p className="mt-4 text-sm text-body leading-relaxed">
            모든 과정은 이론 설명 중심이 아닙니다. 직접 부딪히고, 설계도를 그리고, 
            가장 널리 쓰이는 강력한 에이전트 구조를 여러분의 화면에서 완성해냅니다.
          </p>
        </div>

        {/* Programs Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {programs.map((prog, idx) => {
            return (
              <div
                key={prog.id}
                className="rounded-lg border border-hairline bg-canvas-soft p-6 sm:p-8 flex flex-col justify-between hover:border-primary-green/30 transition-all duration-300 relative overflow-hidden group"
                id={`program-card-${prog.id}`}
              >
                {/* Visual accent top line on hover */}
                <div className="absolute top-0 left-0 w-full h-[2px] bg-primary-green scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></div>

                <div>
                  {/* Tag and Duration Header */}
                  <div className="flex items-center justify-between mb-4 pb-2 border-b border-hairline/40">
                    <span className="font-mono text-xs font-bold text-primary-green tracking-widest bg-primary-green/5 border border-primary-green/20 px-2.5 py-0.5 rounded">
                      {prog.tag}
                    </span>
                    <span className="font-mono text-xs text-mute">{prog.duration}</span>
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-semibold text-ink-strong mb-3">
                    {prog.title}
                  </h3>

                  {/* Description */}
                  <p className="text-sm text-body font-light leading-relaxed mb-6">
                    {prog.description}
                  </p>

                  {/* Key Fields: Target, Goals, Deliverable */}
                  <div className="space-y-4 pt-4 border-t border-hairline/40">
                    <div>
                      <span className="font-mono text-[11px] text-mute uppercase tracking-wider block mb-1">
                        👥 대상 (TARGET)
                      </span>
                      <p className="text-xs text-ink/90 font-light leading-relaxed">
                        {prog.target}
                      </p>
                    </div>

                    <div>
                      <span className="font-mono text-[11px] text-mute uppercase tracking-wider block mb-1.5">
                        🎯 핵심 목표 (KEY GOALS)
                      </span>
                      <ul className="space-y-1">
                        {prog.goals.map((g, gIdx) => (
                          <li key={gIdx} className="flex items-start space-x-2 text-xs text-body font-light">
                            <span className="text-primary-green mt-0.5">✓</span>
                            <span>{g}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="bg-canvas/50 p-3 rounded border border-hairline/40">
                      <span className="font-mono text-[10px] text-primary-soft uppercase tracking-wider block mb-1">
                        📦 최종 산출물 (DELIVERABLE)
                      </span>
                      <p className="text-xs text-ink-strong font-mono font-medium">
                        {prog.deliverable}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Footer Action */}
                <div className="mt-8 pt-4 border-t border-hairline/40 flex items-center justify-between">
                  <span className="text-[11px] font-mono text-mute">
                    CONTACT_FOR_DETAILS
                  </span>
                  <button
                    onClick={() => onContactClick(prog.title)}
                    className="flex items-center space-x-1.5 rounded bg-canvas-soft border border-hairline px-4 py-2 text-xs font-semibold text-ink hover:text-primary-green hover:border-primary-green/60 transition-all duration-200"
                    id={`request-btn-${prog.id}`}
                  >
                    <span>상세 문의하기</span>
                    <ArrowRight className="h-3 w-3" />
                  </button>
                </div>

              </div>
            );
          })}
        </div>

        {/* Section Footnote Callout */}
        <div className="mt-12 text-center">
          <p className="text-xs text-mute">
            * 모든 워크숍은 고객사의 인프라(Slack, Jandi, MS Teams, Google Workspace) 환경에 직접 맞춤형으로 튜닝되어 제공됩니다.
          </p>
        </div>

      </div>
    </section>
  );
}
