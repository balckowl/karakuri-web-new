"use client"
import { useState, useEffect, useMemo } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { usePlayerDataStore } from "~/store/playerDataStore";
import PartSendingText from "~/app/_components/elements/sendingText/partSendingText";

const Dragon2SendingText = () => {
  // テキスト
  const dragon2TextList = useMemo(() => {
    return {
      0: [
        ["you", "この石割れ目がある..."],
        ["k-15", "もしかして壊せるのかもしれませんね"],
        ["you", "なにか探してみよう"],
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


  const eventIndex = playerData.dragon2.eventIndex;
  // textIndex が変更されたらレンダリングのトリガーを更新
  useEffect(() => {
    if (0 <= eventIndex) {
      setRenderTrigger(prev => prev + 1);
      if (textIndex == dragon2TextList[eventIndex as keyof typeof dragon2TextList].length) {
        setPlayerData(
          {
            dragon2:
            {
              ...playerData.dragon2,
              isClickRockCrack: false,
              eventIndex: 0,
              event0Finished: true
            }
          }
        );
        setTextIndex(0);
      }
    }
  }, [textIndex, dragon2TextList, eventIndex, setPlayerData]);

  return (
    <div>
      {0 <= eventIndex &&
        <div>
          {/* dragon2 */}
          {eventIndex < Object.keys(dragon2TextList)?.length && (
            <div>
              <div className="absolute bottom-[50px] left-0 w-full">
                {dragon2TextList[eventIndex as keyof typeof dragon2TextList][textIndex] &&
                  <div className="relative z-[1000] mx-auto h-[200px] w-4/5">
                    <PartSendingText
                      key={renderTrigger} // レンダリングのトリガーとして使用
                      textList={dragon2TextList[eventIndex as keyof typeof dragon2TextList][textIndex]}
                      textIndex={textIndex}
                    />
                    {dragon2TextList[eventIndex as keyof typeof dragon2TextList][textIndex] &&
                      // テキストの背景
                      <motion.div
                        animate={dragon2TextList[eventIndex as keyof typeof dragon2TextList][textIndex] ?
                          { opacity: [0, 0.8], display: "none" } :
                          { opacity: [0.8, 0], display: "none" }
                        }
                        transition={dragon2TextList[eventIndex as keyof typeof dragon2TextList][textIndex] ?
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
                {textIndex < dragon2TextList[eventIndex as keyof typeof dragon2TextList].length &&
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

export default Dragon2SendingText;
