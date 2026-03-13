import { Link } from "react-router-dom";
import { SITE_CONFIG } from "../../config/artworks";
import useScrollToSection from "../../hooks/useScrollToSection";

const Footer = () => {
  const year = new Date().getFullYear();
  const scrollTo = useScrollToSection();
  const linkClass = "text-2xs tracking-wide2 uppercase text-ink-400 hover:text-ink-100 transition-colors duration-200 text-left";

  return (
    <footer className="border-t border-ink-700 pt-16 pb-8 mt-8">
      <div className="max-w-7xl mx-auto px-6">
        {/* Main row */}
        <div className="grid grid-cols-1 md:grid-cols-[2fr_1fr_1fr] gap-12 mb-12 pb-12 border-b border-ink-700">

          {/* Brand */}
          <div>
            <Link
              to="/"
              className="font-display font-light text-3xl text-ink-100 hover:text-amber-500 transition-colors duration-200 block mb-3"
            >
              {SITE_CONFIG.name}
            </Link>
            <p className="text-sm text-ink-400 leading-relaxed max-w-xs">
              {SITE_CONFIG.tagline}
            </p>
          </div>

          {/* Nav */}
          <div className="flex flex-col gap-4">
            <button onClick={() => scrollTo("gallery")} className={linkClass}>Gallery</button>
            <button onClick={() => scrollTo("about")} className={linkClass}>About</button>
            <Link to="/inquire" className={linkClass}>Inquire</Link>
            <button onClick={() => scrollTo("greeting-cards")} className={linkClass}>Cards</button>
          </div>

          {/* Contact */}
          <div>
            <p className="section-label mb-3">Get in touch</p>
            <a
              href={`mailto:${SITE_CONFIG.email}`}
              className="text-sm text-amber-500 hover:text-amber-400 transition-colors duration-200 break-all"
            >
              {SITE_CONFIG.email}
            </a>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="flex flex-wrap justify-between items-center gap-3">
          <p className="text-xs text-ink-400">
            © {year} {SITE_CONFIG.name}.
          </p>
          {/* <p className="text-xs text-ink-400 tracking-wide">
            Hand-drawn · Print on demand · Ships from Hyderabad
          </p> */}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
