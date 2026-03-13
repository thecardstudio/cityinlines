import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ARTWORKS } from "../../config/artworks";
import type { Artwork } from "../../types";

type Category = "all" | "cyberabad-horizons" | "timeless-deccan";

const ArtworkCard = ({ artwork, index }: { artwork: Artwork; index: number }) => {
  const [hovered, setHovered] = useState(false);
  const navigate = useNavigate();

  return (
    <div
      className="cursor-pointer group animate-fade-up"
      style={{ animationDelay: `${index * 0.07}s` }}
      onClick={() => navigate(`/artwork/${artwork.id}`)}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => e.key === "Enter" && navigate(`/artwork/${artwork.id}`)}
      aria-label={`View ${artwork.title}`}
    >
      <div className="relative overflow-hidden aspect-[4/5] bg-ink-900 mb-4">
        <img
          src={artwork.imageUrl}
          alt={artwork.title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
          loading="lazy"
        />
        <div className={`absolute inset-0 bg-ink-950/60 flex items-center justify-center transition-opacity duration-300 ${hovered ? "opacity-100" : "opacity-0"}`}>
          <span className="text-2xs tracking-widest2 uppercase text-ink-100 border-b border-amber-500 pb-0.5">
            View Print
          </span>
        </div>
        <span className="absolute top-3 left-3 font-mono text-2xs tracking-wide text-ink-400 bg-ink-950/90 border border-ink-700 px-1.5 py-0.5">
          {String(index + 1).padStart(2, "0")}
        </span>
      </div>
      <div className="flex justify-between items-baseline">
        <h3 className="text-sm font-normal text-ink-100 tracking-wide">{artwork.title}</h3>
        <span className="text-2xs tracking-wide2 uppercase text-ink-400">{artwork.city}</span>
      </div>
    </div>
  );
};

 const TABS: { id: Category; label: string }[] = [
  { id: "all",                label: "All" },
  { id: "timeless-deccan",    label: "Timeless Deccan" },
  { id: "cyberabad-horizons", label: "Cyberabad Horizons" },
];
const Gallery = () => {
  const [activeCategory, setActiveCategory] = useState<Category>("all");
  const filtered = activeCategory === "all" ? ARTWORKS : ARTWORKS.filter((a) => a.category === activeCategory);
  return (
    <section className="py-24 border-t border-ink-700" id="gallery">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="mb-10">
          <span className="section-label mb-4">The Collection</span>
          <h2
            className="font-display font-light text-ink-100 leading-none mb-5"
            style={{ fontSize: "clamp(2.5rem, 5vw, 4rem)" }}
          >
            HyderabadInLines
          </h2>
          <p className="text-sm text-ink-400 leading-relaxed max-w-lg">
            Each piece available in A5, A4, A3 sizes, framed or unframed.{" "}
            <span className="text-amber-500">We also do custom commissions of any landmark that means something to you. </span>Mention it in your inquiry.
          </p>
        </div>

        {/* Tabs */}
        <div className="flex gap-0 mb-12 border-b border-ink-700">
          {TABS.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveCategory(tab.id)}
              className={`px-6 py-3 text-xs tracking-wider2 uppercase transition-all duration-200 border-b-2 -mb-px ${
                activeCategory === tab.id
                  ? "border-amber-500 text-amber-500"
                  : "border-transparent text-ink-400 hover:text-ink-100"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-x-6 gap-y-10">
          {filtered.map((artwork, i) => (
            <ArtworkCard key={artwork.id} artwork={artwork} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;