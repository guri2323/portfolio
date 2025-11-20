// Projects page with placeholder case studies
const Projects = () => {
  const projects = [
    {
      title: 'Interface Revamp',
      description: 'Redesigned a SaaS dashboard with streamlined navigation and quicker insight discovery.',
      link: '#',
    },
    {
      title: 'Design System Launch',
      description: 'Built a reusable component library with documentation, tokens, and CI-driven visual tests.',
      link: '#',
    },
    {
      title: 'Performance Sprint',
      description: 'Cut load times by 40% through code-splitting, image optimization, and smarter caching.',
      link: '#',
    },
  ];

  return (
    <section className="section">
      <p className="eyebrow">Selected work</p>
      <h2>Projects that mix polish with pragmatism.</h2>
      <div className="grid">
        {projects.map((project) => (
          <article key={project.title} className="card">
            <div className="card__header">
              <h3>{project.title}</h3>
              <a href={project.link} className="text-link">
                View
              </a>
            </div>
            <p>{project.description}</p>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Projects;
