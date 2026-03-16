import Hero from "@/components/sections/home/Hero";
import Brands from "@/components/sections/home/Brands";
import WhatItDoes from "@/components/sections/home/WhatItDoes";
import TheResult from "@/components/sections/home/TheResult";
import Testimonials from "@/components/sections/home/Testimonials";
import WhyAxiler from "@/components/sections/home/WhyAxiler";

export default function Home() {
  return (
    <main id="main-content">
      <Hero />
      <Brands />
      <WhatItDoes />
      <TheResult />
      <Testimonials />
      <WhyAxiler />
    </main>
  );
}
