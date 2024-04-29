"use client"
import { useRouter } from "next/navigation"
import { useEffect } from "react"
import Belongings from "~/app/_components/elements/belongings/belongings"
import Floor2Map from "~/app/_components/elements/floormap/floor2/floor2Map"
import RightArrow from "~/app/_components/elements/roomChangeArrow/rightArrow/rightArrow"
import ItemBase from "~/app/_components/layout/roomBase/itemBase"
import { usePlayerDataStore } from "~/store/playerDataStore"

const PlumComponent = () => {
  const router = useRouter()
  const { playerData, setPlayerData } = usePlayerDataStore();

  // ページブロック
  useEffect(() => {
    if (playerData.movableRoomList.includes("plum") == true) {
      router.push("/floor2/plum")
    } else {
      router.push("/floor2/rocked")
    }
  }, [playerData])

  // 現在位置の更新
  useEffect(() => {
    setPlayerData({ currentRoom: "pine" })
  }, [setPlayerData])

  return (
    <div>
      {playerData.movableRoomList.includes("plum") &&
        <div>
          <RightArrow floor={2} hrefProps={"corridor"} />

          <ItemBase currentRoom={"plum"} />

          <Floor2Map />
          <Belongings />
        </div>
      }
    </div>
  )
}

export default PlumComponent