'use client'
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Image from "next/image";

const CompanyIcon = () => {
    const [showSecond, setShowSecond] = useState(false);

    return (
        <motion.div className="flex flex-col pointer-events-none md:flex-row gap-6 items-center justify-center top-0 bg-[#323bff] h-full w-full fixed z-20"
                initial={{  opacity: 1 }}
                animate={{ opacity: 0 }}
                transition={{ duration: 0.5, delay: 1.5 }}
        >
            <svg width="175" height="175" viewBox="0 0 175 175" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g clipPath="url(#clip0_5_25)">
                    <motion.rect
                        id="i"
                        width="26"
                        initial={{ height: 0 }}
                        animate={{ height: showSecond ? 0 : 175 }}
                        transition={{ duration: 0.5 }}
                        fill="white"
                    />
                    <motion.rect
                        id="m"
                        x="43"
                        width="26"
                        initial={{ height: 0 }}
                        animate={{ height: showSecond ? 0 : 175 }}
                        transition={{ duration: 0.5 }}
                        fill="white"
                    />
                    <motion.rect
                        id="m-2"
                        x="149"
                        width="26"
                        initial={{ height: 0 }}
                        animate={{ height: showSecond ? 0 : 175 }}
                        transition={{ duration: 0.5 }}
                        fill="white"
                    />
                    <motion.rect
                        id="m-middle"
                        x="96"
                        width="26"
                        height="175"
                        initial={{ y: 175, opacity: 0 }}
                        animate={{ opacity: 1,  y: showSecond ? 175 : 81 }}
                        transition={{ duration: 0.5 }}
                        fill="white"
                        
                    />
                </g>
            </svg>
            <motion.div className=" overflow-hidden items-start hidden md:flex"
            initial={{ height: 0 }}
            animate={{ height: showSecond ? 0 : 90 }}
            transition={{ duration: 0.5 }}
            style={{ transformOrigin: 'bottom' }}>
            <Image
                    className="object-contain bottom-0"
                    src={`/studio.svg`}
                    width={282}
                    height={83}
                    loading="lazy"
                    priority={false}
                />
            </motion.div>
        </motion.div>
    );
};

export default CompanyIcon;
