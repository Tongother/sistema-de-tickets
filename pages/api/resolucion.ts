import { NextApiRequest,NextApiResponse } from "next";
import Connection from "@/database/Connection";
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
    try {
        const result = await new Connection().Query(`ALTER TABLE tickets(id_asesor_asignado, estatus, fecha_cierre, comentario) VALUES (${id_asesor_asignado}, ${estatus}, ${estatus}, GETDATE(), ${comentario}) WHERE id_ticket = ${id_ticket}`);
        return res.status(200).json(result);
    } catch (error) {
        console.error("Error al crear el ticket, inténtelo de nuevo más tarde o comníquese con un administrador:", error);
        return res.status(500).json({ error: "Hubo un problema al procesar la solicitud" });
    }
}