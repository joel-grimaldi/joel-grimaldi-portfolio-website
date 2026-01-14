import { Project } from "@/lib/types";

export const projects: Project[] = [
  {
    id: "1",
    title: "Debate Bot",
    description:
      "A revenue generating service using third-party applcations such as Minecraft, Tikfinity, and TikTok livestreaming\n\nThe stream depicts a battle between two bots, each representing one side of a debate.\nViewers can set back the progress of either of the bots through donations and interactions.\nThe most profitable debate was 'Kamala Harris' vs. 'Donald Trump.'\n\nThrough the use of a Python mouse/keyboard automation script, the service was able to run optimally 24/7.\nViewer count was tracked and the stream-reset algorithm was tailored to gather 200+ concurrent viewers.\n\nPlans to scale to multiple computers and accounts weren't plausible due to TikTok's guidelines.",
    technologies: ["JavaScript", "Python", "TikTok"],
    imageUrl: "/projects/debate-bot/debate-bot-img.png",
  },
  {
    id: "2",
    title: "Shortcut Visualizer",
    description:
      "A web app that simplifies navigating keyboard shortcuts\n\nShortcut Visualizer provides an interactive keyboard higlighting current keys used in shortcuts with brief descriptions on hover.\nThere is a search functionality as well as a filtering functionality to see which combinations any key is used in.\n\nThe user pastes in their keyboard_shortcuts.json or selects from our serverside copy of application shortcuts.",
    technologies: ["Next.js", "TypeScript", "React", "CSS"],
  },
  {
    id: "3",
    title: "Plus Rep",
    description:
      "A web/mobile app where gamers can rate and review their teammates/opponents",
    technologies: ["Next.js", "TypeScript", "React", "CSS"],
  },
  {
    id: "4",
    title: "Scarlet Sky",
    description:
      "Showcase for Scarlet Sky Productions films",
    technologies: ["JavaScript", "CSS", "HTML"],
    liveUrl: "https://scarletskyfilms.com",
  },
];
