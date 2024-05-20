"use client"
import { useRef, useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import EstrellaGris from '@/public/estrella_gris.png'
import EstrellaAmarilla from '@/public/estrella_estatica.png'
import EstrellaAmarillaAnimada from '@/public/estrella_animada.gif'
import axios from "axios";

const TicketCliente = () => {
    const [data, setData] = useState<{ id_ticket: number; id_cliente_reportado: number; id_asesor_asignado: number; nombre_asesor: any; categoria_problematica: string; estatus: string; fecha_reporte: string; diferencia_segundos: number; calificado: boolean; }[]>([]);
    const [userData, setUserData] = useState({ id: 0, nombre: '', apellido: '', email: '', tipoUsuario: '', });
    const [calificarActivo, setCalificarActivo] = useState(false);
    const rate1Ref = useRef<HTMLInputElement>(null);
    const rate2Ref = useRef<HTMLInputElement>(null);
    const rate3Ref = useRef<HTMLInputElement>(null);
    const rate4Ref = useRef<HTMLInputElement>(null);
    const rate5Ref = useRef<HTMLInputElement>(null);
    const [cambiarEstrella, setCambiarEstrella] = useState({ star1: EstrellaGris.src, star2: EstrellaGris.src, star3: EstrellaGris.src, star4: EstrellaGris.src, star5: EstrellaGris.src });
    const [animacionEstrella, setAnimacionEstrella] = useState(false);
    const [calificacion, setCalificacion] = useState(0);
    const [encuestasRealizadas, setEncuestasRealizadas] = useState<{ [key: number]: boolean }>({});
    const [idAsesorAsignado, setIdAsesorAsignado] = useState({ id_asesor_asignado: 0 });
    const [idTicket, setIdTicket] = useState({ id_ticket: 0 });

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

    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/ticketscliente/${userData.id}`);
                if (!res.ok) {
                    throw new Error("No se pudieron obtener los tickets del usuario");
                }
                const datos = await res.json();
                setData(datos);
            } catch (error) {
                console.log("Error fetching user tickets:", error);
            }
        };

        if (userData.id !== 0) {
            fetchData();
        }
    }, [userData]); // Ejecutar cada vez que userData.id sea diferente de 0


    const establecerDatos = (id_ticket: any, id_asesor_Asignado: any) => {
        setIdAsesorAsignado(id_asesor_Asignado);
        setIdTicket({ id_ticket: id_ticket });
    };
    const handleStarClick = (ref: React.RefObject<HTMLInputElement>) => {
        setAnimacionEstrella(true);
        if (ref.current) {
            ref.current.click();
        }
        const starNumber = parseInt(ref.current!.id.split('-')[1]);
        let newStars: { [key: string]: string } = {};
        for (let i = 1; i <= starNumber; i++) {
            newStars[`star${i}`] = EstrellaAmarillaAnimada.src;
            for (let j = i; j <= 5; j++) {
                newStars[`star${j + 1}`] = EstrellaGris.src;
            }
        }
        setCambiarEstrella(newStars as any);

        setTimeout(() => {

            let staticStars: { [key: string]: string } = {};
            for (let i = starNumber + 1; i <= 5; i++) {
                staticStars[`star${i}`] = EstrellaGris.src;
            }
            setCambiarEstrella(prevState => ({ ...prevState, ...staticStars }));
        }, 1000);
    };


    const starMouseOver = (starName: string) => {

        let newStars: { [key: string]: string } = {};

        // Actualiza el estado de todas las estrellas anteriores a la que se está pasando el mouse
        Object.keys(cambiarEstrella).forEach((key, index) => {
            if (parseInt(key.replace('star', '')) <= parseInt(starName.replace('star', ''))) {
                newStars[key] = EstrellaAmarilla.src;
            } else {
                newStars[key] = EstrellaGris.src;
            }
        });

        setCambiarEstrella(newStars as any);


    };

    const starMouseOut = () => {
        if (animacionEstrella === false) {
            // Establece todas las estrellas en gris
            const newStars = Object.fromEntries(
                Object.entries(cambiarEstrella).map(([key]) => [key, EstrellaGris.src])
            );
            setCambiarEstrella(newStars as any);
        }
    };

    const calificarHandleChange = () => {
        setCalificarActivo(!calificarActivo);
    };

    const establecerCalificacion = (calificacion: any) => {
        setCalificacion(calificacion);
        console.log(calificacion);
    };

    const enviarEncuesta = async () => {
        try {
            const encuestaData = { id_cliente_reportado: userData.id, id_asesor_asignado: idAsesorAsignado, calificacion: calificacion };
            const response = await axios.post('/api/calificaciones', encuestaData);
        }
        catch {
            console.log({ error: 'error al enviar la encuesta' });
        }
        finally {
            setCalificarActivo(!calificarActivo);
        }
    };

    const handleEncuestaRealizada = (idTicket: number) => {
        setEncuestasRealizadas(prevState => ({
            ...prevState,
            [idTicket]: true // Marcar la encuesta como realizada para el ticket con el ID correspondiente
        }));
    };

    const postCalificacion = async () => {
        try {
            const query = await axios.post('/api/encuesta', idTicket);
        } catch (error: any) {
            console.log({ error: 'No sirve ptm' });
        }

        window.location.href = '/cliente/atencion';
    };


    const HowLong = (diferencia_segundos: any) => {
        const segundos = diferencia_segundos;
        const minutos = Math.round(segundos / 60);
        const horas = Math.round(minutos / 60);
        const dias = Math.round(horas / 24);
        if (segundos < 60) {
            return segundos + " segundos";
        }
        if (segundos > 60 && minutos < 60) {
            return minutos + " minutos";
        }
        if (minutos > 60 && horas < 24) {
            return horas + " horas";
        }
        if (horas > 24) {
            return dias + " días";
        }
    };

    return (
        <>
            {calificarActivo && (
                <div className="fixed top-0 left-0 w-full h-full flex justify-center items-center bg-black bg-opacity-50 z-50">
                    <div className="bg-white p-8 rounded-lg">
                        <h2 className="text-xl font-bold mb-4">Califica a tu Asesor</h2>
                        <div className="flex items-center justify-center">

                            <input ref={rate1Ref} className="hidden" type="radio" name="rate" id="rate-1" />
                            <label htmlFor="rate-1" onClick={() => { handleStarClick(rate1Ref); establecerCalificacion(1) }} onMouseOver={() => starMouseOver('star1')} onMouseOut={starMouseOut}>
                                <Image src={cambiarEstrella.star1} alt="Estrella gris" width={30} height={30} />
                            </label>

                            <input ref={rate2Ref} className="hidden" type="radio" name="rate" id="rate-2" />
                            <label htmlFor="rate-2" onClick={() => { handleStarClick(rate2Ref); establecerCalificacion(2) }} onMouseOver={() => starMouseOver('star2')} onMouseOut={starMouseOut}>
                                <Image src={cambiarEstrella.star2} alt="Estrella gris" width={30} height={30} />
                            </label>

                            <input ref={rate3Ref} className="hidden" type="radio" name="rate" id="rate-3" />
                            <label htmlFor="rate-3" onClick={() => { handleStarClick(rate3Ref); establecerCalificacion(3) }} onMouseOver={() => starMouseOver('star3')} onMouseOut={starMouseOut}>
                                <Image src={cambiarEstrella.star3} alt="Estrella gris" width={30} height={30} />
                            </label>

                            <input ref={rate4Ref} className="hidden" type="radio" name="rate" id="rate-4" />
                            <label htmlFor="rate-4" onClick={() => { handleStarClick(rate4Ref); establecerCalificacion(4) }} onMouseOver={() => starMouseOver('star4')} onMouseOut={starMouseOut}>
                                <Image src={cambiarEstrella.star4} alt="Estrella gris" width={30} height={30} />
                            </label>

                            <input ref={rate5Ref} className="hidden" type="radio" name="rate" id="rate-5" />
                            <label htmlFor="rate-5" onClick={() => { handleStarClick(rate5Ref); establecerCalificacion(5) }} onMouseOver={() => starMouseOver('star5')} onMouseOut={starMouseOut}>
                                <Image src={cambiarEstrella.star5} alt="Estrella gris" width={30} height={30} />
                            </label>
                        </div>
                        <p className="text-sm mt-5">¡Tu opinión es importante para nosotros!</p>
                        <button onClick={() => { enviarEncuesta(); handleEncuestaRealizada(idTicket.id_ticket); postCalificacion() }} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4 m-2">Enviar encuesta</button>
                        <button onClick={() => setCalificarActivo(false)} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4">Cerrar</button>
                    </div>
                </div>
            )}

            {data && data.length >= 0 && (
                <div className="h-full w-full grid grid-cols-3 grid-rows-[200px] justify-center items-center">
                    {data.map((tickets, index) => (
                        <div key={index} className=" h-full w-full flex items-center justify-center">
                            <div className="mt-[10px] flex flex-wrap justify-center h-[180px] w-[300px] bg-white shadow-md rounded-md font-pop">
                                <div className="bg-[#3A4268] w-full h-[10%] rounded-t-md"></div>
                                <div className="w-full h-full p-5 pt-2">
                                    <h3 className="text-md font-semibold">Categoría: {tickets.categoria_problematica}</h3>
                                    <p className="text-sm">Estatus: {tickets.estatus}</p>
                                    {tickets.nombre_asesor !== null && (
                                        <p className="text-sm">Asesor asignado: {tickets.nombre_asesor}</p>
                                    )}
                                    <p className="text-sm">Reportado hace: {HowLong(tickets.diferencia_segundos)}</p>
                                    <div className="flex justify-center">
                                        {tickets.estatus === 'Solucionado' && encuestasRealizadas[index] !== true && tickets.calificado !== true && (
                                            <button
                                                name={`encuesta${index}`}
                                                className="flex text-[12px] bg-green-500 hover:bg-green-700 text-white py-2 px-4 rounded mt-2"
                                                onClick={() => { calificarHandleChange(); establecerDatos(tickets.id_ticket, tickets.id_asesor_asignado) }}
                                            >
                                                Califíca la atención recibida
                                            </button>
                                        )}
                                    </div>
                                </div>
                            </div>
                        </div>

                    ))}
                </div>
            )}
        </>
    );
};

export default TicketCliente;


