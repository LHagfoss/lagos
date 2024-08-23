"use client"

import { motion, easeIn, easeInOut, easeOut, AnimatePresence } from "framer-motion"
import React, { useEffect, useState, useRef } from "react";
import Lenis from 'lenis'
import Image from "next/image";

import Navbar from "@components/Navbar";
import down from "@assets/down.svg"
import image1 from "@assets/pexels-pixabay-356056.jpg"
import image2 from "@assets/balls123.jpg"
import image3 from "@assets/IMG_20240822_101225.jpg"
import agder from "@assets/agder.png"
import arrowOut from "@assets/arrowOut.svg"
import clock from "@assets/clock.svg"

export default function Home() {
    const lenisRef = useRef<Lenis | null>(null);
    const [time, setTime] = useState(new Date());

    function openTime() { window.open("https://dayspedia.com/time/online/") }

    useEffect(() => {
        const timer = setInterval(() => {
            setTime(new Date());
        }, 1000);

        return () => {
            clearInterval(timer);
        };
    }, []);
    
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
            <div className="w-screen h-[100vh]"></div>
            <motion.div initial={{ y: 50, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 1.7, duration: 1, ease: easeInOut }} className="select-none">
                <a href="#down" className="m-5 left-0 min-w-[75px] min-h-[75px] flex justify-center items-center bottom-0 absolute bg-[#34383c] hover:bg-[#4c5257] duration-300 rounded-full shadow-xl onTop" onClick={(e) => handleScrollTo(e, "#down")}>
                    <Image src={down} alt="" className="w-[50px]" />
                </a>
            </motion.div>
            <motion.div initial={{ y: 50, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 1.8, duration: 1, ease: easeInOut }} onClick={openTime} className="cursor-pointer text-[1vw] z-10 m-5 right-0 bottom-0 py-3 px-5 gap-2 fixed  bg-[#34383c] hover:bg-[#4c5257] duration-300 rounded-full shadow-xl select-none flex justify-center items-center min-w-[120px]">
                <div className="">
                    <Image src={clock} alt="" className="w-[25px]"></Image>
                </div> 
                <div className="text-[#e9ebec] bricolage-500 flex">
                    <AnimatePresence mode="popLayout">
                        {time.toTimeString().slice(0, 8).split('').map((char, index) => (
                            <motion.span
                                key={`${index}-${char}`}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -20 }}
                                transition={{ duration: 0.2 }}
                            >
                                {char}
                            </motion.span>
                        ))}
                    </AnimatePresence>
                </div>
            </motion.div>
            <div id="down" className="w-screen h-[20vh]"></div>
            <div className="m-5 text-[#e9ebec] text-[4vw] bricolage-500 leading-[0.9]">
                <div className="bg-[#34383c] hover:bg-[#4c5257] max-w-[250px] min-h-[50px] duration-300 mb-5 py-3 px-4 rounded-full cursor-pointer flex justify-around items-center"><div className="relative ml-4 flex justify-center items-center"><motion.div initial={{ opacity: 0, scale: 0.7 }} animate={{ opacity: [0, 1, 0], scale: 1 }} transition={{ delay: 0, duration: 1, ease: easeInOut, repeat: Infinity }} className="absolute rounded-full min-w-[23px] min-h-[23px] bg-[#1c5e1d] flex justify-center items-center"></motion.div><div className="z-10 rounded-full min-w-[15px] min-h-[15px] bg-[#38c13b]"></div></div><button type="button" className="text-[#e9ebec] text-[1rem] bricolage-500 w-full h-full">Available for Work</button></div>
               <span className="text-[#646b73] mr-2"> I'm Lucas Hagfoss — a user</span><span className="">experience & interface designer <span className="text-[#646b73] mr-1">from Norway, focusing on building functional websites that will</span> increase conversion <span className="text-[#646b73] mr-1">and help</span> reach customers.</span>
            </div>
            <div className="my-[30px] m-5 text-[#e9ebec] text-[3vw] bricolage-500"><span className="text-[#646b73] mr-1">My</span> Projects</div>
            <div className="m-5 h-screen">
                <div className="relative h-[100vw] grid grid-cols-9 grid-rows-9 gap-5">
                    <div className="col-span-6 row-span-4 rounded-[70px] overflow-hidden relative group cursor-pointer">
                        <div className="w-full h-full overflow-hidden absolute">
                            <Image src={image3} alt="" className="imageBalls transition-scale duration-500  w-full h-full object-cover" />
                        </div>
                        <div className="w-full h-full absolute p-5 flex items-end">
                            <div className="backdrop-blur-xl bottom-0 bg-[#000000bc] w-full h-[12%] rounded-full group-hover transition-opacity duration-500 flex justify-between items-center">
                                <div className="flex justify-center items-center gap-3 m-6 ml-10">
                                    <Image src={agder} alt="" className="h-[40px] w-[40px]"></Image>
                                    <div className="">
                                        <div className="text-white text-[1.2vw]">Informasjonsteknologi og Medieproduksjon</div>
                                        <div className="text-white text-[.8vw]">Tangen VGS - July 2024</div>
                                    </div>
                                </div>
                                <button type="button" className="m-6 border rounded-full p-5 flex justify-around items-center"><div className="text-white">Learn More</div> <Image src={arrowOut} alt=""></Image></button>
                            </div>
                        </div>
                    </div>
                    <div className="col-span-3 row-span-4 rounded-[70px] overflow-hidden relative group cursor-pointer">
                        <div className="w-full h-full overflow-hidden absolute">
                            <Image src={image1} alt="" className="imageBalls transition-scale duration-500  w-full h-full object-cover" />
                        </div>
                        <div className="w-full h-full absolute p-5 flex items-end">
                            <div className="backdrop-blur-xl bottom-0 bg-[#000000bc] w-full h-[12%] rounded-full group-hover transition-opacity duration-500 flex justify-between items-center">
                                <div className="flex justify-center items-center gap-3 m-6 ml-10">
                                    <Image src={agder} alt="" className="h-[40px] w-[40px]"></Image>
                                    <div className="">
                                        <div className="text-white text-[1.2vw]">Skolearbeid</div>
                                        <div className="text-white text-[.8vw]">Tangen VGS - July 2024</div>
                                    </div>
                                </div>
                                <button type="button" className="m-6 border rounded-full p-5 flex justify-around items-center"><div className="text-white">Learn More</div> <Image src={arrowOut} alt=""></Image></button>
                            </div>
                        </div>
                    </div>
                    <div className="col-span-4 row-span-3 rounded-[70px] overflow-hidden relative group cursor-pointer">
                        <div className="w-full h-full overflow-hidden absolute">
                            <Image src={image2} alt="" className="imageBalls transition-scale duration-500  w-full h-full object-cover" />
                        </div>
                        <div className="w-full h-full absolute p-5 flex items-end">
                            <div className="backdrop-blur-xl bottom-0 bg-[#000000bc] w-full h-[20%] rounded-full group-hover transition-opacity duration-500 flex justify-between items-center">
                                <div className="flex justify-center items-center gap-3 m-6 ml-10">
                                    <Image src={agder} alt="" className="h-[40px] w-[40px]"></Image>
                                    <div className="">
                                        <div className="text-white text-[1.5vw]">Media</div>
                                        <div className="text-white text-[.8vw]">Tangen VGS - July 2024</div>
                                    </div>
                                </div>
                                <button type="button" className="m-6 border rounded-full p-5 flex justify-around items-center"><div className="text-white">Learn More</div> <Image src={arrowOut} alt=""></Image></button>
                            </div>
                        </div>
                    </div>
                    <div className="col-span-5 row-span-5 rounded-[70px] overflow-hidden relative group cursor-pointer">
                        <div className="w-full h-full overflow-hidden absolute">
                            <Image src={image1} alt="" className="imageBalls transition-scale duration-500  w-full h-full object-cover" />
                        </div>
                        <div className="w-full h-full absolute p-5 flex items-end">
                            <div className="backdrop-blur-xl bottom-0 bg-[#000000bc] w-full h-[12%] rounded-full group-hover transition-opacity duration-500 flex justify-between items-center">
                                <div className="flex justify-center items-center gap-3 m-6 ml-10">
                                    <Image src={agder} alt="" className="h-[40px] w-[40px]"></Image>
                                    <div className="">
                                        <div className="text-white text-[1.2vw]">Skolearbeid</div>
                                        <div className="text-white text-[.8vw]">Tangen VGS - July 2024</div>
                                    </div>
                                </div>
                                <button type="button" className="m-6 border rounded-full p-5 flex justify-around items-center"><div className="text-white">Learn More</div> <Image src={arrowOut} alt=""></Image></button>
                            </div>
                        </div>
                    </div>
                    <div className="col-span-2 row-span-2 rounded-[70px] overflow-hidden relative group cursor-pointer">
                        <div className="w-full h-full overflow-hidden absolute">
                            <Image src={image1} alt="" className="imageBalls transition-scale duration-500  w-full h-full object-cover" />
                        </div>
                        <div className="w-full h-full absolute p-5 flex items-end">
                            <div className="backdrop-blur-xl bottom-0 bg-[#000000bc] w-full h-[25%] rounded-full group-hover transition-opacity duration-500 flex justify-between items-center">
                                <div className="flex justify-center items-center gap-3 m-6 ml-10">
                                    <Image src={agder} alt="" className="h-[40px] w-[40px]"></Image>
                                    <div className="">
                                        <div className="text-white text-[1.2vw]">Skolearbeid</div>
                                        <div className="text-white text-[.8vw]">Tangen VGS - July 2024</div>
                                    </div>
                                </div>
                                <button type="button" className="m-6 border rounded-full p-5 flex justify-around items-center"><Image src={arrowOut} alt=""></Image></button>
                            </div>
                        </div>
                    </div>
                    <div className="col-span-2 row-span-2 rounded-[70px] overflow-hidden relative group cursor-pointer">
                        <div className="w-full h-full overflow-hidden absolute">
                            <Image src={image3} alt="" className="imageBalls transition-scale duration-500  w-full h-full object-cover" />
                        </div>
                        <div className="w-full h-full absolute p-5 flex items-end">
                            <div className="backdrop-blur-xl bottom-0 bg-[#000000bc] w-full h-[25%] rounded-full group-hover transition-opacity duration-500 flex justify-between items-center">
                                <div className="flex justify-center items-center gap-3 m-6 ml-10">
                                    <Image src={agder} alt="" className="h-[40px] w-[40px]"></Image>
                                    <div className="">
                                        <div className="text-white text-[1.2vw]">Skolearbeid</div>
                                        <div className="text-white text-[.8vw]">Tangen VGS - July 2024</div>
                                    </div>
                                </div>
                                <button type="button" className="m-6 border rounded-full p-5 flex justify-around items-center"> <Image src={arrowOut} alt=""></Image></button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="w-screen h-[100vh]"></div>
            <div className="w-screen h-[100vh]"></div>
        </div>
    );
}