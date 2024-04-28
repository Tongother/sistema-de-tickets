import { motion, useMotionValueEvent } from "framer-motion";
import Link from "next/link";
import { useScroll } from "framer-motion";
import { useEffect, useState } from "react";

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
const [bgColorNav, setBgColorNav] = useState("rgba(255, 255, 255, 0)");

useMotionValueEvent(scrollY, "change", (latest) => {
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
        <motion.header className="font-medium min-h-[3em] w-full bg-transparent flex justify-end fixed z-10"
        variants={{
            visible: { y: 0, backgroundColor: bgColorNav},
            hidden: { y: "-100%" }
        }}
        animate={hidden ? "hidden" : "visible"}>
        <nav className="p-[2em] w-[24em]">
          <ul className="flex justify-between">
            <motion.li variants={arrayTextMotion[0]} initial="rest" animate="visible" whileHover="hover" className="">
              <a href="/" className="hover:underline hover:decoration-solid hover:text-black z-10">Home</a>
            </motion.li>
            <motion.li variants={arrayTextMotion[1]} initial="rest" animate="visible" whileHover="hover">
              <a href="/about" className="hover:underline hover:decoration-solid hover:text-black z-10">About</a>
            </motion.li>
            <motion.li variants={arrayTextMotion[2]} initial="rest" animate="visible" whileHover="hover">
              <a href="/contact" className="hover:underline hover:decoration-solid hover:text-black z-10">Contact</a>
            </motion.li>
            <motion.li variants={arrayTextMotion[3]} initial="rest" animate="visible" whileHover="hover">
              <a href="/contact" className="hover:underline hover:decoration-solid hover:text-black z-10">Soporte</a>
            </motion.li>
          </ul>
        </nav>
        <div className="p-[2em] w-[12em] mr-[2em]">
          <ul className="flex justify-between">
            <motion.li variants={arrayTextMotion[4]} initial="rest" animate="visible" whileHover="hover">
              <Link href="/login" className="hover:underline hover:decoration-solid hover:text-black">Log in</Link>
            </motion.li>
            <motion.li variants={arrayTextMotion[5]} initial="rest" animate="visible" whileHover="hover">
              <Link href="/login?sign=1" className="hover:underline hover:decoration-solid hover:text-black">Sign in</Link>
            </motion.li>
          </ul>
        </div>
      </motion.header>
    );
}