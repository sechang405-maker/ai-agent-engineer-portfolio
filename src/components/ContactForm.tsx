import { useState, useEffect, FormEvent, MouseEvent } from 'react';
import { Send, Mail, CheckCircle2, Terminal, HelpCircle, Loader2, ClipboardCheck, Trash2 } from 'lucide-react';
import { ContactRequest } from '../types';

interface ContactFormProps {
  selectedProgram?: string;
  onSuccessSubmit?: () => void;
}

export default function ContactForm({ selectedProgram, onSuccessSubmit }: ContactFormProps) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    organization: '',
    role: '',
    type: 'workshop' as 'workshop' | 'automation' | 'coaching' | 'seminar',
    message: selectedProgram ? `안녕하세요, [${selectedProgram}] 워크숍에 관해 구체적으로 문의드립니다. ` : '',
  });

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [sentRequests, setSentRequests] = useState<ContactRequest[]>([]);
  const [showHistory, setShowHistory] = useState(false);

  // Sync selected program if it changes from outside (e.g. clicking "문의하기" in programs list)
  useEffect(() => {
    if (selectedProgram) {
      setFormData(prev => ({
        ...prev,
        message: `안녕하세요, [${selectedProgram}] 워크숍에 관해 구체적으로 문의드립니다. `,
        type: selectedProgram.includes('개인') ? 'coaching' : 'workshop'
      }));
      // Scroll to form smoothly
      const element = document.getElementById('contact-section');
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, [selectedProgram]);

  // Load sent history from localStorage on mount
  useEffect(() => {
    const saved = localStorage.getItem('agent_engineer_contacts');
    if (saved) {
      try {
        setSentRequests(JSON.parse(saved));
      } catch (e) {
        console.error(e);
      }
    }
  }, []);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    setLoading(true);

    // Simulate network latency (developer vibe)
    setTimeout(() => {
      const newRequest: ContactRequest = {
        id: 'REQ_' + Math.random().toString(36).substring(2, 9).toUpperCase(),
        name: formData.name,
        email: formData.email,
        organization: formData.organization || '개인/미지정',
        role: formData.role || '미지정',
        type: formData.type,
        message: formData.message,
        submittedAt: new Date().toLocaleString('ko-KR')
      };

      const updated = [newRequest, ...sentRequests];
      setSentRequests(updated);
      localStorage.setItem('agent_engineer_contacts', JSON.stringify(updated));

      setLoading(false);
      setSuccess(true);
      
      // Reset form text
      setFormData({
        name: '',
        email: '',
        organization: '',
        role: '',
        type: 'workshop',
        message: ''
      });

      if (onSuccessSubmit) {
        onSuccessSubmit();
      }

      // Keep success state for 5 seconds
      setTimeout(() => {
        setSuccess(false);
      }, 5000);

    }, 1500);
  };

  const deleteRequest = (id: string, e: MouseEvent) => {
    e.stopPropagation();
    const filtered = sentRequests.filter(r => r.id !== id);
    setSentRequests(filtered);
    localStorage.setItem('agent_engineer_contacts', JSON.stringify(filtered));
  };

  return (
    <section className="py-20 border-t border-hairline bg-canvas" id="contact-section">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* Left Side: Contact Information & FAQ (5 cols) */}
          <div className="lg:col-span-5 space-y-8">
            <div>
              <span className="font-mono text-xs text-primary-green uppercase tracking-wider block mb-2">
                07 // SECURE COMMUNICATION CHANNEL
              </span>
              <h2 className="text-3xl sm:text-4xl font-light text-ink-strong tracking-tight">
                업무 프로세스를 <br />
                <span className="font-semibold text-primary-green">완전히 혁신할 준비</span>가 되셨나요?
              </h2>
              <p className="mt-4 text-sm text-body leading-relaxed">
                조직 내 AI 도입의 첫 단추를 채워드립니다. <br />
                고민하고 계시는 단순 반복 수작업, 지루한 데이터 분석, 연동되지 않는 정보망을 들려주세요. 
                가장 완벽한 아키텍처로 답변해 드리겠습니다.
              </p>
            </div>

            {/* Email Directly Details */}
            <div className="rounded border border-hairline bg-canvas-soft/40 p-5 space-y-4">
              <div className="flex items-center space-x-3 text-primary-green">
                <Mail className="h-4 w-4" />
                <span className="font-mono text-xs font-semibold uppercase tracking-wider">Direct Contact</span>
              </div>
              <div>
                <p className="text-xs text-mute">강연 의뢰 및 급한 비즈니스 협업 용무는 아래 이메일 주소로 바로 메일을 전송해 주셔도 좋습니다.</p>
                <a 
                  href="mailto:sechang.405@gmail.com" 
                  className="font-mono text-sm text-ink-strong font-medium hover:text-primary-green transition-colors mt-2 block"
                >
                  sechang.405@gmail.com
                </a>
              </div>
            </div>

            {/* Micro FAQ Vibe */}
            <div className="space-y-4">
              <span className="font-mono text-[10px] text-mute uppercase tracking-widest block border-b border-hairline/60 pb-2">
                QUICK CHECKLIST FOR CONSULTING
              </span>

              <div className="space-y-3">
                <div className="space-y-1">
                  <h4 className="text-xs font-semibold text-ink-strong">Q. 워크숍 진행 전 필요한 준비가 있나요?</h4>
                  <p className="text-xs text-mute leading-relaxed font-light">
                    특별한 코딩 지식은 전혀 필요 없습니다. 다만, '가장 자동화하고 싶은 팀원들의 소중한 3가지 단순 반복 작업' 리스트를 미리 간추려 주시면 효과가 극대화됩니다.
                  </p>
                </div>
                <div className="space-y-1">
                  <h4 className="text-xs font-semibold text-ink-strong">Q. 보안 정책이 엄격한 금융/바이오 분야도 적용 가능한가요?</h4>
                  <p className="text-xs text-mute leading-relaxed font-light">
                    네, 구글의 엔터프라이즈 전용 보안 API 또는 외부 데이터 전송이 완전히 차단되는 설치형 Private LLM 파이프라인 컨설팅도 설계 가능하오니 폼에 작성해주세요.
                  </p>
                </div>
              </div>
            </div>

          </div>

          {/* Right Side: Professional Consultation Form (7 cols) */}
          <div className="lg:col-span-7 rounded-lg border border-hairline bg-canvas-soft p-6 sm:p-8 relative">
            
            {success && (
              <div className="absolute inset-0 bg-canvas-soft/95 backdrop-blur-sm z-20 flex flex-col items-center justify-center text-center p-6 transition-all duration-300">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary-green/10 text-primary-green mb-4">
                  <ClipboardCheck className="h-6 w-6 animate-scale" />
                </div>
                <h3 className="text-xl font-bold text-ink-strong mb-2">문의가 안전하게 전송되었습니다!</h3>
                <p className="text-xs text-body leading-relaxed max-w-md mb-6">
                  실전형 AI 전환 파트너가 내용을 면밀히 검토한 후, 입력해주신 이메일로 24시간 이내에 워크숍 제안서와 진단 아웃라인을 회신해 드리겠습니다.
                </p>
                <div className="font-mono text-[11px] text-primary-soft bg-canvas border border-primary-green/30 px-4 py-2 rounded">
                  TRANSMISSION_CODE: STATUS_202_ACCEPTED
                </div>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-5">
              
              <div className="text-xs font-mono text-mute uppercase tracking-wider pb-3 border-b border-hairline/60 mb-2 flex justify-between items-center">
                <span>NEW CONSULTATION REQUEST FORM</span>
                <span className="text-primary-green">* 필수 입력</span>
              </div>

              {/* Grid 2 Column */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                {/* Name */}
                <div className="space-y-1.5">
                  <label className="block text-xs font-mono text-ink-strong uppercase tracking-wide">
                    성함 *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="이름을 입력하세요"
                    className="w-full rounded border border-hairline bg-canvas px-3.5 py-2 text-sm text-ink-strong placeholder:text-mute/60 focus:border-primary-green focus:outline-none transition-colors"
                  />
                </div>

                {/* Email */}
                <div className="space-y-1.5">
                  <label className="block text-xs font-mono text-ink-strong uppercase tracking-wide">
                    이메일 주소 *
                  </label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="contact@company.com"
                    className="w-full rounded border border-hairline bg-canvas px-3.5 py-2 text-sm text-ink-strong placeholder:text-mute/60 focus:border-primary-green focus:outline-none transition-colors"
                  />
                </div>
              </div>

              {/* Grid 2 Column */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                {/* Organization */}
                <div className="space-y-1.5">
                  <label className="block text-xs font-mono text-ink-strong uppercase tracking-wide">
                    조직 / 회사명
                  </label>
                  <input
                    type="text"
                    value={formData.organization}
                    onChange={(e) => setFormData({ ...formData, organization: e.target.value })}
                    placeholder="예: 주식회사 에이전트테크"
                    className="w-full rounded border border-hairline bg-canvas px-3.5 py-2 text-sm text-ink-strong placeholder:text-mute/60 focus:border-primary-green focus:outline-none transition-colors"
                  />
                </div>

                {/* Role */}
                <div className="space-y-1.5">
                  <label className="block text-xs font-mono text-ink-strong uppercase tracking-wide">
                    부서 / 직책
                  </label>
                  <input
                    type="text"
                    value={formData.role}
                    onChange={(e) => setFormData({ ...formData, role: e.target.value })}
                    placeholder="예: HR 교육담당자 / 대표이사"
                    className="w-full rounded border border-hairline bg-canvas px-3.5 py-2 text-sm text-ink-strong placeholder:text-mute/60 focus:border-primary-green focus:outline-none transition-colors"
                  />
                </div>
              </div>

              {/* Request Type Selection (1순위 CTA 및 보조 CTA 완벽 구현) */}
              <div className="space-y-1.5">
                <label className="block text-xs font-mono text-ink-strong uppercase tracking-wide">
                  문의 목적 및 유형 선택 *
                </label>
                <div className="grid grid-cols-2 gap-3 pt-1">
                  {[
                    { id: 'workshop', label: '1순위) 기업 임직원 워크숍' },
                    { id: 'automation', label: '1순위) 부서 업무 자동화' },
                    { id: 'coaching', label: '보조) 개인 Agent 1:1 코칭' },
                    { id: 'seminar', label: '보조) 강연 / 인사이트 세미나' }
                  ].map((t) => (
                    <label
                      key={t.id}
                      className={`flex items-center space-x-2.5 p-3 rounded border cursor-pointer select-none transition-colors ${
                        formData.type === t.id
                          ? 'border-primary-green bg-primary-green/5 text-ink-strong'
                          : 'border-hairline bg-canvas/40 hover:border-hairline hover:bg-canvas'
                      }`}
                    >
                      <input
                        type="radio"
                        name="contact_type"
                        checked={formData.type === t.id}
                        onChange={() => setFormData({ ...formData, type: t.id as any })}
                        className="sr-only"
                      />
                      <div className={`h-3 w-3 rounded-full border flex items-center justify-center ${
                        formData.type === t.id ? 'border-primary-green' : 'border-mute'
                      }`}>
                        {formData.type === t.id && (
                          <div className="h-1.5 w-1.5 rounded-full bg-primary-green"></div>
                        )}
                      </div>
                      <span className="text-xs font-medium">{t.label}</span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Textarea Detail */}
              <div className="space-y-1.5">
                <label className="block text-xs font-mono text-ink-strong uppercase tracking-wide">
                  해결하고 싶은 업무 비효율 또는 문의 사항 *
                </label>
                <textarea
                  required
                  rows={4}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="예: 매주 월요일 파트너사 보고서를 취합해 이메일 요약하는 업무를 AI와 슬랙 웹훅으로 자동화하고 싶습니다. / 임직원 30명 대상 업무 전환 워크숍 견적 문의드립니다."
                  className="w-full rounded border border-hairline bg-canvas px-3.5 py-3 text-sm text-ink-strong placeholder:text-mute/60 focus:border-primary-green focus:outline-none transition-colors resize-none leading-relaxed"
                />
              </div>

              {/* Submit CTA */}
              <div className="flex flex-col sm:flex-row gap-4 items-stretch sm:items-center justify-between pt-2">
                <button
                  type="submit"
                  disabled={loading}
                  className="flex items-center justify-center space-x-2 rounded bg-primary-green px-6 py-3 text-sm font-semibold text-canvas hover:bg-primary-soft transition-colors cursor-pointer disabled:opacity-50"
                  id="submit-contact-form-btn"
                >
                  {loading ? (
                    <>
                      <Loader2 className="h-4 w-4 animate-spin" />
                      <span>서버로 패킷 전송 중...</span>
                    </>
                  ) : (
                    <>
                      <Send className="h-4 w-4" />
                      <span>컨설팅 제안 신청서 발송</span>
                    </>
                  )}
                </button>

                <a
                  href="mailto:sechang.405@gmail.com"
                  className="flex items-center justify-center space-x-2 rounded border border-hairline px-6 py-3 text-sm font-semibold text-ink hover:bg-canvas transition-colors"
                >
                  <Mail className="h-4 w-4 text-mute" />
                  <span>이메일로 바로 연락하기</span>
                </a>
              </div>

            </form>

            {/* LocalStorage Sent Request History View (Interactivity bonus) */}
            {sentRequests.length > 0 && (
              <div className="mt-8 pt-6 border-t border-hairline/60">
                <button
                  type="button"
                  onClick={() => setShowHistory(!showHistory)}
                  className="flex items-center justify-between w-full font-mono text-xs text-mute hover:text-ink-strong transition-colors"
                  id="toggle-sent-history-btn"
                >
                  <span className="flex items-center space-x-1.5">
                    <Terminal className="h-3.5 w-3.5 text-primary-green" />
                    <span>MY CONSULTATION REQUESTS ({sentRequests.length})</span>
                  </span>
                  <span>{showHistory ? '[CLOSE]' : '[VIEW]'}</span>
                </button>

                {showHistory && (
                  <div className="mt-4 space-y-3 max-h-[180px] overflow-y-auto pr-1">
                    {sentRequests.map((req) => (
                      <div 
                        key={req.id} 
                        className="rounded border border-hairline bg-canvas p-3 text-[11px] font-mono flex items-start justify-between gap-3"
                      >
                        <div className="space-y-1 flex-1">
                          <div className="flex items-center justify-between">
                            <span className="text-primary-soft font-semibold">{req.id}</span>
                            <span className="text-[10px] text-mute">{req.submittedAt}</span>
                          </div>
                          <div>
                            <span className="text-mute">Type:</span>{' '}
                            <span className="text-ink-strong">{req.type.toUpperCase()}</span>
                            <span className="mx-2 text-hairline">|</span>
                            <span className="text-mute">Sender:</span>{' '}
                            <span className="text-ink-strong">{req.name} ({req.organization})</span>
                          </div>
                          <p className="text-mute line-clamp-2 mt-1 leading-relaxed bg-canvas-soft/80 p-1.5 rounded">
                            {req.message}
                          </p>
                        </div>
                        <button
                          type="button"
                          onClick={(e) => deleteRequest(req.id, e)}
                          className="text-mute hover:text-red-400 p-1 rounded"
                          title="기록에서 지우기"
                          id={`delete-request-btn-${req.id}`}
                        >
                          <Trash2 className="h-3.5 w-3.5" />
                        </button>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            )}

          </div>

        </div>

      </div>
    </section>
  );
}
