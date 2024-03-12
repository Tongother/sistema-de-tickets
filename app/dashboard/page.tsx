"use client"
import Userstable from "@/components/Userstable";
import avatar from "./../../public/avatar.png";
import objetivo from "./../../public/objetivo.png";
import operador from "./../../public/operador.png";
import lista from "./../../public/lista-de-verificacion.png";
import aplicacion from "./../../public/aplicacion.png";

export default function dashboard() {

    const User:any= {
        id: 4,
        name: "Gunther",
        username: "Tongo",
        email: "nettelgunther@outlook.es",
    }

    console.log(avatar, objetivo, operador, lista, aplicacion)

    return (
      <main className="flex h-screen w-screen">
        <section className="w-[30%] bg-blue-950 text-white">
            <article className="w-full h-[6em] flex items-center justify-center">
                <h1 className="text-xl">ADMIN</h1>
            </article>

            <section className="">
                <article className="flex items-center ml-[5%] mr-[5%] mb-[5px] rounded-lg p-[10px] cursor-pointer border-2 border-transparent hover:border-double hover:bg-blue-900">
                    <img src="/_next/static/media/objetivo.a4ae5ec3.png" alt="Personas" className="w-[2em] h-[2em]"/>
                    <h1 className="ml-2">Clientes</h1>
                </article>
                <article className="flex items-center ml-[5%] mr-[5%] mb-[5px] rounded-lg  p-[10px] cursor-pointer border-2 border-transparent hover:border-double hover:bg-blue-900">
                    <img src="/_next/static/media/operador.4e105f95.png" alt="Personas" className="w-[2em] h-[2em]"/>
                    <h1 className="ml-2">Asesór tecnico</h1>
                </article>
                <article className=" flex items-center ml-[5%] mr-[5%] mb-[5px] rounded-lg  p-[10px] cursor-pointer border-2 border-transparent hover:border-double hover:bg-blue-900">
                    <img src="/_next/static/media/lista-de-verificacion.a87c4fd2.png" alt="Personas" className="w-[2em] h-[2em]"/>
                    <h1 className="ml-2">Estatus de atención</h1>
                </article>
                <article className="flex items-center ml-[5%] mr-[5%] mb-[5px] rounded-lg  p-[10px] cursor-pointer border-2 border-transparent hover:border-double hover:bg-blue-900">
                    <img src="/_next/static/media/aplicacion.0a7c1520.png" alt="Personas" className="w-[2em] h-[2em]"/>
                    <h1 className="ml-2">Categoría de problematica</h1>
                </article>
                <article className="flex items-center ml-[5%] mr-[5%] mb-[5px] rounded-lg  p-[10px] cursor-pointer border-2 border-transparent hover:border-double hover:bg-blue-900">
                    <img src="/_next/static/media/objetivo.a4ae5ec3.png" alt="Personas" className="w-[2em] h-[2em]"/>
                    <h1 className="ml-2">Reportes</h1>
                </article>
            </section>
        </section>

        <section className="w-full flex flex-col">
            <article className="bg-slate-100 w-full h-[5em] flex justify-end">
                <div className="w-[16em] h-full pl-[1.5em] flex items-center cursor-pointer hover:bg-slate-200">
                    <img src="/_next/static/media/avatar.e2eb4918.png" alt="" className="w-[4em] h-[4em]" />
                    <div className="ml-[10px]">
                        <h1>Gunther Nettel</h1>
                        <p>Administrador</p>
                    </div>
                </div>
            </article>

            <article>
                <Userstable/>
            </article>
        </section>
      </main>
    );
  }