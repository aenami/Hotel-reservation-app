import { getConnection } from '../config/db.js'
import OracleDB from 'oracledb';
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


type verifyUser = {
    ID_USUARIO: string;
}

type typeDataUser = {
    ID_USUARIO: number;
    NOMBRE_USUARIO: string;
}

type typeVerifyLogin = {
    PASSWORD_USUARIO: string;
}

interface typeUser {
    createUser: (fname: string, lname: string, email: string, hashedPassword: string) => Promise<void>;
    existsUser: (email: string) => Promise<boolean>;
    verifyLoginUser: (email: string, password: string) => Promise<boolean>;
    getIdUser: (email: string) => Promise<typeDataUser | false>;
    // Nuestra funcion devuelve una promesa, que cuando se resuelve devuelve un string o nada
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

    async existsUser(email) {
        let connection;
        try {
            // Crando consulta
            const query = `SELECT id_usuario FROM USUARIO WHERE email_usuario = :email`

            const values = { email }

            // Creando una conexion
            connection = await getConnection()

            // Realizando consulta
            const result = await connection.execute<verifyUser>(query, values)
            await connection.commit()

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

    async verifyLoginUser(email, password) {
        // Funcion que se encarga de verificar que la contraseña ingresada coincida con la que se tiene almacenada
        let connection;
        try {
            // Consulta a la db
            const query = `SELECT password_usuario FROM USUARIO WHERE email_usuario = :email`
            const values = { email }

            // Creando conexion
            connection = await getConnection()
            
            // Ejecutamos la consulta
            const result = await connection.execute<typeVerifyLogin>(
                query, 
                values,
                { outFormat: OracleDB.OUT_FORMAT_OBJECT })
            await connection.commit()

            // Verificamos el caso en que no se nos devuelva nada (Que si lo va a hacer igualmente)
            const existUser = result.rows?.[0] ?? null;

            // Verificamos si se nos fue devuelto algo
            if(existUser){
                // Verificamos la password ingresada
                const isMatch = await compareHash(password, existUser.PASSWORD_USUARIO) 
                return isMatch
            }
            return false
        } catch (error) {
            console.log('Error al verificar el documento / contraseña ingresado')
            throw error
        } finally {
            // Cerramos la conexion
            if (connection) await connection.close();
        }
    },

    async getIdUser(email: string) {
        let connection;
        try {
            // Creamos la consulta a la db
            const query = `SELECT id_usuario, nombre_usuario FROM USUARIO WHERE email_usuario = :email`
            const values = { email }

            // Creando conexion
            connection = await getConnection()
            
            // Ejecutamos la consulta
            const result = await connection.execute<typeDataUser>(
                query, 
                values,
                { outFormat: OracleDB.OUT_FORMAT_OBJECT })
            await connection.commit()
            
            if(result.rows){
                return result.rows[0] // retornamos el primer objeto
            }
            return false;
            
        } catch (error) {
            console.log('Error al obtener la informacion del usuario a partir de su email')
            throw error
        } finally {
            // Cerramos la conexion
            if (connection) await connection.close();
        }
    },

}

export default User