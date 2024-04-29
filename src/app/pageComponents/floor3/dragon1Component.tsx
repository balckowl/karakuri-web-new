"use client"
import { useRouter } from "next/navigation";
import { useEffect } from "react"
import Belongings from "~/app/_components/elements/belongings/belongings";
import Floor3Map from "~/app/_components/elements/floormap/floor3/floor3Map";
import LeftArrow from "~/app/_components/elements/roomChangeArrow/leftArrow/leftArrow";
import UpArrow from "~/app/_components/elements/roomChangeArrow/upArrow/upArrow";
import ItemBase from "~/app/_components/layout/roomBase/itemBase";
import { usePlayerDataStore } from "~/store/playerDataStore"

const Dragon1Component = () => {
  const router = useRouter()
  const { playerData, setPlayerData } = usePlayerDataStore();

  // ページブロック
  useEffect(() => {
    if (playerData.movableRoomList.includes("dragon1") == true) {
      router.push("/floor3/dragon1")
    } else {
      router.push("/floor3/rocked")
    }
  }, [playerData])

  // 現在位置の更新
  useEffect(() => {
    setPlayerData({ currentRoom: "dragon1" })
  }, [setPlayerData])

  return (
    <div>
      {playerData.movableRoomList.includes("dragon1") &&
        <div>
          <UpArrow floor={3} hrefProps={"dragon2"} />
          <LeftArrow floor={3} hrefProps={"restroom"} />

          <ItemBase currentRoom="dragon1" />

          <Floor3Map />
          <Belongings />
        </div>
      }
    </div>
  )
}

export default Dragon1Component