"use client"
import { useEffect } from "react";
import { usePlayerDataStore } from "~/store/playerDataStore";

const Elevator = () => {
  const { setPlayerData } = usePlayerDataStore();
  // 現在位置の更新
  useEffect(() => {
    setPlayerData({ currentRoom: "elevator" })
  }, [setPlayerData])

  return (
    <div>Elevator</div>
  )
}

export default Elevator