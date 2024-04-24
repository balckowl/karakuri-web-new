"use client"
import Image from "next/image";
import { useState } from "react";
import GetItemPopup from "~/app/_components/elements/getItemPopUp/getItemPopUp";
import { usePlayerDataStore } from "~/store/playerDataStore";

const Item3_1_3 = () => {
  const { playerData, setPlayerData } = usePlayerDataStore();
  const preBelongings: string[] = playerData.belongingList;
  const [isGetItem, setIsGetItem] = useState<boolean>(false);

  const getBranchAndRope = () => {
    setIsGetItem(true);
    // アイテムを取った判定 & 持ち物の追加 & エントランスの会話フラグ
    setPlayerData(
      {
        isGetItems: {
          ...playerData.isGetItems,
          branchAndRope: true,
        },
        belongingList: [...preBelongings, "branchAndRope"],
      }
    )
  }

  return (
    <div className="flex size-full items-center justify-center">
      {isGetItem &&
        <GetItemPopup>
          <p className="mb-2 text-center font-bold">アイテムを入手しました</p>
          <div className="flex h-[200px] w-[300px] flex-col items-center justify-center">
            <Image src={"/images/floor3/item/branch_and_rope.png"} width={150} height={150} alt="stone" className="mb-2"></Image>
            <p>木の枝＆紐</p>
          </div>
        </GetItemPopup>
      }

      <div onClick={getBranchAndRope} className="cursor-pointer">
        {playerData.isGetItems.branchAndRope == false &&
          <Image src={"/images/floor3/item/branch_and_rope.png"} width={150} height={150} alt="stone" className="mb-2"></Image>
        }
      </div>
    </div>
  )
}

export default Item3_1_3