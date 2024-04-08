"use client"
import { motion } from "framer-motion";

const Arrow = () => {
  return (
    <div>
      <motion.div
        whileHover={{ y: [0, 5, 0] }}
        transition={{ duration: 1, repeat: Infinity }}
        className="flex w-max cursor-pointer py-8"
      >
        <div className="h-[8px] w-[60px] rotate-[-30deg] bg-white"></div>
        <div className="h-[8px] w-[60px] translate-x-[-12px] rotate-[30deg] bg-white"></div>
      </motion.div>
    </div>
  )
}

export default Arrow