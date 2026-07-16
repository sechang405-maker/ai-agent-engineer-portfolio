import { useState } from 'react';
import { Terminal, Shield, Check, FileCode, Play, Eye, Lightbulb, Workflow, Cpu, Rocket } from 'lucide-react';
import { FrameworkStep } from '../types';

export default function SignatureFramework() {
  const [activeStep, setActiveStep] = useState<number>(0);

  const steps: FrameworkStep[] = [
    {
      step: 'STEP_01',
      title: 'Understand (쉽게 이해하기)',
      engTitle: 'UNDERSTAND',
      description: '어려운 AI 알고리즘이나 수학적 용어는 배제합니다. 거대언어모델(LLM)이 왜 기존 검색 엔진과 다르고, 에이전트의 메모리와 도구 연결이 실제 어떤 원리로 일어나는지 일상 언어로 뼈대를 세워 이해합니다.',
      codeSnippet: `// 1. LLM의 기본 구조 파악 및 컨텍스트 이해
const llm = new CoreBrain({
  knowledgeCutoff: "2025-12",
  reasoningType: "System_2_Thinking",
  safetyGuards: true
});

llm.explainAIAgent({ language: "plain_korean" });
// Output: "에이전트는 뇌(LLM), 손발(API), 일기장(Memory)을 지닌 디지털 비서입니다."`,
      checklist: [
        '검색과 추론의 명확한 차이점 깨닫기',
        '토큰(Token)과 컨텍스트 창(Context Window)의 물리적 한계 이해',
        '에이전트가 도구(API)를 호출하는 구조적 원리 파악'
      ]
    },
    {
      step: 'STEP_02',
      title: 'Translate (내 업무로 번역하기)',
      engTitle: 'TRANSLATE',
      description: '가장 중요한 단계입니다. "내 이메일 정리", "시장 조사"처럼 추상적인 업무를 AI 에이전트가 판단하고 분기할 수 있는 구조화된 프레시스 및 가이드맵(Sequence Scheme)으로 철저하게 번역합니다.',
      codeSnippet: `// 2. 비정형 프로세스를 정형 논리 흐름으로 번역
const humanProcess = [
  "매주 월요일 파트너사 보고서 수집",
  "중요 지표만 엑셀에 취합 후 요약 메일 작성"
];

const agentWorkflow = translateToLogic(humanProcess);
console.log(agentWorkflow.getExecutionNodes());
// Output: [Trigger: Cron] -> [Action: FetchDocs] -> [Decision: ExtractKPI] -> [Action: SendMail]`,
      checklist: [
        '인간의 직관적 노하우를 명확한 If-Then-Else 논리로 해체',
        '데이터의 시작(Trigger)과 끝(Action)의 책임자 정의',
        '에이전트가 참고해야 할 사내 참조 문서(RAG 데이터) 선별'
      ]
    },
    {
      step: 'STEP_03',
      title: 'Build (직접 만들어보기)',
      engTitle: 'BUILD',
      description: '설계도를 손에 쥐었다면, 이제 코드 한 줄 또는 강력한 No-Code 자동화 도구(Make, Zapier) 화면 위에서 에이전트를 조립합니다. 실제 내 계정과 이메일, 슬랙을 연결해 실물 솔루션을 조립합니다.',
      codeSnippet: `// 3. 에이전트 인스턴스 조립 및 커스텀 프롬프트 탑재
const myAgency = new AIAgent({
  brain: "gemini-2.5-flash",
  instructions: loadTemplate("lead_summarizer_prompt.md"),
  memory: new ShortTermBuffer(),
  tools: [gmailTool, slackWebhook]
});

myAgency.initialize();
console.log("Agent Live on Port 3000.");`,
      checklist: [
        'API 키 발급 및 환경 변수(.env) 보안 안전 설정',
        '다단계 분기 처리를 위한 프롬프트 가이드라인(System Instruction) 주입',
        '이메일, 슬랙 웹훅 등 외부 서비스 연동 테스트'
      ]
    },
    {
      step: 'STEP_04',
      title: 'Validate (검증하고 개선하기)',
      engTitle: 'VALIDATE',
      description: '에이전트가 오작동하거나 엉뚱한 거짓말(Hallucination)을 내뱉지 않는지, 의도한 예외 처리가 작동하는지 5~10가지 가상 실데이터(Synthetic Data)를 주입하며 일관성을 타이트하게 검증합니다.',
      codeSnippet: `// 4. 오작동 방지 및 출력 안정화 검증 루틴 실행
const testCases = loadDataset("kpi_test_cases.json");
const validationResult = myAgency.runStressTest(testCases);

if (validationResult.hallucinationDetected) {
  myAgency.refineSystemPrompt({ reason: "Hallucination in node 3" });
}
console.log(\`Validation Accuracy: \${validationResult.score}%\`); // 98.5%`,
      checklist: [
        '출력값 검증 스키마(JSON Schema) 검증 활성화',
        '보안 위해 프롬프트 인젝션(Prompt Injection) 차단 필터 테스트',
        '에러 발생 시 인간의 개입(Human-in-the-Loop) 가이드 확립'
      ]
    },
    {
      step: 'STEP_05',
      title: 'Apply (현업 적용 계획 세우기)',
      engTitle: 'APPLY',
      description: '마지막으로, 완성된 에이전트 비서를 팀 전체가 거부감 없이 일상에 연동하는 플랜을 수립합니다. 사용 매뉴얼, 슬랙 채널 명명법, 주기적인 모니터링 주기를 수립해 업무 자동화를 뿌리내립니다.',
      codeSnippet: `// 5. 현업 적용 및 팀원들을 위한 인터페이스 배포
const teamApp = new SlackAppIntegration(myAgency);
teamApp.deployToChannel("operations-agent-lounge");

monitorPerformance({
  targetChannel: "operations-agent-lounge",
  logUsageMetrics: true
});
console.log("Production Rollout Complete. Monitoring Active.");`,
      checklist: [
        '비개발자 팀원들이 에이전트를 호출하기 위한 단일 통로(슬랙 등) 확보',
        '에이전트 사용 가이드라인 1페이지 핵심 매뉴얼 인쇄 배포',
        '자동화로 세이브된 시간을 핵심 업무로 전환하는 성과 지표 모니터링'
      ]
    }
  ];

  return (
    <section className="py-20 border-t border-hairline bg-canvas" id="framework-section">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Title */}
        <div className="mb-12 md:mb-16">
          <span className="font-mono text-xs text-primary-green uppercase tracking-wider block mb-2">
            05 // SIGNATURE TRANSLATION FRAMEWORK
          </span>
          <h2 className="text-3xl sm:text-4xl font-light text-ink-strong tracking-tight">
            조직의 AI 자립을 만드는 <br />
            <span className="font-semibold text-primary-green">5단계 실전 엔지니어링 방법론</span>
          </h2>
          <p className="mt-4 max-w-2xl text-sm text-body leading-relaxed">
            단발성 실습이나 단순 암기를 지양합니다. 스스로 업무를 발굴하고 설계하여, 
            지속 가능한 자동화를 배포하기 위해 이 5단계 프레임워크를 기반으로 모든 워크숍과 코칭이 진행됩니다.
          </p>
        </div>

        {/* Dynamic Framework Terminal Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Side: Steps Navigation (5 cols) */}
          <div className="lg:col-span-5 space-y-3">
            <div className="text-[10px] font-mono tracking-wider text-mute uppercase mb-2">
              METHOD PIPELINE EXECUTION
            </div>

            {steps.map((item, idx) => {
              const isActive = activeStep === idx;
              return (
                <button
                  key={item.step}
                  onClick={() => setActiveStep(idx)}
                  className={`w-full text-left flex items-center justify-between p-4 rounded border transition-all duration-200 cursor-pointer ${
                    isActive
                      ? 'bg-primary-green/5 border-primary-green text-ink-strong'
                      : 'bg-canvas-soft/50 border-hairline hover:bg-canvas-soft text-body'
                  }`}
                  id={`framework-btn-${idx}`}
                >
                  <div className="flex items-center space-x-4">
                    <span className={`font-mono text-xs ${isActive ? 'text-primary-green font-bold' : 'text-mute'}`}>
                      {item.step}
                    </span>
                    <div>
                      <h3 className={`text-sm font-semibold ${isActive ? 'text-ink-strong' : 'text-body'}`}>
                        {item.title}
                      </h3>
                    </div>
                  </div>

                  {isActive && (
                    <span className="flex h-2.5 w-2.5 items-center justify-center rounded-full bg-primary-green relative">
                      <span className="absolute -inset-1 rounded-full bg-primary-green/40 animate-ping"></span>
                    </span>
                  )}
                </button>
              );
            })}
          </div>

          {/* Right Side: Step Specification Console View (7 cols) */}
          <div className="lg:col-span-7 rounded-lg border border-hairline bg-canvas-soft overflow-hidden">
            {/* Console Header */}
            <div className="bg-canvas border-b border-hairline px-4 py-3 flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <Terminal className="h-4 w-4 text-primary-green" />
                <span className="font-mono text-xs text-mute uppercase tracking-widest">
                  SPECS::{steps[activeStep].engTitle}_STAGE
                </span>
              </div>
              <span className="font-mono text-[10px] text-mute">Status: Live Engine</span>
            </div>

            {/* Spec Body */}
            <div className="p-6 space-y-6">
              {/* Description */}
              <div className="space-y-2">
                <h4 className="font-mono text-xs text-mute uppercase tracking-wider">01 / STAGE DESCRIPTION</h4>
                <p className="text-sm text-ink leading-relaxed font-light">
                  {steps[activeStep].description}
                </p>
              </div>

              {/* Code Snippet Box */}
              <div className="space-y-2">
                <h4 className="font-mono text-xs text-mute uppercase tracking-wider">02 / CODE INTERFACE MOCKUP</h4>
                <div className="rounded border border-hairline/80 bg-canvas p-4 font-mono text-xs text-ink/90 overflow-x-auto leading-relaxed select-all">
                  <pre>{steps[activeStep].codeSnippet}</pre>
                </div>
              </div>

              {/* Implementation Checklist */}
              <div className="space-y-2">
                <h4 className="font-mono text-xs text-mute uppercase tracking-wider">03 / CRITICAL CHECKLIST</h4>
                <div className="grid grid-cols-1 gap-2.5 pt-1">
                  {steps[activeStep].checklist.map((item, cIdx) => (
                    <div key={cIdx} className="flex items-start space-x-2.5 text-xs text-body font-light">
                      <div className="mt-0.5 flex h-4.5 w-4.5 shrink-0 items-center justify-center rounded-full border border-primary-green/20 bg-primary-green/5 text-primary-green">
                        <Check className="h-3 w-3" />
                      </div>
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

            </div>

            {/* Console Footer */}
            <div className="bg-canvas/50 border-t border-hairline/60 px-6 py-3 flex items-center justify-between text-[11px] font-mono text-mute">
              <span>Next Stage: {steps[(activeStep + 1) % steps.length].engTitle}</span>
              <button 
                onClick={() => setActiveStep((activeStep + 1) % steps.length)}
                className="text-primary-soft hover:text-primary-green transition-colors flex items-center space-x-1"
                id="next-step-btn"
              >
                <span>RUN NEXT STEP</span>
                <span>→</span>
              </button>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
