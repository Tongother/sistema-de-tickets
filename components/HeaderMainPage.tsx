import Image from "next/image";
import { motion, useMotionValueEvent } from "framer-motion";
import { useScroll } from "framer-motion";
import { useState } from "react";
import dropDown from "@/public/chevron-down-24.svg";
import { FlyoutLink } from "./FlyoutLink";
import { PricingContent } from "./PricingContent";
import { set } from "firebase/database";

export default function HeaderMainPage() {

let arrayTextMotion = [];
let count = 0;
for(let i = 0.1; count < 7 ; i = i + 0.2){
const textMotion = {
  rest: {
    opacity: 0,
  },

  visible: {
    opacity: 1,
    color: "rgb(107 114 128)",
    transition: {
      duration: 2,
      delay: i,
      ease: [0, 0.71, 0.2, 1.01]
    }
  },
};
arrayTextMotion.push(textMotion);
count++;
}

const { scrollY } = useScroll();

const [hidden, setHidden] = useState(false);
const [fixed, setFixed] = useState("fixed");
const [bgColorNav, setBgColorNav] = useState("rgba(255, 255, 255, 0)");

useMotionValueEvent(scrollY, "change", (latest) => {
    setFixed(latest > 150 ? "top-0" : "fixed");
    const previous = scrollY.getPrevious();
    if (previous !== undefined && latest > previous && latest > 150) {
        setHidden(true);
    }else {
        setHidden(false);
    }
    if(latest < 1){
        setBgColorNav("rgba(255, 255, 255, 0)");
    }else{
        setBgColorNav("rgba(255, 255, 255, .8)");
    }
});


    
    return(
        <motion.header className={`font-medium min-h-[3em] w-full bg-transparent flex justify-end ${fixed} z-10`}
        variants={{
            visible: { y: 0, backgroundColor: bgColorNav},
            hidden: { y: "-100%" }
        }}
        animate={hidden ? "hidden" : "visible"}>
        <nav className="p-[2em] w-[28em]">
          <ul className="flex justify-between">
            <motion.li variants={arrayTextMotion[0]} initial="rest" animate="visible" whileHover="hover" className="">
              <FlyoutLink href="/"> Inicio </FlyoutLink>
            </motion.li>
            <motion.li variants={arrayTextMotion[1]} initial="rest" animate="visible" whileHover="hover">
              <FlyoutLink href="/" FlyoutContent={PricingContent}>
                <span className="flex items-center z-10">
                  Sobre nosotros<Image src={dropDown.src} alt="Drop" width={20} height={20} className="ml-1"></Image>
                </span>
              </FlyoutLink>
            </motion.li>
            <motion.li variants={arrayTextMotion[2]} initial="rest" animate="visible" whileHover="hover">
              <FlyoutLink href="/contacto">Contactanos</FlyoutLink>
            </motion.li>
            <motion.li variants={arrayTextMotion[3]} initial="rest" animate="visible" whileHover="hover">
              <FlyoutLink href="/">Soporte</FlyoutLink>
            </motion.li>
          </ul>
        </nav>
        <div className="p-[2em] w-[16em] mr-[1em]">
          <ul className="flex justify-between">
            <motion.li variants={arrayTextMotion[4]} initial="rest" animate="visible" whileHover="hover">
              <FlyoutLink href="/login">Inicia sesión</FlyoutLink>
            </motion.li>
            <motion.li variants={arrayTextMotion[5]} initial="rest" animate="visible" whileHover="hover">
              <FlyoutLink href="/login?sign=1">Registrate</FlyoutLink>
            </motion.li>
          </ul>
        </div>
      </motion.header>
    );
}