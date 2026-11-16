export type ProjectLink = {
  label: string;
  url: string;
};

export type Project = {
  id: string;
  title: string;
  description: string;
  stack: string[];
  category: string;
  image: string;
  links: ProjectLink[];
};

export const projects: Project[] = [
  {
    id: "supply-chain",
    title: "Supply Chain Management System",
    description:
      "An enterprise solution designed to streamline supply chain operations, manage business workflows, and improve operational visibility.",
    stack: [".NET Web API", "SQL Server", "React", "REST API"],
    category: "Enterprise Software",
    image: "/previews/supply-chain.jpg",
    links: [],
  },
  {
    id: "loyalty",
    title: "Loyalty Management System",
    description:
      "A loyalty-based platform designed to manage customer rewards, loyalty programs, transactions, and customer engagement.",
    stack: ["ASP.NET Core", "SQL Server", "React", "REST API"],
    category: "Business Platform",
    image: "/previews/loyalty.jpg",
    links: [],
  },
  {
    id: "track-trace",
    title: "Track & Trace System",
    description:
      "A tracking solution that provides shipment visibility, status monitoring, and traceability throughout operational workflows.",
    stack: [".NET", "SQL Server", "React", "REST API"],
    category: "Operations",
    image: "/previews/track-trace.jpg",
    links: [],
  },
  {
    id: "warehouse",
    title: "Warehouse Management System",
    description:
      "A warehouse management solution designed to optimize inventory operations, stock management, and warehouse workflows.",
    stack: [".NET Web API", "SQL Server", "React", "Cloud Hosting"],
    category: "Enterprise Software",
    image: "/previews/warehouse.jpg",
    links: [],
  },
  {
    id: "school",
    title: "School Management System",
    description:
      "A centralized educational management platform developed using .NET Web API and SQL Server to manage academic and administrative operations.",
    stack: [".NET Web API", "SQL Server", "React", "REST API"],
    category: "Web Application",
    image: "/previews/school.jpg",
    links: [],
  },
  {
    id: "mobile",
    title: "Mobile Application Development",
    description:
      "Cross-platform mobile applications developed using React Native, focusing on responsive interfaces and smooth user experiences.",
    stack: ["React Native", "TypeScript", "REST API", "Cross-platform"],
    category: "Mobile Development",
    image: "/previews/mobile-apps.jpg",
    links: [
      {
        label: "HSA Gold — Google Play",
        url: "https://play.google.com/store/apps/details?id=com.binario.hsagold&pcampaignid=web_share",
      },
      {
        label: "Rishtey App — Google Play",
        url: "https://play.google.com/store/apps/details?id=com.rishteyapp.android&pcampaignid=web_share",
      },
      {
        label: "DoBiz — Google Play",
        url: "https://play.google.com/store/apps/details?id=com.binario.dobiz&hl=en_IN",
      },
      {
        label: "Real4Sure Screens — Google Play",
        url: "https://play.google.com/store/apps/details?id=com.real4sure.screens&hl=en_IN",
      },
      {
        label: "Rishta Electrical — App Store",
        url: "https://apps.apple.com/us/app/rishta-electrical/id6475721138",
      },
    ],
  },
  {
    id: "custom-software",
    title: "Customized Software Development",
    description:
      "Custom business software solutions tailored to specific organizational requirements, workflows, and operational challenges.",
    stack: [".NET", "React", "SQL Server", "Azure", "AWS"],
    category: "Custom Solutions",
    image: "/previews/custom-software.jpg",
    links: [
      {
        label: "Neyair — Live Website",
        url: "https://www.neyair.com/",
      },
      {
        label: "Beaubase Organics — Live Website",
        url: "https://beaubaseorganics.com/",
      },
    ],
  },
];
