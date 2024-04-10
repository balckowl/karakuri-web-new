"use client"
import React, { useEffect } from "react"
import RightArrow from "~/app/_components/elements/roomChangeArrow/rightArrow/rightArrow"
import ItemBase from "~/app/_components/layout/roomBase/itemBase"
import { usePlayerDataStore } from "~/store/playerDataStore";

const Storeroom  = () => {
  const { playerData, setPlayerData } = usePlayerDataStore();
  // 現在位置の更新
  useEffect(() => {
    setPlayerData(
      {
        currentRoom: "storeroom",
        gimmicks: {
          floor1: {
            prob1_1: {
              ...playerData.gimmicks.floor1.prob1_1,
            },
            prob1_2: {
              ...playerData.gimmicks.floor1.prob1_2,
              isFirstClear: false,
            },
            prob1_3: {
              ...playerData.gimmicks.floor1.prob1_3,
            }
          }
        }
      }
    )
  }, [setPlayerData])

  return (
    <div>
      <RightArrow floor={1} hrefProps={"socialroom"} />
      <ItemBase currentRoom={"storeroom"}/>
    </div>
  )
}

export default Storeroom 