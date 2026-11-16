import { Mail } from "lucide-react";
import {
  FaGithub as Github,
  FaLinkedin as Linkedin
} from "react-icons/fa";
import { site } from "../data/site";

export default function Footer() {
  return (
    <footer className="relative border-t border-white/10 py-10">
      <div className="section-shell flex flex-col items-center justify-between gap-6 sm:flex-row">
        <p className="text-sm text-slate-500">
          © {new Date().getFullYear()} {site.name}. Built with React, TypeScript, and Tailwind CSS.
        </p>

        <div className="flex items-center gap-3">
          {[
            { icon: Github, href: site.socials.github, label: "GitHub" },
            { icon: Linkedin, href: site.socials.linkedin, label: "LinkedIn" },
            { icon: Mail, href: site.socials.email, label: "Email" },
          ].map(({ icon: Icon, href, label }) => (
            <a
              key={label}
              href={href}
              target={href.startsWith("http") ? "_blank" : undefined}
              rel="noreferrer"
              aria-label={label}
              className="rounded-xl border border-white/10 bg-white/5 p-2.5 text-slate-400 transition hover:border-sky-400/40 hover:text-sky-300"
            >
              <Icon className="h-4 w-4" />
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}