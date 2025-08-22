"use server";

import { askManual } from "@/ai/flows/manual-assistant";
import { manualHtml } from "@/lib/manual-html";

type FormState = {
  answer: string;
  error?: string;
};

export async function askAiAssistant(prevState: FormState, formData: FormData) {
  const question = formData.get("question") as string;

  if (!question || question.trim().length === 0) {
    return { answer: "", error: "Por favor, insira uma pergunta." };
  }

  try {
    const result = await askManual({
      question: question,
      manualContent: manualHtml,
    });
    if (!result.answer) {
        return { answer: "", error: "Não foi possível obter uma resposta." };
    }
    return { answer: result.answer };
  } catch (e) {
    console.error(e);
    const errorMessage = e instanceof Error ? e.message : "Ocorreu um erro desconhecido.";
    return { answer: "", error: `Ocorreu um erro ao perguntar ao assistente: ${errorMessage}` };
  }
}
