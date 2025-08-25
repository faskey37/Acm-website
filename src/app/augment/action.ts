"use server"

import { z } from "zod"
import { augmentContent } from "@/ai/flows/content-augmentation"
import type { AugmentContentOutput } from "@/ai/flows/content-augmentation"

const formSchema = z.object({
  section: z.string(),
  currentContent: z.string(),
  keywords: z.string(),
})

export interface AugmentContentState {
  message: string
  data: AugmentContentOutput | null
  error: string | null
}

export async function augmentContentAction(
  prevState: AugmentContentState,
  formData: FormData
): Promise<AugmentContentState> {
  const validatedFields = formSchema.safeParse({
    section: formData.get("section"),
    currentContent: formData.get("currentContent"),
    keywords: formData.get("keywords"),
  })

  if (!validatedFields.success) {
    return {
      message: "Validation failed.",
      data: null,
      error: validatedFields.error.flatten().fieldErrors.toString(),
    }
  }

  try {
    const result = await augmentContent(validatedFields.data)
    return {
      message: "Content generated successfully!",
      data: result,
      error: null,
    }
  } catch (e: unknown) {
    const error = e instanceof Error ? e.message : "An unknown error occurred."
    return {
      message: "Failed to generate content.",
      data: null,
      error: error,
    }
  }
}
