interface SectionWrapperProps {
  children: React.ReactNode;
  id?: string;
  className?: string;
  as?: React.ElementType;
  disableXPadding?: boolean;
}

export function SectionWrapper({
  children,
  id,
  className = "",
  as: Component = "section",
  disableXPadding = false,
}: SectionWrapperProps) {
  return (
    <Component id={id} className={`w-full py-16 sm:py-20 lg:py-24 ${className}`}>
      <div className={`mx-auto w-full max-w-7xl ${disableXPadding ? "" : "px-4 sm:px-6 lg:px-8"}`}>
        {children}
      </div>
    </Component>
  );
}
