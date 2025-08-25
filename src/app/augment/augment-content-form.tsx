"use client"

import { useFormState } from "react-dom"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import * as z from "zod"
import { augmentContentAction, type AugmentContentState } from "./action"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { useEffect } from "react"
import { useToast } from "@/hooks/use-toast"
import { Bot, Image as ImageIcon, FileText } from "lucide-react"

const formSchema = z.object({
  section: z.string().min(1, "Please select a section."),
  currentContent: z.string().min(10, "Current content must be at least 10 characters."),
  keywords: z.string().min(3, "Please provide at least one keyword."),
})

const initialState: AugmentContentState = {
  message: "",
  data: null,
  error: null,
}

export default function AugmentContentForm() {
  const [state, formAction] = useFormState(augmentContentAction, initialState)
  const { toast } = useToast()

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      section: "",
      currentContent: "",
      keywords: "",
    },
  })
  
  const { formState, handleSubmit, control } = form

  useEffect(() => {
    if (state.message && !state.error) {
      toast({
        title: "Success",
        description: state.message,
      })
    } else if (state.error) {
      toast({
        title: "Error",
        description: state.error,
        variant: "destructive",
      })
    }
  }, [state, toast])

  return (
    <div className="space-y-8">
      <Card>
        <CardHeader>
          <CardTitle className="font-headline flex items-center gap-2"><Bot className="h-6 w-6"/> AI Content Generator</CardTitle>
          <CardDescription>Fill in the details below to generate content suggestions.</CardDescription>
        </CardHeader>
        <CardContent>
          <Form {...form}>
            <form action={formAction} className="space-y-6">
              <FormField
                control={control}
                name="section"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Website Section</FormLabel>
                    <Select onValueChange={field.onChange} defaultValue={field.value}>
                      <FormControl>
                        <SelectTrigger>
                          <SelectValue placeholder="Select a section to augment" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        <SelectItem value="Events">Events</SelectItem>
                        <SelectItem value="Team">Team</SelectItem>
                        <SelectItem value="Gallery">Gallery</SelectItem>
                        <SelectItem value="About">About Us</SelectItem>
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={control}
                name="currentContent"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Current Content</FormLabel>
                    <FormControl>
                      <Textarea placeholder="Describe the current content of the section..." {...field} rows={4} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={control}
                name="keywords"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Keywords</FormLabel>
                    <FormControl>
                      <Input placeholder="e.g., hackathon, AI, students" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <Button type="submit" disabled={formState.isSubmitting} className="w-full">
                {formState.isSubmitting ? "Generating..." : "Generate Content"}
              </Button>
            </form>
          </Form>
        </CardContent>
      </Card>
      
      {state.data && (
        <Card>
          <CardHeader>
            <CardTitle className="font-headline">Generated Suggestions</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <h3 className="font-semibold flex items-center gap-2 mb-2"><FileText size={18}/> Suggested Text</h3>
              <p className="text-muted-foreground bg-secondary p-3 rounded-md">{state.data.suggestedText}</p>
            </div>
            <div>
              <h3 className="font-semibold flex items-center gap-2 mb-2"><ImageIcon size={18}/> Suggested Image Prompt</h3>
              <p className="text-muted-foreground bg-secondary p-3 rounded-md font-mono text-sm">{state.data.suggestedImagePrompt}</p>
            </div>
          </CardContent>
        </Card>
      )}
    </div>
  )
}
