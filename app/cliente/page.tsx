import Link from "next/link";
export default function cliente(){
    return(
        <section className="w-[80%] h-full min-h-[40.5em] bg-slate-0 container m-auto">
            <div className="w-full h-[10%] flex items-center">
                <h1 className="w-[12.2em] m-auto text-2xl ">¿Qué problema presenta?</h1>
            </div>
            <div className="w-full min-w-[50em] h-[90%] m-auto px-10 py-10 grid grid-cols-3 gap-9 text-lg">
                <Link href='\cliente\crearTicket\Olvide mi contraseña'>
                    <article className="bg-slate-200 rounded-3xl shadow-lg p-8 hover:bg-slate-300 flex">
                        <h4>Olvidé mi contraseña</h4>
                    </article>
                </Link>
                <Link href=''>
                    <article className="bg-slate-200 rounded-3xl shadow-lg p-8 hover:bg-slate-300 ">
                        <h4>Olvidé mi correo electrónico</h4>
                    </article>
                </Link>
                <Link href=''>
                    <article className="bg-slate-200 rounded-3xl shadow-lg p-8 hover:bg-slate-300">
                        <h4>Encontré un bug</h4>
                    </article>
                </Link>
                <Link href=''>
                    <article className="bg-slate-200 rounded-3xl shadow-lg p-8 hover:bg-slate-300">
                        <h4>Problemas de conexión con el servidor</h4>
                    </article>
                </Link>
                <Link href=''>
                    <article className="bg-slate-200 rounded-3xl shadow-lg p-8 hover:bg-slate-300">
                        <h4>Tiempos de respuesta lentos</h4>
                    </article>
                </Link>
                <Link href=''>
                    <article className="bg-slate-200 rounded-3xl shadow-lg p-8 hover:bg-slate-300">
                        <h4>Otros</h4>
                    </article>
                </Link>
            </div>
        </section>
    );
}