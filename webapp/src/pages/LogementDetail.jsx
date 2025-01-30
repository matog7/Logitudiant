import { useParams } from "react-router-dom";
import moment from "moment";
import { GoogleMap, useLoadScript, MarkerF } from "@react-google-maps/api";
import { MapPin, Loader } from "lucide-react";
import { Alert } from "@mui/material";

const MAPS_API_KEY = import.meta.env.VITE_MAPS_API_KEY;

const LogementDetail = () => {
  const { id } = useParams();
  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: MAPS_API_KEY,
  });

  // Simulons des données détaillées (à remplacer par vos vraies données)
  const logement = {
    id: id,
    titre: "Studio moderne au centre-ville",
    prix: "450€",
    surface: "18m²",
    localisation: "Centre-ville",
    adresse: "1 rue de la Paix, 35000 Rennes",
    coordinates: {
      lat: 47.759003301811134,
      lng: -3.3895119733020054,
    },
    image: "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267",
    description: "Magnifique studio entièrement rénové...",
    equipements: ["Wifi", "Machine à laver", "Cuisine équipée"],
    charges: "50€",
    depot: "900€",
    disponibilite: moment().locale('fr').format('LL'),
    contact: {
      nom: "Jean Dupont",
      telephone: "06 XX XX XX XX",
      email: "contact@example.com",
    },
    proprietaire: "matau56100@gmail.com",
  };

  const mapContainerStyle = {
    width: "100%",
    height: "400px",
    borderRadius: "8px",
  };

  const position = {
    lat: logement.coordinates.lat,
    lng: logement.coordinates.lng,
  };

  if (loadError) return <div>Erreur de chargement de la carte</div>;
  if (!isLoaded)
    return (
      <div className="map-loading">
        <Loader className="animate-spin" /> Chargement de la carte...
      </div>
    );

  return (
    <div className="logement-detail">
      <div className="detail-header">
        <h1>{logement.titre}</h1>
        <p className="localisation">
          <MapPin size={18} className="inline-block mr-1" />
          {logement.localisation}
        </p>
      </div>

      <div className="detail-content">
        <div className="detail-left">
          <img src={logement.image} alt={logement.titre} />
          <div className="description">
            <h2>Description</h2>
            <p>{logement.description}</p>
            <h3>Disponibilité</h3>
            <p>{logement.disponibilite}</p>
          </div>

          <div className="localisation-section mt-6">
            <h2 className="text-xl font-semibold mb-4">Localisation</h2>
            <p className="mb-4">{logement.adresse}</p>
            {loadError ? (
              <Alert severity="warning">Erreur</Alert>
            ) : !isLoaded ? (
              <div className="map-loading">
                <Loader className="animate-spin" /> Chargement de la carte...
              </div>
            ) : (
              <GoogleMap
                mapContainerStyle={mapContainerStyle}
                center={position}
                zoom={15}
              >
                <MarkerF position={position} />
              </GoogleMap>
            )}
          </div>

          <div className="equipements mt-6">
            <h2>Équipements</h2>
            <ul>
              {logement.equipements.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </div>
        </div>

        <div className="detail-right">
          <div className="prix-card">
            <h2>{logement.prix}/mois</h2>
            <div className="prix-details">
              <p>Charges: {logement.charges}/mois</p>
              <p>Dépôt de garantie: {logement.depot}</p>
              <p>Surface: {logement.surface}</p>
              <p>Disponibilité: {logement.disponibilite}</p>
            </div>
            <button
              className="contact-button"
              onClick={() => window.open(`mailto:${logement.proprietaire}`)}
            >
              Contacter le propriétaire
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LogementDetail;
