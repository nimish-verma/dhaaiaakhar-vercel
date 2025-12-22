import { Link } from "react-router-dom";
import { useTheme } from "@/context/ThemeContext";
import { Moon, Sun } from "lucide-react";

export default function Navigation() {
  const { theme, toggleTheme } = useTheme();

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-8 py-6 pointer-events-auto" style={{
      backgroundColor: theme === "dark" ? "rgba(26, 26, 26, 0.95)" : "rgba(245, 245, 245, 0.95)",
      backdropFilter: "blur(10px)",
    }}>
      <div className="flex items-center gap-6">
        <Link to="/" className="text-2xl font-playfair font-light uppercase tracking-[0.2em] hover:opacity-80 transition-opacity" style={{
          color: "#d4a5a5"
        }}>
          Dhaiaakar
        </Link>

        <button
          onClick={toggleTheme}
          className="p-2 rounded-full transition-all duration-300 hover:opacity-80"
          style={{
            backgroundColor: theme === "dark" ? "rgba(255,255,255,0.1)" : "rgba(0,0,0,0.1)",
            color: theme === "dark" ? "white" : "#1a1a1a"
          }}
          aria-label="Toggle theme"
        >
          {theme === "dark" ? (
            <Sun className="h-5 w-5" />
          ) : (
            <Moon className="h-5 w-5" />
          )}
        </button>
      </div>
      
      <div className="flex gap-6 text-xs font-inter uppercase tracking-widest" style={{
        color: theme === "dark" ? "white" : "#1a1a1a"
      }}>
        <Link to="/films" className="hover:opacity-70 transition-opacity">Films</Link>
        <Link to="/services" className="hover:opacity-70 transition-opacity">Services</Link>
        <Link to="/contact" className="hover:opacity-70 transition-opacity">Contact</Link>
      </div>
    </nav>
  );
}
