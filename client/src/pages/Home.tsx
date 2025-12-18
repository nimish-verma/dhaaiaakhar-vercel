import Preloader from "@/components/Preloader";
import LoveStories from "@/components/LoveStories";
import OurCraft from "@/components/OurCraft";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-bg-deep text-text-light selection:bg-accent-rose selection:text-bg-deep">
      <Preloader />
      <LoveStories />
      <div className="relative z-50 bg-bg-deep">
        <OurCraft />
        <Footer />
      </div>
    </main>
  );
}
