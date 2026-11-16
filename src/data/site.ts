export type SocialLink = {
  label: string;
  href: string;
};

export const site = {
  name: "Your Name",
  role: ".NET Full Stack Developer | React & React Native Developer",
  email: "w4workinglife@gmail.com",
  location: "Available for remote & onsite opportunities",
  socials: {
    github: "https://github.com/iamnidhisha",
    linkedin: "https://www.linkedin.com/in/nidhi-sharma-56b20a212/",
    email: "mailto:w4workinglife@gmail.com",
  },
} satisfies Record<string, unknown> & {
  socials: Record<"github" | "linkedin" | "email", SocialLink["href"]>;
};