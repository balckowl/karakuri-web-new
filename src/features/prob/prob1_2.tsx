"use client"
import Image from "next/image"
import Prob1_2Answer from "~/features/answerColumn/prob1_2Answer";
import { usePlayerDataStore } from "~/store/playerDataStore";

const Prob1_2 = () => {
  const { playerData, setPlayerData } = usePlayerDataStore();

  const ClickRock = () => {
    setPlayerData(
      {
        kitchen: {
          ...playerData.kitchen,
          isClickRock: true,
        },
      }
    )
  }

  return (
  
    <div className="size-full">
      <div className="flex size-full items-center justify-center">
        <div className="relative flex size-max gap-10">
          {["R","I","C","E"].map((char, index) => (
          <div className="relative flex h-[140px] w-[100px] items-center justify-center" key={index}>
            <Image
              src="/images/floor1/prob/prob1_2/rock.png" alt="bathroom" width="2000" height="2000"
              className="absolute cursor-pointer"
              onClick={ClickRock}
            />
            <p className="hidden">Look at the contents of the  &lt;div&gt; below.</p>
            <div>
              <div>
                <p>{char}</p>
              </div>
            </div>
          </div>
          ))}
        </div>
      </div>
      
      {/* 回答欄 */}
      <div className="absolute bottom-10 right-10">
        <Prob1_2Answer />
      </div>

    </div>
  )
}

export default Prob1_2