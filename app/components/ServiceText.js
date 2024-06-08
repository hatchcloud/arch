import React from 'react';
import Arrow from '../../public/arrow.svg';
import Image from 'next/image';
import { motion } from 'framer-motion';

function ServiceText({ text, onMouseEnter }) {
  return (
    <motion.span 
      className='flex gap-4 items-center mt-5 cursor-pointer'
      initial="hidden"
      whileHover="visible"
      onMouseEnter={onMouseEnter}
    >
      <motion.div 
        className='w-8 lg:w-2/4 h-20 max-w-16 relative'
        variants={{
          hidden: { opacity: 0, x: -10 },
          visible: { opacity: 1, x: 0 }
        }}
        transition={{ type: 'spring', stiffness: 300, delay: 0.15 }}
      >
        <Image 
          className="object-contain"
          src={Arrow}
          alt="arrow"
          fill
        />
      </motion.div>
      <motion.p
        className='text-[7vw] leading-none'
        variants={{
          hidden: { x: -80, color: "#8FA9CD" },
          visible: { x: 0, color: "#0156CF" }
        }}
        transition={{  stiffness: 300, delay: 0.05 }}
      >
        {text}
      </motion.p>
    </motion.span>
  );
}

export default ServiceText;
