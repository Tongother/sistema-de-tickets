import { NextApiRequest, NextApiResponse } from "next";
import Connection from "@/database/Connection";

export default async function (req: NextApiRequest, res:NextApiResponse){
    if (req.method === "GET"){
        return await getTicket(req, res);
    }
    else {
        return res.status(400).json({error:"El método no existe"});
    };

};
const getTicket = async (req: NextApiRequest, res: NextApiResponse) =>{
    const {id}  = req.query;
    const resultGet = await new Connection().Query(`SELECT * FROM tickets WHERE id_ticket = ${id}`);
    return res.status(200).json(resultGet);
};