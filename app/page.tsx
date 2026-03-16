import Hero from "@/components/sections/home/Hero";
import Brands from "@/components/sections/home/Brands";
import WhatItDoes from "@/components/sections/home/WhatItDoes";
import TheResult from "@/components/sections/home/TheResult";

export default function Home() {
  return (
    <main id="main-content">
      <Hero />
      <Brands />
      <WhatItDoes />
      <TheResult />
    </main>
  );
}
