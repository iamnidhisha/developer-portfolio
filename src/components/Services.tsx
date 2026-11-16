import { motion } from "motion/react";
import SectionHeading from "./SectionHeading";
import { services } from "../data/services";

export default function Services() {
  return (
    <section id="services" className="relative py-24 sm:py-32">
      <div className="section-shell">
        <SectionHeading
          eyebrow="Services"
          title={
            <>
              End-to-End <span className="gradient-text">Software Delivery</span>
            </>
          }
          description="From product architecture and development to deployment, hosting, and ongoing technical support."
        />

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: (index % 3) * 0.07 }}
              whileHover={{ y: -6 }}
              className="glass group relative overflow-hidden rounded-3xl p-6"
            >
              <div className="absolute -bottom-16 -right-16 h-36 w-36 rounded-full bg-gradient-to-br from-sky-500/20 to-violet-600/20 opacity-0 blur-3xl transition duration-500 group-hover:opacity-100" />
              <div className="relative">
                <div className="mb-5 inline-flex rounded-xl border border-white/10 bg-white/5 p-3">
                  <service.icon className="h-5 w-5 text-sky-300" />
                </div>
                <h3 className="font-display text-lg font-semibold text-white">{service.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-slate-400">{service.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}