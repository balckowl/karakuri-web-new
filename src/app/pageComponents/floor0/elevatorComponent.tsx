"use client"
import Image from "next/image";
import { useEffect } from "react";
import { usePlayerDataStore } from "~/store/playerDataStore";
import { motion } from "framer-motion"
import Link from "next/link";

const ElevatorComponent = () => {
  const { playerData, setPlayerData } = usePlayerDataStore();
  // 現在位置の更新
  useEffect(() => {
    setPlayerData({ currentRoom: "elevator" })
  }, [setPlayerData])

  // 階を更新する
  const toFloor1 = () => {
    setPlayerData({ currentFloor: 1})
  }
  const toFloor2 = () => {
    setPlayerData({ currentFloor: 2})
  }
  const toFloor3 = () => {
    setPlayerData({ currentFloor: 3})
  }

  console.log(playerData.progress)
  return (
    <div>
      <motion.div
        animate={{ opacity: [0, 1] }}
        transition={{ duration: 0.5, delay: 0.5 }}
        className="absolute left-1/2 top-1/2 z-[975] h-[600px] w-[300px] -translate-x-1/2 -translate-y-1/2 rounded-[2px] bg-gray-400 shadow-lg"
      >
        <div className="flex size-full flex-col items-center justify-center gap-[60px]">
          <Link
            href={"/floor3/restroom"}
            onClick={() => toFloor1}
            className={`relative flex h-[120px] w-[200px] cursor-not-allowed items-center justify-center rounded-lg border-[6px] border-gray-200  bg-gray-800 shadow-xl transition-all
            ${playerData.progress < 6 ? "cursor-not-allowed" : "cursor-pointer hover:opacity-80"}`}>
            <p className="text-3xl text-gray-200">3</p>
            {playerData.progress < 6 &&
              <div className="absolute size-full bg-black opacity-80">
                <Image src="/images/floor0/closed.svg" alt="entrance" width="80" height="48" className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 object-cover" />
              </div>
            }
          </Link>
          <Link
            href={"/floor2/corridor"}
            onClick={() => toFloor2}
            className={`relative flex h-[120px] w-[200px] cursor-not-allowed items-center justify-center rounded-lg border-[6px] border-gray-200  bg-gray-800 shadow-xl transition-all
            ${playerData.progress < 3 ? "cursor-not-allowed" : "cursor-pointer hover:opacity-80"}`}>
            <p className="text-3xl text-gray-200">2</p>
            {playerData.progress < 3 &&
              <div className="absolute size-full bg-black opacity-80">
                <Image src="/images/floor0/closed.svg" alt="entrance" width="80" height="48" className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 object-cover" />
              </div>
            }
          </Link>
          <Link
            href={"/floor1/socialroom"}
            onClick={() => toFloor3}
            className={`relative flex h-[120px] w-[200px] cursor-not-allowed items-center justify-center rounded-lg border-[6px] border-gray-200  bg-gray-800 shadow-xl transition-all
            ${playerData.progress < 0 ? "cursor-not-allowed" : "cursor-pointer hover:opacity-80"}`}>
            <p className="text-3xl text-gray-200">1</p>
            {playerData.progress < 0 &&
              <div className="absolute size-full bg-black opacity-80">
                <Image src="/images/floor0/closed.svg" alt="entrance" width="80" height="48" className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 object-cover" />
              </div>
            }
          </Link>


        </div>
      </motion.div>
      <div className="absolute left-0 top-0 z-[800] size-full bg-black opacity-50"></div>
      <Image src="/images/floor0/elevator.webp" alt="entrance" width="2000" height="2000" className="absolute left-0 top-0 -z-10 h-screen w-full object-cover" />
    </div>
  )
}

export default ElevatorComponent