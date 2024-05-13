import { sql } from '@vercel/postgres';
import { db } from '@vercel/postgres';
import { NextApiRequest, NextApiResponse } from 'next';

export default async function Reporte(req: NextApiRequest, res: NextApiResponse){
    if(req.method==='POST'){
        return await postCrearTicket(req,res)
    }
    else{
        return res.status(400).json({error: 'El método no existe'})
    }
};
async function postCrearTicket(req: NextApiRequest, res: NextApiResponse){
    console.log(req.body);
    const {id_cliente_reportado, categoria_problematica, descripcion } = req.body;
    const client = await db.connect();
    try {
        const result = await sql`INSERT INTO tickets (id_cliente_reportado, categoria_problematica, fecha_reporte, estatus, descripcion)
                        VALUES (${id_cliente_reportado}, ${categoria_problematica}, current_timestamp, 'Pendiente', ${descripcion});`;
        return res.status(200).json(result);
    } catch (error) {
        console.error("Error al enviar el ticket, inténtelo de nuevo más tarde o comníquese con un administrador:", error);
        return res.status(500).json({ error: "Hubo un problema al procesar la solicitud" });
    }finally{
        client.release();
    }
};