// Importamos el modelo
import RoomTypes from "../models/RoomTypes"
import type { Request, Response} from 'express' // Importamos los tipos de datos para req/res


export const getRoomTypes = async (req: Request, res: Response) => {
    try {
        // Traemos las habitaciones
        const Rooms = await RoomTypes.getRooms()
        res.status(200).json({
            status: 'success',
            rooms: Rooms,
        })

    } catch (error) {
        console.log('Error al extraer los tipos de habitacion' + error)
        res.status(500).json({
            status: 'error',
            message: error
        })
    }
}