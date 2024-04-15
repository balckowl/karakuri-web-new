"use client"
import { useEffect } from "react"
import Belongings from "~/app/_components/elements/belongings/belongings";
import ProbClearAlert from "~/app/_components/elements/probClearAlert/probClearAlert";
import DownArrow from "~/app/_components/elements/roomChangeArrow/downArrow/downArrow";
import LeftArrow from "~/app/_components/elements/roomChangeArrow/leftArrow.tsx/leftArrow";
import UpArrow from "~/app/_components/elements/roomChangeArrow/uparrow.tsx/upArrow";
import ProbBase from "~/app/_components/layout/roomBase/probBase";
import SocialSendingText from "~/features/floor1/sendingText/socalroomSendingText";
import { usePlayerDataStore } from "~/store/playerDataStore";

const Socialroom = () => {
  const { playerData, setPlayerData } = usePlayerDataStore();
  // 現在位置の更新
  useEffect(() => {
    setPlayerData(
      {
        currentRoom: "socialroom",
        socialroom: {
          ...playerData.socialroom,
          isFirstClear: false,
        }
      }
    )
  }, [setPlayerData])

  return (
    <div>
      <SocialSendingText />
      
      <DownArrow floor={1} hrefProps={"entrance"} />
      {playerData.socialroom.isLighting === false &&
        <div className="absolute left-0 top-0 -z-10 size-full bg-black"></div>
      }

      {/* ライトが点灯したら見えるもの*/}
      <div className={`${playerData.socialroom.isLighting === false && "opacity-0"}`}>
        <UpArrow floor={0} hrefProps={"elevator"} />
        <LeftArrow floor={1} hrefProps={"storeroom"} />

        <ProbBase currentRoom={"socialroom"} />

        <Belongings />

      </div>
      {playerData.socialroom.isFirstClear &&
        <ProbClearAlert />
      }
    </div>
  )
}

export default Socialroom