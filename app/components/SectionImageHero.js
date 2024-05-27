'use client';
import Image from "next/image";
import Link from "next/link";
import HeroImg from '../../public/projects/demo.jpg'
import Logo from '../../public/icon-complete.svg'
import { useTransform, motion } from "framer-motion";

const SectionImageHero = ({scrollYProgress}) => {
    const scale = useTransform(scrollYProgress, [0, 1], [1, 0.8]);
    const rotate = useTransform(scrollYProgress, [0, 1], [0, -5])
    return (
      <motion.div style={{scale}} className="sticky top-0 w-full h-screen text-[3.5vw] flex flex-col items-center justify-center text-white">
        <div className="flex gap-4 w-full h-full relative">
            <Image 
              className="object-cover object-center"
              src={HeroImg}
              alt="img"
              placeholder="blur"
              fill
            />
        </div>
        <div className="flex gap-4 w-full h-full absolute z-40">
            <nav className=" p-10 flex justify-between w-full">
                <Link href={'/'}>
                    <Image 
                    className="object-cover"
                    src={Logo}
                    alt="img"
                    height={100}
                    width={280}
                    />
                </Link>

                <ul className=" text-xl text-white font-medium flex gap-6 bg-[#142244]/60 rounded-md p-2 h-fit">
                    <li>
                    <button class="group uppercase relative inline-flex h-12 items-center justify-center overflow-hidden rounded-md hover:bg-slate-950/50 px-2   duration-500">
                        <div class="translate-y-0 transition group-hover:-translate-y-[150%]">Services</div>
                        <div class="absolute translate-y-[150%] transition group-hover:translate-y-0">Services</div>
                    </button>
                        
                    </li>
                    <li>
                    <button class="group uppercase relative inline-flex h-12 items-center justify-center overflow-hidden rounded-md hover:bg-slate-950/50 px-2   duration-500">
                        <div class="translate-y-0 transition group-hover:-translate-y-[150%]">Projects</div>
                        <div class="absolute translate-y-[150%] transition group-hover:translate-y-0">Projects</div>
                    </button>
                    </li>
                    <li>
                    <button class="group uppercase relative inline-flex h-12 items-center justify-center overflow-hidden rounded-md hover:bg-slate-950/50 px-2   duration-500">
                        <div class="translate-y-0 transition group-hover:-translate-y-[150%]">Contact</div>
                        <div class="absolute translate-y-[150%] transition group-hover:translate-y-0">Contact</div>
                    </button>
                    </li>
                </ul>
            </nav>

            
        </div>
      </motion.div>
    )
}

export default SectionImageHero


