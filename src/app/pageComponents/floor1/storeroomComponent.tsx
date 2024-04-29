"use client"
import { useRouter } from "next/navigation";
import React, { useEffect } from "react"
import Belongings from "~/app/_components/elements/belongings/belongings";
import Floor1Map from "~/app/_components/elements/floormap/floor1/floor1Map";
import RightArrow from "~/app/_components/elements/roomChangeArrow/rightArrow/rightArrow"
import ItemBase from "~/app/_components/layout/roomBase/itemBase"
import { usePlayerDataStore } from "~/store/playerDataStore";

const StoreroomComponent = () => {
  const router = useRouter()
  const { playerData, setPlayerData } = usePlayerDataStore();

  // ページブロック
  useEffect(() => {
    if (playerData.movableRoomList.includes("storeroom") == true) {
      router.push("/floor1/storeroom")
    } else {
      router.push("/floor1/rocked")
    }
  }, [playerData])

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

      <ItemBase currentRoom={"storeroom"} />

      <Floor1Map />
      <Belongings />
    </div>
  )
}

export default StoreroomComponent