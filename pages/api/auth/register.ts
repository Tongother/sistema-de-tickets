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
            res.status(201).json({ message: 'Usuario registrado exitosamente' });

        } catch (error) {

            console.error('Error al insertar datos en la base de datos:', error);
            res.status(500).json({ error: 'Error interno del servidor' });
            
        }
    } else {
        res.status(400).json({ error: 'Método no permitido' });
    }
};

const insertCliente = async (nombre: string, apellido: string, email: string, hashedPassword: string, res: NextApiResponse) => {
    console.log(nombre, apellido, email, hashedPassword);
    const postClient = await new Connection().Query(`INSERT INTO clientes (nombre, apellido, correo, password)
    VALUES ('${nombre}', '${apellido}', '${email}', '${hashedPassword}');`);
    return res.status(200).json(postClient);
};