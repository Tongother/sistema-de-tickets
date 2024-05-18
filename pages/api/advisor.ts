import { sql } from '@vercel/postgres';
import { db } from '@vercel/postgres';
import { NextApiRequest, NextApiResponse } from 'next';
 
export default async function(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  const client = await db.connect();
  switch (req.method) {

    case 'GET':
      try {
        const result = await getAdvisor(); 
        return res.status(200).json({ asesor: result });

      } catch (error) {
        return res.status(500).json({ error });

      }finally{
        client.release();
      }

    case 'POST':
      try {
      const { id, nombre } = req.body;

      const result = await postAdvisor(id, nombre );
      return res.status(200).json({ asesor: result });

      } catch (error) {
        return res.status(500).json({ error });

      }finally{
        client.release();
      }

    default:
      return res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}

export async function getAdvisor() {
    const asesores = await sql`SELECT * FROM asesores ORDER BY id_asesor ASC;`;
    return asesores.rows;
}

export async function postAdvisor(id: number, nombre: string) {
  const asesores = await sql`SELECT * FROM eliminar_asesor(${id}, ${nombre});`;
  return asesores.rows;
}
