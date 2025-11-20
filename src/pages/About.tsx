// About page with quick profile overview
const About = () => {
  return (
    <section className="section narrow">
      <p className="eyebrow">About</p>
      <h2>Blend of engineering and design.</h2>
      <p className="lead">
        I care about products that feel intuitive and purposeful. Over the past years, I\'ve shipped web apps
        across startups and enterprises—always balancing reliability, aesthetics, and measurable impact.
      </p>
      <div className="pill-row">
        <span className="pill">TypeScript</span>
        <span className="pill">React</span>
        <span className="pill">Accessibility</span>
        <span className="pill">UI Architecture</span>
        <span className="pill">Testing</span>
      </div>
      <p>
        Outside of work, I explore new visual languages, write about front-end craft, and mentor developers
        getting started with modern web technologies.
      </p>
    </section>
  );
};

export default About;
