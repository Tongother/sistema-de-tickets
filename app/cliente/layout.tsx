import React from 'react';
import Dashboard from '@/components/Dashboard';
import Header from '@/components/Header';
import avatar from "@/public/avatar.png";
import lista from "@/public/lista-de-verificacion.png";
import alert from "./../../public/Alert.png";

interface DashboardLayaoutProps {
    children: React.ReactNode;
}

export default function ClientLayaout({ children }: DashboardLayaoutProps) {

    const dashboardInfo = [
        { name: 'Reportar problemas', src: alert.src, redirect: lista.src },
        { name: 'Estatus de atención', src: lista.src, redirect: lista.src },
    ];

    const headerInfo = { name: 'Cristian Alfonsín', rol: 'Cliente', src: avatar.src }

    return(
    <main className="flex h-screen w-screen">
        <section className="w-[30%] bg-gray-900 text-white shadow-2xl">
            <Dashboard dashboardInfo={dashboardInfo} title='Cliente'/>
        </section>

        <section className="w-full flex flex-col">
            <Header headerInfo={headerInfo}> {children} </Header>
        </section>
    </main>
    );
}