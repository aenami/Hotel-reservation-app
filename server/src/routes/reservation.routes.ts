import express from 'express'
// Importamos metodos de nuestro controlador
import { insertReservation } from '../controllers/reservation.controller'
const router = express.Router()

// Rutas 
// ---PENDIENTE PROTEGER LA RUTA ---------
router.post('/', insertReservation)

export default router
