export interface ContactRequest {
  id: string;
  name: string;
  email: string;
  organization: string;
  role: string;
  type: 'workshop' | 'automation' | 'coaching' | 'seminar';
  message: string;
  submittedAt: string;
}

export interface WorkshopProgram {
  id: string;
  title: string;
  tag: string;
  duration: string;
  target: string;
  description: string;
  goals: string[];
  deliverable: string;
}

export interface DeliverableItem {
  id: string;
  category: string;
  title: string;
  description: string;
  format: string; // e.g. "JSON Schema", "Interactive Markdown", "Python Script"
}

export interface FrameworkStep {
  step: string;
  title: string;
  engTitle: string;
  description: string;
  codeSnippet: string;
  checklist: string[];
}

export interface CaseStudy {
  id: string;
  client: string;
  category: string;
  period: string;
  problem: string;
  solution: string;
  impact: string[];
}
