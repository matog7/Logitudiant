import { useState } from "react";
import "./App.css";
import logo from "./assets/logo.png";
import LogementCard from "./components/LogementCard";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  NavLink,
  useLocation,
} from "react-router-dom";
import LogementDetail from "./pages/LogementDetail";
import Rechercher from "./pages/Rechercher";
import Login from "./pages/Login";

// Composant Breadcrumbs séparé
const Breadcrumbs = () => {
  const location = useLocation();
  const pathnames = location.pathname.split("/").filter((x) => x);

  // Mapping des routes pour un affichage en français
  const routeNames = {
    connexion: "Connexion",
    rechercher: "Rechercher",
    logement: "Logement",
    favoris: "Favoris",
    "a-propos": "À propos",
  };

  return (
    <div className="breadcrumbs">
      <Link to="/">Accueil</Link>
      {pathnames.map((name, index) => {
        const routeTo = `/${pathnames.slice(0, index + 1).join("/")}`;
        const isLast = index === pathnames.length - 1;

        return (
          <span key={name}>
            {" > "}
            {isLast ? (
              <span className="current">{routeNames[name] || name}</span>
            ) : (
              <Link to={routeTo}>{routeNames[name] || name}</Link>
            )}
          </span>
        );
      })}
    </div>
  );
};

function App() {
  const [connected, setConnected] = useState(false);
  const [logements] = useState([
    {
      id: 1,
      titre: "Studio moderne au centre-ville",
      prix: "450€",
      surface: "18m²",
      localisation: "Centre-ville",
      image: "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267",
      isFavorite: false,
    },
    {
      id: 2,
      titre: "T2 lumineux proche campus villejean",
      prix: "580€",
      surface: "35m²",
      localisation: "Quartier universitaire",
      image: "https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af",
      isFavorite: true,
    },
    // ... autres logements
  ]);

  return (
    <Router>
      <div className="app">
        <nav className="navbar">
          <div className="nav-container">
            <div className="nav-left">
              <Link to="/" className="logo-link">
                <div
                  className="logo-container"
                  onClick={() => setConnected(true)}
                >
                  <img src={logo} alt="Logitudiant" className="logo-icon" />
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
            </div>
          </div>
        </nav>

        <main className="main-content">
          <Routes>
            <Route
              path="/"
              element={
                <div className="logements-grid">
                  {logements.map((logement) => (
                    <LogementCard key={logement.id} logement={logement} />
                  ))}
                </div>
              }
            />
            <Route path="/logement/:id" element={<LogementDetail />} />
            <Route
              path="/rechercher"
              element={<Rechercher logements={logements} />}
            />
            <Route path="/connexion" element={<Login />} />
          </Routes>
        </main>

        <footer className="footer">
          <div className="footer-content">
            <Breadcrumbs />
            <div className="footer-links">
              <div className="footer-section">
                <h3>À propos</h3>
                <Link to="/a-propos">Qui sommes-nous</Link>
                <Link to="/contact">Contact</Link>
                <Link to="/mentions-legales">Mentions légales</Link>
              </div>
              <div className="footer-section">
                <h3>Aide</h3>
                <Link to="/faq">FAQ</Link>
                <Link to="/guide">Guide d&apos;utilisation</Link>
                <Link to="/support">Support</Link>
              </div>
              <div className="footer-section">
                <h3>Suivez-nous</h3>
                <a
                  href="https://twitter.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Twitter
                </a>
                <a
                  href="https://facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Facebook
                </a>
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Instagram
                </a>
              </div>
            </div>
            <div className="footer-bottom">
              <p>&copy; 2025 Logitudiant. Tous droits réservés.</p>
            </div>
          </div>
        </footer>
      </div>
    </Router>
  );
}

export default App;
