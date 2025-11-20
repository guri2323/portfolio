import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { personalInfo } from '../data/personal';

// Contact page with simple form placeholder
const Contact = () => {
  return (
    <section className="section">
      <div className="grid gap-8 lg:gap-12 lg:grid-cols-2">
        <div className="space-y-4">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-accent-500">Contact</p>
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 dark:text-white">Tell me about your project.</h2>
          <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
            Reach out for collaborations, consulting, or just to say hello. I typically respond within 1-2 business
            days.
          </p>
          <div className="rounded-2xl border border-slate-200 bg-white/80 p-5 space-y-3 shadow-sm dark:border-white/10 dark:bg-white/5">
            <div className="flex items-center gap-3 text-slate-800 dark:text-slate-200">
              <span className="text-lg">📧</span>
              <a className="hover:underline" href={`mailto:${personalInfo.email}`}>
                {personalInfo.email}
              </a>
            </div>
            <div className="flex items-center gap-3 text-slate-800 dark:text-slate-200">
              <span className="text-lg">📞</span>
              <a className="hover:underline" href={`tel:${personalInfo.phone}`}>
                {personalInfo.phone}
              </a>
            </div>
            <div className="flex items-center gap-3 text-slate-800 dark:text-slate-200">
              <span className="text-lg">📍</span>
              <span>{personalInfo.location}</span>
            </div>
            <div className="flex items-center gap-3 text-slate-800 dark:text-slate-200">
              <span className="text-lg">🌐</span>
              <div className="flex gap-4 text-xl">
                <a className="hover:text-accent-600 transition" href="https://github.com" target="_blank" rel="noreferrer">
                  <FaGithub />
                </a>
                <a className="hover:text-accent-600 transition" href="https://www.linkedin.com" target="_blank" rel="noreferrer">
                  <FaLinkedin />
                </a>
              </div>
            </div>
          </div>
        </div>

        <form className="glass-panel p-6 space-y-4 w-full max-w-xl mx-auto lg:mx-0">
          <div>
            <label className="block text-sm text-slate-700 dark:text-slate-200">Name</label>
            <input
              type="text"
              name="name"
              placeholder="Your name"
              className="mt-2 w-full rounded-xl border border-slate-200 bg-white/80 px-4 py-3 text-slate-900 placeholder:text-slate-500 focus:border-accent-500 focus:outline-none focus:ring-2 focus:ring-accent-500/30 dark:border-white/10 dark:bg-slate-950/60 dark:text-slate-100"
            />
          </div>
          <div>
            <label className="block text-sm text-slate-700 dark:text-slate-200">Email</label>
            <input
              type="email"
              name="email"
              placeholder="you@example.com"
              className="mt-2 w-full rounded-xl border border-slate-200 bg-white/80 px-4 py-3 text-slate-900 placeholder:text-slate-500 focus:border-accent-500 focus:outline-none focus:ring-2 focus:ring-accent-500/30 dark:border-white/10 dark:bg-slate-950/60 dark:text-slate-100"
            />
          </div>
          <div>
            <label className="block text-sm text-slate-700 dark:text-slate-200">Project details</label>
            <textarea
              name="message"
              rows={4}
              placeholder="What would you like to build?"
              className="mt-2 w-full rounded-xl border border-slate-200 bg-white/80 px-4 py-3 text-slate-900 placeholder:text-slate-500 focus:border-accent-500 focus:outline-none focus:ring-2 focus:ring-accent-500/30 dark:border-white/10 dark:bg-slate-950/60 dark:text-slate-100"
            />
          </div>
          <button
            type="submit"
            className="w-full rounded-full bg-gradient-to-r from-accent-500 to-accent-700 px-5 py-3 text-slate-900 font-semibold shadow-glow transition hover:-translate-y-0.5"
          >
            Send message
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
