import { notFound } from "next/navigation";
import { generateMetadata as generateSEOMetadata } from "@/lib/metadata";
import { projects } from "@/data/projects";
import BackButton from "@/components/BackButton";
import TechnologyTags from "@/components/TechnologyTags";
import ProjectSection from "@/components/ProjectSection";
import ProjectLinks from "@/components/ProjectLinks";
import PausableGif from "@/components/PausableGif";
import type { Metadata } from "next";

interface ProjectPageProps {
  params: Promise<{ id: string }>;
}

export async function generateStaticParams() {
  return projects.map((project) => ({
    id: project.id,
  }));
}

export async function generateMetadata({ params }: ProjectPageProps): Promise<Metadata> {
  const { id } = await params;
  const project = projects.find((p) => p.id === id);

  if (!project) {
    return {
      title: "Project Not Found - Joel Grimaldi",
    };
  }

  return generateSEOMetadata({
    title: `${project.title} - Joel Grimaldi`,
    description: project.description,
  });
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const { id } = await params;
  const project = projects.find((p) => p.id === id);

  if (!project) {
    notFound();
  }

  // Process description: keep double newlines, remove single newlines
  const processedDescription = project.description
    .replace(/\n\n/g, "__PARAGRAPH_BREAK__")
    .replace(/\n/g, " ")
    .replace(/__PARAGRAPH_BREAK__/g, "\n\n");

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 pb-12">
      <BackButton href="/" label="Back to Projects" />

      <h1 className="text-4xl font-bold mb-4 text-foreground">{project.title}</h1>

      {project.id === "1" && (
        <div className="mb-8 max-w-md">
          <PausableGif
            gifSrc="/projects/debate-bot/debate-bot-gif.gif"
            staticSrc="/projects/debate-bot/debate-bot-img.png"
            alt="Debate Bot demonstration"
            width={600}
            height={338}
          />
        </div>
      )}

      <div className="prose prose-lg prose-invert max-w-none">
        <p className="text-gray-300 text-lg mb-8 leading-relaxed whitespace-pre-line">
          {processedDescription}
        </p>

        <div className="mb-8">
          <TechnologyTags technologies={project.technologies} variant="large" />
        </div>

        <ProjectLinks githubUrl={project.githubUrl} liveUrl={project.liveUrl} />

        {project.problem && (
          <ProjectSection title="Problem">
            <p className="text-gray-300 text-lg leading-relaxed">{project.problem}</p>
          </ProjectSection>
        )}

        {project.solution && (
          <ProjectSection title="Solution">
            <p className="text-gray-300 text-lg leading-relaxed">{project.solution}</p>
          </ProjectSection>
        )}

        {project.challenges && project.challenges.length > 0 && (
          <ProjectSection title="Challenges">
            <ul className="list-disc list-inside space-y-2 text-gray-300">
              {project.challenges.map((challenge, index) => (
                <li key={index} className="text-lg leading-relaxed">
                  {challenge}
                </li>
              ))}
            </ul>
          </ProjectSection>
        )}

        {project.results && (
          <ProjectSection title="Results">
            <p className="text-gray-300 text-lg leading-relaxed">{project.results}</p>
          </ProjectSection>
        )}
      </div>
    </div>
  );
}
