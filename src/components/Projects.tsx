import { motion } from "motion/react";
import { ArrowUpRight, ExternalLink, Lock } from "lucide-react";
import SectionHeading from "./SectionHeading";
import { projects, type Project, type ProjectLink } from "../data/projects";

function ProjectLinkButton({ link }: { link: ProjectLink }) {
  return (
    <a
      href={link.url}
      target="_blank"
      rel="noopener noreferrer"
      className="group/link inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 text-sm font-medium text-slate-200 transition-all duration-300 hover:-translate-y-0.5 hover:border-sky-400/50 hover:bg-sky-500/10 hover:text-sky-200"
    >
      <span className="h-1.5 w-1.5 rounded-full bg-sky-400 transition group-hover/link:bg-violet-400" />
      {link.label}
      <ExternalLink className="h-3.5 w-3.5 opacity-60 transition group-hover/link:opacity-100" />
    </a>
  );
}

function ProjectCard({ project, index }: { project: Project; index: number }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 34 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.6, delay: (index % 3) * 0.08 }}
      whileHover={{ y: -8 }}
      className="glass group relative flex h-full flex-col overflow-hidden rounded-3xl transition-shadow duration-300 hover:shadow-2xl hover:shadow-sky-500/10"
    >
      {/* Visual header */}
      {/* <div className="relative h-44 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-sky-500/20 via-violet-600/20 to-cyan-500/10" />

        <div className="absolute inset-0 opacity-20 [background-image:linear-gradient(to_right,rgba(255,255,255,0.25)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.25)_1px,transparent_1px)] bg-[size:34px_34px]" />

        <div className="absolute inset-0 flex items-center justify-center px-6">
          <span className="text-center font-display text-2xl font-bold uppercase tracking-[0.18em] text-white/15 transition duration-500 group-hover:scale-105 group-hover:text-white/25">
            {project.category}
          </span>
        </div>

        <div className="absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-[#0a0d16] via-[#0a0d16]/70 to-transparent" />
      </div> */}
      <div className="relative h-48 overflow-hidden">
        <img
          src={project.image}
          alt={`${project.title} preview`}
          loading="lazy"
          className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-[#0a0d16] via-[#0a0d16]/35 to-transparent" />

        <div className="absolute inset-x-0 bottom-0 p-5">
          <span className="rounded-full border border-white/15 bg-[#05070d]/70 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.16em] text-sky-300 backdrop-blur">
            {project.category}
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="flex flex-1 flex-col p-6">
        <div className="mb-4 flex items-center justify-between gap-3">
          <span className="rounded-full border border-sky-400/20 bg-sky-400/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.16em] text-sky-300">
            {project.category}
          </span>

          {project.links.length > 0 ? (
            <span className="inline-flex items-center gap-1.5 rounded-full border border-emerald-400/20 bg-emerald-400/10 px-3 py-1 text-[11px] font-medium text-emerald-300">
              Live
            </span>
          ) : (
            <span className="inline-flex items-center gap-1.5 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-[11px] font-medium text-slate-400">
              <Lock className="h-3 w-3" />
              Private
            </span>
          )}
        </div>

        <h3 className="font-display text-xl font-semibold leading-snug text-white">
          {project.title}
        </h3>

        <p className="mt-3 flex-1 text-sm leading-relaxed text-slate-400">
          {project.description}
        </p>

        <div className="mt-5 flex flex-wrap gap-2">
          {project.stack.map((tech) => (
            <span
              key={tech}
              className="rounded-lg border border-white/10 bg-white/[0.04] px-2.5 py-1 text-xs font-medium text-slate-300"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Links */}
        <div className="mt-6 border-t border-white/10 pt-5">
          {project.links.length > 0 ? (
            <div className="flex flex-wrap gap-2">
              {project.links.slice(0, 2).map((link) => (
                <ProjectLinkButton key={link.url} link={link} />
              ))}

              {project.links.length > 2 ? (
                <span className="inline-flex items-center rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 text-sm text-slate-400">
                  +{project.links.length - 2} more
                </span>
              ) : null}
            </div>
          ) : (
            <div className="flex items-center justify-between gap-3">
              <span className="text-xs text-slate-500">
                Enterprise solution delivered for business use.
              </span>

              <button
                type="button"
                className="inline-flex shrink-0 items-center gap-1.5 rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 text-sm font-medium text-slate-300 transition hover:border-sky-400/40 hover:text-sky-200"
              >
                Details
                <ArrowUpRight className="h-3.5 w-3.5" />
              </button>
            </div>
          )}
        </div>
      </div>
    </motion.article>
  );
}

export default function Projects() {
  return (
    <section id="projects" className="relative py-24 sm:py-32">
      <div className="section-shell">
        <SectionHeading
          eyebrow="Featured Projects"
          title={
            <>
              Solutions Built for{" "}
              <span className="gradient-text">Real Business Needs</span>
            </>
          }
          description="A selection of enterprise platforms, web applications, and cross-platform mobile products. Publicly available project links are shown where applicable."
        />

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {projects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
