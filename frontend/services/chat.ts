import  api from "./api";
import { ChatRequest, ChatResponse } from "@/types/chat";

export async function askAI(
  question: string
): Promise<ChatResponse> {

  const payload: ChatRequest = {
    question,
  };

  const { data } = await api.post<ChatResponse>(
    "/rag/ask",
    payload
  );

  return data;
}