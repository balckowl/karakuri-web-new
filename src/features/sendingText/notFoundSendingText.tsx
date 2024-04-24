"use client"
import { useState, useEffect, useMemo } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { usePlayerDataStore } from "~/store/playerDataStore";
import PartSendingText from "~/app/_components/elements/sendingText/partSendingText";

const NotFoundSendingText = () => {
  // テキスト
  const notFoundTextList = useMemo(() => {
    return {
      0: [
        ["you", "なんだろうこれ"],
        ["k-15", "もしかしてこの屋敷のすべての部屋ですかね"],
        ["k-15", "最後の文字化けしている部屋はなんだろう"],
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


  const eventIndex = playerData.notFound.eventIndex;
  // textIndex が変更されたらレンダリングのトリガーを更新
  useEffect(() => {
    if (0 <= eventIndex) {
      setRenderTrigger(prev => prev + 1);
      if (textIndex == notFoundTextList[eventIndex as keyof typeof notFoundTextList].length) {
        setPlayerData(
          {
            notFound:
            {
              ...playerData.notFound,
              isClickList: false,
              eventIndex: 0,
              event0Finished: true
            }
          }
        );
        setTextIndex(0);
      }
    }
  }, [playerData.notFound, textIndex, notFoundTextList, eventIndex, setPlayerData]);

  return (
    <div>
      {0 <= eventIndex &&
        <div>
          {/* notFound */}
          {eventIndex < Object.keys(notFoundTextList)?.length && (
            <div>
              <div className="absolute bottom-[50px] left-0 w-full">
                {notFoundTextList[eventIndex as keyof typeof notFoundTextList][textIndex] &&
                  <div className="relative z-[1000] mx-auto h-[200px] w-4/5">
                    <PartSendingText
                      key={renderTrigger} // レンダリングのトリガーとして使用
                      textList={notFoundTextList[eventIndex as keyof typeof notFoundTextList][textIndex]}
                      textIndex={textIndex}
                    />
                    {notFoundTextList[eventIndex as keyof typeof notFoundTextList][textIndex] &&
                      // テキストの背景
                      <motion.div
                        animate={notFoundTextList[eventIndex as keyof typeof notFoundTextList][textIndex] ?
                          { opacity: [0, 0.8], display: "none" } :
                          { opacity: [0.8, 0], display: "none" }
                        }
                        transition={notFoundTextList[eventIndex as keyof typeof notFoundTextList][textIndex] ?
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
                {textIndex < notFoundTextList[eventIndex as keyof typeof notFoundTextList].length &&
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

export default NotFoundSendingText;
