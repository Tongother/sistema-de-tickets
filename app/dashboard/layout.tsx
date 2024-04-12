import React from 'react';
import Dashboard from '@/components/Dashboard';
import Header from '@/components/Header';
import avatar from "@/public/avatar.png";
import objetivo from "@/public/objetivo.png";
import operador from "@/public/operador.png";
import lista from "@/public/lista-de-verificacion.png";
import aplicacion from "@/public/aplicacion.png";

interface DashboardLayaoutProps {
    children: React.ReactNode;
}

export default function DashboardLayaout({ children }: DashboardLayaoutProps) {

    const dashboardInfo = [
        { name: 'Clientes', src: objetivo.src, redirect: "/dashboard" },
        { name: 'Asesór técnico', src: operador.src, redirect: "/dashboard/advisor" },
        { name: 'Estatus de atención', src: lista.src, redirect: "/dashboard/attention_status" },
        { name: 'Categoría de problematica', src: aplicacion.src, redirect: "" },
        { name: 'Reportes', src: lista.src, redirect: "" }
    ];

    const headerInfo = { name: 'Gunther Nettel', rol: 'Administrador', src: avatar.src }

    return(
    <main className="flex h-screen w-screen">
        <section className="w-[30%] bg-gray-900 text-white shadow-2xl">
            <Dashboard dashboardInfo={dashboardInfo} title='Admin'/>
        </section>

        <section className="w-full flex flex-col">
            <Header headerInfo={headerInfo}> {children} </Header>
        </section>
    </main>
    );
}