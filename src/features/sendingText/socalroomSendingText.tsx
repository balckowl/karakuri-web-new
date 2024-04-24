"use client"
import { useState, useEffect, useMemo } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { usePlayerDataStore } from "~/store/playerDataStore";
import PartSendingText from "~/app/_components/elements/sendingText/partSendingText";

const SocialroomendingText = () => {
  // テキスト
  const socialroomTextList = useMemo(() => {
    return {
      0: [
        ["you", "暗い！"],
        ["k-15", "うーむ、これじゃどこに何があるか分からないですね"],
        ["you", "明るくしたいな"],
      ],
      1: [
        ["k-15", "明るくなりましたね。"],
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

  const eventIndex = playerData.socialroom.eventIndex;
  // textIndex が変更されたらレンダリングのトリガーを更新
  useEffect(() => {
    if (0 <= eventIndex) {
      setRenderTrigger(prev => prev + 1);
      if (textIndex == socialroomTextList[eventIndex as keyof typeof socialroomTextList].length) {
        setPlayerData(
          {
            socialroom:
            {
              ...playerData.socialroom,
              eventIndex: -1,
              event0Finished: true,
            }
          }
        );
        setTextIndex(0);
      }
    }
  }, [textIndex, socialroomTextList, eventIndex, setPlayerData]);

  return (
    <div>
      {0 <= eventIndex &&
        <div>
          {/* socialroom */}
          {eventIndex < Object.keys(socialroomTextList)?.length && (
            <div>
              <div className="absolute bottom-[50px] left-0 w-full">
                {socialroomTextList[eventIndex as keyof typeof socialroomTextList][textIndex] &&
                  <div className="relative z-[1000] mx-auto h-[200px] w-4/5">
                    <PartSendingText
                      key={renderTrigger} // レンダリングのトリガーとして使用
                      textList={socialroomTextList[eventIndex as keyof typeof socialroomTextList][textIndex]}
                      textIndex={textIndex}
                    />
                    {socialroomTextList[eventIndex as keyof typeof socialroomTextList][textIndex] &&
                      // テキストの背景
                      <motion.div
                        animate={socialroomTextList[eventIndex as keyof typeof socialroomTextList][textIndex] ?
                          { opacity: [0, 0.8], display: "none" } :
                          { opacity: [0.8, 0], display: "none" }
                        }
                        transition={socialroomTextList[eventIndex as keyof typeof socialroomTextList][textIndex] ?
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
                {textIndex < socialroomTextList[eventIndex as keyof typeof socialroomTextList].length &&
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

export default SocialroomendingText;
