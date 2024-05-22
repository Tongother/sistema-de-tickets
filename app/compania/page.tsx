"use client";
import Image from "next/image";
import HeaderMainPage from "@/components/HeaderMainPage";
import Footer from "@/components/Footer";
import { FlyoutLink } from "@/components/FlyoutLink";
import { motion, useMotionValueEvent, useScroll } from "framer-motion";
import { useState } from "react";
import reunionCompania from "@/public/reunion.jpg";
import FortalezaIcono from "@/public/shield-check.svg";
import OportunidadIcono from "@/public/goal.svg";
import VisualStudioCode from "@/public/studioCode.svg";
import DOimage from "@/public/DOImage.jpg"
import VisualStudio from "@/public/VisualStudio.svg";
import github from "@/public/githubIcon.svg";
import ReactIcon from "@/public/reactIcon.gif";
import gitbashIcon from "@/public/gitbashIcon.svg";
import logoVercel from "@/public/vercelLogo.svg";
import microsoftLogo from "@/public/microsoftLogo.svg";
import Plaza_tecnologia from "@/public/Plaza_tecnologia.jpg";
import MicroChip from "@/public/MicroChipLogo.png";
import mesaReuion from "@/public/mesaReunion.jpg";
import alianza from "@/public/Alianza.jpg";
import manpowerLogo from "@/public/Logo_Manpower.png";
import possgresVercelLogo from "@/public/possgres_Vercel.png";
import corporativoJuridico from "@/public/corporativoChiapas.jpg";
import confianza from "@/public/confianza.png";
import fortalezaIcono from "@/public/fortalezaIcono.png";
import expansion from "@/public/expansion.png";
import desarrolloIcono from "@/public/desarrolloIcono.png";

export default function compania(){

    const { scrollY } = useScroll();

    const [hidden, setHidden] = useState(false);
    const [pausarCarrousel, setPausarCarousel] = useState(false);

    useMotionValueEvent(scrollY, "change", (latest) => {
        const previous = scrollY.getPrevious();
        if (previous !== undefined && latest > previous && latest > 150) {
            setHidden(true);
        }else {
            setHidden(false);
        }
    });

    const logosFrame = {
        hover: {
            scale: 1.1,
            zIndex: 1,
            transition: {
              duration: 0.2,
              type: "tween",
              ease: "easeOut"
            }
        },
    }

    return(
        <div className="overflow-hidden font-outfit">
            <div className="min-h-[6em]">
                <HeaderMainPage/>
            </div>
            <div className="min-h-16">
                <motion.header className="bg-black w-full h-16 fixed z-10"
                variants={{
                    visible: { y: 0},
                    hidden: { y: "-150%" }
                }}
                animate={hidden ? "hidden" : "visible"}>
                    <div className="flex justify-between items-center h-full px-4">
                        <div className="flex items-center">
                            <h1 className="text-white text-2xl">Proceso administrativo</h1>
                        </div>
                        <div className="flex items-center">
                            <ul className="flex">
                                <li className="text-white mx-2"><FlyoutLink href="/compania#Planeacion" FlyoutColor="bg-white" FlyoutColorText="hover:text-violet-400">Planeación estrategica</FlyoutLink></li>
                                <li className="text-white mx-2"><FlyoutLink href="/compania#Planes" FlyoutColor="bg-white" FlyoutColorText="hover:text-violet-400">Planes y acciones</FlyoutLink></li>
                                <li className="text-white mx-2"><FlyoutLink href="/compania#FO" FlyoutColor="bg-white" FlyoutColorText="hover:text-violet-400">FO</FlyoutLink></li>
                                <li className="text-white mx-2"><FlyoutLink href="/compania#Outsourcing" FlyoutColor="bg-white" FlyoutColorText="hover:text-violet-400">Modelo de la administración</FlyoutLink></li>
                                <li className="text-white mx-2"><FlyoutLink href="/compania#Normas" FlyoutColor="bg-white" FlyoutColorText="hover:text-violet-400">Normas y politicas</FlyoutLink></li>
                            </ul>
                        </div>
                    </div>
                </motion.header>
            </div>
            <section className="w-full h-[50vh] relative flex">
                <article className="w-[60%] h-[100%] relative">
                    <Image src={reunionCompania.src} alt="Empresa" fill={true} style={{maskImage: "linear-gradient(to right,black 90%, transparent)"}}></Image>
                </article>
                
                <article className="w-[50%] flex flex-col justify-center items-center">
                    <h1 className="text-5xl">WindCodeInc</h1>
                    <p className="max-w-[30em] mt-4 text-lg"> "Creemos en el poder de la innovación y la determinación. Nos dedicamos a desafiar los límites de la tecnología, impulsados por nuestra pasión y juventud por crear soluciones que no solo satisfagan las necesidades del presente, sino que también inspiren el futuro. En cada línea de código hay mucho esfuerzo detras"<br /><span className=" font-semibold"> - WindCode </span>  </p>
                </article>
            </section>
            <div className="bg-black w-full h-16"></div>

            <section className="w-full flex flex-col items-center" id="Planeacion">
                <h2 className="text-4xl my-4 font-semibold">Planeación estrategica</h2>
                
                <div className="w-full flex flex-col items-center gap-12 mb-16">
                    <div className="w-full max-w-[80%] py-10 flex flex-col items-center bg-violet-50 rounded-xl shadow-lg hover:shadow-2xl">
                        <h3 className="text-3xl mt-2 mb-4">Metodología Ágil</h3>
                        <p className="text-center max-w-[90%] text-xl">En nuestra empresa, hemos adoptado la metodología ágil para optimizar el desarrollo y la entrega de nuestros proyectos de software. 
                        Esta aproximación nos permite responder de manera más eficaz y flexible a los cambios y necesidades de nuestros clientes. </p>
                    </div>

                    <div className="w-full max-w-[80%] py-10 flex flex-col items-center bg-violet-50 rounded-xl shadow-lg hover:shadow-2xl"> 
                        <h3 className="text-3xl mt-2 mb-4">Metodología Ágil Scrum</h3>
                        <p className="text-center max-w-[90%] text-xl">Adoptar Scrum nos ha permitido ser más ágiles y responder mejor a los cambios, incrementando la transparencia y 
                        la colaboración dentro del equipo y con nuestros clientes, lo que se traduce en productos de mayor calidad y una mayor satisfacción del cliente.</p>
                    </div>
                </div>

                <div className="relative w-full flex flex-col items-center overflow-hidden mb-16">
                    <h1 className=" text-3xl mb-4">Proveedores oficiales</h1>
                    <div className="relative h-[18vh] flex gap-[13%] animate-carrousel" style={{ animationPlayState: pausarCarrousel ? "paused" : ""}}>

                        <motion.div variants={logosFrame} whileHover={"hover"} className="h-full ml-[10%] flex items-center justify-center">
                            <Image src={microsoftLogo.src} alt="Microsoft logo" width={100} height={100} className="min-w-[8em] opacity-60 hover:opacity-100" onMouseEnter={() => setPausarCarousel(true)} onMouseLeave={() => setPausarCarousel(false)}/>
                        </motion.div>

                        <motion.div variants={logosFrame} whileHover={"hover"} className="flex items-center justify-center min-w-[12em] h-full">
                            <Image src={logoVercel.src} alt="Vercel Logo" width={200} height={200} className="opacity-60 hover:opacity-100" onMouseEnter={() => setPausarCarousel(true)} onMouseLeave={() => setPausarCarousel(false)}/>
                        </motion.div>

                        <motion.div variants={logosFrame} whileHover={"hover"} className="flex items-center justify-center min-w-[8em] h-full">
                            <Image src={Plaza_tecnologia.src} alt="Plaza tecnologia logo" width={100} height={80} className="opacity-60 hover:opacity-100" onMouseEnter={() => setPausarCarousel(true)} onMouseLeave={() => setPausarCarousel(false)}/>
                        </motion.div>

                        <motion.div variants={logosFrame} whileHover={"hover"} className="flex items-center justify-center min-w-[16em] h-full">
                            <Image src={MicroChip.src} alt="Microchip logo" width={350} height={100} className="opacity-60 hover:opacity-100" onMouseEnter={() => setPausarCarousel(true)} onMouseLeave={() => setPausarCarousel(false)}/>
                        </motion.div>
                        
                        <motion.div variants={logosFrame} whileHover={"hover"} className="h-full flex items-center justify-center">
                            <Image src={microsoftLogo.src} alt="Microsoft logo" width={100} height={100} className="min-w-[8em] opacity-60 hover:opacity-100" onMouseEnter={() => setPausarCarousel(true)} onMouseLeave={() => setPausarCarousel(false)}/>
                        </motion.div>

                        <motion.div variants={logosFrame} whileHover={"hover"} className="flex items-center justify-center min-w-[12em] h-full">
                            <Image src={logoVercel.src} alt="Vercel Logo" width={200} height={200} className="opacity-60 hover:opacity-100" onMouseEnter={() => setPausarCarousel(true)} onMouseLeave={() => setPausarCarousel(false)}/>
                        </motion.div>

                        <motion.div variants={logosFrame} whileHover={"hover"} className="flex items-center justify-center min-w-[8em] h-full">
                            <Image src={Plaza_tecnologia.src} alt="Plaza tecnologia logo" width={100} height={80} className="opacity-60 hover:opacity-100" onMouseEnter={() => setPausarCarousel(true)} onMouseLeave={() => setPausarCarousel(false)}/>
                        </motion.div>

                        <motion.div variants={logosFrame} whileHover={"hover"} className="flex items-center justify-center min-w-[16em] h-full">
                            <Image src={MicroChip.src} alt="Microchip logo" width={350} height={100} className="opacity-60 hover:opacity-100" onMouseEnter={() => setPausarCarousel(true)} onMouseLeave={() => setPausarCarousel(false)}/>
                        </motion.div>
                    </div>
                </div>

                <div className="w-full h-[110vh] flex flex-col items-center">
                    <h3 className="text-3xl mt-2 mb-4">Recursos materiales</h3>
                    <div className="h-[100%] w-full flex justify-evenly flex-wrap max-w-[95%]">
                        <div className="w-[40em] h-[12em] text-black rounded-lg flex justify-evenly items-center shadow-md hover:shadow-xl">
                            <Image src={VisualStudioCode.src} alt="Visual Studio Code" width={70} height={70}/>
                            <div className="w-[70%]">
                                <h4 className="text-xl font-medium">Visual Studio Code</h4>
                                <p className="text-lg">Con su amplia gama de extensiones y características, es una herramienta poderosa para escribir y editar código en varios lenguajes de programación</p>
                            </div>
                        </div>

                        <div className="w-[40em] h-[12em] text-black rounded-lg flex justify-evenly items-center shadow-md hover:shadow-xl">
                            <Image src={github.src} alt="Github" width={70} height={70}/>
                            <div className="w-[70%]">
                                <h4 className="text-xl font-medium">Github</h4>
                                <p className="text-lg">Utilizamos GitHub para mejorar la colaboración entre nuestros equipos de desarrollo, asegurando un flujo de trabajo coherente y eficiente en la creación y mantenimiento de nuestros proyectos de software.</p>
                            </div>
                        </div>

                        <div className="w-[40em] h-[12em] text-black rounded-lg flex justify-evenly items-center shadow-md hover:shadow-xl">
                            <Image src={VisualStudio.src} alt="Visual Studio" width={70} height={70}/>
                            <div className="w-[70%]">
                                <h4 className="text-xl font-medium">Visual Studio</h4>
                                <p className="text-lg">Ofrece gestión de código fuente integrada y depuración avanzada, lo que lo convierte en una plataforma robusta para el desarrollo de software de calidad.</p>
                            </div>
                        </div>

                        <div className="w-[40em] h-[12em] text-black rounded-lg flex justify-evenly items-center shadow-md hover:shadow-xl">
                            <Image src={possgresVercelLogo.src} alt="PostgreSQL logo" width={70} height={70}/>
                            <div className="w-[70%]">
                                <h4 className="text-xl font-medium">PostgreSQL</h4>
                                <p className="text-lg">Cuenta con funciones de seguridad avanzadas para garantizar que tus datos estén seguros y protegidos. Incluye funciones de autenticación, autorización y encriptación de datos.</p>
                            </div>
                        </div>
                        
                        <div className="w-[40em] h-[12em] text-black rounded-lg flex justify-evenly items-center shadow-md hover:shadow-xl">
                            <Image src={ReactIcon.src} alt="React" width={70} height={70} quality={100}/>
                            <div className="w-[70%]">
                                <h4 className="text-xl font-medium">React</h4>
                                <p className="text-lg">Nos permite construir y manejar de manera eficiente grandes aplicaciones web que requieren datos que cambian frecuentemente, asegurando que nuestros productos finales sean tanto robustos como intuitivos.</p>
                            </div>
                        </div>

                        <div className="w-[40em] h-[12em] text-black rounded-lg flex justify-evenly items-center shadow-md hover:shadow-xl">
                            <Image src={gitbashIcon.src} alt="Gitbash" width={70} height={70}/>
                            <div className="w-[70%]">
                                <h4 className="text-xl font-medium">Gitbash</h4>
                                <p className="text-lg">Nos aporta las funciones de gestión de versiones de Git utilizando comandos Unix, facilitando así el desarrollo y mantenimiento de código en proyectos colaborativos.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="relative w-full bg-gray-100 flex flex-col justify-center" id="Planes">
                <h1 className="w-full text-center text-4xl my-6 font-semibold">Planes y acciones</h1>
                <div className="h-[185vh] w-full flex justify-evenly flex-wrap">
                    <div className="w-[25em] h-[40em] text-black rounded-lg flex justify-evenly shadow-md hover:shadow-xl">
                        <div className="w-full flex flex-col items-center p-8 pt-0">
                            <Image src={desarrolloIcono.src} alt="Fortaleza" width={70} height={70} className="my-8"/>
                            <h4 className="text-2xl font-medium mb-3">¡Apostamos por el desarrollo!</h4>
                            <ul className="w-full list-disc flex flex-col items-center gap-4 mt-2 ml-8 text-lg">
                                <li>Tenemos un equipo de investigación y desarrollo dedicado a explorar nuevas tecnologías y tendencias.</li>
                                <li>Implementamos metodologías ágiles, como Scrum, para gestionar de manera eficiente el proceso de desarrollo de productos.</li>
                                <li>Hacemos un llamado la colaboración entre equipos multidisciplinarios para fomentar la creatividad y la innovación.</li>
                            </ul>
                        </div>
                    </div>

                    <div className="w-[25em] h-[40em] text-black rounded-lg flex justify-evenly shadow-md hover:shadow-xl">
                        <div className="w-full flex flex-col items-center p-8 pt-0">
                            <Image src={expansion.src} alt="Fortaleza" width={70} height={70} className="my-8"/>
                            <h4 className="text-2xl font-medium mb-3">Queremos llegar a más gente</h4>
                            <ul className="w-full list-disc flex flex-col items-center gap-4 mt-2 ml-8 text-lg">
                                <li>Estaremos realizando investigaciones de mercado para identificar oportunidades de expansión en mercados emergentes.</li>
                                <li>Planeamos hacer alianzas estratégicas con socios locales o nacionales para facilitar la entrada en nuevos mercados.</li>
                                <li>Mejoraremos constantemente nuestras estrategias de marketing y ventas para llegar a nuevos clientes y aumentar la retención de clientes existentes.</li>
                            </ul>
                        </div>
                    </div>

                    <div className="w-[25em] h-[40em] text-black rounded-lg flex justify-evenly shadow-md hover:shadow-xl">
                        <div className="w-full flex flex-col items-center p-8 pt-0">
                            <Image src={fortalezaIcono.src} alt="Fortaleza" width={70} height={70} className="my-8"/>
                            <h4 className="text-2xl font-medium mb-3 text-center">Ser imperfectos nos hace perfectos</h4>
                            <ul className="w-full list-disc flex flex-col items-center gap-4 mt-2 ml-8 text-lg">
                                <li>Implementaremos herramientas de gestión de proyectos y sistemas de seguimiento para mejorar la planificación y el control de proyectos.</li>
                                <li>Promoveremos la automatización de tareas repetitivas y la adopción de herramientas de colaboración en línea para facilitar la comunicación y el trabajo en equipo.</li>
                                <li>Estableceremos métricas de rendimiento y realizaremos evaluaciones periódicas para monitorear el progreso</li>
                            </ul>
                        </div>
                    </div>

                    <div className="w-[25em] h-[40em] text-black rounded-lg flex justify-evenly shadow-md hover:shadow-xl">
                        <div className="w-full flex flex-col items-center p-8 pt-0 ">
                        <Image src={confianza.src} alt="Confianza" width={70} height={70} className="my-8"/>
                            <h4 className="text-2xl font-medium mb-3">La confianza es nuestro aliado</h4>
                            <ul className="w-full list-disc flex flex-col items-center gap-4 mt-2 ml-8 text-lg">
                                <li>Promovemos un ambiente de trabajo inclusivo y colaborativo que fomente la creatividad, la innovación y el trabajo en equipo.</li>
                                <li>Reconocemos y recompensamos el desempeño excepcional y el compromiso de los empleados.</li>
                                <li>Fomentamos la comunicación abierta y la transparencia en todos los niveles de la organización para promover la confianza y la colaboración.</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            <section className="w-full flex flex-col items-center" id="FO">
                <h1 className="text-3xl my-6 font-semibold">FO</h1>
                <div className="w-full h-[80vh] flex justify-center">
                    <div className="w-[70em] flex justify-center">
                        <div className="w-[50%] h-full flex flex-col items-center mr-14">
                            <Image src={FortalezaIcono.src} alt="Fortalezas" width={50} height={50}/>
                            <h3 className="text-3xl mt-2 mb-4">Fortalezas</h3>
                            <ul className="list-disc flex flex-col gap-4 text-lg">
                                <li><span className="font-medium">Flexibilidad y agilidad:</span> Windcode puede adaptarse rápidamente a los cambios del mercado sin limitaciones organizativas.</li>
                                <li><span className="font-medium">Talento joven y motivado:</span> La asociación con instituciones educativas locales brinda acceso a talento fresco y energético.</li>
                                <li><span className="font-medium">Servicio personalizado:</span> Al ser una empresa nueva, Windcode puede ofrecer atención individualizada y construir relaciones sólidas con los clientes.</li>
                            </ul>
                        </div>
                        <div className="w-[50%] h-full flex flex-col items-center">
                            <Image src={OportunidadIcono.src} alt="Oportunidad" width={50} height={50}/>
                            <h3 className="text-3xl mt-2 mb-4">Oportunidades</h3>
                            <ul className="list-disc flex flex-col gap-4 text-lg">
                                <li><span className="font-medium">Atracción de talento joven:</span> Al ser una empresa joven, puede atraer a otros talentos jóvenes que busquen ambientes de trabajo menos tradicionales y más innovadores.</li>
                                <li><span className="font-medium">Potencial para establecer alianzas estratégicas:</span> Como empresa emergente, tenemos la posibilidad de formar alianzas estratégicas con otras startups o empresas establecidas, creando sinergias que pueden acelerar nuestro crecimiento.</li>
                                <li><span className="font-medium">Uso de tecnologías emergentes: </span> Al ser una empresa recien nacida, la flexibilidad para implementar soluciones basadas en tecnologías emergentes como IA, blockchain, o desarrollos en la nube son variadas.</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            <section className="w-screen bg-gray-100 flex flex-col items-center" id="Outsourcing">
                <div className="relative w-full h-screen">
                    <Image src={mesaReuion.src} alt="Mesa con sillas estilo minimalista" fill={true} style={{maskImage: "linear-gradient(black 10%, transparent)"}}/>
                    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-violet-50 flex flex-col items-center w-[50%] rounded-2xl py-12 shadow-lg hover:shadow-2xl">
                        <h2 className="text-3xl font-medium text-center">Modelo de la administración</h2>
                        <p className="text-lg max-w-[80%] mt-4 text-center">En el competitivo mundo de la tecnología, la capacidad de adaptarse y mejorar constantemente es esencial para mantenerse relevante y competitivo en el mercado. En este sentido, la implementación de prácticas como el outsourcing y el DO se convierten en herramientas clave para impulsar la eficiencia operativa y fomentar la innovación en WindCode.</p>
                    </div>
                </div>
                <div className="relative flex items-center w-screen h-[60vh]">
                    <div className="w-[60%] flex flex-col items-center justify-center gap-10">
                        <h1 className="text-3xl font-medium">Outsoursing</h1>
                        <div className="w-[45em]">
                            <p className="text-center text-lg">El outsourcing es una práctica común en la industria de la tecnología, que consiste en contratar a terceros para realizar tareas específicas o funciones que no forman parte de las competencias centrales de la empresa. Esta estrategia permite a <span className="font-semibold">WindCode</span> centrarse en su misión principal de desarrollar software de calidad, mientras que otras empresas se encargan de tareas como el soporte técnico, la gestión de infraestructuras, o la seguridad de la información.</p>
                        </div>
                        <div className="w-[45em]">
                            <h2 className="text-2xl">Empresas con las que trabajamos el outsourcing:</h2>
                            <div className="w-full flex justify-center mt-6">
                                <Image src={manpowerLogo.src} alt="Manpower logo" width={200} height={100}/>
                                <Image src={possgresVercelLogo.src} alt="PossgresVercel Logo" width={110} height={100} className="mr-28 ml-16"/>
                                <Image src={corporativoJuridico.src} alt="Corporativo Juridico logo" width={125} height={80}/>
                            </div>
                        </div>
                    </div>
                    <div className="relative w-[50%] flex items-center justify-center">
                        <Image src={alianza.src} alt="Alianza" width={700} height={700} quality={100} className="rounded-l-xl shadow-2xl"/>
                    </div>
                </div>

                <div className="relative flex items-center w-screen h-[60vh] my-16">
                    <div className="relative w-[50%] flex items-center justify-center">
                        <Image src={DOimage.src} alt="Alianza" width={700} height={700} quality={100} className="rounded-r-xl shadow-2xl"/>
                    </div>
                    <div className="w-[60%] flex flex-col items-center justify-center gap-10">
                        <h1 className="text-3xl font-medium">DO</h1>
                        <div className="w-[45em]">
                            <p className="text-center text-lg">El Desarrollo Organizacional nos permite adaptarnos de manera proactiva a los cambios del mercado y a las necesidades de nuestros clientes, al tiempo que promueve un ambiente de trabajo colaborativo y orientado al aprendizaje. En <span className="font-semibold">WindCode</span> buscamos el desarrollo de nuestras personas, procesos y estructuras organizativas, optimizando nuestro rendimiento y maximizar el potencial de nuestro equipo. El DO nos ayuda a gestionar el cambio de manera efectiva, facilitando la implementación de nuevas metodologías y prácticas de trabajo, como metodologías ágiles.</p>
                        </div>
                    </div>
                </div>
            </section>

            <section className="relative" id="Normas">
                <div className="w-full flex flex-col items-center">
                    <h1 className="text-4xl mb-6 font-semibold my-6">Normas y Politicas</h1>
                    <div className="bg-violet-50 flex flex-col items-center w-[50%] rounded-2xl py-12 shadow-lg hover:shadow-2xl">
                        <p className="text-lg max-w-[80%] mb-8 text-center">
                        En WindCode, nos comprometemos a liderar con el ejemplo en la industria de la tecnología. Nuestra misión no solo se centra en innovar y desarrollar soluciones de software de vanguardia, sino también en garantizar un ambiente de trabajo ético, seguro y productivo para todos nuestros empleados y colaboradores.
                        Creemos firmemente que el éxito a largo plazo se construye sobre la base de prácticas transparentes y responsables. Por eso, hemos desarrollado un conjunto de normas y políticas diseñadas para guiar nuestras operaciones diarias y las interacciones dentro de nuestra comunidad empresarial. Estas políticas reflejan nuestros valores como empresa y nuestro compromiso con la legalidad, la seguridad, y el respeto mutuo.
                        <br/><br/>Los invitamos a revisar estos documentos para entender mejor cómo operamos y qué esperamos de nuestros empleados, clientes y socios:
                        </p>
                        <FlyoutLink href="Normas_Politicas.pdf" FlyoutColor="bg-black" FlyoutColorText="hover:text-violet-600"><p className="font-semibold">Normas y politicas WindCode.pdf</p></FlyoutLink>
                    </div>
                </div>
            </section>
            <Footer/>
        </div>
    )
}