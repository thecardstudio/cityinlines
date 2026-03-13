import { useNavigate } from "react-router-dom";
import { GREETING_CARDS } from "../../config/artworks";

const GreetingCards = () => {
  const navigate = useNavigate();

  return (
    <section className="py-24 border-t border-ink-700" id="greeting-cards">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="mb-14 max-w-xl">
          <span className="section-label mb-4">Also by the Artist</span>
          <h2
            className="font-display font-light text-ink-100 leading-tight mb-4"
            style={{ fontSize: "clamp(2rem, 4vw, 3.5rem)" }}
          >
            Bespoke Greeting Cards
          </h2>
          <p className="text-sm text-ink-400 leading-relaxed">
            Handmade greeting cards featuring original crosshatched cityscapes.
            Each card is crafted individually — perfect for gifting someone who loves the city.
          </p>
        </div>

        {/* Cards grid */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 mb-14">
          {GREETING_CARDS.map((card) => (
            <div key={card.id} className="group">
              <div className="overflow-hidden aspect-[3/4] bg-ink-900 mb-4">
                <img
                  src={card.imageUrl}
                  alt={card.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                  loading="lazy"
                />
              </div>
              <h3 className="text-sm font-normal text-ink-100 mb-1">{card.title}</h3>
              <p className="text-xs text-ink-400 leading-relaxed mb-2">{card.description}</p>
              <span className="text-sm text-amber-500">₹{card.price}</span>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="flex flex-wrap items-center gap-6 pt-8 border-t border-ink-700">
          <p className="text-sm text-ink-400">Interested in greeting cards? Send an inquiry and I'll get back to you.</p>
          <button className="btn-secondary shrink-0" onClick={() => navigate("/inquire")}>
            Inquire About Cards
          </button>
        </div>
      </div>
    </section>
  );
};

export default GreetingCards;
