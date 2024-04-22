"use client"
import { useEffect } from "react"
import Belongings from "~/app/_components/elements/belongings/belongings";
import Floor3Map from "~/app/_components/elements/floormap/floor3/floor3Map";
import RightArrow from "~/app/_components/elements/roomChangeArrow/rightArrow/rightArrow";
import ItemBase from "~/app/_components/layout/roomBase/itemBase";
import { usePlayerDataStore } from "~/store/playerDataStore"

const OpenAirBathComponent = () => {
  const { playerData, setPlayerData } = usePlayerDataStore();
  // 現在位置の更新
  useEffect(() => {
    setPlayerData({ currentRoom: "openairbath" })
  }, [setPlayerData])

  return (
    <div>
      <RightArrow floor={3} hrefProps={"restroom"}/>

      <ItemBase currentRoom={"openairbath"}/>

      <Floor3Map />
      <Belongings />
    </div>
  )
}

export default OpenAirBathComponent