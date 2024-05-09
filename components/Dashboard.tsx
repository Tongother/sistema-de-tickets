'use client'
import Link from "next/link";
import Image from "next/image";
import logoutimage from '@/public/logout.png';
import axios from "axios";
import { useRouter } from "next/navigation";

interface DashboardProps {
    dashboardInfo: {name:string, src: string, redirect: string}[];
    title: string;
}

export default function Dashboard({dashboardInfo, title}:DashboardProps) {
    const router = useRouter();
    const logout = async () =>{
        try{
            const response = await axios.post('/api/auth/logout');
            console.log(response);
            router.push('/login');
        }
        catch(error){
            console.error(error);
            router.push('/login');
        }
    };
    return (
        <>
            <article className="w-full h-[6em] flex items-center justify-center">
                <h1 className="text-xl">{title}</h1>
            </article>

            <section className="">
                {dashboardInfo.map((info, index) => (
                    <Link key={index} href={info.redirect}>
                    <article className="flex items-center ml-[5%] mr-[5%] mb-[5px] rounded-lg p-[10px] cursor-pointer border-2 border-transparent hover:border-double hover:bg-blue-900">
                        <Image src={`${info.src}`} alt="Personas" width={40} height={40}/>
                        <h1 className="ml-2">{info.name}</h1>
                    </article>
                    </Link>
                ))}
                <Link href = '/' onClick={logout}>
                    <article className="flex items-center ml-[5%] mr-[5%] mb-[5px] rounded-lg p-[10px] cursor-pointer border-2 border-transparent hover:border-double hover:bg-blue-900">
                        <Image src={logoutimage.src} alt="Personas" width={40} height={40}/>
                        <h1 className="ml-2">Cerrar sesión</h1>
                    </article>
                </Link>
            </section>
        </>
    )
}