"use client"
import { useEffect } from "react";
import { usePlayerDataStore } from "~/store/playerDataStore";
import LeftArrow from "~/app/_components/elements/roomChangeArrow/leftArrow/leftArrow";
import UpArrow from "~/app/_components/elements/roomChangeArrow/upArrow/upArrow";
import NothingBase from "~/app/_components/layout/roomBase/nothingBase";
import Belongings from "~/app/_components/elements/belongings/belongings";
import Floor1Map from "~/app/_components/elements/floormap/floor1/floor1Map";
import { useRouter } from "next/navigation";


const CafeteriaComponent = () => {
  const router = useRouter()
  const { playerData, setPlayerData } = usePlayerDataStore();

  // ページブロック
  useEffect(() => {
    if (playerData.movableRoomList.includes("cafeteria") == true) {
      router.push("/floor1/cafeteria")
    } else {
      router.push("/floor1/rocked")
    }
  }, [playerData])

  // 現在位置の更新
  useEffect(() => {
    setPlayerData({ currentRoom: "cafeteria" })
  }, [setPlayerData])

  return (
    <div>
      {playerData.movableRoomList.includes("cafeteria") &&
        <div>
          <UpArrow floor={1} hrefProps={"kitchen"} />
          <LeftArrow floor={1} hrefProps={"entrance"} />

          <NothingBase currentRoom={"cafeteria"} />

          <Floor1Map />
          <Belongings />
        </div>
      }
    </div>
  )
}

export default CafeteriaComponent