import React from "react";
import Image from "next/image";

interface HeaderProps{
    children: React.ReactNode;
    headerInfo: {name: string, rol: string, src: string};
}

export default function Header({children, headerInfo}:HeaderProps){
    return(
        <>
        <article className="bg-slate-50 w-full h-[5em] flex justify-end shadow-md">
            <div className="w-[16em] h-full pl-[1.5em] flex items-center cursor-pointer hover:bg-slate-200">
                <Image src={`${headerInfo.src}`} width={64} height={64} alt={`${headerInfo.rol}`} />
                <div className="ml-[10px]">
                    <h1>{headerInfo.name}</h1>
                    <p>{headerInfo.rol}</p>
                </div>
            </div>
        </article>
        <article className="w-full h-full flex justify-center items-center">
            {children}
        </article>
        </>
    )
}