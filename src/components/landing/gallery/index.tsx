import Image from "next/image"
import { Card } from "@/components/ui/card"
import { MotionDiv } from "@/components/shared/motion-div"

const galleryImages = [
  { src: "https://media.istockphoto.com/id/1149476601/vector/business-training.jpg?s=612x612&w=0&k=20&c=h6nemE5bw8de3mx-S6p3fV8_TQ9_cDRx0fOYsXdJ9Kg=", alt: "Event photo 1", aiHint: "students conference" },
  { src: "https://media.istockphoto.com/id/1148587411/vector/programming-office-with-developers-and-notebook.jpg?s=612x612&w=0&k=20&c=B95wykd4xtugFBUcwdfDop0XemyLgrTfyDsv6aogu4k=", alt: "Event photo 2", aiHint: "coding workshop" },
  { src: "https://media.istockphoto.com/id/1184658011/vector/people-at-the-seminar-presentation-conference-vector-illustration-business-training-coaching.jpg?s=612x612&w=0&k=20&c=2bUGH65MYIvfMToFtaJrvpbxowMlLiLeNiumyJJvkPM=", alt: "Event photo 3", aiHint: "group presentation" },
  { src: "https://media.istockphoto.com/id/1265168796/vector/coach-speaking-before-audience.jpg?s=612x612&w=0&k=20&c=6CYp-VLgHVxCSAlZJZt6RyhFWoq5FH4P7dsblqXoIMw=", alt: "Event photo 4", aiHint: "guest lecture" },
  { src: "https://media.istockphoto.com/id/1487552641/vector/confident-man-speaker-talking-before-audience-at-conference.jpg?s=612x612&w=0&k=20&c=ptIeO0gOr2oHxBHRvW7jinoiEFMHgS4FD94lw82rXes=", alt: "Event photo 5", aiHint: "award ceremony" },
  { src: "https://media.istockphoto.com/id/953782406/photo/hand-of-touching-network-connecting-the-human-dots-icon-in-business-project-management.jpg?s=612x612&w=0&k=20&c=nGWbpiMU7vhRjuBUjgpHr9TPESOKaDOACC6nzb1pI_4=", alt: "Event photo 6", aiHint: "networking event" },
];

export default function Gallery() {
  return (
    <section id="gallery" className="py-16 sm:py-24 bg-secondary/20">
      <div className="container mx-auto px-4 md:px-6">
        <MotionDiv
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <h2 className="font-headline text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Gallery
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
            A glimpse into our vibrant chapter life and events.
          </p>
        </MotionDiv>
        <div className="mt-12 columns-2 md:columns-3 gap-4">
          {galleryImages.map((image, index) => (
            <MotionDiv
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="mb-4 break-inside-avoid"
            >
              <Card className="overflow-hidden group rounded-xl border border-primary/10 transition-all duration-300 hover:border-primary/20 hover:shadow-2xl hover:shadow-primary/10">
                <Image
                  src={image.src}
                  alt={image.alt}
                  data-ai-hint={image.aiHint}
                  width={600}
                  height={400}
                  className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </Card>
            </MotionDiv>
          ))}
        </div>
      </div>
    </section>
  )
}
