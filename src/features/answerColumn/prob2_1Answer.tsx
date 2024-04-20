"use client"
import { type FormEvent, useState } from "react";
import { usePlayerDataStore } from "~/store/playerDataStore";

const Prob2_1Answer = () => {
  const { playerData, setPlayerData } = usePlayerDataStore();
  const [answer, setAnswer] = useState<string>("");

  const sendAnswer = (e: FormEvent) => {
    e.preventDefault();
    if (playerData.bamboo.isFirstClear == false && answer == "FLOWER") {
      setPlayerData(
        {
          progress: 5,
          movableRoomList: [...playerData.movableRoomList, "pine"],
          bamboo: {
            ...playerData.bamboo,
            isFirstClear: true,
            isClear: true,
          }
        }
      )
    }
  }

  return (
    <div>
      {playerData.bamboo.isClear ? (
        <div
          className="flex gap-2 border-b-2 border-[#ff5160] text-4xl focus-within:border-b-[3px] focus-within:border-purple-600 dark:border-[#ff7d88]"
        >
          <div className="text-[#ff5160] dark:text-[#ff7d88]">A.</div>
          <div className="w-[200px] text-[#ff5160] dark:text-[#ff7d88]">FLOWER</div>
        </div>
      ) : (
        <div>
          <form
            onSubmit={(e) => sendAnswer(e)}
            className="flex gap-2 border-b-2 border-black text-4xl focus-within:border-b-[3px] focus-within:border-purple-600 dark:border-white"
          >
            <label htmlFor="ans-prob2_1" className="focus-within:text-purple-600">
              A.
            </label>
            <input id="ans-prob2_1" type="text"
              onChange={(e) => setAnswer(e.target.value)}
              value={answer}
              className="w-[200px] bg-transparent outline-none focus:border-purple-700"
              placeholder="F .... R"
            />
          </form>
        </div>
      )}
    </div>
  )
}

export default Prob2_1Answer