import { SITE_CONFIG } from "../../config/artworks";

const Hero = () => (
  <section className="relative flex items-center overflow-hidden pt-20" style={{ minHeight: "60vh" }}>

    {/* Decorative crosshatch background pattern */}
    <div
      className="absolute top-0 right-0 w-1/2 h-full opacity-20 pointer-events-none"
      style={{
        backgroundImage: `
          repeating-linear-gradient(45deg, #2e2c28 0, #2e2c28 1px, transparent 0, transparent 50%),
          repeating-linear-gradient(-45deg, #2e2c28 0, #2e2c28 1px, transparent 0, transparent 50%)
        `,
        backgroundSize: "20px 20px",
        maskImage: "linear-gradient(to left, rgba(0,0,0,0.7), transparent 80%)",
        WebkitMaskImage: "linear-gradient(to left, rgba(0,0,0,0.7), transparent 80%)",
      }}
      aria-hidden="true"
    />

    <div className="max-w-7xl mx-auto px-6 py-10 relative z-10">
      {/* Volume label */}
      <span
        className="section-label mb-6 animate-fade-up"
        style={{ animationDelay: "0.1s" }}
      >
        Vol. I — Hyderabad
      </span>

      {/* Main title */}
      <h1
        className="font-display font-light text-ink-100 leading-none tracking-tight mb-6 animate-fade-up"
        style={{
          fontSize: "clamp(3.5rem, 10vw, 8rem)",
          animationDelay: "0.2s",
        }}
      >
        {SITE_CONFIG.name}
      </h1>

      {/* Tagline */}
      <p
        className="font-display font-light italic text-amber-500 mb-5 max-w-xl animate-fade-up"
        style={{
          fontSize: "clamp(1.1rem, 2.5vw, 1.5rem)",
          animationDelay: "0.3s",
        }}
      >
        {SITE_CONFIG.tagline}
      </p>

      {/* Description */}
      {/* <p
        className="text-sm text-ink-400 leading-relaxed max-w-md animate-fade-up"
        style={{ animationDelay: "0.4s" }}
      >
        {SITE_CONFIG.description}
      </p> */}

     

      {/* Decorative rule */}
      {/* <div
        className="flex items-center gap-3 my-10 animate-fade-up"
        style={{ animationDelay: "0.5s" }}
      >
        <span className="block w-20 h-px bg-ink-700" />
        <span className="block w-1 h-1 rounded-full bg-amber-500" />
        <span className="block w-20 h-px bg-ink-700" />
      </div>

       <p
        className="text-sm text-ink-400 leading-relaxed max-w-md animate-fade-up"
        style={{ animationDelay: "0.4s" }}
      >
        {SITE_CONFIG.custom}
      </p> */}
    </div>
  </section>
);

export default Hero;
