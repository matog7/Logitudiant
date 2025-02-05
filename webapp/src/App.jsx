import { useState } from "react";
import moment from "moment";
import "./App.css";
import LogementCard from "./components/LogementCard";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LogementDetail from "./pages/LogementDetail";
import Rechercher from "./pages/Rechercher";
import Login from "./pages/Login";
import About from "./pages/About";
import Favorite from "./pages/Favorite";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Signin from "./pages/Signin";

function App() {
  const [logements] = useState([
    {
      id: 1,
      titre: "Studio moderne au centre-ville",
      prix: "450€",
      surface: "18m²",
      localisation: "Centre-ville",
      image: "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267",
      isFavorite: false,
      description:
        "Charmant studio entièrement rénové situé en plein cœur du centre-ville. Cuisine équipée moderne, salle de bain avec douche à l'italienne, nombreux rangements. Proche de toutes commodités, transports en commun et commerces à proximité immédiate. Idéal pour étudiant. Chauffage individuel électrique, double vitrage. Disponible immédiatement.",
      dispo: moment().format("LL"),
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
    {
      id: 3,
      titre: "Studio moderne au centre-ville",
      prix: "450€",
      surface: "18m²",
      localisation: "Centre-ville",
      image: "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267",
      isFavorite: false,
      description:
        "Charmant studio entièrement rénové situé en plein cœur du centre-ville. Cuisine équipée moderne, salle de bain avec douche à l'italienne, nombreux rangements. Proche de toutes commodités, transports en commun et commerces à proximité immédiate. Idéal pour étudiant. Chauffage individuel électrique, double vitrage. Disponible immédiatement.",
      dispo: moment().format("LL"),
    },
    {
      id: 4,
      titre: "T2 lumineux proche campus villejean",
      prix: "580€",
      surface: "35m²",
      localisation: "Quartier universitaire",
      image: "https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af",
      isFavorite: true,
    },
    {
      id: 5,
      titre: "Studio moderne au centre-ville",
      prix: "450€",
      surface: "18m²",
      localisation: "Centre-ville",
      image: "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267",
      isFavorite: false,
      description:
        "Charmant studio entièrement rénové situé en plein cœur du centre-ville. Cuisine équipée moderne, salle de bain avec douche à l'italienne, nombreux rangements. Proche de toutes commodités, transports en commun et commerces à proximité immédiate. Idéal pour étudiant. Chauffage individuel électrique, double vitrage. Disponible immédiatement.",
      dispo: moment().format("LL"),
    },
    {
      id: 6,
      titre: "T2 lumineux proche campus villejean",
      prix: "580€",
      surface: "35m²",
      localisation: "Quartier universitaire",
      image: "https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af",
      isFavorite: true,
    },
    {
      id: 7,
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
        <Navbar />

        <main className="main-content">
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
            <Route
              path="/rechercher"
              element={<Rechercher logements={logements} />}
            />
            <Route path="/connexion" element={<Login />} />
            <Route path="/inscription" element={<Signin />} />
            <Route path="/a-propos" element={<About />} />
            <Route path="/favoris" element={<Favorite />} />
          </Routes>
        </main>

        <Footer />
      </div>
    </Router>
  );
}

export default App;
