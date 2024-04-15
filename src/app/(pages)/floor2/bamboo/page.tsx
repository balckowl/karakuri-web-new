"use client"
import { useEffect } from "react"
import Belongings from "~/app/_components/elements/belongings/belongings"
import Floor2Map from "~/app/_components/elements/floormap/floor2/floor2Map"
import LeftArrow from "~/app/_components/elements/roomChangeArrow/leftArrow.tsx/leftArrow"
import ProbBase from "~/app/_components/layout/roomBase/probBase"
import { usePlayerDataStore } from "~/store/playerDataStore"

const Corridor = () => {
  const { setPlayerData } = usePlayerDataStore();
  // 現在位置の更新
  useEffect(() => {
    setPlayerData({ currentRoom: "bamboo" })
  }, [setPlayerData])

  return (
    <div>
      <LeftArrow floor={2} hrefProps={"corridor"} />

      <ProbBase currentRoom={"bamboo"}/>
      <Floor2Map />
      <Belongings />
    </div>
  )
}

export default Corridor