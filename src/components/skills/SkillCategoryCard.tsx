import type { SkillCategory } from '../../data/skills';

const SkillCategoryCard = ({ category }: { category: SkillCategory }) => {
  return (
    <div className="rounded-2xl bg-slate-900/90 border border-slate-800 p-5 text-slate-50 shadow-md transition duration-200 hover:-translate-y-0.5 hover:shadow-lg">
      <div className="flex items-start justify-between gap-2">
        <div>
          <p className="text-sm font-semibold text-slate-50">{category.name}</p>
          <p className="text-sm text-slate-300">{category.summary}</p>
        </div>
        <span className="rounded-full bg-indigo-500/15 px-3 py-1 text-xs font-semibold text-indigo-200 border border-indigo-500/30">
          {category.level}%
        </span>
      </div>
      <div className="mt-4 flex flex-wrap gap-2">
        {category.items.map((item) => (
          <span
            key={item}
            className="rounded-full bg-slate-800 px-3 py-1 text-xs font-semibold text-slate-200 border border-slate-700"
          >
            {item}
          </span>
        ))}
      </div>
    </div>
  );
};

export default SkillCategoryCard;
