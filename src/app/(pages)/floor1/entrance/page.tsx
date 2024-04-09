"use client"
import UpArrow from "~/app/_components/elements/roomChangeArrow/uparrow.tsx/upArrow"
import LeftArrow from "~/app/_components/elements/roomChangeArrow/leftArrow.tsx/leftArrow"
import RightArrow from "~/app/_components/elements/roomChangeArrow/RightArrow/rightArrow"
import ProbBase from "~/app/_components/layout/roomBase/probBase"
import Belongings from "~/app/_components/elements/belongings/belongings"
import { usePlayerDataStore } from "~/store/playerDataStore"
import { useEffect } from "react"
import WholeSendingText from "~/app/_components/elements/sendingText/wholeSendingText"
import ProbClearAlert from "~/app/_components/elements/probClearAlert/probClearAlert"
import DownArrow from "~/app/_components/elements/roomChangeArrow/downArrow/downArrow"

const Entrance = () => {
  const { playerData, setPlayerData } = usePlayerDataStore();
  // 現在位置の更新 && isFirstClearをfalseにする
  useEffect(() =>{
    setPlayerData(
      { 
        currentRoom: "entrance" ,
        gimmicks: {
          prob1_1: {
            ...playerData.gimmicks.prob1_1,
            isFirstClear: false,
          },
          prob1_2: {
            ...playerData.gimmicks.prob1_2,
          }
        }
      }
    )
  },[setPlayerData])

  return (
    <div>
      <WholeSendingText />

      <UpArrow floor={1} hrefProps={"socialroom"}  />
      <RightArrow floor={1} hrefProps={"cafeteria"} />
      <LeftArrow floor={1} hrefProps={"bathroom"} />
      <DownArrow floor={1} hrefProps={"bathroom"} />

      <ProbBase currentRoom={"entrance"}/>

      <Belongings />
      { playerData.gimmicks.prob1_1.isFirstClear &&
        <ProbClearAlert />
      }
    </div>
  )
}

export default Entrance    