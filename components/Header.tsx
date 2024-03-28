import React from "react";
import avatar from "./../public/avatar.png";

interface HeaderProps{
    children: React.ReactNode;
}

export default function Header({children}:HeaderProps){
    return(
        <>
        <article className="bg-slate-50 w-full h-[5em] flex justify-end shadow-md">
            <div className="w-[16em] h-full pl-[1.5em] flex items-center cursor-pointer hover:bg-slate-200">
                <img src={`${avatar.src}`} alt="" className="w-[4em] h-[4em]" />
                <div className="ml-[10px]">
                    <h1>Gunther Nettel</h1>
                    <p>Administrador</p>
                </div>
            </div>
        </article>
        <article className="w-full h-full flex justify-center items-center">
            {children}
        </article>
        </>
    )
}