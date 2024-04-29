"use client"
import { useRouter } from "next/navigation";
import { useEffect } from "react"
import Belongings from "~/app/_components/elements/belongings/belongings";
import Floor3Map from "~/app/_components/elements/floormap/floor3/floor3Map";
import DownArrow from "~/app/_components/elements/roomChangeArrow/downArrow/downArrow";
import LeftArrow from "~/app/_components/elements/roomChangeArrow/leftArrow/leftArrow";
import RightArrow from "~/app/_components/elements/roomChangeArrow/rightArrow/rightArrow";
import UpArrow from "~/app/_components/elements/roomChangeArrow/upArrow/upArrow";
import NothingBase from "~/app/_components/layout/roomBase/nothingBase";
import { usePlayerDataStore } from "~/store/playerDataStore"

const RestroomComponent = () => {
  const router = useRouter()
  const { playerData, setPlayerData } = usePlayerDataStore();

  // ページブロック
  useEffect(() => {
    if (playerData.movableRoomList.includes("restroom") == true) {
      router.push("/floor3/restroom")
    } else {
      router.push("/floor3/rocked")
    }
  }, [playerData])

  // 現在位置の更新
  useEffect(() => {
    setPlayerData({ currentRoom: "restroom" })
  }, [setPlayerData])

  return (
    <div>
      {playerData.movableRoomList.includes("restroom") &&
        <div>
          <UpArrow floor={0} hrefProps={"elevator"} />
          <RightArrow floor={3} hrefProps={"dragon1"} />
          <DownArrow floor={3} hrefProps={"office"} />
          <LeftArrow floor={3} hrefProps={"openairbath"} />

          <NothingBase currentRoom={"restroom"} />

          <Floor3Map />
          <Belongings />
        </div>
      }
    </div>
  )
}

export default RestroomComponent