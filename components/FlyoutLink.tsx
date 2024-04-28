import { useState } from "react";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";

interface FlyoutLinkProps {
    children: React.ReactNode;
    href: string;
    FlyoutContent?: any;
}

export const FlyoutLink = ({ children, href, FlyoutContent }:FlyoutLinkProps) => {

    const [open, setOpen] = useState(false);

    let showFlyout = open;
    if(FlyoutContent){
        showFlyout = open && FlyoutContent;
    }

    return(
        <div 
        onMouseEnter={() => setOpen(true)} 
        onMouseLeave={() => setOpen(false)} 
        className="group relative h-fit w-fit hover:text-black">

            <Link href={href} className="relative">
                {children}
                <span style={{transform: showFlyout ? "scaleX(.95)" : "scaleX(0)"}}
                className="absolute -bottom-1 -left-1 -right-2 h-[3px]
                origin-left rounded-full bg-black transition-transform
                duration-300 ease-out">
                </span>
            </Link>
            <AnimatePresence>
                {showFlyout && FlyoutContent && 
                    <motion.div className="absolute left-1/2 top-12 bg-white text-black"
                    initial={{ opacity:0, y: 15 }}
                    animate={{ opacity: 1, y: 0}}
                    exit={{ opacity:0, y: 15 }}
                    style={{ x: "-50%"}}
                    transition={{ duration: 0.3, ease: "easeInOut" }}>
                        <div className="absolute -top-6 left-0 right-0 h-6"/>
                        <div className="absolute left-1/2 top-0 h-4 w-4 -translate-x-1/2 -translate-y-1/2 rotate-45 bg-white"/>
                        <FlyoutContent />
                    </motion.div>}
            </AnimatePresence>
        </div>
    )
}