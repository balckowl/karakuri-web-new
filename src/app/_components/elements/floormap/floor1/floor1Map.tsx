"use client"
import { usePlayerDataStore } from "~/store/playerDataStore";
import { motion } from "framer-motion"
import Image from "next/image";

const Floor1Map = () => {
  // dbに書き換える 
  const { playerData } = usePlayerDataStore();
  const currentRoom = playerData.currentRoom;
  return (
    <motion.div
      animate={playerData[currentRoom]?.event0Finished ? { opacity: [0, 1] } : { opacity: 0 }}
      transition={playerData[currentRoom]?.event0Finished ? { duration: 0.5, delay: 0.7 } : { duration: 0 }}
      className="absolute right-10 top-10 z-[150] size-[250px]"
    >
      <motion.div 
        animate={{scale:[1, 1.3, 1]}}
        transition={{ duration: 2, repeat: Infinity}}
        className={`absolute size-2 rounded-full bg-blue-500 
        ${ 
          currentRoom === "entrance" ? "left-[121px] top-[144px]" 
        : currentRoom === "bathroom" ? "left-[32px] top-[144px]" 
        : currentRoom === "cafeteria" ? "left-[210px] top-[144px]" 
        : currentRoom === "kitchen" ? "left-[210px] top-[83px]" 
        : currentRoom === "socialroom" ? "left-[121px] top-[83px]" 
        : currentRoom === "storeroom" && "left-[32px] top-[83px]" 
        }`}
      ></motion.div>
      { playerData.progress === 0 ?
        <Image 
          src={"/images/floor1/map/floor1_progress0.png"} width={1408} height={962} alt="progress0"
        ></Image>
        : playerData.progress === 1 ?
        <Image 
          src={"/images/floor1/map/floor1_progress1.png"} width={1408} height={962} alt="progress0"
        ></Image>
        : playerData.progress === 2 ?
        <Image 
          src={"/images/floor1/map/floor1_progress2.png"} width={1408} height={962} alt="progress0"
        ></Image>
        : playerData.progress >= 3 &&
        <Image 
          src={"/images/floor1/map/floor1_progress3.png"} width={1408} height={962} alt="progress0"
        ></Image>
      }

    </motion.div>
  )
}

export default Floor1Map