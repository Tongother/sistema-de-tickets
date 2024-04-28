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

  return (
    <>
      <main className="font-outfit">
        <motion.section className={`h-[100vh] shadow-inner relative`} style={{backgroundImage: `url('${mountain.src}')`}}
        initial={{opacity:0}} animate={{opacity:1}} transition={{duration: 2, delay: 0, ease: [0, 0.71, 0.2, 1.01]}}> 
        <HeaderMainPage/>
        <div className="absolute inset-y-0 left-0 p-2 ml-6">
            <Image src={logoWindCode.src} alt="Logo" quality={100} width={160} height={160} className="opacity-80 ml-4" />
        </div>
        <article className="w-full h-full flex justify-center items-center">
          <div className="pb-32 relative flex flex-col items-center">
            <motion.h1 className="text-6xl" initial={{opacity:0, y:-20}} 
            animate={{opacity:1, y:0}} transition={{duration: 3, delay: 0.5, ease: [0, 0.71, 0.2, 1.01]}}>
              WindCodeInc
            </motion.h1>
            <AnimatePresence>
            {objectFlyout && <motion.span
                className="absolute top-16 -left-0.5 -right-2 h-[4px]
                origin-left rounded-full bg-black"
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 2, delay: 0.5, ease: "easeOut"}}
                >
            </motion.span>}
            </AnimatePresence>
            <motion.p className="text-center mt-4" initial={{opacity:0}} 
            animate={{opacity:1}} transition={{duration: 4, delay: 2, ease: [0, 0.71, 0.2, 1.01]}}>Construyendo innovadoras soluciones</motion.p>
          </div>
        </article>
        </motion.section>

        <section className="h-[80vh] relative flex justify-around items-center" id="Mision">

          <article>
            <Image src={mountain.src} alt="Montañas" width={600} height={600}/>
          </article>

          <article className="w-[25em]">
            <h1 className="mb-[.5em] text-6xl font-bold">¿Quienes somos?</h1>
            <p>Somos una empresa de desarrollo de software que se dedica a la creación de aplicaciones web y móviles, así como también a la creación de páginas web.</p>
          </article>

          <motion.article className="absolute left-4" whileHover={{scale: 1.2}} transition={{duration: 0.2, type: "tween", ease: "easeOut"}}>
            <Image src={leftChevron.src} alt="Chevron" width={40} height={40} className="cursor-pointer"/>
          </motion.article>

          <motion.article className="absolute right-4" whileHover={{scale: 1.2}} transition={{duration: 0.2, type: "tween", ease: "easeOut"}}>
            <Image src={rightChevron.src} alt="Chevron" width={40} height={40} className="cursor-pointer"/>
          </motion.article>

        </section>

        <ElementsMainPage/>
      </main>
      <footer className="font-medium min-h-[3em] bg-blue-100">
        <p>Footer</p>
      </footer>
    </>
  );
}
