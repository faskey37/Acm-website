import Image from "next/image"
import { Mail, Phone } from "lucide-react"
import { MotionDiv } from "@/components/shared/motion-div"
import { Card } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

export default function Contact() {
  return (
    <section id="contact" className="py-20 sm:py-28 bg-secondary/20">
      <div className="container mx-auto px-4 md:px-6">
        <MotionDiv
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="font-headline text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
            Get in Touch
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
            Have questions or want to get involved? We'd love to hear from you.
          </p>
        </MotionDiv>

        <MotionDiv
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="max-w-md mx-auto"
        >
            <Card className="bg-card/50 backdrop-blur-sm border border-primary/10 shadow-2xl shadow-primary/5 rounded-2xl overflow-hidden transition-all duration-300 hover:shadow-primary/20 hover:-translate-y-2">
                <div className="p-8 text-center">
                    <Avatar className="w-32 h-32 mx-auto mb-6 border-4 border-primary/20 shadow-lg">
                        <AvatarImage src="https://placehold.co/128x128/6545b6/FFFFFF.png" alt="Faculty Advisor" data-ai-hint="professional portrait woman" />
                        <AvatarFallback>FA</AvatarFallback>
                    </Avatar>
                    <h3 className="font-headline text-2xl font-bold text-foreground">Prof. Faculty Advisor</h3>
                    <p className="text-primary font-semibold">Faculty Sponsor</p>
                    <p className="text-muted-foreground mb-6">ACM Anjuman Chapter</p>
                    
                    <div className="space-y-3 text-left max-w-xs mx-auto">
                        <div className="flex items-center gap-3 p-2 rounded-md transition-colors hover:bg-primary/5">
                            <Phone className="w-5 h-5 text-primary" />
                            <a href="tel:+911234567890" className="text-muted-foreground hover:text-primary transition-colors">+91 12345 67890</a>
                        </div>
                        <div className="flex items-center gap-3 p-2 rounded-md transition-colors hover:bg-primary/5">
                            <Mail className="w-5 h-5 text-primary" />
                            <a href="mailto:advisor@anjuman.edu" className="text-muted-foreground hover:text-primary transition-colors">advisor@anjuman.edu</a>
                        </div>
                    </div>
                </div>
            </Card>
        </MotionDiv>
      </div>
    </section>
  )
}
