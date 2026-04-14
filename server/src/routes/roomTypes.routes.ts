import express from 'express'
// Importamos metodos de nuestro controlador
import { getRoomTypes } from '../controllers/roomTypes.controller';
const router = express.Router()

// Rutas 
router.get('/', getRoomTypes)

export default router

