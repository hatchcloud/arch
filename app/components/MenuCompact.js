'use client'
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
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

const menuVariants = {
  hidden: {
    
    x: '100%',
    transition: { 
      ease: [.25, .46, .45, .94],
      duration: 0.3 }
  },
  visible: {
    
    x: 0,
    transition: { 
      ease: [.25, .46, .45, .94],
      duration: 0.4 }
  }
};



const slideIn = {

  initial: {
      opacity: 0,
      rotateX: 90,
      translateY: 180,
      translateX: -100,
  },
  enter: (i) => ({
      opacity: 1,
      rotateX: 0,
      translateY: 0,
      translateX: 0,
      transition: {
          duration: 0.35, 
          delay: 0.4 + (i * 0.15), 
          ease: [.215,.61,.355,1],
          opacity: { duration: 0.1 }
      }
  }),
  exit: {
      opacity: 0,
      transition: { duration: 0.5, type: "linear", ease: [0.76, 0, 0.24, 1]}
  }
}


export const perspective = {
}

const Links =[
  {
    title:'Services',
    href: '/'
  },
  {
    title:'Projects',
    href: '/'
  },
  {
    title:'Contact',
    href: '/'
  },

  
]
export const MenuCompact = ({ isInView }) => {
    const [showMenu, setShowMenu] = useState(false);
  return (
    <>
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
                <Link href={'/'} className="w-40 md:w-80 roun">
                    <Image 
                    className="object-cover"
                    src={Logo}
                    alt="img"
                    height={32}
                    width={32}
                    />
                </Link>
                <button className="font-semibold uppercase text-lg " onClick={() => setShowMenu((s) => !s)}>
                    Menu
                </button>
        </motion.nav>
    </motion.div>

        <AnimatePresence mode="wait"> 
        {showMenu && (
              <motion.div 
                className="bg-[#0156cf]  text-white fixed h-screen w-full  md:w-[40%] top-0 right-0  z-50  flex flex-col items-start py-4 pr-4 pl-8"
                initial="hidden"
                animate="visible"
                exit="hidden"
                variants={menuVariants}
              >
                <button  
                className="uppercase  w-full text-lg  text-right font-semibold " onClick={() => setShowMenu(false)}>
                  Close
                </button>
                <div className=" flex flex-col h-full items-center justify-center gap-[2vw] md:gap-[0.5vw]  mb-60">

                {
                  Links.map((link, i) =>{
                    return (
                      <div key={i} className="linkContainer overflow-hidden h-[9vw] md:h-[6vw] ">

                   <motion.div 
                    variants={slideIn}    
                    custom={i} 
                      initial="initial"
                      animate="enter"
                      exit="exit"
                      key={i}>
                      <Link href={link.href} className=" text-[8vw] md:text-[5vw] font-light ">
                        {link.title}
                      </Link>
                    </motion.div>
                      </div>  )

                      
                  })
                }
                </div>
              </motion.div>
            )}
        </AnimatePresence>
        
    </>
  )
}
export default MenuCompact;
