import factura from "/public/factura.png";
import profile from "/public/profile.png";
import server from "/public/server.png";
import Products from "@/components/Products";
import netw from "@/public/network .png";
import clock from "@/public/clock.png";
import bug from "@/public/bug.png";
export default function cliente(){
    return(
        <section className="h-full w-full flex flex-col items-center">
            <div className="w-full h-[20%] flex justify-center items-center">
                <h1 className="text-3xl ">Problemáticas</h1>
            </div>
            <div className="w-full h-[80%] grid grid-cols-4 grid-rows-[320px] gap-9 px-9">
                <Products product="Problema de red" iconSrc={`${netw.src}`}/>
                <Products product="Tiempos de respuesta lentos" iconSrc={`${clock.src}`}/>
                <Products product="Detalles de mi cuenta" iconSrc={`${profile.src}`}/>
                <Products product="Encontré un bug" iconSrc={`${bug.src}`}/>
                <Products product="Fallo de servidor" iconSrc={`${server.src}`}/>
            </div>
        </section>
    );
}