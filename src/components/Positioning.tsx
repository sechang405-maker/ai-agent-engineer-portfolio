import { HelpCircle, CheckCircle, ChevronRight, Play, AlertTriangle } from 'lucide-react';

export default function Positioning() {
  const comparisonData = [
    {
      feature: '핵심 교육 목표',
      traditional: '유행하는 생성형 AI 툴과 프롬프트 입력법 학습',
      agentWay: '팀의 비효율적 업무 흐름을 자동화하는 에이전트 설계',
    },
    {
      feature: '최종 산출물',
      traditional: '실제 업무에 적용하기 어려운 일회성 챗봇/프롬프트',
      agentWay: '슬랙·노션·이메일 등 기존 업무 도구와 API가 결합된 실물 솔루션',
    },
    {
      feature: '데이터 다루기',
      traditional: '단순 복사 붙여넣기 및 일방적인 질문-답변 반복',
      agentWay: '조직 내부 데이터베이스, API, 사내 문서를 안전하게 연결하는 RAG 구조화',
    },
    {
      feature: '업무 지속성',
      traditional: '강사가 떠나면 아무도 쓰지 않고 도입이 흐지부지됨',
      agentWay: '실행 가능한 시나리오와 체크리스트로 자립 가능한 업무 자동화 체계 수립',
    },
  ];

  return (
    <section className="py-20 border-t border-hairline bg-canvas" id="positioning-section">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Section Eyebrow & Title */}
        <div className="mb-12 md:mb-16 text-center md:text-left">
          <span className="font-mono text-xs text-primary-green uppercase tracking-wider block mb-2">
            01 // CORE POSITIONING & DIFFERENCE
          </span>
          <h2 className="text-3xl sm:text-4xl font-light text-ink-strong tracking-tight">
            “프롬프트 비법”을 넘어, <br />
            <span className="font-semibold text-primary-green">업무에 작동하는 AI 에이전트</span>를 직접 설계합니다.
          </h2>
          <p className="mt-4 max-w-2xl text-sm text-body leading-relaxed">
            단순히 유행하는 도구를 나열하며 '이런 것도 된다'고 자랑하는 강의가 아닙니다. 
            현업의 복잡한 프로세스를 분석하고, 에이전트의 논리 단계를 명문화하여 <strong>실제 내 업무에 배포</strong>하는 것에 집중합니다.
          </p>
        </div>

        {/* 2-Column Focus Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {/* Traditional Way */}
          <div className="rounded-lg border border-hairline/80 bg-canvas-soft/40 p-6 sm:p-8 space-y-6">
            <div className="flex items-center space-x-3 text-red-400">
              <AlertTriangle className="h-5 w-5" />
              <span className="font-mono text-xs uppercase tracking-wider">기존 프롬프트 교육의 한계</span>
            </div>
            <h3 className="text-xl font-medium text-ink">
              강의를 들을 때는 알겠는데, <br />내 업무에 적용하려고 보면 막막한 이유
            </h3>
            <p className="text-sm text-mute leading-relaxed">
              "질문을 구체적으로 써라", "역할을 부여해라" 같은 프롬프트 작성 팁은 일회성 질문에는 유용하지만, 
              하루에 수십 번씩 반복되는 복잡한 부서별 프로세스를 해결해주지 못합니다. 
              명확한 데이터 수집 기준과 에이전트 설계서가 없기 때문입니다.
            </p>
            <div className="border-t border-hairline/40 pt-4 space-y-2.5">
              <div className="flex items-start space-x-2 text-xs text-mute">
                <span className="text-red-400">✕</span>
                <span>실무 툴(슬랙, 구글 시트)과의 연동성 부재</span>
              </div>
              <div className="flex items-start space-x-2 text-xs text-mute">
                <span className="text-red-400">✕</span>
                <span>에러 발생 시 대처할 수 없는 일방적 프롬프트 구조</span>
              </div>
              <div className="flex items-start space-x-2 text-xs text-mute">
                <span className="text-red-400">✕</span>
                <span>업무 프로세스 분석 없는 무조건적인 AI 대입</span>
              </div>
            </div>
          </div>

          {/* The Agent Engineer Way */}
          <div className="rounded-lg border border-primary-green/30 bg-primary-green/[0.02] p-6 sm:p-8 space-y-6 relative overflow-hidden">
            <div className="absolute top-0 right-0 h-24 w-24 -translate-y-6 translate-x-6 bg-primary-green/5 blur-xl"></div>
            
            <div className="flex items-center space-x-3 text-primary-green">
              <CheckCircle className="h-5 w-5" />
              <span className="font-mono text-xs uppercase tracking-wider">실전형 AI 에이전트 설계</span>
            </div>
            <h3 className="text-xl font-medium text-ink-strong">
              업무를 가장 잘 아는 리더와 실무자가 <br />동료 같은 에이전트를 직접 빌드하는 과정
            </h3>
            <p className="text-sm text-body leading-relaxed">
              현업 실무자가 AI 에이전트의 '중간 관리자'가 될 수 있도록 돕습니다. 
              요구 사항 정의부터 시작해 파이프라인 매핑, 검증 체크리스트 수립, API 도구 연동까지 
              조직 내부에 <strong>자립적인 자동화 개발 사이클</strong>을 구축합니다.
            </p>
            <div className="border-t border-primary-green/20 pt-4 space-y-2.5">
              <div className="flex items-start space-x-2 text-xs text-body">
                <span className="text-primary-green">✓</span>
                <span>실물 API 도구 및 메일·메신저 웹훅 자동화 완료</span>
              </div>
              <div className="flex items-start space-x-2 text-xs text-body">
                <span className="text-primary-green">✓</span>
                <span>성공율 95% 이상을 담보하는 다단계(Multi-step) 파이프라인 설계</span>
              </div>
              <div className="flex items-start space-x-2 text-xs text-body">
                <span className="text-primary-green">✓</span>
                <span>조직 내부의 사내 지식 기반(RAG) 안전한 구축 노하우</span>
              </div>
            </div>
          </div>
        </div>

        {/* Comparison Matrix Table */}
        <div className="rounded-lg border border-hairline bg-canvas-soft overflow-hidden">
          <div className="px-6 py-4 border-b border-hairline bg-canvas/60">
            <h4 className="font-mono text-xs text-mute uppercase tracking-widest">
              DETAILED COMPARISON MATRIX
            </h4>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="border-b border-hairline text-xs font-mono text-mute">
                  <th className="p-4 sm:p-6 w-1/4">비교 항목</th>
                  <th className="p-4 sm:p-6 w-3/8 text-red-400/80">일반 프롬프트 / 챗봇 특강</th>
                  <th className="p-4 sm:p-6 w-3/8 text-primary-green">실전형 AI 에이전트 컨설팅</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-hairline text-sm">
                {comparisonData.map((row, index) => (
                  <tr key={index} className="hover:bg-canvas/30 transition-colors">
                    <td className="p-4 sm:p-6 font-medium text-ink-strong">{row.feature}</td>
                    <td className="p-4 sm:p-6 text-mute line-clamp-3 sm:line-clamp-none">{row.traditional}</td>
                    <td className="p-4 sm:p-6 text-body font-normal">
                      <span className="inline-block h-1.5 w-1.5 rounded-full bg-primary-green mr-2 align-middle"></span>
                      {row.agentWay}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

      </div>
    </section>
  );
}
