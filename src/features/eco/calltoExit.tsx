"use client"
import { motion } from "framer-motion";

const CalltoExit = () => {
  return (
    <div className="absolute bottom-[20vh] left-1/2 z-[200] w-max translate-x-[-33%] lg:bottom-[8vh]">
      {/* call-to-exit */}
      <motion.div 
      animate={{ y: [6, 0], opacity:[0,1]}}
      transition={{ duration: 2, repeat: Infinity, repeatDelay: 1 }}
    >
        <div className="ml-[-30px] flex">
          <div className="h-[6px] w-[60px] rotate-[-30deg] bg-white lg:h-[10px] lg:w-[100px]"></div>
          <div className="ml-[-10px] h-[6px] w-[60px] rotate-[30deg] bg-white lg:ml-[-20px] lg:h-[10px] lg:w-[100px]"></div>
        </div>
      </motion.div>
    </div>
  )
}

export default CalltoExit