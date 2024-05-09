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
}
async function postCrearTicket(req: NextApiRequest, res: NextApiResponse){
    const {id_cliente_reportado, categoria_problematica,} = req.body;
    const client = await db.connect();
    try {
        const result = await sql`INSERT INTO ticket (id_cliente_reportado, categoria_problematica) 
        VALUES (${id_cliente_reportado}, '${categoria_problematica}');`;
        return res.status(200).json(result);
    } catch (error) {
        console.error("Error al crear el ticket, inténtelo de nuevo más tarde o comníquese con un administrador:", error);
        return res.status(500).json({ error: "Hubo un problema al procesar la solicitud" });
    }finally{
        client.release();
    }
}