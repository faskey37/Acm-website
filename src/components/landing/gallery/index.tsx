import Image from "next/image"
import { Card } from "@/components/ui/card"
import { MotionDiv } from "@/components/shared/motion-div"

const galleryImages = [
  { src: "https://placehold.co/600x400.png", alt: "Event photo 1", aiHint: "students conference" },
  { src: "https://placehold.co/400x600.png", alt: "Event photo 2", aiHint: "coding workshop" },
  { src: "https://placehold.co/600x400.png", alt: "Event photo 3", aiHint: "group presentation" },
  { src: "https://placehold.co/600x400.png", alt: "Event photo 4", aiHint: "guest lecture" },
  { src: "https://placehold.co/400x600.png", alt: "Event photo 5", aiHint: "award ceremony" },
  { src: "https://placehold.co/600x400.png", alt: "Event photo 6", aiHint: "networking event" },
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
