"use client";
import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { set } from "react-hook-form";

const transition = {
  type: "spring",
  mass: 0.5,
  damping: 11.5,
  stiffness: 100,
  restDelta: 0.001,
  restSpeed: 0.001,
};

export const MenuItem = ({
  setActive,
  active,
  item,
  children,
}: {
  setActive: (item: string) => void;
  active: string | null;
  item: string;
  children?: React.ReactNode;
}) => {
  return (
    <div onClick={() => setActive(item)} className="relative ">
      <motion.p
        transition={{ duration: 0.3 }}
        className="cursor-pointer text-xs md:text-lg text-[#eae9ea] hover:opacity-[0.9] dark:text-[#eae9ea] font-semibold"
      >
        {item}
      </motion.p>
      {active !== null && (
        <motion.div
          initial={{ opacity: 0, scale: 0.85, y: 10 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={transition}
        >
          {active === item && (
            <div className="absolute top-[calc(100%_+_1.6rem)]
            left-3/4 sm:left-1/2 transform -translate-x-2/3 ">
              <motion.div
                transition={transition}
                layoutId="active" // layoutId ensures smooth animation
                className="bg-[#202124] max-h-[60%] dark:bg-[#202124] backdrop-blur-sm rounded-2xl overflow-hidden border border-white/[0.5] dark:border-white/[0.2] shadow-xl"
              >
                <motion.div
                  layout // layout ensures smooth animation
                  className="w-max h-full p-4"
                >
                  {children}
                </motion.div>
              </motion.div>
            </div>
          )}
        </motion.div>
      )}
    </div>
  );
};

export const Menu = ({
  setActive,
  children
}: {
  setActive: (item: string | null) => void;
  children: React.ReactNode;
}) => {
  return (
    <nav
      onMouseLeave={() => {        
        // if (active) {
          setActive(null);
        // }else{
        //   setActive(active)
        // }
      }} // resets the state
      className="relative  rounded-full  border-2 border-white/[0.6] bg-[#202124] shadow-input flex justify-center space-x-2 md:space-x-4 px-6 py-2 md:py-4 items-center "
    >
      {children}
    </nav>
  );
};

export const ProductItem = ({
  title,
  description,
  href,
  src,
}: {
  title: string;
  description: string;
  href: string;
  src: string;
}) => {
  return (
    <a href={href}
    target="_blank"
    className="flex space-x-2 mb-4 gap-[5%] justify-center ">
     <Image
  src={src}
  width={80}
  height={40}
  alt={title}
  className="flex-shrink-0 rounded-md shadow-2xl w-auto h-16 md:h-auto "
/>

      <div>
        <h4 className="text-xs md:text-xl font-bold mb-1 text-[#eae9ea]">
          {title}
        </h4>
        <p className=" text-[10px] md:text-sm max-w-[10rem] text-[#EAE9EA]">
          {description}
        </p>
      </div>
    </a>
  );
};

export const HoveredLink = ({ children,setActive, ...rest }: any) => {
  return (
    <Link
      {...rest}
      className="text-[#EAE9EA] hover:text-[#eae9ea] "
      onClick={() => {
        setActive(null)
      }}
    >
      {children}
    </Link>
  );
};
