"use client"
import UpArrow from "~/app/_components/elements/roomChangeArrow/uparrow.tsx/upArrow"
import LeftArrow from "~/app/_components/elements/roomChangeArrow/leftArrow.tsx/leftArrow"
import RightArrow from "~/app/_components/elements/roomChangeArrow/RightArrow/rightArrow"
import SendingTexts from "~/app/_components/elements/sendingText/sendingTexts"
import ProbBase from "~/app/_components/layout/roomBase/probBase"
import Belongings from "~/app/_components/elements/belongings/belongings"
import { usePlayerDataStore } from "~/store/playerDataStore"
import { useEffect } from "react"

const Entrance = () => {
  const { setPlayerData } = usePlayerDataStore();
  // 現在位置の更新
  useEffect(() =>{
    setPlayerData({ currentRoom: "entrance" })
  },[setPlayerData])

  return (
    <div>
      <SendingTexts />

      <UpArrow floor={1} hrefProps={"socialroom"}  />
      <LeftArrow floor={1} hrefProps={"bathroom"} />
      <RightArrow floor={1} hrefProps={"cafeteria"} />

      <ProbBase currentRoom={"entrance"}/>

      <Belongings />
    </div>
  )
}

export default Entrance    