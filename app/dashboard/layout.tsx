'use client'
import React from 'react';
import Dashboard from '@/components/Dashboard';
import Header from '@/components/Header';
import avatar from "@/public/avatar.png";
import objetivo from "@/public/objetivo.png";
import operador from "@/public/operador.png";
import lista from "@/public/lista-de-verificacion.png";
import aplicacion from "@/public/aplicacion.png";
import { useState, useEffect } from 'react';
import axios from 'axios';

interface DashboardLayaoutProps {
    children: React.ReactNode;
}

export default function DashboardLayaout({ children }: DashboardLayaoutProps) {
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
        { name: 'Clientes', src: objetivo.src, redirect: "/dashboard" },
        { name: 'Asesór técnico', src: operador.src, redirect: "/dashboard/advisor" },
        { name: 'Estatus de atención', src: lista.src, redirect: "/dashboard/attention_status" },
        { name: 'Reportes', src: lista.src, redirect: "/dashboard/analytics" }
    ];
    const dashboardUser = { name: (userData.nombre + " " + userData.apellido) , email: userData.email, rol: userData.tipoUsuario, src: avatar.src, };

    return(
    <main className='h-screen w-screen flex'>
        <section className="w-[300px] flex items-end justify-end">
            <Dashboard  dashboardUser= {dashboardUser} dashboardInfo={dashboardInfo} title='Cliente'/>
        </section>
        <section className="w-full flex flex-col">
            <Header> {children} </Header>
        </section>
    </main>
    );
}