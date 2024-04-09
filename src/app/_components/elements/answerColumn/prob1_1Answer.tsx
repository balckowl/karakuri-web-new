"use client"
import { useState } from "react";
import { usePlayerDataStore } from "~/store/playerDataStore";

const Prob1_1Answer = () => {
  const { playerData, setPlayerData } = usePlayerDataStore();
  const [answer, setAnswer] = useState<string>(playerData.gimmicks.prob1_1.answer)

  const sendAnswer = () => {
    setPlayerData(
      {
        gimmicks: {
          prob1_1: {
            ...playerData.gimmicks.prob1_1,
            answer: answer,
          },
          prob1_2: {
            ...playerData.gimmicks.prob1_2,
          }
        }
      }
      )
      if(playerData.gimmicks.prob1_1.isFirstClear == false && answer == "HELLO"){
      setPlayerData(
        {
          movableRoomList: [...playerData.movableRoomList, "cafeteria", "kitchen"],
          gimmicks: {
            prob1_1: {
              ...playerData.gimmicks.prob1_1,
              isFirstClear: true,
            },
            prob1_2: {
              ...playerData.gimmicks.prob1_2,
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

export default Prob1_1Answer