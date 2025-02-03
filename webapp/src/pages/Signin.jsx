import { useState } from "react";
import {
  FaFacebook,
  FaGoogle,
  FaApple,
  FaTwitter,
  FaEyeSlash,
  FaEye,
} from "react-icons/fa";
import "../styles/signin.css";

const Signin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Tentative de connexion avec:", { email, password });
  };

  const [passwordVisible, setPasswordVisible] = useState(false);

  return (
    <div className="signin-page">
      <div className="signin-container">
        <div className="signin-left">
          <div className="welcome-text">
            <span className="hello-badge">Bonjour !</span>
            <h1>Bienvenue</h1>
            <h2>sur votre futur espace personnel !</h2>
            <p>Nous serons ravis de vous aider lors de vos recherches.</p>
          </div>
        </div>

        <div className="signin-right">
          <div className="signin-form-container">
            <h2>S&apos;inscrire</h2>
            <p className="subtitle">Créez votre espace personnel</p>

            <form onSubmit={handleSubmit} className="signin-form">
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
              </div>
              <div className="form-group">
                <label htmlFor="password">Confirmation du mot de passe</label>
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
              </div>

              <button type="submit" className="submit-button">
                S&apos;incrire
              </button>
              <div className="social-signin">
                <p>OU S&apos;INSCRIRE AVEC</p>
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

export default Signin;
