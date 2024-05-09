'use client'
import Link from "next/link";
import Image from "next/image";
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
        <div className="bg-[#0E182C] flex flex-col h-full w-full p-5">
            <div className="w-[160px] h-[45px] ml-7">
                <Image src={`${WindCodeHD.src}`} width={80} height={50} alt=""/>
            </div>
            <section className=" h-[540px] w-[260px] text-white font-outfit rounded-[15px] mt-6 ml-3 mb-4 shadow-md">
                <article className="my-6">
                    <div>
                        <Image src={`${ClienteIcon.src}`} width={80} height={50} alt=""/>
                    </div>
                    <h1 className="text-[35px] font-outfit font-bold ml-6">{title}</h1>
                </article>
                {dashboardInfo.map((info, index) => (
                    <Link href={info.redirect} key={index}>
                    <article className="flex items-center p-[15px] pl-[20px] cursor-pointer border-transparent border-b hover:border-double text-slate-500 hover:bg-gradient-to-r from-[#F0EDFF] to-[#DDE4FE] hover:text-[#8C55FF]">
                        <h1 className="ml-2 text-[15px] font-outfit font-bold">{info.name}</h1>
                    </article>
                    </Link>
                ))}
            </section>
        </div>
    )
}
