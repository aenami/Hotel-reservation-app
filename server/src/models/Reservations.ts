import { getConnection } from '../config/db.js'
import OracleDB from 'oracledb';

type InterfaceReservation = {
    Insert: (arrivalDate: Date, departureDate: Date, comments: string | undefined, idUser: number) => Promise<string>;
}


const Reservation: InterfaceReservation = {
    async Insert(arrivalDate, departureDate, comments, idUser) {
        let connection;
        try {
            // Consulta a la db (Si el usuario puso comentario o no)
            const query = `INSERT 
                INTO RESERVA(checkin_reserva, checkout_reserva, id_titular_reserva, observaciones_reserva)
                VALUES (:arrivalDate, :departureDate, :idUser, :comments)
                RETURNING id_reserva INTO :id
                `
            // Inicializamos la conexion
            connection = await getConnection()

            const comment = comments ?? null
            
            // Ejecutamos al consulta sobre la conexion
            const result = await connection.execute(
                query,
                {arrivalDate, departureDate, idUser, comments: comment, id: { dir: OracleDB.BIND_OUT, type: OracleDB.NUMBER}},
            )
            await connection.commit();

            const outBinds = result.outBinds as { id: number[] }; 
            return outBinds.id[0].toString(); 
        } catch(error) {
            // Enviamos error
            console.log("Error al realizar la consulta de las habitacion en la db")
            throw (error)
        } finally {
            // Cerramos la conexion
            if(connection) await connection.close();
        }
    },
}

export default Reservation