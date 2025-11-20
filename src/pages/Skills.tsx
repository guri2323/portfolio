import { motion } from 'framer-motion';
import SkillBadges from '../components/SkillBadges';
import { SkillCharts } from '../components/SkillCharts';
import { coreStrengths, skillCategories } from '../data/skills';

const Skills = () => {
  return (
    <section className="section space-y-10">
      <div className="space-y-3">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-accent-500">Skills & Tooling</p>
        <h1 className="text-3xl sm:text-4xl font-bold text-slate-900 dark:text-white">Shaping products with strong engineering and UX foundations.</h1>
        <p className="text-slate-600 dark:text-slate-300 max-w-3xl">
          Modern front-end engineering with React and TypeScript, backed by robust APIs, testing discipline, and cloud-first delivery.
        </p>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
      >
        <SkillCharts categories={skillCategories} strengths={coreStrengths} />
      </motion.div>

      <div className="space-y-4">
        <div className="flex items-center justify-between flex-wrap gap-3">
          <h2 className="text-2xl font-semibold text-slate-900 dark:text-white">Stacks & Tools</h2>
          <p className="text-sm text-slate-500 dark:text-slate-300">Click any chip to copy or reorder later.</p>
        </div>
        <SkillBadges categories={skillCategories} />
      </div>
    </section>
  );
};

export default Skills;
