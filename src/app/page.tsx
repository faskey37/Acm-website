import Navbar from '@/components/shared/navbar';
import Footer from '@/components/shared/footer';
import Hero from '@/components/landing/hero';
import About from '@/components/landing/about';
import Events from '@/components/landing/events';
import Team from '@/components/landing/team';
import Gallery from '@/components/landing/gallery';
import Resources from '@/components/landing/resources';
import Contact from '@/components/landing/contact';
import Membership from '@/components/landing/membership';

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-background">
      <Navbar />
      <main className="flex-grow">
        <Hero />
        <About />
        <Events />
        <Membership />
        <Team />
        <Gallery />
        <Resources />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
