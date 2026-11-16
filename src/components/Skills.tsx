import { motion } from "motion/react";
import SectionHeading from "./SectionHeading";
import { skillCategories } from "../data/skills";

export default function Skills() {
  return (
    <section id="skills" className="relative py-24 sm:py-32">
      <div className="section-shell">
        <SectionHeading
          eyebrow="Technical Skills"
          title={
            <>
              Tools That Power <span className="gradient-text">Modern Products</span>
            </>
          }
          description="A practical technology toolkit for building, integrating, and deploying complete software solutions."
        />

        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {skillCategories.map((category, index) => (
            <motion.article
              key={category.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.55, delay: index * 0.06 }}
              whileHover={{ y: -6 }}
              className="glass group relative overflow-hidden rounded-3xl p-6"
            >
              <div
                className={`absolute -right-12 -top-12 h-32 w-32 rounded-full bg-gradient-to-br ${category.accent} opacity-15 blur-3xl transition group-hover:opacity-30`}
              />
              <div className="relative">
                <div className={`mb-5 inline-flex rounded-xl bg-gradient-to-br ${category.accent} p-3`}>
                  <category.icon className="h-5 w-5 text-white" />
                </div>
                <h3 className="font-display text-xl font-semibold text-white">{category.title}</h3>
                <ul className="mt-5 flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <li
                      key={skill}
                      className="rounded-lg border border-white/10 bg-white/5 px-3 py-1.5 text-xs font-medium text-slate-300 transition hover:border-sky-400/40 hover:text-white"
                    >
                      {skill}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}