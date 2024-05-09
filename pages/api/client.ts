import { sql } from '@vercel/postgres';
import { db } from '@vercel/postgres';
import { NextApiRequest, NextApiResponse } from 'next';
 
export default async function GET(
  req: NextApiRequest,
  res: NextApiResponse,
) {
    const client = await db.connect();
  try {
    await client.sql`CREATE TABLE IF NOT EXISTS Pets ( Name varchar(255), Owner varchar(255));`;
    // const names = ["Fiona", "Lucy"]
    // await client.sql`INSERT INTO Pets (Name, Owner) VALUES (${names[0]}, ${names[1]});`;
  } catch (error) {
    return res.status(500).json({ error });
  }
 
  const pets = await sql`SELECT * FROM Pets;`;
  return res.status(200).json({ pets: pets.rows });
}

