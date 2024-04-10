"use client"
import UpArrow from "~/app/_components/elements/roomChangeArrow/uparrow.tsx/upArrow"
import LeftArrow from "~/app/_components/elements/roomChangeArrow/leftArrow.tsx/leftArrow"
import RightArrow from "~/app/_components/elements/roomChangeArrow/rightArrow/rightArrow"
import ProbBase from "~/app/_components/layout/roomBase/probBase"
import Belongings from "~/app/_components/elements/belongings/belongings"
import { usePlayerDataStore } from "~/store/playerDataStore"
import { useEffect } from "react"

import ProbClearAlert from "~/app/_components/elements/probClearAlert/probClearAlert"
import EntranceSendingText from "~/features/floor1/sendingText/entranceSendingText"


const Entrance = () => {
  const { playerData, setPlayerData } = usePlayerDataStore();
  // 現在位置の更新
  useEffect(() => {
    setPlayerData(
      {
        currentRoom: "entrance",
        entrance: {
          ...playerData.entrance,
          isFirstClear: false,
        }
      }
    )
  }, [setPlayerData])

  return (
    <div>
      <EntranceSendingText />

      <UpArrow floor={1} hrefProps={"socialroom"} />
      <RightArrow floor={1} hrefProps={"cafeteria"} />
      <LeftArrow floor={1} hrefProps={"bathroom"} />

      <ProbBase currentRoom={"entrance"} />

      <Belongings />
      {playerData.entrance.isFirstClear &&
        <ProbClearAlert />
      }
    </div>
  )
}

export default Entrance    