import { Users, Award, ShieldCheck, Quote, ChevronRight, Terminal } from 'lucide-react';
import { CaseStudy } from '../types';

export default function Proof() {
  const stats = [
    { value: '45+', label: '누적 교육 기업 및 조직' },
    { value: '180+', label: '실제 설계 및 배포 에이전트' },
    { value: '42시간', label: '평균 팀원별 월 절감 시간' },
    { value: '9.8 / 10', label: '워크숍 만족도 평점' }
  ];

  const clientLogos = [
    '테크 컴퍼니 A', '스마트 물류 B', 'HR 매니지먼트 C', '바이오 벤처 D', '제조 엔지니어링 E', '크리에이티브 스튜디오 F'
  ];

  const cases: CaseStudy[] = [
    {
      id: 'cs_01',
      client: 'HR 매니지먼트 C사',
      category: '인사 이력서 분류 & 평가 자동화',
      period: '2주 구축',
      problem: '매주 500개 이상의 이력서가 들어오나, 전담 인력 2명이 주당 15시간 이상을 단순 오타 및 기본 자격 요건 스크리닝에 허비함.',
      solution: 'PDF 텍스트를 추출한 뒤, 인재 평가 평가표(Evaluation Matrix) JSON 스키마를 기준으로 지원서를 3단계 평가 및 3줄 요약하여 슬랙 채널로 실시간 알림을 보내주는 에이전트 구축.',
      impact: [
        '주당 이력서 검토 시간 15시간 → 2.5시간으로 단축 (83% 세이브)',
        '단순 오기재 누락률 0% 달성',
        '인간 면접관의 2차 평가 일치도 96.2% 도달'
      ]
    },
    {
      id: 'cs_02',
      client: '스마트 물류 B사',
      category: '주문 발주서 예외 처리 및 알림',
      period: '3주 구축',
      problem: '각 거래처마다 제각각의 이메일 형식과 첨부파일(PDF, EXCEL, PNG 이미지)로 발주를 보내어, 담당자가 일일이 수동 확인하여 ERP 시스템에 수기 입력함.',
      solution: '거래처 이메일 수신 시 첨부파일을 판독하여 품목, 수량, 단가를 표준 JSON으로 포맷팅하고, 단가가 맞지 않거나 누락이 있는 예외 케이스만 담당자에게 이메일로 컨펌 요청하는 안심 에이전트 설계.',
      impact: [
        '단순 입력 업무의 92% 완전 자동화',
        '거래처 발주 오류 인지 시간 4.5시간 → 5분 이내 즉각 인지',
        'ERP 수기 오입력으로 인한 물류 반품 비용 월 400만 원 이상 절감'
      ]
    }
  ];

  const testimonials = [
    {
      quote: "단순히 API 사용법이나 프롬프트를 나열하는 강의가 아닙니다. 우리 회사 데이터 구조를 들여다보고 슬랙과 구글 시트를 연동하여 바로 다음 날부터 작동하는 에이전트를 조립해냈습니다. 교육 기획 담당자로서 가장 뿌듯한 지출이었습니다.",
      author: "김지민 본부장",
      company: "HR 매니지먼트 C사 교육 기획 담당"
    },
    {
      quote: "AI로 무엇을 해야 할지 막막했던 임원진들이 하루 워크숍을 통해 각 부서별 업무에 맞춤형 에이전트 기획서를 직접 그려냈습니다. 기술을 모르는 현업 리더들의 언어로 완벽히 번역해서 설명해준 점이 가장 강력했습니다.",
      author: "이동혁 대표",
      company: "스마트 물류 B사 창업자"
    }
  ];

  return (
    <section className="py-20 border-t border-hairline bg-canvas-soft/30" id="proof-section">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Title */}
        <div className="mb-12 md:mb-16">
          <span className="font-mono text-xs text-primary-green uppercase tracking-wider block mb-2">
            06 // PROVEN METRICS & CASE STUDIES
          </span>
          <h2 className="text-3xl sm:text-4xl font-light text-ink-strong tracking-tight">
            조직의 생산성 변화로 증명하는 <br />
            <span className="font-semibold text-primary-green">실행 데이터와 성공 사례</span>
          </h2>
          <p className="mt-4 max-w-2xl text-sm text-body leading-relaxed">
            과장된 대담보다 숫자로 증명합니다. 
            다양한 기업들과 함께하며 업무 비효율을 걷어내고 에이전트 배포의 기틀을 마련했습니다.
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {stats.map((st, sIdx) => (
            <div 
              key={sIdx}
              className="rounded border border-hairline bg-canvas p-6 flex flex-col justify-between"
              id={`stat-card-${sIdx}`}
            >
              <span className="font-mono text-3xl sm:text-4xl font-semibold text-primary-green tracking-tight">
                {st.value}
              </span>
              <span className="text-xs text-mute mt-2 font-mono uppercase tracking-wider">
                {st.label}
              </span>
            </div>
          ))}
        </div>

        {/* Client Logos Board */}
        <div className="mb-20">
          <div className="text-center mb-6">
            <span className="font-mono text-[10px] text-mute uppercase tracking-widest block">
              PARTNERED ORGANIZATIONS // TRUSTED BY
            </span>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
            {clientLogos.map((logo, lIdx) => (
              <div 
                key={lIdx}
                className="rounded border border-hairline/60 bg-canvas/40 px-4 py-3 flex items-center justify-center text-xs text-mute font-medium text-center"
              >
                {logo}
              </div>
            ))}
          </div>
        </div>

        {/* Case Studies Header */}
        <div className="mb-8 pb-3 border-b border-hairline/60 flex items-center justify-between">
          <span className="font-mono text-xs text-mute uppercase tracking-widest">
            FEATURED USE-CASE ARCHIVE
          </span>
          <span className="text-xs text-primary-green font-mono">2 PROJECTS ARCHIVED</span>
        </div>

        {/* Case Studies Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          {cases.map((cs) => (
            <div 
              key={cs.id}
              className="rounded-lg border border-hairline bg-canvas p-6 sm:p-8 flex flex-col justify-between hover:border-mute transition-colors"
              id={`case-card-${cs.id}`}
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between text-xs font-mono">
                  <span className="text-primary-soft font-semibold">{cs.client}</span>
                  <span className="text-mute">{cs.period}</span>
                </div>

                <h3 className="text-lg font-semibold text-ink-strong border-b border-hairline/40 pb-2">
                  {cs.category}
                </h3>

                <div className="space-y-3">
                  <div>
                    <span className="font-mono text-[10px] text-red-400 uppercase tracking-wider block mb-1">
                      [PROBLEM] 도입 전 병목
                    </span>
                    <p className="text-xs text-mute leading-relaxed font-light">
                      {cs.problem}
                    </p>
                  </div>

                  <div>
                    <span className="font-mono text-[10px] text-primary-green uppercase tracking-wider block mb-1">
                      [SOLUTION] 에이전트 설계안
                    </span>
                    <p className="text-xs text-body leading-relaxed font-light">
                      {cs.solution}
                    </p>
                  </div>
                </div>
              </div>

              {/* Impact / Results Box */}
              <div className="mt-6 pt-4 border-t border-hairline/40 bg-canvas-soft/40 p-4 rounded border border-hairline/50">
                <span className="font-mono text-[10px] text-primary-soft uppercase tracking-wider block mb-2">
                  📈 비즈니스 실질 영향 (IMPACT)
                </span>
                <ul className="space-y-1.5">
                  {cs.impact.map((imp, impIdx) => (
                    <li key={impIdx} className="flex items-start space-x-2 text-xs text-ink">
                      <span className="text-primary-green font-semibold mt-0.5">↳</span>
                      <span>{imp}</span>
                    </li>
                  ))}
                </ul>
              </div>

            </div>
          ))}
        </div>

        {/* Client Testimonials Quote Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-4">
          {testimonials.map((test, tIdx) => (
            <div 
              key={tIdx}
              className="rounded border border-hairline/80 bg-canvas-soft/20 p-6 flex flex-col justify-between relative"
              id={`testimonial-${tIdx}`}
            >
              <Quote className="absolute top-4 right-4 h-8 w-8 text-hairline/30 rotate-180" />
              <p className="text-sm text-body leading-relaxed italic font-light pr-6 mb-6">
                "{test.quote}"
              </p>
              <div className="flex items-center space-x-3 pt-3 border-t border-hairline/40">
                <div className="h-1.5 w-1.5 rounded-full bg-primary-green"></div>
                <div>
                  <h4 className="text-xs font-semibold text-ink-strong">{test.author}</h4>
                  <p className="text-[11px] text-mute font-mono">{test.company}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
