import { Project } from "@/lib/types";

interface ProjectCardProps extends Omit<Project, "id"> {}

export default function ProjectCard({
  title,
  description,
  technologies,
  githubUrl,
  liveUrl,
  imageUrl,
}: ProjectCardProps) {
  return (
    <div className="bg-gray-800 rounded-lg p-6 hover:bg-gray-750 transition-colors border border-gray-700">
      <h2 className="text-2xl font-semibold mb-3 text-foreground">{title}</h2>
      <p className="text-gray-300 mb-4 leading-relaxed">{description}</p>

      <div className="flex flex-wrap gap-2 mb-4">
        {technologies.map((tech) => (
          <span
            key={tech}
            className="px-3 py-1 bg-gray-700 text-accent text-sm rounded-md"
          >
            {tech}
          </span>
        ))}
      </div>

      <div className="flex gap-4">
        {githubUrl && (
          <a
            href={githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-accent hover:text-accent-light transition-colors text-sm font-medium"
          >
            GitHub →
          </a>
        )}
        {liveUrl && (
          <a
            href={liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-accent hover:text-accent-light transition-colors text-sm font-medium"
          >
            Live Demo →
          </a>
        )}
      </div>
    </div>
  );
}
