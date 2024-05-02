"use client"
import HeaderMainPage from "@/components/HeaderMainPage";
import Footer from "@/components/Footer";
import Image from "next/image";
import { motion } from "framer-motion";
import { useState } from "react";
import Alfon from "@/public/Alfonn.png";
import Gun from "@/public/Gun.png";
import Juli from "@/public/Alfonn.png";

export default function empleados() {

    const [hidden, setHidden] = useState([true, true, true]);

    const handleMouseOver = (index:number) => {
        setHidden(hidden.map((value, i) => (i === index ? false : true)));
      };

      const handleMouseOut = () => {
        setHidden([true, true, true]);
      };

    return (
        <div className="overflow-hidden">
            <div className=" min-h-[5.5em]">
                <HeaderMainPage />
            </div>
            <section className="flex justify-center h-[92.5vh] bg-black overflow-hidden">
                <article className="relative w-[33.11%]" onMouseOver={()=> handleMouseOver(0)} onMouseOut={handleMouseOut}>
                    <motion.div className="bg-neutral-800 opacity-40 absolute w-full h-[12em] bottom-0 flex flex-col items-center rounded-xl z-30"
                    variants={{ 
                        hidden: { y: "100%" },
                        visible: { y: 0 }
                     }} 
                     initial="hidden"
                     animate={ hidden[0] ? "hidden" : "visible" }>
                        <h1 className="text-white text-4xl m-2">Alfonso</h1>
                        <div className=" max-w-72">
                            <p className=" text-white mt-2 text-center">Hola amigos de yutu, soy mamamama minecraft</p>
                        </div>
                    </motion.div>
                    <Image src={Alfon.src} alt="empleados" fill={true} quality={100} className="cursor-pointer opacity-60 hover:opacity-80" style={{maskImage: "linear-gradient(black 80%, transparent)"}}/>
                </article>

                <article className="relative w-[33.11%]" onMouseOver={()=> handleMouseOver(1)} onMouseOut={handleMouseOut}>
                <motion.div className="bg-neutral-800 opacity-40 absolute w-full h-[12em] bottom-0 flex flex-col items-center rounded-xl z-30"
                    variants={{ 
                        hidden: { y: "100%" },
                        visible: { y: 0 }
                     }} 
                     initial="hidden"
                     animate={ hidden[1] ? "hidden" : "visible" }>
                        <h1 className="text-white text-4xl m-2">Gunther</h1>
                        <div className=" max-w-72">
                            <p className=" text-white mt-2 text-center">Estudiante en busca de conocimiento, nunca es suficiente.</p>
                        </div>
                    </motion.div>
                    <Image src={Gun.src} alt="empleados" fill={true} quality={100} className="cursor-pointer opacity-60 hover:opacity-100" style={{maskImage: "linear-gradient(black 80%, transparent)"}}/>
                </article>

                <article className="relative w-[33.11%]" onMouseOver={()=> handleMouseOver(2)} onMouseOut={handleMouseOut}>
                <motion.div className="bg-neutral-800 opacity-40 absolute w-full h-[12em] bottom-0 flex flex-col items-center rounded-xl z-30"
                    variants={{ 
                        hidden: { y: "100%" },
                        visible: { y: 0 }
                     }} 
                     initial="hidden"
                     animate={ hidden[2] ? "hidden" : "visible" }>
                        <h1 className="text-white text-4xl m-2">Julian</h1>
                        <div className=" max-w-72">
                            <p className=" text-white mt-2 text-center">Que marrano</p>
                        </div>
                    </motion.div>
                    <Image src={Alfon.src} alt="empleados" fill={true} quality={100} className="cursor-pointer opacity-60 hover:opacity-100" style={{maskImage: "linear-gradient(black 80%, transparent)"}}/>
                </article>
            </section>
            <Footer/>
        </div>
    )
}