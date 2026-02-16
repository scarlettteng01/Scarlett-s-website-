
export interface Service {
  id: string;
  title: string;
  description: string;
  icon: string;
  keywords: string[];
}

export interface FAQItem {
  question: string;
  answer: string;
}

export interface ChatMessage {
  role: 'user' | 'assistant' | 'system';
  content: string;
}
