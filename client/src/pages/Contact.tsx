import { useRef } from "react";
import PageTransition from "@/components/PageTransition";
import Footer from "@/components/Footer";

export default function Contact() {
  const formRef = useRef<HTMLFormElement>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    alert("Thank you! We'll be in touch soon.");
  };

  return (
    <PageTransition>
      <div className="min-h-screen bg-bg-deep pt-32">
        {/* Hero Section */}
        <div className="h-screen flex items-center justify-center">
          <div className="text-center max-w-2xl mx-auto px-6">
            <h1 className="text-7xl md:text-9xl font-playfair font-light text-text-light mb-8 uppercase">
              Let's Create
            </h1>
            <p className="text-2xl text-text-muted font-light mb-16">
              Your Masterpiece
            </p>

            {/* Contact Form */}
            <form ref={formRef} onSubmit={handleSubmit} className="space-y-8">
              <div>
                <input
                  type="text"
                  placeholder="Your Name"
                  className="w-full bg-transparent border-b border-white/30 pb-3 text-text-light placeholder-text-muted focus:outline-none focus:border-accent-rose transition-colors font-light"
                  required
                />
              </div>

              <div>
                <input
                  type="email"
                  placeholder="Your Email"
                  className="w-full bg-transparent border-b border-white/30 pb-3 text-text-light placeholder-text-muted focus:outline-none focus:border-accent-rose transition-colors font-light"
                  required
                />
              </div>

              <div>
                <input
                  type="date"
                  className="w-full bg-transparent border-b border-white/30 pb-3 text-text-light placeholder-text-muted focus:outline-none focus:border-accent-rose transition-colors font-light"
                  required
                />
              </div>

              <div>
                <select className="w-full bg-transparent border-b border-white/30 pb-3 text-text-light focus:outline-none focus:border-accent-rose transition-colors font-light">
                  <option value="" disabled selected>Select Budget Range</option>
                  <option value="under-5k">Under $5k</option>
                  <option value="5k-10k">$5k - $10k</option>
                  <option value="10k-25k">$10k - $25k</option>
                  <option value="25k+">$25k+</option>
                </select>
              </div>

              <div>
                <textarea
                  placeholder="Tell us about your vision..."
                  rows={5}
                  className="w-full bg-transparent border-b border-white/30 pb-3 text-text-light placeholder-text-muted focus:outline-none focus:border-accent-rose transition-colors font-light resize-none"
                />
              </div>

              <button
                type="submit"
                className="mt-12 group relative overflow-hidden rounded-full border border-white/30 bg-transparent px-12 py-4 text-lg uppercase tracking-widest transition-all hover:border-accent-rose hover:text-bg-deep cursor-pointer"
              >
                <span className="relative z-10 transition-colors duration-300 group-hover:text-bg-deep font-light">
                  Send Inquiry
                </span>
                <div className="absolute inset-0 z-0 h-full w-full translate-y-full bg-accent-rose transition-transform duration-300 ease-in-out group-hover:translate-y-0" />
              </button>
            </form>

            <div className="mt-16 pt-16 border-t border-white/10">
              <p className="text-sm text-text-muted uppercase tracking-widest font-light">
                Or reach out directly
              </p>
              <a href="mailto:hello@cinema.com" className="text-xl text-accent-rose hover:text-white transition-colors mt-4 block font-light">
                hello@cinema.com
              </a>
            </div>
          </div>
        </div>

        <Footer />
      </div>
    </PageTransition>
  );
}
