import Link from "next/link";
import objetivo from "./../public/objetivo.png";
import operador from "./../public/operador.png";
import lista from "./../public/lista-de-verificacion.png";
import aplicacion from "./../public/aplicacion.png";

export default function Dashboard() {
    return (
        <>
            <article className="w-full h-[6em] flex items-center justify-center">
                <h1 className="text-xl">ADMIN</h1>
            </article>

            <section className="">
                <Link href="/dashboard">
                <article className="flex items-center ml-[5%] mr-[5%] mb-[5px] rounded-lg p-[10px] cursor-pointer border-2 border-transparent hover:border-double hover:bg-blue-900">
                    <img src={`${objetivo.src}`} alt="Personas" className="w-[2em] h-[2em]"/>
                    <h1 className="ml-2">Clientes</h1>
                </article>
                </Link>

                <Link href="/dashboard/advisor">
                <article className="flex items-center ml-[5%] mr-[5%] mb-[5px] rounded-lg  p-[10px] cursor-pointer border-2 border-transparent hover:border-double hover:bg-blue-900">
                    <img src={`${operador.src}`} alt="Personas" className="w-[2em] h-[2em]"/>
                    <h1 className="ml-2">Asesór tecnico</h1>
                </article>
                </Link>

                <Link href="/dashboard/attention_status">
                <article className=" flex items-center ml-[5%] mr-[5%] mb-[5px] rounded-lg  p-[10px] cursor-pointer border-2 border-transparent hover:border-double hover:bg-blue-900">
                    <img src={`${lista.src}`} alt="Personas" className="w-[2em] h-[2em]"/>
                    <h1 className="ml-2">Estatus de atención</h1>
                </article>
                </Link>

                <article className="flex items-center ml-[5%] mr-[5%] mb-[5px] rounded-lg  p-[10px] cursor-pointer border-2 border-transparent hover:border-double hover:bg-blue-900">
                    <img src={`${aplicacion.src}`} alt="Personas" className="w-[2em] h-[2em]"/>
                    <h1 className="ml-2">Categoría de problematica</h1>
                </article>
                <article className="flex items-center ml-[5%] mr-[5%] mb-[5px] rounded-lg  p-[10px] cursor-pointer border-2 border-transparent hover:border-double hover:bg-blue-900">
                    <img src={`${lista.src}`} alt="Personas" className="w-[2em] h-[2em]"/>
                    <h1 className="ml-2">Reportes</h1>
                </article>
            </section>
        </>
    )
}