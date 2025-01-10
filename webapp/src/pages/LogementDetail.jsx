import { useParams } from "react-router-dom";
import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";

const LogementDetail = () => {
  const { id } = useParams();

  // Simulons des données détaillées (à remplacer par vos vraies données)
  const logement = {
    id: id,
    titre: "Studio moderne au centre-ville",
    prix: "450€",
    surface: "18m²",
    localisation: "Centre-ville",
    adresse: "1 rue de la Paix, 35000 Rennes",
    coordinates: {
      lat: 48.117266,
      lng: -1.677793,
    },
    image: "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267",
    description: "Magnifique studio entièrement rénové...",
    equipements: ["Wifi", "Machine à laver", "Cuisine équipée"],
    charges: "50€",
    depot: "900€",
    disponibilite: "Immédiate",
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

  const center = {
    lat: logement.coordinates.lat,
    lng: logement.coordinates.lng,
  };

  return (
    <div className="logement-detail">
      <div className="detail-header">
        <h1>{logement.titre}</h1>
        <p className="localisation">{logement.localisation}</p>
      </div>

      <div className="detail-content">
        <div className="detail-left">
          <img src={logement.image} alt={logement.titre} />
          <div className="description">
            <h2>Description</h2>
            <p>{logement.description}</p>
          </div>

          <div className="localisation-section mt-6">
            <h2 className="text-xl font-semibold mb-4">Localisation</h2>
            <p className="mb-4">{logement.adresse}</p>
            <LoadScript googleMapsApiKey="VOTRE_CLÉ_API_GOOGLE">
              <GoogleMap
                mapContainerStyle={mapContainerStyle}
                center={center}
                zoom={15}
              >
                <Marker position={center} />
              </GoogleMap>
            </LoadScript>
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
