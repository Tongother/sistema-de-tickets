import Connection from "@/database/Connection";

export default async function handler(req:any, res:any) {
    switch (req.method) {
        case "GET":
            return getClient(req, res);

        case "POST":
            return await saveClient(req, res);
    }
}

const getClient = async (req:any, res:any) => {
    const resultGet = await new Connection().Query(`SELECT * FROM clientes`);
    console.log(resultGet)
    return res.status(200).json(resultGet);
}

const saveClient = async (req:any, res:any) => {

    const {nombre, apellido, correo, contraseña} = req.body;

    const result = await new Connection().Query(`INSERT INTO clientes (nombre, apellido, correo, contraseña) 
        VALUES('${nombre}', 
        '${apellido}', 
        '${correo}', 
        '${contraseña}')`);

    return res.status(200).json({nombre, apellido, correo, contraseña});

}