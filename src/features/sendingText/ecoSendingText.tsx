"use client"
import { useState, useEffect, useMemo } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { usePlayerDataStore } from "~/store/playerDataStore";
import PartSendingText from "~/app/_components/elements/sendingText/partSendingText";

const EcoSendingText = () => {
  // テキスト
  const ecoTextList = useMemo(() => {
    return {
      0: [
        ["k-15", "これが最後の部屋のようです。"],
        ["you", "ということは出口？"],
        ["k-15", "そのようです。お疲れ様でした。"],
        ["k-15", "これにて案内プログラムを終了します。"],
        ["you", "ありがとう。"],
      ],
    };
  }, []);

  // dbに書き換える 
  const { playerData, setPlayerData } = usePlayerDataStore();

  const [textIndex, setTextIndex] = useState<number>(0);
  const [renderTrigger, setRenderTrigger] = useState<number>(0); // レンダリングのトリガー

  // キーが押された時のイベントハンドラ
  const handleKeyPress = (event: KeyboardEvent) => {
    setTextIndex((prev) => prev + 1);
  };

  // キーボードイベントのリスナーを設定
  useEffect(() => {
    document.addEventListener("keydown", handleKeyPress);
    return () => {
      document.removeEventListener("keydown", handleKeyPress);
    };
  }, []);


  const eventIndex = playerData.eco.eventIndex;
  // textIndex が変更されたらレンダリングのトリガーを更新
  useEffect(() => {
    if (0 <= eventIndex) {
      setRenderTrigger(prev => prev + 1);
      if (textIndex == ecoTextList[eventIndex as keyof typeof ecoTextList].length) {
        setPlayerData(
          { 
            eco: 
            { 
              ...playerData.eco,
              eventIndex: -1, 
              event0Finished: true,
            } 
          }
        );
        setTextIndex(0);
      }
    }
  }, [textIndex, ecoTextList, eventIndex, setPlayerData]);

  return (
    <div>
      {0 <= eventIndex &&
        <div>
          {/* eco */}
          {eventIndex < Object.keys(ecoTextList)?.length && (
            <div>
              <div className="absolute bottom-[50px] left-0 w-full">
                {ecoTextList[eventIndex as keyof typeof ecoTextList][textIndex] &&
                  <div className="relative z-[1000] mx-auto h-[200px] w-4/5">
                    <PartSendingText
                      key={renderTrigger} // レンダリングのトリガーとして使用
                      textList={ecoTextList[eventIndex as keyof typeof ecoTextList][textIndex]}
                      textIndex={textIndex}
                    />
                    {ecoTextList[eventIndex as keyof typeof ecoTextList][textIndex] &&
                      // テキストの背景
                      <motion.div
                        animate={ecoTextList[eventIndex as keyof typeof ecoTextList][textIndex] ?
                          { opacity: [0, 0.8], display: "none" } :
                          { opacity: [0.8, 0], display: "none" }
                        }
                        transition={ecoTextList[eventIndex as keyof typeof ecoTextList][textIndex] ?
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
                {textIndex < ecoTextList[eventIndex as keyof typeof ecoTextList].length &&
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

export default EcoSendingText;
