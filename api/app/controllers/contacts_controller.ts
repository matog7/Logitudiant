import type { HttpContext } from '@adonisjs/core/http'
import logger from '@adonisjs/core/services/logger';
// const Contact = use('App/Models/Contact');
import db from '@adonisjs/lucid/services/db'

export default class ContactsController {
    /**
   * Récupère tous les contacts depuis la base de données.
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async contacts({ response }: HttpContext) {
    try {
      const contacts = await db
        .query()
        .from('contact')
        .select('*')
        .orderBy('id', 'desc');
      logger.info("OK /contacts/all"); // Fixed log to properly log contacts as an object
      return response.status(200).json({
        success: true,
        message: 'Liste des contacts récupérée avec succès.',
        data: contacts
      });
    } catch (error) {
      logger.error("ERROR /contacts/all", error); // Changed to logger.error for better error logging
      return response.status(500).json({
        success: false,
        message: 'Erreur lors de la récupération des contacts.',
        error: error.message || 'Une erreur inconnue est survenue.' // Added fallback message for error
      });
    }
  }
}