import { motion } from "motion/react";
import { Layers, Building2, Smartphone, Network, Database, Cloud } from "lucide-react";
import SectionHeading from "./SectionHeading";

const highlights = [
  { title: "Full Stack Development", icon: Layers },
  { title: "Enterprise Software Development", icon: Building2 },
  { title: "Mobile Application Development", icon: Smartphone },
  { title: "API Development & Integration", icon: Network },
  { title: "Database Design", icon: Database },
  { title: "Cloud Hosting & Deployment", icon: Cloud },
];

export default function About() {
  return (
    <section id="about" className="relative py-24 sm:py-32">
      <div className="section-shell">
        <SectionHeading
          eyebrow="About Me"
          title={
            <>
              Turning Ideas Into <span className="gradient-text">Scalable Solutions</span>
            </>
          }
        />

        <div className="grid gap-10 lg:grid-cols-[1.15fr_0.85fr]">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7 }}
            className="glass rounded-3xl p-7 sm:p-10"
          >
            <p className="text-lg leading-relaxed text-slate-300">
              I am a software developer experienced in designing, developing, and deploying modern web
              and mobile applications. My expertise includes the Microsoft .NET ecosystem, frontend
              development, backend architecture, database management, and cloud hosting.
            </p>
            <p className="mt-6 text-lg leading-relaxed text-slate-400">
              I have worked on multiple business-oriented applications, including Supply Chain Management
              Systems, Loyalty Management Systems, Track & Trace Solutions, Warehouse Management Systems,
              and School Management Systems.
            </p>
            <p className="mt-6 text-lg leading-relaxed text-slate-400">
              I enjoy solving real-world problems through technology and building applications that deliver
              performance, scalability, and great user experiences.
            </p>
          </motion.div>

          <div className="grid gap-4 sm:grid-cols-2">
            {highlights.map(({ title, icon: Icon }, index) => (
              <motion.div
                key={title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.5, delay: index * 0.07 }}
                whileHover={{ y: -5 }}
                className="glass group rounded-2xl p-5"
              >
                <div className="mb-4 inline-flex rounded-xl bg-gradient-to-br from-sky-500/20 to-violet-600/20 p-3">
                  <Icon className="h-5 w-5 text-sky-300" />
                </div>
                <h3 className="font-display text-base font-semibold text-white">{title}</h3>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}