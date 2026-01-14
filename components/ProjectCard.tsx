import { Project } from "@/lib/types";
import Link from "next/link";
import Image from "next/image";
import TechnologyTags from "@/components/TechnologyTags";

interface ProjectCardProps extends Project {}

export default function ProjectCard({
  id,
  title,
  description,
  technologies,
  githubUrl,
  liveUrl,
  imageUrl,
}: ProjectCardProps) {
  return (
    <Link href={`/projects/${id}`} className="block mb-8 last:mb-0">
      <div className="bg-gray-800 rounded-lg overflow-hidden hover:bg-gray-750 transition-colors border border-gray-700 cursor-pointer flex flex-col md:flex-row">
        {imageUrl && (
          <div className="relative w-full md:w-1/3 h-64 md:h-auto">
            <Image
              src={imageUrl}
              alt={title}
              fill
              className="object-contain"
            />
          </div>
        )}
        <div className="p-6 flex flex-col flex-grow">
          <h2 className="text-2xl font-semibold mb-3 text-foreground">{title}</h2>
          <p className="text-gray-300 mb-4 leading-relaxed flex-grow">
            {description.split('\n')[0]}
          </p>

          <div className="mb-4">
            <TechnologyTags technologies={technologies} variant="default" />
          </div>

          <div className="flex gap-4 text-accent hover:text-accent-light transition-colors text-sm font-medium">
            <span>View Details →</span>
          </div>
        </div>
      </div>
    </Link>
  );
}
