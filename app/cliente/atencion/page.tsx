import TicketCliente from "@/components/TicketCliente";
import React from "react";

export default function Atencion(){
    return(
        <section className="h-full w-full flex flex-col justify-center p-[15px] pt-[15px]">
            <article className="h-[7%] w-full flex justify-center items-center border-b-2 border-b-slate-200">
                <div className="h-full flex items-center justify-center">
                    <h1 className="font-pop text-[18px] text-slate-800"> Tickets enviados </h1>
                </div>
            </article>
            <article className="h-[93%] w-full mt-5">
                <TicketCliente/>
            </article>
        </section>
    );
}