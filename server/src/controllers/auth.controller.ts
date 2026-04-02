// Importamos el modelo
import User from "../models/User.js"
import type { Request, Response} from 'express' // Importamos los tipos de datos para req/res
import { hashPassword } from "../services/passwordService.js" // Improtamos el servicio de password
//import { generateToken } from "../services/tokensService.js"
import { parse } from "node:path"

export const createUser = async (req: Request, res: Response) => {
    // Extrameos la informacion del formulario
    const {firstName, lastName, email, password} = req.body

    try {
        //-------------- Validaciones previas a la insercion
        const validationInfo = await User.verifyCreateUser(email)

        if(validationInfo){
            return res.status(409).json({
                error: true,
                message: 'El email ya esta siendo utilizado por otro usuario'
            })
        }

        //------------- Logica para la insercion del usuario
        //1. Hasheamos la contraseña
        const hashedPassword = await hashPassword(password);

        await User.createUser(firstName, lastName, email, hashedPassword)

        res.status(201).json({
            error: false,
            message: 'Usuario creado con exito'
        })
        
    } catch (error) {
        // Devolvemos la respuesta del error de nuestro modelo al frontend
        console.log('Error al crear el usuario: ', error)
        res.status(500).json({
            error: true,
            message: error
        })
    }
}
