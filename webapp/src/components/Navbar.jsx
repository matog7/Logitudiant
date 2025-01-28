import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import logo from "../assets/logo.png";

const Navbar = () => {
    const [connected, setConnected] = useState(false);
    return (
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
    )
}
export default Navbar;