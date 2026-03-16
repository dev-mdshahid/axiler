import Image from "next/image";
import Link from "next/link";

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
    <section className="relative w-full py-20 md:py-28 lg:py-36 bg-transparent overflow-hidden">
      <div className="mx-auto flex w-full max-w-[1400px] flex-col items-center px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="mb-14 sm:mb-20 flex flex-col items-center text-center max-w-4xl mx-auto relative z-10 w-full">
          <div className="mb-5 inline-flex uppercase tracking-[0.2em] text-[11px] sm:text-xs font-bold text-[#A855F7] bg-[#A855F7]/10 border border-[#A855F7]/20 px-4 py-1.5 rounded-full">
            Articles
          </div>
          <h2 className="text-4xl sm:text-5xl lg:text-5xl font-bold leading-tight tracking-tight text-white mb-5">
            Blogs
          </h2>
          <p className="text-base sm:text-lg font-medium leading-relaxed text-neutral-400">
            Read our latest articles and insights on cybersecurity and AI agents.
          </p>
        </div>
        
        <div className="flex w-full flex-col gap-8 md:gap-12">
          {blogs.map((blog) => (
            <div 
              key={blog.id}
              className="group relative w-full rounded-[24px] md:rounded-[32px] overflow-hidden border border-[#A855F7]/30 bg-[#110B1A] shadow-[0_0_25px_rgba(168,85,247,0.1)] transition-all duration-500 hover:shadow-[0_0_40px_rgba(168,85,247,0.25)] hover:border-[#A855F7]/60"
            >
              <div className="absolute inset-0 z-0">
                <Image 
                  src={blog.image} 
                  alt={blog.title}
                  fill
                  className="object-cover object-center transition-transform duration-700 group-hover:scale-[1.03]"
                  quality={90}
                />
                {/* Smooth gradient overlays to ensure seamless text readability */}
                <div className="absolute inset-0 bg-[#05020A]/20"></div>
                <div className="absolute inset-0 bg-linear-to-r from-[#0B0616] via-[#0B0616]/90 to-transparent w-full lg:w-[80%]"></div>
                <div className="absolute inset-0 bg-linear-to-r from-[#0B0616] via-[#0B0616]/60 to-transparent md:hidden"></div>
              </div>
              
              <div className="relative z-10 w-full lg:w-[75%] xl:w-[65%] p-6 sm:p-10 md:p-12 lg:p-14 flex flex-col items-start justify-center min-h-[350px] md:min-h-[400px]">
                <span className="text-white font-bold text-[13px] md:text-[14px] mb-3 tracking-wide">
                  {blog.category}
                </span>
                
                <h3 className="text-white text-[22px] sm:text-[28px] lg:text-[34px] font-bold leading-tight md:leading-[1.2] mb-4 md:mb-5 max-w-3xl">
                  {blog.title}
                </h3>
                
                <p className="text-[#A1A1AA] text-[14px] sm:text-[15px] leading-relaxed mb-4 md:mb-5 max-w-2xl">
                  {blog.description}
                </p>
                
                <p className="text-[#A1A1AA] text-[14px] sm:text-[15px] mb-6 md:mb-8">
                  {blog.insightText}
                </p>
                
                <Link 
                  href={blog.link}
                  className="bg-white/5 hover:bg-white/10 backdrop-blur-md border border-white/10 text-white px-6 py-2.5 md:px-7 md:py-3 rounded-[10px] font-medium transition-all duration-300 shadow-sm hover:shadow-[0_4px_25px_rgba(255,255,255,0.1)] text-[13px] md:text-[14px]"
                >
                  {blog.buttonText}
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
