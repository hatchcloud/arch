'use client';
import Image from "next/image";
import Link from "next/link";
import HeroImg from '../../public/projects/pixelcut-export.jpeg'
import Logo from '../../public/icon-complete.svg'
import { useTransform, motion } from "framer-motion";

const SectionImageHero = ({scrollYProgress}) => {
    const scale = useTransform(scrollYProgress, [0, 1], [1, 0.7]);
    const rotate = useTransform(scrollYProgress, [0, 1], [0, -5])
    return (
      <motion.div style={{scale}} className="sticky top-0 w-full h-screen text-[3.5vw] flex flex-col items-center justify-center text-white">
        <div className="flex gap-4 w-full h-full relative">
            <Image 
              className="object-cover  object-bottom md:object-center"
              src={HeroImg}
              alt="img"
              placeholder="blur"
              fill
            />
        </div>
        <div className="flex gap-4 w-full h-full absolute z-40">
            <nav className=" p-10 gap-4 flex flex-col h-fit md:flex-row justify-between w-full items-center md:items-start ">
                <Link href={'/'} className="w-40 md:w-80">
                    <Image 
                    className="object-cover"
                    src={Logo}
                    alt="img"
                    height={100}
                    width={280}
                    />
                </Link>

                <ul className=" text-base md:text-xl text-[#0156cf] font-medium flex gap-0 md:gap-6 rounded-lg px-2 h-fit">
                    <li>
                    <button class="group uppercase relative inline-flex h-12 items-center justify-center overflow-hidden rounded-md hover:bg-stone-50/50 px-2   duration-500">
                        <div class="translate-y-0 transition group-hover:-translate-y-[150%]">Services</div>
                        <div class="absolute translate-y-[150%] transition group-hover:translate-y-0">Services</div>
                    </button>
{/*                     <button role="link" class="relative after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-full after:origin-bottom-left after:scale-x-100 after:bg-neutral-50 after:transition-transform after:duration-150 after:ease-in-out hover:after:origin-bottom-right hover:after:scale-x-0">Hover me</button>
 */}                        
                    </li>
                    <li>
                    <button class="group uppercase relative inline-flex h-12 items-center justify-center overflow-hidden rounded-md hover:bg-stone-50/50 px-2   duration-500">
                        <div class="translate-y-0 transition group-hover:-translate-y-[150%]">Projects</div>
                        <div class="absolute translate-y-[150%] transition group-hover:translate-y-0">Projects</div>
                    </button>
                    </li>
                    <li>
                    <button class="group uppercase relative inline-flex h-12 items-center justify-center overflow-hidden rounded-md hover:bg-stone-50/50 px-2   duration-500">
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


