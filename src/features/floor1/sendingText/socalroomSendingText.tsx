"use client"
import { useState, useEffect, useMemo } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { usePlayerDataStore } from "~/store/playerDataStore";
import PartSendingText from "~/app/_components/elements/sendingText/partSendingText";

const SocialSendingText = () => {
  // テキスト
  const socialTextList = useMemo(() => {
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


  const eventIndex = playerData.social.eventIndex;
  // textIndex が変更されたらレンダリングのトリガーを更新
  useEffect(() => {
    if (0 <= eventIndex) {
      setRenderTrigger(prev => prev + 1);
      if (textIndex == socialTextList[eventIndex as keyof typeof socialTextList].length) {
        setPlayerData({ social: { eventIndex: -1, event0Finished: true } });
        setTextIndex(0);
      }
    }
  }, [textIndex, socialTextList, eventIndex, setPlayerData]);

  return (
    <div>
      {0 <= eventIndex &&
        <div>
          {/* social */}
          {eventIndex < Object.keys(socialTextList)?.length && (
            <div>
              <div className="absolute bottom-[50px] left-0 w-full">
                {socialTextList[eventIndex as keyof typeof socialTextList][textIndex] &&
                  <div className="relative z-[1000] mx-auto h-[200px] w-4/5">
                    <PartSendingText
                      key={renderTrigger} // レンダリングのトリガーとして使用
                      textList={socialTextList[eventIndex as keyof typeof socialTextList][textIndex]}
                      textIndex={textIndex}
                    />
                    {socialTextList[eventIndex as keyof typeof socialTextList][textIndex] &&
                      // テキストの背景
                      <motion.div
                        animate={socialTextList[eventIndex as keyof typeof socialTextList][textIndex] ?
                          { opacity: [0, 0.8], display: "none" } :
                          { opacity: [0.8, 0], display: "none" }
                        }
                        transition={socialTextList[eventIndex as keyof typeof socialTextList][textIndex] ?
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
                {textIndex < socialTextList[eventIndex as keyof typeof socialTextList].length &&
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

export default SocialSendingText;
