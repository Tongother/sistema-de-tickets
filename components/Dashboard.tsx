import Link from "next/link";
import Image from "next/image";
import axios from "axios";
import ClienteIcon from '@/public/ClienteIcon.png';
import exit from '@/public/exit.png';

interface DashboardProps {
    dashboardUser: {name: string, email: string, rol: string, src: string};
    dashboardInfo: {name:string, src: string, redirect: string}[];
    title: string;
}

export default function Dashboard({dashboardUser, dashboardInfo, title}:DashboardProps) {
    const logout = async () =>{
        try{
            const response = await axios.post('/api/auth/logout');
            console.log(response);
            window.location.href = '/login';
        }
        catch(error){
            console.error(error);
        }
    }; 
    return (
        <div className="bg-[#0E182C] flex flex-col h-screen w-full pt-6">
            <div className="text-white flex flex-row pl-1">
                <div>
                    <Image src={`${ClienteIcon.src}`} width={60} height={50} alt=""/>
                </div>
                <div className="font-outfit font-medium">
                    <h1 className="text-[20px] ml-2" >{`${dashboardUser.name ? dashboardUser.name : 'Usuario'}`}</h1>
                    <h2 className="text-[12px] mt-0 pt-0 ml-2" >{`${dashboardUser.email ? dashboardUser.email : 'loremp ipsum'}`}</h2>
                </div>
            </div>
            <section className="h-full w-full text-white font-outfit flex flex-col mt-7">
                {dashboardInfo.map((info, index) => (
                    <Link href={info.redirect} key={index}>
                        <article className="flex items-center mt-3 w-[275px] p-[15px] pl-[20px] cursor-pointer border-none rounded-r-[12px] text-slate-500  hover:bg-[#1F283D] hover:text-white">
                            <h1 className="ml-2 text-[15px] font-outfit font-bold">{info.name}</h1>
                        </article>
                    </Link>
                ))}
            </section>
            <button className=" ml-3 mb-3 w-[100px] h-[60px] text-[#6F7686] font-outfit  rounded-md font-medium flex flex-row items-center hover:text-white hover:bg-slate-700" onClick={logout}>
                <div className="ml-2">
                    <Image src={`${exit.src}`} width={25} height={50} alt=""/>
                </div>
                <h1 className="ml-3 font-outfit text-[14px]">Logout</h1>
            </button>
        </div>


    )
}
