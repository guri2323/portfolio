export type SkillCategory = {
  name: string;
  level: number; // 1-100 proficiency for chart
  items: string[];
};

export type Strength = {
  name: string;
  score: number; // 1-10
};

export const skillCategories: SkillCategory[] = [
  {
    name: 'Frontend',
    level: 92,
    items: ['React', 'NextJS', 'Angular', 'Vue.js', 'TypeScript', 'JavaScript', 'HTML5', 'CSS3'],
  },
  {
    name: 'Backend',
    level: 85,
    items: ['Node.js', 'Express', 'NestJS', 'RESTful APIs', 'GraphQL'],
  },
  {
    name: 'State Mgmt',
    level: 88,
    items: ['Redux', 'Context API'],
  },
  {
    name: 'Testing',
    level: 80,
    items: ['Jest', 'Playwright', 'Mocha', 'Cypress'],
  },
  {
    name: 'DevOps',
    level: 83,
    items: ['Docker', 'Kubernetes', 'CI/CD', 'Terraform', 'Akamai'],
  },
  {
    name: 'Cloud',
    level: 78,
    items: ['AWS', 'GCP'],
  },
  {
    name: 'Design/UX',
    level: 82,
    items: ['Responsive layouts', 'Accessibility (WCAG)', 'Cross-browser compatibility'],
  },
];

export const coreStrengths: Strength[] = [
  { name: 'React', score: 9.5 },
  { name: 'Node.js', score: 8.8 },
  { name: 'Terraform', score: 8.4 },
  { name: 'AWS/GCP', score: 8.2 },
  { name: 'Testing', score: 8.5 },
  { name: 'Design Systems', score: 8.7 },
];
