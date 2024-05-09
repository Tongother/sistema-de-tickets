import Link from "next/link";
export default function cliente(){
    return(
        <section className="w-[80%] bg-slate-0 container m-auto">
            <div className="w-full h-[10%] flex items-center">
                <h1 className="w-[12.2em] m-auto text-2xl ">¿Qué problema presenta?</h1>
            </div>
            <div className="w-full m-auto px-10 py-10 grid grid-cols-3 gap-9 text-lg">
                <Link href='\cliente\crearTicket\Olvide mi contraseña'>
                    <article className="bg-slate-200 rounded-3xl shadow-lg p-8 hover:bg-slate-300 flex">
                        <h4>Olvidé mi contraseña</h4>
                    </article>
                </Link>
            </div>
        </section>
    );
}