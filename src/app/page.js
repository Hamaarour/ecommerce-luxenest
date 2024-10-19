import Hero from "@/components/Hero";
import Range from "@/components/Range";
import Gallery from "@/components/Gallery";
import Inspiration from "@/components/Inspiration";
import ProductGrid from "@/components/ProductGrid";
import { PRODUCTS } from "./data/products";

export default function Home() {
  return (
    <>
      <Hero />
      <Range />
      <ProductGrid products={PRODUCTS} />
      <Inspiration />
      <Gallery />
    </>
  );
}
