import { motion,useScroll,useMotionValueEvent,useSpring, MotionValue,useInView } from "framer-motion";
import { useEffect, useState } from "react";
import { inView } from "framer-motion/dom";
import WhatsappSVG from "./WhatsappSvg"
import React from "react";

const Example = () => {

  
  return (
    <motion.div className="relative">
    <section className="grid place-content-center p-12 ">
      <FloatingPhone />
    </section>
    </motion.div>
  );
};

const FloatingPhone = () => {
  return (
    <div
      style={{
        transformStyle: "preserve-3d",
        transform: "rotateY(-30deg) rotateX(15deg)",
      }}
      className="bg-web-primary-dark md:h-[18vw] md:w-[30vw] w-[36vw] h-[50vw] "
    >
      <motion.div
        initial={{
          transform: "translateZ(8px) translateY(-2px)",
        }}
        animate={{
          transform: "translateZ(32px) translateY(-8px)",
        }}
        transition={{
          repeat: Infinity,
          repeatType: "mirror",
          duration: 2,
          ease: "easeInOut",
        }}
        className="relative h-full w-full  bg-web-background p-1 pl-[3px] pt-[3px]"
      >
        <HeaderBar/>
        <Screen children={<GeneralScreen/>} />
      </motion.div>
    </div>
  );
};


const Screen = ({children}:{children:any}) => {
  return (
    <div className="relative z-0 grid h-full w-full place-content-center overflow-hidden bg-web-foreground">
      {/* Example logo from logoispum */}
      {children}
    </div>
  );
};

const HeaderBar = () => {
    return (
      <>
        <div className="absolute left-[50%] top-2.5 z-10 h-2 w-2/3 -translate-x-[50%] rounded-md bg-gray-200">
            <p className="text-[0.4rem]">https://www.tom.com</p>
        </div>
        
      </>
    );
  };


  const GeneralScreen = () => {
    return(<div className="flex flex-col items-center gap-y-3">
      <h1 className="font-bold text-3xl">Contact us now!</h1>
      <a href="#" className="p-5 bg-gray-100 rounded-full drop-shadow-md hover:bg-gray-200 ease-in-out transition-all">
        <WhatsappSVG width={50} height={50}/>
      </a>
    </div>
  
  
  
  )};

export default Example;