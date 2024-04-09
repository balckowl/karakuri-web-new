"use client"
import { useEffect } from "react"
import Belongings from "~/app/_components/elements/belongings/belongings"
import RightArrow from "~/app/_components/elements/roomChangeArrow/RightArrow/rightArrow"
import ItemBase from "~/app/_components/layout/roomBase/itemBase"
import { usePlayerDataStore } from "~/store/playerDataStore"

const Bathroom = () => {
  const { setPlayerData } = usePlayerDataStore();
  // 現在位置の更新
  useEffect(() => {
    setPlayerData({ currentRoom: "bathroom" })
  }, [])

  return (
    <div>
      <RightArrow floor={1} hrefProps={"entrance"} />

      <ItemBase currentRoom={"bathroom"} />

      <Belongings />
    </div>
  )
}

export default Bathroom