"use client"
import { useEffect } from "react"
import Belongings from "~/app/_components/elements/belongings/belongings"
import Floor2Map from "~/app/_components/elements/floormap/floor2/floor2Map"
import DownArrow from "~/app/_components/elements/roomChangeArrow/downArrow/downArrow"
import LeftArrow from "~/app/_components/elements/roomChangeArrow/leftArrow.tsx/leftArrow"
import RightArrow from "~/app/_components/elements/roomChangeArrow/rightArrow/rightArrow"
import UpArrow from "~/app/_components/elements/roomChangeArrow/uparrow.tsx/upArrow"
import NothingBase from "~/app/_components/layout/roomBase/nothingBase"
import { usePlayerDataStore } from "~/store/playerDataStore"

const Corridor = () => {
  const { setPlayerData } = usePlayerDataStore();
  // 現在位置の更新
  useEffect(() => {
    setPlayerData({ currentRoom: "corridor" })
  }, [setPlayerData])

  return (
    <div>
      <UpArrow floor={0} hrefProps={"elevator"} />
      <RightArrow floor={2} hrefProps={"plum"} />
      <DownArrow floor={2} hrefProps={"bamboo"} />
      <LeftArrow floor={2} hrefProps={"pine"} />

      <NothingBase currentRoom="corridor"/>
      <Floor2Map />
      <Belongings />
    </div>
  )
}

export default Corridor