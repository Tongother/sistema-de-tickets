'use client'
import React, { useState } from "react";
import Image from "next/image";
import Avatar2 from "@/public/avatar2.png";
import WindCodeHD from "/public/WindCodeHD.png"

interface HeaderProps {
    children: React.ReactNode;
    headerInfo: { name: string; email: string; rol: string; src: string };
}

export default function Header({children, headerInfo}:HeaderProps){
    return(
        <div className="bg-[#FFFF] w-full flex flex-col place-content-start justify-center h-full">
            <article className="w-full h-[110px] flex flex-row border-b-2 border-slate-200">
                <div className="h-full w-full rounded-l-[30px] flex flex-row items-center">
                    <div className="flex flex-col ml-6 mr-[160px]">
                        <div>
                            <Image src={`${WindCodeHD.src}`} width={100} height={50} alt=""/>
                        </div>
                        <h1 className="text-[10px]">Construyendo innovadoras soluciones</h1>
                    </div>
                    <a href="/">
                        <div className="w-[130px] h-[50px] flex items-center justify-center  hover:text-[#7478B6] hover:underline  rounded-md">
                            <h1 className="font-[30px] font-tilt">Inicio</h1>
                        </div>
                    </a>
                    <a href="/#Mision">
                        <div className="w-[130px] h-[50px] flex items-center justify-center  hover:text-[#7478B6] hover:underline ml-10 rounded-md">
                            <h1 className="font-[30px] font-tilt">Sobre nosotros</h1>
                        </div>
                    </a>
                    <a href="/contacto">
                        <div className="w-[130px] h-[50px] flex items-center justify-center  hover:text-[#7478B6] hover:underline ml-[43px] rounded-md">
                            <h1 className="font-[30px] font-tilt">Contáctanos</h1>
                        </div>
                    </a>
                </div>
            </article>
            <article className="w-full h-full flex items-start justify-center overflow-auto">
                {children}
            </article>
        </div>
    );
}
