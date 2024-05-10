"use client";
import Footer from "@/components/Footer";
import HeaderMainPage from "@/components/HeaderMainPage";
import Image from "next/image";
import instagram from "@/public/instagram.png";
import facebookIcono from "@/public/icono-facebook.svg";
import tiktokIcono from "@/public/icon-tik-tok.svg";

export default function Contacto() {
    return (
        <div className="overflow-hidden font-outfit">
            <div className=" min-h-[6em]">
                <HeaderMainPage/>
            </div>
            <section className="w-full h-screen relative bg-black flex justify-around items-center">
                <article className="pb-[5%]">
                    <h1 className="text-white text-center text-5xl font-bold">Contactanos</h1>
                    <ul className="flex flex-col items-start mt-4">
                        <li className="text-white text-center">Telefono: +52 961 266 8500</li>
                        <li className="text-white text-center">Correo: info@windcodeinc.com</li>
                    </ul>
                </article>
                <article className="pb-[5%]">
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1816.0665919907372!2d-93.15779529413133!3d16.755451648823602!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85ecd90ce083cfdb%3A0x5d492b873cd72f20!2sFacultad%20De%20Sistemas%20Computacionales!5e0!3m2!1ses!2smx!4v1714614775245!5m2!1ses!2smx" width="600" height="450" style={{border: 0, borderRadius: "15px"}} allowFullScreen={true} loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
                </article>
                <article className="absolute bottom-0 w-full h-[6em] flex flex-col items-center text-black bg-violet-50">
                    <h1 className="my-2 font-bold text-lg">Redes sociales</h1>
                    <ul className="flex gap-32">
                        <li><a href="https://www.facebook.com/share/KCMoJNxyfEnX6UDG/?mibextid=LQQJ4d" target="_blank" rel="noopener noreferrer"><Image src={facebookIcono.src} alt="Facebook" width={40} height={40}/></a></li>
                        <li><a href="https://www.tiktok.com/@windcodedev" target="_blank" rel="noopener noreferrer"><Image src={tiktokIcono.src} alt="Tiktok" width={40} height={40}/></a></li>
                        <li><a href="https://www.instagram.com/windcode_dev/" target="_blank" rel="noopener noreferrer"><Image src={instagram.src} alt="Instagram" width={40} height={40}/></a></li>
                    </ul>
                </article>
            </section>
            <section className="w-full h-[75vh] relative bg-black flex flex-col items-center">
                <article className=" m-16">
                    <h1 className="text-white text-4xl text-center">¿Quieres chambear con nosotros?<br/>Envianos un mensajito</h1>
                </article>
                <article className="w-1/2 h-[16.5em] bg-violet-50 rounded-lg p-4">
                    <form className="flex flex-col gap-4">
                        <input type="text" placeholder="Nombre" className="p-2"/>
                        <input type="email" placeholder="Correo" className="p-2"/>
                        <textarea placeholder="Mensaje" className="p-2"></textarea>
                        <button className="p-2 bg-black text-white">Enviar</button>
                    </form>
                </article>
            </section>
            <Footer/>  
        </div>
    );
}