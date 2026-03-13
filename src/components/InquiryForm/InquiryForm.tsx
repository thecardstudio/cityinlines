import { useState, FormEvent, ChangeEvent } from "react";
import { useNavigate } from "react-router-dom";
import { useCart } from "../../context/CartContext";
import { SITE_CONFIG } from "../../config/artworks";

interface FormState {
  name: string;
  email: string;
  mobile: string;
  pincode: string;
  customNote: string;
}

type SubmitStatus = "idle" | "submitting" | "success" | "error";

const InquiryForm = () => {
  const { items, totalPrice, clearCart } = useCart();
  const navigate = useNavigate();

  const [form, setForm] = useState<FormState>({
    name: "", email: "", mobile: "", pincode: "", customNote: "",
  });
  const [status, setStatus] = useState<SubmitStatus>("idle");
  const [errors, setErrors] = useState<Partial<FormState>>({});

const validate = (): boolean => {
  const newErrors: Partial<FormState> = {};
  if (!form.name.trim()) newErrors.name = "Name is required";
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) newErrors.email = "Valid email required";
  if (!/^[6-9]\d{9}$/.test(form.mobile.replace(/\D/g, ""))) newErrors.mobile = "Valid 10-digit Indian mobile number required";
  if (!/^\d{6}$/.test(form.pincode)) newErrors.pincode = "Valid 6-digit pincode required";
  setErrors(newErrors);
  return Object.keys(newErrors).length === 0;
};

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const buildCartSummary = (): string =>
    items
      .map((item) => `${item.title} — ${item.size}, ${item.frame} × ${item.quantity} = ₹${(item.price * item.quantity).toLocaleString("en-IN")}`)
      .join("\n");

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (!validate()) return;
    setStatus("submitting");
    try {
      const res = await fetch(SITE_CONFIG.formspreeEndpoint, {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          ...form,
          cartSummary: buildCartSummary(),
          totalPrice: `₹${totalPrice.toLocaleString("en-IN")} (excl. shipping)`,
        }),
      });
      if (res.ok) { setStatus("success"); clearCart(); }
      else setStatus("error");
    } catch { setStatus("error"); }
  };

  if (status === "success") {
    return (
      <div className="min-h-screen flex items-center justify-center text-center pt-20 px-6">
        <div>
          <span className="block text-3xl text-amber-500 mb-6">✦</span>
          <h2 className="font-display font-light text-4xl text-ink-100 mb-4">Inquiry Received</h2>
          <p className="text-sm text-ink-400 leading-relaxed max-w-md mx-auto mb-10">
            Thank you! I'll reach out to you on WhatsApp within 24 hours to confirm your order and share shipping details.
          </p>
          <button className="btn-secondary" onClick={() => navigate("/")}>Back to Gallery</button>
        </div>
      </div>
    );
  }

  const inputClass = "input-field";
  const labelClass = "section-label mb-2";

  return (
    <div className="min-h-screen pt-28 pb-20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_360px] gap-16 items-start">

          {/* Form */}
          <div>
            <span className="section-label mb-3">Almost there</span>
            <h1
              className="font-display font-light text-ink-100 leading-none mb-4"
              style={{ fontSize: "clamp(2rem, 4vw, 3rem)" }}
            >
              Your Details
            </h1>
            <p className="text-sm text-ink-400 leading-relaxed max-w-lg mb-10">
              Share your details and I'll get in touch on WhatsApp to confirm your order, finalise shipping, and arrange payment.
            </p>

            <form onSubmit={handleSubmit} className="flex flex-col gap-6">
              <div className="flex flex-col gap-2">
                <label className={labelClass}>Full Name *</label>
                <input type="text" name="name" value={form.name} onChange={handleChange} className={inputClass} placeholder="Your name" required />
                {errors.email && <p className="text-xs text-red-400 mt-1">{errors.email}</p>}
              </div>

              <div className="flex flex-col gap-2">
                <label className={labelClass}>Email *</label>
                <input type="email" name="email" value={form.email} onChange={handleChange} className={inputClass} placeholder="your@email.com" required />
                {errors.email && <p className="text-xs text-red-400 mt-1">{errors.email}</p>}
              </div>

              <div className="flex flex-col gap-2">
                <label className={labelClass}>WhatsApp Number *</label>
                <input type="tel" name="mobile" value={form.mobile} onChange={handleChange} className={inputClass} placeholder="+91 98765 43210" required />
                {errors.email && <p className="text-xs text-red-400 mt-1">{errors.email}</p>}
              </div>

              <div className="flex flex-col gap-2">
                <label className={labelClass}>Delivery Pincode *</label>
                <input type="text" name="pincode" value={form.pincode} onChange={handleChange} className={inputClass} placeholder="500001" maxLength={6} required />
                {errors.email && <p className="text-xs text-red-400 mt-1">{errors.email}</p>}
              </div>

              <div className="flex flex-col gap-2">
                <label className={labelClass}>
                  Custom Request / Note{" "}
                  <span className="normal-case tracking-normal text-ink-400">(optional)</span>
                </label>
                <textarea name="customNote" value={form.customNote} onChange={handleChange} className={`${inputClass} resize-y min-h-[100px]`} placeholder="e.g. I'd like Charminar customised with my building…" rows={4} />
              </div>

              {status === "error" && (
                <p className="text-xs text-red-400 border border-red-400/30 bg-red-400/10 p-4">
                  Something went wrong. Please try again or contact us directly.
                </p>
              )}

              <button type="submit" className="btn-primary mt-2" disabled={status === "submitting"}>
                {status === "submitting" ? "Sending…" : "Send Inquiry"}
              </button>
            </form>
          </div>

          {/* Order summary */}
          <div className="border border-ink-700 p-8 sticky top-24">
            <h3 className="section-label mb-6">Your Order</h3>

            <div className="flex flex-col gap-5 mb-6 pb-6 border-b border-ink-700">
              {items.map((item, i) => (
                <div key={i} className="flex gap-4 items-start">
                  <img src={item.imageUrl} alt={item.title} className="w-14 h-[70px] object-cover bg-ink-900 shrink-0" />
                  <div>
                    <p className="text-sm font-normal text-ink-100 mb-1">{item.title}</p>
                    <p className="text-2xs tracking-wide2 uppercase text-ink-400 mb-1">{item.size} · {item.frame} · Qty {item.quantity}</p>
                    <p className="text-sm text-amber-500">₹{(item.price * item.quantity).toLocaleString("en-IN")}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="flex justify-between items-baseline mb-4">
              <span className="text-sm text-ink-400">Total (excl. shipping)</span>
              <span className="font-display font-light text-2xl">₹{totalPrice.toLocaleString("en-IN")}</span>
            </div>

            <p className="text-xs text-ink-400 leading-relaxed border-t border-ink-700 pt-5">
              Payment via UPI after order confirmation on WhatsApp.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InquiryForm;
