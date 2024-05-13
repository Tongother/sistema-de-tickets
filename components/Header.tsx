'use client'
import React, { useState } from "react";
import Image from "next/image";
import Avatar2 from "@/public/avatar2.png";
import WindCodeHD from "/public/WindCodeHD.png"
import { FlyoutLink } from "./FlyoutLink";
import dropDown from "@/public/chevron-down-24.svg";
import { PricingContent } from "./PricingContent";

interface HeaderProps {
    children: React.ReactNode;
}

export default function Header({children}:HeaderProps){
    return(
        <div className="bg-[#FFFF] w-full flex flex-col place-content-start justify-center h-full font-pop">
            <article className="w-full h-[110px] flex flex-row border-b-2 border-slate-200">
                <div className="h-full w-full rounded-l-[30px] flex flex-row items-center">
                    <div className="flex flex-col ml-6 mr-[160px]">
                        <div>
                            <Image src={`${WindCodeHD.src}`} width={100} height={50} alt=""/>
                        </div>
                        <h1 className="text-[12px] font-pop">Construyendo innovadoras soluciones</h1>
                    </div>
                    <div className="w-[130px] h-[50px] flex items-center justify-center  rounded-md">
                        <FlyoutLink href="/" FlyoutColor="bg-[#7478B6]" FlyoutColorText="hover:text-[#7478B6]"><h1 className="font-semibold font-pop">Inicio</h1></FlyoutLink>
                    </div>
                    <div className="w-[300px] h-[50px] flex items-center justify-center ml-10 rounded-md font-pop">
                        <FlyoutLink href="/" FlyoutContent={PricingContent} FlyoutColor="bg-[#7478B6]" FlyoutColorText="hover:text-[#7478B6]">
                            <span className="flex items-center z-10 font-semibold">
                                Sobre nosotros<Image src={dropDown.src} alt="Drop" width={20} height={20} className="ml-1"></Image>
                            </span>
                        </FlyoutLink>
                    </div>
                    <div className="w-[130px] h-[50px] flex items-center justify-center ml-[43px] rounded-md">
                        <FlyoutLink href="/contacto" FlyoutColor="bg-[#7478B6]" FlyoutColorText="hover:text-[#7478B6]"><h1 className="font-semibold font-pop">Contáctanos</h1></FlyoutLink>
                    </div>
                </div>
            </article>
            <article className="w-full h-full flex items-start justify-center overflow-auto">
                {children}
            </article>
        </div>
    );
}
