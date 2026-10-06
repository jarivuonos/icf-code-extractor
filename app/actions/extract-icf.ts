'use server';

import { generateObject } from 'ai';
import { openai } from '@ai-sdk/openai';
import {
  IcfExtractionResponseSchema,
  type IcfExtractionResponse,
} from '@/lib/schemas/icf';
import { ICF_SYSTEM_PROMPT } from '@/lib/constants/icf-rules';
import { extractIcfWithJev } from '@/lib/jev/client';

export type ExtractIcfResult =
  | { success: true; data: IcfExtractionResponse }
  | { success: false; error: string };

export async function extractIcfCodes(
  inputText: string
): Promise<ExtractIcfResult> {
  if (!inputText || inputText.trim().length === 0) {
    return { success: false, error: 'Syöteteksti on tyhjä.' };
  }

  // Check for TypeSafe API key first (or if OPENAI_API_KEY has an apikey_... format)
  const typesafeKey =
    process.env.TYPESAFE_API_KEY ||
    (process.env.OPENAI_API_KEY?.startsWith('apikey_')
      ? process.env.OPENAI_API_KEY
      : undefined);

  if (typesafeKey) {
    try {
      const data = await extractIcfWithJev(inputText, typesafeKey);
      return { success: true, data };
    } catch (err: unknown) {
      console.error('TypeSafe Jev extraction error:', err);
      const message =
        err instanceof Error ? err.message : 'Koodien uuttaminen epäonnistui (TypeSafe).';
      return { success: false, error: message };
    }
  }

  // Fallback: If standard OpenAI key (sk-...) is configured
  const openaiKey = process.env.OPENAI_API_KEY;
  if (openaiKey && openaiKey.startsWith('sk-')) {
    try {
      const { object } = await generateObject({
        model: openai('gpt-4o'),
        system: ICF_SYSTEM_PROMPT,
        prompt: `Analysoi seuraava teksti ja uutta siitä ICF-koodit, tarkenteet ja perustelut:\n\n${inputText}`,
        schema: IcfExtractionResponseSchema,
      });

      return { success: true, data: object };
    } catch (err: unknown) {
      console.error('OpenAI extraction error:', err);
      const message =
        err instanceof Error ? err.message : 'Koodien uuttaminen epäonnistui (OpenAI).';
      return { success: false, error: message };
    }
  }

  return {
    success: false,
    error:
      'API-avain puuttuu. Aseta TYPESAFE_API_KEY tiedostoon .env.local.',
  };
}
