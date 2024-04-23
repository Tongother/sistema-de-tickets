"use client";
import axios from "axios";
import whats from "@/public/whats.jpeg"
import Image from "next/image";

export default function Home() {
//     const handleClick = async() => {
//     const res = await axios.post("/api/client", {
//       nombre: "Gunther",
//       apellido: "Nettel",
//       correo: "nettelgunther",
//       contraseña: "1234"
//     });
//     console.log(res);
//     }
      
  return (
    <>
      <header className="font-medium min-h-[3em] bg-slate-50 flex justify-end">
        <nav className="p-[1em] w-[20em]">
          <ul className="flex justify-between">
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <a href="/about">About</a>
            </li>
            <li>
              <a href="/contact">Contact</a>
            </li>
            <li>
              <a href="/contact">Soporte</a>
            </li>
          </ul>
        </nav>
        <div className="p-[1em]  w-[9em] mr-[2em]">
          <ul className="flex justify-between">
            <li>
              <a href="/">Log in</a>
            </li>
            <li>
              <a href="/about">Sign in</a>
            </li>
          </ul>
        </div>
      </header>
      <main className="text-white h-[92.5vh]">
        <section className="flex h-full">
          <article className="relative w-[33.33%] bg-black h-full">
            <Image src={whats.src} alt="Logo" fill={true} quality={100} className="hover:opacity-80"/>
            <div className="w-full h-0 absolute inset-y-[5%]">
              <div className="flex justify-center">
                <h1 className="text-5xl">Dediccaión</h1>
              </div>
            </div>
          </article>
          <article className="relative w-[33.33%] bg-black h-full">
            <Image src={whats.src} alt="Logo" fill={true} quality={100} className="hover:opacity-80" />
            <div className="w-full h-0 absolute inset-y-[5%]">
              <div className="flex justify-center">
                <h1 className="text-5xl">Calidad</h1>
              </div>
            </div>
          </article>
          <article className="relative w-[33.33%] bg-black h-full">
            <Image src={whats.src} alt="Logo" fill={true} quality={100} className="hover:opacity-80"/>
            <div className="w-full h-0 absolute inset-y-[5%]">
              <div className="flex justify-center">
                <h1 className="text-5xl">Intuitivo</h1>
              </div>
            </div>
          </article>
        </section>
      </main>
      <footer className="font-medium min-h-[3em] bg-blue-100">
        <p>Footer</p>
      </footer>
    </>
  );
}
