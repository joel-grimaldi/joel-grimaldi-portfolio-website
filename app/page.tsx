import { generateMetadata } from "@/lib/metadata";
import ProjectCard from "@/components/ProjectCard";
import { projects } from "@/data/projects";

export const metadata = generateMetadata({
  title: "Joel Grimaldi - Projects",
  description: "Browse through coding projects and case studies",
});

export default function Home() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 pb-12">
      <h1 className="text-4xl font-bold mb-8 text-foreground">Projects</h1>

      <div className="space-y-6">
        {projects.map((project) => (
          <ProjectCard key={project.id} {...project} />
        ))}
      </div>
    </div>
  );
}
