import Connection from "@/database/Connection";

export default async function (req: any, res:any){
    if (req.method=== "GET"){
        return await getTicket(req, res);
    }
    else {
        return res.status(400).json({error:"El método no existe"});
    };
};
const getTicket = async (req:any, res:any) =>{
    const resultGet = await new Connection().Query(`SELECT * FROM ticket_preview`);
    return res.status(200).json(resultGet);
};