"use client"
import { type Dispatch, type FormEvent, type SetStateAction, useState } from "react";
import { usePlayerDataStore } from "~/store/playerDataStore";

const Prob2_2Answer = ({
  setTarget,
  setLogList,
  setQuestionCount
}: {
  setTarget: Dispatch<SetStateAction<number>>;
  setLogList: Dispatch<SetStateAction<[string, boolean][]>>;
  setQuestionCount: Dispatch<SetStateAction<number>>;
}) => {
  const { playerData, setPlayerData } = usePlayerDataStore();
  const [answer, setAnswer] = useState<string>("");
  const maxValue = 500

  const desideTarget = () => {
    const tmp = Math.floor(Math.random() * maxValue) + 1
    setTarget(tmp);
    setPlayerData({
      movableRoomList: [...playerData.movableRoomList, "restroom", "openairbath", "dragon1", "dragon2"],
      pine: {
        ...playerData.pine,
        target: tmp
      }
    });
  }

  const sendAnswer = (e: FormEvent) => {
    e.preventDefault();
    if (playerData.pine.isFirstClear == false && Number(answer) == playerData.pine.target) {
      setPlayerData(
        {
          progress: 6,
          pine: {
            ...playerData.pine,
            isFirstClear: true,
            isClear: true,
          }
        }
      )
    } else {
      desideTarget()
      setLogList([]);
      setQuestionCount(0);
    }
  }

  return (
    <div>
      {playerData.pine.isClear ? (
        <div
          className="flex gap-2 border-b-2 border-[#ff5160] text-4xl focus-within:border-b-[3px] focus-within:border-purple-600 dark:border-[#ff7d88]"
        >
          <div className="text-[#ff5160] dark:text-[#ff7d88]">A.</div>
          <div className="w-[200px] text-[#ff5160] dark:text-[#ff7d88]">{playerData.pine.target}</div>
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
            />
          </form>
        </div>
      )}
    </div>
  )
}

export default Prob2_2Answer