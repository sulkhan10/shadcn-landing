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
      <div className={`space-y-2 ${className} `}>
        <h1 className="text-3xl font-bold text-primary lg:text-4xl text-white">
          {children}
        </h1>
        {subtext && (
          <h2 className="font-light text-muted-foreground lg:text-lg text-white">
            {subtext}
          </h2>
        )}
      </div>
    )
  }