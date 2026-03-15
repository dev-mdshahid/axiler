interface SectionWrapperProps {
  children: React.ReactNode;
  id?: string;
  className?: string;
  as?: React.ElementType;
}

export function SectionWrapper({
  children,
  id,
  className = "",
  as: Component = "section",
}: SectionWrapperProps) {
  return (
    <Component id={id} className={`w-full ${className}`}>
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        {children}
      </div>
    </Component>
  );
}
