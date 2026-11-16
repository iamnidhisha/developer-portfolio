import { motion } from "motion/react";
import {
  ArrowDown,
  ArrowUpRight,
  Mail,
  Code2,
  Database,
  Cloud,
  Smartphone,
} from "lucide-react";
import { FaGithub as Github, FaLinkedin as Linkedin } from "react-icons/fa";
import { site } from "../data/site";

const badges = [
  { icon: Code2, label: ".NET" },
  { icon: Database, label: "SQL Server" },
  { icon: Smartphone, label: "React Native" },
  { icon: Cloud, label: "AWS / Azure" },
];

export default function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center overflow-hidden pt-28 pb-20"
    >
      <div className="section-shell relative z-10 grid items-center gap-14 lg:grid-cols-[1.1fr_0.9fr]">
        <div>
          <motion.div
            initial={{ opacity: 0, scale: 0.92 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative mx-auto flex w-full max-w-sm items-center justify-center"
          >
            {/* Outer glow */}
            <div className="absolute inset-0 rounded-full bg-gradient-to-br from-sky-500/30 via-violet-600/25 to-cyan-400/20 blur-3xl" />

            {/* Rotating gradient ring */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 18, repeat: Infinity, ease: "linear" }}
              className="absolute -inset-3 rounded-full bg-[conic-gradient(from_0deg,#38bdf8,#8b5cf6,#22d3ee,#38bdf8)] opacity-70 blur-[2px]"
            />

            {/* Inner dark ring */}
            <div className="absolute -inset-2 rounded-full border border-white/10 bg-[#05070d]" />

            {/* Profile image */}
            <motion.div
              whileHover={{ scale: 1.03 }}
              transition={{ duration: 0.25 }}
              className="relative h-64 w-64 overflow-hidden rounded-full border border-white/15 sm:h-80 sm:w-80"
            >
              <img
                src="/profile.jpg"
                alt="Portrait of Your Name, .NET Full Stack Developer"
                loading="eager"
                className="h-full w-full object-cover object-center"
              />

              {/* Soft premium overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#05070d]/55 via-transparent to-transparent" />
            </motion.div>

            {/* Floating badge: top right */}
            <motion.div
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -right-2 top-8 rounded-2xl border border-white/10 bg-white/10 px-4 py-2.5 text-xs font-semibold text-white backdrop-blur-xl sm:-right-6"
            >
              .NET Full Stack
            </motion.div>

            {/* Floating badge: bottom left */}
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -left-2 bottom-12 rounded-2xl border border-white/10 bg-white/10 px-4 py-2.5 text-xs font-semibold text-white backdrop-blur-xl sm:-left-6"
            >
              React Native
            </motion.div>

            {/* Availability badge */}
            <div className="absolute bottom-2 left-1/2 flex -translate-x-1/2 items-center gap-2 rounded-full border border-emerald-400/25 bg-[#05070d]/80 px-4 py-2 text-xs font-medium text-emerald-300 backdrop-blur-xl">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-70" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
              </span>
              Available for work
            </div>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.08 }}
            className="font-display text-4xl font-bold leading-[1.05] tracking-tight text-white sm:text-6xl lg:text-7xl"
          >
            Building Powerful
            <br />
            <span className="gradient-text">Digital Experiences</span>
            <br />
            Through Code.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.16 }}
            className="mt-6 text-lg font-medium text-sky-300 sm:text-xl"
          >
            {site.role}
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.24 }}
            className="mt-5 max-w-xl text-base leading-relaxed text-slate-400 sm:text-lg"
          >
            I am a passionate software developer specializing in building
            scalable web applications, enterprise software solutions, and
            cross-platform mobile applications. I transform complex business
            requirements into reliable, user-friendly digital products.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.32 }}
            className="mt-9 flex flex-wrap items-center gap-4"
          >
            <a
              href="#projects"
              className="group inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-sky-500 to-violet-600 px-7 py-3.5 font-semibold text-white shadow-xl shadow-sky-500/20 transition hover:scale-[1.02] hover:shadow-violet-500/30"
            >
              Explore My Work
              <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-7 py-3.5 font-semibold text-white backdrop-blur transition hover:border-sky-400/40 hover:bg-white/10"
            >
              Let's Connect
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.42 }}
            className="mt-9 flex items-center gap-3"
          >
            {[
              { icon: Github, href: site.socials.github, label: "GitHub" },
              {
                icon: Linkedin,
                href: site.socials.linkedin,
                label: "LinkedIn",
              },
              { icon: Mail, href: site.socials.email, label: "Email" },
            ].map(({ icon: Icon, href, label }) => (
              <a
                key={label}
                href={href}
                target={href.startsWith("http") ? "_blank" : undefined}
                rel="noreferrer"
                aria-label={label}
                className="rounded-xl border border-white/10 bg-white/5 p-3 text-slate-300 transition hover:-translate-y-1 hover:border-sky-400/40 hover:text-sky-300"
              >
                <Icon className="h-5 w-5" />
              </a>
            ))}
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.94 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative mx-auto w-full max-w-lg"
        >
          <div className="glass relative overflow-hidden rounded-[2rem] p-7 shadow-2xl shadow-sky-500/10">
            <div className="absolute -right-16 -top-16 h-52 w-52 rounded-full bg-gradient-to-br from-sky-500/30 to-violet-600/30 blur-3xl" />
            <div className="relative">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <span className="h-3 w-3 rounded-full bg-rose-400/80" />
                  <span className="h-3 w-3 rounded-full bg-amber-400/80" />
                  <span className="h-3 w-3 rounded-full bg-emerald-400/80" />
                </div>
                <span className="rounded-full border border-white/10 px-3 py-1 text-xs text-slate-400">
                  developer.config
                </span>
              </div>

              <div className="mt-8 space-y-4 font-mono text-sm">
                <p className="text-slate-400">
                  <span className="text-violet-400">const</span>{" "}
                  <span className="text-white">developer</span> = {"{"}
                </p>
                <p className="pl-5 text-slate-300">
                  <span className="text-sky-300">focus</span>:{" "}
                  <span className="text-emerald-300">".NET Full Stack"</span>,
                </p>
                <p className="pl-5 text-slate-300">
                  <span className="text-sky-300">frontend</span>:{" "}
                  <span className="text-emerald-300">
                    "React / React Native"
                  </span>
                  ,
                </p>
                <p className="pl-5 text-slate-300">
                  <span className="text-sky-300">backend</span>:{" "}
                  <span className="text-emerald-300">
                    "ASP.NET Core / Web API"
                  </span>
                  ,
                </p>
                <p className="pl-5 text-slate-300">
                  <span className="text-sky-300">deployment</span>:{" "}
                  <span className="text-emerald-300">"AWS / Azure / IIS"</span>
                </p>
                <p className="text-slate-400">{"};"}</p>
              </div>

              <div className="mt-8 grid grid-cols-2 gap-3">
                {badges.map(({ icon: Icon, label }, index) => (
                  <motion.div
                    key={label}
                    animate={{ y: [0, index % 2 === 0 ? -7 : 7, 0] }}
                    transition={{
                      duration: 4 + index,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                    className="flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-3 py-3 text-xs font-medium text-slate-200"
                  >
                    <Icon className="h-4 w-4 text-sky-300" />
                    {label}
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      <motion.a
        href="#about"
        aria-label="Scroll to About section"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-8 left-1/2 z-10 -translate-x-1/2 rounded-full border border-white/10 bg-white/5 p-3 text-slate-300 backdrop-blur transition hover:text-sky-300"
      >
        <ArrowDown className="h-5 w-5" />
      </motion.a>
    </section>
  );
}
