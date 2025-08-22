"use client";

import { useState } from "react";
import { Bot, Loader2, Send, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetDescription,
  SheetFooter,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Textarea } from "@/components/ui/textarea";
import { useFormState, useFormStatus } from "react-dom";
import { askAiAssistant } from "@/app/actions";
import { ScrollArea } from "./ui/scroll-area";
import { cn } from "@/lib/utils";

const initialState = {
  answer: "",
  error: "",
};

function SubmitButton() {
    const { pending } = useFormStatus();
    return (
      <Button type="submit" disabled={pending} size="icon">
        {pending ? <Loader2 className="h-4 w-4 animate-spin" /> : <Send className="h-4 w-4" />}
        <span className="sr-only">Enviar</span>
      </Button>
    );
}

export function AiAssistant() {
  const [state, formAction] = useFormState(askAiAssistant, initialState);
  const [question, setQuestion] = useState("");

  const handleFormSubmit = (formData: FormData) => {
    formAction(formData);
    setQuestion(formData.get("question") as string);
  };

  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button
          variant="default"
          size="icon"
          className="rounded-full shadow-lg h-12 w-12 bg-primary hover:bg-primary/90"
        >
          <Bot className="h-6 w-6" />
          <span className="sr-only">Abrir assistente IA</span>
        </Button>
      </SheetTrigger>
      <SheetContent className="flex flex-col">
        <SheetHeader>
          <SheetTitle className="flex items-center gap-2">
            <Sparkles className="text-accent" />
            Assistente IA
          </SheetTitle>
          <SheetDescription>
            Faça uma pergunta sobre o manual de operações e a IA irá responder.
          </SheetDescription>
        </SheetHeader>
        <div className="flex-grow flex flex-col gap-4 py-4 overflow-y-auto">
            <ScrollArea className="flex-grow pr-4">
                {state.error && <p className="text-destructive text-sm">{state.error}</p>}
                {state.answer && (
                    <div className="space-y-4">
                        <div className="flex justify-end">
                            <p className="bg-secondary text-secondary-foreground p-3 rounded-lg max-w-sm">
                                {question}
                            </p>
                        </div>
                        <div className="flex justify-start">
                            <div className="bg-primary text-primary-foreground p-3 rounded-lg max-w-sm prose prose-sm prose-invert">
                                <div dangerouslySetInnerHTML={{ __html: state.answer.replace(/\n/g, '<br />') }} />
                            </div>
                        </div>
                    </div>
                )}
            </ScrollArea>
        </div>
        <SheetFooter>
          <form action={handleFormSubmit} className="w-full flex items-center gap-2">
            <Textarea
              name="question"
              placeholder="Ex: Quais são as regras de vestimenta?"
              className="min-h-0 flex-1 resize-none"
              rows={1}
              required
            />
            <SubmitButton />
          </form>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  );
}
