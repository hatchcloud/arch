'use client'
import CompanyIcon from "./components/CompanyIcon";
import { useScroll, useInView } from "framer-motion";
import { useEffect, useRef } from "react";
import Lenis from 'lenis'
import SectionImageHero from "./components/SectionImageHero";
import SectionSecond from "./components/SectionSecond";
import MenuCompact from "./components/MenuCompact";

export default function Home() {
  const menuContainer = useRef(null);
  const isInView = useInView(menuContainer);

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
    <main ref={container} className=" flex flex-col items-center justify-center bg-slate-200 min-h-svh ">
      <MenuCompact isInView={isInView} />
      <CompanyIcon />
      <section className=" h-[200vh] w-full ">
        <SectionImageHero scrollYProgress={scrollYProgress} />
        <SectionSecond scrollYProgress={scrollYProgress} />
      </section>
      <section ref={menuContainer} className="h-[100vh] w-full">
      
      </section>
    </main>
  );
}
