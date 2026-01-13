import { Project } from "@/lib/types";

export const projects: Project[] = [
  {
    id: "1",
    title: "Project Name",
    description:
      "A brief description of the project, what it does, and the problem it solves. This should be concise but informative.",
    technologies: ["Python", "JavaScript", "React"],
    githubUrl: "https://github.com/username/project",
    liveUrl: "https://project-demo.com",
  },
  {
    id: "2",
    title: "Another Project",
    description:
      "Description of another project showcasing different skills and technologies. Highlight key features and achievements.",
    technologies: ["TypeScript", "Next.js", "Node.js"],
    githubUrl: "https://github.com/username/another-project",
  },
  {
    id: "3",
    title: "Third Project",
    description:
      "Another example project that demonstrates your range of skills and experience with various technologies and frameworks.",
    technologies: ["Python", "Django", "PostgreSQL"],
    liveUrl: "https://third-project.com",
  },
  {
    id: "4",
    title: "Fourth Project",
    description:
      "A project that showcases additional technical capabilities and problem-solving skills. Demonstrates proficiency with modern development practices.",
    technologies: ["React", "TypeScript", "Tailwind CSS"],
    githubUrl: "https://github.com/username/fourth-project",
    liveUrl: "https://fourth-project.com",
  },
];
