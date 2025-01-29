import PropTypes from "prop-types";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import FavoriteIcon from "@mui/icons-material/Favorite";

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
          {isFavorite ? <FavoriteIcon /> : <FavoriteBorderIcon />}
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
