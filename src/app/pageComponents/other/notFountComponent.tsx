"use client"
import { usePlayerDataStore } from "~/store/playerDataStore"
import ItemBase from "~/app/_components/layout/roomBase/itemBase"
import Belongings from "~/app/_components/elements/belongings/belongings"
import NotFoundMap from "~/app/_components/elements/floormap/notFound/notFoundMap"
import NotFoundSendingText from "~/features/sendingText/notFoundSendingText"

const NotFoundComponent = () => {
  const { playerData } = usePlayerDataStore()
  const currentRoom = playerData.currentRoom
  console.log(currentRoom)
  return (
    <div>
      {currentRoom === "login" ?
        <div className="flex h-screen w-full items-center justify-center">Thank you for playing</div>
        :
        <div>
          {playerData.notFound.isClickList &&
            <div>
              <NotFoundSendingText />
            </div>
          }
          <ItemBase currentRoom="notFound" />
          <NotFoundMap />
          <Belongings />
        </div>
      }
    </div>
  )
}

export default NotFoundComponent