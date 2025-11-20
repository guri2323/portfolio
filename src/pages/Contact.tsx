// Contact page with simple form placeholder
const Contact = () => {
  return (
    <section className="section narrow">
      <p className="eyebrow">Contact</p>
      <h2>Tell me about your project.</h2>
      <p className="lead">Reach out for collaborations, consulting, or just to say hello.</p>
      <form className="form">
        <label className="form__field">
          <span>Name</span>
          <input type="text" name="name" placeholder="Your name" />
        </label>
        <label className="form__field">
          <span>Email</span>
          <input type="email" name="email" placeholder="you@example.com" />
        </label>
        <label className="form__field">
          <span>Project details</span>
          <textarea name="message" rows={4} placeholder="What would you like to build?" />
        </label>
        <button type="submit" className="button">
          Send message
        </button>
      </form>
    </section>
  );
};

export default Contact;
