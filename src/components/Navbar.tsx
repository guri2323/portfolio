import { NavLink } from 'react-router-dom';

// Top navigation bar with simple brand + links
const Navbar = () => {
  return (
    <header className="navbar">
      <div className="navbar__brand">Portfolio</div>
      <nav className="navbar__links">
        <NavLink to="/" className={({ isActive }) => (isActive ? 'link active' : 'link')}>
          Home
        </NavLink>
        <NavLink to="/about" className={({ isActive }) => (isActive ? 'link active' : 'link')}>
          About
        </NavLink>
        <NavLink to="/projects" className={({ isActive }) => (isActive ? 'link active' : 'link')}>
          Projects
        </NavLink>
        <NavLink to="/contact" className={({ isActive }) => (isActive ? 'link active' : 'link')}>
          Contact
        </NavLink>
      </nav>
    </header>
  );
};

export default Navbar;
