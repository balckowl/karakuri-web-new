"use client"
import { usePlayerDataStore } from "~/store/playerDataStore";
import { motion } from "framer-motion"
import Image from "next/image";

const NotFoundMap = () => {
  // dbに書き換える 
  const { playerData } = usePlayerDataStore();
  const currentRoom = playerData.currentRoom;
  return (
    <motion.div
      animate={playerData[currentRoom]?.event0Finished ? { opacity: [0, 1] } : { opacity: 0 }}
      transition={playerData[currentRoom]?.event0Finished ? { duration: 0.5, delay: 0.7 } : { duration: 0 }}
      className="absolute right-10 top-10 z-[150] size-[250px]"
    >
      <Image 
        src={"/images/other/notFound.png"} width={1408} height={962} alt="progress0"
      ></Image>
    </motion.div>
  )
}

export default NotFoundMap