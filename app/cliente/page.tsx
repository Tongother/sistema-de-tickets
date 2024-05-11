import factura from "/public/factura.png";
import bases from "/public/bases.png";
import pagina from "/public/sitio-web.png";
import Products from "@/components/Products";
export default function cliente(){
    return(
        <section className="h-full w-full flex flex-col items-center">
            <div className="w-full h-[20%] flex justify-center items-center">
                <h1 className="text-3xl ">Productos</h1>
            </div>
            <div className="w-full h-[80%] grid grid-cols-3 grid-rows-[320px] gap-9 px-9">
                <Products product="Sistema de Tickets" iconSrc={`${factura.src}`}/>
                <Products product="WindBase" iconSrc={`${bases.src}`}/>
                <Products product="WindPage" iconSrc={`${pagina.src}`}/>
            </div>
        </section>
    );
}