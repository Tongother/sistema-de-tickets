import { sql } from '@vercel/postgres';
import { db } from '@vercel/postgres';
import { NextApiRequest, NextApiResponse } from 'next';

export default async function Reporte(req: NextApiRequest, res: NextApiResponse){
    switch(req.method){
        case "POST":
            return await postCalificacion(req,res);
    }
}
async function postCalificacion(req: NextApiRequest, res: NextApiResponse){
    const {id_cliente_reportado, id_asesor_asignado, calificacion} = req.body;
    const client = await db.connect();
    try {
        const result = await sql`INSERT INTO calificaciones (id_cliente, id_asesor_asignado, calificacion) 
        VALUES (${id_cliente_reportado}, ${id_asesor_asignado}, ${calificacion});`;
        return res.status(200).json(result);
    } catch (error) {
        console.error("Error al enviar calificaciones, inténtelo de nuevo más tarde o comníquese con un administrador:", error);
        return res.status(500).json({ error: "Hubo un problema al procesar la solicitud post" });
    }finally{
        client.release();
    }
}
