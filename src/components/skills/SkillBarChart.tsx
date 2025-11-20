import {
  Bar,
  BarChart,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from 'recharts';
import type { SkillCategory } from '../../data/skills';

type SkillBarChartProps = {
  data: Pick<SkillCategory, 'name' | 'level'>[];
};

const SkillBarChart = ({ data }: SkillBarChartProps) => {
  return (
    <div className="glass-panel bg-slate-900 text-slate-50 border-slate-800 p-6">
      <div className="flex items-center justify-between mb-4">
        <div>
          <p className="text-xs uppercase tracking-[0.2em] text-indigo-300">Chart</p>
          <h3 className="text-lg font-semibold">Category proficiency</h3>
        </div>
        <span className="rounded-full bg-indigo-500/15 px-3 py-1 text-xs font-semibold text-indigo-200 border border-indigo-500/30">
          0-100 scale
        </span>
      </div>
      <div className="h-72 w-full">
        <ResponsiveContainer>
          <BarChart data={data} margin={{ left: 12, right: 12, bottom: 12 }}>
            <CartesianGrid strokeDasharray="3 3" stroke="rgba(148, 163, 184, 0.2)" />
            <XAxis
              dataKey="name"
              tick={{ fill: '#e2e8f0', fontSize: 12 }}
              axisLine={{ stroke: 'rgba(226, 232, 240, 0.4)' }}
              tickLine={{ stroke: 'rgba(226, 232, 240, 0.4)' }}
            />
            <YAxis
              tick={{ fill: '#e2e8f0', fontSize: 12 }}
              domain={[0, 100]}
              axisLine={{ stroke: 'rgba(226, 232, 240, 0.4)' }}
              tickLine={{ stroke: 'rgba(226, 232, 240, 0.4)' }}
              label={{ value: 'Proficiency (%)', angle: -90, position: 'insideLeft', fill: '#cbd5e1', fontSize: 11 }}
            />
            <Tooltip
              cursor={{ fill: 'rgba(99, 102, 241, 0.08)' }}
              content={({ active, payload, label }) => {
                if (active && payload && payload.length) {
                  return (
                    <div className="rounded-xl bg-slate-800 text-slate-50 p-3 shadow-lg border border-slate-700">
                      <p className="text-xs uppercase tracking-wide text-indigo-200">{label}</p>
                      <p className="text-sm font-semibold">{payload[0].value}%</p>
                    </div>
                  );
                }
                return null;
              }}
            />
            <Bar dataKey="level" radius={[10, 10, 0, 0]} fill="#6366f1" />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default SkillBarChart;
