"use client"
import { motion } from "framer-motion";
import Link from "next/link";
import { useState } from "react";
import { usePlayerDataStore } from "~/store/playerDataStore";

const EnterTooltip = () => {
  const { setPlayerData } = usePlayerDataStore()
  const [isHover, setIsHover] = useState<boolean>(false);
  const handleMouseEnter = () => {
    setIsHover(true);
  };

  const handleMouseLeave = () => {
    setIsHover(false);
  };
  
  const enterHall = () => {
    setPlayerData({ currentFloor: 1 })
  }
  return (
    <div className="relative">
      {/* tooltip */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: isHover ? 1 : 0, y: isHover ? 0 : 20 }}
        transition={{ duration: 0.3 }}
        className="absolute bottom-[calc(200px+10vh)] left-1/2 ml-[-30px] -translate-x-1/2 lg:bottom-[calc(400px+10vh)] lg:ml-[-20px]"
      >
        <motion.div
          className="relative my-6 mb-[30px] inline-block rounded-lg bg-orange-200 p-2 text-sm text-gray-700 lg:p-4"
        >
          <p className="relative z-[200]">屋敷に入る</p>
          <div className="absolute bottom-0 left-1/2 z-[150] translate-x-[-80%]">
            <div className="size-6 origin-bottom rotate-45 bg-orange-200"></div>
          </div>
        </motion.div>
      </motion.div>

      {/* hover-judgement */}
      {/* 屋敷に入るリンク */}
      <Link 
        href="floor1/entrance"
        onClick={() => enterHall}
        className="absolute bottom-[10vh] left-1/2 -translate-x-1/2 lg:bottom-[14vh]">
        <div
          className="ml-[30px] h-[200px] w-[220px] cursor-pointer lg:h-[400px] lg:w-[440px]"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
        </div>
      </Link>

    </div>
  )
}

export default EnterTooltip
