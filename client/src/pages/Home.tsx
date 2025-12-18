import Preloader from "@/components/Preloader";
import Hero from "@/components/Hero";
import Portfolio from "@/components/Portfolio";
import Services from "@/components/Services";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-noir-black text-white selection:bg-noir-gold selection:text-black">
      <Preloader />
      <Hero />
      <Portfolio />
      <Services />
      <Footer />
    </main>
  );
}
