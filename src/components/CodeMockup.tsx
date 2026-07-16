import { useState, useEffect, useRef, ReactNode } from 'react';
import { Play, RotateCcw, Terminal, ArrowRight, CheckCircle2, ChevronRight, Settings, Cpu, Layers, ClipboardCheck, Users } from 'lucide-react';

interface LogLine {
  text: string;
  type: 'info' | 'success' | 'command' | 'system';
  timestamp: string;
}

interface WorkflowStep {
  name: string;
  func: string;
  description: string;
  icon: ReactNode;
  outputs: string[];
  code: string;
}

export default function CodeMockup() {
  const [activeStep, setActiveStep] = useState<number>(-1);
  const [isRunning, setIsRunning] = useState<boolean>(false);
  const [logs, setLogs] = useState<LogLine[]>([
    { text: 'system_initialized: ready to synthesize agent pipelines.', type: 'system', timestamp: '22:34:42' },
    { text: 'Click [RUN PIPELINE] to execute the automation dry-run.', type: 'info', timestamp: '22:34:42' }
  ]);
  const [selectedNode, setSelectedNode] = useState<number>(0);
  const terminalScrollRef = useRef<HTMLDivElement>(null);

  const steps: WorkflowStep[] = [
    {
      name: '목표 정의',
      func: 'define_goal()',
      description: '팀의 비효율 병목 지점을 찾고, 에이전트의 구체적 목표와 핵심 성과 지표(KPI)를 설정합니다.',
      icon: <Settings className="h-4 w-4 text-primary-green" />,
      outputs: ['🎯 target_process: HR_resume_screening', '⏱️ current_time_spent: 12h/week', '📈 goal_reduction: 80%'],
      code: `def define_goal():
    process = find_bottleneck("HR_resume_screening")
    metrics = {
        "metric": "time_spent",
        "before": "12h/week",
        "target": "2h/week"
    }
    return AgentGoal(process, metrics)`
    },
    {
      name: '워크플로우 매핑',
      func: 'map_workflow()',
      description: '인간의 판단 기준과 데이터 흐름을 명문화하여 AI 에이전트가 이해할 수 있는 단계로 구조화합니다.',
      icon: <Layers className="h-4 w-4 text-primary-green" />,
      outputs: ['📋 schema: resume_evaluation_matrix', '🔍 decision_nodes: 3_logical_steps'],
      code: `def map_workflow(goal):
    # 인간의 판단 가이드를 구조화된 스키마로 매핑
    matrix = load_evaluation_matrix("screening_v2.json")
    pipeline = Pipeline()
    pipeline.add_step("ParseResume", type="OCR_LLM")
    pipeline.add_step("EvaluateScore", type="DecisionTree")
    pipeline.add_step("WriteSummary", type="StructuredOutput")
    return pipeline`
    },
    {
      name: '에이전트 구축',
      func: 'build_agent()',
      description: '설계서 기반으로 적절한 거대언어모델(LLM)과 메모리, 도구를 결합하여 전용 에이전트를 프로토타이핑합니다.',
      icon: <Cpu className="h-4 w-4 text-primary-green" />,
      outputs: ['⚙️ model: gemini-2.5-flash', '🛠️ tools: [PDF_Extractor, Mail_Sender]', '🧠 memory: WindowedBuffer'],
      code: `def build_agent(pipeline):
    agent = GoogleGenAIAgent(
        model="gemini-2.5-flash",
        system_instruction=pipeline.get_prompt_blueprint(),
        tools=[PDF_Extractor(), Mail_Sender()],
        memory=WindowedBufferMemory(k=5)
    )
    return agent`
    },
    {
      name: '산출물 검증',
      func: 'validate_output()',
      description: '실제 데이터를 넣어 출력의 일관성, 편향성, 오류율을 에이전트 체크리스트를 통해 지속 평가합니다.',
      icon: <ClipboardCheck className="h-4 w-4 text-primary-green" />,
      outputs: ['✅ test_cases: 50_synthetic_resumes', '📊 accuracy: 98.2%', '⚠️ exception_fallback: trigger_human_review'],
      code: `def validate_output(agent):
    test_suite = Dataset.load("test_resumes.json")
    results = agent.run_batch(test_suite)
    
    # 평가 매트릭스 검증
    accuracy = evaluate_accuracy(results, test_suite.ground_truth)
    if accuracy < 0.95:
        raise ValueError("Accuracy threshold failed")
    return ValidationReport(accuracy=accuracy)`
    },
    {
      name: '현업 적용',
      func: 'apply_to_team()',
      description: '조직 구성원들이 별도의 학습 없이 슬랙, 잔디, 노션 등 기존 업무 도구에서 바로 사용할 수 있게 연동합니다.',
      icon: <Users className="h-4 w-4 text-primary-green" />,
      outputs: ['⚡ integration: Slack_App', '👥 active_users: HR_Team', '💼 monthly_hours_saved: 40h'],
      code: `def apply_to_team(agent):
    slack_bot = SlackIntegration(agent)
    slack_bot.listen(channel="hr-agent-screening")
    
    # 텔레메트리 대시보드 연동
    analytics = register_telemetry(slack_bot)
    return f"Deployment Complete: {analytics.status}"`
    }
  ];

  // Auto scroll terminal
  useEffect(() => {
    const terminal = terminalScrollRef.current;
    if (terminal) {
      terminal.scrollTop = terminal.scrollHeight;
    }
  }, [logs]);

  const addLog = (text: string, type: 'info' | 'success' | 'command' | 'system') => {
    const time = new Date().toLocaleTimeString('ko-KR', { hour12: false });
    setLogs(prev => [...prev, { text, type, timestamp: time }]);
  };

  const runPipeline = async () => {
    if (isRunning) return;
    setIsRunning(true);
    setActiveStep(0);
    setSelectedNode(0);
    setLogs([]);

    const runStep = (index: number): Promise<void> => {
      return new Promise((resolve) => {
        const step = steps[index];
        setActiveStep(index);
        setSelectedNode(index);

        addLog(`Executing: ${step.func}...`, 'command');
        
        setTimeout(() => {
          addLog(`  ↳ Success: ${step.name} 완료`, 'success');
          step.outputs.forEach(out => {
            addLog(`    ${out}`, 'info');
          });
          
          if (index < steps.length - 1) {
            resolve(runStep(index + 1));
          } else {
            addLog('==============================================', 'system');
            addLog('🎉 PIPELINE EXECUTION SUCCESSFUL!', 'success');
            addLog('AI 에이전트 시스템이 정상적으로 배포 및 작동 중입니다.', 'info');
            setIsRunning(false);
            setActiveStep(-1);
            resolve();
          }
        }, 1200);
      });
    };

    addLog('🚀 Starting Agent Integration Pipeline...', 'system');
    await runStep(0);
  };

  const resetPipeline = () => {
    setActiveStep(-1);
    setSelectedNode(0);
    setIsRunning(false);
    setLogs([
      { text: 'system_initialized: ready to synthesize agent pipelines.', type: 'system', timestamp: '22:34:42' },
      { text: 'Click [RUN PIPELINE] to execute the automation dry-run.', type: 'info', timestamp: '22:34:42' }
    ]);
  };

  return (
    <div className="w-full rounded-lg border border-hairline bg-canvas-soft overflow-hidden" id="agent-pipeline-mockup">
      {/* Title bar */}
      <div className="flex items-center justify-between border-b border-hairline bg-canvas px-4 py-3">
        <div className="flex items-center space-x-2">
          <div className="flex space-x-1.5">
            <span className="h-3 w-3 rounded-full bg-red-500/80"></span>
            <span className="h-3 w-3 rounded-full bg-yellow-500/80"></span>
            <span className="h-3 w-3 rounded-full bg-green-500/80"></span>
          </div>
          <span className="font-mono text-xs text-mute ml-2">agent_core_runner.py</span>
        </div>
        <div className="flex space-x-2">
          {!isRunning ? (
            <button
              onClick={runPipeline}
              className="flex items-center space-x-1.5 rounded bg-primary-green/10 border border-primary-green/30 px-2.5 py-1 text-xs font-semibold text-primary-green hover:bg-primary-green/20 transition-colors"
              id="run-pipeline-btn"
            >
              <Play className="h-3 w-3 fill-primary-green" />
              <span>RUN PIPELINE</span>
            </button>
          ) : (
            <div className="flex items-center space-x-1.5 rounded border border-primary-green/20 bg-primary-green/5 px-2.5 py-1 text-xs font-semibold text-primary-green">
              <span className="h-2 w-2 rounded-full bg-primary-green animate-pulse"></span>
              <span>EXECUTING...</span>
            </div>
          )}
          <button
            onClick={resetPipeline}
            disabled={isRunning}
            className="flex items-center justify-center rounded border border-hairline p-1 text-mute hover:text-ink disabled:opacity-50"
            title="초기화"
            id="reset-pipeline-btn"
          >
            <RotateCcw className="h-3.5 w-3.5" />
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 min-h-[380px]">
        {/* Left: Workflow Nodes (5 cols) */}
        <div className="p-4 border-b lg:border-b-0 lg:border-r border-hairline lg:col-span-5 flex flex-col justify-between">
          <div className="space-y-2">
            <div className="text-[10px] font-mono tracking-widest text-mute uppercase mb-3">
              PIPELINE STRUCTURE
            </div>
            
            {steps.map((step, idx) => {
              const isActive = activeStep === idx;
              const isSelected = selectedNode === idx;
              return (
                <div
                  key={idx}
                  onClick={() => !isRunning && setSelectedNode(idx)}
                  className={`relative flex items-center justify-between p-3 rounded border transition-all duration-200 cursor-pointer ${
                    isActive 
                      ? 'bg-primary-green/5 border-primary-green' 
                      : isSelected 
                        ? 'bg-canvas border-mute/50' 
                        : 'bg-canvas/40 border-hairline/60 hover:border-hairline hover:bg-canvas/60'
                  }`}
                  id={`workflow-node-${idx}`}
                >
                  <div className="flex items-center space-x-3">
                    <div className={`flex h-7 w-7 items-center justify-center rounded-full border text-xs font-mono ${
                      isActive 
                        ? 'border-primary-green bg-primary-green/10 text-primary-green font-bold' 
                        : 'border-hairline bg-canvas-soft text-mute'
                    }`}>
                      0{idx + 1}
                    </div>
                    <div>
                      <div className="flex items-center space-x-1.5">
                        <span className={`text-xs font-semibold ${isActive || isSelected ? 'text-ink-strong' : 'text-body'}`}>
                          {step.name}
                        </span>
                        {isActive && (
                          <span className="h-1.5 w-1.5 rounded-full bg-primary-green animate-ping"></span>
                        )}
                      </div>
                      <span className="font-mono text-[10px] text-mute block mt-0.5">
                        {step.func}
                      </span>
                    </div>
                  </div>

                  <div className="flex items-center">
                    {idx < steps.length - 1 && (
                      <div className="absolute left-[29px] -bottom-[12px] h-[12px] w-[1px] bg-hairline z-10 hidden lg:block"></div>
                    )}
                    <ChevronRight className={`h-3.5 w-3.5 ${isSelected ? 'text-primary-green' : 'text-mute'}`} />
                  </div>
                </div>
              );
            })}
          </div>

          <div className="mt-4 pt-3 border-t border-hairline/60">
            <div className="flex items-center justify-between text-[11px] font-mono text-mute">
              <span>Framework Target</span>
              <span className="text-primary-green">Result-Oriented AI</span>
            </div>
          </div>
        </div>

        {/* Right Content View: Terminal & Code Details (7 cols) */}
        <div className="lg:col-span-7 flex flex-col bg-canvas">
          {/* Node detail display & Code snippet */}
          <div className="p-4 border-b border-hairline flex-1">
            <div className="flex items-center space-x-2 mb-2">
              {steps[selectedNode].icon}
              <span className="text-xs font-mono font-bold text-primary-green">
                {steps[selectedNode].func}
              </span>
            </div>
            <p className="text-xs text-body leading-relaxed mb-4">
              {steps[selectedNode].description}
            </p>

            {/* Micro IDE code view */}
            <div className="rounded border border-hairline bg-canvas-soft p-3">
              <div className="flex items-center justify-between text-[10px] font-mono text-mute pb-1.5 mb-2 border-b border-hairline/50">
                <span>python</span>
                <span>source_code.py</span>
              </div>
              <pre className="font-mono text-[11px] text-ink/90 overflow-x-auto leading-relaxed select-all">
                <code>{steps[selectedNode].code}</code>
              </pre>
            </div>
          </div>

          {/* Real-time Terminal Log Feed */}
          <div ref={terminalScrollRef} className="h-[140px] bg-canvas p-3 font-mono text-xs overflow-y-auto border-t border-hairline flex flex-col justify-between">
            <div className="space-y-1">
              <div className="text-[10px] text-mute tracking-wider uppercase border-b border-hairline/40 pb-1 mb-1.5 flex items-center justify-between">
                <span className="flex items-center space-x-1">
                  <Terminal className="h-3 w-3" />
                  <span>OUTPUT CONSOLE</span>
                </span>
                <span className="text-[9px]">UTC +9h</span>
              </div>
              
              {logs.map((log, lIdx) => {
                let colorClass = 'text-body';
                if (log.type === 'success') colorClass = 'text-primary-green font-semibold';
                if (log.type === 'command') colorClass = 'text-primary-soft';
                if (log.type === 'system') colorClass = 'text-mute';

                return (
                  <div key={lIdx} className="flex items-start space-x-2 leading-relaxed">
                    <span className="text-[10px] text-mute select-none">[{log.timestamp}]</span>
                    <span className={`text-[11px] ${colorClass}`}>{log.text}</span>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
