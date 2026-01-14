interface ProjectSectionProps {
  title: string;
  children: React.ReactNode;
}

export default function ProjectSection({ title, children }: ProjectSectionProps) {
  return (
    <section className="mb-8">
      <h2 className="text-2xl font-semibold mb-4 text-foreground">{title}</h2>
      {children}
    </section>
  );
}
