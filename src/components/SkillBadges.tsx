import type { SkillCategory } from '../data/skills';

type SkillBadgesProps = {
  categories: SkillCategory[];
};

const SkillBadges = ({ categories }: SkillBadgesProps) => {
  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
      {categories.map((category) => (
        <div key={category.name} className="glass-panel p-4 space-y-3 card-hover">
          <div className="flex items-center justify-between">
            <h4 className="text-base font-semibold text-slate-900 dark:text-white">{category.name}</h4>
            <span className="text-sm text-slate-500 dark:text-slate-300">{category.level}%</span>
          </div>
          <div className="flex flex-wrap gap-2">
            {category.items.map((item) => (
              <span key={item} className="tag">
                {item}
              </span>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default SkillBadges;
