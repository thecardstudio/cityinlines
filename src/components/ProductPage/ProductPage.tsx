import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { ARTWORKS, PRICES, SIZES, FRAME_OPTIONS } from "../../config/artworks";
import { useCart } from "../../context/CartContext";
import type { Size, FrameOption } from "../../types";

const ProductPage = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const { addItem } = useCart();

  // Fix 3: always scroll to top when opening a product page
  useEffect(() => { window.scrollTo({ top: 0, behavior: "instant" }); }, [id]);

  const artwork = ARTWORKS.find((a) => a.id === Number(id));
  const [selectedSize, setSelectedSize] = useState<Size>("A4");
  const [selectedFrame, setSelectedFrame] = useState<FrameOption>("Unframed");
  const [addedFeedback, setAddedFeedback] = useState(false);

  if (!artwork) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <p className="text-ink-400 mb-4">Artwork not found.</p>
          <button className="btn-secondary" onClick={() => navigate("/")}>← Back to Gallery</button>
        </div>
      </div>
    );
  }

  const price = PRICES[selectedSize][selectedFrame.toLowerCase() as "unframed" | "framed"];

  const handleAddToCart = () => {
    addItem({ artworkId: artwork.id, title: artwork.title, imageUrl: artwork.imageUrl, size: selectedSize, frame: selectedFrame, price });
    setAddedFeedback(true);
    setTimeout(() => setAddedFeedback(false), 2000);
  };

  const optionBtn = (active: boolean) =>
    `px-5 py-2.5 border text-sm tracking-wide transition-all duration-200 ${
      active
        ? "border-amber-500 text-amber-500"
        : "border-ink-700 text-ink-400 hover:border-ink-400 hover:text-ink-100"
    }`;

  return (
    <div className="min-h-screen pt-28 pb-20">
      <div className="max-w-7xl mx-auto px-6">
        <button
          className="text-2xs tracking-wide2 uppercase text-ink-400 hover:text-ink-100 transition-colors duration-200 mb-10 block"
          onClick={() => navigate(-1)}
        >
          ← Back
        </button>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-start">
          {/* Image — clean display, no zoom */}
          <div className="relative overflow-hidden bg-ink-900">
            <img
              src={artwork.imageUrl}
              alt={artwork.title}
              className="w-full"
            />
          </div>

          {/* Details */}
          <div>
            <span className="section-label text-amber-500 mb-3">{artwork.city}</span>
            <h1
              className="font-display font-light text-ink-100 leading-tight mb-5"
              style={{ fontSize: "clamp(2rem, 4vw, 3rem)" }}
            >
              {artwork.title}
            </h1>
            <p className="text-sm text-ink-400 leading-relaxed mb-5">{artwork.description}</p>

            {/* Custom note */}
            <div className="flex gap-3 text-sm text-ink-400 border border-ink-700 bg-ink-900 p-4 mb-6 leading-relaxed">
              <span className="text-amber-500 shrink-0">✦</span>
              <span>This artwork can be customised with your city or landmark. Mention it in the inquiry.</span>
            </div>

            <div className="h-px bg-ink-700 my-6" />

            {/* Size */}
            <div className="mb-6">
              <span className="section-label mb-3">Size</span>
              <div className="flex gap-3 flex-wrap">
                {SIZES.map((s) => (
                  <button key={s} className={optionBtn(selectedSize === s)} onClick={() => setSelectedSize(s)}>
                    {s}
                  </button>
                ))}
              </div>
            </div>

            {/* Frame */}
            <div className="mb-6">
              <span className="section-label mb-3">Frame</span>
              <div className="flex gap-3 flex-wrap">
                {FRAME_OPTIONS.map((f) => (
                  <button key={f} className={optionBtn(selectedFrame === f)} onClick={() => setSelectedFrame(f)}>
                    {f}
                  </button>
                ))}
              </div>
            </div>

            {/* Price */}
            <div className="flex items-baseline gap-4 mb-2">
              <span className="section-label">Price</span>
              <span className="font-display font-light text-4xl text-ink-100">
                ₹{price.toLocaleString("en-IN")}
              </span>
            </div>
            <p className="text-xs text-ink-400 mb-8">+ Shipping calculated on inquiry based on pincode</p>

            {/* Actions */}
            <div className="flex flex-col gap-3">
              <button
                className={`btn-primary ${addedFeedback ? "!bg-green-700" : ""}`}
                onClick={handleAddToCart}
              >
                {addedFeedback ? "✓ Added to Cart" : "Add to Cart"}
              </button>
              <button className="btn-secondary" onClick={() => navigate("/cart")}>
                View Cart & Inquire
              </button>
            </div>
          </div>
        </div>

        {/* ── Reviews ─────────────────────────────────────── */}
        <ReviewSection artworkId={artwork.id} />
      </div>
    </div>
  );
};

// ── Types ──────────────────────────────────────────────────────
interface Review {
  id: string;
  name: string;
  comment: string;
  date: string;
}

// ── Reviews Component ──────────────────────────────────────────
const ReviewSection = ({ artworkId }: { artworkId: number }) => {
  const storageKey = `reviews_artwork_${artworkId}`;

  const loadReviews = (): Review[] => {
    try {
      return JSON.parse(localStorage.getItem(storageKey) || "[]");
    } catch { return []; }
  };

  const [reviews, setReviews] = useState<Review[]>(loadReviews);
  const [name, setName] = useState("");
  const [comment, setComment] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = () => {
    if (!name.trim() || !comment.trim()) return;
    const newReview: Review = {
      id: Date.now().toString(),
      name: name.trim(),
      comment: comment.trim(),
      date: new Date().toLocaleDateString("en-IN", { day: "numeric", month: "short", year: "numeric" }),
    };
    const updated = [newReview, ...reviews];
    setReviews(updated);
    localStorage.setItem(storageKey, JSON.stringify(updated));
    setName("");
    setComment("");
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
  };

  return (
    <div className="mt-20 pt-12 border-t border-ink-700">
      <span className="section-label mb-4">Customer Reviews</span>
      <h2
        className="font-display font-light text-ink-100 leading-none mb-10"
        style={{ fontSize: "clamp(1.8rem, 3vw, 2.5rem)" }}
      >
        What people are saying
      </h2>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
        {/* Leave a review */}
        <div>
          <h3 className="text-sm tracking-wide uppercase text-ink-400 mb-6">Leave a Review</h3>
          <div className="flex flex-col gap-4">
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="input-field"
              placeholder="Your name"
              maxLength={60}
            />
            <textarea
              value={comment}
              onChange={(e) => setComment(e.target.value)}
              className="input-field resize-y min-h-[100px]"
              placeholder="Share your thoughts about this print…"
              maxLength={500}
              rows={4}
            />
            <button
              className={`btn-primary self-start ${submitted ? "!bg-green-700" : ""}`}
              onClick={handleSubmit}
              disabled={!name.trim() || !comment.trim()}
            >
              {submitted ? "✓ Review Posted" : "Post Review"}
            </button>
          </div>
        </div>

        {/* Existing reviews */}
        <div className="flex flex-col gap-6">
          {reviews.length === 0 ? (
            <p className="text-sm text-ink-400 italic">
              No reviews yet — be the first to share your thoughts.
            </p>
          ) : (
            reviews.map((review) => (
              <div key={review.id} className="border-l-2 border-amber-500 pl-5">
                <div className="flex justify-between items-baseline mb-2">
                  <span className="text-sm font-medium text-ink-100">{review.name}</span>
                  <span className="text-2xs text-ink-400">{review.date}</span>
                </div>
                <p className="text-sm text-ink-400 leading-relaxed">{review.comment}</p>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductPage;
