"use client"
import { useEffect } from "react"
import Belongings from "~/app/_components/elements/belongings/belongings";
import Floor3Map from "~/app/_components/elements/floormap/floor3/floor3Map";
import DownArrow from "~/app/_components/elements/roomChangeArrow/downArrow/downArrow";
import ProbBase from "~/app/_components/layout/roomBase/probBase";
import { usePlayerDataStore } from "~/store/playerDataStore"

const Dragon2Component = () => {
  const { playerData, setPlayerData } = usePlayerDataStore();
  // 現在位置の更新
  useEffect(() => {
    setPlayerData({ currentRoom: "dragon2" })
  }, [setPlayerData])

  return (
    <div>
      <DownArrow  floor={3} hrefProps={"dragon1"}/>

      <ProbBase currentRoom={"dragon2"} />

      <Floor3Map />
      <Belongings />
    </div>
  )
}

export default Dragon2Component