"use client"
import { useEffect } from "react"
import Belongings from "~/app/_components/elements/belongings/belongings";
import Floor3Map from "~/app/_components/elements/floormap/floor3/floor3Map";
import UpArrow from "~/app/_components/elements/roomChangeArrow/uparrow.tsx/upArrow";
import ProbBase from "~/app/_components/layout/roomBase/probBase";
import { usePlayerDataStore } from "~/store/playerDataStore"

const OfficeComponent = () => {
  const { playerData, setPlayerData } = usePlayerDataStore();
  // 現在位置の更新
  useEffect(() => {
    setPlayerData({ currentRoom: "office" })
  }, [setPlayerData])

  return (
    <div>
      <UpArrow floor={3} hrefProps={"restroom"} />

      <ProbBase currentRoom={"office"}/>

      <Floor3Map />
      <Belongings />
    </div>
  )
}

export default OfficeComponent