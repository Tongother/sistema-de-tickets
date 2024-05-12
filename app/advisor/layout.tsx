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
    { name: 'Tickets', src: ticket.src, redirect: "/advisor" },
    { name: 'Historial de tickets', src: historial.src, redirect: "/advisor/history" },
  ];
  const dashboardUser = { name: (userData.nombre + " " + userData.apellido) , email: userData.email, rol: userData.tipoUsuario, src: tecnico.src, };

  return(
    <main className='h-screen w-screen flex '>
        <section className="w-[300px] flex items-end justify-end">
            <Dashboard dashboardUser={dashboardUser} dashboardInfo={dashboardInfo} title='Cliente'/>
        </section>
        <section className="w-[1235px] flex flex-col">
            <Header> {children} </Header>
        </section>
    </main>
    );
}
