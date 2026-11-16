import type { LucideIcon } from "lucide-react";
import {
  Server,
  MonitorSmartphone,
  Database,
  Cloud,
} from "lucide-react";

export type SkillCategory = {
  id: string;
  title: string;
  icon: LucideIcon;
  accent: string;
  skills: string[];
};

export const skillCategories: SkillCategory[] = [
  {
    id: "backend",
    title: "Backend Development",
    icon: Server,
    accent: "from-sky-400 to-blue-600",
    skills: [
      "C#",
      "ASP.NET Core",
      ".NET Web API",
      "REST API",
      "Node.js",
    ],
  },
  {
    id: "frontend",
    title: "Frontend Development",
    icon: MonitorSmartphone,
    accent: "from-violet-400 to-fuchsia-600",
    skills: [
      "React.js",
      "Angular",
      "JavaScript",
      "TypeScript",
      "HTML5",
      "CSS3",
      "Tailwind CSS",
    ],
  },
  {
    id: "mobile",
    title: "Mobile Development",
    icon: Smartphone,
    accent: "from-cyan-400 to-teal-500",
    skills: [
      "React Native",
      "Cross-platform Application Development",
    ],
  },
  {
    id: "database",
    title: "Database",
    icon: Database,
    accent: "from-blue-400 to-indigo-600",
    skills: [
      "Microsoft SQL Server",
      "Database Design",
      "Query Optimization",
    ],
  },
  {
    id: "cloud",
    title: "Cloud & Deployment",
    icon: Cloud,
    accent: "from-sky-400 to-violet-600",
    skills: [
      "AWS",
      "Microsoft Azure",
      "IIS Server",
      "Application Hosting",
      "Deployment & Configuration",
    ],
  },
];

import { Smartphone } from "lucide-react";