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
  const [userData, setUserData] = useState({
    id: '',
    nombre: '',
    apellido: '',
    email: '',
    tipoUsuario: ''
  });
  
  useEffect(() => {
    const getProfile = async () => {
      try {
        const response = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/profile`, {
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
    <main className='h-screen w-screen flex items-center justify-center bg-gradient-to-r from-[#D0C7F8] to-[#CCC4FC]'>
      <div className="flex h-[90%] w-[98%] bg-gradient-to-r from-[#F0EDFF] via-[#C1D7FD] to-[#E4D4E7] rounded-[25px]">
        <section className=" w-[300px] flex items-end justify-end">
          <Dashboard dashboardInfo={dashboardInfo} title='Asesor técnico' />
        </section>
        <section className="w-[1210px] flex flex-col">
          <Header headerInfo={headerInfo}> {children} </Header>
        </section>
      </div>
    </main>
  );
}