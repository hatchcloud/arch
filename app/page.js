'use client'
import CompanyIcon from "./components/CompanyIcon";
import { useScroll, useTransform, motion } from "framer-motion";
import { useEffect, useRef } from "react";
import Lenis from 'lenis'
import SectionImageHero from "./components/SectionImageHero";
import SectionSecond from "./components/SectionSecond";

export default function Home() {
  const container = useRef();
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end end"]
  }) 

  useEffect( () => {
    const lenis = new Lenis()
    window.scrollTo(0, 0);
    function raf(time) {
      lenis.raf(time)
      requestAnimationFrame(raf)
    }
   
    requestAnimationFrame(raf)
  }, [])


  return (
    <main ref={container} className=" flex flex-col items-center justify-center bg-slate-900 min-h-svh ">
      <CompanyIcon />
      <section className=" h-[200vh] w-full ">
        <SectionImageHero scrollYProgress={scrollYProgress} />
        <SectionSecond scrollYProgress={scrollYProgress} />
      </section>
    </main>
  );
}
