import Image from "next/image"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { MotionDiv } from "@/components/shared/motion-div"

const events = [
  {
    title: "Annual Hackathon 2024",
    description: "A 24-hour coding marathon where students build innovative solutions to real-world problems.",
    image: "https://imgs.search.brave.com/SO5cllVCFHJcczn2Lc44v4Wf_ZsSWkyOQWjKftIkAAY/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9saXZl/LWNzdS1ub3J0aHJp/ZGdlLnBhbnRoZW9u/c2l0ZS5pby9zaXRl/cy9kZWZhdWx0L2Zp/bGVzLzIwMjUtMDEv/VGVjaF9GZXN0X0V2/ZW50cy0yMDQ4eDEz/NjUucG5n",
    aiHint: "coding hackathon",
    date: "Oct 26-27, 2024",
    status: "Upcoming",
  },
  {
    title: "Workshop on AI & ML",
    description: "An interactive workshop covering the fundamentals of Artificial Intelligence and Machine Learning.",
    image: "https://imgs.search.brave.com/1yNfoH3jTnKh1oHR79xh-98-uHGdw4rrVMGovFWPls4/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbWcu/ZnJlZXBpay5jb20v/ZnJlZS12ZWN0b3Iv/Z3JhZGllbnQtYWkt/dGVtcGxhdGUtZGVz/aWduXzIzLTIxNTAz/ODAwMzUuanBnP3Nl/bXQ9YWlzX2h5YnJp/ZCZ3PTc0MA",
    aiHint: "AI workshop",
    date: "Sep 15, 2024",
    status: "Upcoming",
  },
  {
    title: "Code-a-Thon '23",
    description: "Our flagship competitive programming event that saw over 200 participants.",
    image: "https://imgs.search.brave.com/SsRvChlMdiewZH9NPdaA76mvBFMgIp-6VIXBOwzYsUc/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pLnBp/bmltZy5jb20vb3Jp/Z2luYWxzLzdkLzE2/LzQwLzdkMTY0MDE0/N2Q0YWQ5MzMxMTMx/N2ZkZDlkNjU4YjVj/LmpwZw",
    aiHint: "programming competition",
    date: "Dec 05, 2023",
    status: "Past",
  },
]

export default function Events() {
  return (
    <section id="events" className="py-16 sm:py-24 bg-secondary/20">
      <div className="container mx-auto px-4 md:px-6">
        <MotionDiv
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <h2 className="font-headline text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Our Events
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
            From coding competitions to expert talks, we host a variety of events to engage our community.
          </p>
        </MotionDiv>
        <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {events.map((event, index) => (
            <MotionDiv
              key={event.title}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="h-full flex flex-col overflow-hidden transition-all duration-300 group bg-card/50 hover:bg-card/90 border border-primary/10 hover:border-primary/20 hover:shadow-2xl hover:shadow-primary/10 hover:-translate-y-2">
                <div className="relative">
                  <Image
                    src={event.image}
                    alt={event.title}
                    data-ai-hint={event.aiHint}
                    width={600}
                    height={400}
                    className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                   <Badge className="absolute top-4 right-4" variant={event.status === "Upcoming" ? "default" : "secondary"}>
                    {event.status}
                  </Badge>
                </div>
                <CardHeader>
                  <CardTitle className="font-headline">{event.title}</CardTitle>
                  <p className="text-sm text-muted-foreground pt-1">{event.date}</p>
                </CardHeader>
                <CardContent className="flex-grow">
                  <CardDescription>{event.description}</CardDescription>
                </CardContent>
              </Card>
            </MotionDiv>
          ))}
        </div>
      </div>
    </section>
  )
}
