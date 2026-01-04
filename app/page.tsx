import Navigation from '@/components/Navigation';
import Hero from '@/components/Hero';
import Services from '@/components/Services';
// import Portfolio from '@/components/Portfolio'; // Uncomment to enable Portfolio section
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <div className="relative min-h-screen">
      <Navigation />
      <main>
        <Hero />
        <Services />
        {/* Portfolio Section - Uncomment below to enable */}
        {/* <Portfolio /> */}
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
