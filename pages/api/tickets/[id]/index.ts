import { NextApiRequest, NextApiResponse } from "next";
import { sql } from '@vercel/postgres';
import { db } from '@vercel/postgres';

export default async function (req: NextApiRequest, res:NextApiResponse){
    if (req.method === "GET"){
        return await getTicket(req, res);
    }
    else {
        return res.status(400).json({error:"El método no existe"});
    };

};
const getTicket = async (req: NextApiRequest, res: NextApiResponse) =>{
    const client = await db.connect();
    try{
        const {id}  = req.query as any;
        const resultGet = await sql`SELECT * FROM tickets WHERE id_ticket = ${id}`;
        return res.status(200).json(resultGet);
    }catch(error){
        console.log(error)
        return res.status(500).json({error: error});
    }finally{
        client.release();
    }
};