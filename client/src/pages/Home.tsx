import HomeCarousel from "@/components/Home";
import VideoPreview from "@/components/VideoPreview";
import OurCraft from "@/components/OurCraft";
import Footer from "@/components/Footer";
import PageTransition from "@/components/PageTransition";

export default function Home() {
  return (
    <PageTransition>
      <main className="min-h-screen bg-bg-deep text-text-light selection:bg-accent-rose selection:text-bg-deep">
        <HomeCarousel />
        <div className="relative z-50 bg-bg-deep">
          <VideoPreview />
          <OurCraft />
          <Footer />
        </div>
      </main>
    </PageTransition>
  );
}
