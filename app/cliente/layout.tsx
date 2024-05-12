'use client'
import Dashboard from '@/components/Dashboard';
import Header from '@/components/Header';
import avatar from "@/public/avatar.png";
import lista from "@/public/lista-de-verificacion.png";
import alert from "./../../public/Alert.png";
import React, { useState, useEffect } from 'react';
import axios from 'axios';

interface DashboardLayoutProps {
    children: React.ReactNode;
}

export default function ClientLayout({ children }: DashboardLayoutProps) {
   //useState es un método de react que sirve par
    const [userData,setUserData] = useState({id: 0, nombre: '',apellido: '', email: '',tipoUsuario: '',});
    //useEffect es un método de react que sirve para ejecutar al inicializar la página este pdo de abajo, recibe dos parámetros(función a ejectuar, veces que se va a ejecutar)
    useEffect(()=>{
        const getProfile = async()=> {
            try{
                //res recibe un array de objetos con toda la información de la petición de axios, incluyendo la propiedad data que contiene la información de la cookie
                const res = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/profile`,{withCredentials: true});
                setUserData(res.data);
            }
            catch(error){
                console.log('Petición no completada: ',error);
            }
        };
        getProfile();
    },[]);
    const dashboardInfo = [
        { name: 'Reportar problemas', src: alert.src, redirect:'/cliente'},
        { name: 'Estatus de atención', src: lista.src, redirect: '/cliente/atencion'},
    ];
    const dashboardUser = { name: (userData.nombre + " " + userData.apellido) , email: userData.email, rol: userData.tipoUsuario, src: avatar.src, };

    type UserData = {
        id:number;
        nombre:string;
        apellido:string;
        tipoUsuario: string;
    }
    return(
    <main className='h-screen w-screen flex'>
        <section className="w-[300px] flex items-end justify-end">
            <Dashboard dashboardUser= {dashboardUser} dashboardInfo={dashboardInfo} title='Cliente'/>
        </section>
        <section className="w-[1235px] flex flex-col">
            <Header> {children} </Header>
        </section>
    </main>
    );
}