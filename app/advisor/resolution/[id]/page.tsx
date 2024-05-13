import React from 'react'
import { useState, useEffect } from 'react';
import ProgressBar from '@/components/ProgressBar';
import Resolution from "@/components/Resolution";

// Función para cargar un ticket específico
async function loadTicket(id: string) {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/tickets/${id}`);
    const data = await res.json();
    console.log(data);
    return data;
};

// Componente para la página de resolución de tickets
async function TicketResolution(params: any) {
    const obj = params;
    const tickets = await loadTicket(obj.params.id);
    const ticket = tickets[0];
    return (
        <div className='h-full w-full'>
            <ProgressBar id_ticket={ticket.id_ticket} id_cliente_reportado={ticket.id_cliente_reportado} categoria_problematica={ticket.categoria_problematica} fecha_reporte={ticket.fecha_reporte} estatus={ticket.estatus} descripcion={ticket.descripcion} ></ProgressBar>
        </div>
)};

export default TicketResolution;
