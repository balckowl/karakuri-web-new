"use client"
import { usePlayerDataStore } from "~/store/playerDataStore";
import { motion } from "framer-motion"
import Image from "next/image";

const Belongings = () => {
  // dbに書き換える 
  const { playerData, setPlayerData } = usePlayerDataStore();
  const currentRoom = playerData.currentRoom;
  const belongingList = playerData.belongingList;
  const belonging = playerData.belonging;
  const emptys: string[] = ["", "", ""]

  const changeBelonging = (item: string) => {
    setPlayerData({ belonging: item })
  }

  return (
    <motion.div
      animate={playerData[currentRoom]?.event0Finished ? { opacity: [0, 1] } : { opacity: 0 }}
      transition={playerData[currentRoom]?.event0Finished ? { duration: 0.5, delay: 0.7 } : { duration: 0 }}
      className="absolute bottom-[60px] left-[30px] flex h-[50px] w-[150px] flex-col"
    >
      <div className="text-lg font-bold text-black bg-gray-100 border-2 border-black text-center mb-2 w-max px-2">持ち物</div>
      <div className="flex flex-row">
        {emptys.map((_, index: number) => (
          <div key={index}>
            {index <= belongingList.length - 1 ?
              <div
                onClick={() => changeBelonging(belongingList[index]!)}
                className={`size-[50px] cursor-pointer border-4 border-gray-500 ${belongingList[index] == belonging ? "bg-green-400" : "bg-gray-200"}`}
              >
                { belongingList[index] == "scrollBar" ?
                  <div className="flex size-full items-center justify-center">
                    <Image src={"/images/floor1/item/scroll_item.jpg"} width={100} height={100} alt="scrollBar" className="h-[10px] w-[30px] object-cover"></Image>
                  </div>
                : belongingList[index] == "woodenBoard" ?
                  <div className="flex size-full items-center justify-center">
                    <Image src={"/images/floor2/item/wooden_board.png"} width={100} height={100} alt="woodenBoard" className="size-[40px] object-cover"></Image>
                  </div>
                : belongingList[index] == "stone" ?
                  <div className="flex size-full items-center justify-center">
                    <Image src={"/images/floor3/item/stone.png"} width={100} height={100} alt="stone" className="size-[50px] object-cover"></Image>
                  </div>
                : belongingList[index] == "branchAndRope" ?
                  <div>
                    <Image src={"/images/floor3/item/branch_and_rope.png"} width={100} height={100} alt="branchAndRope" className="size-[40px] object-cover"></Image>                    
                  </div>
                : belongingList[index] == "hammer" &&
                  <div>
                    <Image src={"/images/floor3/item/hammer.png"} width={100} height={100} alt="hammer" className="size-[40px] object-cover"></Image>                    
                  </div>
                }
              </div>
              :
              <div
                onClick={() => changeBelonging("")}
                className="size-[50px] border-4 border-gray-500 bg-gray-200"
              ></div>
            }
          </div>
        ))}
      </div>
    </motion.div>
  )
}

export default Belongings