import { sql } from '@vercel/postgres';
import { db } from '@vercel/postgres';
import { NextApiRequest, NextApiResponse } from 'next';
 
export default async function(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  const client = await db.connect();
  switch (req.method) {
    case 'POST':
      try {
      const { id, nombre, apellido, correo, password } = req.body;
      console.log(req.body);

      const result = await postAdvisor( id, nombre, apellido, correo, password );
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

export async function postAdvisor( id:number, nombre: string , apellido: string, correo: string, password: string) {
  try {
  const asesores = await sql`UPDATE asesores SET nombre = ${nombre}, apellido = ${apellido}, correo = ${correo}, password = ${password} WHERE id_asesor = ${id} RETURNING *;`;
  return asesores.rows;
  } catch (error) {
    console.log(error);
  }
}