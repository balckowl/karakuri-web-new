"use client"
import UpArrow from "~/app/_components/elements/roomChangeArrow/upArrow/upArrow"
import LeftArrow from "~/app/_components/elements/roomChangeArrow/leftArrow/leftArrow"
import RightArrow from "~/app/_components/elements/roomChangeArrow/rightArrow/rightArrow"
import ProbBase from "~/app/_components/layout/roomBase/probBase"
import Belongings from "~/app/_components/elements/belongings/belongings"
import { usePlayerDataStore } from "~/store/playerDataStore"
import { useEffect } from "react"

import ProbClearAlert from "~/app/_components/elements/probClearAlert/probClearAlert"
import EntranceSendingText from "~/features/sendingText/entranceSendingText"
import Floor1Map from "~/app/_components/elements/floormap/floor1/floor1Map"
import { useRouter } from "next/navigation"

const EntranceComponent = () => {
  const router = useRouter()
  const { playerData, setPlayerData } = usePlayerDataStore();

  // ページブロック
  useEffect(() => {
    if (playerData.movableRoomList.includes("entrance") == true) {
      router.push("/floor1/entrance")
    } else {
      router.push("/floor1/rocked")
    }
  }, [playerData])

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
      {playerData.movableRoomList.includes("entrance") &&
        <div>
          <EntranceSendingText />

          <UpArrow floor={1} hrefProps={"socialroom"} />
          <RightArrow floor={1} hrefProps={"cafeteria"} />
          <LeftArrow floor={1} hrefProps={"bathroom"} />

          <Floor1Map />
          <Belongings />
          <ProbBase currentRoom={"entrance"} />

          {playerData.entrance.isFirstClear &&
            <ProbClearAlert />
          }

        </div>
      }
    </div>
  )
}

export default EntranceComponent