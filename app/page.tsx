"use client"

import { motion, easeIn, easeInOut, easeOut } from "framer-motion"
import React, { useEffect, useState } from "react";
import Lenis from 'lenis'
import Image from "next/image";

import Navbar from "@components/Navbar";
import down from "@assets/down.svg"

export default function Home() {

    useEffect( () => {
        window.scrollTo(0, 0);
        const lenis = new Lenis()
        const raf = (time) => {
          lenis.raf(time)
          requestAnimationFrame(raf) 
        }
        requestAnimationFrame(raf) 
    }, [])

    return (
        <div className="bg-w-da-wallpaper w-screen">
            <Navbar />
            <div className="w-screen h-[80vh]"></div>
            <div className="w-screen flex flex-col items-center">
                <motion.div initial={{ y: 50, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 1.7, duration: 1, ease: easeInOut }} className="">
                    <a href="#down"><Image src={down} alt="" className="w-[40px]"></Image></a>
                </motion.div>
                <motion.div initial={{ y: 50, scale: 0.7, opacity: 0 }} animate={{ y: 0, scale: 1, opacity: 1 }} transition={{ delay: 1.8, duration: 1, ease: easeInOut }} className="">
                <div className="bg-[#34383c] hover:bg-[#4c5257] duration-300 mt-10 py-3 px-4 rounded-full cursor-pointer"><button type="button" className="text-[#e9ebec] bricolage-500 w-full h-full">Available for Work</button></div>
                </motion.div>
            </div>
            <div id="down" className="w-screen h-screen"></div>
            <div className="w-screen h-screen flex flex-col justify-between">
                <div className="w-full flex justify-between">
                    <div className="w-[25px] h-[25px] bg-[#e9ebec] rounded-full"></div>
                    <div className="w-[25px] h-[25px] bg-[#e9ebec] rounded-full"></div>
                </div>
                <div className="w-full flex justify-between">
                    <div className="w-[25px] h-[25px] bg-[#e9ebec] rounded-full"></div>
                    <div className="w-[25px] h-[25px] bg-[#e9ebec] rounded-full"></div>
                </div>
            </div>
        </div>
    );
}
