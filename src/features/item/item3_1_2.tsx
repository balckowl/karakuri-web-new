"use client"
import Image from "next/image";
import { useState } from "react";
import GetItemPopup from "~/app/_components/elements/getItemPopUp/getItemPopUp";
import { usePlayerDataStore } from "~/store/playerDataStore";

const Item3_1_2 = () => {
  const { playerData, setPlayerData } = usePlayerDataStore();
  const preBelongings: string[] = playerData.belongingList;
  const [isGetItem, setIsGetItem] = useState<boolean>(false);

  const getStone = () => {
    setIsGetItem(true);
    // アイテムを取った判定 & 持ち物の追加 & エントランスの会話フラグ
    setPlayerData(
      {
        isGetItems: {
          ...playerData.isGetItems,
          stone: true,
        },
        belongingList: [...preBelongings, "stone"],
      }
    )
  }

  return (
    <div className="flex size-full items-center justify-center">
      {isGetItem &&
        <GetItemPopup>
          <p className="mb-2 text-center font-bold">アイテムを入手しました</p>
          <div className="flex h-[200px] w-[300px] flex-col items-center justify-center">
            <Image src={"/images/floor3/item/stone.png"} width={150} height={150} alt="stone" className="mb-2"></Image>
            <p>石</p>
          </div>
        </GetItemPopup>
      }

      <div onClick={getStone} className="cursor-pointer">
        {playerData.isGetItems.stone == false &&
          <Image src={"/images/floor3/item/stone.png"} width={150} height={150} alt="stone" className="mb-2"></Image>
        }
      </div>

      <div className="absolute left-1/2 top-3/4 -translate-x-1/2">
        <button className="btn" onClick={() => {
          const modal = document.getElementById('my_modal_1') as HTMLDialogElement;
          if (modal) {
            modal.showModal();
          }
        }}><Image src="/images/floor3/gimmick/spanner.png" alt="spanner" width="30" height="30" /></button>
        <dialog id="my_modal_1" className="modal">
          <div className="modal-box">
            <h3 className="text-lg font-bold">クラフト</h3>
            <div className="flex items-center justify-center gap-10">
              <div>
                <div>□</div>
                <div>+</div>
                <div>□</div>
              </div>
              <div>→</div>
              <div>□</div>
            </div>
          </div>
          <form method="dialog" className="modal-backdrop">
            <button>close</button>
          </form>
        </dialog>
      </div>

    </div>
  )
}

export default Item3_1_2