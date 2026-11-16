export type ExperienceItem = {
  company: string;
  role: string;
  duration: string;
  responsibilities: string[];
  projects: string[];
};

export const experience: ExperienceItem[] = [
  {
    company: "Company Name",
    role: "Job Title",
    duration: "Employment Duration",
    responsibilities: [
      "Key responsibility placeholder",
      "Key responsibility placeholder",
      "Key responsibility placeholder",
    ],
    projects: [
      "Major project placeholder",
      "Major project placeholder",
    ],
  },
];