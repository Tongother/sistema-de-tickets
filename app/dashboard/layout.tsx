import React from 'react';
import Dashboard from '@/components/Dashboard';
import Header from '@/components/Header';

interface DashboardLayaoutProps {
    children: React.ReactNode;
}

export default function dashboardLayaout({ children }: DashboardLayaoutProps) {
    return(
    <main className="flex h-screen w-screen">
        <section className="w-[30%] bg-gray-900 text-white shadow-2xl">
            <Dashboard />
        </section>

        <section className="w-full flex flex-col">
            <Header children={children}/>
        </section>
    </main>
    );
}