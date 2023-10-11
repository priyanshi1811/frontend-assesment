import "./App.css";
import Header from "./componets/Header";
import Footer from "./componets/Footer";
import Product from "./componets/Product";
import Contact from "./componets/Contact";
import Hero from "./componets/Hero";
import MobileNav from "./componets/MobileNav";
import { useState } from "react";

function App() {
  const [open, setOpen] = useState(false);
  return (
    <div className="overflow-x-hidden">
      <Header />
      <MobileNav open={open} setOpen={setOpen} />
      <Hero />
      <Product />
      <Contact />

      <Footer />
    </div>
  );
}

export default App;
