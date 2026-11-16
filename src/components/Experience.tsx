import { motion } from "motion/react";
import { Briefcase, CheckCircle2 } from "lucide-react";
import SectionHeading from "./SectionHeading";
import { experience } from "../data/experience";

export default function Experience() {
  return (
    <section id="experience" className="relative py-24 sm:py-32">
      <div className="section-shell">
        <SectionHeading
          eyebrow="Professional Journey"
          title={
            <>
              Experience & <span className="gradient-text">Professional Growth</span>
            </>
          }
        />

        <div className="relative mx-auto max-w-3xl">
          <div className="absolute left-[19px] top-0 h-full w-px bg-gradient-to-b from-sky-400/60 via-violet-500/40 to-transparent" />

          <div className="space-y-8">
            {experience.map((item, index) => (
              <motion.article
                key={`${item.company}-${index}`}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.6, delay: index * 0.08 }}
                className="relative pl-14"
              >
                <span className="absolute left-0 top-2 flex h-10 w-10 items-center justify-center rounded-full border border-white/15 bg-[#0a0d16]">
                  <Briefcase className="h-4 w-4 text-sky-300" />
                </span>

                <div className="glass rounded-3xl p-6">
                  <div className="flex flex-wrap items-center justify-between gap-3">
                    <h3 className="font-display text-xl font-semibold text-white">{item.role}</h3>
                    <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-slate-300">
                      {item.duration}
                    </span>
                  </div>
                  <p className="mt-2 text-sm font-medium text-sky-300">{item.company}</p>

                  <ul className="mt-5 space-y-2">
                    {item.responsibilities.map((responsibility) => (
                      <li key={responsibility} className="flex gap-3 text-sm text-slate-400">
                        <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-emerald-400" />
                        {responsibility}
                      </li>
                    ))}
                  </ul>

                  <div className="mt-5 flex flex-wrap gap-2">
                    {item.projects.map((project) => (
                      <span
                        key={project}
                        className="rounded-lg border border-white/10 bg-white/5 px-3 py-1.5 text-xs text-slate-300"
                      >
                        {project}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}