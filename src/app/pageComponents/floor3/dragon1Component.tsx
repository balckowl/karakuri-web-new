"use client"
import { useEffect } from "react"
import Belongings from "~/app/_components/elements/belongings/belongings";
import Floor3Map from "~/app/_components/elements/floormap/floor3/floor3Map";
import LeftArrow from "~/app/_components/elements/roomChangeArrow/leftArrow.tsx/leftArrow";
import UpArrow from "~/app/_components/elements/roomChangeArrow/uparrow.tsx/upArrow";
import NothingBase from "~/app/_components/layout/roomBase/nothingBase";
import { usePlayerDataStore } from "~/store/playerDataStore"

const Dragon1Component = () => {
  const { playerData, setPlayerData } = usePlayerDataStore();
  // 現在位置の更新
  useEffect(() => {
    setPlayerData({ currentRoom: "dragon1" })
  }, [setPlayerData])

  return (
    <div>
      <UpArrow floor={3} hrefProps={"dragon2"} />
      <LeftArrow floor={3} hrefProps={"restroom"} />

      <NothingBase currentRoom="dragon1"/>

      <Floor3Map />
      <Belongings />
    </div>
  )
}

export default Dragon1Component