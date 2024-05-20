"use client"
import '@/styles/progressBarStyle.css';
import {useRef, useState, useEffect} from 'react';
import Image from 'next/image';
import recibido from '@/public/recibido.svg';
import pruebas from '@/public/pruebas.svg';
import searchT from '@/public/search-ticket.svg';
import check from '@/public/check.svg';
import checkCircle from '@/public/check-circle.svg';
import hammer from '@/public/jackhammer.svg';
import axios from 'axios';

interface ProgressBarProps{
    id_ticket: number;
    id_cliente_reportado: number;
    categoria_problematica: string;
    fecha_reporte: string;
    estatus: string;
    descripcion: string;
}

export default function ProgressBar({id_ticket, id_cliente_reportado, categoria_problematica, fecha_reporte, estatus, descripcion}: ProgressBarProps){


    const one = useRef<HTMLDivElement>(null);
    const two = useRef<HTMLDivElement>(null);
    const three = useRef<HTMLDivElement>(null);
    const four = useRef<HTMLDivElement>(null);
    const five = useRef<HTMLDivElement>(null);
    const [expanded, setExpanded] = useState(false);
    const [estatusSeleccionado, setEstatusSeleccionado] = useState({estatus: 'Pendiente'});
    const [dataResolucion, setDataResolucion] = useState({id_asesor_asignado: 0, id_ticket: 0, estatus: ''});
    const [userData, setUserData] = useState({ id: 0, nombre: '', apellido: '', email: '', tipoUsuario: '', });
    const [activarMetodo, setActivarMetodo] = useState(false);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/profile`);
                if (!res.ok) {
                    throw new Error("No se pudo obtener el perfil del usuario");
                }
                const userdata = await res.json();
                setUserData(userdata);
            } catch (error) {
                console.log("Error fetching user profile:", error);
            }
        };

        fetchData();
    }, []); // Ejecutar solo una vez al montar el componente
    
    const handleToggleExpansion = () => {
        setExpanded(!expanded);
    };

    const handleClickOne = () => {
        if(one.current != null && two.current != null && three.current != null && four.current != null && five.current != null){
            one.current.classList.add("active");
            two.current.classList.remove("active");
            three.current.classList.remove("active");
            four.current.classList.remove("active");
            five.current.classList.remove("active");
        }
        setEstatusSeleccionado({estatus: 'Recibido'});
    };

    const handleClickTwo = () => {
        if(one.current != null && two.current != null && three.current != null && four.current != null && five.current != null){
            one.current.classList.add("active");
            two.current.classList.add("active");
            three.current.classList.remove("active");
            four.current.classList.remove("active");
            five.current.classList.remove("active");
        }
        setEstatusSeleccionado({estatus: 'Analizado'});
    };

    const handleClickThree = () => {
        if(one.current != null && two.current != null && three.current != null && four.current != null && five.current != null){
            one.current.classList.add("active");
            two.current.classList.add("active");
            three.current.classList.add("active");
            four.current.classList.remove("active");
            five.current.classList.remove("active");
        }
        setEstatusSeleccionado({estatus: 'En proceso'});
    };

    const handleClickFour = () => {
        if(one.current != null && two.current != null && three.current != null && four.current != null && five.current != null){
            one.current.classList.add("active");
            two.current.classList.add("active");
            three.current.classList.add("active");
            four.current.classList.add("active");
            five.current.classList.remove("active");
        }
        setEstatusSeleccionado({estatus: 'Pruebas'});
    };

    const handleClickFive = () => {
        if(one.current != null && two.current != null && three.current != null && four.current != null && five.current != null){
            one.current.classList.add("active");
            two.current.classList.add("active");
            three.current.classList.add("active");
            four.current.classList.add("active");
            five.current.classList.add("active");
        }
        setEstatusSeleccionado({estatus: 'Solucionado'});
    };

    useEffect(()=>{
        if(activarMetodo === true && estatusSeleccionado.estatus){
            const estatusHandleSubmit = async () => {
                setDataResolucion({...dataResolucion, id_asesor_asignado: userData.id, id_ticket: id_ticket, estatus: estatusSeleccionado.estatus });
            };
            estatusHandleSubmit();
        }
    }, [estatusSeleccionado && activarMetodo ] )

    useEffect(()=>{
        
        console.log(dataResolucion)
        if(dataResolucion.estatus != ""){
            console.log(dataResolucion)
            const ActivarElemento = async() =>{
                const response = await axios.post('/api/resolucion', dataResolucion);
                if(response.status == 200){
                    const {} = dataResolucion;
                    window.location.href = `/advisor/?parametro1=${dataResolucion}`
                }
            }
            ActivarElemento();
        }
    }, [dataResolucion])

    return(
        <div className="main">
            <div className="head">
                <p className="head_1">Resolución del <span>Ticket</span></p>
                <p className="head_2">Proceso de resolución</p>
            </div>

            <ul>
                <li>
                    <Image alt="" src={recibido.src} width={50} height={50}></Image>
                    <div className="progress1" ref={one} id='1' onClick={handleClickOne}>
                        <p>1</p>
                    </div>
                    <p className="text">Recibido</p>
                </li>
                <li>
                    <Image alt="" src={searchT.src} width={50} height={50}></Image>
                    <div className="progress" ref={two} id="2" onClick={handleClickTwo}>
                        <p>2</p>
                        <i className="uil uil-check"></i>
                    </div>
                    <p className="text">Analizado</p>
                </li>
                <li>
                    <Image alt="" src={hammer.src} width={50} height={50}></Image>
                    <div className="progress" ref={three} id='3' onClick={handleClickThree}>
                        <p>3</p>
                        <i className="uil uil-check"></i>
                    </div>
                    <p className="text">En proceso de resolución</p>
                </li>
                <li>
                    <Image alt="" src={pruebas.src} width={50} height={50}></Image>
                    <div className="progress" ref={four} id="4" onClick={handleClickFour}>
                        <p>4</p>
                        <i className="uil uil-check"></i>
                    </div>
                    <p className="text">Pruebas</p>
                </li>
                <li>
                    <Image alt="" src={checkCircle.src} width={50} height={50}></Image>
                    <div className="progress" ref={five} id='5' onClick={handleClickFive}>
                        <p>5</p>
                        <i className="uil uil-check"></i>
                    </div>
                    <p className="text">Solucionado</p>
                </li>
            </ul>
            <button className='w-[200px] h-[50px] border-none shadow-sm bg-slate-200 mt-7 rounded-xl hover:shadow-xl text-[#7478B6] font-pop font-semibold' onClick={()=> setActivarMetodo(true)}>Finalizar</button>
        
            <div className="w-full max-w-md mx-auto shadow-md rounded-lg overflow-hidden mb-4 mt-[40px] bg-slate-100">
            <div className="p-4">
                <div className="flex items-center mb-4">
                    
                    <h2 className="text-lg font-semibold ml-2">Ticket #{id_ticket}</h2>
                </div>
                <p className="text-sm text-gray-600 mb-2">Categoría: {categoria_problematica}</p>
                <p className="text-sm text-gray-600 mb-2">Fecha reporte: {fecha_reporte.substring(0, fecha_reporte.indexOf('T'))}</p>
                <button
                    className="text-sm text-black underline focus:outline-none"
                    onClick={handleToggleExpansion}
                >
                    Ver descripción
                </button>
                {expanded && (
                    <div className="mt-4">
                        <p className="text-sm text-gray-700">{descripcion}</p>
                    </div>
                )}
            </div>
        </div>
        
        </div>
        
        
    );
}