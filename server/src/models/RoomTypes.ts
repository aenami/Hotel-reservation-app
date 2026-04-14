import { getConnection } from '../config/db.js'
import OracleDB from 'oracledb';

type RoomType = {
    id: number,
    name: string,
    price: number,
    capacity: number,
}

type InterfaceRoomTypes = {
    getRooms: () => Promise<undefined | RoomType[] >
}


const RoomTypes: InterfaceRoomTypes = {
    async getRooms() {
        let connection;
        try {
            // Consulta a la db
            const query = `SELECT ID_TIPOHABITACION AS "id", NOMBRE_TIPOHABITACION AS "name", PRECIO_TIPOHABITACION AS "price", CAPACIDAD_TIPOHABITACION AS "capacity" FROM TIPOHABITACION`

            // Inicializamos la conexion
            connection = await getConnection()
            
            // Ejecutamos al consulta sobre la conexion
            const result = await connection.execute<RoomType>(
                query,
                [],
                { outFormat: OracleDB.OUT_FORMAT_OBJECT }
            )
            // Verificamos el caso en que no se nos devuelva nada 
            if (result.rows) {
                return result.rows
            }
            return undefined;
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

export default RoomTypes