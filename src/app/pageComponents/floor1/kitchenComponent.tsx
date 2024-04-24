"use client"
import { useEffect } from "react";
import Belongings from "~/app/_components/elements/belongings/belongings"
import ProbClearAlert from "~/app/_components/elements/probClearAlert/probClearAlert"
import DownArrow from "~/app/_components/elements/roomChangeArrow/downArrow/downArrow";
import ProbBase from "~/app/_components/layout/roomBase/probBase"
import { usePlayerDataStore } from "~/store/playerDataStore";
import KitchenSendingText from "~/features/sendingText/kitchenSendingText";
import Floor1Map from "~/app/_components/elements/floormap/floor1/floor1Map";

const KitchenComponent = () => {
  const { playerData, setPlayerData } = usePlayerDataStore();
  // 現在位置の更新
  useEffect(() => {
    setPlayerData(
      {
        currentRoom: "kitchen",
        kitchen: {
          ...playerData.kitchen,
          isFirstClear: false
        }
      }
    )
  }, [playerData.kitchen, setPlayerData])

  return (
    <div>
      {playerData.kitchen.isClickRock &&
        <div>
          <KitchenSendingText />
        </div>
      }

      <DownArrow floor={1} hrefProps={"cafeteria"} />

      <ProbBase currentRoom={"kitchen"} />

      <Floor1Map />
      <Belongings />
      {playerData.kitchen.isFirstClear &&
        <ProbClearAlert />
      }
    </div>
  )
}

export default KitchenComponent