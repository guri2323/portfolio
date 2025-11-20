import ProjectCard from '../components/ProjectCard';
import { projects } from '../data/projects';

// Projects page with placeholder case studies
const Projects = () => {
  return (
    <section className="section space-y-8">
      <div className="space-y-3">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-accent-500">Selected Work</p>
        <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 dark:text-white">
          Projects that mix polish with pragmatism.
        </h2>
        <p className="text-slate-600 dark:text-slate-300 max-w-3xl">
          A sampling of recent build-outs. Each project balances craft with measurable outcomes and reliable delivery.
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        {projects.map((project) => (
          <ProjectCard key={project.title} project={project} />
        ))}
      </div>
    </section>
  );
};

export default Projects;
