import Preloader from "@/components/Preloader";
import ScrollGallery from "@/components/ScrollGallery";
import Services from "@/components/Services";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-noir-black text-white selection:bg-noir-gold selection:text-black">
      <Preloader />
      <ScrollGallery />
      <div className="relative z-50 bg-noir-black">
        <Services />
        <Footer />
      </div>
    </main>
  );
}
