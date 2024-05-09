import Link from "next/link";
import Image from "next/image";
import factura from "/public/factura.png";
import bases from "/public/bases.png";
import pagina from "/public/sitio-web.png";
export default function cliente(){
    return(
        <section className="h-full w-full flex flex-col items-center mt-10">
            <div className="h-[5%] mb-[50px]">
                <h1 className="text-3xl ">Productos</h1>
            </div>
            <div className="w-full h-[90%] m-auto px-[70px] grid grid-cols-3 grid-rows-1 gap-9 text-lg justify-center">
                <Link href='\cliente\crearTicket\sistema tickets' className="w-full rounded-md shadow-lg p-8 hover:bg-slate-300 text-center flex flex-col justify-start h-[325px]">
                    <article>
                        <h4 className='mb-5' >Sistema de tickets</h4>
                        <div className="h-[200px] ml-8">
                            <Image src={`${factura.src}`} width={200} height={200} alt=""/>
                        </div>
                    </article>
                </Link>
                <Link href='\cliente\crearTicket\WindBase' className="w-full rounded-md shadow-lg p-8 hover:bg-slate-300 text-center flex flex-col justify-start h-[325px]">
                    <article>
                        <h4 className='mb-5'>WindBase</h4>
                        <div className="h-[200px] ml-8">
                            <Image src={`${bases.src}`} width={200} height={200} alt=""/>
                        </div>
                    </article>
                </Link>
                <Link href='\cliente\crearTicket\WindPage' className="w-full rounded-md shadow-lg p-8 hover:bg-slate-300 text-center flex flex-col justify-start h-[325px]">
                <article>
                        <h4 className='mb-5' >WindPage</h4>
                        <div className="h-[200px] ml-8">
                            <Image src={`${pagina.src}`} width={200} height={200} alt=""/>
                        </div>
                    </article>
                </Link>
            </div>
        </section>
    );
}