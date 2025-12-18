import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { queryClient } from "./lib/queryClient";

import Navigation from "@/components/Navigation";
import Preloader from "@/components/Preloader";
import Home from "@/pages/Home";
import Services from "@/pages/Services";
import Films from "@/pages/Films";
import Contact from "@/pages/Contact";

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Router>
          <Navigation />
          <Preloader />
          <AnimatePresence mode="wait">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/services" element={<Services />} />
              <Route path="/films" element={<Films />} />
              <Route path="/contact" element={<Contact />} />
            </Routes>
          </AnimatePresence>
        </Router>
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
