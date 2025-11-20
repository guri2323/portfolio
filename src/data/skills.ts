export type SkillCategory = {
  name: string;
  level: number; // 0-100 proficiency
  summary: string;
  items: string[];
};

export const skillCategories: SkillCategory[] = [
  {
    name: 'Frontend',
    level: 92,
    summary: 'SPA development with React, NextJS, Angular, Vue, and TypeScript.',
    items: ['React', 'NextJS', 'Angular', 'Vue.js', 'TypeScript', 'JavaScript', 'HTML5', 'CSS3'],
  },
  {
    name: 'Backend',
    level: 85,
    summary: 'Node.js services with Express/Nest, REST and GraphQL APIs.',
    items: ['Node.js', 'Express', 'NestJS', 'RESTful APIs', 'GraphQL'],
  },
  {
    name: 'Testing',
    level: 80,
    summary: 'Quality and reliability with unit, integration, and e2e coverage.',
    items: ['Jest', 'Playwright', 'Mocha', 'Cypress'],
  },
  {
    name: 'DevOps',
    level: 83,
    summary: 'Automation, delivery pipelines, and infrastructure as code.',
    items: ['Docker', 'Kubernetes', 'CI/CD', 'Terraform', 'Akamai'],
  },
  {
    name: 'Cloud',
    level: 78,
    summary: 'AWS and GCP deployments, serverless patterns, and scaling.',
    items: ['AWS', 'GCP'],
  },
  {
    name: 'Design/UX',
    level: 75,
    summary: 'Inclusive, responsive experiences with strong accessibility.',
    items: ['Responsive layouts', 'Accessibility (WCAG)', 'Cross-browser compatibility'],
  },
];

export const primaryChartData = skillCategories.map(({ name, level }) => ({ name, level }));

export const mixChartData = [
  { name: 'Frontend', value: 40 },
  { name: 'Backend', value: 30 },
  { name: 'DevOps/Cloud', value: 30 },
];
