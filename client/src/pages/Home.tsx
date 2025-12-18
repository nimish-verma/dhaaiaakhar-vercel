import LoveStories from "@/components/LoveStories";
import OurCraft from "@/components/OurCraft";
import Footer from "@/components/Footer";
import PageTransition from "@/components/PageTransition";

export default function Home() {
  return (
    <PageTransition>
      <main className="min-h-screen bg-bg-deep text-text-light selection:bg-accent-rose selection:text-bg-deep">
        <LoveStories />
        <div className="relative z-50 bg-bg-deep">
          <OurCraft />
          <Footer />
        </div>
      </main>
    </PageTransition>
  );
}
