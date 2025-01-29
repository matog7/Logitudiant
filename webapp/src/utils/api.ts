import axios from 'axios';

const domain = "dev"

export const api = axios.create({
  baseURL: domain === 'dev' ? 'http://localhost:3333' : 'http://serverhost:3333', // Adresse de votre API à dépacer dans un fichier dédié 
  timeout: 5000, // Timeout pour les requêtes
  headers: {
    'Content-Type': 'application/json',
  },
});