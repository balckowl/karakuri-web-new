"use client"
import { usePlayerDataStore } from "~/store/playerDataStore"
import ItemBase from "./_components/layout/roomBase/itemBase"
import Belongings from "./_components/elements/belongings/belongings"
import NotFoundMap from "./_components/elements/floormap/404/notFoundMap"
import NotFoundSendingText from "~/features/sendingText/notFoundSendingText"

const NotFound = () => {
  const { playerData } = usePlayerDataStore()
  const currentFloor = playerData.currentFloor
  return (
    <div>
      {currentFloor == -1 ?
        <div>kusira</div>
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

export default NotFound