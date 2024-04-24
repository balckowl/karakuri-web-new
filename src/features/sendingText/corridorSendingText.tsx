"use client"
import { useState, useEffect, useMemo } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { usePlayerDataStore } from "~/store/playerDataStore";
import PartSendingText from "../../app/_components/elements/sendingText/partSendingText";

const CorridorSendingText = () => {
  // テキスト
  const corriderTextList = useMemo(() => {
    return {
      0: [
        ["k-15", "道が崩壊しているようですね"],
        ["you", "なにか直せるものはないかな"],
      ],
      1: [
        ["k-15", "これで道が直せそうですね"],
        ["you", "やってみる"],
      ],
    };
  }, []);


  // dbに書き換える 
  const { playerData, setPlayerData } = usePlayerDataStore();

  const [textIndex, setTextIndex] = useState<number>(0);
  const [renderTrigger, setRenderTrigger] = useState<number>(0); // レンダリングのトリガー

  // Enter キーが押された時のイベントハンドラ
  const handleKeyPress = (event: KeyboardEvent) => {
    if (event.key === "Enter") {
      setTextIndex((prev) => prev + 1);
    }
  };

  // キーボードイベントのリスナーを設定
  useEffect(() => {
    document.addEventListener("keydown", handleKeyPress);
    return () => {
      document.removeEventListener("keydown", handleKeyPress);
    };
  }, []);


  const eventIndex = playerData.corridor.eventIndex;
  // textIndex が変更されたらレンダリングのトリガーを更新
  useEffect(() => {
    if (0 <= eventIndex) {
      setRenderTrigger(prev => prev + 1);
      if (textIndex == corriderTextList[eventIndex as keyof typeof corriderTextList].length) {
        setPlayerData(
          {
            corridor:
            {
              ...playerData.corridor,
              isTryMove: false,
              eventIndex: 0,
              event0Finished: true
            }
          }
        );
        setTextIndex(0);
      }
    }
  }, [playerData.corridor, textIndex, corriderTextList, eventIndex, setPlayerData]);

  return (
    <div>
      {0 <= eventIndex &&
        <div>
          {/* corrider */}
          {eventIndex < Object.keys(corriderTextList)?.length && (
            <div>
              <div className="absolute bottom-[50px] left-0 w-full">
                {corriderTextList[eventIndex as keyof typeof corriderTextList][textIndex] &&
                  <div className="relative z-[1000] mx-auto h-[200px] w-4/5">
                    <PartSendingText
                      key={renderTrigger} // レンダリングのトリガーとして使用
                      textList={corriderTextList[eventIndex as keyof typeof corriderTextList][textIndex]}
                      textIndex={textIndex}
                    />
                    {corriderTextList[eventIndex as keyof typeof corriderTextList][textIndex] &&
                      // テキストの背景
                      <motion.div
                        animate={corriderTextList[eventIndex as keyof typeof corriderTextList][textIndex] ?
                          { opacity: [0, 0.8], display: "none" } :
                          { opacity: [0.8, 0], display: "none" }
                        }
                        transition={corriderTextList[eventIndex as keyof typeof corriderTextList][textIndex] ?
                          { duration: 1, delay: 0.5 } :
                          { duration: 0.3 }
                        }
                        className="absolute z-[900] mx-auto size-full rounded-md bg-black outline outline-[10px] outline-gray-500"
                      ></motion.div>
                    }
                  </div>
                }
              </div>

              <AnimatePresence>
                {textIndex < corriderTextList[eventIndex as keyof typeof corriderTextList].length &&
                  // テキスト送り中に操作を不能にする
                  <motion.div
                    exit={{ opacity: [0.5, 0], display: "none" }}
                    transition={{ duration: 0.3 }}
                    className="absolute left-0 top-0 z-[800] size-full bg-black opacity-50"
                  ></motion.div>
                }
              </AnimatePresence>
            </div>
          )}
        </div>
      }
    </div>
  );
};

export default CorridorSendingText;
