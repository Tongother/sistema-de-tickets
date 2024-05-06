'use client'
import React, { useEffect, useState } from 'react';
import Dashboard from '@/components/Dashboard';
import Header from '@/components/Header';
import ticket from '@/public/ticket.png';
import historial from '@/public/historial.png';
import tecnico from '@/public/tecnico.png';
import axios from 'axios';

interface AdvisorLayoutProps {
  children: React.ReactNode;
}

export default function AdvisorLayout({ children }: AdvisorLayoutProps) {
  const [userData, setUserData] = useState<any>(null);
  useEffect(() => {
    const getProfile = async () => {
      try {
        const response = await axios.get('http://localhost:3000/api/profile', {
          withCredentials: true, 
        });
        setUserData(response.data);
      } catch (error) {
        console.error('Error al obtener el perfil:', error);
      }
    };

    getProfile();
  }, []); 

  const dashboardInfo = [
    { name: 'Clientes', src: ticket.src, redirect: "/advisor" },
    { name: 'Asesor técnico', src: historial.src, redirect: "/advisor/history" },
  ];

  const headerInfo = {
    name: userData ? userData.nombre : '', 
    rol: userData ? userData.tipoUsuario : '',
    src: tecnico.src
  };

  return (
    <main className="flex h-screen w-screen">
      <section className="w-[30%] bg-gray-900 text-white shadow-2xl">
        <Dashboard dashboardInfo={dashboardInfo} title='Asesor técnico' />
      </section>

      <section className="w-full ">
        <Header headerInfo={headerInfo}> {children} </Header>
      </section>
    </main>
  );
}