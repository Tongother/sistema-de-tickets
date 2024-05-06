"use client";
import HeaderMainPage from "@/components/HeaderMainPage";
import Image from "next/image";
import reunionCompania from "@/public/reunion.jpg";
import Footer from "@/components/Footer";

export default function compania(){
    
    return(
        <div className="overflow-hidden font-outfit">
            <div className="min-h-[5.5em]">
                <HeaderMainPage/>
            </div>
            
            <div className="bg-black w-full h-16"></div>
            <section className="w-full h-[50vh] relative flex">
                <article className="w-[60%] h-[100%] relative">
                    <Image src={reunionCompania.src} alt="Empresa" fill={true} style={{maskImage: "linear-gradient(to right,black 90%, transparent)"}}></Image>
                </article>
                
                <article className="w-[50%] flex flex-col justify-center items-center">
                    <h1 className="text-4xl">WindCodeInc</h1>
                    <p className="max-w-[30em] mt-4"> Lorem ipsum dolor sit, amet consectetur adipisicing elit. Commodi dignissimos autem enim nostrum iure error consequatur accusamus asperiores iusto labore inventore saepe aperiam minima ipsam, sit reiciendis. Provident, vero quaerat. </p>
                </article>
            </section>
            <div className="bg-black w-full h-16"></div>
            
            <Footer/>
        </div>
    )
}