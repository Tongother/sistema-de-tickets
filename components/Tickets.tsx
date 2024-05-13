"use client"
import { useEffect, useState } from "react";
import Link from "next/link";

const Tickets = () => {
    const [data, setData] = useState<{id: number; categoria_problematica: string; estatus: string; fecha_reporte: string; diferencia_segundos: any;}[]>([]);
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
        const segundos = diferencia_segundos;
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
    }
    
    return (
        
        <>
        {data && data.length > 0 && (
            <div className="grid grid-cols-4 grid-rows-3 mt-10 max-h-[2em]">
                {data.map((tickets, index) => (
                    <Link href={`/advisor/resolution/${tickets.id}`} key={index}>
                        <div className="flex flex-wrap justify-center">
                            <div className="bg-gray-200 p-4 m-4 rounded-lg w-64">
                                <h3 className="text-lg font-semibold">Categoría: {tickets.categoria_problematica}</h3>
                                <p className="text-sm">Estatus: {tickets.estatus}</p>
                                <p className="text-sm">Reportado hace: {HowLong(tickets.diferencia_segundos)}</p>
                            </div>
                        </div>
                    </Link>
                ))}
            </div>
            )}
        </>
    );
}
export default Tickets;