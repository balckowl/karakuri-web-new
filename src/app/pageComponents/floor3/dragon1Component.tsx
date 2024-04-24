"use client"
import { useEffect } from "react"
import Belongings from "~/app/_components/elements/belongings/belongings";
import Floor3Map from "~/app/_components/elements/floormap/floor3/floor3Map";
import LeftArrow from "~/app/_components/elements/roomChangeArrow/leftArrow/leftArrow";
import UpArrow from "~/app/_components/elements/roomChangeArrow/upArrow/upArrow";
import ItemBase from "~/app/_components/layout/roomBase/itemBase";
import { usePlayerDataStore } from "~/store/playerDataStore"

const Dragon1Component = () => {
  const { setPlayerData } = usePlayerDataStore();
  // 現在位置の更新
  useEffect(() => {
    setPlayerData({ currentRoom: "dragon1" })
  }, [setPlayerData])

  return (
    <div>
      <UpArrow floor={3} hrefProps={"dragon2"} />
      <LeftArrow floor={3} hrefProps={"restroom"} />

      <ItemBase currentRoom="dragon1"/>

      <Floor3Map />
      <Belongings />
    </div>
  )
}

export default Dragon1Component