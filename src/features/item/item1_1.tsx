import Image from "next/image";
import { useState } from "react";
import GetItemPopup from "~/app/_components/elements/getItemPopUp/getItemPopUp";
import { usePlayerDataStore } from "~/store/playerDataStore";

const Item1_1 = () => {
  const { playerData, setPlayerData } = usePlayerDataStore();
  const preBelongings: string[] = playerData.belongingList;
  const [isGetItem, setIsGetItem] = useState<boolean>(false);

  const getScrollBar = () => {
    setIsGetItem(true);
    // アイテムを取った判定 & 持ち物の追加 & エントランスの会話フラグ
    setPlayerData(
      {
        isGetItems: {
          ...playerData.isGetItems,
          scrollBar: true,
        },
        belongingList: [...preBelongings, "scrollBar"],
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
            <Image src={"/images/floor1/item/scroll.jpg"} width={150} height={200} alt="scroll" className="mb-2 h-[30px] w-[200px]"></Image>
            <p>スクロールバー</p>
          </div>
        </GetItemPopup>
      }

      <div onClick={getScrollBar} className="cursor-pointer">
        {playerData.isGetItems.scrollBar == false &&
          <Image src={"/images/floor1/item/scroll.jpg"} width={150} height={200} alt="scroll" className="mb-2 h-[30px] w-[200px]"></Image>
        }
      </div>
    </div>
  )
}

export default Item1_1