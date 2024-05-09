import HistoryTable from "@/components/Historytable";
import React from "react";
export default function Historial(){
    return (
        
        <section className="h-full mt-10 max-h-[515px] max-w-[1000px] overflow-auto">
                <article><HistoryTable/></article>
        </section>

    );
}