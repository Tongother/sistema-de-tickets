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
    <main className='h-screen w-screen flex items-center justify-center bg-gradient-to-r from-[#D0C7F8] to-[#CCC4FC]'>
        <div className="flex h-[90%] w-[98%] bg-gradient-to-r from-[#F0EDFF] via-[#C1D7FD] to-[#E4D4E7] rounded-[25px]">
            <section className=" w-[300px] flex items-end justify-end">
                <Dashboard dashboardInfo={dashboardInfo} title='Admin'/>
            </section>

            <section className="w-[1210px] flex flex-col">
                <Header headerInfo={headerInfo}> {children} </Header>
            </section>
        </div>
    </main>
    );
}