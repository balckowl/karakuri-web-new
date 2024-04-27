"use client"
import Image from "next/image";
import { useState } from "react";
import GetItemPopup from "~/app/_components/elements/getItemPopUp/getItemPopUp";
import { usePlayerDataStore } from "~/store/playerDataStore";

const Item2_1 = () => {
  const { playerData, setPlayerData } = usePlayerDataStore();
  const preBelongings: string[] = playerData.belongingList;
  const [isGetItem, setIsGetItem] = useState<boolean>(false);

  const getWoodenBoard = () => {
    setIsGetItem(true);
    // アイテムを取った判定 & 持ち物の追加
    setPlayerData(
      {
        isGetItems: {
          ...playerData.isGetItems,
          woodenBoard: true,
        },
        belongingList: [...preBelongings, "woodenBoard"],
        entrance: { 
          ...playerData.entrance,
          eventIndex: 1,
          event0Finished: true
        }
      }
    )
  }

  return (
    <div className="flex size-full items-center justify-center">
      {isGetItem &&
        <GetItemPopup>
          <p className="mb-2 text-center font-bold">アイテムを入手しました</p>
          <div className="flex h-[200px] w-[300px] flex-col items-center justify-center">
            <Image src={"/images/floor2/item/wooden_board.png"} width={150} height={150} alt="woodenBoard" className="mb-2"></Image>
            <p>木の板</p>
          </div>
        </GetItemPopup>
      }

      <div onClick={getWoodenBoard} className="cursor-pointer">
        {playerData.isGetItems.woodenBoard == false &&
          <Image src={"/images/floor2/item/wooden_board.png"} width={150} height={150} alt="woodenBoard" className="mb-2"></Image>
        }
      </div>
    </div>
  )
}

export default Item2_1