export interface ChatRequest {
  question: string;
}

export interface Source {
  filename: string;
  score: number;
  page?: number;
}

export interface RAGMetrics {
  documents_found: number;
  chunks_retrieved: number;
  chunks_used: number;
  embedding_model: string;
  llm: string;
  retrieval_time_ms: number;
  generation_time_ms: number;
  total_time_ms: number;
}

export interface ChatResponse {
  answer: string;
  confidence: number;
  sources: Source[];
  metrics: RAGMetrics;
}

export interface Message {
  id: string;
  role: "user" | "assistant";
  content: string;
  loading?: boolean;

  confidence?: number;
  sources?: Source[];
  metrics?: RAGMetrics;
}