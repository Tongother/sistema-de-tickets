"use client"
import { use, useEffect, useState } from "react";
import Link from "next/link";

const TicketCliente = () => {
    const [data, setData] = useState<{id_cliente_reportado: number; categoria_problematica: string; estatus: string; fecha_reporte: string; diferencia_segundos: any;}[]>([]);
    const [userData,setUserData] = useState({id: 0, nombre: '',apellido: '', email: '',tipoUsuario: '',});
    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/profile`);
                if (!res.ok) {
                    throw new Error("No se pudo obtener el perfil del usuario");
                }
                const userdata = await res.json();
                setUserData(userdata);
            } catch(error) {
                console.log("Error fetching user profile:", error);
            }
        };

        fetchData();
    }, []); // Ejecutar solo una vez al montar el componente

    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/ticketscliente/${userData.id}`);
                if (!res.ok) {
                    throw new Error("No se pudieron obtener los tickets del usuario");
                }
                const datos = await res.json();
                setData(datos);
            } catch(error) {
                console.log("Error fetching user tickets:", error);
            }
        };

        if (userData.id !== 0) {
            fetchData();
        }
    }, [userData]); // Ejecutar cada vez que userData.id sea diferente de 0


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
        {data && data.length >= 0 && (
            <div className="grid grid-cols-4 grid-rows-3 mt-10 max-h-[2em]">
                {data.map((tickets, index) => (
                    <div key={index}>
                        <Link href={`/advisor/resolution/${tickets.id_cliente_reportado}`}>
                            <div className="flex flex-wrap justify-center">
                                <div className="bg-gray-200 p-4 m-4 rounded-lg w-64">
                                    <h3 className="text-lg font-semibold">Categoría: {tickets.categoria_problematica}</h3>
                                    <p className="text-sm">Estatus: {tickets.estatus}</p>
                                    <p className="text-sm">Reportado hace: {HowLong(tickets.diferencia_segundos)}</p>
                                </div>
                            </div>
                        </Link>
                    </div>
                ))}
            </div>
            )}
        </>
    );
};

export default TicketCliente;