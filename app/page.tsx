"use client"

import { motion, easeIn, easeInOut, easeOut } from "framer-motion"
import React, { useEffect, useState, useRef } from "react";
import Lenis from 'lenis'
import Image from "next/image";

import Navbar from "@components/Navbar";
import down from "@assets/down.svg"

export default function Home() {
    const lenisRef = useRef<Lenis | null>(null);

    useEffect(() => {
        window.scrollTo(0, 0);
        const lenis = new Lenis()
        lenisRef.current = lenis;
        
        function raf(time: number) {
            lenis.raf(time)
            requestAnimationFrame(raf)
        }
        requestAnimationFrame(raf)

        return () => {
            lenis.destroy();
        }
    }, [])

    const handleScrollTo = (e: React.MouseEvent<HTMLAnchorElement>, target: string) => {
        e.preventDefault();
        const element = document.querySelector(target);
        if (element instanceof HTMLElement && lenisRef.current) {
            lenisRef.current.scrollTo(element);
        }
    }

    return (
        <div className="bg-w-da-wallpaper w-screen">
            <Navbar />
            <div className="w-screen h-[80vh]"></div>
            <div className="w-screen flex flex-col items-center">
                <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 2.5, duration: 1, ease: easeInOut }} className="">
                <a href="#down" onClick={(e) => handleScrollTo(e, "#down")}>
                    <Image src={down} alt="" className="w-[40px]" />
                </a>
                </motion.div>
                {/* <motion.div initial={{ y: 50, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 1.8, duration: 1, ease: easeInOut }} className="">
                </motion.div> */}
            </div>
            <div id="down" className="w-screen h-[15vh]"></div>
            <div className="w-screen p-10 text-[#e9ebec] text-[4vw] bricolage-500 leading-[0.9]">
                <div className="bg-[#34383c] hover:bg-[#4c5257] max-w-[250px] min-h-[60px] duration-300 mb-5 py-3 px-4 rounded-full cursor-pointer flex justify-around items-center"><div className="relative ml-4 flex justify-center items-center"><motion.div initial={{ opacity: 0, scale: 0.7 }} animate={{ opacity: [0, 1, 0], scale: 1 }} transition={{ delay: 0, duration: 1, ease: easeInOut, repeat: Infinity }} className="absolute rounded-full min-w-[23px] min-h-[23px] bg-[#1c5e1d] flex justify-center items-center"></motion.div><div className="z-10 rounded-full min-w-[15px] min-h-[15px] bg-[#38c13b]"></div></div><button type="button" className="text-[#e9ebec] text-[1rem] bricolage-500 w-full h-full">Available for Work</button></div>
               <span className="text-[#646b73] mr-2"> I'm Lucas Hagfoss — a user</span><span className="">experience & interface designer <span className="text-[#646b73] mr-1">from Norway, focusing on building functional websites that will</span> increase conversion <span className="text-[#646b73] mr-1">and help</span> reach customers.</span>
            </div>
            <div className="w-screen my-[30px] pl-10 text-[#e9ebec] text-[4vw] bricolage-500"><span className="text-[#646b73] mr-2">Latest</span> Projects</div>
            <div className="w-screen h-screen">
                <div className="relative translate-x-[-50%] left-[50%] w-[97vw] h-[100vw] grid grid-cols-9 grid-rows-3 gap-5">
                    <div className="border col-span-6 rounded-[3vw] overflow-hidden"></div>
                    <div className="border col-span-3 rounded-[3vw] overflow-hidden"></div>
                    <div className="border col-span-4 rounded-[3vw] overflow-hidden"></div>
                    <div className="border col-span-5 row-span-2 rounded-[3vw] overflow-hidden"></div>
                    <div className="border col-span-2 rounded-[3vw] overflow-hidden"></div>
                    <div className="border col-span-2 rounded-[3vw] overflow-hidden"></div>
                </div>
            </div>
            <div className="w-screen h-screen flex flex-col justify-between">

            </div>
        </div>
    );
}
