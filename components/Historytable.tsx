'use client'
import { useEffect, useState } from "react";
import { fetchHistoryTable } from "@/app/lib/data";

const HistoryTable = async () => {
    const [dataHistory, setDataHistory] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const historyData = await fetchHistoryTable();
            setDataHistory(historyData.clientes);
        };

        fetchData();
    }, []);

    return (
        <>
            {dataHistory && (
                <table className="min-w-full divide-y divide-gray-200">
                    <thead className="bg-[#0E182C]">
                        <tr>
                            <th className="px-6 py-3 text-left text-xs font-medium text-white uppercase tracking-wider">ID_Ticket</th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-white uppercase tracking-wider">Cliente</th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-white uppercase tracking-wider">Problemática</th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-white uppercase tracking-wider">Estatus</th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-white uppercase tracking-wider">Fecha de apertura</th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-white uppercase tracking-wider">Fecha de cierre</th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-white uppercase tracking-wider">Solucionado por:</th>
                        </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-black">
                        {dataHistory.map((ticket:any) => (
                            <tr key={ticket.id_ticket}>
                                <td className="px-6 py-4 whitespace-nowrap">{ticket.id_ticket}</td>
                                <td className="px-6 py-4 whitespace-nowrap">{ticket.nombre_cliente}</td>
                                <td className="px-6 py-4 whitespace-nowrap">{ticket.categoria_problematica}</td>
                                <td className="px-6 py-4 whitespace-nowrap">{ticket.estatus}</td>
                                <td className="px-6 py-4 whitespace-nowrap">{ticket.fecha_reporte}</td>
                                <td className="px-6 py-4 whitespace-nowrap">{ticket.fecha_solucion}</td>
                                <td className="px-6 py-4 whitespace-nowrap">{ticket.nombre_asesor}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            )}
        </>
    );
}

export default HistoryTable;