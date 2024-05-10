import { NextApiRequest, NextApiResponse } from "next";
import bcrypt from "bcryptjs"
import { sql } from '@vercel/postgres';
import { db } from '@vercel/postgres';

export default async function registernHandler(req: NextApiRequest, res: NextApiResponse) {
    if (req.method === 'POST') {
        const { nombre, apellido, email, password } = req.body;
        
        const hashedPassword = await bcrypt.hash(password, 10);

        const client = await db.connect();

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
        }finally{
            client.release();
        }
    } else {
        res.status(400).json({ error: 'Método no permitido' });
    }
};

const insertCliente = async (nombre: string, apellido: string, email: string, hashedPassword: string, res: NextApiResponse) => {
    try {
        const result = await sql`SELECT * FROM insertar_asesor(${nombre}, ${apellido}, ${email}, ${hashedPassword})`;
        console.log(result);

        // Verificar si el resultado es un array con al menos un elemento
        if (Array.isArray(result) && result.length > 0 && result[0].mensaje) {
            return result[0]; // Devolver el primer elemento del array
        } else {
            throw new Error('Error al ejecutar el procedimiento almacenado');
        }
    } catch(error){
        console.log(error)
        return res.status(500).json({error: error});
    }
};
