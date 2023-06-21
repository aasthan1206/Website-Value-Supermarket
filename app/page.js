import Image from "next/image";
import Header from "./components/header";
import Hero from "./components/hero";
import Offer from "./components/offer";
import Footer from "./components/footer";
import Category from "./components/category";
import Products from "./components/products";
import Banner from "./components/banner";
import Testimonials from "./components/testimonials";
import Brands from "./components/brands";
import Info from "./components/info";

export default function Home() {
  return (
    <div>
      <Header />
      <Hero />
      <Offer />
      <Category />
      <Products />
      <Banner />
      <Testimonials />
      <Brands />
      <Info />
      <Footer />
    </div>
  );
}
