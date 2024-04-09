"use client"
import { useState } from "react";
import { usePlayerDataStore } from "~/store/playerDataStore";

const Prob1_2Answer = () => {
  const { playerData, setPlayerData } = usePlayerDataStore();
  const [answer, setAnswer] = useState<string>(playerData.gimmicks.prob1_2.answer)

  const sendAnswer = () => {
    setPlayerData(
      {
        movableRoomList: [...playerData.movableRoomList, "socialroom", "storeroom"],
        gimmicks: {
          prob1_1: {
            ...playerData.gimmicks.prob1_1,
          },
          prob1_2: {
            ...playerData.gimmicks.prob1_2,
            answer: answer
          }
        }
      }
    )
    if (playerData.gimmicks.prob1_2.isFirstClear == false && answer == "PART") {
      setPlayerData(
        {
          movableRoomList: [...playerData.movableRoomList, "socialroom", "storeroom"],
          gimmicks: {
            prob1_1: {
              ...playerData.gimmicks.prob1_1,
            },
            prob1_2: {
              ...playerData.gimmicks.prob1_2,
              isFirstClear: true,
            }
          }
        }
      )
    }
  }

  return (
    <div>
      {/* 回答欄 */}
      <input type="text"
        value={answer}
        placeholder="回答欄"
        onChange={(e) => setAnswer(e.target.value)}
        onKeyPress={(e) => {
          if (e.key === "Enter") {
            // Enter キーが押されたときの処理を記述
            sendAnswer();
          }
        }}
      />
    </div>
  )
}

export default Prob1_2Answer