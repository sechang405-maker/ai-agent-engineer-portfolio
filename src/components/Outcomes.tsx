import { CheckSquare, ArrowRight, ShieldCheck, Download, Code, Layers } from 'lucide-react';
import { DeliverableItem } from '../types';

export default function Outcomes() {
  const deliverables: DeliverableItem[] = [
    {
      id: 'dl_01',
      category: 'Process Mapping',
      title: '업무 자동화 시나리오 흐름도',
      description: '인간의 판단 조건과 데이터 흐름을 노드 구조로 가시화한 흐름도입니다. 어떤 조건에서 어떤 도구가 작동해야 하는지 한눈에 보입니다.',
      format: 'Mermaid.js / Miro Map'
    },
    {
      id: 'dl_02',
      category: 'Agent Blueprint',
      title: 'AI 에이전트 상세 설계서',
      description: '선택할 최적의 모델(LLM), 시스템 프롬프트(System Instruction), 연동할 도구(Tool Specs), 메모리 크기가 정의된 종합 구축 설계서입니다.',
      format: 'JSON Schema / Markdown Document'
    },
    {
      id: 'dl_03',
      category: 'Process Redesign',
      title: '업무 프로세스 재설계안',
      description: '에이전트가 도입된 후 바뀔 팀원들의 업무 역할(R&R)과 업무 수행 방식을 새롭게 구조화하여 최적의 효율을 내는 매뉴얼입니다.',
      format: 'PDF Manual / Slack Guidebook'
    },
    {
      id: 'dl_04',
      category: 'Code Blueprint',
      title: '실제 구동 가능한 프로토타입',
      description: '현업 담당자가 즉시 자신의 화면에서 데이터를 넣고 테스트할 수 있도록 연동된 API 자동화 링크 또는 프로토타입 챗봇 데모입니다.',
      format: 'Make Blueprint / Web App Demo'
    },
    {
      id: 'dl_05',
      category: 'Safety & Quality',
      title: '에이전트 실행 및 안심 체크리스트',
      description: 'AI의 잘못된 답변(Hallucination), 보안 위반 사항, 데이터 누수를 방지하기 위해 실무자가 운영 중에 확인해야 할 10가지 자가 검증 항목입니다.',
      format: 'Notion Checklist / Excel Format'
    },
    {
      id: 'dl_06',
      category: 'Deployment Plan',
      title: '부서별 현업 적용 로드맵',
      description: '임직원들이 가벼운 파일럿 테스트를 거쳐 일상 업무에 완전히 내재화하고 생산성 지표를 측정하는 4단계 전환 스케줄러입니다.',
      format: 'Interactive Gantt Chart / Timeline'
    }
  ];

  return (
    <section className="py-20 border-t border-hairline bg-canvas-soft/20" id="outcomes-section">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 md:mb-16">
          <div>
            <span className="font-mono text-xs text-primary-green uppercase tracking-wider block mb-2">
              04 // WORKSHOP DELIVERABLES & ARTIFACTS
            </span>
            <h2 className="text-3xl sm:text-4xl font-light text-ink-strong tracking-tight">
              워크숍 직후 손에 쥐게 될 <br />
              <span className="font-semibold text-primary-green">6대 실물 산출물 스펙</span>
            </h2>
            <p className="mt-4 max-w-2xl text-sm text-body leading-relaxed">
              기분 좋은 배움에서 끝나지 않습니다. 사무실로 돌아가 즉시 전파하고, 
              바로 현업 시스템에 업로드하여 에이전트를 돌릴 수 있는 실제 결과물을 설계하고 전달합니다.
            </p>
          </div>

          <div className="flex items-center space-x-2 text-xs font-mono text-mute border border-hairline/60 bg-canvas px-4 py-2.5 rounded">
            <span className="h-2 w-2 rounded-full bg-primary-green"></span>
            <span>All Artifacts: Production Ready</span>
          </div>
        </div>

        {/* Outcomes Checklist-Table Combination */}
        <div className="border border-hairline bg-canvas rounded-lg overflow-hidden">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-4 p-4 border-b border-hairline bg-canvas-soft/80 font-mono text-xs text-mute uppercase tracking-wider hidden md:grid">
            <div className="col-span-3">분류 (Category)</div>
            <div className="col-span-4">산출물 명칭 (Artifact Name)</div>
            <div className="col-span-3">설명 및 내용 (Specification)</div>
            <div className="col-span-2 text-right">최종 포맷 (Output Format)</div>
          </div>

          <div className="divide-y divide-hairline">
            {deliverables.map((item, index) => (
              <div 
                key={item.id}
                className="grid grid-cols-1 md:grid-cols-12 gap-4 p-5 sm:p-6 items-start hover:bg-canvas-soft/30 transition-all duration-200"
                id={`deliverable-row-${item.id}`}
              >
                {/* Category Mobile/Desktop */}
                <div className="col-span-3 flex items-center space-x-2.5">
                  <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full border border-primary-green/30 bg-primary-green/5 text-primary-green">
                    <span className="font-mono text-[10px]">0{index + 1}</span>
                  </div>
                  <div>
                    <span className="font-mono text-[11px] text-mute uppercase tracking-widest block md:hidden">
                      CATEGORY
                    </span>
                    <span className="font-mono text-xs text-primary-soft font-semibold">
                      {item.category}
                    </span>
                  </div>
                </div>

                {/* Title */}
                <div className="col-span-4">
                  <span className="font-mono text-[11px] text-mute uppercase tracking-widest block md:hidden mb-1">
                    ARTIFACT NAME
                  </span>
                  <h3 className="text-base font-semibold text-ink-strong flex items-center space-x-2">
                    <span>{item.title}</span>
                  </h3>
                </div>

                {/* Description */}
                <div className="col-span-3">
                  <span className="font-mono text-[11px] text-mute uppercase tracking-widest block md:hidden mb-1">
                    SPECIFICATION
                  </span>
                  <p className="text-sm text-body leading-relaxed font-light">
                    {item.description}
                  </p>
                </div>

                {/* Output Format */}
                <div className="col-span-2 md:text-right">
                  <span className="font-mono text-[11px] text-mute uppercase tracking-widest block md:hidden mb-1">
                    OUTPUT FORMAT
                  </span>
                  <span className="inline-block font-mono text-[11px] text-ink-strong bg-canvas-soft border border-hairline px-2.5 py-1 rounded">
                    {item.format}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Deliverables Assurance Banner */}
        <div className="mt-12 rounded-lg border border-primary-green/20 bg-primary-green/[0.01] p-6 text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-primary-green/10 text-primary-green">
            <ShieldCheck className="h-5 w-5" />
          </div>
          <h3 className="text-base font-semibold text-ink-strong">
            "가장 이상적인 포맷으로 소통합니다."
          </h3>
          <p className="text-xs text-mute leading-relaxed">
            모든 템플릿과 결과물은 복잡한 개발 언어로 소통하지 않습니다. 
            현업 마케터, HR담당자, 재무담당자도 바로 이해하고 복사해 붙여넣을 수 있는 정돈된 가이드 형식으로 제공됩니다.
          </p>
        </div>

      </div>
    </section>
  );
}
