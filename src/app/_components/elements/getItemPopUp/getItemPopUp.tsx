"use client"
import { motion } from "framer-motion";
import { type ReactNode, useEffect, useState } from "react";

const GetItemPopup = ({ children, popupTime=2 }: { children: ReactNode, popupTime?:number }) => {

  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false);
    }, 2000);

    return () => {
      clearTimeout(timer);
    };
  }, []);


  return (
    <div className="">
      {isVisible && (
        <motion.div
          initial={{ x:"-50%", y:"-50%" }}
          animate={{ opacity: [0,1,1,1,1,1,1,1,0], scale: [0,1.1,1,1,1,1,1,1,0.3]}}
          exit={{ opacity: 0 }}
          transition={{ duration: popupTime, ease: "easeOut" }}
          className="fixed left-1/2 top-1/2 z-[1000] rounded-lg bg-white p-[20px] shadow-lg dark:bg-[#020817]"
        >
          { children }
        </motion.div>
      )}
    </div>
  );
};

export default GetItemPopup;