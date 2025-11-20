// Home page with hero and highlights
const Home = () => {
  return (
    <section className="section">
      <div className="hero">
        <p className="eyebrow">Welcome</p>
        <h1>Hi, I\'m Your Name — crafting thoughtful digital experiences.</h1>
        <p className="lead">
          I design and build performant products with a focus on clarity, modern aesthetics, and delightful
          interactions.
        </p>
        <div className="cta-row">
          <a className="button" href="/projects">
            View Projects
          </a>
          <a className="text-link" href="/contact">
            Get in touch
          </a>
        </div>
      </div>
      <div className="grid">
        <div className="card">
          <h3>Front-end Engineering</h3>
          <p>Building interfaces with React, TypeScript, and modern tooling that stay fast and accessible.</p>
        </div>
        <div className="card">
          <h3>Design Systems</h3>
          <p>Creating consistent, scalable component libraries that keep teams shipping with confidence.</p>
        </div>
        <div className="card">
          <h3>Product Thinking</h3>
          <p>Partnering with teams to clarify goals, validate ideas, and iterate quickly with users.</p>
        </div>
      </div>
    </section>
  );
};

export default Home;
