"use client"
import { useRouter } from "next/navigation"
import { useEffect } from "react"
import Belongings from "~/app/_components/elements/belongings/belongings"
import Floor2Map from "~/app/_components/elements/floormap/floor2/floor2Map"
import ProbClearAlert from "~/app/_components/elements/probClearAlert/probClearAlert"
import LeftArrow from "~/app/_components/elements/roomChangeArrow/leftArrow/leftArrow"
import ProbBase from "~/app/_components/layout/roomBase/probBase"
import { usePlayerDataStore } from "~/store/playerDataStore"

const PineComponent = () => {
  const router = useRouter()
  const { playerData, setPlayerData } = usePlayerDataStore();

  // ページブロック
  useEffect(() => {
    if (playerData.movableRoomList.includes("pine") == true) {
      router.push("/floor2/pine")
    } else {
      router.push("/floor2/rocked")
    }
  }, [playerData])

  // 現在位置の更新
  useEffect(() => {
    setPlayerData(
      {
        currentRoom: "pine",
        pine: {
          ...playerData.pine,
          isFirstClear: false,
        }
      }
    )
  }, [setPlayerData])

  return (
    <div>
      {playerData.movableRoomList.includes("pine") &&
        <div>
          <LeftArrow floor={2} hrefProps={"corridor"} />

          <ProbBase currentRoom={"pine"} />
          <Floor2Map />
          <Belongings />

          {playerData.pine.isFirstClear &&
            <ProbClearAlert />
          }
        </div>
      }
    </div>
  )
}

export default PineComponent