import { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import logoSvg from "../assets/logo-sans-fond.svg";
import { Sun, Moon } from "lucide-react";

const Navbar = () => {
  const [connected, setConnected] = useState(false);
  const [darkMode, setDarkMode] = useState(false);
  // Gestion du thème
  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
      document.documentElement.classList.remove("light");
    } else {
      document.documentElement.classList.add("light");
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);

  const toggleTheme = () => {
    setDarkMode(!darkMode);
  };
  return (
    <nav className="navbar">
      <div className="nav-container">
        <div className="nav-left">
          <Link to="/" className="logo-link">
            <div className="logo-container" onClick={() => setConnected(true)}>
              <img
                src={logoSvg}
                alt="Logitudiant"
                className={`logo-icon ${darkMode ? "dark" : "light"}`}
                style={{
                  filter: darkMode
                    ? "invert(100%) sepia(0%) saturate(0%) hue-rotate(93deg) brightness(103%) contrast(103%)"
                    : "invert(47%) sepia(82%) saturate(463%) hue-rotate(152deg) brightness(91%) contrast(101%)",
                }}
              />
            </div>
          </Link>
          <div className="nav-links">
            <NavLink
              to="/"
              className={({ isActive }) => (isActive ? "active" : "")}
            >
              Accueil
            </NavLink>
            <NavLink
              to="/rechercher"
              className={({ isActive }) => (isActive ? "active" : "")}
            >
              Rechercher
            </NavLink>
            {connected ? (
              <NavLink
                to="/favoris"
                className={({ isActive }) => (isActive ? "active" : "")}
              >
                Favoris
              </NavLink>
            ) : null}
            <NavLink
              to="/a-propos"
              className={({ isActive }) => (isActive ? "active" : "")}
            >
              À propos
            </NavLink>
          </div>
        </div>
        <div className="nav-right">
          <Link to="/connexion" className="nav-button">
            Se connecter
          </Link>
          <Link to="/inscription" className="nav-button primary">
            S&apos;inscrire
          </Link>
          <button
            onClick={toggleTheme}
            className="theme-toggle"
            aria-label="Toggle theme"
          >
            {darkMode ? (
              <Sun className="theme-icon" />
            ) : (
              <Moon className="theme-icon" />
            )}
          </button>
        </div>
      </div>
    </nav>
  );
};
export default Navbar;
