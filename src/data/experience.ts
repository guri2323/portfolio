export type ExperienceItem = {
  company: string;
  role: string;
  start: string;
  end: string;
  summary: string;
  bullets: string[];
};

export type ExperienceDistribution = {
  name: string;
  years: number;
};

export const experiences: ExperienceItem[] = [
  {
    company: 'PC Financial',
    role: 'Senior Full-Stack Developer',
    start: 'Jun 2021',
    end: 'Present',
    summary: 'Scaling modern banking experiences with TypeScript, React, and cloud-native stacks.',
    bullets: [
      'Engineered responsive, intuitive UIs with modern React tooling.',
      'Optimized performance and state with Redux, cutting complexity by 35% and improving responsiveness by 25%.',
      'Refactored legacy codebase into TypeScript, reducing error rates by 20%.',
      'Enhanced code quality with Jest tests and CI automation.',
      'Designed and maintained CI/CD pipelines.',
      'Provisioned and managed cloud resources using Terraform.',
      'Implemented Akamai properties to boost performance and security.',
    ],
  },
  {
    company: 'Capgemini',
    role: 'Full-Stack Developer',
    start: 'Mar 2019',
    end: 'Oct 2020',
    summary: 'Delivered micro-frontends and secure web experiences at scale.',
    bullets: [
      'Implemented Micro-Frontend architecture for independent deployments.',
      'Built scalable apps with JavaScript, HTML, CSS, React.js.',
      'Improved accessibility (ARIA), increasing web traffic by 10%.',
      'Integrated secure auth with JWT and OAuth.',
      'Delivered cloud-based solutions using Terraform.',
      'Mentored junior developers.',
    ],
  },
  {
    company: 'SynergyX',
    role: 'Backend Developer',
    start: 'Jan 2018',
    end: 'Mar 2019',
    summary: 'API-first development with strong collaboration across teams.',
    bullets: [
      'Designed and implemented RESTful APIs with Express.js.',
      'Used Firestore and MySQL for storage.',
      'Performed testing and debugging.',
      'Collaborated closely with frontend, design, and QA.',
    ],
  },
  {
    company: 'Corporation Bank',
    role: 'Junior Developer',
    start: 'Feb 2016',
    end: 'Dec 2017',
    summary: 'Built dynamic web apps and responsive experiences.',
    bullets: [
      'Built dynamic web apps using React.js.',
      'Used Bootstrap and Material-UI.',
      'Delivered responsive designs and cross-device compatibility.',
      'Performed testing and debugging.',
      'Worked with backend teams to integrate APIs.',
    ],
  },
];

export const experienceDistribution: ExperienceDistribution[] = [
  { name: 'Full-Stack', years: 4 },
  { name: 'Backend', years: 3 },
  { name: 'Frontend', years: 2 },
];
