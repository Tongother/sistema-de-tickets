import React from "react";
import Image from "next/image";
import WindCodeHD from '@/public/WindCodeHD.png';
import Avatar2 from '@/public/avatar2.png';

interface HeaderProps{
    children: React.ReactNode;
    headerInfo: {name: string, rol: string, src: string};
}

export default function Header({children, headerInfo}:HeaderProps){
    return(
        <div className="bg-[#FFFF] w-full flex flex-col place-content-start justify-center h-full">
            <article className="w-full h-[110px] grid grid-rows-1 grid-cols-2 border-b-2 border-slate-300">
                <div className="h-full w-full rounded-l-[30px] flex flex-row items-center">
                    <div className="w-[250px] h-full flex items-center justify-center">
                        <h1 className="font-outfit text-2xl">Soporte técnico</h1>
                    </div>
                </div>
                <div className="w-[16em] h-full pl-[1.5em] flex items-center cursor-pointer hover:bg-violet-50 justify-self-end rounded-[30px]">
                    <Image src={`${Avatar2.src}`} width={64} height={64} alt={`${headerInfo.rol}`} />
                    <div className="ml-[10px]">
                        <h1>{headerInfo.name}</h1>
                        <p>{headerInfo.rol}</p>
                    </div>
                </div>
            </article>
            <article className="w-full h-full flex items-start justify-center">
                {children}
            </article>
        </div>
    )
}