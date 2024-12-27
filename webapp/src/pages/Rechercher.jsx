import { useState, useEffect } from "react";
import LogementCard from "../components/LogementCard";
import PropTypes from "prop-types";
import "../styles/rechercher.css";

const Rechercher = ({ logements }) => {
  const [filteredLogements, setFilteredLogements] = useState(logements);
  const [filters, setFilters] = useState({
    prix: { min: "", max: "" },
    surface: { min: "", max: "" },
    localisation: "",
    search: "",
  });

  useEffect(() => {
    const filtered = logements.filter((logement) => {
      const prix = parseInt(logement.prix);
      const surface = parseInt(logement.surface);

      return (
        // Filtre par prix
        (!filters.prix.min || prix >= parseInt(filters.prix.min)) &&
        (!filters.prix.max || prix <= parseInt(filters.prix.max)) &&
        // Filtre par surface
        (!filters.surface.min || surface >= parseInt(filters.surface.min)) &&
        (!filters.surface.max || surface <= parseInt(filters.surface.max)) &&
        // Filtre par localisation
        (!filters.localisation ||
          logement.localisation
            .toLowerCase()
            .includes(filters.localisation.toLowerCase())) &&
        // Recherche globale
        (!filters.search ||
          logement.titre.toLowerCase().includes(filters.search.toLowerCase()) ||
          logement.localisation
            .toLowerCase()
            .includes(filters.search.toLowerCase()))
      );
    });

    setFilteredLogements(filtered);
  }, [filters, logements]);

  const handleFilterChange = (e, filterType, subType = null) => {
    const value = e.target.value;

    if (subType) {
      setFilters((prev) => ({
        ...prev,
        [filterType]: {
          ...prev[filterType],
          [subType]: value,
        },
      }));
    } else {
      setFilters((prev) => ({
        ...prev,
        [filterType]: value,
      }));
    }
  };

  const handleReset = () => {
    setFilters({
      prix: { min: "", max: "" },
      surface: { min: "", max: "" },
      localisation: "",
      search: "",
    });
  };

  return (
    <div className="recherche-page">
      <div className="filtres-container">
        <div className="search-bar">
          <input
            type="text"
            placeholder="Rechercher un logement..."
            value={filters.search}
            onChange={(e) => handleFilterChange(e, "search")}
            className="search-input"
          />
          <button onClick={handleReset} className="reset-button">
            Réinitialiser les filtres
          </button>
        </div>

        <div className="filtres">
          <div className="filtre-group">
            <h3>Prix</h3>
            <div className="range-inputs">
              <input
                type="number"
                placeholder="Min"
                value={filters.prix.min}
                onChange={(e) => handleFilterChange(e, "prix", "min")}
                className="range-input"
              />
              <input
                type="number"
                placeholder="Max"
                value={filters.prix.max}
                onChange={(e) => handleFilterChange(e, "prix", "max")}
                className="range-input"
              />
            </div>
          </div>

          <div className="filtre-group">
            <h3>Surface</h3>
            <div className="range-inputs">
              <input
                type="number"
                placeholder="Min"
                value={filters.surface.min}
                onChange={(e) => handleFilterChange(e, "surface", "min")}
                className="range-input"
              />
              <input
                type="number"
                placeholder="Max"
                value={filters.surface.max}
                onChange={(e) => handleFilterChange(e, "surface", "max")}
                className="range-input"
              />
            </div>
          </div>

          <div className="filtre-group">
            <h3>Localisation</h3>
            <input
              type="text"
              placeholder="Ville ou quartier"
              value={filters.localisation}
              onChange={(e) => handleFilterChange(e, "localisation")}
              className="localisation-input"
            />
          </div>
        </div>
      </div>

      <div className="resultats">
        <h2>Résultats ({filteredLogements.length})</h2>
        <div className="logements-grid">
          {filteredLogements.map((logement) => (
            <LogementCard key={logement.id} logement={logement} />
          ))}
        </div>
      </div>
    </div>
  );
};

Rechercher.propTypes = {
  logements: PropTypes.array.isRequired,
};

export default Rechercher;
