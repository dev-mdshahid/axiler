import Hero from "@/components/sections/home/Hero";
import Brands from "@/components/sections/home/Brands";
import WhatItDoes from "@/components/sections/home/WhatItDoes";
import TheResult from "@/components/sections/home/TheResult";
import Cade from "@/components/sections/home/Cade";
import Services from "@/components/sections/home/Services";
import Testimonials from "@/components/sections/home/Testimonials";
import WhyAxiler from "@/components/sections/home/WhyAxiler";
import Lifecycle from "@/components/sections/home/Lifecycle";
import Blogs from "@/components/sections/home/Blogs";

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
      <Blogs />
    </main>
  );
}
