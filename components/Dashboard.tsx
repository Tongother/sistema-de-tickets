'use client'
import Link from "next/link";
import Image from "next/image";
import logoutimage from '@/public/logout.png';
import axios from "axios";
import { useRouter } from "next/navigation";
import { div } from "three/examples/jsm/nodes/Nodes.js";
import WindCodeHD from '@/public/WindCodeHD.png';
import ClienteIcon from '@/public/ClienteIcon.png';

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
        <div className="bg-[#0E182C] flex flex-col h-full w-full pt-6">
            <div className="text-white flex flex-row pl-1">
                <div>
                    <Image src={`${ClienteIcon.src}`} width={60} height={50} alt=""/>
                </div>
                <div className="font-outfit font-medium">
                    <h1 className="text-[20px] ml-6">{title}</h1>
                    <h2 className="text-[15px] mt-0 pt-0 ml-6" >lorem ipsum</h2>
                </div>
            </div>
            <section className="h-full w-full text-white font-outfit flex flex-col">
                {dashboardInfo.map((info) => (
                    <Link href={info.redirect}>
                        <article className="flex items-center mt-3 w-[275px] p-[15px] pl-[20px] cursor-pointer border-none rounded-r-[12px] text-slate-500  hover:bg-[#1F283D] hover:text-white">
                            <h1 className="ml-2 text-[15px] font-outfit font-bold">{info.name}</h1>
                        </article>
                    </Link>
                ))}
            </section>
        </div>
    )
}