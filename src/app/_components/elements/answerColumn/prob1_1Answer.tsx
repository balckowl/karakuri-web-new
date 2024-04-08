"use client"
import { useState } from "react";
import { usePlayerDataStore } from "~/store/playerDataStore";

const Prob1_1Answer = () => {
  const { playerData, setPlayerData } = usePlayerDataStore();
  const [answer, setAnswer] = useState<string>(playerData.gimmicks.prob1_1.answer)
  const [isClear, setIsClear] = useState<boolean>(false);
  
  const sendAnswer = () => {
    setPlayerData(
      {
        gimmicks: {
          prob1_1: {
            ...playerData.gimmicks.prob1_1,
            answer: answer,
            isClear: answer == "HELLO"
          }
        }
      }
      )
      if(answer == "HELLO"){
      // 初クリアかどうか
      if(playerData.gimmicks.prob1_1.isClear == false){
        setIsClear(true)
      }
      setPlayerData(
        {
          movableRoomList: [...playerData.movableRoomList, "socialroom", "cafeteria"],
          entrance: {
            ...playerData.entrance,
          }
        }
      )
    }
  }

  return (

    <div>
      {isClear &&
        <div className="text-red-500">クリア</div>
      }
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