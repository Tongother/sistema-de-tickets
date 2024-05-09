'use client'
import Link from "next/link";
import Image from "next/image";
import logoutimage from '@/public/logout.png';
import axios from "axios";
import { useRouter } from "next/navigation";
import { div } from "three/examples/jsm/nodes/Nodes.js";
import WindCodeHD from '@/public/WindCodeHD.png'

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
        <div className="flex flex-col h-full w-full p-5">
            <div className="w-[160px] h-[45px] flex ml-3">
                <Image src={`${WindCodeHD.src}`} width={80} height={50} alt=""/>
            </div>
            <article className="inline-block my-6 ml-2 justify-self-center">
                <h1 className=" text-[30px] font-outfit font-bold inline">{title}</h1>
            </article>

            <section className=" h-[520px] w-[260px] bg-white text-black font-outfit rounded-[15px] ml-3 mb-4 shadow-md">
                {dashboardInfo.map((info) => (
                    <Link href={info.redirect}>
                    <article className="flex items-center p-[15px] pl-[20px] cursor-pointer border-transparent border-b hover:border-double text-slate-500 hover:bg-gradient-to-r from-[#F0EDFF] to-[#DDE4FE] hover:text-[#8C55FF]">
                        <h1 className="ml-2 text-[15px] font-outfit font-bold">{info.name}</h1>
                    </article>
                    </Link>
                ))}
            </section>
        </div>
    )
}
