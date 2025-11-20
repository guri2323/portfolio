import { useState } from 'react';
import { NavLink, Link } from 'react-router-dom';

type NavbarProps = {
  isDark: boolean;
  onToggleTheme: () => void;
};

// Sticky, responsive navbar with brand, navigation, hamburger, and theme toggle
const Navbar = ({ isDark, onToggleTheme }: NavbarProps) => {
  const [isOpen, setIsOpen] = useState(false);

  const linkClasses = ({ isActive }: { isActive: boolean }) =>
    [
      'px-3 py-2 rounded-full text-sm font-medium transition duration-200',
      isActive
        ? 'bg-slate-900/10 text-slate-900 dark:bg-white/15 dark:text-white'
        : 'text-slate-700 hover:text-slate-900 hover:bg-slate-900/5 dark:text-slate-200 dark:hover:text-white dark:hover:bg-white/10',
    ].join(' ');

  return (
    <header className="sticky top-0 z-20 border-b border-slate-200/60 bg-white/80 backdrop-blur dark:border-white/10 dark:bg-slate-900/70">
      <div className="container-xl flex items-center justify-between py-4">
        <Link
          to="/"
          className="flex items-center gap-2 font-semibold tracking-tight text-slate-900 dark:text-white"
        >
          <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-accent-500 to-accent-700 text-slate-900 font-bold shadow-lg">
            GS
          </span>
          <span className="text-lg">Gurleen Singh</span>
        </Link>

        <div className="flex items-center gap-2 md:hidden">
          <button
            type="button"
            aria-label="Toggle dark mode"
            onClick={onToggleTheme}
            className="rounded-full border border-slate-200/80 bg-white/70 p-2 text-slate-800 shadow-sm transition hover:bg-slate-100 dark:border-white/15 dark:bg-white/5 dark:text-white dark:hover:bg-white/10"
          >
            {isDark ? '☾' : '☀︎'}
          </button>
          <button
            type="button"
            onClick={() => setIsOpen((prev) => !prev)}
            aria-label="Toggle navigation"
            className="rounded-full border border-slate-200/80 bg-white/70 p-2 text-slate-800 shadow-sm transition hover:bg-slate-100 dark:border-white/15 dark:bg-white/5 dark:text-white dark:hover:bg-white/10"
          >
            <span className="sr-only">Menu</span>
            <div className="flex flex-col gap-1">
              <span className="h-0.5 w-5 bg-current" />
              <span className="h-0.5 w-5 bg-current" />
              <span className="h-0.5 w-5 bg-current" />
            </div>
          </button>
        </div>

        <nav className="hidden items-center gap-1 md:flex">
          <NavLink to="/" className={linkClasses}>
            Home
          </NavLink>
          <NavLink to="/skills" className={linkClasses}>
            Skills
          </NavLink>
          <NavLink to="/experience" className={linkClasses}>
            Experience
          </NavLink>
          <NavLink to="/projects" className={linkClasses}>
            Projects
          </NavLink>
          <NavLink to="/about" className={linkClasses}>
            About
          </NavLink>
          <NavLink to="/contact" className={linkClasses}>
            Contact
          </NavLink>
          <button
            type="button"
            aria-label="Toggle dark mode"
            onClick={onToggleTheme}
            className="ml-2 rounded-full border border-slate-200/80 bg-white/60 px-3 py-2 text-sm text-slate-800 shadow-sm transition hover:bg-slate-100 dark:border-white/15 dark:bg-white/5 dark:text-white dark:hover:bg-white/10"
          >
            {isDark ? 'Dark' : 'Light'}
          </button>
        </nav>
      </div>

      {isOpen ? (
        <div className="md:hidden border-t border-slate-200/70 bg-white/90 backdrop-blur dark:border-white/10 dark:bg-slate-900/90">
          <nav className="container-xl flex flex-col gap-2 py-4">
            <NavLink to="/" className={linkClasses} onClick={() => setIsOpen(false)}>
              Home
            </NavLink>
            <NavLink to="/skills" className={linkClasses} onClick={() => setIsOpen(false)}>
              Skills
            </NavLink>
            <NavLink to="/experience" className={linkClasses} onClick={() => setIsOpen(false)}>
              Experience
            </NavLink>
            <NavLink to="/projects" className={linkClasses} onClick={() => setIsOpen(false)}>
              Projects
            </NavLink>
            <NavLink to="/about" className={linkClasses} onClick={() => setIsOpen(false)}>
              About
            </NavLink>
            <NavLink to="/contact" className={linkClasses} onClick={() => setIsOpen(false)}>
              Contact
            </NavLink>
          </nav>
        </div>
      ) : null}
    </header>
  );
};

export default Navbar;
