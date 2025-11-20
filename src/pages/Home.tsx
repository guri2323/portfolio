import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { personalInfo } from '../data/personal';

// Home page with hero and highlights
const Home = () => {
  const highlights = [
    {
      title: 'Cloud-first Delivery',
      description: 'Serverless, micro-frontends, and robust CI/CD pipelines that ship confidently.',
    },
    {
      title: 'Design Systems',
      description: 'Inclusive UI libraries, tokens, and documentation that keep teams aligned.',
    },
    {
      title: 'Full-Stack Impact',
      description: 'Balanced frontend craft, backend reliability, and performance at scale.',
    },
  ];

  return (
    <section className="section">
      <div className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="space-y-6"
        >
          <div className="inline-flex items-center gap-2 rounded-full bg-white/70 px-3 py-1 text-sm text-slate-800 border border-slate-200 shadow-sm dark:bg-white/10 dark:text-slate-100 dark:border-white/15">
            <span className="h-2 w-2 rounded-full bg-emerald-500" />
            Open to impactful roles
          </div>
          <div className="space-y-4">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-accent-600 dark:text-accent-300">Gurleen Singh</p>
            <h1 className="font-display text-4xl leading-tight sm:text-5xl text-slate-900 dark:text-white">
              Senior Full Stack Developer crafting cloud-ready experiences.
            </h1>
            <p className="text-lg text-slate-600 dark:text-slate-300 leading-relaxed">
              {personalInfo.experience} delivering resilient products with React, Node, Terraform, and AWS/GCP — from micro-frontends to serverless platforms.
            </p>
          </div>
          <div className="flex flex-wrap gap-3">
            <Link to="/skills" className="btn-primary">
              View Skills
            </Link>
            <Link to="/experience" className="btn-ghost">
              View Experience
            </Link>
          </div>
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 text-sm">
            <div className="glass-panel p-4">
              <p className="text-3xl font-semibold text-slate-900 dark:text-white">{personalInfo.experience}</p>
              <p className="text-slate-500 dark:text-slate-300">Building digital products</p>
            </div>
            <div className="glass-panel p-4">
              <p className="text-3xl font-semibold text-slate-900 dark:text-white">Full Stack</p>
              <p className="text-slate-500 dark:text-slate-300">React • Node • Cloud</p>
            </div>
            <div className="glass-panel p-4">
              <p className="text-3xl font-semibold text-slate-900 dark:text-white">Consulting</p>
              <p className="text-slate-500 dark:text-slate-300">Available for select work</p>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut', delay: 0.1 }}
          className="glass-panel relative overflow-hidden p-8"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-accent-500/10 via-transparent to-accent-700/15 pointer-events-none" />
          <div className="relative space-y-6">
            <div className="rounded-2xl bg-white/70 p-5 border border-slate-200 shadow-md dark:bg-slate-950/60 dark:border-white/5">
              <p className="text-sm text-slate-500 dark:text-slate-300">Currently focused on</p>
              <h3 className="text-xl font-semibold text-slate-900 dark:text-white">
                Modernizing cloud-native experiences
              </h3>
              <p className="text-slate-600 dark:text-slate-300">
                Serverless APIs, micro-frontends, and design systems for scalable delivery pipelines.
              </p>
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              {highlights.map((item) => (
                <div key={item.title} className="glass-panel card-hover p-4">
                  <h4 className="text-lg font-semibold text-slate-900 dark:text-white">{item.title}</h4>
                  <p className="text-sm text-slate-600 dark:text-slate-300">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Home;
