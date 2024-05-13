'use client'
import React, { useEffect, useRef, useState } from "react";
import { fetchPromedios, fetchCalificacionesData } from "@/app/lib/data";
import { Chart, registerables } from "chart.js/auto"; // Importar Chart.js

interface Calificacion {
    id_calificacion: number;
    id_cliente: number;
    id_asesor_asignado: number;
    calificacion: number;
}

function Analytics() {
    const [dataPromedios, setDataPromedios] = useState([]); // Estado para almacenar los promedios de calificaciones
    const [dataCalificaciones, setDataCalificaciones] = useState<Calificacion[]>([]);
    const chartRef = useRef<HTMLCanvasElement>(null); // Usar useRef para acceder al elemento canvas
    const [calificacionesArray, setCalificacionesArray] = useState<number[]>([]);

    useEffect(() => {
        const fetchData = async () => {
            const promediosData = await fetchPromedios();
            const calificacionesData = await fetchCalificacionesData();
            setDataCalificaciones(calificacionesData); // Cambiar el estado de calificacionesDataFetch
            setDataPromedios(promediosData);
        };
        fetchData();
    }, []);

    useEffect(() => {
        console.log(dataPromedios);
    }, [dataPromedios]);

    const crearGrafica = (id:any) => {
        if (chartRef.current) {
            if (chartRef.current) {
                chartRef.current.innerHTML = ''; // Limpiar el canvas antes de renderizar la nueva gráfica
            }

            const context = chartRef.current.getContext("2d");
            if (context) {

                    const calificaciones = dataCalificaciones.map(item => {
                        if(item.id_asesor_asignado === id){
                            return (item.calificacion)
                        }
                    });

                const labels = dataCalificaciones.map(calificacion => {
                        if(calificacion.id_asesor_asignado === id){
                            return calificacion.id_calificacion.toString();
                        }
                    }
                );

                new Chart(context, {
                    type: "bar",
                    data: {
                        labels: labels,
                        datasets: [{
                            label: 'Calificaciones',
                            data: calificaciones,
                            backgroundColor: 'rgba(54, 162, 235, 0.2)', // Color de fondo de las barras
                            borderColor: 'rgba(54, 162, 235, 1)', // Color del borde de las barras
                            borderWidth: 1
                        }]
                    },
                    options: {
                        scales: {
                            y: {
                                beginAtZero: true
                            }
                        }
                    }
                });
            }
        }
    };

    return (
        <div className="container h-full mx-auto px-4 py-8">
            <div className="h-full flex flex-wrap -mx-4">
                <div className="w-full md:w-1/2 px-4 mb-4 md:mb-0">
                    <div className="bg-white rounded-lg shadow-md p-6">
                        <h2 className="text-xl font-semibold mb-4">Tabla de Calificaciones</h2>
                        <div className="overflow-x-auto">
                            <table className="w-full border-collapse">
                                <thead>
                                    <tr>
                                        <th className="px-4 py-2 border border-black text-m">Nombre del Asesor</th>
                                        <th className="px-4 py-2 border border-black text-m">Promedio de calificaciones</th>
                                        <th className="px-4 py-2 border border-black text-m">Mostrar gráfica</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {dataPromedios.map((analytic: any, index: number) => (
                                        <tr key={index}>
                                            <td className="px-6 py-4 border border-black text-sm text-center">{analytic.nombre_asesor}</td>
                                            <td className="px-6 py-4 border border-black text-sm text-center">{parseFloat(analytic.promedio_calificaciones).toFixed(4)}</td>
                                            <td className="px-6 py-4 border border-black text-center">
                                                <button onClick={(e) => {crearGrafica(analytic.id_asesor)}} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-1 text-sm">Ver gráfica</button>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
                <div className="w-full h-full md:w-1/2 px-4">
                    <div className="h-full bg-white rounded-lg shadow-md p-6">
                        <h2 className="text-xl font-semibold mb-4">Gráfica de Barras</h2>
                        {/* Usar un canvas para renderizar la gráfica */}
                        <canvas ref={chartRef} id="grafico-barras" width="400" height="400"></canvas>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Analytics;
