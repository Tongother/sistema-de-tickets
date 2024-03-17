import avatar from "./../../public/avatar.png"
import checkout from "./../../public/lista-de-verificacion.png"
import alert from "./../../public/Alert.png"
export default function cliente(){
    return(
        <div className="h-screen w-screen" >
            <header className="bg-slate-100 w-full min-w-[32em] h-[10%] min-h-[4.5em] flex justify-end shadow-lg">
                <div className="w-[16em] h-full pl-[1.5em] flex items-center cursor-pointer hover:bg-slate-200 min-width-[16em]">
                    <img src={`${avatar.src}`} alt="" className="w-[4em] h-[4em]" />
                    <div className="ml-[10px]">
                        <h1>Nombre del cliente</h1>
                        <p>Usuario</p>
                    </div>
                </div>
            </header>

            <main className="flex h-[90%] min-h-[40.5em] w-[100%] min-w-[32em] ">

                <section className="w-[20%] min-w-[300px] bg-blue-950 text-white">
                    <article className="w-full h-[6em] flex items-center justify-center">
                        <h1 className="text-xl">CLIENTE</h1>
                    </article>

                    <section className="">
                        <article className="flex items-center ml-[5%] mr-[5%] mb-[5px] rounded-lg p-[10px] cursor-pointer border-2 border-transparent hover:border-double hover:bg-blue-900">
                            <img src={`${alert.src}`} alt="Personas" className="w-[2em] h-[2em]"/>
                            <h1 className="ml-2">Reportar problemas</h1>
                        </article>
                        <article className="flex items-center ml-[5%] mr-[5%] mb-[5px] rounded-lg  p-[10px] cursor-pointer border-2 border-transparent hover:border-double hover:bg-blue-900">
                            <img src={`${checkout.src}`} alt="Personas" className="w-[2em] h-[2em]"/>
                            <h1 className="ml-2">Estatus de atención</h1>
                        </article>
                    </section>
                </section>



                <section className="w-[80%] h-full min-h-[40.5em] bg-slate-0 container m-auto">
                    <div className="w-full h-[10%] flex items-center">
                        <h1 className="w-[12.2em] m-auto text-2xl ">¿Qué problema presenta?</h1>
                    </div>
                    <div className="w-full min-w-[50em] h-[90%] m-auto px-10 py-10 grid grid-cols-3 gap-9 text-lg">
                        <article className="bg-slate-200 rounded-3xl shadow-lg p-8 hover:bg-slate-300 flex">
                            <h4>Olvidé mi contraseña</h4>
                        </article>
                        <article className="bg-slate-200 rounded-3xl shadow-lg p-8 hover:bg-slate-300 ">
                            <h4>Olvidé mi correo electrónico</h4>
                        </article>
                        <article className="bg-slate-200 rounded-3xl shadow-lg p-8 hover:bg-slate-300">
                            <h4>Encontré un bug</h4>
                        </article>
                        <article className="bg-slate-200 rounded-3xl shadow-lg p-8 hover:bg-slate-300">
                            <h4>Problemas de conexión con el servidor</h4>
                        </article>
                        <article className="bg-slate-200 rounded-3xl shadow-lg p-8 hover:bg-slate-300">
                            <h4>Tiempos de respuesta lentos</h4>
                        </article>
                        <article className="bg-slate-200 rounded-3xl shadow-lg p-8 hover:bg-slate-300">
                            <h4>Otros</h4>
                        </article>  
                    </div>
                </section>
            </main>
        </div>
    );
}