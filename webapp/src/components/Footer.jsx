import { Link, useLocation } from "react-router-dom";
import "../styles/footer.css";

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

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <Breadcrumbs />
        <div className="footer-links">
          <div className="footer-section">
            <h3>À propos</h3>
            <Link to="/a-propos#how-it-works">Qui sommes-nous</Link>
            <Link to="/a-propos#contact-section">Contact</Link>
            <Link to="/mentions-legales">Mentions légales</Link>
            <Link to="/politiques">Politique de confidentialité</Link>
          </div>
          <div className="footer-section">
            <h3>Aide</h3>
            <Link to="/faq">FAQ</Link>
            <Link to="/guide">Guide d&apos;utilisation</Link>
            <Link to="/a-propos#conditions">Conditions de location</Link>
            <Link to="/a-propos#guarantees">Garanties et assurances</Link>
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
  );
};

export default Footer;
