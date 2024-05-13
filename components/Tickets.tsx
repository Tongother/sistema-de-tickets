"use client"
import { useEffect, useState } from "react";
import Link from "next/link";
import ticket from "@/pages/api/ticket";

const Tickets = () => {
    const [data, setData] = useState<{id_ticket: number; categoria_problematica: string; estatus: string; fecha_reporte: string; diferencia_segundos: number;}[]>([]);
    useEffect (() => {
        const getData = async () => {
            try{
                const res = await fetch (`${process.env.NEXT_PUBLIC_API_URL}/ticket`);
                if (!res.ok){
                    console.log("No sirvió el fetch")
                }
                else{
                    const data = await res.json();
                    setData(data);
                }
            } 
            catch(error){
                console.log("Error fetching data:", error);
            }
        };
        getData();
    }, []);
    
    const HowLong = (diferencia_segundos:any) => {
        const segundos = parseInt(diferencia_segundos, 10);
        const minutos = Math.round(segundos / 60);
        const horas = Math.round(minutos / 60);
        const dias = Math.round(horas / 24);
    
        if (segundos < 60){
            return segundos + " segundos";
        }
        if (segundos > 60 && minutos < 60){
            return minutos + " minutos";
        }
        if (minutos > 60 && horas < 24){
            return horas + " horas";
        }
        if (horas > 24){
            return dias + " días";
        }
    };

    return (
        <div className="h-[558px] w-full px-5 overflow-auto">
            {data && data.length > 0 && (
                <div className="h-full w-full grid grid-cols-4 grid-rows-3">
                    {data.map((tickets, id_ticket) => (
                        <div key={id_ticket} className=" h-full w-full flex items-center justify-center ">
                            <div>
                                <Link href={`/advisor/resolution/${tickets.id_ticket}`}>
                                    <div className="bg-gray-200 p-4 rounded-lg w-64">
                                        <h3 className="text-lg font-semibold">Categoría: {tickets.categoria_problematica}</h3>
                                        <p className="text-sm">Estatus: {tickets.estatus}</p>
                                        <p className="text-sm">Reportado hace: {HowLong(tickets.diferencia_segundos)}</p>
                                    </div>
                                </Link>
                            </div>
                        </div>
                    ))}
                </div>
                )}
        </div>
    );
}
export default Tickets;