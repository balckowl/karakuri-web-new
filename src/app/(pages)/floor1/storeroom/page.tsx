"use client"
import React, { useEffect } from "react"
import RightArrow from "~/app/_components/elements/roomChangeArrow/rightArrow/rightArrow"
import ItemBase from "~/app/_components/layout/roomBase/itemBase"
import { usePlayerDataStore } from "~/store/playerDataStore";

const Storeroom  = () => {
  const { setPlayerData } = usePlayerDataStore();
  // 現在位置の更新
  useEffect(() => {
    setPlayerData(
      {
        currentRoom: "storeroom",
      }
    )
  }, [setPlayerData])

  return (
    <div>
      
      <RightArrow floor={1} hrefProps={"socialroom"} />

      <ItemBase currentRoom={"storeroom"}/>
    </div>
  )
}

export default Storeroom 