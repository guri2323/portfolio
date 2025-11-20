import { Cell, Pie, PieChart, ResponsiveContainer, Tooltip } from 'recharts';
import type { PieData } from './types';

const COLORS = ['#6366f1', '#22d3ee', '#f59e0b'];

const SkillMixPie = ({ data }: { data: PieData[] }) => {
  return (
    <div className="glass-panel bg-slate-900 text-slate-50 border-slate-800 p-6">
      <div className="flex items-center justify-between mb-4">
        <div>
          <p className="text-xs uppercase tracking-[0.2em] text-indigo-300">Snapshot</p>
          <h3 className="text-lg font-semibold">Focus mix</h3>
        </div>
      </div>
      <div className="h-64 w-full">
        <ResponsiveContainer>
          <PieChart>
            <Pie
              data={data}
              dataKey="value"
              nameKey="name"
              cx="50%"
              cy="50%"
              innerRadius="55%"
              outerRadius="80%"
              paddingAngle={2}
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
                      <p className="text-sm font-semibold">{payload[0].value}% focus</p>
                    </div>
                  );
                }
                return null;
              }}
            />
          </PieChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default SkillMixPie;
