import React from 'react';
import Dashboard from '@/components/Dashboard';
import Header from '@/components/Header';
import ticket from '@/public/ticket.png';
import historial from '@/public/historial.png';
import tecnico from '@/public/tecnico.png';

interface AdvisorLayoutProps {
  children: React.ReactNode;
}

export default function AdvisorLayout({ children }: AdvisorLayoutProps) {

const dashboardInfo = [
    { name: 'Clientes', src: ticket.src, redirect: "/advisor" },
    { name: 'Asesór técnico', src: historial.src, redirect: "/advisor/history"  },
];

const headerInfo = { name: 'Julian Antonio', rol: 'Asesor técnico', src: tecnico.src }


  return (
    <main className="flex h-screen w-screen">
        <section className="w-[30%] bg-gray-900 text-white shadow-2xl">
            <Dashboard dashboardInfo={dashboardInfo} title='Asesor técnico'/>
        </section>

        <section className="w-full flex flex-col">
            <Header headerInfo={headerInfo}> {children} </Header>
        </section>
    </main>
  );
}