// Importamos el modelo
import Reservation from "../models/Reservations"
import type { Request, Response} from 'express' // Importamos los tipos de datos para req/res

export const insertReservation = async (req: Request, res: Response) => {
    try {
        // Tomar datos del payload
        const {arrivalDate, departureDate, rooms, comments, idUser} = req.body

        // 1. Usamos el modelo
        const idReservation = await Reservation.Insert( new Date(arrivalDate), new Date(departureDate), comments, idUser)

        // 2. Devolvemos una respuesta al frontend
        res.status(200).json({
            status: 'ok',
            id: idReservation,
        })

    } catch (error) {
        console.log('Error al insertar la reserva' + error)
        res.status(500).json({
            status: 'error',
            message: error
        })
    }
}
