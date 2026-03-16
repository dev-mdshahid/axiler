import Image from "next/image";
import Link from "next/link";
import { SectionWrapper } from "@/components/ui/SectionWrapper";

const blogs = [
  {
    id: 1,
    category: "Retention x Cybersecurity",
    title: "From Trust to Retention: The Role of Cybersecurity",
    description: "In industries built on trust, such as finance, e-commerce, and healthcare, security isn't just compliance, it's what holds customer confidence together. And when trust holds, retention follows.",
    insightText: "Get the full insight on our blog.",
    buttonText: "Read More",
    image: "/assets/blogs/blog-1.png",
    link: "#",
  },
  {
    id: 2,
    category: "Bad Bots X Need Ror Automation",
    title: "The Rise of Bad Bots: why behavior based Security is Now Critical",
    description: "In industries built on trust, such as finance, e-commerce, and healthcare, security isn't just compliance, it's what holds customer confidence together. And when trust holds, retention follows.",
    insightText: "Get the full insight on our blog.",
    buttonText: "Read More",
    image: "/assets/blogs/blog-2.jpg",
    link: "#",
  }
];

export default function Blogs() {
  return (
    <SectionWrapper className="relative w-full bg-transparent overflow-hidden border-t border-white/5" disableXPadding>
      {/* Background Ambience */}
      <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
        <div className="absolute top-[20%] left-[-10%] h-[400px] w-[600px] rounded-full bg-purple-500/5 blur-[120px]" />
      </div>

      <div className="mx-auto flex w-full max-w-5xl flex-col items-center relative z-10 px-4 sm:px-6 lg:px-8">
        <div className="mb-14 sm:mb-16 flex flex-col items-center text-center max-w-3xl mx-auto w-full">
          <div className="mb-5 inline-flex uppercase tracking-[0.2em] text-[11px] sm:text-xs font-bold text-purple-400 bg-purple-400/10 border border-purple-400/20 px-4 py-1.5 rounded-full">
            Cybersecurity Insights
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-white via-white to-white/60 mb-5">
            Latest Trends in Autonomous Security & AI
          </h2>
          <p className="text-sm sm:text-base font-medium leading-relaxed text-neutral-400">
            Stay ahead of threat actors with expert analysis, technical deep dives, and the latest news on agentic AI security.
          </p>
        </div>
        
        <div className="flex flex-col gap-8 lg:gap-12 w-full">
          {blogs.map((blog, index) => (
            <div 
              key={blog.id}
              className={`group flex flex-col md:flex-row rounded-3xl border border-white/5 bg-[#0A0B14] overflow-hidden transition-all duration-500 hover:bg-[#0c0d1a] border-white/[0.02] hover:border-white/10 hover:shadow-[0_0_30px_rgba(168,85,247,0.03)] ${
                index % 2 !== 0 ? 'md:flex-row-reverse' : ''
              }`}
            >
              {/* Image Side */}
              <div className="relative w-full md:w-[45%] lg:w-[40%] h-[240px] sm:h-[300px] md:h-auto overflow-hidden bg-[#03040C]">
                {/* Subtle color blend overlay on hover */}
                <div className="absolute inset-0 bg-purple-500/10 mix-blend-color z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
                <Image 
                  src={blog.image} 
                  alt={blog.title}
                  fill
                  className="object-cover object-center transition-transform duration-700 group-hover:scale-105 opacity-90 group-hover:opacity-100"
                  quality={90}
                />
              </div>
              
              {/* Content Side */}
              <div className="flex flex-col flex-1 p-8 sm:p-10 lg:p-12 justify-center relative">
                {/* Subtle bg glow inside the card text area */}
                <div className="absolute top-0 left-0 w-full h-full bg-linear-to-b md:bg-linear-to-r from-purple-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
                
                <div className="relative z-10 flex items-center gap-3 mb-5">
                  <div className="w-8 h-[1px] bg-purple-500/50 transition-all duration-300 group-hover:bg-purple-400 group-hover:w-12"></div>
                  <span className="text-purple-400 font-bold text-[10px] sm:text-[11px] tracking-[0.2em] uppercase">
                    {blog.category}
                  </span>
                </div>
                
                <h3 className="relative z-10 text-white text-2xl sm:text-3xl lg:text-3xl font-semibold leading-tight md:leading-[1.3] mb-5 group-hover:text-purple-50 transition-colors">
                  {blog.title}
                </h3>
                
                <p className="relative z-10 text-neutral-400 text-sm sm:text-base leading-relaxed mb-8 max-w-2xl flex-1">
                  {blog.description}
                </p>
                
                <div className="relative z-10 mt-auto flex items-center justify-between pt-6 border-t border-white/5">
                  <span className="text-neutral-500 text-sm font-medium hidden sm:block">
                    {blog.insightText}
                  </span>
                  <Link 
                    href={blog.link}
                    className="inline-flex items-center gap-2 text-white font-semibold text-sm transition-all duration-300 group-hover:text-purple-400"
                  >
                    <span className="relative pb-0.5">
                      {blog.buttonText}
                      <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-purple-400 transition-all duration-300 group-hover:w-full"></span>
                    </span>
                    <svg className="w-4 h-4 transform transition-transform duration-300 group-hover:translate-x-1.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
}
