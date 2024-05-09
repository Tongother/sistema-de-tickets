import { NextApiRequest, NextApiResponse } from "next";
import bcrypt from "bcryptjs"
import Connection from "@/database/Connection";

export default async function registernHandler(req: NextApiRequest, res: NextApiResponse) {
    if (req.method === 'POST') {
        const { nombre, apellido, email, password } = req.body;
        
        const hashedPassword = await bcrypt.hash(password, 10);

        try {
            // Insertar datos en la base de datos
            const result = await insertCliente(nombre, apellido, email, hashedPassword, res);
            if (result.mensaje === 'Asesor registrado exitosamente'){
                res.status(201).json(result);
            }
            else{
                res.status(401).json(result)
            }
            
        } catch (error) {
            console.error('Error al insertar datos en la base de datos:', error);
            res.status(500).json({ error: 'Error interno del servidor' });
        }
    } else {
        res.status(400).json({ error: 'Método no permitido' });
    }
};

const insertCliente = async (nombre: string, apellido: string, email: string, hashedPassword: string, res: NextApiResponse) => {
    try {
        const connection = new Connection();
        const query = `
            EXEC sp_InsertarAsesor
            @nombre = '${nombre}',
            @apellido = '${apellido}',
            @email = '${email}',
            @hashedPassword = '${hashedPassword}'
        `;
        const result = await connection.Query(query);

        // Verificar si el resultado es un array con al menos un elemento
        if (Array.isArray(result) && result.length > 0 && result[0].mensaje) {
            return result[0]; // Devolver el primer elemento del array
        } else {
            throw new Error('Error al ejecutar el procedimiento almacenado');
        }
    } catch (error) {
        console.error('Error al insertar cliente:', error);
        return { error: 'Error interno del servidor' }; // Devolver un objeto con el mensaje de error
    }
};