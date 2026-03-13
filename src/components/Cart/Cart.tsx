import { useNavigate } from "react-router-dom";
import { useCart } from "../../context/CartContext";

const Cart = () => {
  const { items, removeItem, updateQuantity, totalPrice, clearCart } = useCart();
  const navigate = useNavigate();

  if (items.length === 0) {
    return (
      <div className="min-h-screen flex items-center justify-center text-center pt-20">
        <div>
          <h2 className="font-display font-light text-4xl text-ink-100 mb-4">Your cart is empty</h2>
          <p className="text-sm text-ink-400 mb-8">Browse the collection and add prints you'd like to order.</p>
          <button className="btn-secondary" onClick={() => navigate("/")}>Browse Gallery</button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen pt-28 pb-20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-12">
          <h1
            className="font-display font-light text-ink-100 leading-none mb-2"
            style={{ fontSize: "clamp(2rem, 4vw, 3rem)" }}
          >
            Your Selection
          </h1>
          <p className="text-sm text-ink-400">Review your prints and proceed to send an inquiry.</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-[1fr_340px] gap-16 items-start">
          {/* Items */}
          <div>
            {items.map((item, index) => (
              <div
                key={index}
                className="grid grid-cols-[80px_1fr_auto_auto_auto] gap-5 items-center py-6 border-b border-ink-700 animate-fade-up"
              >
                <img src={item.imageUrl} alt={item.title} className="w-20 h-24 object-cover bg-ink-900" />

                <div>
                  <h3 className="text-sm font-normal text-ink-100 mb-1">{item.title}</h3>
                  <p className="text-2xs tracking-wide2 uppercase text-ink-400 mb-1">{item.size} · {item.frame}</p>
                  <p className="text-sm text-amber-500">₹{item.price.toLocaleString("en-IN")} each</p>
                </div>

                {/* Qty */}
                <div className="flex items-center border border-ink-700">
                  <button
                    className="w-8 h-8 flex items-center justify-center text-ink-400 hover:text-ink-100 hover:bg-ink-800 transition-colors duration-200"
                    onClick={() => item.quantity > 1 ? updateQuantity(index, item.quantity - 1) : removeItem(index)}
                  >−</button>
                  <span className="text-sm w-8 text-center">{item.quantity}</span>
                  <button
                    className="w-8 h-8 flex items-center justify-center text-ink-400 hover:text-ink-100 hover:bg-ink-800 transition-colors duration-200"
                    onClick={() => updateQuantity(index, item.quantity + 1)}
                  >+</button>
                </div>

                <span className="text-sm min-w-[80px] text-right">
                  ₹{(item.price * item.quantity).toLocaleString("en-IN")}
                </span>

                <button
                  className="text-2xs text-ink-400 hover:text-red-400 transition-colors duration-200 p-1"
                  onClick={() => removeItem(index)}
                  aria-label="Remove"
                >✕</button>
              </div>
            ))}

            <button
              className="mt-6 text-2xs tracking-wide2 uppercase text-ink-400 hover:text-ink-100 transition-colors duration-200"
              onClick={clearCart}
            >
              Clear all
            </button>
          </div>

          {/* Summary */}
          <div className="border border-ink-700 p-8 sticky top-24">
            <h3 className="section-label mb-6">Order Summary</h3>

            <div className="flex justify-between text-sm mb-4">
              <span className="text-ink-400">Subtotal</span>
              <span>₹{totalPrice.toLocaleString("en-IN")}</span>
            </div>
            <div className="flex justify-between text-sm mb-4">
              <span className="text-ink-400">Shipping</span>
              <span className="text-ink-400">On inquiry</span>
            </div>

            <div className="h-px bg-ink-700 my-5" />

            <div className="flex justify-between items-baseline mb-8">
              <span className="text-sm">Total (excl. shipping)</span>
              <span className="font-display font-light text-2xl">₹{totalPrice.toLocaleString("en-IN")}</span>
            </div>

            <button className="btn-primary w-full mb-3" onClick={() => navigate("/inquire")}>
              Proceed to Inquiry
            </button>
            <button className="btn-secondary w-full mb-6" onClick={() => navigate("/")}>
              ← Continue browsing
            </button>

            <p className="text-xs text-ink-400 leading-relaxed border-t border-ink-700 pt-5">
              We'll confirm availability and shipping costs via WhatsApp before payment.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
