"use client"
import { useState, useEffect, useMemo } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { usePlayerDataStore } from "~/store/playerDataStore";
import PartSendingText from "~/app/_components/elements/sendingText/partSendingText";

const EntranceSendingText = () => {
  // テキスト
  const entranceTextList = useMemo(() => {
    return {
      0: [
        ["you", "こ、ここは..."],
        ["k-15", "..."],
        ["you", "だ、だれ...?"],
        ["k-15", "私はk-15、あなたの脱出をサポートします"],
        ["you", "よろしく"],
      ],
      1: [
        ["k-15", "先ほど手に入れたアイテムを使うのでしょうか..."],
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


  const eventIndex = playerData.entrance.eventIndex;
  // textIndex が変更されたらレンダリングのトリガーを更新
  useEffect(() => {
    if (0 <= eventIndex) {
      setRenderTrigger(prev => prev + 1);
      if (textIndex == entranceTextList[eventIndex as keyof typeof entranceTextList].length) {
        setPlayerData(
          { 
            entrance: 
            { 
              ...playerData.entrance,
              eventIndex: -1, 
              event0Finished: true,
            } 
          }
        );
        setTextIndex(0);
      }
    }
  }, [textIndex, entranceTextList, eventIndex, setPlayerData]);

  return (
    <div>
      {0 <= eventIndex &&
        <div>
          {/* Entrance */}
          {eventIndex < Object.keys(entranceTextList)?.length && (
            <div>
              <div className="absolute bottom-[50px] left-0 w-full">
                {entranceTextList[eventIndex as keyof typeof entranceTextList][textIndex] &&
                  <div className="relative z-[1000] mx-auto h-[200px] w-4/5">
                    <PartSendingText
                      key={renderTrigger} // レンダリングのトリガーとして使用
                      textList={entranceTextList[eventIndex as keyof typeof entranceTextList][textIndex]}
                      textIndex={textIndex}
                    />
                    {entranceTextList[eventIndex as keyof typeof entranceTextList][textIndex] &&
                      // テキストの背景
                      <motion.div
                        animate={entranceTextList[eventIndex as keyof typeof entranceTextList][textIndex] ?
                          { opacity: [0, 0.8], display: "none" } :
                          { opacity: [0.8, 0], display: "none" }
                        }
                        transition={entranceTextList[eventIndex as keyof typeof entranceTextList][textIndex] ?
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
                {textIndex < entranceTextList[eventIndex as keyof typeof entranceTextList].length &&
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

export default EntranceSendingText;
