import { SITE_CONFIG } from "../../config/artworks";

const About = () => (
  <section className="py-24 border-t border-ink-700" id="about">
    <div className="max-w-7xl mx-auto px-6">
      <div className="grid grid-cols-1 md:grid-cols-[1fr_2fr] gap-20 items-center">

        {/* Decorative left column */}
        <div className="relative h-96 hidden md:flex items-end">
          {/* Crosshatch pattern */}
          <div
            className="absolute inset-0 opacity-40"
            style={{
              backgroundImage: `
                repeating-linear-gradient(0deg, #2e2c28 0, #2e2c28 1px, transparent 0, transparent 100%),
                repeating-linear-gradient(90deg, #2e2c28 0, #2e2c28 1px, transparent 0, transparent 100%)
              `,
              backgroundSize: "24px 24px",
              maskImage: "radial-gradient(ellipse at center, rgba(0,0,0,0.8) 30%, transparent 75%)",
              WebkitMaskImage: "radial-gradient(ellipse at center, rgba(0,0,0,0.8) 30%, transparent 75%)",
            }}
            aria-hidden="true"
          />
          {/* Vertical label */}
          <span
            className="relative z-10 section-label border-l border-ink-700 pl-4 h-40 flex items-center"
            style={{ writingMode: "vertical-rl" }}
          >
            About the Project
          </span>
        </div>

        {/* Content */}
        <div>
          <span className="section-label mb-4">The Project</span>
          <h2
            className="font-display font-light text-ink-100 leading-tight mb-8"
            style={{ fontSize: "clamp(2rem, 4vw, 3.5rem)" }}
          >
            Lines, Cities,<br />& the Space Between
          </h2>

          {/* === EDIT YOUR BIO HERE === */}
          <div className="flex flex-col gap-4 text-sm text-ink-400 leading-loose max-w-prose2 mb-12">
            <p>
              CityInLines began as a way of seeing familiar places differently, taking the landmarks
              we pass every day and rendering them through the slow, deliberate language of crosshatching.
            </p>
            <p>
              Starting with Hyderabad, I want to capture the soul of Indian cities and towns, one line at a time.
            </p>
            <p>
              Along the way, I also want to take on the personal ones. The school you grew up near.
              The street you had your first date in. The places that belong to your story, not just the city's.
            </p>
          </div>
          {/* === END BIO === */}

          {/* Stats */}
          {/* <div className="flex gap-12 pt-8 border-t border-ink-700">
            {[
              { value: "10", label: "Pieces in series" },
              { value: "100%", label: "Hand-drawn" },
              { value: "3", label: "Print sizes" },
            ].map(({ value, label }) => (
              <div key={label} className="flex flex-col gap-1">
                <span className="font-display font-light text-amber-500" style={{ fontSize: "2.5rem", lineHeight: 1 }}>
                  {value}
                </span>
                <span className="text-2xs tracking-wide2 uppercase text-ink-400">{label}</span>
              </div>
            ))}
          </div> */}
        </div>
      </div>
    </div>
  </section>
);

export default About;
