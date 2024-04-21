"use client"
import { usePlayerDataStore } from "~/store/playerDataStore";
import { motion } from "framer-motion"
import Image from "next/image";


const Floor2Map = () => {
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
          currentRoom === "corridor" ?  "left-[121px] top-[83px]"
        : currentRoom === "pine" ? "left-[32px] top-[83px]"
        : currentRoom === "bamboo" ? "left-[121px] top-[144px]" 
        : currentRoom === "plum" && "left-[210px] top-[83px]" 
        }`}
      ></motion.div>
      { playerData.progress === 3 ?
        <Image 
          src={"/images/floor2/map/floor2_progress3.png"} width={1408} height={962} alt="progress0"
        ></Image>
        : playerData.progress === 4 ?
        <Image 
          src={"/images/floor2/map/floor2_progress4.png"} width={1408} height={962} alt="progress0"
        ></Image>
        : playerData.progress >= 5 &&
        <Image 
          src={"/images/floor2/map/floor2_progress5.png"} width={1408} height={962} alt="progress0"
        ></Image>
      }

    </motion.div>
  )
}

export default Floor2Map