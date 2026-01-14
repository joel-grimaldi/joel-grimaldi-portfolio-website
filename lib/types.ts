export interface Project {
  id: string;
  title: string;
  description: string;
  technologies: string[];
  githubUrl?: string;
  liveUrl?: string;
  imageUrl?: string;
  problem?: string;
  solution?: string;
  challenges?: string[];
  results?: string;
}

export type ContactItemType = "email" | "link" | "download";

export interface ContactItem {
  type: ContactItemType;
  label: string;
  href: string;
  displayText: string;
  showIcon?: boolean;
}
