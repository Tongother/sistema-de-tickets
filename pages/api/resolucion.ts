import { sql } from '@vercel/postgres';
import { db } from '@vercel/postgres';
import { NextApiRequest, NextApiResponse } from 'next';

export default async function Resolucion(req: NextApiRequest, res: NextApiResponse) {
    if (req.method === 'POST') {
        return await postActualizarTicket(req, res);
    } else {
        return res.status(400).json({ error: 'El método no existe' });
    }
}

async function postActualizarTicket(req: NextApiRequest, res: NextApiResponse) {
    const {id_asesor_asignado, estatus, id_ticket } = req.body;
    console.log(id_asesor_asignado, estatus, id_ticket)
    const client = await db.connect();

    try {
        await sql`UPDATE tickets SET
            estatus = ${estatus}
            WHERE id_ticket = ${id_ticket};
        `;
        return res.status(200).json({ message: 'Ticket actualizado correctamente' });
    } catch (error) {
        console.error("Error al actualizar el ticket:", error);
        return res.status(500).json({ error: "Hubo un problema al procesar la solicitud" });
    } finally {
        client.release(); // Liberar la conexión cuando termines
    }
}