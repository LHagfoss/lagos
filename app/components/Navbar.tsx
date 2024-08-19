import React, { useState, useEffect } from "react"
import { easeInOut, motion, useAnimation } from "framer-motion"
import Link from "next/link"
import Image from "next/image"

import logo from "@assets/L.png"
import copy from "@assets/copy.svg"

export default function Navbar() {
    const [isScrolled, setIsScrolled] = useState(false)
    const [lastNameOpacity, setLastNameOpacity] = useState(1)
    const controls = useAnimation()

    useEffect(() => {
        window.scrollTo(0, 0);
        const handleScroll = () => {
            if (window.scrollY > 0) {
                setIsScrolled(true)
                setLastNameOpacity(0)
            } else {
                setIsScrolled(false)
                setLastNameOpacity(1)
            }
        }

        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    useEffect(() => {
        controls.start({
            fontSize: isScrolled ? '2.5rem' : '24vw',
            transition: { delay: 0, duration: 0.7, ease: 'easeInOut' }
        })
    }, [isScrolled, controls])

    return (
        <div className="w-screen fixed top-0 navbar">
            <div className="w-full m-5 flex justify-between items-center">
                <motion.h1 
                    className="flex flex-col align-start text-[#e9ebec] font-bold bricolage-900 top-0 leading-[0.8]"
                    animate={controls}
                    initial={{ fontSize: '24vw' }}
                >
                    <div className="flex items-end overflow-hidden">
                        <motion.div initial={{ y: 360, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0, duration: 1, ease: easeInOut }} className="select-none"> L </motion.div>
                        <motion.div initial={{ y: 360, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.1, duration: 1, ease: easeInOut }} className="select-none"> u </motion.div>
                        <motion.div initial={{ y: 360, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.2, duration: 1, ease: easeInOut }} className="select-none"> c </motion.div>
                        <motion.div initial={{ y: 360, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.3, duration: 1, ease: easeInOut }} className="select-none"> a </motion.div>
                        <motion.div initial={{ y: 360, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.4, duration: 1, ease: easeInOut }} className="select-none"> s </motion.div>
                    </div>
                    <div className="flex items-start overflow-hidden lastNameOpacity" style={{ opacity: lastNameOpacity }}>  
                        <motion.div initial={{ y: 360, opacity: 0, }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.5, duration: 1, ease: easeInOut }} className="select-none"> H </motion.div>
                        <motion.div initial={{ y: 360, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.6, duration: 1, ease: easeInOut }} className="select-none"> a </motion.div>
                        <motion.div initial={{ y: 360, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.7, duration: 1, ease: easeInOut }} className="select-none"> g </motion.div>
                        <motion.div initial={{ y: 360, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.8, duration: 1, ease: easeInOut }} className="select-none"> f </motion.div>
                        <motion.div initial={{ y: 360, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.9, duration: 1, ease: easeInOut }} className="select-none"> o </motion.div>
                        <motion.div initial={{ y: 360, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 1, duration: 1, ease: easeInOut }} className="select-none"> s </motion.div>
                        <motion.div initial={{ y: 360, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 1.1, duration: 1, ease: easeInOut }} className="select-none"> s </motion.div>
                    </div>
                </motion.h1>
                <div className="m-4 items-center top-0 right-0 flex gap-10 absolute overflow-hidden">
                    <motion.div initial={{ y: 50, }} animate={{ y: 0, }} transition={{ delay: 1.2, duration: 1, ease: easeInOut }}> <Link href="/" className="text-[#e9ebec] bricolage-500">About me</Link> </motion.div>
                    <motion.div initial={{ y: 50, }} animate={{ y: 0, }} transition={{ delay: 1.3, duration: 1, ease: easeInOut }}> <Link href="/" className="text-[#e9ebec] bricolage-500">Work</Link> </motion.div>
                    <motion.div initial={{ y: 50, }} animate={{ y: 0, }} transition={{ delay: 1.4, duration: 1, ease: easeInOut }}> <Link href="/" className="text-[#e9ebec] bricolage-500">Insight</Link> </motion.div>
                    <motion.div initial={{ y: 50, }} animate={{ y: 0, }} transition={{ delay: 1.5, duration: 1, ease: easeInOut }}> <Link href="/" className="text-[#e9ebec] bricolage-500">Contact</Link> </motion.div>
                    <motion.div initial={{ y: 50, }} animate={{ y: 0, }} transition={{ delay: 1.6, duration: 1, ease: easeInOut }}> <div className="shadow-xl bg-[#34383c] hover:bg-[#4c5257] duration-300 py-3 px-4 rounded-full cursor-pointer flex gap-2"><Image src={copy} alt="" className=""></Image><button type="button" className="text-[#e9ebec] bricolage-500 w-full h-full underline">Hello@lhagfoss.studio</button></div> </motion.div>
                </div>
            </div>
        </div>
    )
}