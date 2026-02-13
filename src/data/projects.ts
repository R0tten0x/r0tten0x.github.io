export interface Project {
  id: string;
  name: string;
  description: string;
  icon: string;
  platforms: string[];
  category: string;
  status: "Published" | "In Development";
  links: {
    appStore?: string;
    web?: string;
    github?: string;
  };
}

export const projects: Project[] = [
  {
    id: "blackbox-journal",
    name: "Blackbox Journal",
    description:
      "A private journaling app with on-device mood analysis. Your thoughts stay on your device — always.",
    icon: "/img/blackboxJournal.png",
    platforms: ["iOS"],
    category: "Journaling",
    status: "Published",
    links: {
      appStore:
        "https://apps.apple.com/us/app/blackbox-journal/id6747674331",
    },
  },
  {
    id: "bury-me-here",
    name: "Bury Me Here",
    description:
      "An anonymous social platform for raw, unfiltered expression. Say what you mean. Mean what you say.",
    icon: "/img/bmh.png",
    platforms: ["iOS", "Web", "Android"],
    category: "Social Media",
    status: "In Development",
    links: {},
  },
];
