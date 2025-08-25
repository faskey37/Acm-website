import { Button } from "@/components/ui/button"
import { MotionDiv } from "@/components/shared/motion-div"
import { ArrowRight } from "lucide-react"
import { Typewriter } from "@/components/shared/typewriter"

export default function Hero() {
  return (
    <section id="home" className="relative w-full h-[80vh] min-h-[600px] flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 bg-grid-slate-900/[0.04] bg-[bottom_1px_center] dark:bg-grid-slate-400/[0.05] dark:bg-bottom dark:border-b dark:border-slate-100/5 [mask-image:linear-gradient(to_bottom,transparent,white_5%,white_95%,transparent)]"></div>
      
      <div className="container relative z-10 px-4 md:px-6">
        <div className="max-w-5xl mx-auto text-center">
            <Typewriter text="Anjuman ACM Student Chapter" className="font-headline text-4xl font-bold tracking-tighter text-foreground sm:text-5xl md:text-6xl justify-center" />
          <MotionDiv
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeInOut" }}
          >
            <p className="mt-6 text-lg leading-8 text-muted-foreground sm:text-xl max-w-2xl mx-auto">
              Advancing computing as a science and profession at Anjuman College of Engineering & Technology.
            </p>
          </MotionDiv>
          <MotionDiv
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease: "easeInOut" }}
            className="mt-10 flex items-center justify-center gap-x-6"
          >
            <Button asChild size="lg" className="font-semibold shadow-lg shadow-primary/20">
              <a href="#events">
                Explore Events
                <ArrowRight className="ml-2"/>
              </a>
            </Button>
            <Button asChild variant="ghost" size="lg" className="font-semibold">
              <a href="#about">Learn More</a>
            </Button>
          </MotionDiv>
        </div>
      </div>
    </section>
  )
}
