"use client"
import { useEffect } from "react"
import Belongings from "~/app/_components/elements/belongings/belongings"
import Floor1Map from "~/app/_components/elements/floormap/floor1/floor1Map"
import RightArrow from "~/app/_components/elements/roomChangeArrow/rightArrow/rightArrow"
import ItemBase from "~/app/_components/layout/roomBase/itemBase"
import { usePlayerDataStore } from "~/store/playerDataStore"

const Bathroom = () => {
  const { setPlayerData } = usePlayerDataStore();
  // 現在位置の更新
  useEffect(() => {
    setPlayerData({ currentRoom: "bathroom" })
  }, [setPlayerData])

  return (
    <div>
      <RightArrow floor={1} hrefProps={"entrance"} />

      <ItemBase currentRoom={"bathroom"} />

      <Floor1Map />
      <Belongings />
    </div>
  )
}

export default Bathroom