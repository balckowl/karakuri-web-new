"use client"
import { useEffect } from "react";
import { usePlayerDataStore } from "~/store/playerDataStore";
import LeftArrow from "~/app/_components/elements/roomChangeArrow/leftArrow.tsx/leftArrow";
import UpArrow from "~/app/_components/elements/roomChangeArrow/uparrow.tsx/upArrow";
import NothingBase from "~/app/_components/layout/roomBase/nothingBase";
import Belongings from "~/app/_components/elements/belongings/belongings";

const Cafeteria = () => {
  const { setPlayerData } = usePlayerDataStore();
  // 現在位置の更新
  useEffect(() => {
    setPlayerData({ currentRoom: "cafeteria" })
  }, [])

  return (
    <div>
      <UpArrow floor={1} hrefProps={"kitchen"} />
      <LeftArrow floor={1} hrefProps={"entrance"} />

      <NothingBase currentRoom={"cafeteria"} />

      <Belongings />
    </div>
  )
}

export default Cafeteria