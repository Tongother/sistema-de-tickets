import Connection from "@/database/Connection";
import type { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(req:NextApiRequest, res:NextApiResponse) {
    switch (req.method) {
        case "GET":
            return getClient(req, res);

        case "POST":
            return await saveClient(req, res);
    }
}

const getClient = async (req:NextApiRequest, res:NextApiResponse) => {
    res.setHeader("Cache-Control", "s-maxage=10, stale-while-revalidate");
    
    try{
        var resultGet = await new Connection().Query(`SELECT * FROM clientes`);
        console.log(resultGet)
        return res.status(200).json(resultGet);
    }catch(e){
        return res.status(200).json({Error: `${e}`});
    }
}

const saveClient = async (req:NextApiRequest, res:NextApiResponse) => {

    const {nombre, apellido, correo, contraseña} = req.body;

    const result = await new Connection().Query(`INSERT INTO clientes (nombre, apellido, correo, contraseña) 
        VALUES('${nombre}', 
        '${apellido}', 
        '${correo}', 
        '${contraseña}')`);

    return res.status(200).json({nombre, apellido, correo, contraseña});

}