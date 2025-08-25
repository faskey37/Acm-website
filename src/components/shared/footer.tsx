import Link from "next/link"
import Image from "next/image"
import { FooterWave } from "./wavy-pattern"
import { Github, Linkedin, Twitter } from "lucide-react"

const navItems = [
  { href: "#about", label: "About" },
  { href: "#events", label: "Events" },
  { href: "#team", label: "Team" },
  { href: "#gallery", label: "Gallery" },
];

const socialLinks = [
  { href: "#", icon: Twitter, label: "Twitter" },
  { href: "#", icon: Github, label: "GitHub" },
  { href: "#", icon: Linkedin, label: "LinkedIn" },
];

export default function Footer() {
  return (
    <footer className="bg-secondary/20 pt-16">
      <FooterWave />
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 pb-12">
          <div className="md:col-span-4 lg:col-span-5">
            <div className="flex items-center gap-3">
              <Image src="https://github.com/faskey37/college-website/blob/main/R.jpg?raw=true" alt="Anjuman ACM Logo" width={40} height={40} className="h-10 w-10 rounded-full" />
              <div>
                <p className="font-headline text-lg font-bold">Anjuman ACM Student Chapter</p>
                <p className="text-sm text-muted-foreground">Advancing Computing as a Science & Profession.</p>
              </div>
            </div>
             <p className="text-sm text-muted-foreground mt-4 max-w-sm">
                The premier student chapter for computing at Anjuman College of Engineering & Technology, Nagpur.
            </p>
          </div>
          <div className="md:col-span-8 lg:col-span-7 grid grid-cols-2 sm:grid-cols-3 gap-8">
            <div>
              <h4 className="font-headline font-semibold mb-4 text-foreground">Quick Links</h4>
              <nav className="flex flex-col gap-3">
                {navItems.map(item => (
                  <Link key={item.href} href={item.href} className="text-sm text-muted-foreground hover:text-primary transition-colors">
                    {item.label}
                  </Link>
                ))}
              </nav>
            </div>
             <div>
              <h4 className="font-headline font-semibold mb-4 text-foreground">Get Involved</h4>
              <nav className="flex flex-col gap-3">
                 <Link href="#membership" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                    Join Us
                  </Link>
                  <Link href="#resources" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                    Resources
                  </Link>
                   <Link href="#contact" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                    Contact
                  </Link>
              </nav>
            </div>
             <div>
              <h4 className="font-headline font-semibold mb-4 text-foreground">Follow Us</h4>
              <div className="flex gap-4">
                {socialLinks.map(social => (
                  <a key={social.label} href={social.href} target="_blank" rel="noopener noreferrer" aria-label={social.label} className="text-muted-foreground hover:text-primary transition-colors">
                    <social.icon className="h-6 w-6" />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
        <div className="border-t border-border/50 py-6 flex flex-col sm:flex-row justify-between items-center gap-4">
           <p className="text-sm text-muted-foreground text-center sm:text-left">&copy; {new Date().getFullYear()} Anjuman College ACM. All Rights Reserved.</p>
           <Link href="/augment" className="text-xs text-muted-foreground hover:text-primary transition-colors">
                Admin Panel
            </Link>
        </div>
      </div>
    </footer>
  )
}
