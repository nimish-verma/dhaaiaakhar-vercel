import { Link } from "react-router-dom";

export default function Navigation() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-40 flex items-center justify-between px-8 py-6 pointer-events-auto mix-blend-difference">
      <Link to="/" className="text-xl font-playfair font-light text-white uppercase tracking-widest hover:text-accent-rose transition-colors">
        CINÉMA
      </Link>
      
      <div className="flex gap-8 text-xs font-inter text-white uppercase tracking-widest">
        <Link to="/work" className="hover:text-accent-rose transition-colors">Stories</Link>
        <Link to="/services" className="hover:text-accent-rose transition-colors">Services</Link>
        <Link to="/contact" className="hover:text-accent-rose transition-colors">Contact</Link>
      </div>
    </nav>
  );
}
