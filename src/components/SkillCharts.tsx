import {
  Bar,
  BarChart,
  CartesianGrid,
  PolarAngleAxis,
  PolarGrid,
  RadialBar,
  RadialBarChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from 'recharts';
import type { SkillCategory, Strength } from '../data/skills';

const tooltipStyles = {
  wrapper: 'rounded-xl bg-slate-900 text-slate-100 p-3 shadow-lg border border-white/10',
  label: 'text-xs uppercase tracking-wide text-slate-400',
  content: 'text-sm font-semibold text-white',
};

type SkillChartsProps = {
  categories: SkillCategory[];
  strengths: Strength[];
};

export const SkillCharts = ({ categories, strengths }: SkillChartsProps) => {
  return (
    <div className="grid gap-6 lg:grid-cols-2">
      <div className="glass-panel p-6">
        <div className="flex items-center justify-between mb-4">
          <div>
            <p className="text-xs uppercase tracking-[0.2em] text-accent-500">Chart</p>
            <h3 className="text-xl font-semibold text-slate-900 dark:text-white">Category depth</h3>
          </div>
        </div>
        <div className="h-72 w-full">
          <ResponsiveContainer>
            <BarChart data={categories} margin={{ left: 4, right: 4 }}>
              <CartesianGrid strokeDasharray="3 3" stroke="rgba(148, 163, 184, 0.25)" />
              <XAxis dataKey="name" tick={{ fill: 'currentColor', fontSize: 12 }} />
              <YAxis tick={{ fill: 'currentColor', fontSize: 12 }} domain={[0, 100]} />
              <Tooltip
                cursor={{ fill: 'rgba(15, 23, 42, 0.08)' }}
                content={({ active, payload, label }) => {
                  if (active && payload && payload.length) {
                    return (
                      <div className={tooltipStyles.wrapper}>
                        <p className={tooltipStyles.label}>{label}</p>
                        <p className={tooltipStyles.content}>{payload[0].value}%</p>
                      </div>
                    );
                  }
                  return null;
                }}
              />
              <Bar dataKey="level" radius={[10, 10, 0, 0]} fill="url(#barGradient)" />
              <defs>
                <linearGradient id="barGradient" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#3e9cff" stopOpacity={0.95} />
                  <stop offset="100%" stopColor="#0f172a" stopOpacity={0.2} />
                </linearGradient>
              </defs>
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>

      <div className="glass-panel p-6">
        <div className="flex items-center justify-between mb-4">
          <div>
            <p className="text-xs uppercase tracking-[0.2em] text-accent-500">Chart</p>
            <h3 className="text-xl font-semibold text-slate-900 dark:text-white">Core strengths</h3>
          </div>
        </div>
        <div className="h-72 w-full">
          <ResponsiveContainer>
            <RadialBarChart cx="50%" cy="50%" innerRadius="30%" outerRadius="100%" barSize={14} data={strengths}>
              <PolarGrid gridType="circle" stroke="rgba(148, 163, 184, 0.3)" />
              <PolarAngleAxis dataKey="name" tick={{ fill: 'currentColor', fontSize: 12 }} />
              <RadialBar
                background
                dataKey="score"
                fill="#3e9cff"
                cornerRadius={8}
                label={{ position: 'insideStart', fill: '#0b1020', fontSize: 11, formatter: (val: number) => val.toFixed(1) }}
              />
              <Tooltip
                content={({ active, payload }) => {
                  if (active && payload && payload.length) {
                    return (
                      <div className={tooltipStyles.wrapper}>
                        <p className={tooltipStyles.label}>{payload[0].payload.name}</p>
                        <p className={tooltipStyles.content}>{payload[0].value} / 10</p>
                      </div>
                    );
                  }
                  return null;
                }}
              />
            </RadialBarChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
};
