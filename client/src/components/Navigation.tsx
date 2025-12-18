import { Link } from "react-router-dom";

export default function Navigation() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-40 flex items-center justify-between px-8 py-6 pointer-events-auto mix-blend-difference">
      <Link to="/" className="text-2xl font-playfair font-light text-accent-rose uppercase tracking-[0.2em] hover:text-white transition-colors">
        Dhaiaakar
      </Link>
      
      <div className="flex gap-8 text-xs font-inter text-white uppercase tracking-widest">
        <Link to="/films" className="hover:text-accent-rose transition-colors">Films</Link>
        <Link to="/services" className="hover:text-accent-rose transition-colors">Services</Link>
        <Link to="/contact" className="hover:text-accent-rose transition-colors">Contact</Link>
      </div>
    </nav>
  );
}
