import { BrowserRouter, Routes, Route } from "react-router-dom";
import { CartProvider } from "./context/CartContext";
import { ThemeProvider } from "./context/ThemeContext";

import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import Gallery from "./components/Gallery/Gallery";
import About from "./components/About/About";
import GreetingCards from "./components/GreetingCards/GreetingCards";
import Footer from "./components/Footer/Footer";
import ProductPage from "./components/ProductPage/ProductPage";
import Cart from "./components/Cart/Cart";
import InquiryForm from "./components/InquiryForm/InquiryForm";

// ── Home page — all sections stacked ──────────────────────────
const HomePage = () => (
  <>
    <Hero />
    <Gallery />
    <About />
    {/* <GreetingCards /> */}
    <Footer />
  </>
);

// ── Root app — providers + router ─────────────────────────────
const App = () => (
  <ThemeProvider>
    <CartProvider>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/artwork/:id" element={<ProductPage />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/inquire" element={<InquiryForm />} />
          {/* Add new routes here as the site grows */}
        </Routes>
      </BrowserRouter>
    </CartProvider>
  </ThemeProvider>
);

export default App;
