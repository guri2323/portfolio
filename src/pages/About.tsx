// About page with quick profile overview
const About = () => {
  const highlights = [
    'Cloud-native delivery (AWS/GCP) with serverless patterns and Terraform infra as code.',
    'Micro-frontends, design systems, and scalable component architecture with React + TypeScript.',
    'CI/CD, testing culture, and performance-first mindset for resilient releases.',
  ];

  const badges = [
    'React & TypeScript',
    'Node & GraphQL/REST',
    'Terraform & CI/CD',
    'Design Systems',
    'Accessibility',
    'Micro-frontends',
    'Serverless',
    'AWS & GCP',
  ];

  return (
    <section className="section space-y-10">
      <div className="grid gap-8 md:gap-10 md:grid-cols-2 md:items-start">
        <div className="space-y-4">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-accent-500">About</p>
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 dark:text-white">From junior to senior, crafting resilient products.</h2>
          <p className="text-lg text-slate-600 dark:text-slate-300 leading-relaxed">
            Over 9+ years, I&apos;ve grown from building responsive interfaces to leading full-stack initiatives that marry
            UX polish with scalable infrastructure. I thrive at the intersection of design systems, cloud-native patterns,
            and collaborative delivery.
          </p>
          <div className="space-y-2 text-slate-600 dark:text-slate-300">
            {highlights.map((item) => (
              <div key={item} className="flex items-start gap-2">
                <span className="mt-2 h-2 w-2 rounded-full bg-accent-500" />
                <p>{item}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="glass-panel p-6 space-y-6">
          <div className="space-y-2">
            <h3 className="text-xl font-semibold text-slate-900 dark:text-white">Capabilities</h3>
            <p className="text-slate-600 dark:text-slate-300">Tools and focuses that shape the way I build and ship.</p>
          </div>
          <div className="flex flex-wrap gap-2">
            {badges.map((skill) => (
              <span key={skill} className="tag">
                {skill}
              </span>
            ))}
          </div>
          <div className="rounded-xl bg-white/70 p-4 border border-slate-200 dark:bg-white/5 dark:border-white/10">
            <p className="text-sm text-slate-600 dark:text-slate-300">
              I lead with clarity, collaborate with designers and product, and deliver outcomes through steady iteration,
              testing, and automation.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
