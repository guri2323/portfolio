import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { personalInfo } from '../data/personal';

// Footer with quick contact and copyright note
const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-slate-200 bg-white/90 backdrop-blur dark:border-white/10 dark:bg-slate-950/80">
      <div className="container-xl flex flex-col gap-4 py-8 text-sm text-slate-600 dark:text-slate-300 md:flex-row md:items-center md:justify-between">
        <div>
          <p className="font-semibold text-slate-900 dark:text-white">Let&apos;s build something great together.</p>
          <p className="text-slate-500 dark:text-slate-400">Available for freelance, full-time, or collaboration.</p>
        </div>
        <div className="flex items-center gap-4 text-base">
          <a
            href={`mailto:${personalInfo.email}`}
            className="text-slate-700 transition hover:text-slate-900 hover:underline dark:text-slate-200 dark:hover:text-white"
          >
            {personalInfo.email}
          </a>
          <span className="h-4 w-px bg-slate-300/60 dark:bg-white/20" />
          <a
            href={`tel:${personalInfo.phone}`}
            className="text-slate-700 transition hover:text-slate-900 hover:underline dark:text-slate-200 dark:hover:text-white"
          >
            {personalInfo.phone}
          </a>
          <span className="h-4 w-px bg-slate-300/60 dark:bg-white/20" />
          <div className="flex items-center gap-3 text-lg">
            <a
              href="https://github.com"
              target="_blank"
              rel="noreferrer"
              className="text-slate-700 transition hover:text-accent-600 dark:text-slate-200 dark:hover:text-white"
            >
              <FaGithub />
            </a>
            <a
              href="https://www.linkedin.com"
              target="_blank"
              rel="noreferrer"
              className="text-slate-700 transition hover:text-accent-600 dark:text-slate-200 dark:hover:text-white"
            >
              <FaLinkedin />
            </a>
          </div>
        </div>
      </div>
      <div className="border-t border-slate-200/70 bg-white/80 py-4 dark:border-white/5 dark:bg-slate-950/60">
        <p className="container-xl text-xs text-slate-500 dark:text-slate-500">© {year} Gurleen Singh. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
