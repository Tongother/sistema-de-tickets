"use client";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import logoWindCode from "@/public/WindCodeHD.png";
import mountain from "@/public/mountains.png";
import leftChevron from "@/public/chevron-left-24.svg";
import rightChevron from "@/public/chevron-right-24.svg";
import ElementsMainPage from "@/components/ElementsMainPage";
import HeaderMainPage from "@/components/HeaderMainPage";
import { useEffect, useState } from "react";
import Footer from "@/components/Footer";
import MisionImage from "@/public/Mision.jpeg";
import VisionImage from "@/public/vision.jpg";
import ObjetivosImagen from "@/public/Objetivos.png";
import ValoresImagen from "@/public/Valores.jpg";

<link rel="icon" href="/favicon.ico" sizes="any" />

export default function Home() {
//     const handleClick = async() => {
//     const res = await axios.post("/api/client", {
//       nombre: "Gunther",
//       apellido: "Nettel",
//       correo: "nettelgunther",
//       contraseña: "1234"
//     });
//     console.log(res);
//     }


const [objectFlyout, setObjectFlyout] = useState(true);
useEffect(() => {
  const handleOut = () => {
    setObjectFlyout(false);
  }

  setTimeout(handleOut, 3000);
}, []);

const [numeroDeCarrousel, setNumeroDeCarrousel] = useState<number>(0);
const [leftRight, setLeftRight] = useState<boolean>(false);
const [informacionCarrousel, setInformacionCarrousel] = useState<{Titulo: string, texto:string, image:string, extra?:{texto1: string, texto2: string, texto3: string, texto4:string}, extra2?: {titulo1: string, titulo2:string, titulo3: string, titulo4: string}}>(
  { Titulo: "¿Quienes somos?", texto: "Somos una empresa de desarrollo de software que se dedica a la creación de aplicaciones web y móviles, así como también a la creación de páginas web.", image: logoWindCode.src}
);

const infoEstaticaCarrousel = [
  { Titulo: "¿Quienes somos?", texto: "Somos una empresa de desarrollo de software que se dedica a la creación de aplicaciones web y móviles, así como también a la creación de páginas web.", image: logoWindCode.src},
  { Titulo: "Misión", texto: "Desarrollar software de alta calidad, que cumpla todas las exigencias del cliente, mientras nos comprometemos a crear un entorno de trabajo en el que nuestros empleados se sientan valorados, motivados y cómodos para alcanzar su máximo potencial.", image: MisionImage.src},
  { Titulo: "Visión", texto: "Ser reconocidos como la principal empresa de desarrollo de software en Chiapas, siendo el hogar de los mejores talentos en el campo y alcanzando el estatus de líderes en la industria dentro de los próximos cinco años.", image: VisionImage.src},
  { Titulo: "Objetivos", texto:"", image: ObjetivosImagen.src, extra: {texto1: "Desarrollar productos de software de alta calidad que cumplan con los estándares más exigentes de la industria.", texto2: "Ampliar nuestra cartera de clientes y alcanzar una base sólida.", texto3: "Fidelizar y posicionar el mejor talento en el campo del desarrollo de software.", texto4: "Mantener un ambiente de trabajo amigable, de respesto y confianza entre todos los trabajadores."}},
  { Titulo: "Valores", texto: "", image: ValoresImagen.src, extra: {texto1: "Buscamos la perfección en cada línea de código y en cada interacción con nuestros clientes.", texto2: "Fomentamos un ambiente de trabajo inclusivo donde cada miembro del equipo contribuye con su experiencia y perspectiva.", texto3: "Abrazamos el cambio y nos esforzamos por adoptar nuevas tecnologías y metodologías para mejorar continuamente.", texto4: "Nos apasiona la tecnología y estamos dedicados a crear soluciones que impacten positivamente a nuestros clientes y la sociedad."},
  extra2: {titulo1: "Excelencia", titulo2: "Colaboración", titulo3: "Innovación", titulo4: "Pasión"}}
];

useEffect(() => {
  setInformacionCarrousel(infoEstaticaCarrousel[numeroDeCarrousel]);
  setLeftRight(false);
}, [numeroDeCarrousel]);

useEffect(() => {
  setHtmlCarousel(
    <motion.div key={numeroDeCarrousel} initial={{ x: "100%" }}
    variants={{
      none: { x: "0" }, 
      right: { x: "100%" }
    }}
    animate = {leftRight ? "right" : "none"} 
    className="h-[80vh] relative flex justify-around items-center">
    <article className="w-full flex justify-around items-center">
        <Image src={informacionCarrousel.image} alt="Montañas" width={600} height={600}/>
      <div className="w-[40em]">
        <h1 className="mb-[.5em] text-6xl font-bold">{informacionCarrousel.Titulo}</h1>
        
        <p className="text-xl">{informacionCarrousel.texto}</p>
        {informacionCarrousel.extra && (
          <ul className="mt-6 list-disc list-inside flex flex-col gap-4">
            {informacionCarrousel.extra2 && (<h3 className="text-2xl font-semibold">{informacionCarrousel.extra2.titulo1}</h3>)}
            <li className="text-xl">{informacionCarrousel.extra.texto1}</li>
            {informacionCarrousel.extra2 && (<h3 className="text-2xl font-semibold">{informacionCarrousel.extra2.titulo2}</h3>)}
            <li className="text-xl">{informacionCarrousel.extra.texto2}</li>
            {informacionCarrousel.extra2 && (<h3 className="text-2xl font-semibold">{informacionCarrousel.extra2.titulo3}</h3>)}
            <li className="text-xl">{informacionCarrousel.extra.texto3}</li>
            {informacionCarrousel.extra2 && (<h3 className="text-2xl font-semibold">{informacionCarrousel.extra2.titulo4}</h3>)}
            <li className="text-xl">{informacionCarrousel.extra.texto4}</li>
          </ul>
        )}
      </div>
    </article>
  </motion.div>
  );
}, [informacionCarrousel]);

const [htmlCarousel, setHtmlCarousel] = useState(
  <div className="h-[80vh] relative flex justify-around items-center">
    <article className="w-full flex justify-around items-center">
        <Image src={informacionCarrousel.image} alt="Montañas" width={600} height={600}/>
      <div className="w-[40em]">
        <h1 className="mb-[.5em] text-6xl font-bold">{informacionCarrousel.Titulo}</h1>
        <p>{informacionCarrousel.texto}</p>
      </div>
    </article>
  </div>
);

const handleRightImageCarrousel = () => {
  setNumeroDeCarrousel(prevNumero =>{
    let nextNumero = prevNumero + 1;
    if (nextNumero === 5) {
      nextNumero = 0;
    }
    return nextNumero;
  });
}

const handleLeftImageCarousel = () => {

  setNumeroDeCarrousel(prevNumero =>{
    let nextNumero = prevNumero - 1;
    console.log(nextNumero)
    if (nextNumero < 0) {
      nextNumero = 4;
    }
    return nextNumero;
  });
}

  return (
    <div className="overflow-hidden font-outfit">
      <main>
        <motion.section className={`h-[100vh] shadow-inner relative`} style={{backgroundImage: `url('${mountain.src}')`}}
        initial={{opacity:0}} animate={{opacity:1}} transition={{duration: 2, delay: 0, ease: [0, 0.71, 0.2, 1.01]}}> 
        <HeaderMainPage/>
        <div className="absolute inset-y-0 left-0 p-2 ml-6">
            <Image src={logoWindCode.src} alt="Logo" quality={100} width={160} height={160} className="opacity-80 ml-4" />
        </div>
        <article className="w-full h-full flex justify-center items-center">
          <div className="pb-32 relative flex flex-col items-center">
            <motion.h1 className="text-9xl" initial={{opacity:0, y:-20}} 
            animate={{opacity:1, y:0}} transition={{duration: 3, delay: 0.5, ease: [0, 0.71, 0.2, 1.01]}}>
              WindCodeInc
            </motion.h1>
            <AnimatePresence>
            {objectFlyout && <motion.span
                className="absolute top-32 -left-0.5 -right-2 h-[4px]
                origin-left rounded-full bg-black"
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 2, delay: 0.5, ease: "easeOut"}}
                >
            </motion.span>}
            </AnimatePresence>
            <motion.p className="text-center mt-4 text-3xl" initial={{opacity:0}} 
            animate={{opacity:1}} transition={{duration: 4, delay: 2, ease: [0, 0.71, 0.2, 1.01]}}>Construyendo innovadoras soluciones</motion.p>
          </div>
        </article>
        </motion.section>

        <section className="carousel relative" id="Mision">
          {htmlCarousel}
          <motion.article className="absolute left-4 top-1/2" whileHover={{scale: 1.2}} transition={{duration: 0.2, type: "tween", ease: "easeOut"}}>
            <Image src={leftChevron.src} alt="Chevron" width={40} height={40} className="cursor-pointer" onClick={handleLeftImageCarousel}/>
          </motion.article>

          <motion.article className="absolute right-4 top-1/2" whileHover={{scale: 1.2}} transition={{duration: 0.2, type: "tween", ease: "easeOut"}}>
            <Image src={rightChevron.src} alt="Chevron" width={40} height={40} className="cursor-pointer" onClick={handleRightImageCarrousel}/>
          </motion.article>
        </section>

        <ElementsMainPage/>
      </main>
      <Footer/>
    </div>
  );
}
