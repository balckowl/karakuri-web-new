"use client"
import { useRouter } from "next/navigation";
import { useEffect } from "react"
import Belongings from "~/app/_components/elements/belongings/belongings";
import Floor3Map from "~/app/_components/elements/floormap/floor3/floor3Map";
import UpArrow from "~/app/_components/elements/roomChangeArrow/upArrow/upArrow";
import ProbBase from "~/app/_components/layout/roomBase/probBase";
import { usePlayerDataStore } from "~/store/playerDataStore"

const OfficeComponent = () => {
  const router = useRouter()
  const { playerData, setPlayerData } = usePlayerDataStore();

  // ページブロック
  useEffect(() => {
    if (playerData.movableRoomList.includes("office") == true) {
      router.push("/floor3/office")
    } else {
      router.push("/floor3/rocked")
    }
  }, [playerData])

  // 現在位置の更新
  useEffect(() => {
    setPlayerData({ currentRoom: "office" })
  }, [setPlayerData])

  return (
    <div>
      {playerData.movableRoomList.includes("office") &&
        <div>
          <UpArrow floor={3} hrefProps={"restroom"} />

          <ProbBase currentRoom={"office"} />

          <Floor3Map />
          <Belongings />
        </div>
      }
    </div>
  )
}

export default OfficeComponent