import { experiences } from '../data/experience';

const ExperienceTimeline = () => {
  return (
    <div className="relative">
      <div className="absolute left-3 top-0 h-full w-px bg-slate-700" aria-hidden />
      <div className="space-y-6">
        {experiences.map((exp, index) => (
          <div key={exp.company} className="relative pl-10">
            <div className="absolute left-0 top-2 h-5 w-5 rounded-full border-2 border-slate-900 bg-indigo-400 shadow-lg" />
            <div className="rounded-xl bg-slate-900/70 p-5 shadow-lg border border-slate-800/60 transition duration-200 hover:-translate-y-0.5 hover:shadow-xl">
              <div className="flex flex-col justify-between gap-2 md:flex-row md:items-center">
                <div>
                  <p className="text-xs tracking-[0.2em] uppercase text-slate-400">
                    {exp.start} — {exp.end}
                  </p>
                  <h3 className="text-xl font-semibold text-slate-50">{exp.role}</h3>
                  <p className="text-slate-300">{exp.company}</p>
                </div>
                <span className="rounded-full bg-indigo-500/15 px-3 py-1 text-xs font-semibold text-indigo-100 border border-indigo-500/30">
                  {index === 0 ? 'Current' : 'Past'}
                </span>
              </div>
              <p className="mt-3 text-slate-300 leading-relaxed">{exp.summary}</p>
              <ul className="mt-3 space-y-2 text-sm text-slate-300 list-disc list-inside">
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
