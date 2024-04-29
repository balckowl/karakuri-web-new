"use client"
import Image from "next/image";
import { useState } from "react";
import GetItemPopup from "~/app/_components/elements/getItemPopUp/getItemPopUp";
import { usePlayerDataStore } from "~/store/playerDataStore";

const Item3_1_2 = () => {
  const playSound1 = () => {
    const audio = new Audio("/mp3/fit_item.mp3");
    audio.play();
  };

  const playSound2 = () => {
    const audio = new Audio("/mp3/hammer.mp3");
    audio.play();
  };

  const playSound3 = () => {
    const audio = new Audio("/mp3/item_get.mp3");
    audio.play();
  };

  const { playerData, setPlayerData } = usePlayerDataStore();
  const preBelongings: string[] = playerData.belongingList;
  const [isGetStone, setIsGetStone] = useState<boolean>(false);
  const [isGetHammer, setIsGetHammer] = useState<boolean>(false);

  const getStone = () => {
    playSound3()
    setIsGetStone(true);
    // [石]アイテムを取った判定 & 持ち物の追加
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

  const getHammer = () => {
    playSound3();
    setIsGetHammer(true);
    // [ハンマー]アイテムを取った判定 & 持ち物の追加
    setPlayerData(
      {
        isGetItems: {
          ...playerData.isGetItems,
          hammer: true,
        },
        belongingList: [...preBelongings, "hammer"],
      }
    )
  }

  // ハンマーを作れるか判定
  const canCraft = () => {
    return (playerData.dragon1.upperItem == "stone" && playerData.dragon1.lowerItem == "branchAndRope") || (playerData.dragon1.upperItem == "branchAndRope" && playerData.dragon1.lowerItem == "stone")
  }
  const craftHammer = () => {
    if(canCraft()){
      playSound2()
      setPlayerData(
        {
          dragon1: {
            ...playerData.dragon1,
            upperItem: "*",
            lowerItem: "*",
            craftedItem: "hammer",
          }
        }
      )
    }
  }

  // アイテムボックスにアイテムを入れる
  const fitItem = (id: string) => {
    const belonging = playerData.belonging
    if(belonging == "stone" || belonging == "branchAndRope"){
      playSound1()
      if(id == "upper"){
        setPlayerData(
          {
            belonging: "",
            belongingList: playerData.belongingList.filter(item => item !== belonging),
            dragon1: {
              ...playerData.dragon1,
              upperItem: belonging
            }
          }
        )
      }else if(id == "lower"){
        setPlayerData(
          {
            belonging: "",
            belongingList: playerData.belongingList.filter(item => item !== belonging),
            dragon1: {
              ...playerData.dragon1,
              lowerItem: belonging
            }
          }
        )
      }
    }
  }

  return (
    <div className="flex size-full items-center justify-center">
      {isGetStone &&
        <GetItemPopup>
          <p className="mb-2 text-center font-bold">アイテムを入手しました</p>
          <div className="flex h-[200px] w-[300px] flex-col items-center justify-center">
            <Image src={"/images/floor3/item/stone.png"} width={150} height={150} alt="stone" className="mb-2"></Image>
            <p>石</p>
          </div>
        </GetItemPopup>
      }

      {isGetHammer &&
        <GetItemPopup>
          <p className="mb-2 text-center font-bold">アイテムを入手しました</p>
          <div className="flex h-[200px] w-[300px] flex-col items-center justify-center">
            <Image src={"/images/floor3/item/hammer.png"} width={150} height={150} alt="hammer" className="mb-2"></Image>
            <p>ハンマー</p>
          </div>
        </GetItemPopup>
      }

      <div onClick={getStone} className="cursor-pointer">
        {playerData.isGetItems.stone == false &&
          <Image src={"/images/floor3/item/stone.png"} width={150} height={150} alt="stone" className="mb-2 size-[200px] object-cover"></Image>
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
              <div className="flex flex-col items-center gap-5">
                {/* upper */}
                {playerData.dragon1.upperItem == "" ?
                  <div
                    onClick={() => fitItem("upper")}
                    className="size-[50px] cursor-pointer border-4 border-gray-500 bg-gray-200"
                  ></div>
                : playerData.dragon1.upperItem == "*" ?
                <div
                  className="size-[50px] cursor-pointer border-4 border-gray-500 bg-gray-200"
                ></div>
                : playerData.dragon1.upperItem == "stone" ?
                  <div className="size-[50px] border-4 border-gray-500 bg-gray-200">
                    <Image src={"/images/floor3/item/stone.png"} width={100} height={100} alt="scroll" className="size-[50px] object-cover"></Image>                    
                  </div>
                : playerData.dragon1.upperItem == "branchAndRope" &&
                  <div className="size-[50px] border-4 border-gray-500 bg-gray-200">
                    <Image src={"/images/floor3/item/branch_and_rope.png"} width={100} height={100} alt="scroll" className="size-[40px] object-cover"></Image>                     
                  </div>
                }

                <div className="text-2xl">+</div>

                {/* lower */}
                {playerData.dragon1.lowerItem == "" ?
                  <div
                    onClick={() => fitItem("lower")}
                    className="size-[50px] cursor-pointer border-4 border-gray-500 bg-gray-200"
                  ></div>
                : playerData.dragon1.lowerItem == "*" ?
                  <div
                    className="size-[50px] cursor-pointer border-4 border-gray-500 bg-gray-200"
                  ></div>
                : playerData.dragon1.lowerItem == "stone" ?
                  <div className="size-[50px] border-4 border-gray-500 bg-gray-200">
                    <Image src={"/images/floor3/item/stone.png"} width={100} height={100} alt="scroll" className="size-[50px] object-cover"></Image>                    
                  </div>
                : playerData.dragon1.lowerItem == "branchAndRope" &&
                  <div className="size-[50px] border-4 border-gray-500 bg-gray-200">
                    <Image src={"/images/floor3/item/branch_and_rope.png"} width={100} height={100} alt="scroll" className="size-[40px] object-cover"></Image>                     
                  </div>
                }
              </div>
              <div className="text-2xl">⇒</div>
              {/* crafted */}
              {playerData.dragon1.craftedItem == "" ?
                <div
                  className="size-[50px] border-4 border-gray-500 bg-gray-200"
                ></div>
                : playerData.dragon1.craftedItem == "hammer" &&
                <div>
                  {playerData.isGetItems.hammer == true ?
                    <form method="dialog">
                      <button
                        onClick={getHammer}
                        className="size-[50px] border-4 border-gray-500 bg-gray-200"
                      >                 
                      </button>
                    </form>
                    :
                    <form method="dialog">
                      <button
                        onClick={getHammer}
                        className="size-[50px] border-4 border-gray-500 bg-gray-200"
                      >
                        <Image src={"/images/floor3/item/hammer.png"} width={100} height={100} alt="scroll" className="size-[40px] object-cover"></Image>                     
                      </button>
                    </form>
                  }
                </div>
              }
            </div>
            {/* btn */}
            <div className="mt-4 flex w-full justify-end">
              <button
                onClick={craftHammer}
                className="btn btn-outline"
                disabled={!canCraft()}
              >クラフトする
              </button>
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