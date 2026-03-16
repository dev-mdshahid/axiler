import Hero from "@/components/sections/home/Hero";
import Brands from "@/components/sections/home/Brands";
import Integrations from "@/components/sections/home/Integrations";
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
    <main id="main-content" className="relative flex flex-col min-h-screen bg-gradient-to-b from-background via-[#05050f] to-[#010105] overflow-clip">
      {/* Global Background Decorations */}
      <div className="pointer-events-none absolute inset-0 z-0">
        {/* Subtle Grid Pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:linear-gradient(to_bottom,transparent_0%,#000_2%,#000_98%,transparent_100%)]" />
        
        {/* Beautiful Ambient Glows Spaced Throughout the Page */}
        <div className="absolute top-[5%] left-[10%] h-[600px] w-[600px] rounded-full bg-indigo-500/10 blur-[150px]" />
        <div className="absolute top-[20%] right-[5%] h-[700px] w-[700px] -translate-y-1/2 rounded-full bg-cyan-500/10 blur-[150px]" />
        <div className="absolute top-[35%] left-[-10%] h-[800px] w-[800px] rounded-full bg-purple-500/10 blur-[150px]" />
        <div className="absolute top-[50%] right-[-5%] h-[600px] w-[600px] rounded-full bg-blue-500/10 blur-[150px]" />
        <div className="absolute top-[65%] left-[20%] h-[700px] w-[700px] rounded-full bg-emerald-500/5 blur-[150px]" />
        <div className="absolute top-[80%] right-[15%] h-[600px] w-[600px] rounded-full bg-indigo-500/10 blur-[150px]" />
        <div className="absolute bottom-[5%] left-[30%] h-[800px] w-[800px] rounded-full bg-fuchsia-500/10 blur-[150px]" />
      </div>

      <div className="relative z-10 w-full">
        <Hero />
        <WhatItDoes />
        <Brands />
        <Integrations />
        <WhyAxiler />
        <TheResult />
        <Cade />
        <Lifecycle />
        <IndustryEvents />
        <Testimonials />
        <Services />
        <Blogs />
        <FAQ />
      </div>
    </main>
  );
}
