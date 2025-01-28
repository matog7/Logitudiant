import { useState, useEffect } from "react";
import moment from 'moment';
import "./App.css";
import LogementCard from "./components/LogementCard";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  useLocation,
} from "react-router-dom";
import LogementDetail from "./pages/LogementDetail";
import Rechercher from "./pages/Rechercher";
import Login from "./pages/Login";
import { Sun, Moon } from "lucide-react";
import About from './pages/About';
import Favorite from "./pages/Favorite";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

function App() {
  const [darkMode, setDarkMode] = useState(false);
  const [logements] = useState([
    {
      id: 1,
      titre: "Studio moderne au centre-ville",
      prix: "450€",
      surface: "18m²",
      localisation: "Centre-ville",
      image: "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267",
      isFavorite: false,
      description: "Charmant studio entièrement rénové situé en plein cœur du centre-ville. Cuisine équipée moderne, salle de bain avec douche à l'italienne, nombreux rangements. Proche de toutes commodités, transports en commun et commerces à proximité immédiate. Idéal pour étudiant. Chauffage individuel électrique, double vitrage. Disponible immédiatement.",
      dispo: moment().format('LL')
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
            <Route path="/a-propos" element={<About />} />
            <Route path="/favoris" element={<Favorite />} />
          </Routes>
        </main>

        <Footer />
      </div>
    </Router>
  );
}

export default App;
