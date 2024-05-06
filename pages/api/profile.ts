import { NextApiRequest, NextApiResponse } from "next"
import { NextRequest, NextResponse } from "next/server";
import { verify } from "jsonwebtoken";
export default async function profileHandler(req: NextApiRequest, res: NextApiResponse) {
    if (req.method === "GET"){
        return await getProfile(req, res);
    }
    else {
        return res.status(400).json({error:"El método no existe"});
    };
};


const getProfile = async (req: NextApiRequest, res: NextApiResponse) => {
    console.log("Cookies:", req.cookies);
    console.log("Tipo de auth:", typeof req.cookies.auth);
    console.log("Valor de auth:", req.cookies.auth);

    if (!req.cookies || !req.cookies.auth || req.cookies.auth === "") {
        return res.status(401).json({ error: "Authentication token missing" });
    }

    const { auth } = req.cookies;
    try {
        const user = verify(auth, 'secret') as any;
        return res.status(200).json({ id: user.id, nombre: user.nombre, apellido: user.apellido, email: user.email, tipoUsuario: user.tipoUsuario });
    } catch (error) {
        return res.status(401).json({ error: "Invalid authentication token" });
    }
};