"use client"
import HeaderMainPage from "@/components/HeaderMainPage";
import Footer from "@/components/Footer";
import Image from "next/image";
import { motion } from "framer-motion";
import { useState } from "react";
import Alfon from "@/public/Alfonn.png";
import Gun from "@/public/Gun.png";
import Juli from "@/public/SrJulian.png";
import Bisquet from "@/public/Pasquett.png";
import OrganigramaWindCode from "@/public/Organigrama.jpg";

export default function empleados() {

    const [hidden, setHidden] = useState([true, true, true, true]);
    const [opacityImage, setOpacityImage] = useState(["opacity-40", "opacity-40", "opacity-40", "opacity-40"]);

    const handleMouseOver = (index:number) => {
        setHidden(hidden.map((value, i) => (i === index ? false : true)));
        setHidden(hidden.map((value, i) => (i === index ? false : true)));

        setOpacityImage(opacityImage.map((value, i) => (i === index ? "opacity-100" : "opacity-40")));
      };

      const handleMouseOut = () => {
        setHidden([true, true, true, true]);
      };

    return (
        <div className="overflow-hidden font-outfit">
            <div className=" min-h-[5.5em]">
                <HeaderMainPage />
            </div>
            <section className="flex justify-center h-[92.5vh] bg-black overflow-hidden">
                <article className="relative w-[50%]" onMouseOver={()=> handleMouseOver(1)} onMouseOut={handleMouseOut}>
                <motion.div className="bg-neutral-800 opacity-70 absolute w-full h-[12em] bottom-0 flex flex-col items-center rounded-xl z-30"
                    variants={{ 
                        hidden: { y: "100%" },
                        visible: { y: 0 }
                     }} 
                     initial="hidden"
                     animate={ hidden[1] ? "hidden" : "visible" }>
                        <h1 className="text-white text-4xl m-2">Gunther Nettel Rosario</h1>
                        <div className="max-w-lg">
                            <p className=" text-white mt-2 text-center">Estudiante en busca de conocimiento, nunca es suficiente. Me encanta programar, siempre busco nuevas maneras de hacer algoritmos de maneras más creativas y robustas.</p>
                        </div>
                    </motion.div>
                    <Image src={Gun.src} alt="empleados" fill={true} quality={100} className={`cursor-pointer ${opacityImage[1]} hover:opacity-100`} style={{maskImage: "linear-gradient(black 80%, transparent)"}}/>
                </article>

                <article className="relative w-[50%]" onMouseOver={()=> handleMouseOver(2)} onMouseOut={handleMouseOut}>
                <motion.div className="bg-neutral-800 opacity-70 absolute w-full h-[12em] bottom-0 flex flex-col items-center rounded-xl z-30"
                    variants={{ 
                        hidden: { y: "100%" },
                        visible: { y: 0 }
                     }} 
                     initial="hidden"
                     animate={ hidden[2] ? "hidden" : "visible" }>
                        <h1 className="text-white text-4xl m-2">Julian Antonio Castro Alonso</h1>
                        <div className="max-w-lg">
                            <p className=" text-white mt-2 text-center">Estudiante de desarrollo de software apasionado por la programación y el aprendizaje constante. Mi disciplina y mi curiosidad me impulsan a mejorar día a día, convencido de que cada error es una oportunidad de aprender y mejorar.</p>
                        </div>
                    </motion.div>
                    <Image src={Juli.src} alt="empleados" fill={true} quality={100} className={`cursor-pointer ${opacityImage[2]} hover:opacity-100`} style={{maskImage: "linear-gradient(black 80%, transparent)"}}/>
                </article>
            </section>

        <section className="flex justify-center h-[92.5vh] bg-black overflow-hidden">
            <article className="relative w-[50%]" onMouseOver={()=> handleMouseOver(0)} onMouseOut={handleMouseOut}>
                    <motion.div className="bg-neutral-800 opacity-70 absolute w-full h-[12em] bottom-0 flex flex-col items-center rounded-xl z-30"
                    variants={{ 
                        hidden: { y: "100%" },
                        visible: { y: 0 }
                     }} 
                     initial="hidden"
                     animate={ hidden[0] ? "hidden" : "visible" }>
                        <h1 className="text-white text-4xl m-2 text-center">Cristian Alfonsín Hernandez</h1>
                        <div className="max-w-lg">
                            <p className=" text-white mt-2 text-center">Estudiante de Licenciatura en Ingeniería en Desarrollo y tecnologías de Software  apasionado por la programación y el desarrollo. Con un enfoque en el aprendizaje continuo. Busco oportunidades para crecer y contribuir en el campo de la tecnología</p>
                        </div>
                    </motion.div>
                    <Image src={Alfon.src} alt="empleados" fill={true} quality={100} className={`cursor-pointer ${opacityImage[0]} hover:opacity-80`} style={{maskImage: "linear-gradient(black 80%, transparent)"}}/>
            </article>
            <article className="relative w-[50%]" onMouseOver={()=> handleMouseOver(3)} onMouseOut={handleMouseOut}>
                    <motion.div className="bg-neutral-800 opacity-70 absolute w-full h-[12em] bottom-0 flex flex-col items-center rounded-xl z-30"
                    variants={{ 
                        hidden: { y: "100%" },
                        visible: { y: 0 }
                     }} 
                     initial="hidden"
                     animate={ hidden[3] ? "hidden" : "visible" }>
                        <h1 className="text-white text-4xl m-2 text-center">Luis Solis Pasquett</h1>
                        <div className="max-w-lg">
                            <p className=" text-white mt-2 text-center">Soy programador</p>
                        </div>
                    </motion.div>
                    <Image src={Bisquet.src} alt="empleados" fill={true} quality={100} className={`cursor-pointer ${opacityImage[3]} hover:opacity-80"`} style={{maskImage: "linear-gradient(black 80%, transparent)"}}/>
            </article>
        </section>
            <section className="">
                <h1 className="my-14 w-full text-center text-4xl font-semibold"> Administración organizacional </h1>
                <div className="relative w-screen h-screen">
                    <Image src={OrganigramaWindCode.src} fill={true} quality={100} alt="Organigrama WindCode"></Image>
                </div>
            </section>
            <Footer/>
        </div>
    )
}