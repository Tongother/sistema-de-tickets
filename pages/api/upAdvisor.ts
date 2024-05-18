import { sql, db } from '@vercel/postgres';
import bcrypt from "bcryptjs";
import { NextApiRequest, NextApiResponse } from 'next';
 
export default async function(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  const client = await db.connect();
  switch (req.method) {
    case 'POST':
      try {
      let { id, nombre, apellido, correo, password } = req.body;
      console.log(req.body);

        try {
          const asesores = await sql`SELECT * FROM asesores WHERE id_asesor = ${id}`;
          if(nombre == "") nombre = asesores.rows[0].nombre;
          
          if(apellido == "") apellido = asesores.rows[0].apellido;

          if(correo == "") correo = asesores.rows[0].correo;
          
          if(password == "") password = asesores.rows[0].password; else password = await bcrypt.hash(password, 10);;
          const result = await postAdvisor( id, nombre, apellido, correo, password );
          return res.status(200).json({ asesor: result });
        }
        catch (error) {
          return res.status(404).json({ error: 'El asesor no existe' });
        }

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
  const asesores = await sql`
  UPDATE asesores SET
    nombre = ${nombre},
    apellido = ${apellido},
    correo = ${correo},
    password = ${password} 
  WHERE id_asesor = ${id} RETURNING *;`;
  return asesores.rows;
  } catch (error) {
    console.log(error);
  }
}
