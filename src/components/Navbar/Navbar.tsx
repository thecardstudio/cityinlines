import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import useScrollToSection from "../../hooks/useScrollToSection";
import { useCart } from "../../context/CartContext";
import { useTheme } from "../../context/ThemeContext";
import { SITE_CONFIG } from "../../config/artworks";

const Navbar = () => {
  const { totalItems } = useCart();
  const { isDark, toggleTheme } = useTheme();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  const scrollTo = useScrollToSection();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => { setMenuOpen(false); }, [location]);

  const navLink =
    "text-2xs tracking-wide2 uppercase text-ink-400 hover:text-ink-100 transition-colors duration-200 body-light:hover:text-ink-950";

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled
        ? "bg-ink-950 body-light:bg-ink-50 border-b border-ink-700 py-4"
        : "py-6"
        }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">

        {/* Brand */}
        <Link
          to="/"
          className="font-display text-2xl font-light tracking-wide text-ink-100 hover:text-amber-500 transition-colors duration-200"
        >
          {SITE_CONFIG.name}
        </Link>

        {/* Desktop links */}
        <div className="hidden md:flex gap-10">
          <button onClick={() => scrollTo("gallery")}>Gallery</button>
          <button onClick={() => scrollTo("about")}>About</button>
          {/* <button onClick={() => scrollTo("greeting-cards")}>Cards</button> */}
        </div>

        {/* Actions */}
        <div className="flex items-center gap-5">
          {/* Theme toggle */}
          <button
            onClick={toggleTheme}
            className="text-ink-400 hover:text-amber-500 transition-colors duration-200 text-base leading-none"
            aria-label="Toggle theme"
          >
            {isDark ? "☀" : "●"}
          </button>

          {/* Cart */}
          <Link to="/cart" className="relative text-ink-400 hover:text-ink-100 transition-colors duration-200" aria-label="Cart">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z" />
              <line x1="3" y1="6" x2="21" y2="6" />
              <path d="M16 10a4 4 0 0 1-8 0" />
            </svg>
            {totalItems > 0 && (
              <span className="absolute -top-1.5 -right-2 bg-amber-500 text-ink-950 text-2xs font-medium w-4 h-4 rounded-full flex items-center justify-center">
                {totalItems}
              </span>
            )}
          </Link>

          {/* Hamburger */}
          <button
            className="md:hidden flex flex-col gap-1.5 p-1"
            onClick={() => setMenuOpen((p) => !p)}
            aria-label="Menu"
          >
            <span className={`block w-5 h-px bg-ink-100 transition-transform duration-300 ${menuOpen ? "translate-y-2.5 rotate-45" : ""}`} />
            <span className={`block w-5 h-px bg-ink-100 transition-opacity duration-300 ${menuOpen ? "opacity-0" : ""}`} />
            <span className={`block w-5 h-px bg-ink-100 transition-transform duration-300 ${menuOpen ? "-translate-y-2.5 -rotate-45" : ""}`} />
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden bg-ink-900 border-b border-ink-700 animate-fade-in">
          {[
            { to: "/", label: "Gallery" },
            { to: "/about", label: "About" },
          ].map(({ to, label }) => (
            <Link
              key={to}
              to={to}
              className="block px-6 py-4 text-2xs tracking-wide2 uppercase text-ink-400 border-b border-ink-700 hover:text-ink-100 hover:bg-ink-800 transition-colors duration-200"
            >
              {label}
            </Link>
          ))}
          <a
            href="#greeting-cards"
            className="block px-6 py-4 text-2xs tracking-wide2 uppercase text-ink-400 border-b border-ink-700 hover:text-ink-100 hover:bg-ink-800 transition-colors duration-200"
          >
            Cards
          </a>
          <Link
            to="/cart"
            className="block px-6 py-4 text-2xs tracking-wide2 uppercase text-ink-400 hover:text-ink-100 hover:bg-ink-800 transition-colors duration-200"
          >
            Cart {totalItems > 0 && `(${totalItems})`}
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
