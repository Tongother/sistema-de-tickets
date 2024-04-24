import Connection from "@/database/Connection";
import type { NextApiRequest, NextApiResponse } from "next";

export default async function (req: NextApiRequest, res:NextApiResponse){
    if (req.method === "GET"){
        return await getHistoryTicket(req, res);
    }
    else {
        return res.status(400).json({error:"El método no existe"});
    };
};
const getHistoryTicket = async (req: NextApiRequest, res:NextApiResponse) =>{
    const resultGet = await new Connection().Query(`SELECT * FROM historial_tickets`);
    return res.status(200).json(resultGet);
};