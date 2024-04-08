"use client"
import { usePlayerDataStore } from "~/store/playerDataStore";
import { motion } from "framer-motion"

const Belongings = () => {
  // dbに書き換える 
  const { playerData, setPlayerData } = usePlayerDataStore();
  const currentRoom = playerData.currentRoom;
  const belongingList = playerData.belongingList;
  const belonging = playerData.belonging;
  const emptys: string[] = ["", "", "", "", ""];

  const changeBelonging = (item: string) => {
    setPlayerData({ belonging: item })
  }

  return (
    <motion.div
      animate={playerData[currentRoom].event0Finished ? { opacity: [0, 1] } : { opacity: 0 }}
      transition={playerData[currentRoom].event0Finished ? { duration: 0.5, delay: 0.7 } : { duration: 0 }}
      className="absolute bottom-[30px] left-[30px] flex h-[50px] w-[250px]"
    >
      {emptys.map((_, index: number) => (
        <div key={index}>
          {index <= belongingList.length - 1 ?
            <div
              onClick={() => changeBelonging(belongingList[index]!)}
              className={`size-[50px] cursor-pointer border-4 border-gray-500 ${belongingList[index] == belonging ? "bg-green-400" : "bg-white"}`}
            >
              {belongingList[index]}
            </div>
            :
            <div
              onClick={() => changeBelonging("")}
              className="size-[50px] border-4 border-gray-500 bg-white"
            ></div>
          }
        </div>
      ))}
    </motion.div>
  )
}

export default Belongings