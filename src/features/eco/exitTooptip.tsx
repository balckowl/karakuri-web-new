"use client"
import { motion } from "framer-motion";
import { type Dispatch, type SetStateAction, useState} from "react";
import { usePlayerDataStore } from "~/store/playerDataStore";

const ExitTooltip = ({setExitClicked} :  { setExitClicked :  Dispatch<SetStateAction<boolean>>}) => {
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
    <div>
      {/* tooltip */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: isHover ? 1 : 0, y: isHover ? 0 : 20 }}
        transition={{ duration: 0.3 }}
        className="absolute bottom-[calc(400px+20vh)] left-1/2 ml-[-38px] -translate-x-1/2 lg:bottom-[calc(370px+30vh)] lg:ml-[-40px]"
      >
        <motion.div
          className="relative my-6 mb-[30px] inline-block rounded-lg bg-orange-200 p-2 text-sm text-gray-700 lg:p-4"
        >
          <p className="relative z-[200]">屋敷から出る</p>
          <div className="absolute bottom-0 left-1/2 z-[150] translate-x-[-80%]">
            <div className="size-6 origin-bottom rotate-45 bg-orange-200"></div>
          </div>
        </motion.div>
      </motion.div>


      <div
        onClick={() => setExitClicked(true)}
        className="absolute bottom-[30vh] left-1/2 -translate-x-1/2 lg:bottom-[14vh]">
        <div
          className="ml-[30px] h-[350px] w-[220px] cursor-pointer lg:h-[600px] lg:w-[400px]"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
        </div>
      </div>

    </div>
  )
}

export default ExitTooltip
