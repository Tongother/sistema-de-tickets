import { sql } from '@vercel/postgres';
import { db } from '@vercel/postgres';
import { NextApiRequest, NextApiResponse } from 'next';

export default async function Reporte(req: NextApiRequest, res: NextApiResponse){
    if(req.method==='POST'){
        return await postCalificacionBoolean(req,res)
    }
    else{
        return res.status(400).json({error: 'El método no existe'})
    }
}
async function postCalificacionBoolean(req: NextApiRequest, res: NextApiResponse){
    console.log(req.body);
    const {id_ticket} = req.body;
    console.log(id_ticket + 'si pasa');
    const client = await db.connect();
    try {
        const result = await sql`UPDATE tickets SET calificado = true WHERE id_ticket = ${id_ticket};`;
        return res.status(200).json(result);
    } catch (error) {
        console.error("Error al enviar la encuesta, inténtelo de nuevo más tarde o comníquese con un administrador:", error);
        return res.status(500).json({ error: "Hubo un problema al procesar la solicitud" });
    }finally{
        client.release();
    }
}