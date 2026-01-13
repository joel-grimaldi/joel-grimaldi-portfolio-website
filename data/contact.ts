import { ContactItem } from "@/lib/types";

export const contactItems: ContactItem[] = [
  {
    type: "link",
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/joel-grimaldi-5a14a81a3/",
    displayText: "linkedin.com/in/joel-grimaldi-5a14a81a3",
  },
  {
    type: "link",
    label: "GitHub",
    href: "https://github.com/joel-grimaldi",
    displayText: "github.com/joel-grimaldi",
  },
  {
    type: "download",
    label: "Resume",
    href: "/Joel_Grimaldi_Resume.pdf",
    displayText: "Download Resume",
    showIcon: true,
  },
];
