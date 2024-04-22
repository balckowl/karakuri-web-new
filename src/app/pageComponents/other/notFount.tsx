"use client"
import { usePlayerDataStore } from "~/store/playerDataStore"
import ItemBase from "~/app/_components/layout/roomBase/itemBase"
import Belongings from "~/app/_components/elements/belongings/belongings"
import NotFoundMap from "~/app/_components/elements/floormap/404/notFoundMap"
import NotFoundSendingText from "~/features/sendingText/notFoundSendingText"

const NotFoundComponent = () => {
  const { playerData } = usePlayerDataStore()
  const currentFloor = playerData.currentFloor
  return (
    <div>
      {currentFloor == -1 ?
        <div className="flex w-full h-[100vh] items-center justify-center">Thank you for playing</div>
        :
        <div>
          {playerData.notFound.isClickList &&
            <div>
              <NotFoundSendingText />
            </div>
          }
          <ItemBase currentRoom="404" />
          <NotFoundMap />
          <Belongings />
        </div>
      }
    </div>
  )
}

export default NotFoundComponent