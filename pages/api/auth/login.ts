import { NextApiRequest, NextApiResponse } from "next";
import bcrypt from "bcryptjs";
import { sql } from '@vercel/postgres';
import { db } from '@vercel/postgres';
import jwt from 'jsonwebtoken';
import { serialize } from "cookie";
const superTokenSecretKey = process.env.JWT_SECRET_KEY;

export default async function loginHandler(req: NextApiRequest, res: NextApiResponse) {
    if (req.method === 'POST') {
        const { email, password} = req.body;
        const client = await db.connect();
        try {
            const userData = await sql`SELECT * FROM clientes WHERE correo = ${email}`;
            const data = userData.rows[0];
            if (!data.correo || !(await bcrypt.compare(password, data.password))) {
                return res.status(401).json({ error: 'Credenciales inválidas' });
            }
            const token = jwt.sign({
                exp: Math.floor(Date.now() / 1000) + 60 * 60 * 24,
                id: data.id,
                nombre: data.nombre,
                apellido: data.apellido,
                email: data.correo,
                tipoUsuario: data.tipo_usuario
            }, superTokenSecretKey as string);

            const serialized = serialize('auth', token, {
                httpOnly: true,
                secure: process.env.NODE_ENV === 'production',
                sameSite: 'strict',
                maxAge: 1000 + 60 * 60 * 24,
                path: '/'
            });
            res.setHeader('Set-Cookie', serialized);
            return res.status(200).json({message:'Logueado correctamente', tipoUsuario: data.tipo_usuario});

        } catch (error) {
            console.error('Error en el proceso de inicio de sesión:', error);
            return res.status(500).json({ error: 'Error interno del servidor' });
        }finally{
            client.release();
        }
    } else {
        return res.status(400).json({ error: 'Método no permitido' });
    }
}