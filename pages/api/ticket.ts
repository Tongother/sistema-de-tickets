import { sql } from '@vercel/postgres';
import { db } from '@vercel/postgres';
import { NextApiRequest, NextApiResponse } from 'next';

export default async function (req: NextApiRequest, res:NextApiResponse){
    if (req.method === "GET"){
        return await getTicket(req, res);
    }
    else {
        return res.status(400).json({error:"El método no existe"});
    };
};
const getTicket = async (req:NextApiRequest, res:NextApiResponse) =>{
    const client = await db.connect();
    try{
        const result = await sql`SELECT * FROM ticket_preview;`;
        return res.status(200).json(result.rows);
    }catch(error){
        console.log(error)
        return res.status(500).json({error: error});
    }finally{
        client.release();
    }
};