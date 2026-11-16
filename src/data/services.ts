import type { LucideIcon } from "lucide-react";
import {
  Code2,
  Layers,
  MonitorSmartphone,
  Network,
  Building2,
  Database,
  Cloud,
  Server,
} from "lucide-react";

export type Service = {
  title: string;
  description: string;
  icon: LucideIcon;
};

export const services: Service[] = [
  {
    title: "Custom .NET Application Development",
    description:
      "Scalable business applications built around your workflows, data, and operational requirements.",
    icon: Code2,
  },
  {
    title: "Full Stack Web Development",
    description:
      "End-to-end web applications with modern frontend interfaces, secure APIs, and reliable databases.",
    icon: Layers,
  },
  {
    title: "React & Angular Development",
    description:
      "Responsive, maintainable frontend applications using React, Angular, TypeScript, and Tailwind CSS.",
    icon: MonitorSmartphone,
  },
  {
    title: "React Native Mobile App Development",
    description:
      "Cross-platform mobile applications with clean interfaces and smooth user experiences.",
    icon: Smartphone,
  },
  {
    title: "REST API Development",
    description:
      "Well-structured APIs and integrations that connect applications, services, and business systems.",
    icon: Network,
  },
  {
    title: "Enterprise Software Development",
    description:
      "Business-oriented platforms for operations, supply chain, inventory, education, and customer engagement.",
    icon: Building2,
  },
  {
    title: "Database Development & Management",
    description:
      "SQL Server database design, optimization, and reliable data access for production applications.",
    icon: Database,
  },
  {
    title: "AWS & Azure Application Deployment",
    description:
      "Cloud hosting, deployment, configuration, and production environment support.",
    icon: Cloud,
  },
  {
    title: "IIS Server Configuration and Hosting",
    description:
      "Application hosting, server configuration, and deployment support for .NET-based solutions.",
    icon: Server,
  },
];

import { Smartphone } from "lucide-react";