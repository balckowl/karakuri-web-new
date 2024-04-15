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
      className="absolute top-10 right-10 z-[150] w-[250px] h-[250px]"
    >
      <motion.div 
        animate={{scale:[1, 1.3, 1]}}
        transition={{ duration: 2, repeat: Infinity}}
        className={`w-2 h-2 rounded-full bg-blue-500 absolute 
        ${ 
          currentRoom === "entrance" ? "top-[144px] left-[121px]" 
        : currentRoom === "bathroom" ? "top-[144px] left-[32px]" 
        : currentRoom === "cafeteria" ? "top-[144px] left-[210px]" 
        : currentRoom === "kitchen" ? "top-[83px] left-[210px]" 
        : currentRoom === "socialroom" ? "top-[83px] left-[121px]" 
        : currentRoom === "storeroom" && "top-[83px] left-[32px]" 
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
        : playerData.progress === 3 ?
        <Image 
          src={"/images/floor1/map/floor1_progress3.png"} width={1408} height={962} alt="progress0"
        ></Image>
      : <div></div>
      }

    </motion.div>
  )
}

export default Floor1Map