import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import Container from "../../ui/Container";

function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled ? "bg-white/90 backdrop-blur-md shadow-md" : "bg-transparent"
      }`}
    >
      <Container>
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <img src="/logo.jpg" alt="logo" className="h-10" />

          {/* Desktop Menu */}
          <div
            className={`hidden md:flex gap-6 font-medium ${
              scrolled ? "text-[#1E2A5A]" : "text-white"
            }`}
          >
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
            <Link to="/services">Services</Link>
            <Link to="/portfolio">Portfolio</Link>
            <Link to="/contact">Contact</Link>
          </div>

          {/* Mobile Button */}
          <button
            className={`md:hidden ${
              scrolled ? "text-[#1E2A5A]" : "text-white"
            }`}
            onClick={() => setOpen(!open)}
          >
            {open ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </Container>

      {/* Mobile Menu */}
      <div
        className={`md:hidden transition-all duration-300 overflow-hidden ${
          open ? "max-h-96" : "max-h-0"
        } bg-white`}
      >
        <div className="flex flex-col items-center py-6 gap-6 text-[#1E2A5A] font-medium">
          <Link to="/" onClick={() => setOpen(false)}>
            Home
          </Link>
          <Link to="/about" onClick={() => setOpen(false)}>
            About
          </Link>
          <Link to="/services" onClick={() => setOpen(false)}>
            Services
          </Link>
          <Link to="/portfolio" onClick={() => setOpen(false)}>
            Portfolio
          </Link>
          <Link to="/contact" onClick={() => setOpen(false)}>
            Contact
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
