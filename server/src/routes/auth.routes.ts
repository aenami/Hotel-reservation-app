import express from 'express'
// Importamos metodos de nuestro controlador
import { createUser } from '../controllers/auth.controller.js';
const router = express.Router()

// Ruta de login


// Ruta de register
router.post('/register', createUser)

export default router

