"use client";
import { motion, useMotionValueEvent } from "framer-motion";
import { useEffect, useState } from "react";
import Link from "next/link";

interface FooterProps{
    limitScroll?: number | any;
}

export default function Footer() {
    const [hidden, setHidden] = useState(false);

    useEffect(() => {
        const handleScroll = () =>{
            const scrollTop = window.scrollY, scrollHeight = document.documentElement.scrollHeight, windowHeight = window.innerHeight;
            const scrollPercentage = (document.documentElement.scrollHeight)*((scrollTop / (scrollHeight - windowHeight)));

            if(scrollPercentage < document.documentElement.scrollHeight-200){
                setHidden(true);
            }else if(scrollPercentage > document.documentElement.scrollHeight-200){
                setHidden(false);
            }
        }
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
          };
    }, []);

    return (
    <motion.footer className="font-medium min-h-[12em] mt-16 border-solid border-2" 
    style={{borderTopLeftRadius: "80px", borderStartEndRadius: "80px", boxShadow: "5px 10px 45px #bfaaff"}}
    variants={{
        visible: { y: 0},
        hidden: { y: "50%" }
    }}
    animate={hidden ? "hidden" : "visible"}
    transition={{
        duration: .5,
        delay: 0,
    }}>
        <section className="w-full h-full flex justify-around">
            <article className="relative mt-6">
                <h1 className="text-2xl font-semibold">
                    Información de la empresa
                </h1>
                <hr className="mt-2 w-52 h-[1px] bg-gray-200 border-none"/>
                <div className="mt-2">
                    <ul className="flex flex-col gap-1">
                        <li><Link href="/compania" className="hover:underline">Nuestra compañia</Link></li>
                        <li><Link href="empleados" className="hover:underline">Nuestros empleados</Link></li>
                    </ul>
                </div>
            </article>
            <article className="relative mt-6">
                <h1 className="text-2xl font-semibold">
                    WindCodeInc
                </h1>
                <hr className="mt-2 w-52 h-[1px] bg-gray-200 border-none"/>
                <div className="mt-2 flex flex-col gap-1">
                    <ul className="flex flex-col gap-1">
                        <li><Link href="/login" className="hover:underline">Soporte</Link></li>
                    </ul>
                </div>
            </article>
            <article className="relative mt-6">
                <h1 className="text-2xl font-semibold">
                    Contacto
                </h1>
                <hr className="mt-2 w-52 h-[1px] bg-gray-200 border-none"/>
                <div className="mt-2 flex flex-col gap-1">
                    <ul className="flex flex-col gap-1">
                        <li>Correo electrónico: info@windcodeinc.com</li>
                        <li>Teléfono: +52 961 772 3715</li>
                        <li>Dirección: Blvd. Belisario Domínguez 2001,<br/> Sin Nombre, Tuxtla Gutiérrez, Chis.</li>
                    </ul>
                </div>
            </article>
        </section>
    </motion.footer>
    );
}