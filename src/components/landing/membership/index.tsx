import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle } from "lucide-react";
import { MotionDiv } from "@/components/shared/motion-div";

const benefits = [
  "Access to exclusive workshops and events",
  "Networking opportunities with professionals",
  "Subscription to ACM's digital library",
  "Discounts on conferences and competitions",
];

export default function Membership() {
  return (
    <section id="membership" className="py-20 sm:py-28 bg-muted/30">
      <div className="container mx-auto px-4 md:px-6">
        <MotionDiv
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5 }}
          className="max-w-4xl mx-auto"
        >
          <Card className="overflow-hidden shadow-lg rounded-xl">
            <div className="grid md:grid-cols-2">
              <div className="p-8 sm:p-10">
                <h2 className="font-headline text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
                  Join the Community
                </h2>
                <CardDescription className="mt-4 text-lg">
                  Become a part of the world's largest computing society.
                </CardDescription>
                <div className="mt-8 space-y-4">
                  {benefits.map((benefit, index) => (
                    <div key={index} className="flex items-center gap-3">
                      <CheckCircle className="h-6 w-6 text-primary" />
                      <span className="text-muted-foreground">{benefit}</span>
                    </div>
                  ))}
                </div>
                 <Button asChild size="lg" className="mt-10 font-semibold w-full sm:w-auto">
                  <a href="" target="_blank" rel="noopener noreferrer">Join ACM Now</a>
                </Button>
              </div>
              <div className="hidden md:block">
                 <img
                  src="https://imgs.search.brave.com/-WWXQpgh_iNlxKobGW1oFc7vfRDU6Zdx6VfXjSElQy4/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly8xMDAw/bG9nb3MubmV0L3dw/LWNvbnRlbnQvdXBs/b2Fkcy8yMDIxLzA0/L0FDTS1sb2dvLTUw/MHgzMTMucG5n"
                  alt="Students collaborating"
                  data-ai-hint="students community"
                  width={600}
                  height={600}
                  className="h-full w-full object-cover"
                />
              </div>
            </div>
          </Card>
        </MotionDiv>
      </div>
    </section>
  );
}
