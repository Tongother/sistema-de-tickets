"use client";
import Image from "next/image";
import lampOn from "@/public/lamparaON.svg";
import lampOFF from "@/public/lamparaOFF.svg";
import Dedicacion from "@/public/Dedicacion.jpg";
import Calidad from "@/public/Calidad.jpg";
import Intuitivo from "@/public/Intuitivo.jpg";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";


export default function ElementsMainPage() {
    
    const [lamp, setLamp] = useState([lampOFF, lampOFF, lampOFF]);
    const [textPhoto, setTextPhoto] = useState(["opacity-60", "opacity-60", "opacity-60"]);

    const [infoPhotos, setInfoPhotos] = useState([
        {PhotoTitle: "Dedicación", icon: lamp[0], textPhoto: "opacity-60", src: Dedicacion.src},
        {PhotoTitle: "Calidad", icon: lamp[1], textPhoto: "opacity-60", src: Calidad.src},
        {PhotoTitle: "Intuitivo", icon: lamp[2], textPhoto: "opacity-60", src: Intuitivo.src},
      ]);
      
      useEffect(() => {
        setInfoPhotos([
          {PhotoTitle: "Dedicación", icon: lamp[0], textPhoto: textPhoto[0], src: Dedicacion.src},
          {PhotoTitle: "Calidad", icon: lamp[1], textPhoto: textPhoto[1], src: Calidad.src},
          {PhotoTitle: "Intuitivo", icon: lamp[2], textPhoto: textPhoto[2], src: Intuitivo.src},
        ]);
      }, [lamp, textPhoto]);
      
      const handleLampOn = (i:number) => {
        const updatedLamp = lamp.map((value, index) => {
          if (index === i) {
            return lampOn;
          } else {
            return lampOFF;
          }
        });
        const updatedTextPhoto = textPhoto.map((value, index) => {
          if (index === i) {
            return "opacity-100";
          } else {
            return "opacity-60";
          }
        });
        setLamp(updatedLamp); 
        setTextPhoto(updatedTextPhoto);
      }
      
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
      
      const imgMotion = {
        rest: {
          opacity: 0,
        },
      
        visible: {
          opacity: 1,
          transition: {
            duration: 2,
            delay: 0.1,
            ease: [0, 0.71, 0.2, 1.01]
          }
        },
      
        hover: {
          scale: 1.02,
          zIndex: 1,
          transition: {
            duration: 0.2,
            type: "tween",
            ease: "easeOut"
          }
        }
      };
    
    
    return (
        <section className="flex justify-center h-[92.5vh]">
        {infoPhotos.map((info, i)=>(
          <motion.article className="relative w-[33.11%] bg-black h-full" key={i} variants={imgMotion} 
          initial="rest" animate="visible" whileHover="hover">
            <Image src={info.src} alt="Logo" fill={true} quality={100} onMouseOver={()=>handleLampOn(i)} 
            onMouseOut={()=>{setLamp([lampOFF, lampOFF, lampOFF]); 
            setTextPhoto(["opacity-60", "opacity-60", "opacity-60"])}} 
            className="opacity-80 hover:opacity-100 cursor-pointer" style={{maskImage: "linear-gradient(black 80%, transparent)"}}/>
            <div className="w-full h-0 absolute">
              <div className="flex flex-col items-center">
                <Image src={info.icon} alt="Logo" quality={1} width={80} height={80} className="rotate-180"/>
                <h1 className={`text-5xl mt-[-1em] ${info.textPhoto} text-white`}>{info.PhotoTitle}</h1>
              </div>
            </div>
          </motion.article>
        ))}
        </section>
    );
}