import TicketCliente from "@/components/TicketCliente";
import React from "react";



export default function Atencion(){
    return(
        <section className="h-full w-full flex flex-col justify-center p-[15px] pt-[15px]">
            <article className="  h-[10%] w-full grid grid-rows-1 grid-cols-3 justify-center items-center border-b-2 border-b-slate-200">
                <div className="h-full flex items-center justify-center border-r-2 border-r-slate-300">
                    <h1 className="font-pop text-[18px] text-slate-800"> Enviado </h1>
                </div>
                <div className="h-full flex items-center justify-center border-r-2 border-r-slate-300">
                    <h1 className="font-pop text-[18px] text-slate-800"> En proceso de resolución </h1>
                </div>
                <div className="h-full flex items-center justify-center">
                    <h1 className="font-pop text-[18px] text-slate-800"> Entregado </h1>
                </div>
            </article>
            <article className="h-full w-full">
                <TicketCliente/>
            </article>
        </section>
    );
}