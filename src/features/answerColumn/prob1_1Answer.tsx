"use client"
import { type FormEvent, useState } from "react";
import { usePlayerDataStore } from "~/store/playerDataStore";

const Prob1_1Answer = () => {
  const playSound = () => {
    const audio = new Audio("/mp3/open_door.mp3");
    audio.play();
  };

  const { playerData, setPlayerData } = usePlayerDataStore();
  const [answer, setAnswer] = useState<string>("");

  const sendAnswer = (e: FormEvent) => {
    e.preventDefault();
    if (playerData.entrance.isFirstClear == false && answer == "HELLO") {
      playSound()
      setPlayerData(
        {
          progress: 1,
          movableRoomList: [...playerData.movableRoomList, "cafeteria", "kitchen"],
          entrance: {
            ...playerData.entrance,
            isFirstClear: true,
            isClear: true,
          }
        }
      )
    }
  }

  return (
    <div>
      {playerData.entrance.isClear ? (
        <div
          className="flex gap-2 border-b-2 border-[#ff5160] text-4xl focus-within:border-b-[3px] focus-within:border-purple-600 dark:border-[#ff7d88]"
        >
          <div className="text-[#ff5160] dark:text-[#ff7d88]">A.</div>
          <div className="w-[200px] text-[#ff5160] dark:text-[#ff7d88]">HELLO</div>
        </div>
      ) : (
        <div>
          <form
            onSubmit={(e) => sendAnswer(e)}
            className="flex gap-2 border-b-2 border-black text-4xl focus-within:border-b-[3px] focus-within:border-purple-600 dark:border-white"
          >
            <label htmlFor="ans-prob1_1" className="focus-within:text-purple-600">
              A.
            </label>
            <input id="ans-prob1_1" type="text"
              onChange={(e) => setAnswer(e.target.value)}
              value={answer}
              className="w-[200px] bg-transparent outline-none focus:border-purple-700"
            />
          </form>
        </div>
      )}
    </div>
  )
}

export default Prob1_1Answer