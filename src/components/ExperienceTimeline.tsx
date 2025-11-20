import { experiences } from '../data/experience';

const ExperienceTimeline = () => {
  return (
    <div className="relative">
      <div className="absolute left-3 top-0 h-full w-px bg-gradient-to-b from-accent-500/60 via-slate-300/40 to-transparent dark:via-white/10" aria-hidden />
      <div className="space-y-6">
        {experiences.map((exp, index) => (
          <div key={exp.company} className="relative pl-10">
            <div className="absolute left-0 top-2 h-5 w-5 rounded-full border-4 border-white bg-accent-500 shadow-lg dark:border-slate-900" />
            <div className="glass-panel p-5 card-hover">
              <div className="flex flex-col justify-between gap-2 md:flex-row md:items-center">
                <div>
                  <p className="text-xs uppercase tracking-[0.2em] text-accent-500">{exp.start} — {exp.end}</p>
                  <h3 className="text-xl font-semibold text-slate-900 dark:text-white">{exp.role}</h3>
                  <p className="text-slate-500 dark:text-slate-300">{exp.company}</p>
                </div>
                <span className="rounded-full bg-accent-500/15 px-3 py-1 text-xs font-semibold text-accent-700 dark:text-accent-100">
                  {index === 0 ? 'Current' : 'Past'}
                </span>
              </div>
              <p className="mt-3 text-slate-600 dark:text-slate-300">{exp.summary}</p>
              <ul className="mt-3 space-y-2 text-sm text-slate-600 dark:text-slate-200 list-disc list-inside">
                {exp.bullets.map((bullet) => (
                  <li key={bullet}>{bullet}</li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ExperienceTimeline;
