"use client"
import Image from "next/image";
import { useEffect } from "react";
import { usePlayerDataStore } from "~/store/playerDataStore";

const EcoComponent = () => {
  const { setPlayerData } = usePlayerDataStore();
  // 現在位置の更新
  useEffect(() => {
    setPlayerData({ currentRoom: "eco" })
  }, [setPlayerData])

  return (
    <div>
      
      <Image src="/images/floor3/room/eco.webp" alt="eco" width="2000" height="2000" className="absolute left-0 top-0 -z-10 h-screen w-full object-cover" />
    </div>
  )
}

export default EcoComponent