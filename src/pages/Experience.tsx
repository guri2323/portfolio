import { ResponsiveContainer, BarChart, Bar, XAxis, YAxis, Tooltip, CartesianGrid } from 'recharts';
import ExperienceTimeline from '../components/ExperienceTimeline';
import { experiences } from '../data/experience';

const experienceMix = [
  { name: 'Frontend', years: 4 },
  { name: 'Full-Stack', years: 3.5 },
  { name: 'Backend', years: 1.5 },
];

const Experience = () => {
  return (
    <section className="section space-y-10">
      <div className="space-y-3">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-accent-500">Experience</p>
        <h1 className="text-3xl sm:text-4xl font-bold text-slate-900 dark:text-white">Timeline of impact.</h1>
        <p className="text-slate-600 dark:text-slate-300 max-w-3xl">
          9+ years building secure, performant products across banking, fintech, and enterprise platforms with collaborative, test-driven delivery.
        </p>
      </div>

      <div className="grid gap-6 lg:grid-cols-[1.2fr_0.8fr]">
        <div>
          <ExperienceTimeline />
        </div>
        <div className="glass-panel p-6 space-y-4">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-xs uppercase tracking-[0.2em] text-accent-500">Role distribution</p>
              <h3 className="text-lg font-semibold text-slate-900 dark:text-white">Where I spend my time</h3>
            </div>
            <span className="rounded-full bg-accent-500/15 px-3 py-1 text-xs font-semibold text-accent-700 dark:text-accent-100">9+ yrs</span>
          </div>
          <div className="h-64 w-full">
            <ResponsiveContainer>
              <BarChart data={experienceMix} layout="vertical" margin={{ left: 40, right: 12 }}>
                <CartesianGrid strokeDasharray="3 3" stroke="rgba(148, 163, 184, 0.25)" />
                <XAxis type="number" tick={{ fill: 'currentColor', fontSize: 12 }} />
                <YAxis type="category" dataKey="name" tick={{ fill: 'currentColor', fontSize: 12 }} />
                <Tooltip
                  content={({ active, payload }) => {
                    if (active && payload && payload.length) {
                      return (
                        <div className="rounded-xl bg-slate-900 text-slate-100 p-3 shadow-lg border border-white/10">
                          <p className="text-sm font-semibold">{payload[0].payload.name}</p>
                          <p className="text-xs text-slate-300">{payload[0].value} years</p>
                        </div>
                      );
                    }
                    return null;
                  }}
                />
                <Bar dataKey="years" radius={[12, 12, 12, 12]} fill="#3e9cff" />
              </BarChart>
            </ResponsiveContainer>
          </div>
          <div className="space-y-2 text-sm text-slate-600 dark:text-slate-300">
            <p>Front-end depth anchored by TypeScript, React, and design systems.</p>
            <p>Full-stack delivery with Node.js, GraphQL/REST, and CI/CD.</p>
            <p>Backend/API work that pairs scalability with test coverage.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
