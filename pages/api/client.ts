import { sql } from '@vercel/postgres';
import { db } from '@vercel/postgres';
import { NextApiRequest, NextApiResponse } from 'next';
 
export default async function GET(
  req: NextApiRequest,
  res: NextApiResponse,
) {
    const client = await db.connect();
  try {

    const clientes = await sql`SELECT * FROM clientes;`;
    return res.status(200).json({ clientes: clientes.rows });
  } catch (error) {
    return res.status(500).json({ error });
  }finally{
    client.release();
  }
}

