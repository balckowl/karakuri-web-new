"use client"
import { motion } from "framer-motion";
import Link from "next/link";
import { usePlayerDataStore } from "~/store/playerDataStore";

const Arrow = ({ floor, hrefProps }: { floor: number, hrefProps: string }) => {
  // dbに書き換える 
  const { playerData, setPlayerData } = usePlayerDataStore();

  const currentRoom = playerData.currentRoom;
  const movableRoomList = playerData.movableRoomList;

  const tryMove = () => {
    // fix
    if(playerData.belonging == "woodenBoard"){
      setPlayerData({
        progress: 4,
        belonging: "",
        belongingList: playerData.belongingList.filter(item => item !== "woodenBoard"),
        corridor: {
          ...playerData.corridor,
          eventIndex: 1,
          isTryMove: true,
          movableBamboo: true,
        }
      })
    // try
    } else {
      setPlayerData({
        corridor: {
          ...playerData.corridor,
          isTryMove: true,
        }
      })
    }
  }

  return (
    <motion.div
      animate={playerData[currentRoom].event0Finished ? { opacity: [0, 1] } : { opacity: 0 }}
      transition={playerData[currentRoom].event0Finished ? { duration: 0.5, delay: 0.3 } : { duration: 0 }}
      className={`${movableRoomList.includes(hrefProps) == false && "cursor-not-allowed"} relative z-[500]`}
    >
      {/* floor2の道ギミック */}
      {hrefProps == "bamboo" && playerData.corridor.movableBamboo === false ?

        <div
          className="cursor-pointer"
          onClick={tryMove}
        >
          <motion.div
            whileHover={{ y: [0, -5, 0] }}
            transition={{ duration: 1, repeat: Infinity }}
            className="flex w-max py-8"
          >
            <div className={`h-[8px] w-[60px] rotate-[-30deg] ${movableRoomList.includes(hrefProps) ? "bg-[#ff7f7f]" : "bg-gray-400"}`}></div>
            <div className={`h-[8px] w-[60px] translate-x-[-12px] rotate-[30deg] ${movableRoomList.includes(hrefProps) ? "bg-[#ff7f7f]" : "bg-gray-400"}`}></div>
          </motion.div>
        </div>
        :
        <Link
          href={`/floor${floor}/${hrefProps}`}
          className={`${movableRoomList.includes(hrefProps) == false && "pointer-events-none"}`}
        >
          <motion.div
            whileHover={{ y: [0, -5, 0] }}
            transition={{ duration: 1, repeat: Infinity }}
            className="flex w-max py-8"
          >
            <div className={`h-[8px] w-[60px] rotate-[-30deg] ${movableRoomList.includes(hrefProps) ? "bg-green-300" : "bg-gray-400"}`}></div>
            <div className={`h-[8px] w-[60px] translate-x-[-12px] rotate-[30deg] ${movableRoomList.includes(hrefProps) ? "bg-green-300" : "bg-gray-400"}`}></div>
          </motion.div>
        </Link>
      }
    </motion.div>
  )
}

export default Arrow