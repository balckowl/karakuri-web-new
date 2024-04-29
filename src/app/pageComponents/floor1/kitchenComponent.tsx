"use client"
import { useEffect } from "react";
import Belongings from "~/app/_components/elements/belongings/belongings"
import ProbClearAlert from "~/app/_components/elements/probClearAlert/probClearAlert"
import DownArrow from "~/app/_components/elements/roomChangeArrow/downArrow/downArrow";
import ProbBase from "~/app/_components/layout/roomBase/probBase"
import { usePlayerDataStore } from "~/store/playerDataStore";
import KitchenSendingText from "~/features/sendingText/kitchenSendingText";
import Floor1Map from "~/app/_components/elements/floormap/floor1/floor1Map";
import { useRouter } from "next/navigation";

const KitchenComponent = () => {
  const router = useRouter()
  const { playerData, setPlayerData } = usePlayerDataStore();

  // ページブロック
  useEffect(() => {
    if (playerData.movableRoomList.includes("kitchen") == true) {
      router.push("/floor1/kitchen")
    } else {
      router.push("/floor1/rocked")
    }
  }, [playerData])

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
  }, [setPlayerData])

  return (
    <div>
      {playerData.movableRoomList.includes("kitchen") &&
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
      }
    </div>
  )
}

export default KitchenComponent