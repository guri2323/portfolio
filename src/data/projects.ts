export type Project = {
  title: string;
  description: string;
  stack: string[];
  live?: string;
  code?: string;
};

export const projects: Project[] = [
  {
    title: 'Cloud-native Analytics Platform',
    description: 'End-to-end analytics tooling with serverless ingestion, React dashboards, and role-based access.',
    stack: ['React', 'TypeScript', 'Node.js', 'AWS', 'Terraform'],
    live: '#',
    code: '#',
  },
  {
    title: 'Design System & Component Library',
    description: 'Tokens, theming, semantic components, and documentation powering multiple product teams.',
    stack: ['Storybook', 'React', 'Design Tokens', 'Jest'],
    live: '#',
    code: '#',
  },
  {
    title: 'Performance & DX Sprint',
    description: 'Improved bundle splits, caching, and monitoring with a focus on developer experience and CI.',
    stack: ['Vite', 'GraphQL', 'Akamai', 'CI/CD'],
    live: '#',
    code: '#',
  },
  {
    title: 'Micro-Frontends Platform',
    description: 'Composable micro-frontends with federated auth and shared UX primitives.',
    stack: ['Module Federation', 'React', 'Node.js', 'Kubernetes'],
    live: '#',
    code: '#',
  },
];
