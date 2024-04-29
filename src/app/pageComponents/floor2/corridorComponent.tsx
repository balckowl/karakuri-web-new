"use client"
import { useRouter } from "next/navigation"
import { useEffect } from "react"
import Belongings from "~/app/_components/elements/belongings/belongings"
import Floor2Map from "~/app/_components/elements/floormap/floor2/floor2Map"
import DownArrow from "~/app/_components/elements/roomChangeArrow/downArrow/downArrow"
import LeftArrow from "~/app/_components/elements/roomChangeArrow/leftArrow/leftArrow"
import RightArrow from "~/app/_components/elements/roomChangeArrow/rightArrow/rightArrow"
import UpArrow from "~/app/_components/elements/roomChangeArrow/upArrow/upArrow"
import NothingBase from "~/app/_components/layout/roomBase/nothingBase"
import CorridorSendingText from "~/features/sendingText/corridorSendingText"
import { usePlayerDataStore } from "~/store/playerDataStore"

const CorridorComponent = () => {
  const router = useRouter()
  const { playerData, setPlayerData } = usePlayerDataStore();

  // ページブロック
  useEffect(() => {
    if (playerData.movableRoomList.includes("corridor") == true) {
      router.push("/floor2/corridor")
    } else {
      router.push("/floor2/rocked")
    }
  }, [playerData])

  // 現在位置の更新
  useEffect(() => {
    setPlayerData({ currentRoom: "corridor" })
  }, [setPlayerData])

  return (
    <div>
      {playerData.movableRoomList.includes("corridor") &&
        <div>
          {playerData.corridor.isTryMove &&
            <div>
              <CorridorSendingText />
            </div>
          }
          <UpArrow floor={0} hrefProps={"elevator"} />
          <RightArrow floor={2} hrefProps={"pine"} />
          <DownArrow floor={2} hrefProps={"bamboo"} />
          <LeftArrow floor={2} hrefProps={"plum"} />

          <NothingBase currentRoom="corridor" />
          <Floor2Map />
          <Belongings />
        </div>
      }
    </div>
  )
}

export default CorridorComponent