interface HeadingProps {
    children: string
    subtext?: string
    className?: string
  }
  
  export default function HeadingText({
    children,
    subtext,
    className,
  }: HeadingProps) {
    return (
      <div className={`space-y-2 ${className} text-[#eae9ea]`}>
        <h1 className="text-3xl font-bold lg:text-4xl text-[#eae9ea]">
          {children}
        </h1>
        {subtext && (
          <h2 className="font-light text-muted-foreground lg:text-lg text-[#eae9ea]">
            {subtext}
          </h2>
        )}
      </div>
    )
  }