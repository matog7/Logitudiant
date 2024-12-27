import PropTypes from "prop-types";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const LogementCard = ({ logement }) => {
  const navigate = useNavigate();
  const [isFavorite, setIsFavorite] = useState(false);

  const handleClick = () => {
    navigate(`/logement/${logement.id}`);
    console.log("Logement card clicked", logement);
  };

  const handleFavoriteClick = (e) => {
    e.stopPropagation(); // Empêche la navigation vers la page de détail
    setIsFavorite(!isFavorite);
    logement.isFavorite = !logement.isFavorite;
    // Ici vous pouvez ajouter la logique pour sauvegarder dans vos favoris
  };

  return (
    <div className="logement-card">
      <div className="image-container" onClick={handleClick}>
        <img src={logement.image} alt={logement.titre} />
        <button
          className={`favorite-button ${isFavorite ? "active" : ""}`}
          onClick={handleFavoriteClick}
        >
          {/* Icône de cœur - vous pouvez utiliser une image ou un SVG */}
          <svg
            viewBox="0 0 24 24"
            fill={logement.isFavorite ? "#22c55e" : "none"}
            stroke={logement.isFavorite ? "#22c55e" : "white"}
            strokeWidth="2"
          >
            <path d="M12 21.593c-5.63-5.539-11-10.297-11-14.402 0-3.791 3.068-5.191 5.281-5.191 1.312 0 4.151.501 5.719 4.457 1.59-3.968 4.464-4.447 5.726-4.447 2.54 0 5.274 1.621 5.274 5.181 0 4.069-5.136 8.625-11 14.402z" />
          </svg>
        </button>
      </div>
      <div className="logement-info" onClick={handleClick}>
        <h2>{logement.titre}</h2>
        <p className="prix">{logement.prix}/mois</p>
        <div className="details">
          <span>{logement.surface}</span>
          <span>{logement.localisation}</span>
        </div>
      </div>
    </div>
  );
};

LogementCard.propTypes = {
  logement: PropTypes.shape({
    id: PropTypes.number.isRequired,
    image: PropTypes.string.isRequired,
    titre: PropTypes.string.isRequired,
    prix: PropTypes.number.isRequired,
    surface: PropTypes.string.isRequired,
    localisation: PropTypes.string.isRequired,
    isFavorite: PropTypes.bool.isRequired,
  }).isRequired,
  handleClick: PropTypes.func.isRequired,
};

export default LogementCard;
