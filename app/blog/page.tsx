"use client";
import HeaderMainPage from "@/components/HeaderMainPage";
import Footer from "@/components/Footer";
import { FlyoutLink } from "@/components/FlyoutLink";
import { motion, useMotionValueEvent, useScroll } from "framer-motion";
import { useState } from "react";
import Image from "next/image";
import imagen1 from "@/public/tarea1.jpeg";
import imagen2 from "@/public/tarea2.jpeg";
import Link from "next/link";

export default function Blog(){

    const { scrollY } = useScroll();

    const [hidden, setHidden] = useState(false);

    useMotionValueEvent(scrollY, "change", (latest) => {
        const previous = scrollY.getPrevious();
        if (previous !== undefined && latest > previous && latest > 150) {
            setHidden(true);
        }else {
            setHidden(false);
        }
    });

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
                            <h1 className="text-white text-2xl">WindCodeBlogs</h1>
                        </div>
                        <div className="flex items-center">
                            <ul className="flex">
                                <li className="text-white mx-2"><FlyoutLink href="/blog#sociologico" FlyoutColor="bg-white" FlyoutColorText="hover:text-violet-400">¿Qué es un estudio sociologico?</FlyoutLink></li>
                                <li className="text-white mx-2"><FlyoutLink href="/blog#etnografico" FlyoutColor="bg-white" FlyoutColorText="hover:text-violet-400">¿Qué es un estudio etnográfico?</FlyoutLink></li>
                                <li className="text-white mx-2"><FlyoutLink href="/blog#axiologicos" FlyoutColor="bg-white" FlyoutColorText="hover:text-violet-400">¿Qué es un estudio axiológicos?</FlyoutLink></li>
                                <li className="text-white mx-2"><FlyoutLink href="/blog#conclusiones" FlyoutColor="bg-white" FlyoutColorText="hover:text-violet-400">Conclusiones</FlyoutLink></li>
                                <li className="text-white mx-2"><FlyoutLink href="/blog#bibliografia" FlyoutColor="bg-white" FlyoutColorText="hover:text-violet-400">Bibliografia</FlyoutLink></li>
                            </ul>
                        </div>
                    </div>
                </motion.header>
            </div>
            <div className="p-12">
                <h1 className=" text-4xl font-semibold">
                    Estudios sociológicos y los efectos en el desempeño de las organizaciones
                </h1>
                <h2 className=" mt-12 text-3xl font-semibold underline underline-offset-8" id="sociologico">
                    ¿Qué es un estudio sociológico?
                </h2>
                <p className=" mt-4 text-xl">
                    Es un estudio en el que se centra en la forma en la que se relaciona la empresa con los distintos miembros que la integran, así como la relación de estos con la misma. De esta forma, la sociología de la empresa intenta encontrar la explicación a la existencia de un orden en la misma mediante el consenso entre las partes.
                </p>
                <div className="flex justify-center items-center w-full h-[70vh]">
                    <div className="relative w-[80%] h-[60vh]">
                        <Image src={imagen1.src} alt="3 Personas con traje platicando" fill={true}/>
                    </div>
                </div>
                <h2 className=" mt-12 text-2xl font-semibold">
                    Origen de la sociología de la empresa
                </h2>
                <p className=" mt-4 text-xl">
                La sociología de la empresa se gesta con los problemas surgidos durante el siglo XIX, como la pobreza, la urbanización, la lucha de clases y los conflictos políticos que emanan de estos. Ha sido, por así decirlo, la sucesora de la sociología industrial.
                Con el transcurso del tiempo va incrementando su espectro de análisis, adaptándose a los problemas de la sociedad moderna. Así, esta nace cuando se descubre que la racionalización y estandarización en los procesos productivos no siempre generan resultados que puedan ser previsibles o estables. Lo anterior se observa cuando dentro de distintas empresas con la existencia de organigramas y procesos relativamente equiparables–, aún existen diferencias en la productividad. Lo cual se atribuye a diferencias en el clima organizacional, la cultura e incluso el propio estilo de liderazgo.
                </p>
                <h2 className=" mt-12 text-2xl font-semibold">
                    Características de la Sociología de la empresa
                </h2>
                <p className=" mt-4 text-xl">
                La sociología de la empresa puede ser analizada como una crítica a las relaciones dentro de una dinámica de trabajo en una estructura meramente capitalista, que fue como se originó esta disciplina. Sin embargo, también puede ser examinada para mejorar las relaciones entre todos los individuos que intervienen dentro de una organización, sin modificar las jerarquías de poder.
                </p>
                <h2 className=" mt-12 text-2xl font-semibold">
                    Fundamentos de los estudios sociológicos y sus efectos en el desempeño de WindCode
                </h2>
                <p className=" mt-4 text-xl">
                <span className="font-semibold">Cultura organizacional:</span> WindCode promueve una cultura basada en la excelencia, la colaboración, la pasión y la innovación. Los estudios sociológicos nos han ayudado a comprender la importancia de una cultura organizacional sólida para el éxito de la empresa. Al fomentar una cultura de respeto, confianza y trabajo en equipo, hemos logrado mejorar la satisfacción laboral de nuestros empleados y aumentar su compromiso con los objetivos de la empresa.
                <span className="font-semibold"><br/><br/>Diversidad e inclusión:</span> Los estudios sociológicos nos han mostrado la importancia de la diversidad en el lugar de trabajo. En WindCode, valoramos la diversidad de ideas, perspectivas y experiencias, ya que creemos que esto nos hace más creativos e innovadores. Al promover la inclusión y la igualdad de oportunidades, hemos creado un ambiente donde todos los empleados se sienten valorados y pueden contribuir al máximo de su potencial.
                <span className="font-semibold"><br/><br/>Estructura organizacional:</span> Los estudios sociológicos nos han ayudado a comprender la importancia de una estructura organizacional eficiente y adaptable. En WindCode, hemos diseñado una estructura organizacional flexible que nos permite adaptarnos rápidamente a los cambios del mercado y aprovechar nuevas oportunidades. Esto nos ha permitido mantenernos ágiles y competitivos en un entorno empresarial en constante evolución.
                <span className="font-semibold"><br/><br/>Relaciones laborales:</span> Los estudios sociológicos nos han enseñado la importancia de las relaciones laborales saludables en el éxito de una empresa. En WindCode, promovemos la comunicación abierta, la colaboración y el trabajo en equipo. Esto ha creado un ambiente laboral donde se fomenta el compañerismo, se resuelven los conflictos de manera constructiva y se fortalecen las relaciones entre los empleados.
                <span className="font-semibold"><br/><br/>Responsabilidad social empresarial:</span> Los estudios sociológicos nos han sensibilizado sobre la importancia de la responsabilidad social empresarial. En WindCode, nos comprometemos a contribuir positivamente a la sociedad y al medio ambiente. Participamos en iniciativas de voluntariado, apoyamos causas sociales y adoptamos prácticas sostenibles en nuestras operaciones. Esto no solo nos ayuda a mejorar nuestra reputación como empresa, sino que también nos permite tener un impacto positivo en la comunidad.
                </p>
                <h2 className="mt-12 text-3xl font-semibold underline underline-offset-8" id="etnografico">
                    ¿Qué es un estudio etnográfico?
                </h2>
                <p className="mt-4 text-xl">
                    <span className="font-semibold">Etnografía:</span> definida por Páramo y Ramírez (2017) como “método científico de la antropología cultural, base de todos los esfuerzos de investigación dirigidos a comprender la complejidad de los comportamientos asumidos por los diferentes agentes del mercado” (p. 265).
                </p>
                <p className="mt-4 text-xl">
                    <span className="font-semibold">Método etnográfico:</span> “estudia, analiza y comprende significados simbólicos implícitos en el accionar humano y en las interacciones que se construyen en las prácticas comerciales cotidianas” (Páramo y Ramírez, 2017, p. 35), o como lo propone Frake en Morse (1994) “… que nos permite conocer cómo la gente puede ver su mundo experiencial desde la forma como ellos nos hablan acerca de él” (Moreno, 2005, p. 75).
                </p>
                <p className="mt-4 text-xl">
                    <span className="font-semibold">Investigación etnográfica:</span> El método más popular para analizar y enfatizar las cuestiones descriptivas e interpretativas de un ámbito sociocultural concreto… al estudio directo de personas y grupos durante un cierto período, utilizando la observación participante o las entrevistas para conocer su comportamiento social. (Giddens en Murillo & Martínez-Garrido, 2010, p. 2).
                </p>

                <div className="flex justify-center items-center w-full h-[70vh]">
                    <div className="relative w-[80%] h-[60vh]">
                        <Image src={imagen2.src} alt="3 Personas con traje platicando" fill={true}/>
                    </div>
                </div>

                <h2 className=" mt-12 text-3xl font-semibold">
                    Origen
                </h2>
                <p className="mt-4 text-xl">
                    Se originó dada la necesidad de enriquecer la comprensión del comportamiento de los consumidores conociendo un contexto global de la vida de las personas desde sus acciones y vivencias sin restringirse a lo que el informante quisiera compartir. Por ejemplo: entender lo que significa y afecta a una persona que en su cotidianidad de compra lo hace con frío o con hambre, o que varía si se hace con tiempo o si se hace sin tiempo; o lo que significa una identidad social y unas relaciones sociales al compartir el disfrute de consumir ciertos productos o bienes y servicios a nivel físico (Boivin, Rosato & Arribas en Guglielmucci, 2015). Así que para describir y analizar conductas de compra y consumo de grupos o comunidades, se requiere comprender los procesos culturales que las enmarca incluyendo creencias, mitos, significados, ritos, normas, entre otras (Salgado-Lévano, 2007).
                </p>
                <h2 className=" mt-12 text-3xl font-semibold">
                    Estudios etnográficos en WindCode
                </h2>
                <p className="mt-4 text-xl">
                    Los estudios etnográficos en WindCode se centran en comprender las dinámicas culturales y sociales dentro de la empresa, así como en investigar cómo estas influencias afectan el desempeño organizacional y la satisfacción de los empleados. A través de observaciones participativas, entrevistas y análisis de datos, hemos podido identificar patrones de comportamiento, valores compartidos y prácticas culturales que contribuyen al éxito de WindCode.
                </p>
                <h2 className=" mt-12 text-3xl font-semibold underline underline-offset-8" id="axiologicos">
                    ¿Qué es un estudio axiológicos?
                </h2>
                <p className="mt-4 text-xl">
                    Cuando hablamos de los valores nos referimos a nuestros principios bien dicho como decía Benito Juárez García “el respeto al derecho ajeno es la paz” ese adagio se implementó en su época hubo buena organización de parte de él no existía tanta malevolencia como lo que estamos viviendo en el presente la causa de todo esto es de que se nos fueron los valores positivos e implementamos los valores negativos que fue la desgracia de nuestro México gracias a los valores negativos la organización como bien he dicho la organización no solo se trata de una empresa si no de nuestro entorno social, esto ha generado el problema de la nación en global hablando estadísticamente y aterrizando en la problemática del aborto, prostitución, delincuencia, migración, el crimen organizado, secuestro en fin un sin números de problemas en México, el énfasis de nuestra nación es que se fueron los valores positivos y porque por una mala organización de parte de nuestra cabecilla presidencial, porque me pregunto, se acabó los valores por la misma razón que hay tanta injusticia en la humanidad, escuchamos decir a periodistas, periódicos que se enfocan mucho a la política que si ya se robaron tantos millones de pesos, etc. Ahí fue donde se terminaron los valores positivos y vinieron los valores negativos.
                </p>
                <h2 className=" mt-12 text-3xl font-semibold">
                    Aplicación de la axiología dentro de las organizaciones
                </h2>
                <p className="mt-4 text-xl">
                    Cuando hablamos de axiología bien entendemos por valores positivos y negativos, para que una organización funcione bien debemos concientizar a la humanidad sobre los valores que existen aun sabiendo que los valores negativos son las desgracias de nuestras vidas es la que más implementamos y llevamos a cabo. Según en su teoría del arte de la guerra de Sun tzu. Dice un adagio “que todo lo que digas será usado en tu contra” a veces llegamos a confiar tanto en las personas que hasta llegamos a pensar que es más que un amigo, mas sin embargo con el menor disgusto que tengamos, empezamos atacar a las persona con todas esas cosas que nos confió.
                </p>
                <h2 className=" mt-12 text-3xl font-semibold">
                    Estudios etnográficos en WindCode
                </h2>
                <p className="mt-4 text-xl">
                Los estudios axiológicos en WindCode se enfocan en los valores fundamentales que guían nuestras acciones y decisiones como empresa. Hemos identificado los siguientes valores axiológicos que son fundamentales para nuestra organización:
                </p>
                <p className="mt-4 text-xl"><span className="font-semibold">Excelencia:</span> Nos esforzamos por alcanzar la excelencia en todo lo que hacemos, desde el desarrollo de software hasta la atención al cliente. Buscamos la perfección y la calidad en cada aspecto de nuestro trabajo.</p>
                <p className="mt-4 text-xl"><span className="font-semibold">Colaboración:</span> Valoramos la colaboración y el trabajo en equipo. Creemos que juntos podemos lograr más y superar cualquier desafío que se nos presente.</p>
                <p className="mt-4 text-xl"><span className="font-semibold">Pasión:</span> Estamos apasionados por la tecnología y el desarrollo de software. Nos emociona innovar y encontrar soluciones creativas para nuestros clientes.</p>
                <p className="mt-4 text-xl"><span className="font-semibold">Innovación:</span> Nos comprometemos a ser líderes en la industria mediante la adopción de nuevas tecnologías y la búsqueda constante de la innovación. Buscamos crear soluciones que tengan un impacto positivo en nuestros clientes y en la sociedad en general.</p>
                <p className="mt-4 text-xl"><span className="font-semibold">Responsabilidad:</span> Nos comprometemos a actuar con responsabilidad en todas nuestras acciones y decisiones. Valoramos la ética empresarial y nos esforzamos por hacer lo correcto en todo momento.</p>
                <h2 className="mt-12 text-3xl font-semibold underline underline-offset-8" id="conclusiones">
                    Conclusiones
                </h2>
                <p className="mt-4 text-xl">
                    Los estudios sociológicos, etnográficos y axiológicos son herramientas fundamentales para comprender las dinámicas culturales, sociales y de valores dentro de una organización. En WindCode, hemos aplicado estos estudios para mejorar la cultura organizacional, promover la diversidad e inclusión, diseñar una estructura organizacional eficiente, fortalecer las relaciones laborales y fomentar la responsabilidad social empresarial.
                    Nuestro equipo de trabajo ha realizado un análisis profundo y ha colocado sus conclusiones en el siguiente archivo. ¡Animate a conocer más acerca de la perspectiva de nuestro personal!
                </p>
                <FlyoutLink href="conclusiones.pdf" FlyoutColor="bg-black" FlyoutColorText="hover:text-violet-600"><p className="font-semibold mt-4 text-xl">Conclusiones.pdf</p></FlyoutLink>
                <h2 className="mt-12 text-3xl font-semibold underline underline-offset-8" id="bibliografia">
                    Referencias bibliográficas
                </h2>
                <ul className="mt-4 text-xl list-disc list-inside flex flex-col gap-4">
                    <li>Ivette, A. (2021). Sociología de la empresa. <span className="italic">Economipedia.com. </span><Link href="https://economipedia.com/definiciones/sociologia-de-la-empresa.html" className="text-indigo-400">https://economipedia.com/definiciones/sociologia-de-la-empresa.html</Link>. Consultado el 07 de mayo de 2024</li>
                    <li>Equipo editorial. (2024). Sociología. <span className="italic">Concepto.de. </span><Link href="https://concepto.de/sociologia/#:~:text=La%20sociolog%C3%ADa%20es%20la%20ciencia%20social%20dedicada%20al,hist%C3%B3rico%20y%20cultural%20en%20que%20se%20hallan%20insertas." className="text-indigo-400">https://concepto.de/sociologia/</Link>. Consultado el 07 de mayo de 2024</li>
                    <li>Páramo, D., & Ramírez, E. (2017). <span className="italic">Etnomarketing.</span> La dimensión cultural del marketing. Bogotá: Klasse Editorial. Consultado el 07 de mayo de 2024</li>
                    <li>Candelaria, M. (2011). Aplicación de la Axiología dentro de las organizaciones. <Link href="https://www.gestiopolis.com/aplicacion-axiologia-dentro-organizaciones/" className="text-indigo-400">https://concepto.de/sociologia/</Link>. Consultado el 07 de mayo de 2024</li>
                </ul>
            </div>
            <Footer/>
            </div>
    )
}