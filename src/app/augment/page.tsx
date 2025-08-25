import AugmentContentForm from "./augment-content-form";
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ArrowLeft } from 'lucide-react';

export default function AugmentPage() {
  return (
    <div className="min-h-screen bg-background">
      <header className="sticky top-0 z-50 w-full border-b bg-background/80 backdrop-blur-sm">
        <div className="container mx-auto flex h-16 items-center justify-between px-4 md:px-6">
          <Button variant="ghost" asChild>
            <Link href="/" className="flex items-center gap-2">
              <ArrowLeft className="h-4 w-4" />
              Back to Home
            </Link>
          </Button>
          <h1 className="font-headline text-xl font-bold">Content Augmentation</h1>
        </div>
      </header>
      <main className="container mx-auto px-4 md:px-6 py-8">
        <div className="max-w-2xl mx-auto">
          <div className="mb-8 p-4 bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg">
            <h2 className="font-semibold text-blue-800 dark:text-blue-300">How it works</h2>
            <p className="text-sm text-blue-700 dark:text-blue-400 mt-1">
              Select a website section, provide some current content and keywords. The AI will generate a new text snippet and an image prompt to help you enrich your website.
            </p>
          </div>
          <AugmentContentForm />
        </div>
      </main>
    </div>
  );
}
