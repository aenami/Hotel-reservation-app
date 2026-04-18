import oracledb from "oracledb"
import { Pool } from "oracledb";

let pool: Pool;

type credentialsPool = {
    user: string;
    password: string;
    connectString: string;
    poolMin: number;
    poolMax: number;
    poolIncrement: number;
}

export const initializePool = async () => {
    try{
        // Tod's los valores que importamos desde .env los recuperamos como strings
        const credentials: credentialsPool = {
            user: process.env.DB_USER!,
            password: process.env.DB_PASSWORD!,
            connectString: process.env.DB_CONNNECT_STRING!,
            poolMin: parseInt(process.env.DB_POOL_MIN!),
            poolMax: parseInt(process.env.DB_POOL_MAX!),
            poolIncrement: parseInt(process.env.DB_POOL_INCREMENT!),
        }
        
        // Creamos un pool de conexion
        pool = await oracledb.createPool(credentials);

        console.log("Pool de conexion creado con exito")
    } catch(error){
        console.log("Error creando pool: ", error)
        process.exit(1); // Cancelamos el intento de conexion
    }
};

export const getConnection = async () => {
    if(!pool){
        throw new Error("El pool de conexiones no ha sido inicializado")
    }
    return pool.getConnection() // Retornamos una conexion valida de nuestro pool de conexiones
}