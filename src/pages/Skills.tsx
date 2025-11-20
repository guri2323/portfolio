import { motion } from 'framer-motion';
import SkillBarChart from '../components/skills/SkillBarChart';
import SkillCategoryCard from '../components/skills/SkillCategoryCard';
import SkillMixPie from '../components/skills/SkillMixPie';
import { mixChartData, primaryChartData, skillCategories } from '../data/skills';

const Skills = () => {
  return (
    <section className="bg-slate-950 text-slate-50">
      <div className="max-w-6xl mx-auto px-4 md:px-8 py-12 space-y-12">
        <header className="space-y-3 text-left">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-indigo-300">Skills & Tooling</p>
          <h1 className="text-3xl sm:text-4xl font-bold text-slate-50">
            Building performant, accessible front-ends with robust APIs, testing, and cloud-native delivery.
          </h1>
          <p className="text-slate-300 max-w-3xl">
            Gurleen Singh — Senior Full Stack Developer (9+ years). Frontend depth in React/TypeScript, backend expertise
            in Node/Nest/GraphQL, and DevOps/Cloud practices to ship reliably.
          </p>
        </header>

        <div className="grid gap-6 lg:grid-cols-[1.2fr_0.8fr]">
          <motion.div initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
            <SkillBarChart data={primaryChartData} />
          </motion.div>
          <motion.div initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.55 }}>
            <SkillMixPie data={mixChartData} />
            <div className="mt-4 rounded-2xl bg-slate-900/90 border border-slate-800 p-4 text-sm text-slate-200">
              <p className="font-semibold text-slate-50">How to read this</p>
              <p className="text-slate-300 mt-2">
                Bar chart shows proficiency per category (0-100). Pie shows overall focus split across frontend, backend,
                and DevOps/Cloud work streams.
              </p>
            </div>
          </motion.div>
        </div>

        <div className="space-y-4">
          <div className="flex flex-col gap-2">
            <h2 className="text-2xl font-semibold text-slate-50">Category breakdown</h2>
            <p className="text-slate-300">Each card highlights the toolkit and primary responsibilities for that area.</p>
          </div>
          <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
            {skillCategories.map((category) => (
              <SkillCategoryCard key={category.name} category={category} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
