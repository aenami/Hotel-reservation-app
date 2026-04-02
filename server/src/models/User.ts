import { getConnection } from '../config/db.js'
import { compareHash } from '../services/passwordService.js'

interface dataUser {
    paciente_id: number;
    nombre_paciente: string;
}

type CreateUsercredentials = {
    name: string;
    lastname: string;
    email: string;
    password: string;
}

interface typeUser {
    createUser: (fname: string, lname: string, 
        email: string, hashedPassword: string) => Promise<void>;
    verifyCreateUser: (email: string) => Promise<boolean>
    // Nuestra funcion devuelve una promesa, que cuando se resuelve devuelve un string o nada
}

type verifyUser = {
    ID_USUARIO: string;
}


const User: typeUser = {
    async createUser(name, lastname, email, password) {
        let connection;
        try {
            // Creando la consulta
            const query: string = `INSERT INTO USUARIO (nombre_usuario, apellido_usuario, email_usuario, password_usuario) VALUES (:name, :lastname, :email, :password)`

            // Defininimos que los valores de la consulta estaran almacenados en una lista de string o numbers
            const values: CreateUsercredentials = {name, lastname, email, password}
            // Instacimos conexion a la db
            connection = await getConnection()

            await connection.execute(query, values);

            await connection.commit()

        } catch (error) {
            // Enviamos error
            console.log("Error al insertar consulta de creacion de usuario en la db")
            throw(error)
        }finally {
            // Cerramos la conexion
            if (connection) await connection.close();
        }
        
    },

    async verifyCreateUser(email) {
        let connection;
        try {
            // Crando consulta
            const query = `SELECT id_usuario FROM USUARIO WHERE email_usuario = :email`

            const values = { email }

            // Creando una conexion
            connection = await getConnection()

            // Realizando consulta
            const result = await connection.execute<verifyUser>(query, values)

            const existUser = result.rows?.[0] ?? null;

            // Verificamos si el usuario ya existia
            if(existUser === null) return false
            return true

        } catch (error) {
            console.log('Error al verificar el email que el usuario ingreso')
            throw error
        } finally {
            // Cerramos la conexion
            if (connection) await connection.close();
        }
    },

}

export default User