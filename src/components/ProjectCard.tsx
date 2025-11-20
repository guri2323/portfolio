import type { Project } from '../data/projects';

type ProjectCardProps = {
  project: Project;
};

const ProjectCard = ({ project }: ProjectCardProps) => {
  return (
    <article className="glass-panel p-5 flex flex-col gap-4 card-hover">
      <div className="flex items-start justify-between gap-2">
        <div>
          <h3 className="text-lg font-semibold text-slate-900 dark:text-white">{project.title}</h3>
          <p className="text-slate-600 dark:text-slate-300">{project.description}</p>
        </div>
        <span className="rounded-full bg-accent-500/15 px-3 py-1 text-xs font-semibold text-accent-700 dark:text-accent-100">
          Featured
        </span>
      </div>
      <div className="flex flex-wrap gap-2">
        {project.stack.map((tech) => (
          <span key={tech} className="tag">
            {tech}
          </span>
        ))}
      </div>
      <div className="flex flex-wrap gap-3 text-sm">
        <a
          className="btn-primary text-sm"
          href={project.live || '#'}
          target="_blank"
          rel="noreferrer"
        >
          Live Demo
        </a>
        <a
          className="btn-ghost text-sm"
          href={project.code || '#'}
          target="_blank"
          rel="noreferrer"
        >
          View Code
        </a>
      </div>
    </article>
  );
};

export default ProjectCard;
