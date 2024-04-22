"use client"
import { useEffect } from "react"
import Belongings from "~/app/_components/elements/belongings/belongings";
import Floor3Map from "~/app/_components/elements/floormap/floor3/floor3Map";
import DownArrow from "~/app/_components/elements/roomChangeArrow/downArrow/downArrow";
import LeftArrow from "~/app/_components/elements/roomChangeArrow/leftArrow.tsx/leftArrow";
import RightArrow from "~/app/_components/elements/roomChangeArrow/rightArrow/rightArrow";
import UpArrow from "~/app/_components/elements/roomChangeArrow/uparrow.tsx/upArrow";
import NothingBase from "~/app/_components/layout/roomBase/nothingBase";
import { usePlayerDataStore } from "~/store/playerDataStore"

const RestroomComponent = () => {
  const { playerData, setPlayerData } = usePlayerDataStore();
  // 現在位置の更新
  useEffect(() => {
    setPlayerData({ currentRoom: "restroom" })
  }, [setPlayerData])

  return (
    <div>
      <UpArrow floor={0} hrefProps={"elevator"} />
      <RightArrow floor={3} hrefProps={"dragon1"} />
      <DownArrow floor={3} hrefProps={"office"} />
      <LeftArrow floor={3} hrefProps={"openairbath"} />

      <NothingBase currentRoom={"restroom"} />

      <Floor3Map />
      <Belongings />
    </div>
  )
}

export default RestroomComponent