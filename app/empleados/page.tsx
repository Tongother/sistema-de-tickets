"use client"
import HeaderMainPage from "@/components/HeaderMainPage";
import Footer from "@/components/Footer";
import Confetti from "@/components/Confetti";
import { FlyoutLink } from "@/components/FlyoutLink";
import Image from "next/image";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import Alfon from "@/public/Alfonn.png";
import Gun from "@/public/Gun.png";
import Juli from "@/public/SrJulian.png";
import Bisquet from "@/public/Pasquett.png";
import OrganigramaWindCode from "@/public/Organigrama.jpg";
import LinkedIn from "@/public/linkedIn.svg";


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

      const [showConfetti, setShowConfetti] = useState(false);

    useEffect(() => {
        setShowConfetti(true);
    }, []);

    return (
        <div className="overflow-hidden font-outfit">
            {showConfetti && <Confetti />}
            <div className=" min-h-[5.5em]">
                <HeaderMainPage />
            </div>

            <section className="h-[120vh] w-full flex flex-col items-center">
                <h2 className="text-center text-xl"><span className="font-semibold text-3xl">¡Felicidades Julian Castro Alonso!</span><br/> Conoce a nuestro empleado del mes</h2>
                <div className="relative h-full w-[40%] mt-4">
                    <Image src={Juli.src} alt="empleados" fill={true} quality={100} className="w-full h-full" style={{boxShadow: "0px 0px 20px #9333C7"}}/>
                </div>
                <div className="w-[40%] mt-8">
                    <p className="text-center mt-4 text-xl">Julian ha demostrado un compromiso excepcional con nuestro equipo de desarrollo de software. Su enfoque innovador y su habilidad para resolver problemas complejos han sido fundamentales para el éxito de nuestros proyectos recientes. Julian no solo cumple con sus responsabilidades, sino que también va más allá, apoyando a sus compañeros y contribuyendo a un ambiente de trabajo colaborativo y positivo.</p>
                    <p className="text-center mt-4 text-xl font-semibold">¡Gracias, Julian Castro Alonso, por tu arduo trabajo y dedicación! ¡Esperamos ver más de tus logros en el futuro!</p>
                    <div className="mt-4 flex flex-col items-center">
                        <h1 className="my-2 text-xl">Redes sociales</h1>
                        <ul className="flex gap-32">
                            <li><a href="https://www.linkedin.com/in/castro-alonso-julian-antonio-a06438304/" target="_blank" rel="noopener noreferrer"><Image src={LinkedIn.src} alt="Facebook" width={40} height={40}/></a></li>
                        </ul>
                    </div>
                </div>
            </section>

            
            <h2 className="text-center text-4xl font-semibold my-14">¡Conoce a nuestros empleados!</h2>
            <section className="flex justify-center h-[92.5vh] bg-black overflow-hidden mt-4">
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
                            <p className=" text-white mt-2 text-center">Estudiante que siempre busca aprende algo nuevo, me gusta mucho realizar cualquier trabajo de una manera más sencilla y simple con ayuda de la codificación</p>
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

            <section className="flex flex-col items-center">
                <h1 className="my-14 w-full text-center text-4xl font-semibold"> Control de actividades </h1>
                <div className="w-full max-w-[80%] py-10 flex flex-col items-center bg-violet-50 rounded-xl shadow-lg hover:shadow-2xl">
                    <p className="text-center max-w-[90%] text-xl">En WindCode, la etapa de control es crucial para asegurar que los proyectos de desarrollo de software se completen de manera eficiente y cumplan con los estándares de calidad establecidos. 
                    <br/>Una de las herramientas clave que utilizamos en esta etapa es la tabla de responsabilidades. Esta tabla nos permite seguir de cerca las contribuciones de cada empleado, facilitando la gestión de tareas y el ajuste de procesos según sea necesario. A continuación, se presenta la tabla de responsabilidades que indica la labor de cada empleado en el desarrollo de nuestros proyectos:</p>
                    <div className="mt-6">
                        <FlyoutLink href="Tabla_de_responsabilidades.pdf" FlyoutColor="bg-black" FlyoutColorText="hover:text-violet-600"><p className="font-semibold">Tabla de responsabilidades.pdf</p></FlyoutLink>
                    </div>
                </div>
            </section>
            <Footer/>
        </div>
    )
}