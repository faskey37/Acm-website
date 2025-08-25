import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Link2, BookOpen, Newspaper } from "lucide-react"
import { MotionDiv } from "@/components/shared/motion-div"

const resources = [
  {
    title: "ACM Digital Library",
    description: "The most comprehensive collection of articles and papers on computing.",
    link: "#",
    icon: BookOpen,
  },
  {
    title: "ACM TechTalks",
    description: "Webinars by renowned speakers on a wide range of topics.",
    link: "#",
    icon: Newspaper,
  },
  {
    title: "CS50 by Harvard",
    description: "An excellent introductory course to computer science.",
    link: "#",
    icon: Link2,
  },
]

export default function Resources() {
  return (
    <section id="resources" className="py-16 sm:py-24">
      <div className="container mx-auto px-4 md:px-6">
        <MotionDiv
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <h2 className="font-headline text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Learning Resources
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
            Curated resources to help you on your learning journey.
          </p>
        </MotionDiv>
        <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {resources.map((resource, index) => (
            <MotionDiv
              key={resource.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <a href={resource.link} target="_blank" rel="noopener noreferrer" className="block h-full group">
                <Card className="h-full bg-card/50 border border-primary/10 group-hover:border-primary/20 group-hover:-translate-y-2 transition-all duration-300 group-hover:shadow-2xl group-hover:shadow-primary/10">
                    <CardHeader className="flex flex-row items-center gap-4">
                      <div className="bg-primary/10 p-3 rounded-full">
                        <resource.icon className="h-6 w-6 text-primary" />
                      </div>
                      <CardTitle className="font-headline">{resource.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground">{resource.description}</p>
                    </CardContent>
                </Card>
              </a>
            </MotionDiv>
          ))}
        </div>
      </div>
    </section>
  )
}
