import { Cell, Pie, PieChart, ResponsiveContainer, Tooltip } from 'recharts';
import type { ExperienceDistribution } from '../data/experience';

const COLORS = ['#6366f1', '#06b6d4', '#fbbf24'];

const ExperienceChart = ({ data }: { data: ExperienceDistribution[] }) => {
  return (
    <div className="rounded-2xl border border-slate-800 bg-slate-900/80 p-6 shadow-xl">
      <div className="text-center space-y-2">
        <p className="text-sm uppercase tracking-[0.2em] text-indigo-300">Experience mix</p>
        <h3 className="text-xl font-semibold text-slate-50">How my time is spent</h3>
      </div>
      <div className="h-72 w-full mt-4">
        <ResponsiveContainer>
          <PieChart>
            <Pie
              data={data}
              dataKey="years"
              nameKey="name"
              cx="50%"
              cy="50%"
              innerRadius="55%"
              outerRadius="80%"
              paddingAngle={2}
              isAnimationActive
            >
              {data.map((entry, index) => (
                <Cell key={entry.name} fill={COLORS[index % COLORS.length]} stroke="none" />
              ))}
            </Pie>
            <Tooltip
              content={({ active, payload }) => {
                if (active && payload && payload.length) {
                  return (
                    <div className="rounded-xl bg-slate-800 text-slate-50 p-3 shadow-lg border border-slate-700">
                      <p className="text-xs uppercase tracking-wide text-indigo-200">{payload[0].name}</p>
                      <p className="text-sm font-semibold">{payload[0].value} years</p>
                    </div>
                  );
                }
                return null;
              }}
            />
          </PieChart>
        </ResponsiveContainer>
      </div>
      <p className="mt-4 text-center text-sm text-slate-300">
        4+ years Full-Stack • 3 years Backend • 2 years Frontend
      </p>
    </div>
  );
};

export default ExperienceChart;
