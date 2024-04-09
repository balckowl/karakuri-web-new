"use client"
import UpArrow from "~/app/_components/elements/roomChangeArrow/uparrow.tsx/upArrow"
import LeftArrow from "~/app/_components/elements/roomChangeArrow/leftArrow.tsx/leftArrow"
import RightArrow from "~/app/_components/elements/roomChangeArrow/RightArrow/rightArrow"
import ProbBase from "~/app/_components/layout/roomBase/probBase"
import Belongings from "~/app/_components/elements/belongings/belongings"
import { usePlayerDataStore } from "~/store/playerDataStore"
import { useEffect } from "react"

import ProbClearAlert from "~/app/_components/elements/probClearAlert/probClearAlert"
import EntranceSendingText from "~/features/floor1/sendingText/entranceSendingText"


const Entrance = () => {
  const { playerData, setPlayerData } = usePlayerDataStore();
  // 現在位置の更新
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
  },[])

  return (
    <div>
      <EntranceSendingText />

      <UpArrow floor={1} hrefProps={"socialroom"}  />
      <RightArrow floor={1} hrefProps={"cafeteria"} />
      <LeftArrow floor={1} hrefProps={"bathroom"} />

      <ProbBase currentRoom={"entrance"}/>

      <Belongings />
      { playerData.gimmicks.prob1_1.isFirstClear &&
        <ProbClearAlert />
      }
    </div>
  )
}

export default Entrance    