"use client"
import Image from "next/image";
import { useEffect } from "react";
import { usePlayerDataStore } from "~/store/playerDataStore";
import { motion } from "framer-motion"
import Link from "next/link";
const Elevator = () => {
  const { playerData, setPlayerData } = usePlayerDataStore();
  // 現在位置の更新
  useEffect(() => {
    setPlayerData({ currentRoom: "elevator" })
  }, [setPlayerData])

  console.log(playerData.progress)
  return (
    <div>
      <motion.div
        animate={{ opacity: [0, 1] }}
        transition={{ duration: 0.5, delay: 0.5 }}
        className="absolute left-1/2 top-1/2 w-[300px] h-[600px] -translate-x-1/2 -translate-y-1/2 rounded-[2px] bg-gray-400 shadow-lg z-[975]"
      >
        <div className="flex w-full h-full items-center justify-center flex-col gap-[60px]">
          <Link
            href={"/floor3/xxx"}
            className={`w-[200px] h-[120px] border-[6px] border-gray-200 bg-gray-800 flex justify-center items-center shadow-xl rounded-lg  transition-all relative cursor-not-allowed
            ${playerData.progress < 6 ? "cursor-not-allowed" : "cursor-pointer hover:opacity-80"}`}>
            <p className="text-gray-200 text-3xl">3</p>
            {playerData.progress < 6 &&
              <div className="size-full absolute bg-black opacity-80">
                <Image src="/images/floor0/closed.svg" alt="entrance" width="80" height="48" className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 object-cover" />
              </div>
            }
          </Link>
          <Link
            href={"/floor2/xxx"}
            className={`w-[200px] h-[120px] border-[6px] border-gray-200 bg-gray-800 flex justify-center items-center shadow-xl rounded-lg  transition-all relative cursor-not-allowed
            ${playerData.progress < 3 ? "cursor-not-allowed" : "cursor-pointer hover:opacity-80"}`}>
            <p className="text-gray-200 text-3xl">2</p>
            {playerData.progress < 3 &&
              <div className="size-full absolute bg-black opacity-80">
                <Image src="/images/floor0/closed.svg" alt="entrance" width="80" height="48" className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 object-cover" />
              </div>
            }
          </Link>
          <Link
            href={"/floor1/socialroom"}
            className={`w-[200px] h-[120px] border-[6px] border-gray-200 bg-gray-800 flex justify-center items-center shadow-xl rounded-lg  transition-all relative cursor-not-allowed
            ${playerData.progress < 0 ? "cursor-not-allowed" : "cursor-pointer hover:opacity-80"}`}>
            <p className="text-gray-200 text-3xl">1</p>
            {playerData.progress < 0 &&
              <div className="size-full absolute bg-black opacity-80">
                <Image src="/images/floor0/closed.svg" alt="entrance" width="80" height="48" className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 object-cover" />
              </div>
            }
          </Link>


        </div>
      </motion.div>
      <div className="absolute left-0 top-0 z-[800] size-full bg-black opacity-50"></div>
      <Image src="/images/floor1/rooms/entrance.webp" alt="entrance" width="2000" height="2000" className="absolute left-0 top-0 -z-10 h-screen w-full object-cover" />
    </div>
  )
}

export default Elevator