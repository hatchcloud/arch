'use client';
import Image from "next/image";
import Pic1 from '../../public/projects/hero.jpg'
import { useTransform, motion } from "framer-motion";

const SectionSecond = ({scrollYProgress}) => {
    const scale = useTransform(scrollYProgress, [0, 1], [1, 0.8]);
    const rotate = useTransform(scrollYProgress, [0, 1], [0, -5])
    return (
      <motion.div style={{}} className="sticky top-0 w-full h-screen bg-[#01268B] text-[3.5vw] flex flex-col items-center justify-center text-white">
       
        <div className="flex  flex-col gap-4">
        <h1>contact@imstudio.com</h1>
    
        </div>
      </motion.div>
    )
}

export default SectionSecond
