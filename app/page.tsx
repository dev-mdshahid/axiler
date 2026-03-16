import Hero from "@/components/sections/home/Hero";
import Brands from "@/components/sections/home/Brands";
import WhatItDoes from "@/components/sections/home/WhatItDoes";
import TheResult from "@/components/sections/home/TheResult";
import Cade from "@/components/sections/home/Cade";
import Services from "@/components/sections/home/Services";
import Testimonials from "@/components/sections/home/Testimonials";
import WhyAxiler from "@/components/sections/home/WhyAxiler";
import Lifecycle from "@/components/sections/home/Lifecycle";
import IndustryEvents from "@/components/sections/home/IndustryEvents";
import Blogs from "@/components/sections/home/Blogs";
import FAQ from "@/components/sections/home/FAQ";

export default function Home() {
  return (
    <main id="main-content">
      <Hero />
      <Brands />
      <WhatItDoes />
      <TheResult />
      <Cade />
      <Services />
      <Testimonials />
      <WhyAxiler />
      <Lifecycle />
      <IndustryEvents />
      <FAQ />
      <Blogs />
    </main>
  );
}
