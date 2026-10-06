import { z } from 'zod';

export const IcfFindingSchema = z.object({
  icfCode: z.string().describe("Tarkka ICF-koodi (esim. d450, b144, e1151)"),
  icfTitle: z.string().describe("Koodin virallinen suomenkielinen otsikko/nimi THL-koodiston mukaan"),
  qualifier: z
    .number()
    .min(-4)
    .max(4)
    .nullable()
    .describe(
      "ICF-tarkenne: b/s/d-alueilla 0-4 (0=ei ongelmaa … 4=täydellinen ongelma). e-alueella positiivinen arvo = edistäjä, negatiivinen arvo = este (esim. -2 = kohtalainen este). Null jos ei määritettävissä."
    ),
  evidenceText: z
    .string()
    .describe(
      "Alkuperäisestä tekstistä poimittu suora lause tai ilmaisu, johon löydös perustuu"
    ),
  reasoning: z
    .string()
    .describe(
      "Tekoälyn suomenkielinen lyhyt perustelu sille, miksi tämä koodi ja tarkenne valittiin"
    ),
});

export const IcfExtractionResponseSchema = z.object({
  summary: z
    .string()
    .describe("Tiivistelmä potilaan keskeisistä toimintakyvyn löydöksistä"),
  activeChapters: z
    .array(z.string())
    .optional()
    .describe("Stage 1 -ruuterin aktivoimat THL-pääluokat (esim. b1, b7, d4, d5, e1)"),
  findings: z
    .array(IcfFindingSchema)
    .describe("Tekstistä poimitut ICF-luokittelukohtat"),
});

export type IcfFinding = z.infer<typeof IcfFindingSchema>;
export type IcfExtractionResponse = z.infer<typeof IcfExtractionResponseSchema>;
