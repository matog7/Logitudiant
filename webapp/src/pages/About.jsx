import { useState, useEffect } from "react";
import { Accordion, AccordionSummary, AccordionDetails } from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { useLocation } from "react-router-dom";
import "../styles/About.css";

const About = () => {
  const location = useLocation();
  const [expandedPanel, setExpandedPanel] = useState(false);

  useEffect(() => {
    // Vérifie si l'URL contient un hash et ouvre l'accordéon correspondant
    if (location.hash) {
      setExpandedPanel(location.hash.substring(1));
    }
  }, [location]);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpandedPanel(isExpanded ? panel : false);
  };

  return (
    <div className="about-container">
      <div className="about-header">
        <h2>À propos de Logitudiant</h2>
        <p>Tout ce que vous devez savoir sur notre plateforme</p>
      </div>

      <div className="accordion-container">
        <Accordion
          expanded={expandedPanel === "how-it-works"}
          onChange={handleChange("how-it-works")}
          id="how-it-works"
          slotProps={{ heading: { component: "h4" } }}
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1-content"
          >
            Comment ça marche ?
          </AccordionSummary>
          <AccordionDetails className="accordion-content">
            <p>
              Logitudiant est une plateforme qui met en relation les
              propriétaires, professionnels ou particuliers, et les étudiants.
              Nous facilitons la recherche de logement étudiant en proposant une
              interface simple et intuitive mais aussi en simplifiant le contact
              entre tous les acteurs.
            </p>
          </AccordionDetails>
        </Accordion>

        <Accordion
          expanded={expandedPanel === "conditions"}
          onChange={handleChange("conditions")}
          id="conditions"
          slotProps={{ heading: { component: "h4" } }}
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel2-content"
          >
            Conditions de location
          </AccordionSummary>
          <AccordionDetails className="accordion-content">
            <p>
              Les conditions de location sont définies par les propriétaires.
              Nous recommandons de toujours vérifier les documents nécessaires
              et de bien lire le contrat de location avant de s&apos;engager.
            </p>
          </AccordionDetails>
        </Accordion>

        <Accordion
          expanded={expandedPanel === "guarantees"}
          onChange={handleChange("guarantees")}
          id="guarantees"
          slotProps={{ heading: { component: "h4" } }}
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel3-content"
          >
            Garanties et assurances
          </AccordionSummary>
          <AccordionDetails className="accordion-content">
            <p>
              Nous conseillons aux étudiants de souscrire à une assurance
              habitation. Les garanties comme Visale peuvent faciliter l&apos;accès
              au logement pour les étudiants.
            </p>
          </AccordionDetails>
        </Accordion>

        <Accordion
          expanded={expandedPanel === "contact-section"}
          onChange={handleChange("contact-section")}
          id="contact-section"
          slotProps={{ heading: { component: "h4" } }}
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel4-content"
          >
            Contact et support
          </AccordionSummary>
          <AccordionDetails className="accordion-content">
            <p>
              Notre équipe support est disponible pour vous aider. Vous pouvez
              nous contacter par email à
            </p>
            <a href="mailto:support@logitudiant.fr">support@logitudiant.fr</a>
            <p>ou via le formulaire de contact.</p>
          </AccordionDetails>
        </Accordion>
      </div>
    </div>
  );
};

export default About;
