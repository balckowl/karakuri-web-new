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
      className="absolute top-10 right-10 z-[150] w-[250px] h-[250px]"
    >
      <motion.div 
        animate={{scale:[1, 1.3, 1]}}
        transition={{ duration: 2, repeat: Infinity}}
        className={`w-2 h-2 rounded-full bg-blue-500 absolute 
        ${ 
          currentRoom === "corridor" ?  "top-[83px] left-[121px]"
        : currentRoom === "pine" ? "top-[83px] left-[32px]"
        : currentRoom === "bamboo" ? "top-[144px] left-[121px]" 
        : currentRoom === "plum" && "top-[83px] left-[210px]" 
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