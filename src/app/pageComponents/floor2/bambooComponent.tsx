"use client"
import { useEffect } from "react"
import Belongings from "~/app/_components/elements/belongings/belongings"
import Floor2Map from "~/app/_components/elements/floormap/floor2/floor2Map"
import ProbClearAlert from "~/app/_components/elements/probClearAlert/probClearAlert"
import UpArrow from "~/app/_components/elements/roomChangeArrow/upArrow/upArrow"
import ProbBase from "~/app/_components/layout/roomBase/probBase"
import { usePlayerDataStore } from "~/store/playerDataStore"

const BambooComponent = () => {
  const { playerData, setPlayerData } = usePlayerDataStore();
  // 現在位置の更新
  useEffect(() => {
    setPlayerData(
      {
        currentRoom: "bamboo",
        bamboo: {
          ...playerData.bamboo,
          isFirstClear: false,
        }
      }
    )
  }, [setPlayerData])

  return (
    <div>
      <UpArrow floor={2} hrefProps={"corridor"} />

      <ProbBase currentRoom={"bamboo"}/>
      <Floor2Map />
      <Belongings />

      {playerData.bamboo.isFirstClear &&
        <ProbClearAlert />
      }
    </div>
  )
}

export default BambooComponent