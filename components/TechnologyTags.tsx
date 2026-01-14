interface TechnologyTagsProps {
  technologies: string[];
  variant?: "default" | "large";
}

export default function TechnologyTags({
  technologies,
  variant = "default",
}: TechnologyTagsProps) {
  const baseClasses =
    variant === "large"
      ? "px-4 py-2 bg-zinc-800 text-accent text-sm rounded-md border border-zinc-700"
      : "px-3 py-1 bg-zinc-800 text-accent text-sm rounded-md";

  return (
    <div className="flex flex-wrap gap-2">
      {technologies.map((tech) => (
        <span key={tech} className={baseClasses}>
          {tech}
        </span>
      ))}
    </div>
  );
}
