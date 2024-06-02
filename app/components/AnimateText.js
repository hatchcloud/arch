import React from 'react'
import { useScroll, useTransform, motion } from "framer-motion";
import { useRef } from "react";

const AnimateText = () => {
    const animateText = useRef(null);
    const { scrollYProgress } = useScroll({
        target: animateText,
        offset: ["start end", "end start"]
      }) 
    return (
       <section ref={animateText} className="h-[100vh] w-full overflow-hidden flex flex-col items-center justify-center">
           <Slide text={'Studio Costa Rica Base'} left={'-55%'} progress={scrollYProgress} direction={'left'}  />
           <Slide text={'Architecture & Design'} left={'-15%'} progress={scrollYProgress} direction={'right'} />
           <Slide text={'Interior Design'} left={'-35%'} progress={scrollYProgress} direction={'left'} />
      </section>
    )
}


const Slide = ({text , left, progress, direction}) => {
    const d = direction === 'left' ? -1 : 1;
    const x = useTransform( progress, [0,1], [-250 * d, 250 * d])
  return (
    <motion.div
      style={{ left, x}}
      className="relative flex whitespace-nowrap "
    >
      <Phrase text={text} />
      <Phrase text={text} />
      <Phrase text={text} />
      <Phrase text={text} />
      <Phrase text={text} />
    </motion.div>
  );
};

const Phrase = ({ text }) => {
  return (
    <div className={"px-5 flex gap-5 items-center font-extralight text-gray-50 "}>
      <p className="text-[7.5vw]">{text}</p>
    </div>
  );
};

export default AnimateText
