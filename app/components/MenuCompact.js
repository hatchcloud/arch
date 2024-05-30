'use client'
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import Logo from '../../public/icon-im.svg'

const containerVariants = {
    hidden: { opacity: 0, y: -80, transition: { type: 'tween', duration: 0.5 , delay: 0.1} },
    visible: { opacity: 1, y: 0, transition: { type: 'tween', duration: 0.5 , delay: 0.3} }
  };

const textVariants = {
  hidden: { opacity: 0 , transition: { duration: 0.1 , delay: 0.1}},
  visible: { opacity: 1 , transition: { duration: 0.2 , delay:  0.6 }}
};

export const MenuCompact = ({ isInView }) => {
  return (
    <motion.div 
      className="fixed top-0 text-[#01268B]  bg-slate-50 w-full z-50  h-16 "
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={containerVariants}
    >
      <motion.nav className=" p-4 gap-4 flex h-fit md:flex-row justify-between w-full items-center"
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={textVariants}
      
      >
                <Link href={'/'} className="w-40 md:w-80">
                    <Image 
                    className="object-cover"
                    src={Logo}
                    alt="img"
                    height={32}
                    width={32}
                    />
                </Link>
                <button className=" uppercase text-lg ">
                    Menu
                </button>
            </motion.nav>
    </motion.div>
  )
}
export default MenuCompact;
