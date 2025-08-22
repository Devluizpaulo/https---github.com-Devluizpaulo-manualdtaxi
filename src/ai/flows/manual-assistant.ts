'use server';
/**
 * @fileOverview An AI-powered assistant for the D-Táxi operation manual.
 *
 * - askManual - A function that answers questions about the manual.
 * - AskManualInput - The input type for the askManual function.
 * - AskManualOutput - The return type for the askManual function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const AskManualInputSchema = z.object({
  question: z.string().describe('The question about the D-Táxi operation manual.'),
  manualContent: z.string().describe('The complete HTML content of the D-Táxi operation manual.'),
});
export type AskManualInput = z.infer<typeof AskManualInputSchema>;

const AskManualOutputSchema = z.object({
  answer: z.string().describe('The answer to the question about the D-Táxi operation manual.'),
});
export type AskManualOutput = z.infer<typeof AskManualOutputSchema>;

export async function askManual(input: AskManualInput): Promise<AskManualOutput> {
  return askManualFlow(input);
}

const prompt = ai.definePrompt({
  name: 'askManualPrompt',
  input: {schema: AskManualInputSchema},
  output: {schema: AskManualOutputSchema},
  prompt: `You are an AI assistant that answers questions about the D-Táxi operation manual. Use the following manual content to answer the question. If the answer is not found in the manual, say that you don't know.

Manual Content:
{{manualContent}}

Question: {{question}}

Answer: `,
});

const askManualFlow = ai.defineFlow(
  {
    name: 'askManualFlow',
    inputSchema: AskManualInputSchema,
    outputSchema: AskManualOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
