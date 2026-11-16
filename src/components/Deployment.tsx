import { motion } from "motion/react";
import { Cloud, Server, Rocket, Settings, ShieldCheck } from "lucide-react";
import SectionHeading from "./SectionHeading";

const capabilities = [
  { title: "AWS Cloud Hosting", icon: Cloud },
  { title: "Microsoft Azure", icon: Cloud },
  { title: "IIS Web Server", icon: Server },
  { title: "Application Deployment", icon: Rocket },
  { title: "Server Configuration", icon: Settings },
  { title: "Production Hosting", icon: ShieldCheck },
];

export default function Deployment() {
  return (
    <section className="relative py-24 sm:py-32">
      <div className="section-shell">
        <SectionHeading
          eyebrow="Deployment & Cloud"
          title={
            <>
              From Development to <span className="gradient-text">Deployment</span>
            </>
          }
          description="I don't just build applications; I also understand how to host, configure, and deploy them in production environments."
        />

        <div className="glass relative overflow-hidden rounded-[2rem] p-7 sm:p-10">
          <div className="absolute -right-24 -top-24 h-72 w-72 rounded-full bg-gradient-to-br from-sky-500/25 to-violet-600/25 blur-3xl" />

          <div className="relative grid gap-10 lg:grid-cols-[0.95fr_1.05fr]">
            <div>
              <div className="space-y-4">
                {["Development", "API & Database", "Cloud Deployment", "Production Monitoring"].map(
                  (step, index) => (
                    <motion.div
                      key={step}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      className="flex items-center gap-4 rounded-2xl border border-white/10 bg-white/5 p-4"
                    >
                      <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-sky-500 to-violet-600 font-semibold text-white">
                        {index + 1}
                      </span>
                      <span className="font-medium text-white">{step}</span>
                    </motion.div>
                  ),
                )}
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4 sm:grid-cols-3">
              {capabilities.map(({ title, icon: Icon }, index) => (
                <motion.div
                  key={title}
                  initial={{ opacity: 0, scale: 0.92 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.45, delay: index * 0.06 }}
                  whileHover={{ y: -4 }}
                  className="rounded-2xl border border-white/10 bg-white/5 p-4 text-center"
                >
                  <Icon className="mx-auto mb-3 h-6 w-6 text-cyan-300" />
                  <p className="text-sm font-medium text-slate-200">{title}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}