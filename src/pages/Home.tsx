import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FiArrowUpRight, FiGithub, FiLinkedin, FiMail } from 'react-icons/fi';
import { personalInfo } from '../data/personal';

const focusAreas = [
  'Cloud-native delivery (AWS/GCP, Terraform)',
  'Modern front-ends (React, NextJS, Vue) with TypeScript',
  'Testing & reliability (Jest, Cypress, CI/CD)',
];

const stats = [
  { title: '9+ years', subtitle: 'Building digital products' },
  { title: 'Full Stack', subtitle: 'React • Node • Cloud' },
  { title: 'Cloud-native', subtitle: 'AWS • GCP • Terraform' },
];

const skillPreview = [
  { label: 'Frontend', value: 'React, NextJS, Vue, TypeScript' },
  { label: 'Backend', value: 'Node.js, NestJS, REST/GraphQL' },
  { label: 'Ops', value: 'Docker, Kubernetes, Terraform, CI/CD' },
];

const experiencePreview = [
  {
    company: 'PC Financial',
    role: 'Senior Full-Stack Developer',
    summary:
      'Responsive UIs, performance tuning, and cloud infrastructure with Terraform and CI/CD.',
  },
  {
    company: 'Capgemini',
    role: 'Full-Stack Developer',
    summary: 'Micro-frontends and accessible web apps for enterprise clients.',
  },
];

// Clean, high-contrast home page
const Home = () => {
  return (
    <div className="bg-slate-950 text-slate-50">
      <section className="max-w-6xl mx-auto px-4 md:px-8 py-16 space-y-12">
        {/* Hero */}
        <div className="grid gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: 'easeOut' }}
            className="space-y-6"
          >
            <div className="inline-flex items-center gap-2 rounded-full bg-slate-900 px-3 py-1 text-sm text-slate-200 border border-slate-800">
              <span className="h-2 w-2 rounded-full bg-emerald-400" />
              Senior Full Stack Developer
            </div>
            <div className="space-y-4">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-indigo-300">Gurleen Singh</p>
              <h1 className="font-display text-4xl leading-tight sm:text-5xl">
                Crafting cloud-ready products with React and Node.
              </h1>
              <p className="text-lg text-slate-200 leading-relaxed max-w-3xl">
                Senior Full Stack Developer with {personalInfo.experience} of expertise leading initiatives on scalable,
                serverless platforms. I build fast, reliable web applications with React, Node, and TypeScript, backed by robust
                APIs, testing, and cloud-native infrastructure on AWS and GCP.
              </p>
            </div>
            <div className="flex flex-wrap gap-3">
              <Link to="/skills" className="btn-primary">
                View Skills
              </Link>
              <Link to="/experience" className="btn-ghost text-slate-50 border-slate-700 hover:bg-slate-800">
                View Experience
              </Link>
            </div>
            <p className="text-sm text-slate-300">Available for full-time roles and select consulting.</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: 'easeOut', delay: 0.05 }}
            className="rounded-2xl border border-slate-800 bg-slate-900 p-6 shadow-xl"
          >
            <div className="space-y-4">
              <p className="text-sm font-semibold text-indigo-300">Focus areas</p>
              <ul className="space-y-3 text-slate-200">
                {focusAreas.map((item) => (
                  <li key={item} className="flex gap-3">
                    <span className="mt-1 inline-block h-2 w-2 rounded-full bg-indigo-400" />
                    <span className="leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        </div>

        {/* Highlights */}
        <div className="grid gap-4 sm:grid-cols-3">
          {stats.map((stat) => (
            <div
              key={stat.title}
              className="rounded-2xl border border-slate-800 bg-slate-900 p-5 shadow-lg transition duration-200 hover:-translate-y-0.5 hover:shadow-xl"
            >
              <p className="text-2xl font-semibold text-slate-50">{stat.title}</p>
              <p className="text-slate-300 mt-1">{stat.subtitle}</p>
            </div>
          ))}
        </div>

        {/* Preview section */}
        <div className="grid gap-8 lg:grid-cols-2">
          <div className="space-y-4 rounded-2xl border border-slate-800 bg-slate-900 p-6 shadow-lg">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm uppercase tracking-[0.2em] text-indigo-300">Skills at a glance</p>
                <h3 className="text-xl font-semibold text-slate-50">Front to back, with ops in between</h3>
              </div>
              <Link to="/skills" className="inline-flex items-center gap-1 text-indigo-300 hover:text-indigo-200 text-sm">
                View Skills <FiArrowUpRight />
              </Link>
            </div>
            <div className="space-y-3 text-slate-200">
              {skillPreview.map((item) => (
                <div key={item.label} className="flex gap-2">
                  <span className="text-slate-400 w-28 shrink-0">{item.label}:</span>
                  <span className="text-slate-100">{item.value}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="space-y-4 rounded-2xl border border-slate-800 bg-slate-900 p-6 shadow-lg">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm uppercase tracking-[0.2em] text-indigo-300">Recent experience</p>
                <h3 className="text-xl font-semibold text-slate-50">Impact-focused delivery</h3>
              </div>
              <Link to="/experience" className="inline-flex items-center gap-1 text-indigo-300 hover:text-indigo-200 text-sm">
                View Experience <FiArrowUpRight />
              </Link>
            </div>
            <div className="space-y-3">
              {experiencePreview.map((item) => (
                <div key={item.company} className="rounded-xl border border-slate-800 bg-slate-950/60 p-4">
                  <p className="text-sm font-semibold text-slate-50">{item.company}</p>
                  <p className="text-slate-300 text-sm">{item.role}</p>
                  <p className="text-slate-200 text-sm mt-2 leading-relaxed">{item.summary}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="border-t border-slate-800 bg-slate-900/80">
        <div className="max-w-6xl mx-auto px-4 md:px-8 py-12 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <div className="space-y-2">
            <h3 className="text-2xl font-semibold text-slate-50">Let&apos;s build something great together.</h3>
            <p className="text-slate-300">Open to impactful full-time roles and collaborations.</p>
          </div>
          <div className="flex flex-wrap items-center gap-3 text-sm">
            <a
              href={`mailto:${personalInfo.email}`}
              className="inline-flex items-center gap-2 rounded-full border border-slate-700 bg-slate-800 px-4 py-2 text-slate-50 hover:border-indigo-400 hover:text-indigo-100 transition"
            >
              <FiMail /> Email
            </a>
            <a
              href="https://www.linkedin.com"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-slate-700 bg-slate-800 px-4 py-2 text-slate-50 hover:border-indigo-400 hover:text-indigo-100 transition"
            >
              <FiLinkedin /> LinkedIn
            </a>
            <a
              href="https://github.com"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-slate-700 bg-slate-800 px-4 py-2 text-slate-50 hover:border-indigo-400 hover:text-indigo-100 transition"
            >
              <FiGithub /> GitHub
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
