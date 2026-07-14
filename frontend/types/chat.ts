export interface ChatRequest {
  question: string;
}

export interface ChatResponse {
  answer: string;
  sources: number;
}

export interface Message {
  id: string;
  role: "user" | "assistant";
  content: string;
  loading?: boolean;
}