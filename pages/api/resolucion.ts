import { sql } from '@vercel/postgres';
import { db } from '@vercel/postgres';
import { NextApiRequest,NextApiResponse } from "next";
export default async function Resolucion(req: NextApiRequest, res: NextApiResponse){
    if(req.method==='POST'){
        return await postActualizarTicket(req,res)
    }
    else{
        return res.status(400).json({error: 'El método no existe'})
    }
}
async function postActualizarTicket(req: NextApiRequest, res: NextApiResponse){
    const {id_cliente_reportado, id_asesor_asignado, estatus, comentario, id_ticket} = req.body;
    const client = await db.connect();
    try {
        const result = await sql`ALTER TABLE tickets(id_asesor_asignado, estatus, fecha_cierre, comentario) VALUES (${id_asesor_asignado}, ${estatus}, ${estatus}, GETDATE(), ${comentario}) WHERE id_ticket = ${id_ticket}`;
        return res.status(200).json(result);
    } catch (error) {
        console.error("Error al crear el ticket, inténtelo de nuevo más tarde o comníquese con un administrador:", error);
        return res.status(500).json({ error: "Hubo un problema al procesar la solicitud" });
    }finally{
        client.release();
    }
}