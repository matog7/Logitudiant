/*
|--------------------------------------------------------------------------
| Routes file
|--------------------------------------------------------------------------
|
| The routes file is used for defining the HTTP routes.
|
*/

import router from '@adonisjs/core/services/router'
import ContactsController from '#controllers/contacts_controller'

router.get('/', async () => {
  return {
    hello: 'world',
  }
})

// GET method
router.get('contact/all', [ContactsController, 'contacts']) // récupère tous les contacts

// POST method
router.post('contact', () => {})

// PUT method
router.put('contact/:id', () => {})

// PATCH method
router.patch('contact/:id', () => {})

// DELETE method
router.delete('contact/:id', () => {})