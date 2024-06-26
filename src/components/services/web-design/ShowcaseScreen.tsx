import { motion,useScroll,useMotionValueEvent,useSpring, MotionValue,useInView } from "framer-motion";
import { useEffect, useState } from "react";
import { inView } from "framer-motion/dom";
import React from "react";

const textVariants = [
  "Hello",
  "Contact",
  "Services",
  "About",
  "Projects",
  "Blog",
  "Contact",
];

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
    <div className="relative z-0 grid h-full w-full p-5 overflow-hidden bg-web-foreground">
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
    return(<div className="flex flex-col">
      <nav className="hidden md:block bg-web-primary-dark rounded-xl p-1">
        <div className="flex flex-row text-xs justify-around items-center text-web-primary-content">
            <div className="bg-web-primary-light px-2 rounded-full">
              <a href="#">Home</a>
            </div>
            <div className="bg-web-primary-light px-2 rounded-full">
              <a href="#">Price</a>
            </div>
            <div className="bg-web-primary-light px-2 rounded-full">
              <a href="#">Services</a>
            </div>
        </div>
      </nav>
      <div className="text-left h-full">
        Recent News:
        <div className="h-[90%] flex-col flex justify-center items-center bg-gray-200 text-center text-xs lg:text-lg">
          <h1>RM500 only to launch a website</h1>
          <a href="#" className="text-web-secondary">Try Now</a>
        </div>
        </div>
    </div>
  
  
  
  )};

  const ContactScreen = () => {
    return(<div>
      <h1>Contact</h1>
      <a href="#">Contact We Now</a>
    </div>
  
  
  
  )}

export default Example;