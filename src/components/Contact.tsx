import { useState, type FormEvent } from "react";
import { motion } from "motion/react";
import { Mail, Send, CheckCircle2, AlertCircle } from "lucide-react";
import {
  FaGithub as Github,
  FaLinkedin as Linkedin
} from "react-icons/fa";
import SectionHeading from "./SectionHeading";
import { site } from "../data/site";

type FormState = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

const initialForm: FormState = {
  name: "",
  email: "",
  subject: "",
  message: "",
};

type Errors = Partial<Record<keyof FormState, string>>;

export default function Contact() {
  const [form, setForm] = useState<FormState>(initialForm);
  const [errors, setErrors] = useState<Errors>({});
  const [submitted, setSubmitted] = useState(false);

  const validate = (values: FormState): Errors => {
    const next: Errors = {};

    if (!values.name.trim()) next.name = "Please enter your name.";
    if (!values.email.trim()) next.email = "Please enter your email address.";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email)) {
      next.email = "Please enter a valid email address.";
    }
    if (!values.subject.trim()) next.subject = "Please enter a subject.";
    if (values.message.trim().length < 20) {
      next.message = "Please provide at least 20 characters.";
    }

    return next;
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const validationErrors = validate(form);
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length > 0) {
      setSubmitted(false);
      return;
    }

    setSubmitted(true);
    setForm(initialForm);
  };

  const updateField = (field: keyof FormState, value: string) => {
    setForm((current) => ({ ...current, [field]: value }));
    setErrors((current) => ({ ...current, [field]: undefined }));
  };

  const fieldClass = (hasError?: string) =>
    `w-full rounded-xl border bg-white/5 px-4 py-3 text-sm text-white outline-none transition placeholder:text-slate-500 focus:border-sky-400/60 focus:bg-white/10 ${
      hasError ? "border-rose-500/60" : "border-white/10"
    }`;

  return (
    <section id="contact" className="relative py-24 sm:py-32">
      <div className="section-shell">
        <SectionHeading
          eyebrow="Contact"
          title={
            <>
              Have a Project in Mind? <br className="hidden sm:block" />
              Let's Build <span className="gradient-text">Something Great.</span>
            </>
          }
          description="Whether you need a scalable web application, enterprise software solution, or mobile application, let's discuss how we can bring your ideas to life."
        />

        <div className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="glass rounded-3xl p-7 sm:p-9"
          >
            <h3 className="font-display text-2xl font-semibold text-white">Let's Connect</h3>
            <p className="mt-4 text-slate-400">
              I am open to discussing software development opportunities, product ideas, and technical
              collaborations.
            </p>

            <div className="mt-8 space-y-3">
              <a
                href={site.socials.email}
                className="flex items-center gap-4 rounded-2xl border border-white/10 bg-white/5 p-4 transition hover:border-sky-400/40"
              >
                <Mail className="h-5 w-5 text-sky-300" />
                <span className="text-sm text-slate-300">{site.email}</span>
              </a>
              <a
                href={site.socials.linkedin}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-4 rounded-2xl border border-white/10 bg-white/5 p-4 transition hover:border-sky-400/40"
              >
                <Linkedin className="h-5 w-5 text-sky-300" />
                <span className="text-sm text-slate-300">LinkedIn Profile</span>
              </a>
              <a
                href={site.socials.github}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-4 rounded-2xl border border-white/10 bg-white/5 p-4 transition hover:border-violet-400/40"
              >
                <Github className="h-5 w-5 text-violet-300" />
                <span className="text-sm text-slate-300">GitHub Profile</span>
              </a>
            </div>
          </motion.div>

          <motion.form
            noValidate
            onSubmit={handleSubmit}
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="glass rounded-3xl p-7 sm:p-9"
          >
            <div className="grid gap-5 sm:grid-cols-2">
              <div>
                <label htmlFor="name" className="mb-2 block text-sm font-medium text-slate-300">
                  Name
                </label>
                <input
                  id="name"
                  value={form.name}
                  onChange={(event) => updateField("name", event.target.value)}
                  placeholder="Your name"
                  className={fieldClass(errors.name)}
                />
                {errors.name ? <p className="mt-2 text-xs text-rose-400">{errors.name}</p> : null}
              </div>

              <div>
                <label htmlFor="email" className="mb-2 block text-sm font-medium text-slate-300">
                  Email
                </label>
                <input
                  id="email"
                  type="email"
                  value={form.email}
                  onChange={(event) => updateField("email", event.target.value)}
                  placeholder="w4workinglife@gmail.com"
                  className={fieldClass(errors.email)}
                />
                {errors.email ? <p className="mt-2 text-xs text-rose-400">{errors.email}</p> : null}
              </div>
            </div>

            <div className="mt-5">
              <label htmlFor="subject" className="mb-2 block text-sm font-medium text-slate-300">
                Subject
              </label>
              <input
                id="subject"
                value={form.subject}
                onChange={(event) => updateField("subject", event.target.value)}
                placeholder="Project inquiry, collaboration, or opportunity"
                className={fieldClass(errors.subject)}
              />
              {errors.subject ? <p className="mt-2 text-xs text-rose-400">{errors.subject}</p> : null}
            </div>

            <div className="mt-5">
              <label htmlFor="message" className="mb-2 block text-sm font-medium text-slate-300">
                Message
              </label>
              <textarea
                id="message"
                rows={5}
                value={form.message}
                onChange={(event) => updateField("message", event.target.value)}
                placeholder="Tell me about your project or idea..."
                className={`${fieldClass(errors.message)} resize-none`}
              />
              {errors.message ? <p className="mt-2 text-xs text-rose-400">{errors.message}</p> : null}
            </div>

            <button
              type="submit"
              className="mt-7 inline-flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-sky-500 to-violet-600 px-6 py-3.5 font-semibold text-white shadow-lg shadow-sky-500/20 transition hover:shadow-violet-500/30 sm:w-auto"
            >
              Send Message
              <Send className="h-4 w-4" />
            </button>

            {submitted ? (
              <p className="mt-4 flex items-center gap-2 text-sm text-emerald-300">
                <CheckCircle2 className="h-4 w-4" />
                Thank you. Your message has been validated and is ready to be connected to your email service.
              </p>
            ) : Object.keys(errors).length > 0 ? (
              <p className="mt-4 flex items-center gap-2 text-sm text-rose-400">
                <AlertCircle className="h-4 w-4" />
                Please correct the highlighted fields.
              </p>
            ) : null}
          </motion.form>
        </div>
      </div>
    </section>
  );
}