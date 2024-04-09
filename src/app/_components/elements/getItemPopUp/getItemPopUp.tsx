"use client"
import { motion } from "framer-motion";
import { ReactNode, useEffect, useState } from "react";

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
          className="fixed top-[50%] left-[50%] bg-white dark:bg-[#020817] p-[20px] shadow-lg z-[1000] rounded-lg"
        >
          { children }
        </motion.div>
      )}
    </div>
  );
};

export default GetItemPopup;