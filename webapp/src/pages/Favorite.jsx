import React, { useState, useEffect } from 'react';
import '../styles/About.css';
import { api } from '../utils/api';
import { Alert } from '@mui/material';


const Favorite = () => {
  const [contacts, setContacts] = useState([]);
  const [alert, setAlert] = useState(false);

  useEffect(() => {
    // Vérifie si l'URL contient un hash et ouvre l'accordéon correspondant
    api.get('/contact/all')
      .then((response) => {
        setContacts(response.data.data);
      })
      .catch((error) => {
        console.error('Erreur lors de la récupération des contacts:', error);
        setAlert(true);
      });
  }, []);

  return (
    <div className="about-container">
      <div className="about-header">    
        <h1>Liste des Contacts</h1>
        {alert ? (<Alert severity='warning'>Erreur de chargement des données depuis la base</Alert>) : null}
        <div className='accordion-content'>
          <ul>
              {contacts.map((contact) => (
              <li key={contact.id}>
                  {contact.nom} - {contact.telephone} - {contact.email}
              </li>
              ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Favorite; 