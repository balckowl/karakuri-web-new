"use client"
import { useRouter } from "next/navigation";
import { useEffect } from "react"
import Belongings from "~/app/_components/elements/belongings/belongings";
import Floor3Map from "~/app/_components/elements/floormap/floor3/floor3Map";
import RightArrow from "~/app/_components/elements/roomChangeArrow/rightArrow/rightArrow";
import ItemBase from "~/app/_components/layout/roomBase/itemBase";
import { usePlayerDataStore } from "~/store/playerDataStore"

const OpenAirBathComponent = () => {
  const router = useRouter()
  const { playerData, setPlayerData } = usePlayerDataStore();

  // ページブロック
  useEffect(() => {
    if (playerData.movableRoomList.includes("openairbath") == true) {
      router.push("/floor3/openairbath")
    } else {
      router.push("/floor3/rocked")
    }
  }, [playerData])

  // 現在位置の更新
  useEffect(() => {
    setPlayerData({ currentRoom: "openairbath" })
  }, [setPlayerData])

  return (
    <div>
      {playerData.movableRoomList.includes("openairbath") &&
        <div>
          <RightArrow floor={3} hrefProps={"restroom"} />

          <ItemBase currentRoom={"openairbath"} />

          <Floor3Map />
          <Belongings />
        </div>
      }
    </div>
  )
}

export default OpenAirBathComponent