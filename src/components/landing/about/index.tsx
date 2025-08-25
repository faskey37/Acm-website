import Image from "next/image"
import { Card } from "@/components/ui/card"
import { MotionDiv } from "@/components/shared/motion-div"

export default function About() {
  return (
    <section id="about" className="py-20 sm:py-28">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <MotionDiv
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <div className="relative">
              <Card className="overflow-hidden shadow-2xl rounded-2xl border border-primary/10">
                <Image
                  src="https://raw.githubusercontent.com/faskey37/My-Portfolio/b0894122f0a6fca77bc419f6975e57d137d973fb/WhatsApp%20Image%202025-08-22%20at%2023.08.24_930d37df.jpg"
                  alt="ACM team working together"
                  data-ai-hint="team collaboration"
                  width={600}
                  height={400}
                  className="w-full h-auto object-cover"
                />
              </Card>
              <div className="absolute -bottom-8 -right-8 w-40 h-40 bg-primary/10 rounded-full blur-3xl -z-10"></div>
            </div>
          </MotionDiv>
          <MotionDiv
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <h2 className="font-headline text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              About Anjuman ACM
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Our chapter is dedicated to advancing the art, science, engineering, and application of information technology, serving both professionals and the public.
            </p>
            <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div>
                <h3 className="font-headline text-xl font-semibold text-primary">Our Mission</h3>
                <p className="mt-2 text-muted-foreground">To foster a vibrant community of computer science enthusiasts and promote knowledge sharing.</p>
              </div>
              <div>
                <h3 className="font-headline text-xl font-semibold text-primary">Our Vision</h3>
                <p className="mt-2 text-muted-foreground">To empower members to become innovators and leaders in the field of computing.</p>
              </div>
            </div>
          </MotionDiv>
        </div>
      </div>
    </section>
  )
}
