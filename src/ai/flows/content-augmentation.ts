'use server';
/**
 * @fileOverview An AI agent that augments content for the ACM website.
 *
 * - augmentContent - A function that handles the content augmentation process.
 * - AugmentContentInput - The input type for the augmentContent function.
 * - AugmentContentOutput - The return type for the augmentContent function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const AugmentContentInputSchema = z.object({
  section: z.string().describe('The section of the website to augment content for (e.g., Events, Team, Gallery).'),
  currentContent: z.string().describe('The current content of the section.'),
  keywords: z.string().describe('Keywords related to the section.'),
});
export type AugmentContentInput = z.infer<typeof AugmentContentInputSchema>;

const AugmentContentOutputSchema = z.object({
  suggestedText: z.string().describe('AI suggested text snippets for the section.'),
  suggestedImagePrompt: z.string().describe('AI suggested image prompts for the section, to generate images using an image generation model.'),
});
export type AugmentContentOutput = z.infer<typeof AugmentContentOutputSchema>;

export async function augmentContent(input: AugmentContentInput): Promise<AugmentContentOutput> {
  return augmentContentFlow(input);
}

const augmentContentPrompt = ai.definePrompt({
  name: 'augmentContentPrompt',
  input: {schema: AugmentContentInputSchema},
  output: {schema: AugmentContentOutputSchema},
  prompt: `You are an AI assistant that helps content managers populate website sections with engaging content.

You will be provided with the website section, the current content of the section, and keywords related to the section.

Based on this information, you will suggest text snippets and an image prompt to generate images for the section.

Website Section: {{{section}}}
Current Content: {{{currentContent}}}
Keywords: {{{keywords}}}

Suggested Text Snippets:
Suggested Image Prompt:`, // Removed triple curly braces from Keywords to fix syntax error
});

const augmentContentFlow = ai.defineFlow(
  {
    name: 'augmentContentFlow',
    inputSchema: AugmentContentInputSchema,
    outputSchema: AugmentContentOutputSchema,
  },
  async input => {
    const {output} = await augmentContentPrompt(input);
    return output!;
  }
);
