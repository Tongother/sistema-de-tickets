import { NextApiRequest,NextApiResponse } from "next";
import Connection from "@/database/Connection";
export default async function Reporte(req: NextApiRequest, res: NextApiResponse){
    if(req.method==='POST'){
        return await postCrearTicket(req,res,'')
    }
    else{
        return res.status(400).json({error: 'El método no existe'})
    }
}
async function postCrearTicket(req: NextApiRequest, res: NextApiResponse, categoria: string){
    const {id_cliente_reportado, categoria_problematica, fecha_reporte} = req.body;
    try {
        const result = await new Connection().Query(`INSERT INTO TICKET(id_cliente_reportado,categoria_problematica,fecha_reporte,fecha_cierre) VALUES (${id_cliente_reportado}, ${categoria_problematica}, ${fecha_reporte})`);
        return res.status(200).json(result);
    } catch (error) {
        console.error("Error al crear el ticket, inténtelo de nuevo más tarde o comníquese con un administrador:", error);
        return res.status(500).json({ error: "Hubo un problema al procesar la solicitud" });
    }
}