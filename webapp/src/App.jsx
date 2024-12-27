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
} from "react-router-dom";
import LogementDetail from "./pages/LogementDetail";
import Rechercher from "./pages/Rechercher";

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
                <div className="logo-container" onClick={() => setConnected(true)}>
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
          <Route path="/rechercher" element={<Rechercher logements={logements} />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
