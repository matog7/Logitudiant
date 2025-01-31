import { useState } from "react";
import { Link } from "react-router-dom";
import {
  FaFacebook,
  FaGoogle,
  FaApple,
  FaTwitter,
  FaEyeSlash,
  FaEye,
} from "react-icons/fa";
import "../styles/login.css";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Tentative de connexion avec:", { email, password });
  };

  const [passwordVisible, setPasswordVisible] = useState(false);

  return (
    <div className="login-page">
      <div className="login-container">
        <div className="login-left">
          <div className="welcome-text">
            <span className="hello-badge">Bonjour !</span>
            <h1>Bon retour</h1>
            <h2>sur votre espace personnel !</h2>
            <p>Nous sommes ravis de vous retrouver parmi nous.</p>
          </div>
        </div>

        <div className="login-right">
          <div className="login-form-container">
            <h2>Se connecter</h2>
            <p className="subtitle">Accédez à votre espace personnel</p>

            <form onSubmit={handleSubmit} className="login-form">
              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input
                  id="email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Entrez votre email"
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="password">Mot de passe</label>
                <div className="input password">
                  <input
                    id="password"
                    type={passwordVisible ? "text" : "password"}
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Entrez votre mot de passe"
                    required
                  />
                  <button
                    type="button"
                    onClick={() => setPasswordVisible(!passwordVisible)}
                    className="toggle-password"
                  >
                    {passwordVisible ? (
                      <FaEyeSlash size={20} />
                    ) : (
                      <FaEye size={20} />
                    )}
                  </button>
                </div>
                <Link to="/mot-de-passe-oublie" className="forgot-password">
                  Mot de passe oublié ?
                </Link>
              </div>

              <button type="submit" className="submit-button">
                Se connecter
              </button>
              <div className="social-login">
                <p>OU SE CONNECTER AVEC</p>
                <div className="social-buttons">
                  <button type="button" className="social-button facebook">
                    <FaFacebook size={20} />
                  </button>
                  <button type="button" className="social-button apple">
                    <FaApple size={20} />
                  </button>
                  <button type="button" className="social-button google">
                    <FaGoogle size={20} />
                  </button>
                  <button type="button" className="social-button twitter">
                    <FaTwitter size={20} />
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
